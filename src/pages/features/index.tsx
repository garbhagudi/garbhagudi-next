import React from 'react';
import Features2 from 'sections/home/features2';
import Head from 'next/head';
import BreadCrumbs from 'components/breadcrumbs';

const IndexPage = () => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Our Versatile Approach | GarbhaGudi IVF Centre</title>
        <meta name='title' content='Our Versatile Approach | GarbhaGudi IVF Centre' />
        <meta
          name='description'
          content='At GarbhaGudi, We are always committed to providing a world of options and bringing a new ray of hope to many who are trying to conceive. So, you can expect:'
        />

        {/* Open Graph / Facebook */}

        <meta property='og:title' content='Our Versatile Approach | GarbhaGudi IVF Centre' />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content='At GarbhaGudi, We are always committed to providing a world of options and bringing a new ray of hope to many who are trying to conceive. So, you can expect:'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.jpg'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content='Our Versatile Approach | GarbhaGudi IVF Centre' />
        <meta
          name='twitter:description'
          content='At GarbhaGudi, We are always committed to providing a world of options and bringing a new ray of hope to many who are trying to conceive. So, you can expect:'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.jpg'
        />
      </Head>
      <BreadCrumbs
        link1='/features'
        text1='Features'
        link2=''
        text2=''
        link3={''}
        text3={''}
        link4={''}
        text4={''}
      />
      <Features2 />
    </div>
  );
};

export default IndexPage;
