import React from 'react';
import apolloClient from 'lib/apollo-graphcms';
import { gql } from '@apollo/client';
import { RichText } from '@graphcms/rich-text-react-renderer';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Share from 'components/share';
import Loading from 'components/Loading';
import Image from 'next/image';
import type { RichTextContent } from '@graphcms/rich-text-types';

export const getStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query({
    query: gql`
      query ($slug: String!) {
        article(where: { slug: $slug }) {
          id
          title
          metaTitle
          metaDescription
          metaKeywords
          imageAlt
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
  return {
    props: {
      article: data.article,
    },
    revalidate: 180,
  };
};

export const getStaticPaths = async () => {
  const { data } = await apolloClient.query({
    query: gql`
      query {
        articles {
          title
          slug
        }
      }
    `,
  });
  return {
    paths: data.articles.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
};

interface BlogProps {
  article: {
    title: string;
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string;
    image: {
      url: string;
    };
    content: {
      text: string;
      raw: {
        children: RichTextContent;
      };
    };
    imageAlt: string;
  };
}

const Blog = ({ article }: BlogProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  const title = `${article?.title} | GarbhaGudi`;
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{title}</title>
        <meta name='title' content={`${article?.metaTitle}`} />
        <meta name='description' content={article?.metaDescription} />
        <meta name='keywords' content={article?.metaKeywords} />

        {/* Open Graph / Facebook */}

        <meta property='og:title' content={`${article?.metaTitle}`} />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta property='og:description' content={article?.metaDescription} />
        <meta property='og:type' content='website' />
        <meta property='og:image' content={article?.image.url} />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content={`${article?.metaTitle} | GarbhaGudi IVF Centre`} />
        <meta name='twitter:description' content={article?.metaDescription} />
        <meta name='twitter:image' content={article?.image.url} />
      </Head>
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
                {article?.title}
              </span>
            </h1>
            <figure>
              <Image
                className='mb-5 mt-10 w-full rounded-lg'
                src={article?.image?.url}
                alt={article?.imageAlt}
                width={1310}
                height={873}
              />
            </figure>
            <div className='text-gray-800 dark:text-gray-200'>
              <RichText content={article?.content?.raw?.children} />
            </div>
            <Share pinmedia={article?.image?.url} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;
