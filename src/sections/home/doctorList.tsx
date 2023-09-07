import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 0,
  },
  768: {
    slidesPerView: 1,
    spaceBetween: 30,
  },
  1024: {
    slidesPerView: 1,
    spaceBetween: 30,
  },
  1601: {
    slidesPerView: 1,
    spaceBetween: 30,
  },
};

const DoctorList = (doctorList) => {
  return (
    <div>
      <div className='bg-purple-100/70' id='ourTeam'>
        <div className='px-4 py-16 mx-auto text-center max-w-[1366px] sm:px-6 lg:px-8 lg:py-12'>
          <div className='space-y-12'>
            <div className='space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl'>
              <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl text-brandDark font-heading'>
                Meet our Fertility Experts
              </h2>
              <p className='text-md text-brandDark font-content'>
                Our team of IVF specialists in Bangalore have been known for
                their extensive clinical experience and research contributions
                and their success in treating the most challenging fertility
                cases.
              </p>
            </div>
            <div className='hidden lg:grid grid-cols-2 mx-auto space-y-0 sm:gap-8 sm:space-y-0 lg:grid-cols-6'>
              {doctorList?.doctors.map((item: any) => {
                return (
                  <div
                    key={item?.id}
                    className='hover:scale-115 transition-all duration-300 '
                  >
                    <Link href={`/fertility-experts/${item?.slug}`} passHref>
                      <div className='space-y-4'>
                        <div className='relative w-44 h-44'>
                          <div className='h-full w-full absolute rounded-full bg-gradient-to-br from-brandPink3/80 to-purple-500/40 animate-rotate bg-[length: 400%]'></div>
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
                          <h3 className='text-brandDark text-lg font-heading font-bold'>
                            {item?.name}
                          </h3>
                          <p className='text-xs text-purple-900 font-content'>
                            {item?.qualification}
                          </p>
                          <div className='pb-2 text-sm text-brandPink font-content drop-shadow-2xl shadow-black'>
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
                autoPlay
                infiniteLoop
                emulateTouch
                interval={5000}
                className='w-full h-full'
                stopOnHover
                showArrows
                showIndicators={false}
                showStatus={false}
                renderArrowPrev={(clickHandler, hasPrev) => {
                  return (
                    <div
                      className={`${
                        hasPrev ? 'absolute' : 'hidden'
                      } top-0 bottom-0 left-0 md:flex justify-center items-center p-3 opacity-80 hover:opacity-100 cursor-pointer z-20 hidden`}
                      onClick={clickHandler}
                    >
                      <div className='w-11 h-11 bg-brandPurpleDark rounded-full flex items-center justify-center'>
                        <HiChevronLeft className='w-full h-full mr-1 text-white' />
                      </div>
                    </div>
                  );
                }}
                renderArrowNext={(clickHandler, hasNext) => {
                  return (
                    <div
                      className={`${
                        hasNext ? 'absolute' : 'hidden'
                      } top-0 bottom-0 right-0 hidden md:flex justify-center items-center p-3 opacity-80 hover:opacity-100 cursor-pointer z-20`}
                      onClick={clickHandler}
                    >
                      <div className='w-11 h-11 bg-brandPurpleDark rounded-full flex items-center justify-center'>
                        <HiChevronRight className='w-full h-full ml-1 text-white' />
                      </div>
                    </div>
                  );
                }}
              >
                {doctorList?.doctors.map((item: any) => {
                  return (
                    <div
                      className='mb-2 transition-all duration-500 rounded-xl'
                      key={item.id}
                    >
                      <Link href={`/fertility-experts/${item?.slug}`} passHref>
                        <div className='space-y-4'>
                          <div className='relative h-56 w-56 mx-auto'>
                            <div className='h-full w-full absolute rounded-full bg-gradient-to-br from-brandPink3/80 to-purple-500/40 animate-rotate bg-[length: 400%]'></div>
                            <Image
                              className='rounded-full shadow-2xl drop-shadow-2xl bg-transparent'
                              src={item?.image?.url}
                              alt={item?.imageAlt || item?.name}
                              width={500}
                              height={500}
                              loading='lazy'
                            />
                          </div>
                          <div className='space-y-4'>
                            <div className='space-y-1 text-lg font-medium leading-6'>
                              <h3 className='text-brandDark font-content'>
                                {item?.name}
                              </h3>
                              <p className='text-sm text-brandPurpleDark font-content'>
                                {item?.qualification}
                              </p>
                              <p className='pb-2 text-sm text-brandPink font-content'>
                                {item?.designation}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorList;
