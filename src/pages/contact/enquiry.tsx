import React from 'react';
import Head from 'next/head';
import Form from 'sections/LandingPages/Performant/form';

type Props = {};

const IndexPage = (props: Props) => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Enquiry Form | GarbhaGudi</title>
        <meta name='title' content='Enquiry Form | GarbhaGudi IVF Centre' />
        <meta
          name='description'
          content='GarbhaGudi is a chain of new generation infertility treatment hospitals equipped with state-of-the-art cutting-edge technology to address infertility.'
        />

        {/* Open Graph / Facebook */}

        <meta property='og:title' content='Enquiry Form' />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content='GarbhaGudi is a chain of new generation infertility treatment hospitals equipped with state-of-the-art cutting-edge technology to address infertility.'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1663403546/Banner/Google_Form_Header-min_tjenif.jpg'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content='Enquiry Form' />
        <meta
          name='twitter:description'
          content='GarbhaGudi is a chain of new generation infertility treatment hospitals equipped with state-of-the-art cutting-edge technology to address infertility.'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1663403546/Banner/Google_Form_Header-min_tjenif.jpg'
        />
      </Head>

      <div className='max-w-7xl mx-auto'>
        <img
          src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1663403546/Banner/Google_Form_Header-min_tjenif.jpg'
          alt='formBanner'
          className='md:max-w-2xl mt-4 mx-auto'
        />
        <div className='bg-[#5d4c38] max-w-2xl mx-auto'>
          {/* <iframe
          src='/contact2.html'
          className='max-w-2xl w-screen h-[80rem] mx-auto bg-gray-400'
          loading='lazy'
        ></iframe> */}
          <Form />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
