import Head from 'next/head';
import dynamic from 'next/dynamic';
import Header from 'sections/LandingPages/unbounce/header';
import Offer from 'sections/LandingPages/ivf/offer_new';
import KeyBenefits from 'sections/LandingPages/ivf/keybenefits';
import Features from 'sections/LandingPages/ivf/features';
import apolloClient from 'lib/apollo-graphcms';
import { gql } from '@apollo/client';
const EndForm = dynamic(() => import('sections/LandingPages/unbounce/endform'), { ssr: false });
const WhyGarbhaGudi = dynamic(() => import('sections/LandingPages/ivf/whygarbhagudi'), {
  ssr: false,
});
const Testimonial = dynamic(() => import('sections/home/testimonial'), { ssr: false });
const Plans = dynamic(() => import('sections/LandingPages/ivf/plans'), { ssr: false });
const Doctors = dynamic(() => import('sections/LandingPages/ivf/Doctors'), { ssr: false });
const Faq = dynamic(() => import('sections/home/faq'), { ssr: false });
const Cta = dynamic(() => import('sections/gg-care/cta'), { ssr: false });
export default function LandingPage({ doctors }) {
  return (
    <div>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>GarbhaGudi IVF Centre | Best IVF & Fertility Hospital in India</title>
        <meta
          name='title'
          content='GarbhaGudi IVF Centre | Best IVF & Fertility Hospital in India'
        />
        <meta
          name='description'
          content='Start your parenthood journey with GarbhaGudi IVF. Fill out our enquiry form for expert guidance, advanced treatment & compassionate care. Book now!'
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
          content='Start your parenthood journey with GarbhaGudi IVF. Fill out our enquiry form for expert guidance, advanced treatment & compassionate care. Book now!'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.webp'
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
          content='Start your parenthood journey with GarbhaGudi IVF. Fill out our enquiry form for expert guidance, advanced treatment & compassionate care. Book now!'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.webp'
        />
      </Head>
      <Header />
      <Offer />
      <KeyBenefits />
      <Features />
      <WhyGarbhaGudi />
      <Plans />
      <Doctors doctors={doctors} />
      <Testimonial />
      <Faq />
      <EndForm />
      <Cta />
    </div>
  );
}

export const getStaticProps = async () => {
  const { data } = await apolloClient.query({
    query: gql`
      {
        doctors(orderBy: order_ASC, first: 8) {
          id
          name
          designation
          qualification
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
