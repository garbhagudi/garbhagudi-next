import React from 'react';
import Header from 'sections/about/header';
import CoreVision from 'sections/about/coreVision';
import apolloClient from 'lib/apollo-graphcms';
import Link from 'next/link';
import Head from 'next/head';
import { gql } from '@apollo/client';

const Overview = ({ directors }) => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>About | GarbhaGudi</title>
        <meta name='title' content='About | GarbhaGudi IVF Centre' />
        <meta
          name='description'
          content='GarbhaGudi is a chain of new generation infertility treatment hospitals equipped with state-of-the-art cutting-edge technology to address infertility.'
        />

        {/* Open Graph / Facebook */}

        <meta property='og:title' content='About | GarbhaGudi IVF Centre' />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content='GarbhaGudi is a chain of new generation infertility treatment hospitals equipped with state-of-the-art cutting-edge technology to address infertility.'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.jpg'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content='About | GarbhaGudi IVF Centre' />
        <meta
          name='twitter:description'
          content='GarbhaGudi is a chain of new generation infertility treatment hospitals equipped with state-of-the-art cutting-edge technology to address infertility.'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.jpg'
        />
      </Head>
      <Header />
      <div className='bg-white dark:bg-gray-800'>
        <div className='px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
          <div className='space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0'>
            <div className='space-y-5 sm:space-y-4'>
              <h2 className='text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-content text-gray-800 dark:text-gray-200'>
                Founders and Directors
              </h2>
            </div>
            <div className='lg:col-span-2'>
              <ul className='space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8'>
                {directors.map((item) => (
                  <li key={item.id}>
                    <Link href={`/about/executive-team/${item.slug}`} passHref>
                      <div className='space-y-4'>
                        <div className='aspect-square'>
                          <img
                            className='shadow-2xl object-fit rounded-3xl w-96 h-96'
                            src={item.image.url}
                            alt={item.name}
                          />
                        </div>
                        <div className='space-y-2 text-lg font-medium leading-6'>
                          <h3 className='text-2xl font-semibold font-heading text-brandDark'>
                            {item.name}
                          </h3>
                          <p className='text-sm font-semibold font-qs text-gg-500 dark:text-gg-400'>
                            {item.details}
                          </p>
                        </div>
                        <div className='text-lg'>
                          <p className='text-gray-800 dark:text-gray-200 font-content'>
                            {item.description}
                          </p>
                          <p className='mt-3 text-sm underline cursor-pointer text-brandPurple2 hover:text-brandPink font-content'>
                            Read More {'>'}{' '}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <CoreVision />
        </div>
      </div>
    </div>
  );
};

export default Overview;

export const getStaticProps = async () => {
  const { data } = await apolloClient.query({
    query: gql`
      query {
        directors {
          name
          details
          slug
          image {
            url
          }
          id
          description
        }
      }
    `,
  });
  return {
    props: {
      directors: data.directors,
    },
    revalidate: 180,
  };
};
