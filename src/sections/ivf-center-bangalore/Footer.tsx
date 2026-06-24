import Link from 'next/link';
import { PHONE_DISPLAY, PHONE_TEL } from 'sections/ivf-center-bangalore/constants';

/* Compact, transparent footer for the IVF-Centre landing page — supports the
 * landing page experience (legal links + medical disclaimer). Page-specific:
 * not shared infra. */
const Footer = () => {
  return (
    <footer className='border-t border-gg-100 bg-white'>
      <div className='mx-auto max-w-6xl px-4 py-8 text-center sm:px-6 lg:px-8'>
        <p className='font-content text-sm text-gray-600'>
          GarbhaGudi IVF Centre · Fertility hospitals across Bangalore · Call{' '}
          <a href={PHONE_TEL} className='font-semibold text-gg-600'>
            {PHONE_DISPLAY}
          </a>
        </p>
        <div className='mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-content text-xs text-gray-500'>
          <Link href='/legal/privacy-policy' className='hover:text-gg-600'>
            Privacy Policy
          </Link>
          <Link href='/legal/terms-and-conditions' className='hover:text-gg-600'>
            Terms &amp; Conditions
          </Link>
          <Link href='/contact' className='hover:text-gg-600'>
            Contact
          </Link>
        </div>
        <p className='mx-auto mt-4 max-w-2xl font-content text-[11px] leading-relaxed text-gray-400'>
          Treatment outcomes vary from person to person and depend on individual medical conditions.
          Information on this page is for general awareness and is not a substitute for professional
          medical advice.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
