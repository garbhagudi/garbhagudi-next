'use client';

/**
 * Shared sticky conversion bar for Google Search Ads landing pages.
 *
 * Renders three always-visible conversion paths — Call, WhatsApp and a
 * "Book" button that scrolls to the lead form (#form). Pinned to the
 * bottom on mobile (where most paid-search traffic lands) and shown as a
 * compact floating cluster on desktop.
 *
 * Reused across all four campaign LPs; only the props change.
 */

import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import {
  PHONE_DISPLAY,
  PHONE_DIGITS,
  WA_DIGITS,
  WA_MESSAGE_DEFAULT,
} from 'sections/ivf-center-bangalore/constants';

export interface StickyCtaProps {
  /** Display + tel number, e.g. "+91 91089 10832" */
  phoneDisplay?: string;
  /** Digits only for tel:, e.g. "919108910832" */
  phoneDigits?: string;
  /** Digits only for wa.me, e.g. "918951813344" */
  waDigits?: string;
  /** Pre-filled WhatsApp message */
  waMessage?: string;
}

const StickyCta = ({
  phoneDisplay = PHONE_DISPLAY,
  phoneDigits = PHONE_DIGITS,
  waDigits = WA_DIGITS,
  waMessage = WA_MESSAGE_DEFAULT,
}: StickyCtaProps) => {
  const tel = `tel:+${phoneDigits}`;
  const wa = `https://wa.me/${waDigits}?text=${encodeURIComponent(waMessage)}`;

  return (
    <div
      className='fixed inset-x-0 bottom-0 z-50 border-t border-gg-200 bg-white/95 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur md:inset-x-auto md:bottom-6 md:right-6 md:rounded-full md:border md:px-2 md:py-2 md:shadow-2xl'
      role='region'
      aria-label='Contact GarbhaGudi'
    >
      <div className='mx-auto grid max-w-md grid-cols-2 gap-px md:flex md:max-w-none md:items-center md:gap-2'>
        <a
          href={tel}
          aria-label={`Call GarbhaGudi at ${phoneDisplay}`}
          className='flex flex-col items-center justify-center gap-1 py-3 font-content text-xs font-semibold text-gg-700 transition hover:bg-gg-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gg-600 md:flex-row md:rounded-full md:bg-gg-600 md:px-5 md:py-2.5 md:text-sm md:text-white md:hover:bg-gg-700'
        >
          <FaPhoneAlt className='text-base' aria-hidden='true' />
          <span className='md:hidden'>Call</span>
          <span className='hidden md:inline'>Call now</span>
        </a>

        <a
          href={wa}
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Chat with GarbhaGudi on WhatsApp'
          className='flex flex-col items-center justify-center gap-1 border-x border-gg-100 py-3 font-content text-xs font-semibold text-green-700 transition hover:bg-green-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-600 md:flex-row md:rounded-full md:border-0 md:bg-[#25D366] md:px-5 md:py-2.5 md:text-sm md:text-white md:hover:bg-[#1EBE57]'
        >
          <FaWhatsapp className='text-lg' aria-hidden='true' />
          <span className='md:hidden'>WhatsApp</span>
          <span className='hidden md:inline'>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

export default StickyCta;
