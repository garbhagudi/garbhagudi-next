import MythsFacts from 'sections/myth-and-facts';
import Head from 'next/head';
import dynamic from 'next/dynamic';
const Cta = dynamic(() => import('sections/gg-care/cta'), { ssr: false });

const MythsAndFacts = () => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='robots' content='noindex, nofollow' />
        <title>Myths and Facts | GarbhaGudi</title>
        <meta name='title' content='Myths and Facts | GarbhaGudi IVF Centre' />
        <meta
          name='description'
          content='Discover the myths and facts about fertility treatments at GarbhaGudi. Get expert insights and make informed decisions. Visit now to learn more!'
        />

        {/* Open Graph / Facebook */}

        <meta property='og:title' content='Frequently Asked Questions | GarbhaGudi IVF Centre' />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content='Discover the myths and facts about fertility treatments at GarbhaGudi. Get expert insights and make informed decisions. Visit now to learn more!'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802155/SEO/OG_images_FAQs_k40phu.webp'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content='Myths and Facts | GarbhaGudi IVF Centre' />
        <meta
          name='twitter:description'
          content='Discover the myths and facts about fertility treatments at GarbhaGudi. Get expert insights and make informed decisions. Visit now to learn more!'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802155/SEO/OG_images_FAQs_k40phu.webp'
        />
      </Head>
      <MythsFacts />
      <Cta />
    </div>
  );
};

export default MythsAndFacts;
