import apolloClient from 'lib/apollo-graphcms';
import { gql } from '@apollo/client';
import { RichText } from '@graphcms/rich-text-react-renderer';
import Error from 'next/error';
import Head from 'next/head';
import BreadCrumbs from 'components/breadcrumbs';
import Image from 'next/image';
import dynamic from 'next/dynamic';
const Cta = dynamic(() => import('sections/gg-care/cta'), { ssr: false });
export const getStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query({
    query: gql`
      query ($slug: String!) {
        valueAddedService(where: { slug: $slug }) {
          id
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
          title
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
  const desc = `${valueAddedService?.content.text.slice(0, 169)}`;
  const image = `${valueAddedService?.imageUrl}`;
  return (
    <div>
      <Head>
        {/* Primary Tags */}
        <link rel='preload' href={valueAddedService?.imageUrl} as='image' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>
          {valueAddedService?.title
            ? `${valueAddedService.title} | GarbhaGudi`
            : 'GarbhaGudi IVF Centre'}
        </title>
        <meta name='title' content={title} />
        <meta name='description' content={valueAddedService?.metaDescription || ''} />

        {/* Open Graph / Facebook */}

        <meta property='og:title' content={title} />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta property='og:description' content={desc} />
        <meta property='og:type' content='website' />
        <meta property='og:image' content={image} />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={desc} />
        <meta name='twitter:image' content={image} />
      </Head>
      <BreadCrumbs
        link1='/features'
        text1='Features'
        link2={valueAddedService?.slug}
        text2={valueAddedService.title}
        link3={''}
        text3={''}
        link4={''}
        text4={''}
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
          {valueAddedService?.title ? (
            <div className='mx-auto max-w-7xl'>
              <h1>
                <span className='mt-4 block text-center font-heading text-2xl font-bold leading-8 tracking-tight text-gray-800 dark:text-gray-200 sm:text-4xl'>
                  {valueAddedService?.title}
                </span>
              </h1>
              <Image
                className='mb-5 mt-10 w-full rounded-lg'
                src={valueAddedService?.imageUrl}
                alt={valueAddedService?.title}
                width={1200}
                height={500}
                priority={true}
              />
              <div className='text-justify text-gray-800 dark:text-gray-200'>
                <RichText
                  content={valueAddedService?.content.raw.children}
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
            </div>
          ) : (
            <Error statusCode={404} />
          )}
        </div>
      </div>
      <Cta />
    </div>
  );
};
export default Vas;
