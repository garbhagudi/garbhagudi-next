import apolloClient from 'lib/apollo-graphcms';
import { gql } from '@apollo/client';
import { RichText } from '@graphcms/rich-text-react-renderer';
import Head from 'next/head';
import BreadCrumbs from 'components/breadcrumbs';
import JsonLd from 'components/json-ld';
import {
  buildBreadcrumb,
  buildFaqPage,
  buildService,
  buildWebPage,
  schemaGraph,
  serviceId,
  toFaqEntries,
} from 'lib/schema';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import FAQs from 'components/FAQs';
import baseRichTextRenderers from 'components/richTextRenderers';
const Cta = dynamic(() => import('sections/gg-care/cta'), {
  ssr: false,
  loading: () => null,
});

export const getStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query({
    query: gql`
      query ($slug: String!) {
        valueAddedService(where: { slug: $slug }) {
          title
          slug
          metaDescription
          image {
            url
          }
          imageUrl
          content {
            raw
            text
          }
          faq {
            id
            question
            answer {
              raw
              text
            }
          }
        }
      }
    `,
    variables: {
      slug: params.slug,
    },
  });
  if (data?.error || !data?.valueAddedService) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      valueAddedService: data.valueAddedService,
    },
    revalidate: 180,
  };
};

export const getStaticPaths = async () => {
  const { data } = await apolloClient.query({
    query: gql`
      query {
        valueAddedServices {
          slug
        }
      }
    `,
  });
  return {
    paths: data.valueAddedServices.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
};

const Vas = ({ valueAddedService }) => {
  const title = `${valueAddedService?.title} | GarbhaGudi IVF Centre}`;
  const desc = `${valueAddedService?.content?.text?.slice(0, 169) || ''}`;
  const image = `${valueAddedService?.image?.url}`;
  const pageUrl = `/features/${valueAddedService?.slug}`;
  const schema = schemaGraph(
    buildWebPage({
      url: pageUrl,
      name: valueAddedService?.title,
      description: valueAddedService?.metaDescription,
      mainEntityId: serviceId(pageUrl),
      primaryImageUrl: valueAddedService?.image?.url,
    }),
    buildService({
      url: pageUrl,
      name: valueAddedService?.title,
      description: valueAddedService?.content?.text?.slice(0, 300),
    }),
    buildBreadcrumb(pageUrl, [
      { text: 'Features', link: '/features' },
      { text: valueAddedService?.title },
    ]),
    buildFaqPage(pageUrl, toFaqEntries(valueAddedService?.faq))
  );

  return (
    <main className='bg-white py-16 dark:bg-gray-800'>
      <Head>
        <title>{title}</title>
        <meta name='description' content={valueAddedService?.metaDescription} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={desc} />
        <meta property='og:image' content={image} />
        <meta property='og:type' content='article' />
        <meta name='twitter:card' content='summary_large_image' />

        {/* Ld+JSON Data */}
        <JsonLd id='page-jsonld' data={schema} />
      </Head>
      <BreadCrumbs
        link1='/features'
        text1='Features'
        link2={valueAddedService?.slug}
        text2={valueAddedService.title}
      />

      <article className='mx-auto max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-8'>
        <h1 className='mt-4 block text-center font-heading text-2xl font-bold leading-8 tracking-tight text-gray-800 dark:text-gray-200 sm:text-4xl'>
          {valueAddedService?.title}
        </h1>
        <Image
          quality={85}
          className='mb-5 mt-10 w-full rounded-lg'
          src={valueAddedService?.image?.url}
          alt={valueAddedService?.title}
          width={1200}
          height={500}
          priority={true}
        />
        <section className='text-justify text-gray-800 dark:text-gray-200'>
          <RichText
            content={valueAddedService?.content?.raw?.children}
            renderers={{
              ...baseRichTextRenderers,
              iframe: ({ url, width }) => (
                <iframe
                  src={url || ''}
                  width={width || '100%'}
                  height={720}
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                  className='w-full rounded-md'
                />
              ),
            }}
          />
        </section>
        {valueAddedService?.faq?.length > 0 && (
          <div className='mt-6'>
            <FAQs data={valueAddedService?.faq} activeIndex={valueAddedService?.faq?.[0]?.id} />
          </div>
        )}
      </article>
      <Cta />
    </main>
  );
};
export default Vas;
