import dynamic from 'next/dynamic';
import Offer from 'sections/LandingPages/unbounce/offer';
import apolloClient from 'lib/apollo-graphcms';
import { gql } from '@apollo/client';
import Head from 'next/head';
import Header from 'sections/LandingPages/unbounce/header';
import FloatWhatsApp from 'components/FloatWhatsapp';

// Dynamic imports
const Banner = dynamic(() => import('sections/LandingPages/unbounce/banner'), {
  ssr: true,
});
const Award = dynamic(() => import('sections/LandingPages/unbounce/award'), {
  ssr: false,
});
const CTA = dynamic(() => import('sections/LandingPages/unbounce/cta'), {
  ssr: false,
});
const Services = dynamic(() => import('sections/LandingPages/unbounce/services'), {
  ssr: false,
});
const WhyGarbhaGudi = dynamic(() => import('sections/LandingPages/unbounce/whyGarbhaGudi'), {
  ssr: false,
});
const Doctors = dynamic(() => import('sections/LandingPages/unbounce/doctors'), {
  ssr: false,
});
const Testimonial = dynamic(() => import('sections/home/testimonial'), {
  ssr: false,
});
const Faq = dynamic(() => import('sections/home/faq'), {
  ssr: false,
});
const EndForm = dynamic(() => import('sections/LandingPages/unbounce/endform'), {
  ssr: false,
});

const Landing = ({ doctors }) => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}
        <link
          rel='preload'
          href='https://res.cloudinary.com/garbhagudiivf/image/upload/v1742986481/landing-page/Offer-Logo_r3rnce.webp'
          as='image'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>GarbhaGudi IVF Centre | Best IVF & Fertility Hospital in India</title>
        <meta
          name='title'
          content='GarbhaGudi IVF Centre | Best IVF & Fertility Hospital in India'
        />
        <meta
          name='description'
          content='GarbhaGudi is a modern infertility hospital chain offering advanced treatment with state-of-the-art technology and expert care. Book appointment now!'
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
          content='GarbhaGudi is a modern infertility hospital chain offering advanced treatment with state-of-the-art technology and expert care. Book appointment now!'
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
          content='GarbhaGudi is a modern infertility hospital chain offering advanced treatment with state-of-the-art technology and expert care. Book appointment now!'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.webp'
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
