import { RichText } from '@graphcms/rich-text-react-renderer';
import Head from 'next/head';
import BreadCrumbs from 'components/breadcrumbs';
import { useRouter } from 'next/router';
import Loading from 'components/Loading';
import apolloClient from 'lib/apollo-graphcms';
import { gql } from '@apollo/client';
import Image from 'next/image';
import dynamic from 'next/dynamic';
const Cta = dynamic(() => import('sections/gg-care/cta'), { ssr: false });
const Share = dynamic(() => import('components/share'), { ssr: false });
export const getStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query({
    query: gql`
      query ($slug: String!) {
        diagnosis(where: { slug: $slug }) {
          id
          title
          image {
            url
          }
          imageUrl
          content {
            raw
            text
          }
        }
      }
    `,
    variables: {
      slug: params.slug,
    },
  });
  if (data?.error || !data.diagnosis) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      diagnosis: data.diagnosis,
    },
    revalidate: 180,
  };
};

export const getStaticPaths = async () => {
  const { data } = await apolloClient.query({
    query: gql`
      query {
        diagnoses {
          title
          slug
        }
      }
    `,
  });

  return {
    paths: data.diagnoses.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
};

const Diagnosis = ({ diagnosis }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  function addReviewJsonLd() {
    if (!diagnosis?.title || !diagnosis?.image?.url) {
      return { __html: '' };
    }

    const title = diagnosis.title.replace(/"/g, '\\"');
    const image = diagnosis.image.url;
    const description = diagnosis?.content?.text?.slice(0, 160)?.replace(/"/g, '\\"') || '';

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
              "name": "Resources",
              "item": "https://www.garbhagudi.com/resources"
            },
            {
              "@type": "ListItem",
              "position": "2",
              "name": "Diagnosis",
              "item": "https://www.garbhagudi.com/resources/diagnosis"
            },
            {
              "@type": "ListItem",
              "position": "3",
              "name": "${diagnosis?.title}",
              "item": "https://www.garbhagudi.com/resources/diagnosis/${diagnosis?.slug}"
            }
          ]
        }`,
    };
  }
  function addDocJsonLd() {
    return {
      __html: `{
  "name": "${diagnosis?.title}",
  "@type": "Product",
  "@context": "https://schema.org/",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingCount": "604",
    "ratingValue": "4.9",
    "reviewCount": "1200"
  }
}`,
    };
  }

  const title = `${diagnosis?.title} | GarbhaGudi`;
  return (
    <div>
      <Head>
        {/* Primary Tags */}
        <link rel='preload' href={diagnosis?.imageUrl} as='image' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{title}</title>
        <meta name='title' content={`${diagnosis?.title} | GarbhaGudi IVF Centre`} />
        <meta name='description' content={diagnosis?.content?.text.slice(0, 160)} />

        {/* Open Graph / Facebook */}

        <meta property='og:title' content={`${diagnosis?.title} | GarbhaGudi IVF Centre`} />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta property='og:description' content={diagnosis?.content?.text.slice(0, 160)} />
        <meta property='og:type' content='website' />
        <meta property='og:image' content={diagnosis?.imageUrl} />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content={`${diagnosis?.title} | GarbhaGudi IVF Centre`} />
        <meta name='twitter:description' content={diagnosis?.content?.text.slice(0, 160)} />
        <meta name='twitter:image' content={diagnosis?.imageUrl} />

        {/* Ld+JSON Data */}
        <script
          id='breadcrumbs-jsonld'
          type='application/ld+json'
          dangerouslySetInnerHTML={addBreadcrumbsJsonLd()}
        />
        <script
          id='review-jsonld'
          type='application/ld+json'
          dangerouslySetInnerHTML={addReviewJsonLd()}
        />
        <script type='application/ld+json' dangerouslySetInnerHTML={addDocJsonLd()} />
      </Head>
      <BreadCrumbs
        link1='/resources/diagnosis'
        text1='Resources'
        link2={'/resources/diagnosis'}
        text2={'Diagnosis'}
        link3={'#'}
        text3={diagnosis?.title}
        link4=''
        text4=''
      />
      <div className='relative overflow-hidden bg-white py-16 dark:bg-gray-800'>
        <div className='hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full'>
          <div className='relative mx-auto h-full max-w-prose text-lg' aria-hidden='true'>
            <svg
              className='absolute left-full top-12 translate-x-32 transform'
              width={404}
              height={384}
              fill='none'
              viewBox='0 0 404 384'
            >
              <defs>
                <pattern
                  id='74b3fd99-0a6f-4271-bef2-e80eeafdf357'
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits='userSpaceOnUse'
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className='text-gray-200 dark:text-gray-700'
                    fill='currentColor'
                  />
                </pattern>
              </defs>
              <rect width={404} height={384} fill='url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)' />
            </svg>
            <svg
              className='absolute right-full top-1/2 -translate-x-32 -translate-y-1/2 transform'
              width={404}
              height={384}
              fill='none'
              viewBox='0 0 404 384'
            >
              <defs>
                <pattern
                  id='f210dbf6-a58d-4871-961e-36d5016a0f49'
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits='userSpaceOnUse'
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className='text-gray-100 dark:text-gray-700'
                    fill='currentColor'
                  />
                </pattern>
              </defs>
              <rect width={404} height={384} fill='url(#f210dbf6-a58d-4871-961e-36d5016a0f49)' />
            </svg>
            <svg
              className='absolute bottom-12 left-full translate-x-32 transform'
              width={404}
              height={384}
              fill='none'
              viewBox='0 0 404 384'
            >
              <defs>
                <pattern
                  id='d3eb07ae-5182-43e6-857d-35c643af9034'
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits='userSpaceOnUse'
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className='text-gray-200 dark:text-gray-700'
                    fill='currentColor'
                  />
                </pattern>
              </defs>
              <rect width={404} height={384} fill='url(#d3eb07ae-5182-43e6-857d-35c643af9034)' />
            </svg>
          </div>
        </div>
        <div className='relative px-4 sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-7xl'>
            <h1>
              <span className='mt-4 block text-center font-heading text-2xl font-bold leading-8 tracking-tight text-gray-800 dark:text-gray-200 sm:text-4xl'>
                {diagnosis?.title}
              </span>
            </h1>
            <figure>
              <Image
                className='mb-5 mt-10 w-full rounded-lg'
                src={diagnosis?.imageUrl}
                alt={diagnosis?.title}
                width={800}
                height={500}
                priority={true}
              />
            </figure>
            <div className='text-justify text-gray-800 dark:text-gray-200'>
              <RichText
                content={diagnosis?.content?.raw?.children}
                renderers={{
                  p: ({ children }) => <p className='text-justify'>{children}</p>,
                  a: ({ children, href }) => (
                    <a href={href} className='text-gg-500 underline'>
                      {children}
                    </a>
                  ),
                }}
              />
            </div>
            <div>
              <Share pinmedia={diagnosis?.imageUrl} />
            </div>
          </div>
        </div>
      </div>
      <Cta />
    </div>
  );
};
export default Diagnosis;
