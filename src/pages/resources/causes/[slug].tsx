import apolloClient from 'lib/apollo-graphcms';
import { gql } from '@apollo/client';
import { RichText } from '@graphcms/rich-text-react-renderer';
import Head from 'next/head';
import BreadCrumbs from 'components/breadcrumbs';
import { useRouter } from 'next/router';
import Loading from 'components/Loading';
import Image from 'next/image';
import dynamic from 'next/dynamic';
const Cta = dynamic(() => import('sections/gg-care/cta'), { ssr: false });
const Share = dynamic(() => import('components/share'), { ssr: false });

export const getStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query({
    query: gql`
      query ($slug: String!) {
        cause(where: { slug: $slug }) {
          id
          title
          image {
            url
          }
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
  if (data?.error || !data.cause) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      cause: data.cause,
    },
    revalidate: 180,
  };
};

export const getStaticPaths = async () => {
  const { data } = await apolloClient.query({
    query: gql`
      query {
        causes {
          title
          slug
        }
      }
    `,
  });
  return {
    paths: data.causes.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
};

const Blog = ({ cause }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  const title = `${cause?.title} | GarbhaGudi`;
  return (
    <div>
      <Head>
        {/* Primary Tags */}
        <link rel='preload' href={cause?.image.url} as='image' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='robots' content='noindex, nofollow' />
        <title>{title}</title>
        <meta name='title' content={`${cause?.title} | GarbhaGudi IVF Centre`} />
        <meta name='description' content={cause?.content?.text.slice(0, 160)} />

        {/* Open Graph / Facebook */}

        <meta property='og:title' content={`${cause?.title} | GarbhaGudi IVF Centre`} />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta property='og:description' content={cause?.content?.text.slice(0, 160)} />
        <meta property='og:type' content='website' />
        <meta property='og:image' content={cause?.image.url} />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content={`${cause?.title} | GarbhaGudi IVF Centre`} />
        <meta name='twitter:description' content={cause?.content?.text.slice(0, 160)} />
        <meta name='twitter:image' content={cause?.image.url} />
      </Head>
      <BreadCrumbs
        link1='/resources/causes'
        text1='Resources'
        link2={'/resources/causes'}
        text2={'Causes'}
        link3={'#'}
        text3={cause?.title}
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
                {cause?.title}
              </span>
            </h1>
            <figure>
              <Image
                className='mb-5 mt-10 w-full rounded-lg'
                src={cause?.image.url}
                alt={cause?.title}
                width={800}
                height={500}
                priority={true}
              />
            </figure>
            <div className='text-gray-800 dark:text-gray-200'>
              <RichText
                content={cause?.content?.raw?.children}
                renderers={{
                  p: ({ children }) => <p className='text-justify'>{children}</p>,
                }}
              />
            </div>
            <Share pinmedia={cause?.image?.url} />
          </div>
        </div>
      </div>
      <Cta />
    </div>
  );
};
export default Blog;
