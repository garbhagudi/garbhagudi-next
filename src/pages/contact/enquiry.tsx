import Head from 'next/head';
import Form from 'sections/LandingPages/Performant/form';
import Image from 'next/image';
import BreadCrumbs from 'components/breadcrumbs';
import { generateBreadcrumbSchema } from 'lib/schema-utils';

const IndexPage = () => {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.garbhagudi.com/' },
    { name: 'Contact', url: 'https://www.garbhagudi.com/contact' },
    { name: 'Enquiry', url: 'https://www.garbhagudi.com/contact/enquiry' },
  ]);
  return (
    <div>
      <Head>
        <link rel='alternate' href='https://garbhagudi.com/enquiry' hrefLang='en-IN' />
        <link rel='alternate' href='https://garbhagudi.com/enquiry' hrefLang='x-default' />
        <link
          rel='preload'
          href='https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8iqmf63ps507pl13e62vkv'
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
        <meta property='og:url' content='https://garbhagudi.com/enquiry' />
        <meta
          property='og:description'
          content='GarbhaGudi is a chain of new generation infertility treatment hospitals equipped with state-of-the-art cutting-edge technology to address infertility.'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8iqmf63ps507pl13e62vkv'
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
          content='https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8iqmf63ps507pl13e62vkv'
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
          id='breadcrumbs-jsonld'
        />
      </Head>
      <BreadCrumbs
        link1='/contact'
        text1='Contact'
        text2='Enquiry'
        link2='/contact/enquiry'
        link3={''}
        text3={''}
        link4={''}
        text4={''}
      />
      <div className='flex w-full items-center justify-center px-3 py-8'>
        <div className='w-fit'>
          <Image
            quality={85}
            src='https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8iqmf63ps507pl13e62vkv'
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
