import React, { useRef } from 'react';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import { MdOutlineSwipeLeft } from 'react-icons/md';
import Carousel from 'nuka-carousel';

interface testimonialProps {
  testimonials: {
    items: [
      {
        id: string;
        snippet: {
          resourceId: {
            videoId: string;
          };
        };
      },
    ];
  };
}

const Video = ({ testimonials }: testimonialProps) => {
  const defaultControlsConfig = {
    pagingDotsStyle: {
      display: 'none',
    },
  };
  return (
    <div className='bg-gradient-to-br from-brandPink5 to-brandPurple2'>
      <div className='max-w-7xl mx-auto py-8'>
        <h2 className='text-2xl lg:text-4xl text-center font-extrabold text-brandDark font-heading flex items-center justify-center'>
          Testimonials from our happy couples
        </h2>
        <div className='px-3 sm:px-0 max-w-7xl mx-auto flex flex-row items-center justify-center'>
          <Carousel
            autoplay
            defaultControlsConfig={defaultControlsConfig}
            autoplayInterval={5000}
            className='w-screen max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl'
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
            {testimonials?.items?.map((item) => {
              return (
                <div
                  className='w-screen max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto aspect-video mt-8 overflow-hidden border border-transparent rounded-lg sm:px-0'
                  key={item?.id}
                >
                  <LiteYouTubeEmbed
                    id={item?.snippet?.resourceId.videoId}
                    title='Successful IVF Treatment Testimonial | GarbhaGudi IVF Centre | Dr Asha S Vijay'
                    poster='maxresdefault'
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className='text-center lg:text-right pt-4 font-content py-1 max-w-6xl mx-auto underline text-sm'>
          Swipe for more reviews <MdOutlineSwipeLeft className='inline-block' />
        </div>
      </div>
    </div>
  );
};

export default Video;
