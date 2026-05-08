/**
 * UTM + attribution helpers for the Zoho Forms `htmlRecords/submit` POST.
 *
 * UTMs can come from three sources, in priority order (later wins):
 *   1. Cookies — covers SPA navigations and Zoho's `ZFAdvLead` tracker
 *      (organic / referral / gclid auto-attribution).
 *   2. Next.js `router.query` — fast & SSR-safe, but lags briefly on
 *      route transitions.
 *   3. `window.location.search` — authoritative at submit time.
 */

const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
] as const;

export type UtmKey = (typeof UTM_KEYS)[number];
export type UtmMap = Partial<Record<UtmKey, string>>;

function firstQueryValue(value: unknown): string {
  if (value == null) return '';
  if (Array.isArray(value)) return String(value[0] ?? '').trim();
  return String(value).trim();
}

export function utmFromRouterQuery(
  query: Record<string, unknown> | undefined | null,
): UtmMap {
  if (!query || typeof query !== 'object') return {};
  const out: UtmMap = {};
  UTM_KEYS.forEach((k) => {
    const v = firstQueryValue(query[k]);
    if (v) out[k] = v;
  });
  return out;
}

export function utmFromWindowLocation(): UtmMap {
  if (typeof window === 'undefined') return {};
  const sp = new URLSearchParams(window.location.search);
  const out: UtmMap = {};
  UTM_KEYS.forEach((k) => {
    const v = (sp.get(k) || '').trim();
    if (v) out[k] = v;
  });
  return out;
}

function readCookieMap(): Record<string, string> {
  if (typeof document === 'undefined' || !document.cookie) return {};
  const map: Record<string, string> = {};
  for (const part of document.cookie.split('; ')) {
    const eq = part.indexOf('=');
    if (eq === -1) continue;
    map[part.slice(0, eq)] = part.slice(eq + 1);
  }
  return map;
}

function decodeMaybe(raw: string): string {
  try {
    return decodeURIComponent(raw).trim();
  } catch {
    return raw.trim();
  }
}

export function utmFromCookies(): UtmMap {
  const map = readCookieMap();
  const out: UtmMap = {};
  UTM_KEYS.forEach((k) => {
    const raw = map[k];
    if (!raw) return;
    const v = decodeMaybe(raw);
    if (v) out[k] = v;
  });
  return out;
}

/**
 * Best-effort gclid — first looks for the canonical `gclid` cookie, then
 * the GA `_gcl_aw` cookie which embeds the click id after a dotted prefix.
 */
export function gclidFromCookies(): string {
  const map = readCookieMap();
  if (map.gclid) return decodeMaybe(map.gclid);
  if (map._gcl_aw) {
    const decoded = decodeMaybe(map._gcl_aw);
    const parts = decoded.split('.');
    return parts[parts.length - 1] || '';
  }
  return '';
}

/**
 * Single-line summary like `utm_source=google | utm_medium=cpc | …`,
 * suitable for a "UTM Campaign Details" field on the Zoho form.
 */
export function buildUtmDetailsLine(utm: UtmMap): string {
  const parts: string[] = [];
  UTM_KEYS.forEach((k) => {
    const v = utm[k];
    if (v) parts.push(`${k}=${v}`);
  });
  return parts.join(' | ');
}
