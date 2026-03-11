import dynamic from 'next/dynamic';
import Head from 'next/head';
import Header from 'sections/mediaKit/brandResources/header';
import BRComponent from 'sections/mediaKit/main';
import BreadCrumbs from 'components/breadcrumbs';
import { generateBreadcrumbSchema } from 'lib/schema-utils';
const Cta = dynamic(() => import('sections/gg-care/cta'), { ssr: false });
const IndexPage = () => {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.garbhagudi.com/' },
    { name: 'Resources', url: 'https://www.garbhagudi.com/resources' },
    { name: 'Brand Resources', url: 'https://www.garbhagudi.com/resources/brand-resources' },
  ]);
  return (
    <div className='min-h-screen'>
      <Head>
        <title>Brand Resources | GarbhaGudi IVF Centre</title>
        <meta name='title' content='Brand Resources | GarbhaGudi IVF Centre' />
        <meta name='og:title' content='Brand Resources | GarbhaGudi IVF Centre' />
        <meta
          name='description'
          content=' Explore our Brand Resources for logos, guidelines, and more. Elevate your brand with GarbhaGudi’s trusted assets. Download now and stay consistent!
'
        />
        <meta
          name='og:description'
          content="Explore our Brand Resources for logos, guidelines, and more. Elevate your brand with GarbhaGudi's trusted assets. Download now and stay consistent!"
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
          id='breadcrumbs-jsonld'
        />
      </Head>
      <BreadCrumbs
        link1='/resources'
        text1='Resources'
        text2='Brand Resources'
        link2='/resources/brand-resources'
        link3={''}
        text3={''}
        link4={''}
        text4={''}
      />
      <Header />
      <BRComponent />
      <Cta />
    </div>
  );
};

export default IndexPage;
