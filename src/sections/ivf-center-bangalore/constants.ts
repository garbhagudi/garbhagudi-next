export const PHONE_DISPLAY = '+91 90712 34006';
export const PHONE_DIGITS = '919071234006';
export const PHONE_TEL = `tel:+${PHONE_DIGITS}`;

/* WhatsApp stays on the site-wide WA number (different from the call CTA). */
export const WA_DIGITS = '918951813344';
export const WA_MESSAGE_DEFAULT = 'Hi GarbhaGudi, I would like to book a fertility consultation.';

export const waLink = (message: string = WA_MESSAGE_DEFAULT) =>
  `https://wa.me/${WA_DIGITS}?text=${encodeURIComponent(message)}`;

/* Landing-page behaviour: CTA clicks convert to the on-page lead form
 * (#form) instead of navigating away. */
export const scrollToForm = (e?: { preventDefault: () => void }) => {
  e?.preventDefault();
  document.getElementById('form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export const OFFER_IMAGE =
  'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cmt2v7e6p53rn06o350gplwp3';
export const OFFER_IMAGE_ALT =
  'Free first fertility specialist consultation, semen analysis and TVUS scan at GarbhaGudi';

export const OFFER_IMAGE_WIDTH = 720;
export const OFFER_IMAGE_HEIGHT = 633;

export const OFFER_IMAGE_SIZES = '(max-width: 480px) 100vw, 448px';
