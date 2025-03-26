import Image from 'next/image';
import { useRouter } from 'next/router';
import { gql } from '@apollo/client';
import { RichText } from '@graphcms/rich-text-react-renderer';
import type { RichTextContent } from '@graphcms/rich-text-types';
import Head from 'next/head';
import BreadCrumbs from 'components/breadcrumbs';
import dynamic from 'next/dynamic';
const Share = dynamic(() => import('components/share'), { ssr: false });
const BlogFooter = dynamic(() => import('components/blogFooter'), { ssr: false });
const Error = dynamic(() => import('next/error'), { ssr: false });
import apolloClient from 'lib/apollo-graphcms';
import Loading from 'components/Loading';
interface AwardProps {
  award: {
    id: string;
    image: {
      url: string;
    };
    doctor: {
      name: string;
    };
    content: {
      raw: {
        children: RichTextContent;
      };
      text: string;
    };
    title: string;
  };
}

export const getStaticProps = async ({ params }) => {
  const { data } =
    (await apolloClient.query({
      query: gql`
        query ($slug: String!) {
          award(where: { slug: $slug }) {
            id
            image {
              url
            }
            content {
              raw
              text
            }
            title
          }
        }
      `,
      variables: {
        slug: params.slug,
      },
    })) || {};

  return {
    props: {
      award: data.award,
    },
    revalidate: 180,
  };
};

export const getStaticPaths = async () => {
  const { data } = await apolloClient.query({
    query: gql`
      query {
        awards {
          title
          slug
        }
      }
    `,
  });

  return {
    paths: data.awards.map((award) => ({ params: { slug: award.slug } })),
    fallback: true,
  };
};

const AwardPage = ({ award }: AwardProps) => {
  const router = useRouter();
  const title = `${award?.title}`;
  if (router.isFallback) {
    return <Loading />;
  }
  return (
    <div>
      <Head>
        {/* Primary Tags */}
        {/* Preload the main image */}
        <link rel='preload' href={award?.image?.url} as='image' />
        <link rel='dns-prefetch' href='https://media.graphassets.com' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{title}</title>
        <meta name='title' content={title} />
        <meta name='description' content={award?.content?.text.slice(0, 160)} />
        {/* Open Graph / Facebook */}
        <meta property='og:title' content={award?.title} />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta property='og:description' content={award?.content?.text.slice(0, 160)} />
        <meta property='og:type' content='article' />
        <meta property='og:image' content={award?.image?.url} />
        {/* Twitter*/}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content={`${award?.title} | GarbhaGudi`} />
        <meta name='twitter:description' content={award?.content?.text.slice(0, 160)} />
        <meta name='twitter:image' content={award?.image?.url} />
      </Head>
      <BreadCrumbs
        link1='/about/'
        text1='About'
        text2={'Awards & Accolades'}
        link2='/about/awards-and-accolades'
        link3={'#'}
        text3={award?.title}
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
          {award?.title ? (
            <div className='mx-auto max-w-7xl'>
              <h1>
                <span className='mt-4 block text-center font-heading text-2xl font-bold leading-8 tracking-tight text-gray-800 dark:text-gray-200 sm:text-4xl'>
                  {award?.title}
                </span>
                <span className='mt-4 block text-center text-base font-semibold uppercase tracking-wide text-brandPink'>
                  {award?.doctor?.name}
                </span>
              </h1>
              <figure>
                <Image
                  className='mb-5 mt-10 w-full rounded-lg'
                  src={award?.image?.url}
                  alt={award?.title}
                  width={500}
                  height={320}
                  priority
                />
              </figure>
              <div className='text-gray-800 dark:text-gray-200'>
                <RichText content={award?.content?.raw.children} />
              </div>
              <div>
                <Share pinmedia={award?.image?.url} />
                <BlogFooter />
              </div>
            </div>
          ) : (
            <Error statusCode={404} />
          )}
        </div>
      </div>
    </div>
  );
};
export default AwardPage;
