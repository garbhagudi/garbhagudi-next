'use client';

/**
 * Hero for Campaign 1 — "IVF Centre / Hospital / Clinic" search keywords.
 *
 * Quality Score intent: the H1 and first line mirror the keyword theme
 * exactly (IVF centre / fertility hospital in Bangalore) so the searcher
 * sees their query reflected above the fold, with the lead form, a call
 * link and a WhatsApp link all present without scrolling.
 *
 * The form itself is the existing attribution-ready Zoho form
 * (sections/LandingPages/Performant/form) so UTM + gclid capture and the
 * /thank-you redirect behave exactly like the rest of the site.
 */

import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { HiCheckCircle } from 'react-icons/hi';
import Form from 'sections/LandingPages/Performant/form';
import { PHONE_DISPLAY, PHONE_TEL, waLink } from 'sections/ivf-center-bangalore/constants';

const proofPoints = [
  '15,000+ babies delivered since 2011',
  'Multiple fertility centres across Bangalore',
  'In-house IVF labs & embryology team',
  'Personalised, holistic fertility care',
];

const Hero = () => {
  const tel = PHONE_TEL;
  const wa = waLink();

  return (
    <section
      className='relative overflow-hidden bg-gradient-to-br from-gg-50 via-white to-purple-50'
      aria-labelledby='lp-hero-heading'
    >
      {/* soft brand glow, decorative */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brandPink3/20 blur-3xl'
      />
      <div className='mx-auto grid max-w-7xl items-center gap-10 px-4 pb-24 pt-10 sm:px-6 md:pb-16 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:pt-16'>
        {/* Left — message-matched headline + trust + direct CTAs */}
        <div>
          <span className='inline-flex items-center gap-2 rounded-full bg-gg-100 px-4 py-1.5 font-content text-sm font-semibold text-gg-700'>
            <span className='h-2 w-2 rounded-full bg-gg-500' aria-hidden='true' />
            Trusted IVF &amp; Fertility Centre · Since 2011
          </span>

          <h1
            id='lp-hero-heading'
            className='mt-5 font-heading text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl'
          >
            Best IVF Centre &amp; Fertility Hospital in Bangalore
          </h1>

          <p className='mt-4 max-w-xl font-content text-base text-gray-700 sm:text-lg'>
            GarbhaGudi is a chain of advanced infertility hospitals offering IVF, IUI and complete
            fertility care under one roof — with state-of-the-art labs, experienced specialists and
            compassionate support at every step.
          </p>

          <ul className='mt-6 grid gap-2.5 sm:grid-cols-2'>
            {proofPoints.map((point) => (
              <li key={point} className='flex items-start gap-2 font-content text-sm text-gray-800'>
                <HiCheckCircle className='mt-0.5 shrink-0 text-lg text-gg-600' aria-hidden='true' />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className='mt-7 flex flex-col gap-3 sm:flex-row'>
            <a
              href={tel}
              className='inline-flex items-center justify-center gap-2 rounded-full bg-gg-600 px-6 py-3 font-content text-base font-bold text-white shadow-lg transition hover:bg-gg-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gg-700'
            >
              <FaPhoneAlt aria-hidden='true' /> Call {PHONE_DISPLAY}
            </a>
            <a
              href={wa}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#25D366] px-6 py-3 font-content text-base font-bold text-[#1da851] transition hover:bg-green-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]'
            >
              <FaWhatsapp className='text-lg' aria-hidden='true' /> Chat on WhatsApp
            </a>
          </div>

          <p className='mt-4 font-content text-xs text-gray-500'>
            Free first consultation · Confidential · Bangalore-based fertility specialists
          </p>
        </div>

        {/* Right — primary conversion: the lead form */}
        <div id='form' className='scroll-mt-24'>
          <div className='mx-auto w-full max-w-md rounded-2xl border border-gg-100 bg-white shadow-2xl'>
            <div className='rounded-t-2xl bg-brandPurpleDark px-6 py-5 text-center'>
              <h2 className='font-lexend text-xl font-bold text-white sm:text-2xl'>
                Book a Free Consultation
              </h2>
              <p className='mt-1 font-content text-sm text-purple-100'>
                Talk to a GarbhaGudi fertility specialist today
              </p>
            </div>
            <div className='px-2 pb-2 pt-1 sm:px-4'>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
