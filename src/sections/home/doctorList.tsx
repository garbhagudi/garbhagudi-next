import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import Carousel from 'nuka-carousel';

interface doctorListProps {
  doctors: [
    {
      id: string;
      name: string;
      slug: string;
      qualification: string;
      designation: string;
      image: {
        url: string;
      };
      imageAlt: string;
    },
  ];
}

const DoctorList = (doctorList: doctorListProps) => {
  const defaultControlsConfig = {
    pagingDotsStyle: {
      display: 'none',
    },
  };
  return (
    <div>
      <div
        className='bg-purple-100/70 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-800 dark:via-gray-700'
        id='ourTeam'
      >
        <div className='px-4 py-16 mx-auto text-center max-w-[1366px] sm:px-6 lg:px-8 lg:py-12'>
          <div className='space-y-12'>
            <div className='space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl'>
              <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl text-gray-800 dark:text-gray-200 font-heading'>
                Meet our Fertility Experts
              </h2>
              <p className='text-md text-gray-800 dark:text-gray-200 font-content'>
                Our team of IVF specialists in Bangalore have been known for
                their extensive clinical experience and research contributions
                and their success in treating the most challenging fertility
                cases.
              </p>
            </div>
            <div className='hidden lg:grid grid-cols-2 mx-auto space-y-0 sm:gap-8 sm:space-y-0 lg:grid-cols-5'>
              {doctorList?.doctors.map((item) => {
                return (
                  <div
                    key={item?.id}
                    className='hover:scale-115 transition-all duration-300 '
                  >
                    <Link href={`/fertility-experts/${item?.slug}`} passHref>
                      <div className='space-y-4'>
                        <div className='relative w-44 h-44 mx-auto'>
                          <div className='h-full w-full absolute rounded-full bg-gradient-to-br from-brandPink3/80 to-purple-500/40 dark:bg-gray-400 animate-rotate bg-[length: 400%]'></div>
                          <Image
                            className='rounded-full  shadow-champaigne drop-shadow-2xl bg-transparent'
                            src={item?.image?.url}
                            alt={item?.imageAlt || item?.name}
                            width={400}
                            height={400}
                            loading='lazy'
                          />
                        </div>
                        <div className='space-y-0.5'>
                          <h3 className='text-gray-800 dark:text-gray-200 text-lg font-heading font-bold'>
                            {item?.name}
                          </h3>
                          <p className='text-xs text-purple-900 dark:text-purple-200 font-content'>
                            {item?.qualification}
                          </p>
                          <div className='pb-2 text-sm text-gg-500 dark:text-gg-300 font-content drop-shadow-2xl shadow-black'>
                            {item?.designation}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
            <div className='relative mx-auto flex flex-row items-center justify-center lg:hidden'>
              <Carousel
                autoplay
                autoplayInterval={5000}
                defaultControlsConfig={defaultControlsConfig}
                className='max-w-xs sm:max-w-sm md:max-w-md mx-auto'
                wrapAround
                dragging
                enableKeyboardControls
                pauseOnHover
                renderCenterLeftControls={({ previousSlide }) => (
                  <button
                    onClick={previousSlide}
                    className='w-10 h-10 text-3xl bg-brandPurpleDark dark:bg-brandPurple text-white rounded-full flex items-center justify-center ml-3 bg-opacity-70 hover:bg-opacity-100 transition duration-300 ease-in-out'
                  >
                    <HiChevronLeft className='mr-1' />
                  </button>
                )}
                renderCenterRightControls={({ nextSlide }) => (
                  <button
                    onClick={nextSlide}
                    className='w-10 h-10 text-3xl bg-brandPurpleDark dark:bg-brandPurple text-white rounded-full flex items-center justify-center mr-3 bg-opacity-70 hover:bg-opacity-100 transition duration-300 ease-in-out'
                  >
                    <HiChevronRight className='ml-1' />
                  </button>
                )}
              >
                {doctorList?.doctors.map((item) => (
                  <div
                    className='transition-all duration-500 rounded-xl'
                    key={item.id}
                  >
                    <Link href={`/fertility-experts/${item?.slug}`} passHref>
                      <div className='space-y-4'>
                        <div className='w-64 mx-auto flex items-center justify-center flex-col'>
                          <Image
                            className='rounded-full w-52 h-52 shadow-2xl drop-shadow-2xl bg-gradient-to-br from-brandPink3/80 to-purple-500/40 dark:bg-gray-400'
                            src={item?.image?.url}
                            alt={item?.imageAlt || item?.name}
                            width={500}
                            height={500}
                            loading='lazy'
                          />
                          <div className='flex items-center justify-center space-y-4 mt-12 text-center'>
                            <div className='space-y-1 text-lg font-medium leading-6'>
                              <h3 className='font-content text-gray-800 dark:text-white'>
                                {item?.name}
                              </h3>
                              <p className='text-sm text-brandPurpleDark dark:text-purple-300 font-content'>
                                {item?.qualification}
                              </p>
                              <p className='pb-2 text-sm text-gg-500 dark:text-gg-300 font-content'>
                                {item?.designation}
                              </p>
                            </div>
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
