import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Hero from 'sections/LandingPages/yoga/hero';
import Header from 'sections/LandingPages/yoga/header';
import Head from 'next/head';
const Cta = dynamic(() => import('sections/gg-care/cta'), {
  ssr: false,
});
const EventDetails = dynamic(() => import('sections/LandingPages/yoga/eventDetails'), {
  ssr: false,
});
const Curriculum = dynamic(() => import('sections/LandingPages/yoga/curriculum'), { ssr: false });
const AboutDoctors = dynamic(() => import('sections/LandingPages/yoga/aboutDoctors'), {
  ssr: false,
});
const Testimonial = dynamic(() => import('sections/LandingPages/yoga/testimonial'), { ssr: false });
const Faq = dynamic(() => import('sections/LandingPages/yoga/faq'), { ssr: false });
const Register = dynamic(() => import('sections/LandingPages/yoga/register'), { ssr: false });
const MobileFooter = dynamic(() => import('sections/LandingPages/yoga/mobileFooter'), {
  ssr: false,
});
const Benefits = dynamic(() => import('sections/LandingPages/yoga/benefits'), { ssr: false });
const WhoIsThisFor = dynamic(() => import('sections/LandingPages/yoga/whoIsThisFor'), {
  ssr: false,
});
const Floating = dynamic(() => import('sections/LandingPages/yoga/floatingWindow'), { ssr: false });

const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';

const Yoga: NextPage = () => {
  return (
    <>
      <Head>
        <title>Yoga for IVF Success: Boost Fertility with Garbhagudi</title>
        <meta
          name='description'
          content='Join the 21 Day Yoga Challenge by Garbhagudi to boost fertility and wellness naturally. Start your transformation today—visit now to learn more!'
        />
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
      <MobileFooter />
      <Floating />
      <Cta />
    </>
  );
};

export default Yoga;

export const getStaticProps = async () => {
  const testimonialsData = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLiHJchamOyyG_IJk4YVYM_LlEkz8dWvqJ&maxResults=10&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
  );

  const testimonials = await testimonialsData.json();

  return {
    props: {
      testimonials,
    },
    revalidate: 180,
  };
};
