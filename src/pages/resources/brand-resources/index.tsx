import Head from 'next/head';
import React from 'react';
import Header from 'sections/brandResources/header';
import BRComponent from 'sections/brandResources/main';

const IndexPage = () => {
  return (
    <div className='min-h-screen'>
      <Head>
        <title>Brand Resources | GarbhaGudi IVF Centre</title>
      </Head>
      <Header />
      <BRComponent />
    </div>
  );
};

export default IndexPage;
