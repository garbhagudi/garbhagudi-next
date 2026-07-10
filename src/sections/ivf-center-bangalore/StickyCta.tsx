'use client';

/**
 * Sticky conversion bar for Google Search Ads landing pages.
 *
 * Renders always-visible Call and WhatsApp conversion paths. Pinned to the
 * bottom on mobile (where most paid-search traffic lands) and shown as a
 * compact floating cluster on desktop.
 */

import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { PHONE_DISPLAY, PHONE_TEL, waLink } from 'sections/ivf-center-bangalore/constants';

const StickyCta = () => {
  return (
    <div
      className='fixed inset-x-0 bottom-0 z-50 border-t border-gg-200 bg-white/95 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur md:inset-x-auto md:bottom-6 md:right-6 md:rounded-full md:border md:px-2 md:py-2 md:shadow-2xl'
      role='region'
      aria-label='Contact GarbhaGudi'
    >
      <div className='mx-auto grid max-w-md grid-cols-2 gap-px md:flex md:max-w-none md:items-center md:gap-2'>
        <a
          href={PHONE_TEL}
          aria-label={`Call GarbhaGudi at ${PHONE_DISPLAY}`}
          className='flex flex-col items-center justify-center gap-1 py-3 font-content text-xs font-semibold text-gg-700 transition hover:bg-gg-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gg-600 md:flex-row md:rounded-full md:bg-gg-600 md:px-5 md:py-2.5 md:text-sm md:text-white md:hover:bg-gg-700'
        >
          <FaPhoneAlt className='text-base' aria-hidden='true' />
          <span className='md:hidden'>Call</span>
          <span className='hidden md:inline'>Call now</span>
        </a>

        <a
          href={waLink()}
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Chat with GarbhaGudi on WhatsApp'
          className='flex flex-col items-center justify-center gap-1 border-x border-gg-100 py-3 font-content text-xs font-semibold text-green-700 transition hover:bg-green-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-600 md:flex-row md:rounded-full md:border-0 md:bg-[#25D366] md:px-5 md:py-2.5 md:text-sm md:text-white md:hover:bg-[#1EBE57]'
        >
          <FaWhatsapp className='text-lg' aria-hidden='true' />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

export default StickyCta;
