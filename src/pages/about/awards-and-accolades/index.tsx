import React from 'react';
import apolloClient from 'lib/apollo-graphcms';
import { gql } from '@apollo/client';
import Link from 'next/link';
import BreadCrumbs from 'components/breadcrumbs';
import Head from 'next/head';

export const getStaticProps = async () => {
  const { data } = await apolloClient.query({
    query: gql`
      query {
        awards {
          id
          title
          slug
          image {
            url
          }
        }
      }
    `,
  });

  return {
    props: {
      award: data.awards,
    },
    revalidate: 180,
  };
};

const Awards = ({ award }) => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Awards &amp; Accolades GarbhaGudi IVF Centre</title>
        <meta
          name='title'
          content={`Awards & Accolades GarbhaGudi IVF Centre`}
        />
        <meta
          name='description'
          content='GarbhaGudi Recognised as Best IVF & Fertility Hospital in India'
        />

        {/* Open Graph / Facebook */}

        <meta
          property='og:title'
          content={`Awards & Accolades GarbhaGudi IVF Centre`}
        />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content='GarbhaGudi Recognised as Best IVF & Fertility Hospital in India'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.jpg'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta
          name='twitter:title'
          content={`Awards & Accolades GarbhaGudi IVF Centre`}
        />
        <meta
          name='twitter:description'
          content='GarbhaGudi Recognised as Best IVF & Fertility Hospital in India'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.jpg'
        />
      </Head>
      <BreadCrumbs
        link1='/about/overview'
        text1='About'
        text2={`Awards & Accolades`}
        link2={`/about/awards-and-accolades`}
        link3={''}
        text3={''}
        link4={''}
        text4={''}
      />
      <div className='relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
        <div className='absolute inset-0'>
          <div className='bg-white dark:bg-gray-800 h-1/3 sm:h-2/3' />
        </div>
        <div className='relative max-w-7xl mx-auto'>
          <div className='text-center'>
            <h1 className='text-3xl tracking-tight font-extrabold text-gray-800 dark:text-gray-200 sm:text-4xl font-heading drop-shadow-xl'>
              Awards and Accolades
            </h1>
          </div>
          <div className='mt-12 max-w-xl mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none w'>
            {award?.map((item: any) => (
              <div
                key={item?.id}
                className='flex flex-col rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:transition-all hover:-translate-x-2 hover:-translate-y-2 duration-300'
              >
                <Link
                  href={`/about/awards-and-accolades/${item?.slug}`}
                  passHref
                >
                  <div className='flex-shrink-0'>
                    <img
                      className='h-38 w-full object-contain rounded-t-lg cursor-pointer'
                      src={item?.image?.url}
                      alt={item?.title}
                    />
                  </div>
                </Link>
                <div className='flex-1 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-6 flex flex-col justify-between'>
                  <div className='flex-1'>
                    <Link
                      href={`/about/awards-and-accolades/${item?.slug}`}
                      passHref
                    >
                      <p className='text-lg font-semibold cursor-pointer font-heading'>
                        {item?.title}
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
