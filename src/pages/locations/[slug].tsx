import React from 'react';
import Banner from 'sections/location/banner';
import TreatmentOptions from 'sections/location/treatments';
import apolloClient from 'lib/apollo-graphcms';
import { gql } from '@apollo/client';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Loading from 'components/Loading';
import dynamic from 'next/dynamic';

const MapSection = dynamic(() => import('sections/location/mapSection'));
const Cta = dynamic(() => import('sections/gg-care/cta'));
const Faq = dynamic(() => import('sections/location/faq'));
const VirtualTour = dynamic(() => import('sections/location/virtualTour'));
const QuickLinks = dynamic(() => import('sections/location/quickLinks'));

const Branch = ({ branch }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <Loading />;
  }
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{branch?.metaTitle}</title>
        <meta name='title' content={branch?.metaTitle} />
        <meta name='description' content={branch?.metaDescription} />

        {/* Open Graph / Facebook */}

        <meta property='og:title' content={branch?.metaTitle} />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta property='og:description' content={branch?.metaDescription} />
        <meta property='og:type' content='website' />
        <meta property='og:image' content={branch?.branchPicture.url} />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content={branch?.metaTitle} />
        <meta name='twitter:description' content={branch?.metaDescription} />
        <meta name='twitter:image' content={branch?.branchPicture.url} />
      </Head>
      <Banner branchTitle={branch.title} />
      <TreatmentOptions branch={branch?.title} image={branch?.nabh?.url || ''} />
      <MapSection
        maplink={branch?.mapLink}
        address={branch?.address}
        description={branch?.about?.raw?.children}
        doctors={branch?.doctors}
        title={branch?.title}
      />
      <Cta />
      <Faq branch={branch?.title} doctors={branch.doctors} />
      <VirtualTour
        link1={branch?.virtualTourLink1}
        link2={branch?.virtualTourLink2}
        link3={branch?.virtualTourLink3}
      />
      <QuickLinks />
    </div>
  );
};

export default Branch;

export const getStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query({
    query: gql`
      query ($slug: String!) {
        branch(where: { slug: $slug }) {
          branchPicture {
            url
          }
          title
          address
          about {
            raw
          }
          nabh {
            url
          }
          slug
          metaTitle
          metaDescription
          id
          mapLink
          branchPicture {
            url
          }
          virtualTourLink1
          virtualTourLink2
          virtualTourLink3
          doctors {
            id
            name
            slug
            imageAlt
            designation
            qualification
            image {
              url
            }
          }
        }
      }
    `,
    variables: {
      slug: params.slug,
    },
  });

  return {
    props: {
      branch: data.branch,
    },
    revalidate: 180,
  };
};

export async function getStaticPaths() {
  const { data } = await apolloClient.query({
    query: gql`
      {
        branches {
          slug
          title
        }
      }
    `,
  });

  return {
    paths: data.branches.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}
