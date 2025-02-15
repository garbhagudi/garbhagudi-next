import React from 'react';
import dynamic from 'next/dynamic';
import Award from 'sections/LandingPages/unbounce/award';
import Banner from 'sections/LandingPages/unbounce/banner';
import CTA from 'sections/LandingPages/unbounce/cta';
import Offer from 'sections/LandingPages/unbounce/offer';
import apolloClient from 'lib/apollo-graphcms';
import { gql } from '@apollo/client';
import Head from 'next/head';
import Header from 'sections/LandingPages/unbounce/header';
import FloatWhatsApp from 'components/FloatWhatsapp';

// Dynamic imports
const Services = dynamic(() => import('sections/LandingPages/unbounce/services'));
const WhyGarbhaGudi = dynamic(() => import('sections/LandingPages/unbounce/whyGarbhaGudi'));
const Doctors = dynamic(() => import('sections/LandingPages/unbounce/doctors'));
const Testimonial = dynamic(() => import('sections/home/testimonial'));
const Faq = dynamic(() => import('sections/home/faq'));
const EndForm = dynamic(() => import('sections/LandingPages/unbounce/endform'));

const Landing = ({ doctors }) => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>GarbhaGudi IVF Centre | Best IVF & Fertility Hospital in India</title>
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
        <meta property='og:url' content='https://garbhagudi.com' />
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
      <>
        <Header />
        <Offer />
        <Banner />
        <WhyGarbhaGudi />
        <Award />
        <CTA />
        <Services />
        <Doctors doctors={doctors} />
        <Testimonial />
        <Faq />
        <FloatWhatsApp />
        <EndForm />
      </>
    </div>
  );
};

export default Landing;

export const getStaticProps = async () => {
  const { data } = await apolloClient.query({
    query: gql`
      {
        doctors(orderBy: order_ASC, first: 8) {
          id
          name
          designation
          qualification
          location
          image {
            url
          }
          imageAlt
          bio {
            raw
          }
        }
      }
    `,
  });

  return {
    props: {
      doctors: data.doctors,
      fallback: true,
    },
  };
};
