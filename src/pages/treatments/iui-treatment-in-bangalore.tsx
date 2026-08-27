import Head from 'next/head';
import JsonLd from 'components/json-ld';
import { buildProcedurePage, schemaGraph } from 'lib/schema';
import dynamic from 'next/dynamic';
import Header from 'sections/LandingPages/unbounce/header';

// Dynamically import the components without SSR
const LPACta = dynamic(() => import('components/LPACta'), { ssr: false });
const CallToAction = dynamic(() => import('sections/misc/iui-main/CallToAction'), { ssr: false });
const Banner = dynamic(() => import('sections/misc/iui-main/banner'), { ssr: true });
const Content = dynamic(() => import('sections/misc/iui-main/content'), { ssr: false });
const Cost = dynamic(() => import('sections/misc/iui-main/cost'), { ssr: false });
const Faq = dynamic(() => import('sections/misc/iui-main/faq'), { ssr: false });
const ContentXtra = dynamic(() => import('sections/misc/iui-main/more-content'), { ssr: false });

const Iui = () => {
  const pageUrl = '/treatments/iui-treatment-in-bangalore';
  const schema = schemaGraph(
    ...buildProcedurePage({
      url: pageUrl,
      name: 'IUI Treatment in Bangalore',
      description: 'Intrauterine insemination (IUI) treatment at GarbhaGudi IVF Centre, Bangalore.',
    })
  );

  return (
    <div>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>IUI Treatment in Bangalore: Trusted Fertility Solutions</title>
        <meta name='title' content='IUI Treatment in Bangalore: Trusted Fertility Solutions ' />
        <meta
          name='description'
          content='Explore the best IUI treatment in Bangalore at GarbhaGudi IVF Centre. High success rates, affordable costs & expert care. Book a consultation today!'
        />

        {/* Open Graph / Facebook */}
        <JsonLd id='page-jsonld' data={schema} />

        <meta
          property='og:title'
          content='IUI Treatment in Bangalore: Trusted Fertility Solutions'
        />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content='Your Path to Parenthood with Expert Guidance. Experience the best IUI treatment in Bangalore, tailored to maximize your chances of conceiving. Contact us for personalized care'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8vednv58vb07pl82ss9vk1'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content='Intra-Uterine Insemination - IUI | GarbhaGudi' />
        <meta
          name='twitter:description'
          content="IUI (Intrauterine Insemination) is a fertility treatment procedure in which sperm is placed directly inside a woman's uterus to increase the chance of pregnancy."
        />
        <meta
          name='twitter:image'
          content='https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8vednv58vb07pl82ss9vk1'
        />
      </Head>
      <Header />
      <Banner />
      <Content />
      <ContentXtra />
      <CallToAction />
      <Cost />
      <Faq />
      <LPACta />
    </div>
  );
};

export default Iui;
