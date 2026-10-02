import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import { MdOutlineSwipeLeft } from 'react-icons/md';
import Carousel from 'nuka-carousel';
import { useEffect, useRef, useState } from 'react';
import { useNearViewport } from 'components/LazyMount';

/**
 * LiteYouTubeEmbed paints its poster as a CSS background-image, so every
 * carousel slide (including clipped, off-screen ones) downloaded a
 * ~140KB maxresdefault.jpg up front (~840KB for the six videos). Instead the
 * embeds are mounted once the carousel is near the viewport, staggered
 * (`delay`) so the posters do not arrive in one burst. Each wrapper keeps the
 * same box as before, so there is no layout shift, and every slide is ready
 * before it can be swiped into view.
 */
const LazyYouTube = ({ id, near, delay }: { id: string; near: boolean; delay: number }) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!near) return;
    const timer = window.setTimeout(() => setReady(true), delay);
    return () => window.clearTimeout(timer);
  }, [near, delay]);

  return (
    <div className='h-full w-full'>
      {ready && (
        <LiteYouTubeEmbed
          id={id}
          title='Successful IVF Treatment Testimonial | GarbhaGudi IVF Centre | Dr Asha S Vijay'
          poster='maxresdefault'
        />
      )}
    </div>
  );
};

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
  const sectionRef = useRef<HTMLDivElement>(null);
  const near = useNearViewport(sectionRef, '400px 0px');
  const defaultControlsConfig = {
    pagingDotsStyle: {
      display: 'none',
    },
  };
  return (
    <div className='bg-gradient-to-br from-brandPink5 to-brandPurple2 dark:from-gray-800 dark:via-gray-800 dark:to-brandPurpleDark'>
      <div className='mx-auto max-w-7xl py-8'>
        <h2 className='flex items-center justify-center text-center font-heading text-2xl font-extrabold text-gray-800 dark:text-gray-200 lg:text-4xl'>
          Testimonials from our happy couples
        </h2>
        <div
          ref={sectionRef}
          className='mx-auto flex max-w-7xl flex-row items-center justify-center px-3 sm:px-0'
        >
          <Carousel
            defaultControlsConfig={defaultControlsConfig}
            autoplayInterval={5000}
            className='mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-4xl'
            wrapAround
            dragging
            enableKeyboardControls
            pauseOnHover
            renderCenterLeftControls={({ previousSlide }) => (
              <button
                onClick={previousSlide}
                className='ml-3 hidden h-11 w-11 items-center justify-center rounded-full bg-brandPurpleDark bg-opacity-70 text-4xl text-white transition duration-300 ease-in-out hover:bg-opacity-100 dark:bg-brandPurple lg:flex'
              >
                <HiChevronLeft className='mr-1' />
              </button>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <button
                onClick={nextSlide}
                className='mr-3 hidden h-11 w-11 items-center justify-center rounded-full bg-brandPurpleDark bg-opacity-70 text-4xl text-white transition duration-300 ease-in-out hover:bg-opacity-100 dark:bg-brandPurple lg:flex'
              >
                <HiChevronRight className='ml-1' />
              </button>
            )}
          >
            {testimonials?.items?.map((item, index) => {
              return (
                <div
                  className='mx-auto mt-8 aspect-video w-screen max-w-xs overflow-hidden rounded-lg border border-transparent sm:max-w-sm sm:px-0 md:max-w-md lg:max-w-3xl'
                  key={item?.id}
                >
                  <LazyYouTube
                    id={item?.snippet?.resourceId.videoId}
                    near={near}
                    delay={index * 300}
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className='mx-auto max-w-6xl py-1 pt-4 text-center font-content text-sm underline lg:text-right'>
          Swipe for more reviews <MdOutlineSwipeLeft className='inline-block' />
        </div>
      </div>
    </div>
  );
};

export default Video;
