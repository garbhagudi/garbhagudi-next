import dynamic from 'next/dynamic';
import JsonLd from 'components/json-ld';
import { buildProcedurePage, schemaGraph } from 'lib/schema';
import Head from 'next/head';
const Cta = dynamic(() => import('sections/gg-care/cta'), { ssr: false });
const Content = dynamic(() => import('sections/misc/ivf-main/content'), { ssr: false });
const Banner = dynamic(() => import('sections/misc/ivf-main/banner'), { ssr: true });
const WhenIvf = dynamic(() => import('sections/misc/ivf-main/when-ivf'), { ssr: false });
const Faq = dynamic(() => import('sections/misc/ivf-main/faq'), { ssr: false });
const LiveBirth = dynamic(() => import('sections/misc/ivf-main/live-birth'), { ssr: false });
const Risks = dynamic(() => import('sections/misc/ivf-main/risks'), { ssr: false });
const Video = dynamic(() => import('sections/misc/ivf-main/video'), { ssr: false });
const Related = dynamic(() => import('sections/misc/ivf-main/related'), { ssr: false });

const Ivf = () => {
  const pageUrl = '/treatments/ivf-treatment-in-bangalore';
  const schema = schemaGraph(
    ...buildProcedurePage({
      url: pageUrl,
      name: 'IVF Treatment in Bangalore',
      description: 'In-vitro fertilisation (IVF) treatment at GarbhaGudi IVF Centre, Bangalore.',
    })
  );

  return (
    <div>
      <Head>
        <link
          rel='preload'
          href='https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8vb8qj586507pl03hfxicv'
          as='image'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Best IVF Treatment In Bangalore</title>
        <meta name='title' content='Best IVF Treatment In Bangalore' />
        <meta
          name='description'
          content='Explore the best IVF treatment in Bangalore at GarbhaGudi IVF Centre. High success rates, expert care & affordable costs. Book a consultation today!'
        />

        {/* Ld+JSON Data */}
        <JsonLd id='page-jsonld' data={schema} />

        {/* Open Graph / Facebook */}

        <meta property='og:title' content='Best IVF Treatment In Bangalore | GarbhaGudi ' />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content='IVF Treatment in Bangalore:Experience advanced IVF treatment in Bangalore, tailored to help you achieve your dream of parenthood. Contact us for expert care and support.'
        />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='https://media.graphassets.com/B1dYqOD6RMihLOVzSDCm' />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content='In-vitro Fertilization - IVF | GarbhaGudi' />
        <meta
          name='twitter:description'
          content='What is IVF and how does it work? IVF or In Vitro Fertilization is one of the more widely known types of Assisted Reproductive Techniques (ART).'
        />
        <meta name='twitter:image' content='https://media.graphassets.com/B1dYqOD6RMihLOVzSDCm' />
        <link rel='canonical' href='https://garbhagudi.com/treatments/ivf-treatment-in-bangalore' />
      </Head>
      <div>
        <Banner />
        <Content />
        <WhenIvf />
        <LiveBirth />
        <Faq />
        <Risks />
        <Video />
        <Related />
        <Cta />
      </div>
    </div>
  );
};

export default Ivf;
