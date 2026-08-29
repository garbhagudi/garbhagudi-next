import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import { gql } from '@apollo/client';

import apolloClient from 'lib/apollo-graphcms';
import JsonLd from 'components/json-ld';
import {
  ORG_ID,
  buildFaqPage,
  buildService,
  buildWebPage,
  schemaGraph,
  serviceId,
} from 'lib/schema';

import Hero from 'sections/ivf-center-bangalore/Hero';
import Content from 'sections/ivf-center-bangalore/Content';
import Footer from 'sections/ivf-center-bangalore/Footer';
import StickyCta from 'sections/ivf-center-bangalore/StickyCta';
import Faq, { ivfCentreFaqs } from 'sections/ivf-center-bangalore/Faq';
import Gallery from 'sections/ivf-center-bangalore/Gallery';
import Reviews from 'sections/ivf-center-bangalore/Reviews';
import Awards from 'sections/ivf-center-bangalore/Awards';

const Branch = dynamic(() => import('sections/LandingPages/Performant/branches'));
const RelatedSearches = dynamic(() => import('sections/LandingPages/Performant/relatedSearches'));

const DoctorList = dynamic(() => import('sections/LandingPages/Performant/doctorList'), {
  ssr: false,
  loading: () => <div className='min-h-[632px] lg:min-h-[588px]' aria-hidden='true' />,
});
const OfferPopup = dynamic(() => import('sections/ivf-center-bangalore/OfferPopup'), {
  ssr: false,
});

const TITLE = 'Best IVF Centre & Fertility Hospital in Bangalore | GarbhaGudi';
const DESCRIPTION =
  'Looking for the best IVF centre in Bangalore? GarbhaGudi is a trusted fertility hospital with advanced IVF labs, expert specialists & multiple branches. Book a free consultation.';
const URL = 'https://www.garbhagudi.com/lp/ivf-centre-bangalore';
const OG_IMAGE =
  'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8v87qr57nu07plks7j7nzs';

/* Schema embeds the page URL, so it's built per page — this LP is also served
 * as-is at /lp/ivf-treatment.
 *
 * This page is a landing page, not a branch, so it does not mint a
 * MedicalClinic entity: branch pages own branch-level data (guide section 18).
 * It describes the fertility service and references the master organization. */
const buildSchemas = (url: string) =>
  schemaGraph(
    buildWebPage({
      // This page renders no visible breadcrumb, so it emits no
      // BreadcrumbList and claims no breadcrumb (guide section 6).
      hasBreadcrumb: false,
      url,
      name: TITLE,
      description: DESCRIPTION,
      aboutId: ORG_ID,
      mainEntityId: serviceId(url),
      primaryImageUrl: OG_IMAGE,
    }),
    buildService({
      url,
      name: 'IVF and Fertility Treatment',
      description: DESCRIPTION,
      serviceType: 'Reproductive endocrinology and infertility (IVF)',
    }),

    buildFaqPage(
      url,
      ivfCentreFaqs.map((f) => ({ question: f.question, answer: f.answer }))
    )
  );

export default function IvfCentreLandingPage({ doctors, branches, awards, pageUrl = URL }) {
  const schema = useMemo(() => buildSchemas(pageUrl), [pageUrl]);
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

        {/* Structured data */}
        <JsonLd id='page-jsonld' data={schema} />
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

      <OfferPopup branches={branches} />
    </div>
  );
}

/* Ads LP: no global nav/footer/floating widgets — see hideChrome in _app. */
IvfCentreLandingPage.hideChrome = true;

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
