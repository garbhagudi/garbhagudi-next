/**
 * Fire-and-forget client-side trigger for `/api/googleAdsConversion`.
 *
 * Every lead-form submit path in this repo ends in a *native* browser POST
 * (`form.submit()`) that immediately navigates the page away to Zoho. A
 * plain `fetch` can be cancelled mid-flight by that navigation, so this
 * uses `keepalive: true` and must be called synchronously *before*
 * `form.submit()` — never awaited, never allowed to block or fail the
 * actual lead submission.
 *
 * `email`/`phone` are optional Enhanced Conversions identifiers — sent as
 * plain values, hashed server-side only (`src/lib/googleAdsConversion.ts`),
 * never hashed here. `name` is accepted for forward-compatibility but not
 * sent as an identifier yet: Google's `address_info` identifier needs a
 * postal code this form doesn't collect, so it would be half-built.
 */
export type GoogleAdsConversionLead = {
  gclid: string;
  orderId?: string;
  name?: string;
  phone?: string;
  email?: string;
};

export function reportGoogleAdsConversion(lead: GoogleAdsConversionLead): void {
  if (typeof window === 'undefined' || !lead.gclid) return;

  try {
    fetch('/api/googleAdsConversion', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        gclid: lead.gclid,
        orderId: lead.orderId,
        phone: lead.phone,
        email: lead.email,
      }),
      keepalive: true,
    }).catch(() => {
      /* Best-effort — never surface this to the user or block submission. */
    });
  } catch {
    /* keepalive fetch can throw synchronously in some browsers if the
     * payload exceeds the keepalive size limit; ignore either way. */
  }
}

/** Simple per-submission id for Google Ads conversion dedup / adjustments. */
export function generateConversionOrderId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}
