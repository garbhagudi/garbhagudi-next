import Head from 'next/head';
import MediaKit from 'sections/mediaKit/main';
import BreadCrumbs from 'components/breadcrumbs';
import { generateBreadcrumbSchema } from 'lib/schema-utils';

const IndexPage = () => {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.garbhagudi.com/' },
    { name: 'Contact', url: 'https://www.garbhagudi.com/contact' },
    { name: 'Media Kit', url: 'https://www.garbhagudi.com/contact/media-kit' },
  ]);
  return (
    <div className='min-h-screen'>
      <Head>
        {/* Primary Tags */}
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Media Kit | GarbhaGudi IVF Centre</title>
        <meta name='title' content={'Media Kit | GarbhaGudi IVF Centre'} />
        <meta name='og:title' content='Media Kit | GarbhaGudi IVF Centre' />
        <meta
          name='description'
          content='Explore our Media Kit for brand assets, press info, and collaboration opportunities. Download now to partner with GarbhaGudi IVF Centre!
'
        />
        <meta
          name='og:description'
          content='Explore our Media Kit for brand assets, press info, and collaboration opportunities. Download now to partner with GarbhaGudi IVF Centre!'
        />
        {/* Open Graph / Facebook */}
        <meta property='og:title' content='Media Kit | GarbhaGudi IVF Centre' />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content='Explore our Media Kit for brand assets, press info, and collaboration opportunities. Download now to partner with GarbhaGudi IVF Centre! 
'
        />
        <meta property='og:type' content='article' />
        {/* Twitter*/}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content={'Media Kit | GarbhaGudi IVF Centre'} />
        <meta
          name='twitter:description'
          content='Explore our Media Kit for brand assets, press info, and collaboration opportunities. Download now to partner with GarbhaGudi IVF Centre!
'
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
        text2='Media Kit'
        link2='/contact/media-kit'
        link3={''}
        text3={''}
        link4={''}
        text4={''}
      />
      <MediaKit />
    </div>
  );
};

export default IndexPage;
