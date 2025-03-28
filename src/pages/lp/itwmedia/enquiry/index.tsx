import Head from 'next/head';
import dynamic from 'next/dynamic';
import Header from 'sections/LandingPages/itwmedia/header';
import Offer from 'sections/LandingPages/itwmedia/offer_new';
import apolloClient from 'lib/apollo-graphcms';
import { gql } from '@apollo/client';
const Features = dynamic(() => import('sections/LandingPages/ivf/features'), { ssr: false });
const KeyBenefits = dynamic(() => import('sections/LandingPages/itwmedia/keybenefits'), {
  ssr: false,
});
const EndForm = dynamic(() => import('sections/LandingPages/itwmedia/endform_new'), { ssr: false });
const WhyGarbhaGudi = dynamic(() => import('sections/LandingPages/ivf/whygarbhagudi'), {
  ssr: false,
});
const Testimonial = dynamic(() => import('sections/home/testimonial'), { ssr: false });
const Plans = dynamic(() => import('sections/LandingPages/ivf/plans'), { ssr: false });
const Doctors = dynamic(() => import('sections/LandingPages/ivf/Doctors'), { ssr: false });
const Branches = dynamic(() => import('sections/LandingPages/Neutral/branches'), { ssr: false });
const TermsaAndConditions = dynamic(
  () => import('sections/LandingPages/itwmedia/termsAndConditions'),
  { ssr: false }
);
const Faq = dynamic(() => import('sections/home/faq'), { ssr: false });

export default function LandingPage({ doctors, branches }) {
  return (
    <div>
      <Head>
        <link
          rel='preload'
          href='https://res.cloudinary.com/garbhagudiivf/image/upload/v1732969307/paripoorna/IVF_WebP_Compression_p0cbco.webp'
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
          content='GarbhaGudi is a chain of new generation infertility treatment hospitals equipped with state-of-the-art infrastructure and cutting-edge technology to address this ever-increasing infertility problem.'
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
      <Branches branches={branches} />
      <Testimonial />
      <Faq />
      <TermsaAndConditions />
      <EndForm />
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
          location
          image {
            url
          }
          imageAlt
          bio {
            raw
          }
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
  return {
    props: {
      doctors: data.doctors,
      branches: data.branches,
      fallback: true,
    },
  };
};
