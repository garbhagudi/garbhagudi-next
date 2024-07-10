import React from 'react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Hero from 'sections/LandingPages/yoga/hero';
import Header from 'sections/LandingPages/yoga/header';
import Head from 'next/head';
import Video from 'sections/LandingPages/yoga/video';
const EventDetails = dynamic(
  () => import('sections/LandingPages/yoga/eventDetails'),
);
const Curriculum = dynamic(
  () => import('sections/LandingPages/yoga/curriculum'),
);
const AboutDoctors = dynamic(
  () => import('sections/LandingPages/yoga/aboutDoctors'),
);
const Testimonial = dynamic(
  () => import('sections/LandingPages/yoga/testimonial'),
);
const Faq = dynamic(() => import('sections/LandingPages/yoga/faq'));
const Register = dynamic(() => import('sections/LandingPages/yoga/register'));
const MobileFooter = dynamic(
  () => import('sections/LandingPages/yoga/mobileFooter'),
);
const Benefits = dynamic(() => import('sections/LandingPages/yoga/benefits'));
const WhoIsThisFor = dynamic(
  () => import('sections/LandingPages/yoga/whoIsThisFor'),
);
const Floating = dynamic(
  () => import('sections/LandingPages/yoga/floatingWindow'),
);

const YOUTUBE_PLAYLIST_ITEMS_API =
  'https://www.googleapis.com/youtube/v3/playlistItems';

const Yoga: NextPage = ({ testimonials }: any) => {
  return (
    <>
      <Head>
        <title>Yoga</title>
        <meta name='description' content='Yoga' />
      </Head>
      <Header />
      <Hero />
      <EventDetails />
      <Benefits />
      <Curriculum />
      <AboutDoctors />
      <Testimonial />
      <Faq />
      <Register />
      <WhoIsThisFor />
      <Video testimonials={testimonials} />
      <MobileFooter />
      <Floating />
    </>
  );
};

export default Yoga;

export const getStaticProps = async () => {
  const testimonialsData = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLiHJchamOyyG_IJk4YVYM_LlEkz8dWvqJ&maxResults=10&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
  );

  const testimonials = await testimonialsData.json();

  return {
    props: {
      testimonials,
    },
    revalidate: 180,
  };
};
