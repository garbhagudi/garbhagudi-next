import Head from 'next/head';
import { Noto_Sans_Tamil, Noto_Serif_Tamil } from 'next/font/google';

import Nav from 'sections/campaigns-hosur-ta/Nav';
import HeroSection from 'sections/campaigns-hosur-ta/HeroSection';
import WhySection from 'sections/campaigns-hosur-ta/WhySection';
import ProblemsSection from 'sections/campaigns-hosur-ta/ProblemsSection';
import StoriesSection from 'sections/campaigns-hosur-ta/StoriesSection';
import DoctorSection from 'sections/campaigns-hosur-ta/DoctorSection';
import ApproachSection from 'sections/campaigns-hosur-ta/ApproachSection';
import CostSection from 'sections/campaigns-hosur-ta/CostSection';
import TreatmentsSection from 'sections/campaigns-hosur-ta/TreatmentsSection';
import FaqAccordion from 'sections/campaigns-hosur-ta/FaqAccordion';
import CoverageSection from 'sections/campaigns-hosur-ta/CoverageSection';
import FinalCtaSection from 'sections/campaigns-hosur-ta/FinalCtaSection';
import Footer from 'sections/campaigns-hosur-ta/Footer';
import WhatsAppFloat from 'sections/campaigns-hosur-ta/WhatsAppFloat';

/* Tamil fonts are scoped to this page rather than added to the site-wide
 * RootLayout — no other page renders Tamil, so there's no reason to ship the
 * tamil subset everywhere. `.className` (not just `.variable`) goes on the root
 * div: RootLayout applies its own font classNames to a <main> that wraps every
 * page, and setting font-family directly on our root element wins by
 * inheritance proximity regardless of stylesheet order. */
const notoSansTamil = Noto_Sans_Tamil({
  subsets: ['tamil'],
  weight: ['400', '500', '600'],
  variable: '--font-noto-sans-tamil',
  display: 'swap',
});
const notoSerifTamil = Noto_Serif_Tamil({
  subsets: ['tamil'],
  weight: ['400', '600', '700'],
  variable: '--font-noto-serif-tamil',
  display: 'swap',
});

const TITLE = 'கர்ப்பகுடி IVF மையம் - ஓசூர் | GarbhaGudi Hosur';
const DESCRIPTION =
  'ஓசூரில் IVF சிகிச்சை - கர்ப்பகுடி கருத்தரிப்பு மையம். 12+ ஆண்டு அனுபவம், 15,000+ வெற்றிக் கதைகள். இன்றே ஒரு இலவச ஆலோசனை பெறுங்கள்.';
const URL = 'https://www.garbhagudi.com/campaigns/in/ta/ivf-treatment-hosur';
const OG_IMAGE =
  'https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.webp';

export default function IvfTreatmentHosurTaLandingPage() {
  return (
    /* `lang` sits here rather than on <html>: _document hardcodes lang='en-IN'
     * for the whole site and overriding it would need a global change for one
     * noindex ads page. Body typography is set here too — globals.css declares
     * no font-family or line-height, unlike the source project's globals. */
    <div
      lang='ta'
      className={`${notoSansTamil.className} ${notoSansTamil.variable} ${notoSerifTamil.variable} bg-white text-[#1C1C1E] text-base leading-[1.7] scroll-smooth`}
    >
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
        <link rel='canonical' href={URL} key='canonical' />
        <link rel='alternate' href={URL} hrefLang='ta-IN' />
        <link rel='alternate' href={URL} hrefLang='x-default' />

        {/* Open Graph / Facebook */}
        <meta property='og:title' content={TITLE} />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content={URL} />
        <meta property='og:description' content={DESCRIPTION} />
        <meta property='og:type' content='website' />
        <meta property='og:image' content={OG_IMAGE} />
        <meta property='og:locale' content='ta_IN' />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content={TITLE} />
        <meta name='twitter:description' content={DESCRIPTION} />
        <meta name='twitter:image' content={OG_IMAGE} />

        {/* The doctor photo is served from this Hygraph region, which the rest
         * of the site doesn't use. */}
        <link rel='preconnect' href='https://ap-south-1.graphassets.com' />
      </Head>

      <Nav />

      <main>
        <HeroSection />
        <WhySection />
        <ProblemsSection />
        <StoriesSection />
        <DoctorSection />
        <ApproachSection />
        <CostSection />
        <TreatmentsSection />
        <FaqAccordion />
        <CoverageSection />
        <FinalCtaSection />
      </main>

      <Footer />

      <WhatsAppFloat />
    </div>
  );
}

/* Ads LP: no global nav/footer/floating widgets — see hideChrome in _app.
 * This page brings its own Nav/Footer/WhatsAppFloat. */
IvfTreatmentHosurTaLandingPage.hideChrome = true;
