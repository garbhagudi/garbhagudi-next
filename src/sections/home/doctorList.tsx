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
            <div className='mx-auto hidden grid-cols-2 space-y-0 sm:gap-8 sm:space-y-0 lg:grid lg:grid-cols-5'>
              {doctorList?.doctors.map((item) => {
                return (
                  <div key={item?.id} className='transition-all duration-300 hover:scale-115'>
                    <Link href={`/fertility-experts/${item?.slug}`} passHref>
                      <div className='space-y-4'>
                        <div className='relative mx-auto h-44 w-44'>
                          <div className='bg-[length: 400%] absolute h-full w-full animate-rotate rounded-full bg-gradient-to-br from-brandPink3/80 to-purple-500/40 dark:bg-gray-400'></div>
                          <Image
                            className='shadow-champaigne rounded-full bg-transparent drop-shadow-2xl'
                            src={item?.image?.url}
                            alt={item?.imageAlt || item?.name}
                            width={400}
                            height={400}
                            loading='lazy'
                          />
                        </div>
                        <div className='space-y-0.5'>
                          <h3 className='font-heading text-lg font-bold text-gray-800 dark:text-gray-200'>
                            {item?.name}
                          </h3>
                          <p className='font-content text-xs text-purple-900 dark:text-purple-200'>
                            {item?.qualification}
                          </p>
                          <div className='pb-2 font-content text-sm text-gg-500 shadow-black drop-shadow-2xl dark:text-gg-300'>
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
