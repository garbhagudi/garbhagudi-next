/**
 * Zoho Forms native HTML POST target — copy the `action` URL from
 * Zoho Share → Embed → HTML/CSS (form tag). Submissions are sent
 * straight from the browser as `multipart/form-data`; there's no
 * server-side proxy.
 *
 * The default value is the same form GarbhaGudi uses on `dash-ivf-next`.
 * Override per environment with `NEXT_PUBLIC_ZOHO_FORM_ACTION_URL`.
 */
const DEFAULT_ACTION =
  'https://forms.zohopublic.com/GarbhaGudiIVFCentre/form/GG/formperma/KmrIM1SMpY6gHfnIViilsu7uT_rBS3EbvFfnCqaLSX0/htmlRecords/submit';

export const zohoFormActionUrl =
  process.env.NEXT_PUBLIC_ZOHO_FORM_ACTION_URL?.trim() || DEFAULT_ACTION;

/**
 * Optional post-submit redirect (`zf_redirect_url`). Leave empty to fall
 * back to `<origin>/thank-you` at runtime. If the value here is set it
 * wins on every submit.
 */
export const zohoFormRedirectUrl = process.env.NEXT_PUBLIC_ZOHO_FORM_REDIRECT_URL?.trim() || '';

/** Source attribution defaults — same intent as the previous CRM payload. */
export const zohoLeadSource = 'Online';
export const zohoLeadSubSource = 'GarbhaGudi-IVF';

/**
 * Zoho Forms `<input name="…">` for source attribution. These must match
 * real fields on the Zoho form (Share → Embed → HTML/CSS reveals the
 * names). Override via env if your form uses different names.
 */
export const zohoFormLeadSourceFieldName =
  process.env.NEXT_PUBLIC_ZOHO_FORM_FIELD_LEAD_SOURCE?.trim() || 'Lead_Source';

export const zohoFormLeadSubSourceFieldName =
  process.env.NEXT_PUBLIC_ZOHO_FORM_FIELD_LEAD_SUB_SOURCE?.trim() || 'Lead_Sub_Source';

export const zohoFormUtmDetailsFieldName =
  process.env.NEXT_PUBLIC_ZOHO_FORM_FIELD_UTM_DETAILS?.trim() || 'UTM_Campaign_Details';

/**
 * Google reCAPTCHA v2 (Checkbox) site key — public, safe to ship.
 * The matching secret stays server-only in `RECAPTCHA_SECRET_KEY`.
 *
 * Must be a v2 key. v3 keys silently no-op because they don't expose
 * `grecaptcha.render`.
 */
export const recaptchaSiteKey =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY?.trim() || '6LcWOt8sAAAAABDnmimSTmWdk6VBVL4Ow0a92Y_2';
