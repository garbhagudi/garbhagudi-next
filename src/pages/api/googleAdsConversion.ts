/**
 * Uploads a Google Ads click conversion for a lead-form submission
 * (https://developers.google.com/google-ads/api/docs/conversions/upload-clicks).
 *
 * Called from the browser right before the native Zoho form POST navigates
 * away (see `src/sections/LandingPages/Performant/form.tsx` and
 * `src/sections/LandingPages/Performant/zohoFormGpt.tsx`), using
 * `fetch(..., { keepalive: true })` so the request survives the page
 * unload. This route must never block or fail a lead submission — it
 * always resolves with a 200 and logs failures server-side only.
 */
import type { NextApiRequest, NextApiResponse } from 'next';

import { uploadClickConversion } from 'lib/googleAdsConversion';

type Body = {
  gclid?: unknown;
  orderId?: unknown;
  /** Enhanced Conversions — hashed server-side in `uploadClickConversion`, never pre-hashed here. */
  email?: unknown;
  phone?: unknown;
};

/** Coerces to a trimmed string, or `undefined` if empty — for optional body fields. */
function clean(value: unknown): string | undefined {
  return String(value ?? '').trim() || undefined;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method Not Allowed' });
  }

  const body = (req.body || {}) as Body;
  const gclid = clean(body.gclid) ?? '';
  const orderId = clean(body.orderId);
  const email = clean(body.email);
  const phone = clean(body.phone);

  if (!gclid) {
    /* Not an error worth logging — most sessions have no gclid (organic,
     * direct, non-Google-Ads traffic). Nothing to upload. */
    return res.status(200).json({ ok: false, error: 'Missing gclid' });
  }

  const result = await uploadClickConversion({ gclid, orderId, email, phone });
  return res.status(200).json(result);
}
