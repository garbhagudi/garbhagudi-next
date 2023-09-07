import React, { useRef } from 'react';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import { MdOutlineSwipeLeft } from 'react-icons/md';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Video = ({ testimonials }) => {
  return (
    <div className='bg-gradient-to-br from-brandPink5 to-brandPurple2'>
      <div className='max-w-7xl mx-auto py-8'>
        <h2 className='text-2xl lg:text-4xl text-center font-extrabold text-brandDark font-heading flex items-center justify-center'>
          Testimonials from our happy couples
        </h2>
        <div className='px-3 sm:px-0 relative max-w-7xl mx-auto flex flex-row items-center justify-center'>
          <Carousel
            infiniteLoop
            emulateTouch
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
            {testimonials?.items?.map((item) => {
              const { id, snippet = {} } = item;
              return (
                <div
                  className='md:w-10/12 mx-auto aspect-video mt-8 overflow-hidden border border-transparent rounded-lg sm:px-0'
                  key={item.id}
                >
                  <LiteYouTubeEmbed
                    id={snippet.resourceId.videoId}
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
