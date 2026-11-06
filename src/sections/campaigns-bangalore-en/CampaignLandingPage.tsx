import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { DM_Sans } from 'next/font/google';

import Header from 'sections/campaigns-bangalore-en/Header';
import Banner from 'sections/campaigns-bangalore-en/Banner';
import Footer from 'sections/campaigns-bangalore-en/Footer';
import { captureGclid } from 'sections/campaigns-bangalore-en/zohoLeadPayload';
import type { Campaign } from 'sections/campaigns-bangalore-en/campaigns';

/* Port of the dash-ivf-next home page (garbhagudi-ivf.com), shared by the
 * four ad-channel routes under pages/campaigns/in/en (see campaigns.ts). Same
 * section order and progressive reveal as dash. */
const OtherServices = dynamic(() => import('sections/campaigns-bangalore-en/OtherServices'), {
  ssr: false,
});
const TreatmentOptions = dynamic(() => import('sections/campaigns-bangalore-en/TreatmentOptions'), {
  ssr: false,
});
const TeamSection = dynamic(() => import('sections/campaigns-bangalore-en/TeamSection'), {
  ssr: false,
});
const Video = dynamic(() => import('sections/campaigns-bangalore-en/Video'));
const Faq = dynamic(() => import('sections/campaigns-bangalore-en/Faq'), { ssr: false });
const Testimonials = dynamic(() => import('sections/campaigns-bangalore-en/Testimonials'), {
  ssr: false,
});
const RelatedSearches = dynamic(() => import('sections/campaigns-bangalore-en/RelatedSearches'), {
  ssr: false,
});

/* dash applies DM Sans from its _app; scoped to this page here. `.className`
 * on the root div wins over RootLayout's fonts by inheritance proximity. */
const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: true,
});

const TITLE = 'GarbhaGudi IVF Centre | Best IVF & Fertility Hospital in India';
const DESCRIPTION =
  'GarbhaGudi is a chain of new generation infertility treatment hospitals equipped with state-of-the-art infrastructure and cutting-edge technology to address this ever-increasing infertility problem.';
const OG_IMAGE =
  'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8v87qr57nu07plks7j7nzs';

const lazyComponents = [
  { key: 'other-services', component: <OtherServices /> },
  { key: 'treatment-options', component: <TreatmentOptions branch='GarbhaGudi IVF Centre' /> },
  { key: 'team-section', component: <TeamSection /> },
  { key: 'video', component: <Video /> },
  { key: 'faq', component: <Faq /> },
  { key: 'testimonials', component: <Testimonials /> },
  { key: 'related-searches', component: <RelatedSearches /> },
];

export default function CampaignLandingPage({ campaign }: { campaign: Campaign }) {
  const router = useRouter();
  const pageUrl = `https://www.garbhagudi.com${campaign.path}`;

  /* dash's _app does both of these site-wide; the Zoho UTM tracker script is
   * loaded below. The lead form reads the gclid this persists. */
  useEffect(() => {
    captureGclid();
  }, [router.asPath]);

  /* Mount sections one at a time as the previous one scrolls into view. */
  const [visibleIndex, setVisibleIndex] = useState(1);
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // All sections mounted: nothing left to watch.
    if (visibleIndex >= lazyComponents.length) return;
    const handleScroll = () => {
      const currentRef = containerRefs.current[visibleIndex - 1];
      if (currentRef && currentRef.getBoundingClientRect().bottom <= window.innerHeight) {
        setVisibleIndex(visibleIndex + 1);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleIndex]);

  return (
    <div className={`${dmSans.className} bg-white leading-normal text-[#343D48]`}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{TITLE}</title>
        <meta name='title' content={TITLE} />
        <meta name='description' content={DESCRIPTION} />
        {/* Ads LP — keep out of search results; `key` overrides the global
         * index directive from _app. */}
        <meta name='robots' content='noindex, nofollow' key='robots' />
        {/* `key` overrides _app's auto-canonical, which is built from
         * router.asPath and would otherwise leak ad-click query strings. */}
        <link rel='canonical' href={pageUrl} key='canonical' />
        <link rel='alternate' href={pageUrl} hrefLang='en-IN' />
        <link rel='alternate' href={pageUrl} hrefLang='x-default' />

        {/* Open Graph / Facebook */}
        <meta property='og:title' content={TITLE} />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content={pageUrl} />
        <meta property='og:description' content={DESCRIPTION} />
        <meta property='og:type' content='website' />
        <meta property='og:image' content={OG_IMAGE} />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content={TITLE} />
        <meta name='twitter:description' content={DESCRIPTION} />
        <meta name='twitter:image' content={OG_IMAGE} />
      </Head>

      {/* Zoho UTM tracker (ZFAdvLead): captures URL UTMs into first-party
       * cookies that the lead form replays. `afterInteractive` so cookies are
       * set before a fast first-visit submit. */}
      <Script
        id='gg-zoho-zfadvlead-utm'
        src='/zoho-forms/zf-zfadvlead-utm.js'
        strategy='afterInteractive'
      />

      <Header />
      <Banner campaign={campaign} />
      {lazyComponents.map(({ key, component }, index) => (
        <div
          key={key}
          // First block is client-only: reserve its height so the footer does
          // not jump in from the viewport (CLS) when it mounts.
          className={index === 0 ? 'min-h-[2300px] md:min-h-[1600px] lg:min-h-[1350px]' : undefined}
          ref={(el) => {
            containerRefs.current[index] = el;
          }}
        >
          {index < visibleIndex && component}
        </div>
      ))}
      <Footer />
    </div>
  );
}
