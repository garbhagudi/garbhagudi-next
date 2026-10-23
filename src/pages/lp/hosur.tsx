/* Copy of tamil.garbhagudi.com's homepage (garbhagudi-next-tamil/src/pages/index.tsx) as an
 * ads landing page: link-free header (Tamil logo kept), no site nav/footer — see hideChrome. */
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Inter, Noto_Sans_Tamil, Noto_Serif_Tamil } from 'next/font/google';
import Header from 'sections/lp-hosur/Header';
import Banner from 'sections/lp-hosur/Banner';
import HeroSection from 'sections/lp-hosur/HeroSection';
import TrustStrip from 'sections/lp-hosur/TrustStrip';
import WhySection from 'sections/lp-hosur/WhySection';
import TreatmentsSection from 'sections/lp-hosur/TreatmentsSection';
import ProcessSection from 'sections/lp-hosur/ProcessSection';
import TestimonialsSection from 'sections/lp-hosur/TestimonialsSection';
import FormSection from 'sections/lp-hosur/FormSection';

const DoctorList = dynamic(() => import('sections/lp-hosur/DoctorList'));
const Faq = dynamic(() => import('sections/lp-hosur/Faq'));

/* Scoped to this page like campaigns/in/ta/ivf-treatment-hosur.tsx — the site-wide
 * RootLayout doesn't ship Tamil fonts or Inter. `.className` on the root div sets the
 * body font (the source page's `font-sans-tamil`). */
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
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const TITLE = 'ஓசூரில் சிறந்த IVF மையம் | ஓசூரில் IVF மருத்துவமனை - கர்பகுடி';
const DESCRIPTION =
  'கர்பகுடி (GarbhaGudi) என்பது பெங்களூருவில் உள்ள சிறந்த IVF மருத்துவமனைகளில் ஒன்றாகும். IVF / கருத்தரிக்கையின்மை சிகிச்சைகளில் மிக உயர்ந்த வெற்றிவிகிதத்துடன் சேவையை வழங்குகிறது. ஓசூரில் உள்ள சிறந்த கர்பகுடி IVF மருத்துவமனையில் இப்போது ஆலோசனையை பதிவு செய்யுங்கள்.';
const URL = 'https://www.garbhagudi.com/lp/hosur';
const OG_IMAGE =
  'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8v87qr57nu07plks7j7nzs';

export default function HosurLandingPage() {
  return (
    <div
      lang='ta'
      className={`${notoSansTamil.className} ${notoSansTamil.variable} ${notoSerifTamil.variable} ${inter.variable} scroll-smooth bg-white`}
    >
      <Head>
        <title>{TITLE}</title>
        <meta name='title' content={TITLE} />
        <meta name='description' content={DESCRIPTION} />
        {/* Ads LP — keep out of search results; `key` overrides the global robots tag in _app. */}
        <meta name='robots' content='noindex, nofollow' key='robots' />

        <meta property='og:title' content={TITLE} />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content={URL} />
        <meta property='og:description' content={DESCRIPTION} />
        <meta property='og:type' content='website' />
        <meta property='og:image' content={OG_IMAGE} />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content={TITLE} />
        <meta name='twitter:description' content={DESCRIPTION} />
        <meta name='twitter:image' content={OG_IMAGE} />
      </Head>

      <Header />
      <Banner />
      <HeroSection />
      <TrustStrip />
      <WhySection />
      <TreatmentsSection />
      <ProcessSection />
      <TestimonialsSection />
      <FormSection />
      <DoctorList doctors={DOCTORS} />
      <Faq />
    </div>
  );
}

/* No site nav/footer — see hideChrome in _app. The page brings its own link-free Header. */
HosurLandingPage.hideChrome = true;

/* Only these two doctors exist in the Tamil site's Hygraph project, which this repo's
 * ENDPOINT can't query (this repo's CMS has the full ~25-doctor roster). Pinned like the
 * banner, with Tamil names and assets as tamil.garbhagudi.com shows them. Both slugs
 * resolve to /fertility-experts/* pages on this site. */
const DOCTORS = [
  {
    id: 'cmep8bb5445vn07plz0chd8mf',
    name: 'டாக்டர் ராதா புச்சலபள்ளி',
    qualification: 'MBBS, DGO, FRM',
    category: 'fertilitySpecialist',
    slug: 'dr-radha-puchalapalli',
    image: {
      url: 'https://ap-south-1.graphassets.com/cmekvksn30ksu07o5fl5q801f/cmequuvod57fd07oagac62d2w',
    },
    imageAlt: 'கர்பகுடி ஐவிஎஃப் மையம் – ஓசூர்',
    medicalRegNo: '161939',
    designation: 'Fertility Specialist',
  },
  {
    id: 'cmep9ufxm46e907pldyqy9in5',
    name: 'டாக்டர் ஆஷா எஸ். விஜய்',
    qualification: 'MBBS, DNB(OBG), DGO, PGD-RM&E',
    category: 'fertilitySpecialist',
    slug: 'dr-asha-s-vijay',
    image: {
      url: 'https://ap-south-1.graphassets.com/cmekvksn30ksu07o5fl5q801f/cmep8m6lf460g07plelkz2r78',
    },
    imageAlt: 'dr-asha-s-vijay',
    medicalRegNo: '33884',
    designation: 'Medical Director - GarbhaGudi',
  },
];
