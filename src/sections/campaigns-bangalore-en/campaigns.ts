/**
 * The four ad-channel copies of the Bangalore IVF landing page. Each has its
 * own URL, its own Zoho form and its own thank-you page (`${path}/thank-you`),
 * so GTM can count each channel's conversions separately.
 *
 * To connect a channel's form, paste the `action` URL from Zoho Forms →
 * Share → Embed → **HTML/CSS** (the iframe embed uses a different formperma
 * key). It looks like:
 *   https://forms.zohopublic.com/GarbhaGudiIVFCentre/form/<FormName>/formperma/<key>/htmlRecords/submit
 * The dash-ivf-next home page posts to the "BookyourConsultationcom" form.
 *
 * While `zohoFormActionUrl` is empty the form validates but submits nowhere
 * (see ZohoLeadForm) — don't send traffic to a channel before it's connected.
 */
export type Campaign = {
  path: string;
  zohoFormActionUrl: string;
};

export const CAMPAIGNS: Record<'search' | 'pmax' | 'dgen' | 'meta', Campaign> = {
  // Search Campaign — Zoho Form 1
  search: { path: '/campaigns/in/en/ivf-treatment-bangalore', zohoFormActionUrl: '' },
  // Performance Max — Zoho Form 2
  pmax: { path: '/campaigns/in/en/ivf-pm', zohoFormActionUrl: '' },
  // Demand Gen — Zoho Form 3
  dgen: { path: '/campaigns/in/en/ivf-dg', zohoFormActionUrl: '' },
  // Meta — Zoho Form 4
  meta: { path: '/campaigns/in/en/ivf-meta', zohoFormActionUrl: '' },
};

export const thankYouPath = (campaign: Campaign) => `${campaign.path}/thank-you`;
