import dynamic from 'next/dynamic';
import Head from 'next/head';
import Banner from 'sections/egg-freezing/banner';
const Faq = dynamic(() => import('sections/egg-freezing/faq'), { ssr: false });
const FertilityTest = dynamic(() => import('sections/egg-freezing/FertilityTest'), { ssr: false });
const Freezing = dynamic(() => import('sections/egg-freezing/Freezing'), { ssr: false });
const CTA = dynamic(() => import('sections/infertility/cta'), { ssr: false });
const Expects = dynamic(() => import('sections/egg-freezing/Expects'), { ssr: false });
const Overview = dynamic(() => import('sections/egg-freezing/overview'), { ssr: false });
const PlannedSteps = dynamic(() => import('sections/egg-freezing/PlannedSteps'), { ssr: false });
const CreativeVideo = dynamic(() => import('sections/egg-freezing/creativeVideo'), { ssr: false });

export default function fertility() {
  return (
    <div>
      <Head>
        {/* Preload the main image */}
        <link
          rel='preload'
          href='https://res.cloudinary.com/garbhagudiivf/image/upload/v1733303389/Egg_Freezing_info_Web_Banner--01_easb3r.webp'
          as='image'
        />
        <link rel='dns-prefetch' href='https://media.graphassets.com' />
        {/* Primary Tags */}
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='robots' content='noindex, nofollow' />
        <title>IVF Treatment & Egg Freezing in Bangalore | GarbhaGudi</title>
        <meta name='title' content={'IVF Treatment & Egg Freezing in Bangalore | GarbhaGudi'} />
        <meta name='og:title' content='IVF Treatment & Egg Freezing | Expert Fertility Care' />
        <meta
          name='description'
          content='Explore advanced IVF treatment & egg freezing at GarbhaGudi IVF. Boost your fertility journey with expert care. Book a consultation today! 
'
        />
        <meta
          name='og:description'
          content='Explore advanced IVF treatment and egg freezing options to preserve fertility and increase your chances of conception. Trusted by thousands of hopeful parents.'
        />
        <meta
          name='keywords'
          content='egg freezing, fertility preservation, freeze eggs, IVF egg freezing, fertility clinic, best egg freezing center, GarbhaGudi IVF, fertility treatment, egg freezing cost, future pregnancy planning'
        />

        {/* Ld+JSON Data */}

        {/* Open Graph / Facebook */}
        <meta
          property='og:title'
          content='IVF Treatment & Egg Freezing in Bangalore | GarbhaGudi'
        />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content='Explore advanced IVF treatment & egg freezing at GarbhaGudi IVF. Boost your fertility journey with expert care. Book a consultation today! 
'
        />
        <meta property='og:type' content='article' />
        {/* Twitter*/}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta
          name='twitter:title'
          content={'IVF Treatment & Egg Freezing in Bangalore | GarbhaGudi'}
        />
        <meta
          name='twitter:description'
          content='Explore advanced IVF treatment & egg freezing at GarbhaGudi IVF. Boost your fertility journey with expert care. Book a consultation today! 
'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1733303389/Egg_Freezing_info_Web_Banner--01_easb3r.webp'
        />
      </Head>
      <Banner />
      <Overview />
      <FertilityTest />
      <PlannedSteps />
      <Freezing />
      <CreativeVideo />
      <Expects />
      <Faq />
      <CTA />
    </div>
  );
}
