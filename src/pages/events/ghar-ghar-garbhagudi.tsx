import dynamic from 'next/dynamic';
import Head from 'next/head';
const Hero = dynamic(() => import('sections/misc/ghar-ghar-garbhagudi/hero'), { ssr: true });
const Gallery = dynamic(() => import('sections/misc/ghar-ghar-garbhagudi/gallery'), { ssr: false });
const EventInfo = dynamic(() => import('sections/misc/ghar-ghar-garbhagudi/eventInfo'), {
  ssr: false,
});
const CTA = dynamic(() => import('sections/misc/ghar-ghar-garbhagudi/cta'), { ssr: false });
const ContentOne = dynamic(
  () => import('sections/misc/ghar-ghar-garbhagudi/content').then((mod) => mod.ContentOne),
  { ssr: false }
);

const ContentTwo = dynamic(
  () => import('sections/misc/ghar-ghar-garbhagudi/content').then((mod) => mod.ContentTwo),
  { ssr: false }
);

const IndexPage = () => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Ghar Ghar GarbhaGudi | GarbhaGudi</title>
        <meta name='title' content='Ghar Ghar GarbhaGudi | GarbhaGudi IVF Centre' />
        <meta
          name='description'
          content='Every couple deserves to experience the joy of parenthood and with Ghar Ghar GarbhaGudi we are making it possible for everyone.'
        />

        {/* Open Graph / Facebook */}

        <meta property='og:title' content='Ghar Ghar GarbhaGudi' />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content='Every couple deserves to experience the joy of parenthood and with Ghar Ghar GarbhaGudi we are making it possible for everyone.'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1694509085/Misc/GGG_Logo_eng_thb8cv.webp'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content='Ghar Ghar GarbhaGudi' />
        <meta
          name='twitter:description'
          content='Every couple deserves to experience the joy of parenthood and with Ghar Ghar GarbhaGudi we are making it possible for everyone.'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1694509085/Misc/GGG_Logo_eng_thb8cv.webp'
        />
      </Head>
      <Hero />
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <EventInfo />
        <ContentOne />
        <Gallery />
        <ContentTwo />
      </div>
      <CTA />
    </div>
  );
};

export default IndexPage;
