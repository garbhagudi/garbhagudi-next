import { useEffect, useState } from 'react';
import Image from 'components/gpt/image';
import { doctors } from 'components/gpt/doctors';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import Carousel from 'nuka-carousel';
import useInViewAutoplay from 'lib/useInViewAutoplay';
import dynamic from 'next/dynamic';
const ContentModal = dynamic(() => import('components/gpt/contentModal'), {
  ssr: false,
});

/* nuka-carousel v7 takes a single numeric slidesToShow, so we size it to the
 * viewport ourselves: 1 below 1024px (covers both mobile and tablet — 4
 * fixed-width 208px cards don't fit in a ~768-1023px tablet width without
 * overlapping), 4 from 1024px up. Matches dash's own swiper breakpoints
 * (1 below 768, 1 at 768-1023, 4 from 1024 up) collapsed to a single step
 * since nuka-carousel has no intermediate-tablet slot here. */
const slidesForWidth = (w) => (w >= 1024 ? 4 : 1);

export default function TeamSection() {
  const defaultControlsConfig = {
    pagingDotsStyle: {
      display: 'none',
    },
  };

  const [slidesToShow, setSlidesToShow] = useState(() =>
    typeof window === 'undefined' ? 1 : slidesForWidth(window.innerWidth)
  );
  useEffect(() => {
    const query = window.matchMedia('(min-width: 1024px)');
    const update = () => setSlidesToShow(slidesForWidth(window.innerWidth));
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  const { ref: sliderRef, autoplay } = useInViewAutoplay(3000);

  return (
    <div className='bg-gradient-to-br from-pink-300 to-purple-100 py-6'>
      <div className='mx-auto max-w-7xl px-3 pb-12'>
        <div className='pb-12 text-center'>
          <h2 className='mb-4 font-dmSans text-2xl font-bold text-brandDark sm:text-3xl'>
            Meet our Fertility Specialists
          </h2>
          <p className='mx-auto max-w-prose text-sm md:text-base'>
            Our team of fertility specialists have been known for their extensive clinical
            experience and research contributions, as well as for their success in treating the most
            challenging fertility cases.
          </p>
        </div>

        <div ref={sliderRef} className='relative mx-auto w-full'>
          <Carousel
            autoplay={autoplay}
            autoplayInterval={3000}
            slidesToShow={slidesToShow}
            slidesToScroll={1}
            cellAlign='left'
            defaultControlsConfig={defaultControlsConfig}
            className='mx-auto w-full'
            wrapAround
            dragging
            enableKeyboardControls
            pauseOnHover
            renderCenterLeftControls={({ previousSlide }) => (
              <button
                onClick={previousSlide}
                aria-label='Previous doctor'
                className='ml-4 flex h-10 w-10 items-center justify-center rounded-full bg-brandPink p-2 text-white lg:ml-10'
              >
                <HiChevronLeft className='text-2xl' />
              </button>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <button
                onClick={nextSlide}
                aria-label='Next doctor'
                className='mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-brandPink p-2 text-white lg:mr-10'
              >
                <HiChevronRight className='text-2xl' />
              </button>
            )}
          >
            {doctors &&
              doctors?.map((item) => (
                <div className='px-2' key={item.name}>
                  <div className='mb-2 rounded-xl transition-all duration-500'>
                    <div className='relative mx-auto h-52 w-52'>
                      <div className='bg-[length: 400%] absolute h-full w-full animate-rotate overflow-hidden rounded-full bg-gradient-to-br from-brandPink3/80 to-purple-500/40'></div>
                      <Image
                        className='overflow-hidden rounded-full bg-transparent shadow-2xl drop-shadow-2xl'
                        src={item?.image.url}
                        alt={item?.imageAlt || item?.name}
                        width={220}
                        height={220}
                        loading='lazy'
                        quality={10}
                      />
                    </div>
                    <div className='mt-4 flex flex-col items-center justify-center space-y-4 text-center'>
                      <div className='h-24 space-y-1 text-lg font-medium leading-6'>
                        <h3 className='text-brandDark'>{item?.name}</h3>
                        <p className='text-xs text-brandPurpleDark'>{item?.qualification}</p>
                        <p className='pb-2 text-sm text-brandPink'>{item?.designation}</p>
                      </div>
                      <ContentModal
                        title={'Read More'}
                        classname={
                          ' text-brandPink text-base px-3 py-1.5 rounded-lg font-medium hover:text-brandPurpleDark border-2 border-brandPurpleDark hover:border-brandPurpleDark transition-all duration-300 ease-linear'
                        }
                        content={item?.bio?.raw?.children}
                        heading={item?.name}
                      />
                    </div>
                  </div>
                </div>
              ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
