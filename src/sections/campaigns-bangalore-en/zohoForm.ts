/**
 * Field names and attribution defaults shared by the four campaign forms.
 * Each campaign's form action URL and thank-you page live in campaigns.ts.
 */

export const zohoLeadSource = 'Online';
export const zohoLeadSubSource = 'GarbhaGudi-IVF';

/** HTTP POST `name` for each box — must match the Zoho HTML/CSS embed. */
export const zohoFormLeadSourceFieldName =
  process.env.NEXT_PUBLIC_LANDING_NEXT_ZOHO_FORM_FIELD_LEAD_SOURCE?.trim() || 'Lead_Source';

export const zohoFormLeadSubSourceFieldName =
  process.env.NEXT_PUBLIC_LANDING_NEXT_ZOHO_FORM_FIELD_LEAD_SUB_SOURCE?.trim() || 'Lead_Sub_Source';

/** Combined `utm_source=… | utm_medium=…` field. */
export const zohoFormUtmDetailsFieldName =
  process.env.NEXT_PUBLIC_LANDING_NEXT_ZOHO_FORM_FIELD_UTM_DETAILS?.trim() ||
  'UTM_Campaign_Details';

/** Optional defaults for UTM when the URL has no utm_* query params. */
export const zohoDefaultUtm = {
  utm_source: process.env.NEXT_PUBLIC_LANDING_NEXT_DEFAULT_UTM_SOURCE?.trim() || '',
  utm_medium: process.env.NEXT_PUBLIC_LANDING_NEXT_DEFAULT_UTM_MEDIUM?.trim() || '',
  utm_campaign: process.env.NEXT_PUBLIC_LANDING_NEXT_DEFAULT_UTM_CAMPAIGN?.trim() || '',
  utm_term: process.env.NEXT_PUBLIC_LANDING_NEXT_DEFAULT_UTM_TERM?.trim() || '',
  utm_content: process.env.NEXT_PUBLIC_LANDING_NEXT_DEFAULT_UTM_CONTENT?.trim() || '',
};
