import Head from 'next/head';
import { Playfair_Display, Inter } from 'next/font/google';
import { generateFAQSchema, generateBreadcrumbSchema } from 'lib/schema-utils';
import { faqs } from 'sections/bangladesh/data';
import Nav from 'sections/bangladesh/nav';
import Hero from 'sections/bangladesh/hero';
import TrustStrip from 'sections/bangladesh/trustStrip';
import WhyIndia from 'sections/bangladesh/whyIndia';
import Journey from 'sections/bangladesh/journey';
import Treatments from 'sections/bangladesh/treatments';
import Services from 'sections/bangladesh/services';
import Doctors from 'sections/bangladesh/doctors';
import Testimonials from 'sections/bangladesh/testimonials';
import Faq from 'sections/bangladesh/faq';
import Cta from 'sections/bangladesh/cta';
import Footer from 'sections/bangladesh/footer';

// Self-hosted via next/font — no render-blocking external Google Fonts request.
// Loaded once here; the CSS variables inherit into every nested section.
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
});
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const Bangladesh = () => {
  const faqSchema = generateFAQSchema(faqs.map((f) => ({ question: f.q, answer: f.a })));
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.garbhagudi.com/' },
    { name: 'Bangladesh', url: 'https://www.garbhagudi.com/bangladesh' },
  ]);

  const title = 'IVF Treatment in Bangalore for Bangladesh Patients | GarbhaGudi IVF Centre';
  const description =
    "GarbhaGudi IVF Centre – India's most trusted fertility hospital for Bangladeshi couples. World-class IVF, ICSI, IUI & fertility treatments with visa assistance, accommodation & full support.";
  const ogImage =
    'https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.webp';

  return (
    <div
      className={`${playfair.variable} ${inter.variable} scroll-smooth bg-white font-[family-name:var(--font-inter)] leading-[1.6] text-[#1A2332]`}
    >
      <Head>
        <title>{title}</title>
        <meta name='title' content={title} />
        <meta name='description' content={description} />

        {/* Open Graph / Facebook */}
        <meta property='og:title' content={title} />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://www.garbhagudi.com/bangladesh' />
        <meta property='og:description' content={description} />
        <meta property='og:type' content='website' />
        <meta property='og:image' content={ogImage} />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content={ogImage} />

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: faqSchema }}
          id='faq-jsonld'
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
          id='breadcrumbs-jsonld'
        />
      </Head>

      <Nav />
      <Hero />
      <TrustStrip />
      <WhyIndia />
      <Journey />
      <Treatments />
      <Services />
      <Doctors />
      <Testimonials />
      <Faq />
      <Cta />
      <Footer />
    </div>
  );
};

export default Bangladesh;
