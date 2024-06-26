import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import BreadCrumbs from 'components/breadcrumbs';
import apolloClient from 'lib/apollo-graphcms';
import { gql } from '@apollo/client';

const IndexPage = ({ causes }) => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Causes for Infertility | GarbhaGudi</title>
        <meta
          name='title'
          content='Causes for Infertility | GarbhaGudi IVF Centre'
        />
        <meta
          name='description'
          content='Treatment options, procedure details and advanced treatment options for male and female infertility treatment available at GarbhaGudi'
        />

        {/* Open Graph / Facebook */}

        <meta
          property='og:title'
          content='Causes for Infertility | GarbhaGudi IVF Centre'
        />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content='Treatment options, procedure details and advanced treatment options for male and female infertility treatment available at GarbhaGudi'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Cau_Diag_Treat_d0t3vx.jpg'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta
          name='twitter:title'
          content='Causes for Infertility | GarbhaGudi IVF Centre'
        />
        <meta
          name='twitter:description'
          content='Treatment options, procedure details and advanced treatment options for male and female infertility treatment available at GarbhaGudi'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Cau_Diag_Treat_d0t3vx.jpg'
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
      <h1 className='max-w-7xl mx-auto text-center text-4xl font-heading pt-12 font-semibold'>
        Causes of Infertility
      </h1>
      <p className='max-w-7xl mx-auto text-center pt-6 font-semibold font-content px-1'>
        Infertility may be caused by a number of different factors, in either
        the male or female reproductive systems. However, it is sometimes not
        possible to explain the causes of infertility.
      </p>
      <div className='max-w-7xl mx-auto py-6 flex sm:py-12'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-10 mx-auto'>
          {causes.map((item) => (
            <Link
              href={`causes/${item.slug}`}
              passHref
              key={item.id}
              className='group'
            >
              <div className='border-brandPink dark:border-gray-600 w-80 mx-auto md:w-96 px-4 py-3 border-solid rounded-2xl border-2 flex cursor-pointer hover:bg-brandPink dark:hover:bg-gray-600 hover:text-white hover:border-transparent transition-colors duration-100'>
                <div className='w-1/3'>
                  <img
                    className='w-24 h-24 object-cover rounded-lg dark:grayscale group-hover:grayscale-0 transition-all duration-300'
                    src={item.icon.url}
                    alt={item.title}
                  />
                </div>
                <div className='w-2/3 flex flex-col justify-center text-center text-gray-800 dark:text-gray-200 '>
                  <p className='font-medium text-xl font-lexend'>
                    {item.title}
                  </p>
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
