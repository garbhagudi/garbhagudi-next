import Head from 'next/head';
import dynamic from 'next/dynamic';
import { gql } from '@apollo/client';

import apolloClient from 'lib/apollo-graphcms';
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateMedicalClinicSchema,
} from 'lib/schema-utils';

import Hero from 'sections/ivf-center-davanagere/Hero';
import Content from 'sections/ivf-center-davanagere/Content';
import Footer from 'sections/ivf-center-davanagere/Footer';
import StickyCta from 'sections/ivf-center-davanagere/StickyCta';
import Faq, { ivfCentreFaqs } from 'sections/ivf-center-davanagere/Faq';
import Gallery from 'sections/ivf-center-davanagere/Gallery';
import Reviews from 'sections/ivf-center-davanagere/Reviews';
import Awards from 'sections/ivf-center-davanagere/Awards';

const Branch = dynamic(() => import('sections/LandingPages/Performant/branches'));
const RelatedSearches = dynamic(() => import('sections/LandingPages/Performant/relatedSearches'));

const DoctorList = dynamic(() => import('sections/LandingPages/Performant/doctorList'), {
  ssr: false,
  loading: () => <div className='min-h-[632px] lg:min-h-[588px]' aria-hidden='true' />,
});
const OfferPopup = dynamic(() => import('sections/ivf-center-davanagere/OfferPopup'), {
  ssr: false,
});

const TITLE = 'Best IVF Centre & Fertility Hospital in Davanagere | GarbhaGudi';
const DESCRIPTION =
  'Looking for the best IVF centre in Davanagere? GarbhaGudi is a trusted fertility hospital with an advanced IVF lab and expert specialists. Book a free consultation.';
const URL = 'https://www.garbhagudi.com/lp/ivf-centre-davangere';
const OG_IMAGE =
  'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8v87qr57nu07plks7j7nzs';

const faqSchema = generateFAQSchema(
  ivfCentreFaqs.map((f) => ({ question: f.question, answer: f.answer }))
);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://www.garbhagudi.com/' },
  { name: 'IVF Centre in Davanagere', url: URL },
]);
const medicalClinicSchema = generateMedicalClinicSchema({
  name: 'GarbhaGudi IVF Centre Davanagere',
  description: DESCRIPTION,
  url: URL,
  medicalSpecialty: 'Reproductive endocrinology and infertility (IVF)',
  areaServed: 'Davanagere',
  telephone: '+91-9108910832',
  image: OG_IMAGE,
});

export default function IvfCentreDavanagereLandingPage({ doctors, branches, awards }) {
  return (
    <div className='pb-20 md:pb-0'>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{TITLE}</title>
        <meta name='title' content={TITLE} />
        <meta name='description' content={DESCRIPTION} />
        {/* Ads LP — keep out of search results; `key` overrides the global
         * index directive from _app. */}
        <meta name='robots' content='noindex, nofollow' key='robots' />
        <link rel='canonical' href={URL} key='canonical' />
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
        <DoctorList doctors={doctors} city='Davanagere' />
        <Branch branches={branches} />
        <Reviews />
        <Awards awards={awards} />
        <Faq />
        <RelatedSearches city='Davanagere' />
      </main>

      <Footer />

      <StickyCta />

      <OfferPopup branches={branches} />
    </div>
  );
}

/* Ads LP: no global nav/footer/floating widgets — see hideChrome in _app. */
IvfCentreDavanagereLandingPage.hideChrome = true;

export const getStaticProps = async () => {
  const { data } = await apolloClient.query({
    query: gql`
      query IvfCentreDavanagereLP {
        # This LP is Davanagere-only: the fertility-experts section shows
        # only the Davanagere doctors (Dr. Manasa K A, Dr. Harshita
        # Guruprasad) plus Dr. Asha, per the page's own requirements.
        doctors(
          orderBy: order_ASC
          first: 100
          where: { slug_in: ["dr-manasa-k-a", "dr-harshita-guruprasad", "dr-asha-s-vijay"] }
        ) {
          id
          name
          designation
          qualification
          image {
            url
          }
          imageAlt
        }
        # This LP is Davanagere-only, so filter server-side by the same
        # branch slug used at /locations/davanagere instead of fetching
        # every branch and discarding the rest.
        branches(where: { slug: "davanagere" }) {
          id
          title
          branchPicture {
            url
          }
        }
        awards(orderBy: createdAt_DESC) {
          id
          title
          image {
            url
          }
          imageUrl
        }
      }
    `,
  });

  // Dr. Asha should lead the fertility experts section.
  const isAsha = (d: { name?: string }) => /\basha\b/i.test(d.name ?? '');
  const all: { name?: string }[] = data.doctors ?? [];
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
