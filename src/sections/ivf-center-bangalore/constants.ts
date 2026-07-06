/* Shared contact details for the campaign landing pages.
 *
 * NOTE: site-wide this number is also hardcoded in ~9 other files
 * (components/FloatWhatsapp, components/LPACta, sections/gg-care/cta,
 * pages/fertility-experts, sections/misc/ghar-ghar-garbhagudi, …).
 * Migrating those is a SEPARATE, larger follow-up — intentionally out of
 * scope here; this file is scoped to the campaign LPs only. */

export const PHONE_DISPLAY = '+91 90712 34006';
export const PHONE_DIGITS = '919071234006';
export const PHONE_TEL = `tel:+${PHONE_DIGITS}`;

/* WhatsApp stays on the site-wide WA number (different from the call CTA). */
export const WA_DIGITS = '918951813344';
export const WA_MESSAGE_DEFAULT = 'Hi GarbhaGudi, I would like to book a fertility consultation.';

export const waLink = (message: string = WA_MESSAGE_DEFAULT) =>
  `https://wa.me/${WA_DIGITS}?text=${encodeURIComponent(message)}`;
