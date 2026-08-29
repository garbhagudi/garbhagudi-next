import dynamic from 'next/dynamic';
import Head from 'next/head';
import Hero from 'sections/gg-care/hero';
import BreadCrumbs from 'components/breadcrumbs';
import JsonLd from 'components/json-ld';
import { buildBreadcrumb } from 'lib/schema';
const Contact = dynamic(() => import('sections/gg-care/content'), { ssr: false });
const Stats = dynamic(() => import('sections/gg-care/stats'), { ssr: false });
const Cta = dynamic(() => import('sections/gg-care/cta'), { ssr: false });
const Video = dynamic(() => import('sections/gg-care/workflow'), { ssr: false });
const FindBranch = dynamic(() => import('sections/gg-care/find-branch'), { ssr: false });
const Share = dynamic(() => import('components/share'), { ssr: false });

const IndexPage = () => {
  const schema = buildBreadcrumb('/gg-care', [{ text: 'GG Care' }]);

  return (
    <div>
      <Head>
        {/* Primary Tags */}
        <link
          rel='preload'
          href='https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8iqmgf3psd07pl3frcbfe7'
          as='image'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>GG CARE - Committed to Couple Delight</title>
        <meta
          name='title'
          content='GG CARE - Committed to Couple Delight | GarbhaGudi IVF Centre'
        />
        <meta
          name='description'
          content='To book an appointment for your Fertility and IVF treatment in GarbhaGudi, you can contact on 9108910832 or you can also Email us on dreams@garbhagudi.com.'
        />

        {/* Breadcrumb Schema */}
        <JsonLd id='page-jsonld' data={schema} />

        {/* Open Graph / Facebook */}

        <meta
          property='og:title'
          content='GG CARE - Committed to Couple Delight | GarbhaGudi IVF Centre'
        />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content="Reach out with your questions, concerns and challenges. Or just to say hi. We're always standing by and eager to help."
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8vb8oy585t07plz0qahkka'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta
          name='twitter:title'
          content='GG CARE - Committed to Couple Delight | GarbhaGudi IVF Centre'
        />
        <meta
          name='twitter:description'
          content="Reach out with your questions, concerns and challenges. Or just to say hi. We're always standing by and eager to help."
        />
        <meta
          name='twitter:image'
          content='https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8vb8oy585t07plz0qahkka'
        />
      </Head>
      <BreadCrumbs text1='GG Care' link1='/gg-care' text2='' link2='' />
      <Hero />
      <Video />
      <Stats />
      <Contact />
      <FindBranch />
      <div className='mb-5'>
        <Share pinmedia='https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8vb8oy585t07plz0qahkka' />
      </div>
      <Cta />
    </div>
  );
};

export default IndexPage;
