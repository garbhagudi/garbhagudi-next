import Head from 'next/head';
import Form from 'sections/LandingPages/Performant/form';
import Image from 'next/image';

const IndexPage = () => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}
        <link
          rel='preload'
          href='https://res.cloudinary.com/garbhagudiivf/image/upload/v1757330189/GG_Popup_Image-01_ykvac7.webp'
          as='image'
        />
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
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1757330189/GG_Popup_Image-01_ykvac7.webp'
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
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1757330189/GG_Popup_Image-01_ykvac7.webp'
        />
      </Head>
      <div className='flex w-full items-center justify-center px-3 py-8'>
        <div className='w-fit'>
          <Image
            src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1757330189/GG_Popup_Image-01_ykvac7.webp'
            alt='formBanner'
            className='mx-auto mt-4 rounded-t-md md:max-w-2xl'
            width={1024}
            height={400}
            priority={true}
          />
          <div className='mx-auto rounded-b-md bg-gray-800'>
            <h1 className='pt-4 text-center font-lexend text-3xl text-white'>Enquiry Form</h1>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
