import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import Carousel from 'nuka-carousel';
import { Tab, TabGroup, TabList, TabPanels, TabPanel } from '@headlessui/react';

interface doctorListProps {
  doctors: {
    id: string;
    name: string;
    slug: string;
    qualification: string;
    designation: string;
    category: string;
    image: {
      url: string;
    };
    imageUrl: string;
    imageAlt: string;
  }[];
}

const CATEGORY_TITLES: Record<string, string> = {
  fertilitySpecialist: 'Fertility Specialists',
  embryologist: 'Embryologists',
  andrologist: 'Andrologists',
  yogaSpecialist: 'Yoga Specialists',
  medicalSuperintendent: 'Medical Superintendent',
  consultants: 'Consultant',
};

const DoctorList = (doctorList: doctorListProps) => {
  const defaultControlsConfig = {
    pagingDotsStyle: {
      display: 'none',
    },
  };
  const groupedDoctors = doctorList.doctors.reduce(
    (acc, doctor) => {
      const categoryKey = doctor.category || 'Others';
      if (!acc[categoryKey]) {
        acc[categoryKey] = [];
      }
      acc[categoryKey].push(doctor);
      return acc;
    },
    {} as Record<string, typeof doctorList.doctors>
  );
  const categories = Object.keys(groupedDoctors);
  return (
    <div>
      <div
        className='bg-purple-100/70 dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-700 dark:to-gray-800'
        id='ourTeam'
      >
        <div className='mx-auto max-w-[1366px] px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-12'>
          <div className='space-y-12'>
            <div className='space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl'>
              <h2 className='font-heading text-3xl font-extrabold tracking-tight text-gray-800 dark:text-gray-200 sm:text-4xl'>
                Meet our Fertility Experts
              </h2>
              <p className='text-md font-content text-gray-800 dark:text-gray-200'>
                Our team of IVF specialists in Bangalore have been known for their extensive
                clinical experience and research contributions and their success in treating the
                most challenging fertility cases.
              </p>
            </div>
            {/* Tabs for Categories */}
            <div className='hidden lg:block'>
              <TabGroup>
                <TabList className='mt-12 flex space-x-2 rounded-xl bg-gg-400 p-2'>
                  {categories.map((category) => (
                    <Tab
                      key={category}
                      className={({ selected }) =>
                        `w-full rounded-lg py-2.5 text-base font-medium leading-5 focus:outline-none ${
                          selected
                            ? 'bg-brandPurpleDark text-white shadow'
                            : 'text-white hover:bg-gg-500/[0.9]'
                        }`
                      }
                    >
                      {CATEGORY_TITLES[category] || category}
                    </Tab>
                  ))}
                </TabList>
                <TabPanels className='mt-8'>
                  {categories.map((category) => (
                    <TabPanel key={category}>
                      <div className='grid grid-cols-2 gap-8 lg:grid-cols-4'>
                        {groupedDoctors[category].map((doctor) => (
                          <div
                            key={doctor.id}
                            className='transition-all duration-300 hover:scale-105'
                          >
                            <Link href={`/fertility-experts/${doctor.slug}`} passHref>
                              <div className='space-y-4'>
                                <div className='relative mx-auto h-44 w-44'>
                                  <div className='absolute h-full w-full animate-rotate rounded-full bg-gradient-to-br from-brandPink3/80 to-purple-500/40 bg-[length:400%] dark:bg-gray-400'></div>
                                  <Image
                                    className='shadow-champaigne rounded-full bg-transparent drop-shadow-2xl'
                                    src={doctor.image.url}
                                    alt={doctor.imageAlt || doctor.name}
                                    width={400}
                                    height={400}
                                    loading='lazy'
                                  />
                                </div>
                                <div className='space-y-0.5'>
                                  <h3 className='font-heading text-lg font-bold text-gray-800 dark:text-gray-200'>
                                    {doctor.name}
                                  </h3>
                                  <p className='text-sm text-purple-900 dark:text-purple-200'>
                                    {doctor.qualification}
                                  </p>
                                  <p className='text-sm text-gg-500 dark:text-gg-300'>
                                    {doctor.designation}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </TabPanel>
                  ))}
                </TabPanels>
              </TabGroup>
            </div>
            <div className='relative mx-auto flex flex-row items-center justify-center lg:hidden'>
              <Carousel
                autoplay
                autoplayInterval={5000}
                defaultControlsConfig={defaultControlsConfig}
                className='mx-auto max-w-xs sm:max-w-sm md:max-w-md'
                wrapAround
                dragging
                enableKeyboardControls
                pauseOnHover
                renderCenterLeftControls={({ previousSlide }) => (
                  <button
                    onClick={previousSlide}
                    className='ml-3 flex h-10 w-10 items-center justify-center rounded-full bg-brandPurpleDark bg-opacity-70 text-3xl text-white transition duration-300 ease-in-out hover:bg-opacity-100 dark:bg-brandPurple'
                  >
                    <HiChevronLeft className='mr-1' />
                  </button>
                )}
                renderCenterRightControls={({ nextSlide }) => (
                  <button
                    onClick={nextSlide}
                    className='mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-brandPurpleDark bg-opacity-70 text-3xl text-white transition duration-300 ease-in-out hover:bg-opacity-100 dark:bg-brandPurple'
                  >
                    <HiChevronRight className='ml-1' />
                  </button>
                )}
              >
                {doctorList?.doctors.map((item) => (
                  <div className='rounded-xl transition-all duration-500' key={item.id}>
                    <Link href={`/fertility-experts/${item?.slug}`} passHref>
                      <div className='space-y-4'>
                        <div className='mx-auto flex w-64 flex-col items-center justify-center'>
                          <Image
                            className='h-52 w-52 rounded-full bg-gradient-to-br from-brandPink3/80 to-purple-500/40 shadow-2xl drop-shadow-2xl dark:bg-gray-400'
                            src={item?.image?.url}
                            alt={item?.imageAlt || item?.name}
                            width={500}
                            height={500}
                            loading='lazy'
                          />
                          <div className='mt-12 flex items-center justify-center space-y-4 text-center'>
                            <div className='space-y-1 text-lg font-medium leading-6'>
                              <h3 className='font-content text-gray-800 dark:text-white'>
                                {item?.name}
                              </h3>
                              <p className='font-content text-sm text-brandPurpleDark dark:text-purple-300'>
                                {item?.qualification}
                              </p>
                              <p className='pb-2 font-content text-sm text-gg-500 dark:text-gg-300'>
                                {item?.designation}
                              </p>
                            </div>
                          </div>
                          <div className='mx-auto w-fit rounded-lg bg-gg-500 px-8 py-2 text-center font-bold text-white'>
                            {CATEGORY_TITLES[item?.category] || item.category}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorList;
