import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import Carousel from 'nuka-carousel';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { MdOutlineSwipeLeft } from 'react-icons/md';

import { featuredCarouselVideoIds } from 'sections/campaigns-bangalore-en/testimonialVideos';

export default function Video() {
  return (
    <div className='bg-brandPurple'>
      <div className='mx-auto max-w-7xl py-8'>
        <h3 className='flex items-center justify-center text-center text-2xl font-bold text-white sm:text-3xl lg:text-4xl'>
          Most Trusted IVF Clinic in Bangalore
        </h3>
        <div className='mx-auto flex max-w-7xl flex-row items-center justify-center px-3 sm:px-0'>
          <Carousel
            renderAnnounceSlideMessage={({ currentSlide, count }) =>
              `Slide ${currentSlide + 1} of ${count}`
            }
            defaultControlsConfig={{ pagingDotsStyle: { display: 'none' } }}
            className='mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-4xl'
            wrapAround
            dragging
            enableKeyboardControls
            renderCenterLeftControls={({ previousSlide }) => (
              <button
                onClick={previousSlide}
                aria-label='Previous video'
                className='ml-3 hidden h-11 w-11 items-center justify-center rounded-full bg-brandPurpleDark bg-opacity-70 text-4xl text-white transition duration-300 ease-in-out hover:bg-opacity-100 lg:flex'
              >
                <HiChevronLeft className='mr-1' />
              </button>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <button
                onClick={nextSlide}
                aria-label='Next video'
                className='mr-3 hidden h-11 w-11 items-center justify-center rounded-full bg-brandPurpleDark bg-opacity-70 text-4xl text-white transition duration-300 ease-in-out hover:bg-opacity-100 lg:flex'
              >
                <HiChevronRight className='ml-1' />
              </button>
            )}
          >
            {featuredCarouselVideoIds.map((videoId, index) => (
              <div
                className='mx-auto mt-8 aspect-video w-screen max-w-xs overflow-hidden rounded-lg border border-transparent sm:max-w-sm sm:px-0 md:max-w-md lg:max-w-3xl'
                key={videoId}
              >
                <LiteYouTubeEmbed
                  id={videoId}
                  title={`GarbhaGudi IVF Centre patient story ${index + 1}`}
                  poster='maxresdefault'
                  webp
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div className='mx-auto max-w-6xl py-1 pt-4 text-center text-sm underline lg:text-right'>
          Swipe for more reviews <MdOutlineSwipeLeft className='inline-block' />
        </div>
      </div>
    </div>
  );
}
