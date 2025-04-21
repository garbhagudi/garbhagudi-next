import apolloClient from 'lib/apollo-graphcms';
import { gql } from '@apollo/client';
import Link from 'next/link';
import BreadCrumbs from 'components/breadcrumbs';
import Head from 'next/head';
import Image from 'next/image';

export const getStaticProps = async () => {
  const { data } = await apolloClient.query({
    query: gql`
      query {
        awards(orderBy: createdAt_DESC) {
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

interface Award {
  award: {
    id: string;
    title: string;
    slug: string;
    image: {
      url: string;
    };
  }[];
}

const Awards = ({ award }: Award) => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}
        <link rel='dns-prefetch' href='https://media.graphassets.com' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Awards &amp; Accolades GarbhaGudi IVF Centre</title>
        <meta name='title' content={`Awards & Accolades GarbhaGudi IVF Centre`} />
        <meta
          name='description'
          content="Explore Garbhagudi IVF's Awards and Accolades for excellence in fertility care. Celebrating our milestones in patient success. Discover More!"
        />

        {/* Open Graph / Facebook */}

        <meta property='og:title' content={`Awards & Accolades GarbhaGudi IVF Centre`} />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content="Explore Garbhagudi IVF's Awards and Accolades for excellence in fertility care. Celebrating our milestones in patient success. Discover More!"
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.webp'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content={`Awards & Accolades GarbhaGudi IVF Centre`} />
        <meta
          name='twitter:description'
          content="Explore Garbhagudi IVF's Awards and Accolades for excellence in fertility care. Celebrating our milestones in patient success. Discover More!"
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.webp'
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
      <div className='relative px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24'>
        <div className='absolute inset-0'>
          <div className='h-1/3 bg-white dark:bg-gray-800 sm:h-2/3' />
        </div>
        <div className='relative mx-auto max-w-7xl'>
          <div className='text-center'>
            <h1 className='font-heading text-3xl font-extrabold tracking-tight text-gray-800 drop-shadow-xl dark:text-gray-200 sm:text-4xl'>
              Awards and Accolades
            </h1>
          </div>
          <div className='w mx-auto mt-12 grid max-w-xl gap-8 lg:max-w-none lg:grid-cols-3'>
            {award?.map((item) => (
              <div
                key={item?.id}
                className='flex flex-col overflow-hidden rounded-lg shadow-lg duration-300 hover:-translate-x-2 hover:-translate-y-2 hover:shadow-2xl hover:transition-all'
              >
                <Link href={`/about/awards-and-accolades/${item?.slug}`} passHref>
                  <div className='flex-shrink-0'>
                    <Image
                      className='h-38 w-full cursor-pointer rounded-t-lg object-contain'
                      src={item?.image?.url}
                      alt={item?.title}
                      width={360}
                      height={180}
                      priority
                    />
                  </div>
                </Link>
                <div className='flex flex-1 flex-col justify-between p-6 text-gray-800 dark:bg-gray-700 dark:text-gray-200'>
                  <div className='flex-1'>
                    <Link href={`/about/awards-and-accolades/${item?.slug}`} passHref>
                      <p className='cursor-pointer font-heading text-lg font-semibold'>
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
