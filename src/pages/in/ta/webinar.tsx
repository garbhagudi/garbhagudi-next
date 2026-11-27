import Head from 'next/head';
import WebinarBanner from 'sections/hosur-home/WebinarBanner';

const TamilWebinar = () => {
  function addBreadcrumbJsonLd() {
    return {
      __html: `{
        "@context": "https://schema.org/",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.garbhagudi.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Webinar",
            "item": "https://www.garbhagudi.com/in/ta/webinar"
          }
        ]
      }`,
    };
  }

  return (
    <div className='bg-white'>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Best IVF Centre in Hosur | IVF Hospital in Hosur - GarbhaGudi</title>
        <meta
          name='title'
          content='Best IVF Centre in Hosur | IVF Hospital in Hosur - GarbhaGudi'
        />
        <meta
          name='description'
          content='GarbhaGudi is one of the best IVF hospitals in Bangalore, offering IVF and infertility treatments with among the highest success rates. Book a consultation now at the best GarbhaGudi IVF hospital in Hosur.'
        />
        <link rel='canonical' href='https://www.garbhagudi.com/in/ta/webinar' />

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={addBreadcrumbJsonLd()}
          key='breadcrumb-jsonld'
        />

        <meta
          property='og:title'
          content='Best IVF Centre in Hosur | IVF Hospital in Hosur - GarbhaGudi'
        />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://www.garbhagudi.com/in/ta/webinar' />
        <meta
          property='og:description'
          content='GarbhaGudi is one of the best IVF hospitals in Bangalore, offering IVF and infertility treatments with among the highest success rates. Book a consultation now at the best GarbhaGudi IVF hospital in Hosur.'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8v87qr57nu07plks7j7nzs'
        />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta
          name='twitter:title'
          content='Best IVF Centre in Hosur | IVF Hospital in Hosur - GarbhaGudi'
        />
        <meta
          name='twitter:description'
          content='GarbhaGudi is one of the best IVF hospitals in Bangalore, offering IVF and infertility treatments with among the highest success rates. Book a consultation now at the best GarbhaGudi IVF hospital in Hosur.'
        />
        <meta
          name='twitter:image'
          content='https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8v87qr57nu07plks7j7nzs'
        />
      </Head>
      <WebinarBanner />
    </div>
  );
};

TamilWebinar.hideRequestCallBack = true;
TamilWebinar.hideFloatPhone = true;

export default TamilWebinar;
