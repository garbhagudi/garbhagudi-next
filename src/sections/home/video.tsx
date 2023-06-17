import React, { useRef } from 'react';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import SwiperCore, { Scrollbar } from 'swiper';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

const data = [
  { id: 1, videoId: 'xIvoIRASbgg' },
  { id: 2, videoId: '1chyB0TjnrM' },
  { id: 3, videoId: 'IfhN2YhkEyU' },
  { id: 4, videoId: 'yM439ewxSks' },
  { id: 5, videoId: 'YVyaYhk8Hbk' },
  { id: 6, videoId: 'Te1R9a0cc40' },
  { id: 7, videoId: 'jlDAsrZWinI' },
  { id: 8, videoId: 'QJLHWn1P_-Y' },
  { id: 9, videoId: 'VaGyOFVn4H4' },
  { id: 10, videoId: 'Djje6h177kU' },
];

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

const Video = () => {
  const swiperRef = useRef<SwiperCore>();
  return (
    <div className='bg-gradient-to-br from-brandPink5 to-brandPurple2'>
      <div className='max-w-7xl mx-auto py-8'>
        <h2 className='text-2xl lg:text-4xl text-center font-extrabold text-brandDark font-heading flex items-center justify-center'>
          Testimonials from our happy couples
        </h2>
        <div className='px-3 sm:px-0 relative max-w-7xl mx-auto flex flex-row items-center justify-center'>
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
            className='max-w-6xl'
            loop={true}
            pagination={true}
          >
            {data.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div
                    className='md:w-8/12 mx-auto aspect-video mt-8 overflow-hidden rounded-3xl border-2 border-brandPink sm:px-0'
                    key={item.id}
                  >
                    <LiteYouTubeEmbed
                      id={item.videoId}
                      title='Successful IVF Treatment Testimonial | GarbhaGudi IVF Centre | Dr Asha S Vijay'
                      poster='maxresdefault'
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className='bg-brandPink text-white rounded-full p-2 z-10 absolute right-0 mr-4 hidden md:block'
          >
            <HiChevronRight className='text-2xl' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Video;
