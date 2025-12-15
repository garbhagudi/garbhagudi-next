import apolloClient from 'lib/apollo-graphcms';
import { gql } from '@apollo/client';
import { RichText } from '@graphcms/rich-text-react-renderer';
import Head from 'next/head';
import BreadCrumbs from 'components/breadcrumbs';
import { useRouter } from 'next/router';
import Loading from 'components/Loading';
import Image from 'next/image';
import { throttledFetch } from 'lib/throttle';
import dynamic from 'next/dynamic';
const FAQs = dynamic(() => import('components/FAQs'), { ssr: false });
const Cta = dynamic(() => import('sections/gg-care/cta'), { ssr: false });
const Share = dynamic(() => import('components/share'), { ssr: false });

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
            docJsonLd
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

const Treatment = ({ treatment }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <Loading />;
  }

  function addReviewJsonLd() {
    if (!treatment?.title || !treatment?.image?.url) {
      return { __html: '' };
    }

    const title = treatment.title.replace(/"/g, '\\"');
    const image = treatment.image?.url;
    const description = treatment?.content?.text?.slice(0, 160)?.replace(/"/g, '\\"') || '';

    return {
      __html: `{
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "${title}",
      "image": "${image}",
      "description": "${description}",
      "brand": {
        "@type": "Brand",
        "name": "GarbhaGudi IVF Centre"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "604"
      }
    }`,
    };
  }

  function addBreadcrumbsJsonLd() {
    return {
      __html: `{
          "@context": "https://schema.org/",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": "1",
              "name": "HOME",
              "item": "https://www.garbhagudi.com/"
            },
            {
              "@type": "ListItem",
              "position": "2",
              "name": "treatments",
              "item": "https://www.garbhagudi.com/treatments/"
            },
            {
              "@type": "ListItem",
              "position": "3",
              "name": "${treatment?.title}",
              "item": "https://www.garbhagudi.com/treatments/${treatment?.slug}"
            }
          ]
        }`,
    };
  }

  function faqJsonLd() {
    return {
      __html: `{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [${treatment?.faq
          ?.map(
            (item: { question: string; answer: { text: string } }) => `{
              "@type": "Question",
              "name": "${item.question.replace(/"/g, '\\"')}",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "${item.answer.text.replace(/"/g, '\\"')}"
              } 
            }`
          )
          .join(',')}]
          
      }
      `,
    };
  }
  function addDocJsonLd() {
    if (!treatment?.docJsonLd) return { __html: '' };
    const jsonLD =
      typeof treatment.docJsonLd === 'string'
        ? JSON.parse(treatment.docJsonLd)
        : treatment.docJsonLd;
    return {
      __html: JSON.stringify(jsonLD, null, 2),
    };
  }

  const metaDescription = treatment?.metaDescription || treatment?.content?.text?.slice(0, 160);

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
        {treatment && (
          <>
            <script
              id='review-jsonld'
              type='application/ld+json'
              dangerouslySetInnerHTML={addReviewJsonLd()}
            />
            <script
              id='breadcrumbs-jsonld'
              type='application/ld+json'
              dangerouslySetInnerHTML={addBreadcrumbsJsonLd()}
            />
            {treatment?.docJsonLd && (
              <script type='application/ld+json' dangerouslySetInnerHTML={addDocJsonLd()} />
            )}
            {treatment?.faq?.length > 0 && (
              <script
                type='application/ld+json'
                dangerouslySetInnerHTML={faqJsonLd()}
                id='faq-jsonld'
              />
            )}
          </>
        )}
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
                className='mb-5 mt-10 w-full rounded-lg'
                src={treatment?.image?.url}
                alt={treatment?.imageAlt || treatment?.title}
                width={800}
                height={500}
                priority={true}
              />
            </figure>
            <article className='text-justify text-gray-800 dark:text-gray-200'>
              {treatment?.content?.raw?.children && (
                <RichText
                  content={treatment.content.raw.children}
                  renderers={{
                    p: ({ children }) => <p className='text-justify'>{children}</p>,
                    a: ({ children, href }) => (
                      <a href={href} className='text-gg-500 underline'>
                        {children}
                      </a>
                    ),
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

      <Cta />
    </div>
  );
};
export default Treatment;
