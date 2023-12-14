import React from 'react';
import dynamic from 'next/dynamic';
import RelatedSearches from 'sections/LandingPages/Performant/relatedSearches';
import DoctorList from 'sections/LandingPages/Performant/doctorList';
import apolloClient from 'lib/apollo-graphcms';
import { gql } from '@apollo/client';
import Branch from 'sections/LandingPages/Performant/branches';
const Banner = dynamic(() => import('sections/LandingPages/Performant/banner'));
const OtherServices = dynamic(
  () => import('sections/LandingPages/Performant/other-services')
);
const Testimonials = dynamic(
  () => import('sections/LandingPages/Performant/testimonials')
);
const Cta = dynamic(() => import('sections/LandingPages/Performant/cta'));
const Head = dynamic(() => import('next/head'));
const TreatmentOptions = dynamic(
  () => import('sections/LandingPages/Performant/treatment')
);
const Faq = dynamic(() => import('sections/LandingPages/Performant/faq'));

const YOUTUBE_PLAYLIST_ITEMS_API =
  'https://www.googleapis.com/youtube/v3/playlistItems';

export default function Home({ data }) {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>
          GarbhaGudi IVF Centre | Best IVF & Fertility Hospital in India
        </title>
        <meta
          name='title'
          content='GarbhaGudi IVF Centre | Best IVF & Fertility Hospital in India'
        />
        <meta
          name='description'
          content='GarbhaGudi is a chain of new generation infertility treatment hospitals equipped with state-of-the-art infrastructure and cutting-edge technology to address this ever-increasing infertility problem.'
        />

        {/* Open Graph / Facebook */}

        <meta
          property='og:title'
          content='GarbhaGudi IVF Centre | Best IVF & Fertility Hospital in India'
        />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi-ivf.com' />
        <meta
          property='og:description'
          content='GarbhaGudi is a chain of new generation infertility treatment hospitals equipped with state-of-the-art infrastructure and cutting-edge technology to address this ever-increasing infertility problem.'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.jpg'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta
          name='twitter:title'
          content='GarbhaGudi IVF Centre | Best IVF & Fertility Hospital in India'
        />
        <meta
          name='twitter:description'
          content='GarbhaGudi is a chain of new generation infertility treatment hospitals equipped with state-of-the-art infrastructure and cutting-edge technology to address this ever-increasing infertility problem.'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.jpg'
        />
      </Head>
      <Banner />
      <OtherServices />
      <TreatmentOptions branch={'GarbhaGudi IVF Centre'} />
      <Branch branches={data.branches} />
      <DoctorList doctors={data.doctors} />
      <Faq />
      <Testimonials />
      {/* <Calculators /> */}
      <Cta />
      <RelatedSearches />
    </div>
  );
}

export const getStaticProps = async () => {
  const { data } = await apolloClient.query({
    query: gql`
      {
        doctors(orderBy: order_ASC, first: 12) {
          order
          name
          qualification
          category
          slug
          image {
            url
          }
          imageAlt
          medicalRegNo
          id
          designation
        }
        branches {
          id
          title
          slug
          branchPicture {
            url
          }
        }
      }
    `,
  });

  const testimonialsData = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLiHJchamOyyG_IJk4YVYM_LlEkz8dWvqJ&maxResults=10&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
  );

  const testimonials = await testimonialsData.json();

  return {
    props: {
      data,
      testimonials,
      fallback: true,
    },
    revalidate: 180,
  };
};
