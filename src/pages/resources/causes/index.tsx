import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import BreadCrumbs from 'components/breadcrumbs';
import apolloClient from 'lib/apollo-graphcms';
import { gql } from '@apollo/client';
import Image from 'next/image';

const IndexPage = ({ causes }) => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Causes for Infertility | GarbhaGudi</title>
        <meta name='title' content='Causes for Infertility | GarbhaGudi IVF Centre' />
        <meta
          name='description'
          content='Treatment options, procedure details and advanced treatment options for male and female infertility treatment available at GarbhaGudi'
        />

        {/* Open Graph / Facebook */}

        <meta property='og:title' content='Causes for Infertility | GarbhaGudi IVF Centre' />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content='Treatment options, procedure details and advanced treatment options for male and female infertility treatment available at GarbhaGudi'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Cau_Diag_Treat_d0t3vx.webp'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content='Causes for Infertility | GarbhaGudi IVF Centre' />
        <meta
          name='twitter:description'
          content='Treatment options, procedure details and advanced treatment options for male and female infertility treatment available at GarbhaGudi'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Cau_Diag_Treat_d0t3vx.webp'
        />
      </Head>
      <BreadCrumbs
        link1='/resources/causes'
        text1='Resources'
        text2='Causes'
        link2='/resources/causes'
        link3={''}
        text3={''}
        link4={''}
        text4={''}
      />
      <h1 className='mx-auto max-w-7xl pt-12 text-center font-heading text-4xl font-semibold'>
        Causes of Infertility
      </h1>
      <p className='mx-auto max-w-7xl px-1 pt-6 text-center font-content font-semibold'>
        Infertility may be caused by a number of different factors, in either the male or female
        reproductive systems. However, it is sometimes not possible to explain the causes of
        infertility.
      </p>
      <div className='mx-auto flex max-w-7xl py-6 sm:py-12'>
        <div className='mx-auto grid grid-cols-1 gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {causes.map((item) => (
            <Link href={`causes/${item.slug}`} passHref key={item.id} className='group'>
              <div className='mx-auto flex w-80 cursor-pointer rounded-2xl border-2 border-solid border-brandPink px-4 py-3 transition-colors duration-100 hover:border-transparent hover:bg-brandPink hover:text-white dark:border-gray-600 dark:hover:bg-gray-600 md:w-96'>
                <div className='w-1/3'>
                  <Image
                    className='h-24 w-24 rounded-lg object-cover transition-all duration-300 group-hover:grayscale-0 dark:grayscale'
                    src={item.icon.url}
                    alt={item.title}
                    width={100}
                    height={100}
                  />
                </div>
                <div className='flex w-2/3 flex-col justify-center text-center text-gray-800 dark:text-gray-200'>
                  <p className='font-lexend text-xl font-medium'>{item.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndexPage;

export const getStaticProps = async () => {
  const { data } = await apolloClient.query({
    query: gql`
      query {
        causes {
          title
          id
          icon {
            url
          }
          slug
        }
      }
    `,
  });
  return {
    props: {
      causes: data.causes,
    },
    revalidate: 180,
  };
};
