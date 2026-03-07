import GarbhaGudiWay from 'sections/tools/gg-way';
import Head from 'next/head';
import BreadCrumbs from 'components/breadcrumbs';
import { generateBreadcrumbSchema } from 'lib/schema-utils';

const GGWays = () => {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.garbhagudi.com/' },
    { name: 'About', url: 'https://www.garbhagudi.com/about/overview' },
    { name: 'GarbhaGudi Way', url: 'https://www.garbhagudi.com/about/garbhagudi-way' },
  ]);

  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>GarbhaGudi Way | GarbhaGudi</title>
        <meta name='title' content='About | GarbhaGudi IVF Centre' />
        <meta
          name='description'
          content='GarbhaGudi is a chain of new generation infertility treatment hospitals equipped with state-of-the-art cutting-edge technology to address infertility.'
        />

        {/* Breadcrumb Schema */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
          id='breadcrumbs-jsonld'
        />

        {/* Open Graph / Facebook */}

        <meta property='og:title' content='GarbhaGudi Way | GarbhaGudi IVF Centre' />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content='GarbhaGudi is a chain of new generation infertility treatment hospitals equipped with state-of-the-art cutting-edge technology to address infertility.'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.webp'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content='GarbhaGudi | GarbhaGudi IVF Centre' />
        <meta
          name='twitter:description'
          content='GarbhaGudi is a chain of new generation infertility treatment hospitals equipped with state-of-the-art cutting-edge technology to address infertility.'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.webp'
        />
      </Head>
      <BreadCrumbs text1='About' link1='/about/overview' text2='GarbhaGudi Way' link2='' />
      <GarbhaGudiWay />
    </div>
  );
};

export default GGWays;
