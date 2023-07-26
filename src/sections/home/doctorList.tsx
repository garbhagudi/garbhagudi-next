import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Scrollbar } from 'swiper';
import { Navigation } from 'swiper';

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
  const swiperRef2 = useRef<SwiperCore>();
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
                          <p className='text-xs text-purple-900 font-dm'>
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
              <button
                onClick={() => swiperRef2.current?.slidePrev()}
                className='bg-brandPink text-white rounded-full z-10 p-2 absolute left-0 ml-4 '
              >
                <HiChevronLeft className='text-2xl' />
              </button>
              <Swiper
                modules={[Navigation, Scrollbar]}
                onBeforeInit={(swiper) => {
                  swiperRef2.current = swiper;
                }}
                breakpoints={breakpoints}
                className=''
                loop={true}
                pagination={true}
                autoplay
              >
                {doctorList?.doctors.map((item: any) => {
                  return (
                    <SwiperSlide key={item.id}>
                      <div className='mb-2 transition-all duration-500 rounded-xl '>
                        <Link
                          href={`/fertility-experts/${item?.slug}`}
                          passHref
                        >
                          <div className='space-y-4'>
                            <div className='relative h-56 w-56 mx-auto'>
                              <div className='h-full w-full absolute rounded-full bg-gradient-to-br from-brandPink3/80 to-purple-500/40 animate-rotate bg-[length: 400%]'></div>
                              <Image
                                className='rounded-full shadow-vigorous drop-shadow-2xl bg-transparent'
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
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <button
                onClick={() => swiperRef2.current?.slideNext()}
                className='bg-brandPink text-white rounded-full p-2 z-10 absolute right-0 mr-4'
              >
                <HiChevronRight className='text-2xl' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorList;
