import React from 'react';
import Banner from 'sections/location/banner';
import apolloClient from 'lib/apollo-graphcms';
import { gql } from '@apollo/client';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

const Locations = ({ branches }) => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Locations | GarbhaGudi IVF Centre</title>
        <meta name='title' content='Locations | GarbhaGudi IVF Centre' />
        <meta
          name='description'
          content='GarbhaGudi is where dreams come alive, hopes never fade and possibilities never end. We work to help you cherish the golden moment of holding your bundle of joy'
        />

        {/* Open Graph / Facebook */}

        <meta property='og:title' content='Locations | GarbhaGudi IVF Centrea' />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content='GarbhaGudi is where dreams come alive, hopes never fade and possibilities never end. We work to help you cherish the golden moment of holding your bundle of joy'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='GarbhaGudi is where dreams come alive, hopes never fade and possibilities never end. We work to help you cherish the golden moment of holding your bundle of joy'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content='Locations | GarbhaGudi IVF Centre' />
        <meta
          name='twitter:description'
          content='GarbhaGudi is a place where dreams come alive, hopes never fade, and possibilities never end. We ceaselessly work to help you cherish the golden moment of holding your little bundles of joy.'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643277077/Locations/1280x500_HN_wql2mm.webp'
        />
      </Head>
      <div className=''>
        <Banner branchTitle={''} />
        <h1 className='pt-10 text-center font-heading text-3xl font-bold lg:pt-16 lg:text-4xl'>
          Our Branches
        </h1>
        <div className='mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 py-10 lg:py-16'>
          {branches.map((items) => (
            <Link
              href={`locations/${items?.slug}`}
              key={items?.id}
              className='rounded-xl transition-all duration-150 hover:shadow-2xl'
            >
              <div className='mx-auto flex max-w-sm flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-brandPink'>
                <div className='overflow-hidden'>
                  <Image
                    src={items?.branchPicture?.url}
                    alt={items?.title}
                    width={480}
                    height={100}
                    className='overflow-hidden transition-all duration-500 hover:scale-125'
                  />
                </div>
                <div className='flex w-full items-center justify-evenly border-t-2 border-brandPink px-3 py-3'>
                  <div className='ml-4 font-heading text-xl font-bold'>{items?.title}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Locations;

export const getStaticProps = async () => {
  const { data } = await apolloClient.query({
    query: gql`
      query {
        branches {
          branchPicture {
            url
          }
          title
          slug
          id
        }
      }
    `,
  });

  return {
    props: {
      branches: data.branches,
    },
    revalidate: 180,
  };
};
