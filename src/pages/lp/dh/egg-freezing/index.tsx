import Head from 'next/head';
import React from 'react';
import CTA from 'sections/egg-freezing/cta';
import Expects from 'sections/egg-freezing/Expects';
import Faq from 'sections/egg-freezing/faq';
import FertilityTest from 'sections/egg-freezing/FertilityTest';
import Freezing from 'sections/egg-freezing/Freezing';
import Banner from 'sections/egg-freezing/lp/banner';
import Header from 'sections/egg-freezing/lp/Header';
import Overview from 'sections/egg-freezing/overview';
import PlannedSteps from 'sections/egg-freezing/PlannedSteps';

export default function eggFreezing() {
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
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.jpg'
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
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.jpg'
        />
      </Head>
      <Header />
      <Banner />
      <Overview />
      <FertilityTest />
      <PlannedSteps />
      <Freezing />
      <Expects />
      <Faq />
      <CTA />
    </div>
  );
}
