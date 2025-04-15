import Head from 'next/head';
import MediaKit from 'sections/mediaKit/main';

const IndexPage = () => {
  return (
    <div className='min-h-screen'>
      <Head>
        {/* Primary Tags */}
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Media Kit | Garbhagudi IVF Centre</title>
        <meta name='title' content={'Media Kit | Garbhagudi IVF Centre'} />
        <meta
          name='description'
          content='A comprehensive resource designed to provide journalists, influencers, and stakeholders with detailed insights into our institutions mission, achievements, and offerings.
'
        />
        {/* Open Graph / Facebook */}
        <meta property='og:title' content='Media Kit | Garbhagudi IVF Centre' />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content='A comprehensive resource designed to provide journalists, influencers, and stakeholders with detailed insights into our institutions mission, achievements, and offerings. 
'
        />
        <meta property='og:type' content='article' />
        {/* Twitter*/}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content={'Media Kit | Garbhagudi IVF Centre'} />
        <meta
          name='twitter:description'
          content='A comprehensive resource designed to provide journalists, influencers, and stakeholders with detailed insights into our institutions mission, achievements, and offerings.
'
        />
      </Head>
      <MediaKit />
    </div>
  );
};

export default IndexPage;
