import Link from 'next/link';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import apolloClient from 'lib/apollo-graphcms';
import { gql } from '@apollo/client';
import Head from 'next/head';
import BreadCrumbs from 'components/breadcrumbs';
import Loading from 'components/Loading';
import { useRouter } from 'next/router';
import Image from 'next/image';

interface Branches {
  branches: {
    title: string;
    address: string;
    mapLink: string;
    id: string;
    doctors: {
      id: string;
      category: string;
      name: string;
      slug: string;
      image: {
        url: string;
      };
      imageUrl: string;
      qualification: string;
      designation: string;
    }[];
  }[];
}

const IndexPage = ({ branches }: Branches) => {
  const router = useRouter();
  if (router.isFallback) {
    return <Loading />;
  }
  return (
    <div>
      <Head>
        {/* Primary Tags */}
        <link rel='preconnect' href='https://res.cloudinary.com' />
        <link rel='preconnect' href='https://maps.googleapis.com' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Best IVF Specialist in Bangalore</title>
        <meta name='title' content='Best IVF Specialist in Bangalore' />
        <meta
          name='description'
          content='GarbhaGudi Hospital has the best team of highly experienced IVF doctors in Bangalore. Our Ivf specialists provide a High Success Rate. Book an appointment with the best IVF doctors in Bangalore today!'
        />

        {/* Open Graph / Facebook */}

        <meta property='og:title' content='Our Fertility Experts | GarbhaGudi IVF Centre' />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content='GarbhaGudi is a well known and one of the best fertility hospitals in Bangalore and you can be sure of getting the best fertility care here. Our hospital specializes in IVF treatments and has helped hundreds of couples realize their dreams of parenthood.'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.webp'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content='Our Fertility Experts | GarbhaGudi IVF Centre' />
        <meta
          name='twitter:description'
          content='GarbhaGudi is a well known and one of the best fertility hospitals in Bangalore and you can be sure of getting the best fertility care here. Our hospital specializes in IVF treatments and has helped hundreds of couples realize their dreams of parenthood.'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.webp'
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
      <div className='mx-auto max-w-7xl'>
        <h1 className='pt-12 text-center font-heading text-4xl font-semibold'>
          Our Fertility Experts
        </h1>
        <p className='text-md text-brandDark mx-auto mt-4 max-w-4xl text-center font-content'>
          Our team of fertility specialists are known for their extensive clinical experience and
          research contributions and their success in treating the most challenging fertility cases.
        </p>
        <div className='w-full max-w-7xl px-2 py-16 sm:px-0'>
          <TabGroup>
            <TabList
              className={
                'grid grid-cols-2 rounded-xl bg-gg-500 p-1 transition-all duration-300 ease-linear dark:bg-gg-400 md:grid-cols-3 lg:flex lg:flex-nowrap lg:space-x-1'
              }
            >
              {branches.map((items) => (
                <Tab
                  className='mx-auto w-full rounded-lg py-2 text-center font-heading text-xl font-semibold text-gray-100 focus:outline-none ui-selected:bg-gray-100 ui-selected:text-brandPink2 ui-selected:shadow-xl ui-selected:transition-all ui-selected:duration-300 ui-selected:ease-linear ui-selected:hover:bg-gray-100 ui-not-selected:hover:bg-brandPink3 dark:text-gray-800 dark:ui-selected:bg-gray-800 dark:ui-selected:text-gray-200'
                  key={items.id}
                >
                  {items?.title}
                </Tab>
              ))}
            </TabList>
            <TabPanels
              className={
                'rounded-lg border border-t-0 bg-white bg-opacity-70 bg-gradient-to-br from-brandPink4 via-pink-50 to-white shadow-xl backdrop-blur-2xl dark:border-gray-800 dark:bg-opacity-5 dark:from-gray-800 dark:via-gray-800 dark:to-gray-700 lg:px-6'
              }
            >
              {branches.map((items) => (
                <TabPanel key={items.id}>
                  <div className='body-font relative mx-auto mt-10 max-w-7xl text-gray-800 dark:text-gray-200'>
                    <div className='inset-0 flex flex-wrap lg:flex-nowrap lg:py-6'>
                      <div className='relative order-2 flex h-[44rem] w-full items-end justify-start overflow-hidden rounded-lg bg-gray-800 p-2 md:ml-auto lg:h-auto lg:w-1/2 lg:p-10'>
                        <iframe
                          width='100%'
                          height='100%'
                          className='absolute inset-0 rounded-lg border border-brandPurpleDark dark:brightness-75 dark:contrast-150 dark:grayscale dark:invert'
                          loading='lazy'
                          title='map'
                          src={items.mapLink}
                        ></iframe>
                        <div className='shadow-3xl relative flex flex-wrap rounded-3xl bg-white py-6 dark:bg-gray-800'>
                          <div className='px-6 lg:w-1/2'>
                            <h2 className='title-font font-content text-xs font-semibold tracking-widest text-gray-800 dark:text-gray-200'>
                              ADDRESS
                            </h2>
                            <p className='mt-1 font-content'>{items.address}</p>
                          </div>
                          <div className='mt-4 px-6 lg:mt-0 lg:w-1/2'>
                            <h2 className='font-qs text-xs font-semibold tracking-widest text-gray-800 dark:text-gray-200'>
                              EMAIL
                            </h2>
                            <div className='leading-relaxed'>
                              <Link
                                href='mailto:dreams@garbhagudi.com'
                                className='font-qs text-gg-500 underline transition-all duration-100 hover:text-lg dark:text-gg-400'
                              >
                                dreams@garbhagudi.com
                              </Link>
                            </div>
                            <h2 className='mt-4 font-qs text-xs font-semibold tracking-widest text-gray-800 dark:text-gray-200'>
                              PHONE
                            </h2>
                            <div className='font-qs leading-relaxed text-gg-500 underline transition-all duration-100 hover:text-lg dark:text-gg-400'>
                              <Link href='tel:+919108910832'>+91 9108 9108 32</Link>
                            </div>
                            <h2 className='mt-4 font-qs text-xs font-semibold uppercase tracking-widest text-gray-800 dark:text-gray-200'>
                              WhatsApp
                            </h2>
                            <div className='font-qs leading-relaxed text-gg-500 underline transition-all duration-100 hover:text-lg dark:text-gg-400'>
                              <Link
                                href='https://wa.me/919108910832?text=Hi.'
                                target='_blank'
                                rel='noreferrer'
                              >
                                +91 9108 9108 32
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='order-1 flex w-full flex-col md:ml-auto md:mt-0 md:w-full md:py-4 lg:w-1/2'>
                        <p className='mt-7 px-2 text-center font-heading text-xl font-bold lg:mt-0'>
                          Fertility specialists at our {items.title} branch
                        </p>
                        <div className='col-span-full mx-auto grid grid-cols-2 space-y-0 sm:gap-x-14 sm:gap-y-5 sm:space-y-0 lg:max-w-7xl lg:grid-cols-2'>
                          {items?.doctors.map((doctor) => (
                            <div className='rounded-lg text-center' key={doctor?.id}>
                              <Link href={`/fertility-experts/${doctor?.slug}`} passHref>
                                <div>
                                  <div className='space-y-2'>
                                    <Image
                                      className='mx-auto my-auto mt-4 h-36 w-36 rounded-full bg-gray-400 dark:bg-gray-700'
                                      src={doctor?.image.url || doctor?.imageUrl}
                                      alt={doctor?.name}
                                      width={500}
                                      height={500}
                                      loading='lazy'
                                    />
                                    <div className='space-y-0.5 text-base font-medium leading-6'>
                                      <h3 className='text-brandDark font-heading font-bold'>
                                        {doctor?.name}
                                      </h3>
                                      <p className='font-content text-xs text-brandPurpleDark dark:text-brandPurple'>
                                        {doctor?.qualification}
                                      </p>
                                      <p className='font-content text-sm text-gg-500 dark:text-gg-400'>
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
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>
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
            imageUrl
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
    },
    revalidate: 180,
  };
};
