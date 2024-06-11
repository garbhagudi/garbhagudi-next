import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import Carousel from 'nuka-carousel';

interface bannerProps {
  banners: [
    {
      id: string;
      title: string;
      url: string;
      image: {
        url: string;
      };
    }
  ];
}

const BannerComponent = (bannerData: bannerProps) => {
  const defaultControlsConfig = {
    pagingDotsStyle: {
      display: 'none',
    },
  };

  return (
    <div>
      <Carousel
        autoplay
        autoplayInterval={5000}
        className='shadow-2xl border-0 drop-shadow-2xl'
        defaultControlsConfig={defaultControlsConfig}
        wrapAround
        dragging
        enableKeyboardControls
        pauseOnHover
        renderCenterLeftControls={({ previousSlide }) => (
          <button
            onClick={previousSlide}
            className='hidden w-11 h-11 text-4xl bg-brandPurpleDark text-white rounded-full md:flex items-center justify-center ml-3 bg-opacity-70 hover:bg-opacity-100 transition duration-300 ease-in-out'
          >
            <HiChevronLeft className='mr-1' />
          </button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button
            onClick={nextSlide}
            className='hidden w-11 h-11 text-4xl bg-brandPurpleDark text-white rounded-full md:flex items-center justify-center mr-3 bg-opacity-70 hover:bg-opacity-100 transition duration-300 ease-in-out'
          >
            <HiChevronRight className='ml-1' />
          </button>
        )}
      >
        {bannerData ? (
          bannerData.banners.map((banner) => (
            <Link
              href={banner?.url || '#'}
              target='_blank'
              rel='noreferrer'
              key={banner.id}
            >
              <Image
                src={banner?.image?.url}
                alt={banner?.title}
                width={1920}
                height={1080}
                className='w-full h-full object-cover'
                priority
              />
            </Link>
          ))
        ) : (
          <div></div>
        )}
      </Carousel>
    </div>
  );
};

export default BannerComponent;
