import React, { useState } from 'react';
import Link from 'next/link';
import { Tab } from '@headlessui/react';
import apolloClient from 'lib/apollo-graphcms';
import { gql } from '@apollo/client';
import Head from 'next/head';
import BreadCrumbs from 'components/breadcrumbs';
import Loading from 'components/Loading';
import { useRouter } from 'next/router';

const IndexPage = ({ branches }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <Loading />;
  }
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>
          Best IVF Doctor in Bangalore | IVF Specialist in Bangalore -
          GarbhaGudi
        </title>
        <meta
          name='title'
          content='Best IVF Doctor in Bangalore | IVF Specialist in Bangalore - GarbhaGudi'
        />
        <meta
          name='description'
          content='Garbhagudi Hospital has the best team of highly experienced IVF doctors in Bangalore. Our Ivf specialists provide a High Success Rate. Book an appointment with the best IVF doctors in Bangalore today!'
        />

        {/* Open Graph / Facebook */}

        <meta
          property='og:title'
          content='Our Fertility Experts | GarbhaGudi IVF Centre'
        />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content='GarbhaGudi is a well known and one of the best fertility hospitals in Bangalore and you can be sure of getting the best fertility care here. Our hospital specializes in IVF treatments and has helped hundreds of couples realize their dreams of parenthood.'
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
          content='Our Fertility Experts | GarbhaGudi IVF Centre'
        />
        <meta
          name='twitter:description'
          content='GarbhaGudi is a well known and one of the best fertility hospitals in Bangalore and you can be sure of getting the best fertility care here. Our hospital specializes in IVF treatments and has helped hundreds of couples realize their dreams of parenthood.'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.jpg'
        />
      </Head>
      <BreadCrumbs
        text1='Our Fertility Experts'
        link1='/fertility-experts'
        text2=''
        link2=''
        link3={''}
        text3={''}
        link4={''}
        text4={''}
      />
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-center text-4xl font-heading pt-12 font-semibold'>
          Our Fertility Experts
        </h1>
        <p className='text-md text-brandDark font-content max-w-4xl mx-auto text-center mt-4'>
          Our team of fertility specialists have been known for their extensive
          clinical experience and research contributions and their success in
          treating the most challenging fertility cases.
        </p>
        <div className='w-full max-w-7xl px-2 py-16 sm:px-0 '>
          <Tab.Group>
            <Tab.List
              className={
                'grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-nowrap lg:space-x-1 bg-gg-500 dark:bg-gg-400 rounded-xl p-1 transition-all ease-linear duration-300'
              }
            >
              {branches.map((items: any) => (
                <Tab
                  className='w-full py-2 rounded-lg focus:outline-none text-gray-100 dark:text-gray-800 mx-auto text-center text-xl font-heading font-semibold ui-selected:bg-gray-100 dark:ui-selected:bg-gray-800 ui-selected:text-brandPink2 dark:ui-selected:text-gray-200 ui-selected:shadow-xl ui-selected:hover:bg-gray-100 ui-selected:transition-all ui-selected:ease-linear ui-selected:duration-300 ui-not-selected:hover:bg-brandPink3'
                  key={items.id}
                >
                  {items?.title}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels
              className={
                'bg-gradient-to-br border from-brandPink4 dark:from-gray-800 to-white dark:to-gray-700 via-pink-50 dark:via-gray-800 rounded-lg lg:px-6 border-t-0 dark:border-gray-800 bg-white bg-opacity-70 dark:bg-opacity-5 backdrop-blur-2xl shadow-xl'
              }
            >
              {branches.map((items: any) => (
                <Tab.Panel key={items.id}>
                  <div className='text-gray-800 dark:text-gray-200 body-font relative max-w-7xl mx-auto mt-10 '>
                    <div className='lg:py-6 flex flex-wrap lg:flex-nowrap inset-0'>
                      <div className='lg:w-1/2 bg-gray-800 rounded-lg overflow-hidden p-2 lg:p-10 flex items-end justify-start relative h-[44rem] md:ml-auto w-full'>
                        <iframe
                          width='100%'
                          height='100%'
                          className='absolute inset-0 border rounded-lg border-brandPurpleDark dark:grayscale dark:brightness-75 dark:contrast-150 dark:invert'
                          loading='lazy'
                          title='map'
                          src={items.mapLink}
                        ></iframe>
                        <div className='bg-white dark:bg-gray-800 relative flex flex-wrap py-6 rounded-3xl shadow-3xl'>
                          <div className='lg:w-1/2 px-6'>
                            <h2 className='title-font font-semibold text-gray-800 dark:text-gray-200 tracking-widest text-xs font-content'>
                              ADDRESS
                            </h2>
                            <p className='mt-1 font-content'>{items.address}</p>
                          </div>
                          <div className='lg:w-1/2 px-6 mt-4 lg:mt-0'>
                            <h2 className='font-semibold text-gray-800 dark:text-gray-200 tracking-widest text-xs font-qs'>
                              EMAIL
                            </h2>
                            <div className='leading-relaxed'>
                              <Link
                                href='mailto:dreams@garbhagudi.com'
                                className='text-gg-500 dark:text-gg-400 font-qs underline hover:text-lg transition-all duration-100'
                              >
                                dreams@garbhagudi.com
                              </Link>
                            </div>
                            <h2 className='font-semibold text-gray-800 dark:text-gray-200 tracking-widest text-xs mt-4 font-qs'>
                              PHONE
                            </h2>
                            <div className='leading-relaxed font-qs hover:text-lg text-gg-500 dark:text-gg-400 underline transition-all duration-100'>
                              <Link href='tel:+919108910832'>
                                +91 9108 9108 32
                              </Link>
                            </div>
                            <h2 className='uppercase font-semibold text-gray-800 dark:text-gray-200 tracking-widest text-xs mt-4 font-qs'>
                              WhatsApp
                            </h2>
                            <div className='leading-relaxed font-qs text-gg-500 dark:text-gg-400 underline hover:text-lg transition-all duration-100'>
                              <Link
                                href='https://wa.me/918884183338?text=Hi.'
                                target='_blank'
                                rel='noreferrer'
                              >
                                +91 888 418 3338
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='lg:w-1/2 md:w-full flex flex-col md:ml-auto w-full md:py-4 md:mt-0'>
                        <p className='text-center font-heading font-bold text-xl mt-7 lg:mt-0 px-2'>
                          Fertility specialists at our {items.title} branch
                        </p>
                        <div className='mx-auto space-y-0 grid grid-cols-2 sm:gap-y-5 sm:gap-x-14 sm:space-y-0 lg:grid-cols-2 lg:max-w-7xl col-span-full'>
                          {items?.doctors.map((doctor) => (
                            <div
                              className='text-center rounded-lg'
                              key={doctor?.id}
                            >
                              <Link
                                href={`/fertility-experts/${doctor?.slug}`}
                                passHref
                              >
                                <div>
                                  <div className='space-y-2'>
                                    <img
                                      className='mx-auto h-36 w-36 my-auto rounded-full mt-4 bg-gray-400 dark:bg-gray-700'
                                      src={doctor?.image.url}
                                      alt={doctor?.name}
                                    />
                                    <div className='text-base leading-6 font-medium space-y-0.5'>
                                      <h3 className='text-brandDark font-heading font-bold'>
                                        {doctor?.name}
                                      </h3>
                                      <p className='text-brandPurpleDark dark:text-brandPurple text-xs font-content'>
                                        {doctor?.qualification}
                                      </p>
                                      <p className='text-gg-500 dark:text-gg-400 text-sm font-content'>
                                        {doctor?.designation}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
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
        branches {
          title
          address
          mapLink
          id
          doctors(orderBy: order_ASC) {
            id
            category
            name
            slug
            image {
              url
            }
            qualification
            designation
          }
        }
      }
    `,
  });

  return {
    props: {
      branches: data.branches,
      fallback: true,
    },
    revalidate: 180,
  };
};
