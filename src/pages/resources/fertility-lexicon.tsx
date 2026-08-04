import Head from 'next/head';
import BreadCrumbs from 'components/breadcrumbs';
import { generateBreadcrumbSchema } from 'lib/schema-utils';
import GlossaryContent from 'sections/resources/fertilityGlossary/GlossaryContent';

const LexiconPage = () => {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.garbhagudi.com/' },
    { name: 'Resources', url: 'https://www.garbhagudi.com/resources' },
    {
      name: 'Fertility Lexicon',
      url: 'https://www.garbhagudi.com/resources/fertility-lexicon',
    },
  ]);

  return (
    <div>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='robots' content='noindex, nofollow' />
        <title>Fertility Lexicon | GarbhaGudi</title>
        <meta name='title' content='Fertility Lexicon | GarbhaGudi IVF Centre' />
        <meta
          name='description'
          content='Browse fertility and IVF lexicon terms with clear definitions. A quick reference guide from GarbhaGudi for patients and partners.'
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
          id='breadcrumbs-jsonld'
        />
        <meta property='og:title' content='Fertility Lexicon | GarbhaGudi IVF Centre' />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://www.garbhagudi.com/resources/fertility-lexicon' />
        <meta
          property='og:description'
          content='Browse fertility and IVF lexicon terms with clear definitions. A quick reference guide from GarbhaGudi.'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8vedjb58un07pl4jrnnojz'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content='Fertility Lexicon | GarbhaGudi IVF Centre' />
        <meta
          name='twitter:description'
          content='Browse fertility and IVF lexicon terms with clear definitions. A quick reference guide from GarbhaGudi.'
        />
        <meta
          name='twitter:image'
          content='https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8vedjb58un07pl4jrnnojz'
        />
      </Head>
      <BreadCrumbs text1='Resources' link1='/resources' text2='Fertility Lexicon' link2='' />
      <GlossaryContent />
    </div>
  );
};

export default LexiconPage;
