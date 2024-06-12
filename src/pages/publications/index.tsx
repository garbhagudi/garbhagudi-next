import React from 'react';
import apolloClient from 'lib/apollo-graphcms';
import { gql } from '@apollo/client';
import Link from 'next/link';
import Head from 'next/head';
import { HiChevronRight } from 'react-icons/hi';

export const getStaticProps = async () => {
  const { data } = await apolloClient.query({
    query: gql`
      query {
        medias {
          id
          title
          description
          thumbnail {
            url
          }
          articleLink
        }
      }
    `,
  });

  return {
    props: {
      medias: data.medias,
    },
    revalidate: 180,
  };
};

const IndexPage = ({ medias }) => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Publications | GarbhaGudi</title>
        <meta name='title' content='Publications | GarbhaGudi IVF Centre' />
        <meta
          name='description'
          content='News articles and announcements from GarbhaGudi IVF Centre. Get the latest information in the world of IVF here'
        />

        {/* Open Graph / Facebook */}

        <meta
          property='og:title'
          content='Publications | GarbhaGudi IVF Centre'
        />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content='News articles and announcements from GarbhaGudi IVF Centre. Get the latest information in the world of IVF here'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1658492748/SEO/SEO_Website_image-min_wjkpwk.webp'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta
          name='twitter:title'
          content='Publications | GarbhaGudi IVF Centre'
        />
        <meta
          name='twitter:description'
          content='News articles and announcements from GarbhaGudi IVF Centre. Get the latest information in the world of IVF here'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1658492748/SEO/SEO_Website_image-min_wjkpwk.webp'
        />
      </Head>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-center font-heading font-bold text-4xl lg:text-5xl pt-10 lg:pt-24'>
          Publications
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 lg:py-24 gap-5'>
          {medias &&
            medias.map((items) => (
              <div
                key={items.id}
                className='mx-auto p-2 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-x-1 hover:-translate-y-1 transition duration-500 ease-in-out'
              >
                <div>
                  <img
                    src={items.thumbnail.url}
                    alt={items.title}
                    className='aspect-video w-full mx-auto rounded-lg'
                  />
                </div>
                <div className='px-2'>
                  <div className='font-heading mt-4 text-xl font-bold py-2 text-center md:text-left'>
                    {items.title}
                  </div>
                  <div className='font-content text-left md:text-left mt-2'>
                    {items.description.slice(0, 170)}...
                  </div>
                </div>
                <div className='mt-4'>
                  <Link href={`${items.articleLink}`}>
                    <div className='font-content text-lg text-center flex items-center justify-center px-3 py-2 border text-white font-extrabold bg-brandPink4 hover:bg-brandPink rounded-lg transition duration-500 ease-in-out'>
                      Read More{' '}
                      <HiChevronRight className='inline-flex items-center justify-center' />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
