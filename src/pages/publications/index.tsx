import apolloClient from 'lib/apollo-graphcms';
import { gql } from '@apollo/client';
import Link from 'next/link';
import Head from 'next/head';
import { HiChevronRight } from 'react-icons/hi';
import Image from 'next/image';

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

        <meta property='og:title' content='Publications | GarbhaGudi IVF Centre' />
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
        <meta name='twitter:title' content='Publications | GarbhaGudi IVF Centre' />
        <meta
          name='twitter:description'
          content='News articles and announcements from GarbhaGudi IVF Centre. Get the latest information in the world of IVF here'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1658492748/SEO/SEO_Website_image-min_wjkpwk.webp'
        />
      </Head>
      <div className='mx-auto max-w-7xl'>
        <h1 className='pt-10 text-center font-heading text-4xl font-bold lg:pt-24 lg:text-5xl'>
          Publications
        </h1>
        <div className='grid grid-cols-1 gap-5 py-10 md:grid-cols-2 lg:grid-cols-3 lg:py-24'>
          {medias &&
            medias?.map((items) => (
              <div
                key={items?.id}
                className='mx-auto rounded-xl p-2 shadow-lg transition duration-500 ease-in-out hover:-translate-x-1 hover:-translate-y-1 hover:shadow-2xl'
              >
                <div>
                  <Image
                    src={items?.thumbnail?.url}
                    alt={items?.title}
                    className='mx-auto aspect-video w-full rounded-lg'
                    width={500}
                    height={300}
                    loading='lazy'
                  />
                </div>
                <div className='mt-4 px-2'>
                  <div className='line-clamp-2 py-2 text-center font-heading text-xl font-bold md:text-left'>
                    {items?.title}
                  </div>
                  <div className='mt-2 text-left font-content md:text-left'>
                    {items?.description?.slice(0, 170)}...
                  </div>
                </div>
                <div className='mt-4'>
                  <Link href={`${items?.articleLink}`} target='_blank'>
                    <div className='flex items-center justify-center rounded-lg border bg-brandPink4 px-3 py-2 text-center font-content text-lg font-extrabold text-white transition duration-500 ease-in-out hover:bg-brandPink'>
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
