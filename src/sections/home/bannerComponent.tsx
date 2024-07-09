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
    },
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
        className='border-0 shadow-2xl drop-shadow-2xl'
        defaultControlsConfig={defaultControlsConfig}
        wrapAround
        dragging
        enableKeyboardControls
        pauseOnHover
        renderCenterLeftControls={({ previousSlide }) => (
          <button
            onClick={previousSlide}
            className='ml-3 hidden h-11 w-11 items-center justify-center rounded-full bg-brandPurpleDark bg-opacity-70 text-4xl text-white transition duration-300 ease-in-out hover:bg-opacity-100 md:flex'
          >
            <HiChevronLeft className='mr-1' />
          </button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button
            onClick={nextSlide}
            className='mr-3 hidden h-11 w-11 items-center justify-center rounded-full bg-brandPurpleDark bg-opacity-70 text-4xl text-white transition duration-300 ease-in-out hover:bg-opacity-100 md:flex'
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
                className='h-full w-full object-cover'
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
