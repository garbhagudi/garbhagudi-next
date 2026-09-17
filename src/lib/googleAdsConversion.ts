/**
 * Server-side Google Ads click-conversion upload
 * (https://developers.google.com/google-ads/api/docs/conversions/upload-clicks).
 *
 * Called from `src/pages/api/googleAdsConversion.ts` only — never import
 * this from client code, it reads server-only secrets.
 *
 * Auth: standard OAuth2 refresh-token exchange against Google's token
 * endpoint, same shape as the Zoho token exchange in
 * `src/pages/api/createLeads.tsx` (`getAccessToken`), but with the access
 * token's real expiry tracked instead of cached forever.
 *
 * Enhanced Conversions `user_identifiers` (hashed email/phone) are built in
 * `lib/googleAdsEnhancedConversions.ts` — this file only wires them into
 * the upload body.
 */
import { errorMessage } from 'lib/errorMessage';
import { buildUserIdentifiers } from 'lib/googleAdsEnhancedConversions';

const GOOGLE_OAUTH_TOKEN_URL = 'https://oauth2.googleapis.com/token';
const GOOGLE_ADS_API_VERSION = 'v21';

/** Parses a response body as JSON, falling back to the raw text if it isn't valid JSON. */
async function parseJsonOrText(response: Response): Promise<unknown> {
  const text = await response.text();
  if (!text) return {};
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

type CachedToken = { accessToken: string; expiresAt: number };
let cachedToken: CachedToken | null = null;
/** Single-flight guard: a concurrent request reuses this in-flight fetch
 * instead of racing it and hitting Google's token endpoint twice. */
let pendingTokenFetch: Promise<string | null> | null = null;

async function fetchAdsAccessToken(): Promise<string | null> {
  const clientId = process.env.GOOGLE_ADS_CLIENT_ID?.trim();
  const clientSecret = process.env.GOOGLE_ADS_CLIENT_SECRET?.trim();
  const refreshToken = process.env.GOOGLE_ADS_REFRESH_TOKEN?.trim();

  if (!clientId || !clientSecret || !refreshToken) {
    console.error(
      '[google-ads] Missing GOOGLE_ADS_CLIENT_ID / GOOGLE_ADS_CLIENT_SECRET / GOOGLE_ADS_REFRESH_TOKEN'
    );
    return null;
  }

  try {
    const params = new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: 'refresh_token',
    });

    const response = await fetch(GOOGLE_OAUTH_TOKEN_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    });

    const data = (await parseJsonOrText(response)) as {
      access_token?: string;
      expires_in?: number;
      error?: string;
      error_description?: string;
    };

    if (!response.ok || !data.access_token) {
      throw new Error(data.error_description || data.error || `OAuth HTTP ${response.status}`);
    }

    cachedToken = {
      accessToken: data.access_token,
      expiresAt: Date.now() + (data.expires_in ?? 3600) * 1000,
    };
    return cachedToken.accessToken;
  } catch (error) {
    console.error('[google-ads] Failed to fetch access token:', errorMessage(error));
    return null;
  }
}

/**
 * Refresh-token → access-token exchange. Cached in memory for the life of
 * the serverless instance, refreshed a minute before actual expiry so a
 * slow request never uses a token that expires mid-flight. Concurrent
 * cache misses share one in-flight fetch rather than each firing their own.
 */
async function getAdsAccessToken(): Promise<string | null> {
  const now = Date.now();
  if (cachedToken && cachedToken.expiresAt - 60_000 > now) {
    return cachedToken.accessToken;
  }
  if (pendingTokenFetch) {
    return pendingTokenFetch;
  }
  pendingTokenFetch = fetchAdsAccessToken().finally(() => {
    pendingTokenFetch = null;
  });
  return pendingTokenFetch;
}

/**
 * `yyyy-MM-dd HH:mm:ss+HH:mm` in Asia/Kolkata, e.g. `2026-09-14 18:32:45+05:30`
 * — the exact format `ClickConversion.conversion_date_time` requires.
 * India doesn't observe DST, so a fixed `+05:30` suffix is correct year-round.
 */
export function formatConversionDateTime(date: Date): string {
  const fmt = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });
  const parts = fmt.formatToParts(date);
  const v = (t: Intl.DateTimeFormatPartTypes) =>
    parts.find((p) => p.type === t)?.value.padStart(2, '0') ?? '00';
  return `${v('year')}-${v('month')}-${v('day')} ${v('hour')}:${v('minute')}:${v('second')}+05:30`;
}

export type UploadClickConversionParams = {
  gclid: string;
  /** Digits-only conversion action id; falls back to `GOOGLE_ADS_CONVERSION_ACTION_ID`. */
  conversionActionId?: string;
  /** Per-submission id for dedup / later value adjustments. */
  orderId?: string;
  conversionDateTime?: Date;
  /** Enhanced Conversions — hashed server-side, never accepted pre-hashed. */
  email?: string;
  phone?: string;
};

export type UploadClickConversionResult = { ok: boolean; error?: string; raw?: unknown };

/**
 * Uploads a single click conversion via `ConversionUploadService.UploadClickConversions`.
 * Never throws — callers (the API route) should treat this as best-effort
 * and never let it block or fail the actual lead submission.
 */
export async function uploadClickConversion(
  params: UploadClickConversionParams
): Promise<UploadClickConversionResult> {
  const gclid = params.gclid?.trim();
  if (!gclid) {
    return { ok: false, error: 'Missing gclid' };
  }

  const developerToken = process.env.GOOGLE_ADS_DEVELOPER_TOKEN?.trim();
  const customerId = process.env.GOOGLE_ADS_CUSTOMER_ID?.trim();
  const loginCustomerId = process.env.GOOGLE_ADS_LOGIN_CUSTOMER_ID?.trim();
  const conversionActionId =
    params.conversionActionId?.trim() || process.env.GOOGLE_ADS_CONVERSION_ACTION_ID?.trim();

  if (!developerToken || !customerId || !conversionActionId) {
    const error =
      'Missing GOOGLE_ADS_DEVELOPER_TOKEN / GOOGLE_ADS_CUSTOMER_ID / GOOGLE_ADS_CONVERSION_ACTION_ID';
    console.error('[google-ads]', error);
    return { ok: false, error };
  }

  const accessToken = await getAdsAccessToken();
  if (!accessToken) {
    return { ok: false, error: 'Failed to obtain Google Ads OAuth access token' };
  }

  const conversionDateTime = formatConversionDateTime(params.conversionDateTime ?? new Date());
  const userIdentifiers = buildUserIdentifiers(params.email, params.phone);

  const body = {
    conversions: [
      {
        gclid,
        conversion_action: `customers/${customerId}/conversionActions/${conversionActionId}`,
        conversion_date_time: conversionDateTime,
        ...(params.orderId ? { order_id: params.orderId } : {}),
        ...(userIdentifiers.length ? { user_identifiers: userIdentifiers } : {}),
        /* No CMP/consent platform exists on this site today (checked — no
         * cookie-consent library anywhere). Defaulting both to GRANTED is
         * an assumption, not a verified legal position — revisit if EEA/UK/
         * CH traffic starts mattering for this account. */
        consent: {
          ad_user_data: 'GRANTED',
          ad_personalization: 'GRANTED',
        },
      },
    ],
    partial_failure: true,
  };

  const url = `https://googleads.googleapis.com/${GOOGLE_ADS_API_VERSION}/customers/${customerId}:uploadClickConversions`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
        'developer-token': developerToken,
        ...(loginCustomerId ? { 'login-customer-id': loginCustomerId } : {}),
      },
      body: JSON.stringify(body),
    });

    const data = await parseJsonOrText(response);

    if (!response.ok) {
      console.error('[google-ads] uploadClickConversions HTTP error', response.status, data);
      return { ok: false, error: `HTTP ${response.status}`, raw: data };
    }

    /* HTTP 200 doesn't mean every conversion succeeded — with
     * `partial_failure: true`, a malformed entry comes back as a
     * `partialFailureError` inside an otherwise-200 response. */
    const partialFailureError = (data as { partialFailureError?: unknown })?.partialFailureError;
    if (partialFailureError) {
      console.error('[google-ads] uploadClickConversions partial failure', partialFailureError);
      return { ok: false, error: 'Partial failure', raw: data };
    }

    return { ok: true, raw: data };
  } catch (error) {
    const msg = errorMessage(error);
    console.error('[google-ads] uploadClickConversions request failed:', msg);
    return { ok: false, error: msg };
  }
}
