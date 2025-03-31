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
      </Head>
      <Header />
      <BRComponent />
      <Cta />
    </div>
  );
};

export default IndexPage;
