import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import BreadCrumbs from 'components/breadcrumbs';
import { generateBreadcrumbSchema } from 'lib/schema-utils';
const Cta = dynamic(() => import('sections/gg-care/cta'), { ssr: false });
const FAQ = dynamic(() => import('sections/paripoorna/faq'), { ssr: false });
const Home = dynamic(() => import('sections/paripoorna/home'), { ssr: true });
const Steps = dynamic(() => import('sections/paripoorna/steps'), { ssr: false });
const TermsConditions = dynamic(() => import('sections/paripoorna/tandc'), { ssr: false });
const Paripoorna = () => {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.garbhagudi.com/' },
    { name: 'Features', url: 'https://www.garbhagudi.com/features' },
    { name: 'Paripoorna', url: 'https://www.garbhagudi.com/features/paripoorna' },
  ]);
  return (
    <div className='text-justify'>
      <Head>
        {/* Primary Tags */}
        <link
          rel='preload'
          href='https://res.cloudinary.com/garbhagudiivf/image/upload/v1669643962/Banner/Bunting_kgdona.webp'
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
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1731247437/paripoorna/Paripoorna_English_tfrujt.webp'
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
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1700052783/paripoorna/mother-with-daughter-lie-bed-dog-looking-them-min_uecuvg.webp'
        />
        <link rel='canonical' href='https://garbhagudi.com/features/paripoorna' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
          id='breadcrumbs-jsonld'
        />
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
      <div className="overflow-x-hidden bg-[url('https://res.cloudinary.com/garbhagudiivf/image/upload/v1669643962/Banner/Bunting_kgdona.webp')] bg-contain bg-no-repeat">
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
