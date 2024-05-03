import React from 'react';
import Link from 'next/link';
import { gql } from '@apollo/client';
import Head from 'next/head';
import BreadCrumbs from 'components/breadcrumbs';
import apolloClient from 'lib/apollo-graphcms';

const IndexPage = ({ careers }) => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Careers | GarbhaGudi</title>
        <meta name='title' content='Careers | GarbhaGudi IVF Centre' />
        <meta
          name='description'
          content='We’re all on a mission to transform the way infertility is treated. If you feel that you need an organization where you can do your best work, call us now!'
        />

        {/* Open Graph / Facebook */}

        <meta property='og:title' content='Career | GarbhaGudi IVF Centre' />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content='We’re all on a mission to transform the way infertility is treated. If you feel that you need an organization where you can do your best work, call us now!'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Careers_vpudat.jpg'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content='Career | GarbhaGudi IVF Centre' />
        <meta
          name='twitter:description'
          content='We’re all on a mission to transform the way infertility is treated. If you feel that you need an organization where you can do your best work, call us now!'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Careers_vpudat.jpg'
        />
      </Head>
      <BreadCrumbs
        text1='Careers'
        link1={'/careers'}
        link2={''}
        text2={''}
        link3={''}
        text3={''}
        link4={''}
        text4={''}
      />
      <div className='max-w-7xl mx-auto'>
        <div>
          <h1 className='text-center text-2xl sm:text-4xl font-heading font-bold py-6 text-gray-800 dark:text-gray-200'>
            GarbhaGudi – Certified Healthy Workplace
          </h1>
          <Link href='/about/awards-and-accolades/garbhagudi-certified-healthy-workplace'>
            <div>
              <img
                src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1657979955/Banner/Argoya_Silver_Award_Web_Bnr-min_bx7xeo.webp'
                alt='arogya world banner'
                className='rounded-xl'
              />
            </div>
          </Link>
        </div>
        <div className='px-2 text-gray-800 dark:text-gray-200'>
          <div className='text-center text-2xl sm:text-4xl mb-4 font-heading pt-12 font-semibold '>
            Careers at GarbhaGudi
          </div>
          <p className='max-w-7xl mx-auto py-2 mt-4 font-content text-lg'>
            At GarbhaGudi, we’re all on a mission to transform the way
            infertility is treated, one patient at a time.{' '}
          </p>
          <div className='max-w-7xl mx-auto mt-2 font-content text-lg'>
            We go against the status quo and make actual transformation in
            patients’ lives. All our employees are empowered to do the best work
            of their lives by making daily impact and growing quickly.
          </div>
          <div className='max-w-7xl mx-auto mt-2 font-content text-lg'>
            If you feel that you need an organization where you can do your best
            work, apply now!
          </div>
        </div>
        <div className='text-center text-3xl font-heading pt-8 font-semibold'>
          Current Opportunities
        </div>
        <div className='container mb-2 flex mx-auto w-full items-center justify-center'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6 mt-6 px-3'>
            {careers.map((items) => (
              <Link
                href={`careers/${items?.slug}`}
                passHref
                key={items.id}
                className='group'
              >
                <div className='rounded-lg border dark:border-gray-600 shadow-md bg-gradient-to-br from-pink-50 dark:from-gray-800 dark:to-slate-800 to-purple-50 hover:bg-gradient-to-br hover:from-pink-100 dark:hover:from-gray-700 hover:via-brandPurple2 hover:to-brandPurple dark:hover:to-transparent mx-auto hover:shadow-2xl hover:transition-all hover:-translate-x-2 hover:-translate-y-2 duration-300'>
                  <div className='flex flex-col justify-between p-4 leading-normal'>
                    <div className='flex items-center space-x-2'>
                      <img
                        src={items?.image?.url}
                        alt={items?.position}
                        className='w-24 h-24 object-cover rounded-full'
                      />
                      <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-800 dark:text-gray-200  font-content'>
                        {items?.position}
                      </h5>
                    </div>
                    <div className='h-24 text-gray-800 dark:text-gray-200 '>
                      <p className='mb-1 font-content text-sm font-semibold '>
                        Location: {items?.location}
                      </p>
                      <p className='mb-1 font-content text-sm font-semibold'>
                        Experience: {items?.experience}
                      </p>
                      <p className='mb-1 font-content text-sm font-semibold'>
                        Qualification: {items?.qualification}
                      </p>
                    </div>
                    <button className='font-content mt-4 rounded-lg px-3 py-1.5 border-2 font-semibold border-gg-500 dark:border-gray-500 group-hover:dark:border-gg-500 hover:bg-brandPink hover:text-white w-32'>
                      Apply Now
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
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
        careers(orderBy: publishedAt_DESC) {
          position
          slug
          isActive
          location
          id
          experience
          qualification
          image {
            url
          }
        }
      }
    `,
  });

  return {
    props: {
      careers: data.careers,
    },
    revalidate: 180,
  };
};
