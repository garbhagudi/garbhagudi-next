import React from 'react';
import apolloClient from 'lib/apollo-graphcms';
import { gql } from '@apollo/client';
import { RichText } from '@graphcms/rich-text-react-renderer';
import Error from 'next/error';
import Head from 'next/head';
import BreadCrumbs from 'components/breadcrumbs';

export const getStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query({
    query: gql`
      query ($slug: String!) {
        valueAddedService(where: { slug: $slug }) {
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

  return {
    props: {
      valueAddedService: data.valueAddedService,
    },
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
  const desc = `${valueAddedService?.content.text.slice(0, 160)}`;
  const image = `${valueAddedService?.image.url}`;
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{title}</title>
        <meta name='title' content={title} />
        <meta name='description' content={desc} />

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
        link2={valueAddedService.title}
        text2={valueAddedService.title}
        link3={''}
        text3={''}
        link4={''}
        text4={''}
      />
      <div className='relative py-16 bg-white overflow-hidden'>
        <div className='hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full'>
          <div
            className='relative h-full text-lg max-w-prose mx-auto'
            aria-hidden='true'
          >
            <svg
              className='absolute top-12 left-full transform translate-x-32'
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
                    className='text-gray-200'
                    fill='currentColor'
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill='url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)'
              />
            </svg>
            <svg
              className='absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32'
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
                    className='text-gray-100'
                    fill='currentColor'
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill='url(#f210dbf6-a58d-4871-961e-36d5016a0f49)'
              />
            </svg>
            <svg
              className='absolute bottom-12 left-full transform translate-x-32'
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
                    className='text-gray-200'
                    fill='currentColor'
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill='url(#d3eb07ae-5182-43e6-857d-35c643af9034)'
              />
            </svg>
          </div>
        </div>
        <div className='relative px-4 sm:px-6 lg:px-8'>
          {valueAddedService?.title ? (
            <div className='max-w-7xl mx-auto'>
              <h1>
                <span className='mt-4 block text-2xl text-center leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl font-heading'>
                  {valueAddedService?.title}
                </span>
              </h1>
              <figure>
                <img
                  className='w-full rounded-lg mt-10 mb-5'
                  src={valueAddedService?.image.url}
                  alt={valueAddedService?.title}
                />
              </figure>
              <div>
                <RichText content={valueAddedService?.content.raw.children} />
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
export default Vas;
