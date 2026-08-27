import GarbhaGudiWay from 'sections/tools/gg-way';
import Head from 'next/head';
import BreadCrumbs from 'components/breadcrumbs';
import JsonLd from 'components/json-ld';
import { buildBreadcrumb } from 'lib/schema';

const GGWays = () => {
  const schema = buildBreadcrumb('/about/garbhagudi-way', [
    { text: 'About', link: '/about/overview' },
    { text: 'GarbhaGudi Way' },
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
        <JsonLd id='page-jsonld' data={schema} />

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
          content='https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8v87qr57nu07plks7j7nzs'
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
          content='https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8v87qr57nu07plks7j7nzs'
        />
      </Head>
      <BreadCrumbs text1='About' link1='/about/overview' text2='GarbhaGudi Way' link2='' />
      <GarbhaGudiWay />
    </div>
  );
};

export default GGWays;
