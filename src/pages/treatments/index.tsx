import apolloClient from 'lib/apollo-graphcms';
import { gql } from '@apollo/client';
import Link from 'next/link';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import Head from 'next/head';
import BreadCrumbs from 'components/breadcrumbs';
import Image from 'next/image';

interface TreatmentProps {
  treatments: {
    category: string;
    title: string;
    id: string;
    icon: {
      url: string;
    };
    iconUrl: string;
    slug: string;
  }[];
}

const IndexPage = ({ treatments }: TreatmentProps) => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Treatment | GarbhaGudi IVF Centre</title>
        <meta name='title' content='Treatment | GarbhaGudi IVF Centre' />
        <meta
          name='description'
          content='Treatment options, procedure details and advanced treatment options for male and female infertility treatment available at GarbhaGudi'
        />

        {/* Open Graph / Facebook */}

        <meta property='og:title' content='Treatment | GarbhaGudi IVF Centre' />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content='Treatment options, procedure details and advanced treatment options for male and female infertility treatment available at GarbhaGudi'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Cau_Diag_Treat_d0t3vx.webp'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content='Treatment | GarbhaGudi IVF Centre' />
        <meta
          name='twitter:description'
          content='Treatment options, procedure details and advanced treatment options for male and female infertility treatment available at GarbhaGudi'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Cau_Diag_Treat_d0t3vx.webp'
        />
      </Head>
      <BreadCrumbs
        link1='/treatments'
        text1='Treatments'
        text2=''
        link2=''
        link3={''}
        text3={''}
        link4={''}
        text4={''}
      />
      <div className='mx-auto max-w-7xl'>
        <h1 className='pt-12 text-center font-heading text-4xl font-semibold'>Treatment Options</h1>
        <div className='w-full max-w-7xl px-2 py-16 sm:px-0'>
          <TabGroup>
            <TabList className={'flex space-x-1 rounded-xl bg-brandPink p-1'}>
              <Tab className='mx-auto w-full rounded-lg py-2 text-center font-heading text-xl font-semibold text-gray-100 focus:outline-none ui-selected:bg-gray-100 ui-selected:text-brandPink2 ui-selected:shadow-xl ui-selected:transition-all ui-selected:duration-300 ui-selected:ease-linear ui-selected:hover:bg-gray-100 ui-not-selected:hover:bg-brandPink3 dark:text-gray-800 dark:ui-selected:bg-gray-800 dark:ui-selected:text-gray-200'>
                <div className='mx-auto max-w-7xl text-center font-heading text-base font-semibold md:text-2xl'>
                  Female Infertility
                </div>
              </Tab>
              <Tab className='mx-auto w-full rounded-lg py-2 text-center font-heading text-xl font-semibold text-gray-100 focus:outline-none ui-selected:bg-gray-100 ui-selected:text-brandPink2 ui-selected:shadow-xl ui-selected:transition-all ui-selected:duration-300 ui-selected:ease-linear ui-selected:hover:bg-gray-100 ui-not-selected:hover:bg-brandPink3 dark:text-gray-800 dark:ui-selected:bg-gray-800 dark:ui-selected:text-gray-200'>
                <div className='mx-auto max-w-7xl px-2 text-center font-heading text-base font-semibold md:text-2xl'>
                  Male Infertility
                </div>
              </Tab>
              <Tab className='mx-auto w-full rounded-lg py-2 text-center font-heading text-xl font-semibold text-gray-100 focus:outline-none ui-selected:bg-gray-100 ui-selected:text-brandPink2 ui-selected:shadow-xl ui-selected:transition-all ui-selected:duration-300 ui-selected:ease-linear ui-selected:hover:bg-gray-100 ui-not-selected:hover:bg-brandPink3 dark:text-gray-800 dark:ui-selected:bg-gray-800 dark:ui-selected:text-gray-200'>
                <div className='mx-auto max-w-7xl text-center font-heading text-base font-semibold md:text-2xl'>
                  Advanced Options
                </div>
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <div className='mx-auto flex max-w-7xl py-6 sm:py-12'>
                  <div className='mx-auto grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {treatments.map((item) => {
                      if (item?.category == 'Female') {
                        return (
                          <Link
                            href={`treatments/${item?.slug}`}
                            passHref
                            key={item?.id}
                            className='group'
                          >
                            <div className='mx-auto flex w-80 cursor-pointer rounded-2xl border-2 border-solid border-brandPink px-4 py-3 transition-all duration-100 hover:border-transparent hover:bg-brandPink hover:text-white dark:border-gray-700 dark:hover:border-gg-400 dark:hover:bg-gray-600 md:w-96'>
                              <div className='w-1/3'>
                                <Image
                                  className='h-16 w-16 rounded-md object-cover transition-all duration-500 ease-in-out group-hover:grayscale-0 dark:grayscale'
                                  src={item?.iconUrl}
                                  alt={item?.title}
                                  width={100}
                                  height={100}
                                  loading='lazy'
                                />
                              </div>
                              <div className='flex w-2/3 flex-col justify-center text-left'>
                                <p className='font-qs text-lg font-semibold'>{item?.title}</p>
                              </div>
                            </div>
                          </Link>
                        );
                      }
                    })}
                    <Link
                      href={`/treatments/ivf-treatment-in-bangalore`}
                      passHref
                      className='group'
                    >
                      <div className='mx-auto flex w-80 cursor-pointer rounded-2xl border-2 border-solid border-brandPink px-4 py-3 transition-all duration-100 hover:border-transparent hover:bg-brandPink hover:text-white dark:border-gray-700 dark:hover:border-gg-400 dark:hover:bg-gray-600 md:w-96'>
                        <div className='w-1/3'>
                          <Image
                            className='h-16 w-16 rounded-md object-cover transition-all duration-500 ease-in-out group-hover:grayscale-0 dark:grayscale'
                            src='https://media.graphassets.com/EwdJCRdtRiKDXeWF4toB'
                            alt='IVF Icon'
                            width={100}
                            height={100}
                            loading='lazy'
                          />
                        </div>
                        <div className='flex w-2/3 flex-col justify-center text-left'>
                          <p className='font-qs text-lg font-semibold'>In-Vitro Fertilization</p>
                        </div>
                      </div>
                    </Link>
                    <Link
                      href={`/treatments/iui-treatment-in-bangalore`}
                      passHref
                      className='group'
                    >
                      <div className='mx-auto flex w-80 cursor-pointer rounded-2xl border-2 border-solid border-brandPink px-4 py-3 transition-all duration-100 hover:border-transparent hover:bg-brandPink hover:text-white dark:border-gray-700 dark:hover:border-gg-400 dark:hover:bg-gray-600 md:w-96'>
                        <div className='w-1/3'>
                          <Image
                            className='h-16 w-16 rounded-md object-cover transition-all duration-500 ease-in-out group-hover:grayscale-0 dark:grayscale'
                            src='https://media.graphassets.com/CpcAosCyRImJVMN1xA9O'
                            alt='IUI Icon'
                            width={100}
                            height={100}
                            loading='lazy'
                          />
                        </div>
                        <div className='flex w-2/3 flex-col justify-center text-left'>
                          <p className='font-qs text-lg font-semibold'>
                            Intra-Uterine Insemination
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className='mx-auto flex max-w-7xl py-6 sm:py-12'>
                  <div className='mx-auto grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {treatments.map((item) => {
                      if (item?.category == 'Male') {
                        return (
                          <Link href={`treatments/${item?.slug}`} passHref key={item?.id}>
                            <div className='mx-auto flex w-80 cursor-pointer rounded-2xl border-2 border-solid border-brandPink px-4 py-3 transition-colors duration-100 hover:border-transparent hover:bg-brandPink hover:text-white md:w-96'>
                              <div className='w-1/3'>
                                <Image
                                  className='h-16 w-16 rounded-full object-cover'
                                  src={item?.iconUrl}
                                  alt={item?.title}
                                  width={100}
                                  height={100}
                                  loading='lazy'
                                />
                              </div>
                              <div className='flex w-2/3 flex-col justify-center text-left'>
                                <p className='font-qs text-lg font-semibold'>{item?.title}</p>
                              </div>
                            </div>
                          </Link>
                        );
                      }
                    })}
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className='mx-auto flex max-w-7xl py-6 sm:py-12'>
                  <div className='mx-auto grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {treatments?.map((item) => {
                      if (item?.category == 'Advanced') {
                        return (
                          <Link href={`treatments/${item?.slug}`} passHref key={item?.id}>
                            <div className='mx-auto flex w-80 cursor-pointer rounded-2xl border-2 border-solid border-brandPink px-4 py-3 transition-colors duration-100 hover:border-transparent hover:bg-brandPink hover:text-white md:w-96'>
                              <div className='w-1/3'>
                                <Image
                                  className='h-16 w-16 rounded-full object-cover'
                                  src={item?.iconUrl}
                                  alt={item?.title}
                                  width={100}
                                  height={100}
                                  loading='lazy'
                                />
                              </div>
                              <div className='flex w-2/3 flex-col justify-center text-left'>
                                <p className='font-qs text-lg font-semibold'>{item?.title}</p>
                              </div>
                            </div>
                          </Link>
                        );
                      }
                    })}
                  </div>
                </div>
              </TabPanel>
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
        treatments {
          category
          title
          id
          icon {
            url
          }
          iconUrl
          slug
        }
      }
    `,
  });

  return {
    props: {
      treatments: data.treatments,
    },
    revalidate: 180,
  };
};
