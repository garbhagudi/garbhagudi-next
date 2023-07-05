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

const BannerComponent = (bannerData) => {
  const swiperRef = useRef<SwiperCore>();
  return (
    <div>
      <div className='relative mx-auto flex flex-row items-center justify-center'>
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className='bg-brandPink text-white rounded-full z-10 p-2 absolute left-0 ml-4 hidden md:block'
        >
          <HiChevronLeft className='text-2xl' />
        </button>
        <Swiper
          modules={[Navigation, Scrollbar]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={breakpoints}
          className=''
          loop={true}
          pagination={true}
        >
          {bannerData?.banners.map((items: any) => (
            <SwiperSlide key={items.id}>
              <Link href={items?.url} target='_blank' rel='noreferrer'>
                <Image
                  src={items?.image?.url}
                  alt={items?.title}
                  width={1920}
                  height={630}
                  className='w-full h-full'
                  priority
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className='bg-brandPink text-white rounded-full p-2 z-10 absolute right-0 mr-4 hidden md:block'
        >
          <HiChevronRight className='text-2xl' />
        </button>
      </div>
      ;
    </div>
  );
};

export default BannerComponent;
