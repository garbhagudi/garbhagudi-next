/**
 * Verifies a Google reCAPTCHA v2 (Checkbox) token server-side before the
 * Zoho Forms `htmlRecords/submit` POST is allowed to fire.
 *
 * Browser collects the token from the rendered widget via
 * `grecaptcha.getResponse(widgetId)` and sends `{ token }` here as JSON.
 * We forward `secret + response (+ remoteip)` to Google's siteverify and
 * return `{ ok: boolean, error?, codes? }`.
 *
 * The secret is read from `RECAPTCHA_SECRET_KEY` (server-only — no
 * `NEXT_PUBLIC_` prefix → never bundled into the browser). The fallback
 * matches the v2 keys used by `dash-ivf-next`; rotate via env at deploy
 * time to keep it out of the source tree.
 */
import type { NextApiRequest, NextApiResponse } from 'next';

const RECAPTCHA_SECRET =
  process.env.RECAPTCHA_SECRET_KEY?.trim() ||
  '6LcWOt8sAAAAAJXhE052WghZb34V7eym_--zA3g3';

const SITEVERIFY_URL = 'https://www.google.com/recaptcha/api/siteverify';

type SiteverifyResponse = {
  success?: boolean;
  challenge_ts?: string;
  hostname?: string;
  'error-codes'?: string[];
};

function getClientIp(req: NextApiRequest): string {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string' && forwarded.length > 0) {
    return forwarded.split(',')[0].trim();
  }
  return req.socket?.remoteAddress || '';
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method Not Allowed' });
  }

  const body = (req.body || {}) as { token?: unknown };
  const token = String(body.token ?? '').trim();
  if (!token) {
    return res
      .status(400)
      .json({ ok: false, error: 'Please confirm you are not a robot.' });
  }

  if (!RECAPTCHA_SECRET) {
    return res
      .status(500)
      .json({ ok: false, error: 'reCAPTCHA secret is not configured.' });
  }

  try {
    const params = new URLSearchParams();
    params.append('secret', RECAPTCHA_SECRET);
    params.append('response', token);
    const ip = getClientIp(req);
    if (ip) params.append('remoteip', ip);

    const upstream = await fetch(SITEVERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    });

    const data = (await upstream.json()) as SiteverifyResponse;
    /* v2 success response shape:
     *   { success: true, challenge_ts, hostname, ... }
     * Failures include `error-codes` such as `timeout-or-duplicate`,
     * `invalid-input-response`, `invalid-input-secret`, etc. */
    if (data?.success === true) {
      return res.status(200).json({ ok: true });
    }
    return res.status(200).json({
      ok: false,
      error: 'Verification failed. Please retry the checkbox and try again.',
      codes: Array.isArray(data?.['error-codes']) ? data['error-codes'] : [],
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error:
        error instanceof Error
          ? error.message
          : 'Verification request failed.',
    });
  }
}
