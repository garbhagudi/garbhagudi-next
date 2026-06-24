import Head from 'next/head';
import dynamic from 'next/dynamic';
import { gql } from '@apollo/client';

import apolloClient from 'lib/apollo-graphcms';
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateMedicalClinicSchema,
} from 'lib/schema-utils';

import Hero from 'sections/ivf-center-bangalore/Hero';
import Content from 'sections/ivf-center-bangalore/Content';
import Footer from 'sections/ivf-center-bangalore/Footer';
import StickyCta from 'sections/ivf-center-bangalore/StickyCta';
import { ivfCentreFaqs } from 'sections/ivf-center-bangalore/Faq';

/* Below-the-fold sections are code-split so the hero + form paint fast
 * (better Core Web Vitals = better landing page experience). */
const Faq = dynamic(() => import('sections/ivf-center-bangalore/Faq'), { ssr: true });
const DoctorList = dynamic(() => import('sections/LandingPages/Performant/doctorList'), {
  ssr: false,
});
const Branch = dynamic(() => import('sections/LandingPages/Performant/branches'), { ssr: false });
const RelatedSearches = dynamic(() => import('sections/LandingPages/Performant/relatedSearches'), {
  ssr: false,
});

const TITLE = 'Best IVF Centre & Fertility Hospital in Bangalore | GarbhaGudi';
const DESCRIPTION =
  'Looking for the best IVF centre in Bangalore? GarbhaGudi is a trusted fertility hospital with advanced IVF labs, expert specialists & multiple branches. Book a free consultation.';
const URL = 'https://www.garbhagudi.com/ivf-center-bangalore';
const OG_IMAGE =
  'https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.webp';

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://www.garbhagudi.com/' },
  { name: 'IVF Centre in Bangalore', url: URL },
]);

const faqSchema = generateFAQSchema(
  ivfCentreFaqs.map((f) => ({ question: f.question, answer: f.answer }))
);

const medicalClinicSchema = generateMedicalClinicSchema({
  name: 'GarbhaGudi IVF Centre',
  description: DESCRIPTION,
  url: URL,
  medicalSpecialty: 'Reproductive endocrinology and infertility (IVF)',
  areaServed: 'Bangalore',
  telephone: '+91-8951813344',
  image: OG_IMAGE,
});

export default function IvfCentreLandingPage({ doctors, branches }) {
  return (
    <div className='pb-20 md:pb-0'>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{TITLE}</title>
        <meta name='title' content={TITLE} />
        <meta name='description' content={DESCRIPTION} />
        <link rel='canonical' href={URL} />
        <link rel='alternate' href={URL} hrefLang='en-IN' />
        <link rel='alternate' href={URL} hrefLang='x-default' />

        {/* Open Graph / Facebook */}
        <meta property='og:title' content={TITLE} />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content={URL} />
        <meta property='og:description' content={DESCRIPTION} />
        <meta property='og:type' content='website' />
        <meta property='og:image' content={OG_IMAGE} />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content={TITLE} />
        <meta name='twitter:description' content={DESCRIPTION} />
        <meta name='twitter:image' content={OG_IMAGE} />

        {/* Structured data */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: medicalClinicSchema }}
          id='medicalclinic-jsonld'
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
          id='breadcrumbs-jsonld'
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: faqSchema }}
          id='faq-jsonld'
        />
      </Head>

      <main>
        <Hero />
        <Content />
        <DoctorList doctors={doctors} />
        <Branch branches={branches} />
        <Faq />
        <RelatedSearches />
      </main>

      <Footer />

      <StickyCta />
    </div>
  );
}

export const getStaticProps = async () => {
  const { data } = await apolloClient.query({
    query: gql`
      query IvfCentreLP {
        doctors(orderBy: order_ASC, first: 6) {
          id
          name
          slug
          designation
          qualification
          image {
            url
          }
          imageAlt
        }
        branches {
          id
          title
          slug
          branchPicture {
            url
          }
          branchPictureUrl
        }
      }
    `,
  });

  return {
    props: {
      doctors: data.doctors,
      branches: data.branches,
    },
    revalidate: 180,
  };
};
