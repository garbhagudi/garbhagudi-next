/**
 * gclid helpers ported from dash-ivf-next (`lib/zohoCrmLeadPayload`). The
 * shared `lib/zohoFormUtm` has no equivalent: these drop placeholder values
 * ("undefined", an unfilled "{gclid}"), and `captureGclid` persists the click
 * id to a cookie + sessionStorage so it survives until the form is submitted.
 */

const GCLID_COOKIE = 'gclid';
const GCLID_STORAGE_KEY = 'gads_gclid';
const GCLID_TTL_DAYS = 90;

/** Ignore empty / placeholder values such as "undefined", "null" or an unfilled "{gclid}" template. */
export function cleanGclid(value: unknown): string {
  const v = String(value ?? '').trim();
  if (!v || /^(undefined|null|nan|false)$/i.test(v) || /[{}]/.test(v)) return '';
  return v;
}

/** Remove stale placeholder values (e.g. a cookie literally set to "undefined"). */
function purgeInvalidGclid() {
  try {
    const m = document.cookie.match(/(?:^|; )gclid=([^;]*)/);
    if (m) {
      let raw = m[1];
      try {
        raw = decodeURIComponent(raw);
      } catch {
        /* keep raw */
      }
      if (!cleanGclid(raw)) {
        document.cookie = `${GCLID_COOKIE}=; path=/; max-age=0; SameSite=Lax`;
      }
    }
  } catch {
    /* ignore */
  }
  try {
    const s = sessionStorage.getItem(GCLID_STORAGE_KEY);
    if (s !== null && !cleanGclid(s)) sessionStorage.removeItem(GCLID_STORAGE_KEY);
  } catch {
    /* ignore */
  }
}

/**
 * Persist `?gclid=` from the landing URL (cookie + sessionStorage) so it survives
 * navigation to other pages before the form is submitted. Call on every page load.
 */
export function captureGclid() {
  if (typeof window === 'undefined') return;
  purgeInvalidGclid();
  const gclid = cleanGclid(new URLSearchParams(window.location.search).get('gclid'));
  if (!gclid) return;
  try {
    const maxAge = GCLID_TTL_DAYS * 24 * 60 * 60;
    document.cookie = `${GCLID_COOKIE}=${encodeURIComponent(gclid)}; path=/; max-age=${maxAge}; SameSite=Lax`;
  } catch {
    /* ignore */
  }
  try {
    sessionStorage.setItem(GCLID_STORAGE_KEY, gclid);
  } catch {
    /* ignore */
  }
}

/** Latest GCLID: current URL > cookie > sessionStorage. Empty string if none. */
export function readGclid(): string {
  if (typeof window === 'undefined') return '';
  const fromUrl = cleanGclid(new URLSearchParams(window.location.search).get('gclid'));
  if (fromUrl) return fromUrl;
  const m = document.cookie.match(/(?:^|; )gclid=([^;]+)/);
  if (m) {
    let fromCookie: string;
    try {
      fromCookie = cleanGclid(decodeURIComponent(m[1]));
    } catch {
      fromCookie = cleanGclid(m[1]);
    }
    if (fromCookie) return fromCookie;
  }
  try {
    return cleanGclid(sessionStorage.getItem(GCLID_STORAGE_KEY));
  } catch {
    return '';
  }
}
