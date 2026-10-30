import Head from 'next/head';
import { getImageProps } from 'next/image';

import type { Campaign } from 'sections/campaigns-bangalore-en/campaigns';
import ZohoLeadForm from 'sections/campaigns-bangalore-en/ZohoLeadForm';

/*
 * Hero (LCP) image, art-directed with next/image: desktop creative ≥768px
 * (Tailwind `md`), mobile creative below, so the browser downloads only the
 * matching one. Files in /public/images are copied from dash-ivf-next —
 * replace them when the offer artwork changes.
 */
const ALT =
  'GarbhaGudi IVF Centre Paripoorna 2026: a defined, all inclusive IVF care package at ₹1,75,000. Transparent. Complete. With no hidden costs. Call 9108 9108 32.';

// `sizes` is required: without it getImageProps emits x-descriptors and a phone
// would pull the 2x desktop width. Each source is media-scoped to one
// breakpoint, and the banner spans 2/3 of the row only from `lg`.
const common = { alt: ALT, quality: 85, fetchPriority: 'high' as const, loading: 'eager' as const };
const { props: desktop } = getImageProps({
  ...common,
  src: '/images/landing-banner-desktop-1600.jpg',
  width: 1600,
  height: 838,
  sizes: '(min-width: 1024px) 67vw, 100vw',
});
const { props: mobile } = getImageProps({
  ...common,
  src: '/images/landing-banner-mobile-828.jpg',
  width: 828,
  height: 1159,
  sizes: '100vw',
});

export default function Banner({ campaign }: { campaign: Campaign }) {
  return (
    <div>
      <Head>
        {/* getImageProps adds no preload, so preload the matching creative here. */}
        <link
          rel='preload'
          as='image'
          imageSrcSet={mobile.srcSet}
          imageSizes={mobile.sizes}
          media='(max-width: 767px)'
          fetchPriority='high'
        />
        <link
          rel='preload'
          as='image'
          imageSrcSet={desktop.srcSet}
          imageSizes={desktop.sizes}
          media='(min-width: 768px)'
          fetchPriority='high'
        />
      </Head>

      <div className='grid grid-cols-1 gap-y-3 pb-5 md:pb-8 lg:grid-cols-3'>
        <div className='relative col-span-2 h-fit'>
          <picture>
            <source
              media='(min-width: 768px)'
              srcSet={desktop.srcSet}
              sizes={desktop.sizes}
              width={desktop.width}
              height={desktop.height}
            />
            {/* eslint-disable-next-line jsx-a11y/alt-text -- alt is in the spread props */}
            <img
              {...mobile}
              className='block aspect-[828/1159] h-auto w-full object-cover md:aspect-[1600/838] md:h-full'
            />
          </picture>
        </div>
        <div
          className='flex min-h-[560px] justify-center bg-[#005e7e] md:min-h-[500px]'
          id='leadForm'
        >
          {/* Server-rendered so the lead form paints with the hero, not after hydration. */}
          <div className='flex h-full w-full items-center justify-center'>
            <ZohoLeadForm campaign={campaign} />
          </div>
        </div>
      </div>
      <div className='mx-auto mb-3 flex w-full flex-col justify-center rounded-md bg-brandPurpleDark p-2 px-5 font-semibold text-white shadow-sm md:bg-gg-500 md:px-4'>
        <h1 className='w-full text-center text-base'>
          Best IVF & Fertility Clinic - Affordable IVF Treatment
        </h1>
      </div>
    </div>
  );
}
