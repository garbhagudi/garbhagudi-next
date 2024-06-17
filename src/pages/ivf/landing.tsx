import React from 'react';
import Award from 'sections/LandingPages/unbounce/award';
import Banner from 'sections/LandingPages/unbounce/banner';
import CTA from 'sections/LandingPages/unbounce/cta';
import Offer from 'sections/LandingPages/unbounce/offer';
import Services from 'sections/LandingPages/unbounce/services';
import WhyGarbhaGudi from 'sections/LandingPages/unbounce/whyGarbhaGudi';
import apolloClient from 'lib/apollo-graphcms';
import { gql } from '@apollo/client';
import Doctors from 'sections/LandingPages/unbounce/doctors';
import Testimonial from 'sections/home/testimonial';
import Video from 'sections/home/video';
import Faq from 'sections/home/faq';
import EndForm from 'sections/LandingPages/unbounce/endform';
import Head from 'next/head';

const YOUTUBE_PLAYLIST_ITEMS_API =
  'https://www.googleapis.com/youtube/v3/playlistItems';

const Landing = ({ doctors, testimonials }) => {
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
      <div className='min-h-screen'>
        <Offer />
        <Banner />
        <WhyGarbhaGudi />
        <Award />
        <CTA />
        <Services />
        <Doctors doctors={doctors} />
        <Testimonial />
        <Faq />
        <Video testimonials={testimonials} />
        <EndForm />
      </div>
    </div>
  );
};

export default Landing;

export const getStaticProps = async () => {
  const { data } = await apolloClient.query({
    query: gql`
      {
        doctors(orderBy: order_ASC) {
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

  const testimonialsData = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLiHJchamOyyG_IJk4YVYM_LlEkz8dWvqJ&maxResults=10&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
  );

  const testimonials = await testimonialsData.json();

  return {
    props: {
      doctors: data.doctors,
      testimonials,
      fallback: true,
    },
    revalidate: 180,
  };
};
