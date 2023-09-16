import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const BannerComponent = (bannerData) => {
  return (
    <div>
      <div className=''>
        <Carousel
          autoPlay
          infiniteLoop
          emulateTouch
          showThumbs={false}
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
          {bannerData?.banners.map((items) => (
            <Link
              href={items.url}
              target='_blank'
              rel='noreferrer'
              key={items.id}
            >
              <Image
                src={items.image.url}
                alt={items.title}
                width={1920}
                height={1080}
                className='w-full h-full'
                priority
              />
            </Link>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default BannerComponent;
