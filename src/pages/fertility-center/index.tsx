import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import apolloClient from 'lib/apollo-graphcms';
import { gql } from '@apollo/client';

interface Article {
  articles: {
    articleType: string;
    icon: {
      url: string;
    };
    image: {
      url: string;
    };
    slug: string;
    id: string;
    title: string;
  }[];
}

const IndexPage = ({ articles }: Article) => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Fertility Centre</title>
        <meta name='title' content='Fertility Centre | GarbhaGudi IVF Centre' />
        <meta
          name='description'
          content='GarbhaGudi Fertility Centre offers advanced reproductive care, personalized treatment plans, and cutting-edge technology. From fertility diagnostics to assisted reproduction, start your family journey with us.'
        />

        {/* Open Graph / Facebook */}

        <meta
          property='og:title'
          content='Fertility Centre | GarbhaGudi IVF Centre'
        />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content='GarbhaGudi Fertility Centre offers advanced reproductive care, personalized treatment plans, and cutting-edge technology. From fertility diagnostics to assisted reproduction, start your family journey with us.'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.webp'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta
          name='twitter:title'
          content='Fertility Centre | GarbhaGudi IVF Centre'
        />
        <meta
          name='twitter:description'
          content='GarbhaGudi Fertility Centre offers advanced reproductive care, personalized treatment plans, and cutting-edge technology. From fertility diagnostics to assisted reproduction, start your family journey with us.'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.webp'
        />
      </Head>
      <h1 className='mx-auto max-w-7xl pt-12 text-center font-heading text-4xl font-semibold'>
        Fertility Center
      </h1>
      <p className='mx-auto max-w-7xl px-1 pt-6 text-center font-content font-semibold'>
        GarbhaGudi is where dreams come alive, hopes never fade and
        possibilities never end. We work to help you cherish the golden moment
        of holding your bundle of joy
      </p>
      <div className='mx-auto flex max-w-7xl py-6 sm:py-12'>
        <div className='mx-auto grid grid-cols-1 gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {articles.map(
            (item) =>
              item?.articleType === 'fertilityCenter' && (
                <Link
                  href={`fertility-center/${item?.slug}`}
                  passHref
                  key={item?.id}
                  className='group'
                >
                  <div className='mx-auto flex w-80 cursor-pointer rounded-2xl border-2 border-solid border-brandPink px-4 py-3 transition-colors duration-100 hover:border-transparent hover:bg-brandPink hover:text-white dark:border-gray-600 dark:hover:bg-gray-600 md:w-96'>
                    <div className='w-1/3'>
                      <img
                        className='h-24 w-24 rounded-lg object-cover transition-all duration-300 group-hover:grayscale-0 dark:grayscale'
                        src={item?.icon?.url || item?.image?.url}
                        alt={item?.title}
                      />
                    </div>
                    <div className='flex w-2/3 flex-col justify-center text-center text-gray-800 dark:text-gray-200'>
                      <p className='font-lexend text-xl font-medium'>
                        {item?.title}
                      </p>
                    </div>
                  </div>
                </Link>
              ),
          )}
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
        articles {
          articleType
          icon {
            url
          }
          image {
            url
          }
          slug
          id
          title
        }
      }
    `,
  });
  return {
    props: {
      articles: data.articles,
    },
    revalidate: 180,
  };
};