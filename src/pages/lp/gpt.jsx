/**
 * Verbatim port of the dash-ivf-next homepage (a redesign/experiment build of
 * the GarbhaGudi homepage) to /lp/gpt for a standalone campaign preview.
 *
 * All ported components/data live under the `gpt` namespace (components/gpt,
 * sections/gpt, data/gpt, lib/gpt) so nothing collides with the production
 * homepage's own `sections/home`, `components/header`, etc.
 *
 * Ads LP: no global nav/footer/floating widgets from this site's own chrome
 * — see hideChrome in _app. This page brings its own header + footer to
 * match dash-ivf-next's rendered page exactly.
 */
import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { DM_Sans } from 'next/font/google';
import Header from 'components/gpt/header/header';
import Footer from 'components/gpt/footer/footer';

/**
 * dash-ivf-next's own house font (loaded site-wide there via `_app.jsx`).
 * garbhagudi-next's own `font-heading`/`font-qs`/`font-content` Tailwind
 * classes resolve to different fonts (B612/Nunito), so every ported
 * className that used to carry dash's DM Sans meaning has been renamed to
 * `font-dmSans` (see tailwind.config.js) — this loader is what backs it.
 */
const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: true,
  variable: '--font-dm-sans',
});

const Banner = dynamic(() => import('sections/gpt/home/banner'), { ssr: true });
const OtherServices = dynamic(() => import('sections/gpt/home/other-services'), {
  ssr: false,
});
const TeamSection = dynamic(() => import('sections/gpt/home/our-team'), {
  ssr: false,
});
const Video = dynamic(() => import('sections/gpt/home/video'));
const Testimonials = dynamic(() => import('sections/gpt/home/testimonials'), {
  ssr: false,
});
const TreatmentOptions = dynamic(() => import('sections/gpt/home/treatment'), {
  ssr: false,
});
const Faq = dynamic(() => import('sections/gpt/home/faq'), { ssr: false });
const RelatedSearches = dynamic(() => import('sections/gpt/home/relatedSearches'), {
  ssr: false,
});

export default function GptLandingPage() {
  const lazyComponents = [
    { key: 'other-services', component: <OtherServices /> },
    {
      key: 'treatment-options',
      component: <TreatmentOptions branch='GarbhaGudi IVF Centre' />,
    },
    { key: 'team-section', component: <TeamSection /> },
    { key: 'video', component: <Video /> },
    { key: 'faq', component: <Faq /> },
    { key: 'testimonials', component: <Testimonials /> },
    { key: 'related-searches', component: <RelatedSearches /> },
  ];

  const [visibleIndex, setVisibleIndex] = useState(1);
  const containerRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const currentRef = containerRefs.current[visibleIndex - 1];

      if (currentRef) {
        const { bottom } = currentRef.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        if (bottom <= viewportHeight) {
          setVisibleIndex((prevIndex) =>
            prevIndex < lazyComponents.length ? prevIndex + 1 : prevIndex
          );
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visibleIndex, lazyComponents.length]);

  return (
    <div className={dmSans.className}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>GarbhaGudi IVF Centre | Best IVF & Fertility Hospital in India</title>
        <meta
          name='description'
          content='GarbhaGudi is a chain of new generation infertility treatment hospitals equipped with state-of-the-art infrastructure and cutting-edge technology to address this ever-increasing infertility problem.'
        />
        <meta name='robots' content='noindex, nofollow' key='robots' />
        <link rel='canonical' href='https://www.garbhagudi.com/lp/gpt' />
      </Head>

      <Header />
      <Banner />
      {lazyComponents.map(({ key, component }, index) => (
        <div
          key={key}
          ref={(el) => (containerRefs.current[index] = el)}
          style={{
            marginBottom: '0px',
          }}
        >
          {index < visibleIndex && component}{' '}
        </div>
      ))}
      <Footer />
    </div>
  );
}

/* Ads LP: no global nav/footer/floating widgets — see hideChrome in _app. */
GptLandingPage.hideChrome = true;
