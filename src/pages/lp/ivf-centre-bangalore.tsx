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
const Gallery = dynamic(() => import('sections/ivf-center-bangalore/Gallery'), { ssr: true });
const DoctorList = dynamic(() => import('sections/LandingPages/Performant/doctorList'), {
  ssr: false,
});
const Branch = dynamic(() => import('sections/LandingPages/Performant/branches'), { ssr: false });
const Reviews = dynamic(() => import('sections/ivf-center-bangalore/Reviews'), { ssr: true });
const Awards = dynamic(() => import('sections/ivf-center-bangalore/Awards'), { ssr: true });
const RelatedSearches = dynamic(() => import('sections/LandingPages/Performant/relatedSearches'), {
  ssr: false,
});

const TITLE = 'Best IVF Centre & Fertility Hospital in Bangalore | GarbhaGudi';
const DESCRIPTION =
  'Looking for the best IVF centre in Bangalore? GarbhaGudi is a trusted fertility hospital with advanced IVF labs, expert specialists & multiple branches. Book a free consultation.';
const URL = 'https://www.garbhagudi.com/lp/ivf-centre-bangalore';
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
  telephone: '+91-9108910832',
  image: OG_IMAGE,
});

export default function IvfCentreLandingPage({ doctors, branches, awards }) {
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
        <Gallery />
        <DoctorList doctors={doctors} />
        <Branch branches={branches} />
        <Reviews />
        <Awards awards={awards} />
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
        # Same order as the website's doctor listing (order_ASC, no limit),
        # minus the Davanagere (Dr. Manasa K A, Dr. Harshita Guruprasad) and
        # Hosur (Dr. Radha) doctors — this LP is Bangalore-only.
        # Also drops non-fertility-consultant staff (Embryology, Yoga,
        # Psychiatry) so the "fertility experts" section stays focused.
        doctors(
          orderBy: order_ASC
          first: 100
          where: {
            designation_not: "Consultant"
            slug_not_in: [
              "dr-manasa-k-a"
              "dr-harshita-guruprasad"
              "dr-radha-puchalapalli"
              "fyzullah-syed"
              "vidyalakshmi-a"
              "aishwarya-d-s"
              "suraksha-b"
              "dr-jala"
              "dr-meghana-suresh"
              "dr-ganavi-ks"
              "dr-varsha-vijay"
            ]
          }
        ) {
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
        awards(orderBy: createdAt_DESC) {
          id
          title
          slug
          image {
            url
          }
          imageUrl
        }
      }
    `,
  });

  // Drop the male Uro-Andrologists from this LP's fertility experts section.
  const isUro = (d: { designation?: string }) => /uro-?androlog/i.test(d.designation ?? '');
  const all: { name?: string; designation?: string }[] = (data.doctors ?? []).filter(
    (d: { designation?: string }) => !isUro(d)
  );
  // Dr. Asha should lead the fertility experts section.
  const isAsha = (d: { name?: string }) => /\basha\b/i.test(d.name ?? '');
  const doctors = [...all.filter(isAsha), ...all.filter((d) => !isAsha(d))];

  return {
    props: {
      doctors,
      branches: data.branches,
      awards: data.awards,
    },
    revalidate: 180,
  };
};
