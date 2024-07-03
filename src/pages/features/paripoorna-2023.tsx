import React from 'react';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import Cta from 'sections/gg-care/cta';
import FAQ from 'sections/paripoorna/faq';
import Home from 'sections/paripoorna/home';
import Steps from 'sections/paripoorna/steps';
import TermsConditions from 'sections/paripoorna/tandc';
import Head from 'next/head';

const Paripoorna = () => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Paripoorna | Get flat ₹90,000 off on IVF Treatments</title>
        <meta
          name='title'
          content='Paripoorna | Get a flat ₹90,000 off on IVF Treatments'
        />
        <meta
          name='description'
          content='GarbhaGudi is where dreams come alive, hopes never fade and possibilities never end. We work to help you cherish the golden moment of holding your bundle of joy'
        />

        {/* Open Graph / Facebook */}

        <meta
          property='og:title'
          content='Paripoorna | Get a flat ₹90,000 off on IVF Treatments'
        />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content='GarbhaGudi is where dreams come alive, hopes never fade and possibilities never end. We work to help you cherish the golden moment of holding your bundle of joy'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1700052783/paripoorna/mother-with-daughter-lie-bed-dog-looking-them-min_uecuvg.webp'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta
          name='twitter:title'
          content='Paripoorna | Get a flat ₹90,000 off on IVF Treatments'
        />
        <meta
          name='twitter:description'
          content='GarbhaGudi is where dreams come alive, hopes never fade and possibilities never end. We work to help you cherish the golden moment of holding your bundle of joy'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1700052783/paripoorna/mother-with-daughter-lie-bed-dog-looking-them-min_uecuvg.webp'
        />
      </Head>

      <div className="overflow-x-hidden bg-[url('https://res.cloudinary.com/garbhagudiivf/image/upload/v1669643962/Banner/Bunting_kgdona.webp')] bg-contain bg-no-repeat">
        <Home />
        <Steps />
        <FAQ />
        <TermsConditions />
        <Cta />
      </div>
    </div>
  );
};
export default Paripoorna;
