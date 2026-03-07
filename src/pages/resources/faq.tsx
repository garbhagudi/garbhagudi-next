import Faq from 'sections/Faq/faq';
import Head from 'next/head';
import BreadCrumbs from 'components/breadcrumbs';
import { generateBreadcrumbSchema } from 'lib/schema-utils';

const faq = () => {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.garbhagudi.com/' },
    { name: 'Resources', url: 'https://www.garbhagudi.com/resources' },
    { name: 'FAQ', url: 'https://www.garbhagudi.com/resources/faq' },
  ]);

  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Frequently Asked Questions | GarbhaGudi</title>
        <meta name='title' content='Frequently Asked Questions | GarbhaGudi IVF Centre' />
        <meta
          name='description'
          content='Explore Frequently Asked Questions about fertility treatments at GarbhaGudi. Get expert answers & clear your doubts today! Visit now to learn more.'
        />

        {/* Breadcrumb Schema */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
          id='breadcrumbs-jsonld'
        />

        {/* Open Graph / Facebook */}

        <meta property='og:title' content='Frequently Asked Questions | GarbhaGudi IVF Centre' />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content='Explore Frequently Asked Questions about fertility treatments at GarbhaGudi. Get expert answers & clear your doubts today! Visit now to learn more.'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802155/SEO/OG_images_FAQs_k40phu.webp'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content='Frequently Asked Questions | GarbhaGudi IVF Centre' />
        <meta
          name='twitter:description'
          content='Explore Frequently Asked Questions about fertility treatments at GarbhaGudi. Get expert answers & clear your doubts today! Visit now to learn more.'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802155/SEO/OG_images_FAQs_k40phu.webp'
        />
      </Head>
      <BreadCrumbs text1='Resources' link1='/resources' text2='FAQ' link2='' />
      <Faq />
    </div>
  );
};

export default faq;
