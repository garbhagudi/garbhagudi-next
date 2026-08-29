import apolloClient from 'lib/apollo-graphcms';
import { gql } from '@apollo/client';
import { RichText } from '@graphcms/rich-text-react-renderer';
import Head from 'next/head';
import BreadCrumbs from 'components/breadcrumbs';
import JsonLd from 'components/json-ld';
import {
  buildBreadcrumb,
  buildFaqPage,
  buildMedicalWebPage,
  buildProcedure,
  procedureId,
  schemaGraph,
  toFaqEntries,
} from 'lib/schema';
import { useRouter } from 'next/router';
import Loading from 'components/Loading';
import Image from 'next/image';
import { throttledFetch } from 'lib/throttle';
import dynamic from 'next/dynamic';
import baseRichTextRenderers from 'components/richTextRenderers';
const FAQs = dynamic(() => import('components/FAQs'), { ssr: false });
const Cta = dynamic(() => import('sections/gg-care/cta'), { ssr: false });
const Share = dynamic(() => import('components/share'), { ssr: false });
const AccordionSection = dynamic(() => import('sections/accordianSection/accordionSection'), {
  ssr: false,
});

export const getStaticProps = async ({ params }) => {
  const apolloQuery = async ({ slug }) => {
    return apolloClient.query({
      query: gql`
        query ($slug: String!) {
          treatment(where: { slug: $slug }) {
            id
            title
            metaTitle
            altTitle
            metaDescription
            metaKeywords
            slug
            image {
              url
            }
            imageUrl
            imageAlt
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
          accordionSections(orderBy: createdAt_ASC) {
            heading
            defaultOpen
            links {
              label
              url
            }
          }
        }
      `,
      variables: {
        slug,
      },
    });
  };
  const { data } = await throttledFetch(apolloQuery, { slug: params.slug });
  if (data?.error || !data?.treatment) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      treatment: data.treatment,
      accordionSections: data?.accordionSections || [],
    },
    revalidate: 180,
  };
};

export const getStaticPaths = async () => {
  const apolloQuery = async () => {
    return apolloClient.query({
      query: gql`
        query {
          treatments {
            title
            slug
          }
        }
      `,
    });
  };
  const { data } = await throttledFetch(apolloQuery);
  return {
    paths: data.treatments.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
};

const Treatment = ({ treatment, accordionSections }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <Loading />;
  }

  const metaDescription = treatment?.metaDescription || treatment?.content?.text?.slice(0, 160);

  const pageUrl = `/treatments/${treatment?.slug}`;
  const schema = schemaGraph(
    buildMedicalWebPage({
      url: pageUrl,
      name: treatment?.metaTitle || treatment?.title,
      description: metaDescription,
      mainEntityId: procedureId(pageUrl),
      primaryImageUrl: treatment?.image?.url,
    }),
    buildProcedure({
      url: pageUrl,
      name: treatment?.title,
      description: treatment?.content?.text?.slice(0, 300),
    }),
    buildBreadcrumb(pageUrl, [
      { text: 'Treatments', link: '/treatments' },
      { text: treatment?.title },
    ]),
    buildFaqPage(pageUrl, toFaqEntries(treatment?.faq))
  );

  return (
    <div>
      <Head>
        {/* Primary Tags */}
        <link rel='preload' href={treatment?.image?.url} as='image' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{`${treatment?.metaTitle || treatment?.title}`}</title>
        <meta name='title' content={`${treatment?.metaTitle || treatment?.title}`} />
        <meta name='description' content={metaDescription} />
        <meta name='keywords' content={treatment?.metaKeywords} />
        {/* Ld+JSON Data */}
        <JsonLd id='page-jsonld' data={schema} />
        {/* Open Graph / Facebook */}

        <meta property='og:title' content={`${treatment?.title} | GarbhaGudi IVF Centre`} />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta property='og:description' content={metaDescription} />
        <meta property='og:type' content='website' />
        <meta property='og:image' content={treatment?.image?.url} />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content={`${treatment?.title} | GarbhaGudi IVF Centre`} />
        <meta name='twitter:description' content={metaDescription} />
        <meta name='twitter:image' content={treatment?.image?.url} />
      </Head>
      <BreadCrumbs
        link1='/treatments'
        text1='Treatments'
        link2={treatment?.slug}
        text2={treatment?.title}
      />
      <div className='bg-dotted-pattern relative overflow-hidden bg-white py-16 dark:bg-gray-800'>
        <div className='relative px-4 sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-7xl'>
            <h1>
              <span className='mt-4 block text-center font-heading text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl'>
                {treatment?.altTitle || treatment?.title}
              </span>
            </h1>
            <figure>
              <Image
                quality={85}
                className='mb-5 mt-10 w-full rounded-lg'
                src={treatment?.image?.url}
                alt={treatment?.imageAlt || treatment?.title}
                width={1280}
                height={500}
                priority={true}
              />
            </figure>
            <article className='text-justify text-gray-800 dark:text-gray-200'>
              {treatment?.content?.raw?.children && (
                <RichText
                  content={treatment.content.raw.children}
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
              )}
            </article>
            <div>
              <Share pinmedia={treatment?.image?.url} />
            </div>
          </div>
        </div>
      </div>
      {treatment?.faq?.length > 0 && (
        <div style={{ minHeight: '300px' }}>
          <FAQs data={treatment.faq} activeIndex={treatment.faq[0]?.id} />
        </div>
      )}
      <AccordionSection sections={accordionSections} />
      <Cta />
    </div>
  );
};
export default Treatment;
