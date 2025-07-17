import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Hero from 'sections/LandingPages/yoga/hero';
import Header from 'sections/LandingPages/yoga/header';
import Head from 'next/head';
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
const Floating = dynamic(() => import('sections/LandingPages/yoga/floatingWindow'), { ssr: false });

const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';

const Yoga: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Swasthya Sapthaha | One Week of Wellness, Awareness & Inner Balance | GarbhaGudi IVF
          Centre
        </title>
        <meta
          name='description'
          content='Join us for week of Transformative Week of Wellness, Awareness & Inner Balance | Register | Join the WhatsApp Group to get updates'
        />
        <meta
          name='title'
          content='Swasthya Sapthaha | One Week of Wellness, Awareness & Inner Balance | GarbhaGudi IVF Centre'
        />
        <meta
          name='og:title'
          content='Swasthya Sapthaha | One Week of Wellness, Awareness & Inner Balance | GarbhaGudi IVF Centre'
        />
        <meta
          name='og:description'
          content='Join us for week of Transformative Week of Wellness, Awareness & Inner Balance | Register | Join the WhatsApp Group to get updates'
        />
        <meta
          property='og:image'
          content='https://i.ytimg.com/vi_webp/WUekV9px8Mc/maxresdefault.webp'
        />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.garbhagudi.com/yoga' />
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
      <MobileFooter />
      <Floating />
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
