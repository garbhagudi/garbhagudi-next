import React from 'react';
import Banner from 'sections/misc/ivf-cost/hero';
import Image from 'next/image';
import Packages from 'sections/misc/ivf-cost/packages';
import Faq from 'sections/misc/ivf-cost/faq';
// import IvfProcess from 'sections/misc/ivf-cost/ivfProcess';
import Head from 'next/head';

const IvfCost = () => {
  const title = `Low IVF Cost in Bangalore`;
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='title' content={title} />
        <meta
          name='description'
          content='This December, celebrate the season of parenthood, with Paripoorna. GarbhaGudi IVF Centre is offering a flat ₹90,000/- off on your IVF cycle cost. '
        />
        {/* Open Graph / Facebook */}

        <meta property='og:title' content={title} />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content='This December, celebrate the season of parenthood, with Paripoorna. GarbhaGudi IVF Centre is offering a flat ₹90,000/- off on your IVF cycle cost. '
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.jpg'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content={title} />
        <meta
          name='twitter:description'
          content='This December, celebrate the season of parenthood, with Paripoorna. GarbhaGudi IVF Centre is offering a flat ₹90,000/- off on your IVF cycle cost. '
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.jpg'
        />
      </Head>
      <Image
        src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1670318557/Misc/5564522_ef0kux.webp'
        alt='background-image'
        className='fixed -z-20 h-full object-cover opacity-80 blur-lg'
        width={1920}
        height={1080}
      />
      <Banner />
      <Packages />
      {/* <IvfProcess /> */}
      <Faq />
    </div>
  );
};

export default IvfCost;
