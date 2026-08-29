import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import BreadCrumbs from 'components/breadcrumbs';
import JsonLd from 'components/json-ld';
import { buildBreadcrumb } from 'lib/schema';
const Cta = dynamic(() => import('sections/gg-care/cta'), { ssr: false });
const FAQ = dynamic(() => import('sections/paripoorna/faq'), { ssr: false });
const Home = dynamic(() => import('sections/paripoorna/home'), { ssr: true });
const Steps = dynamic(() => import('sections/paripoorna/steps'), { ssr: false });
const TermsConditions = dynamic(() => import('sections/paripoorna/tandc'), { ssr: false });
const Paripoorna = () => {
  const schema = buildBreadcrumb('/features/paripoorna', [
    { text: 'Features', link: '/features' },
    { text: 'Paripoorna' },
  ]);
  return (
    <div className='text-justify'>
      <Head>
        {/* Primary Tags */}
        <link
          rel='preload'
          href='https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8v87v657om07pl8iixbxn0'
          as='image'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Paripoorna | Get Flat ₹1,11,111* OFF on your IVF Treatments</title>
        <meta name='title' content='Paripoorna | Get Flat ₹1,11,111* OFF on your IVF Treatments' />
        <meta
          name='description'
          content='GarbhaGudi is where dreams come alive, hopes never fade and possibilities never end. We work to help you cherish the golden moment of holding your bundle of joy'
        />
        {/* Open Graph / Facebook */}

        <meta
          property='og:title'
          content='Paripoorna | Get Flat ₹1,11,111* OFF on your IVF Treatments'
        />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content='GarbhaGudi is where dreams come alive, hopes never fade and possibilities never end. We work to help you cherish the golden moment of holding your bundle of joy'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8vp44h5aq707pl7oyfbuqd'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta
          name='twitter:title'
          content='Paripoorna | Get Flat ₹1,11,111* OFF on your IVF Treatments'
        />
        <meta
          name='twitter:description'
          content='GarbhaGudi is where dreams come alive, hopes never fade and possibilities never end. We work to help you cherish the golden moment of holding your bundle of joy'
        />
        <meta
          name='twitter:image'
          content='https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8vb8ne585h07pl2ajrkjsk'
        />
        <link rel='canonical' href='https://garbhagudi.com/features/paripoorna' />
        <JsonLd id='page-jsonld' data={schema} />
      </Head>
      <BreadCrumbs
        link1='/features'
        text1='Features'
        text2='Paripoorna'
        link2='/features/paripoorna'
        link3={''}
        text3={''}
        link4={''}
        text4={''}
      />
      <div className="overflow-x-hidden bg-[url('https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8v87v657om07pl8iixbxn0')] bg-contain bg-no-repeat">
        <Home />
        <Steps />
        <FAQ />
        <TermsConditions />
        <Cta />
      </div>
    </div>
  );
};
export default Paripoorna;
