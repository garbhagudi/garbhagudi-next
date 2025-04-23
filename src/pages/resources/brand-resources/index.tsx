import dynamic from 'next/dynamic';
import Head from 'next/head';
import Header from 'sections/mediaKit/brandResources/header';
import BRComponent from 'sections/mediaKit/main';
const Cta = dynamic(() => import('sections/gg-care/cta'), { ssr: false });
const IndexPage = () => {
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
          content='Explore our Brand Resources for logos, guidelines, and more. Elevate your brand with GarbhaGudi’s trusted assets. Download now and stay consistent!'
        />
      </Head>
      <Header />
      <BRComponent />
      <Cta />
    </div>
  );
};

export default IndexPage;
