import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import Carousel from 'nuka-carousel';

interface doctorListProps {
  doctors: [
    {
      id: string;
      name: string;
      slug: string;
      qualification: string;
      designation: string;
      image: {
        url: string;
      };
      imageAlt: string;
    },
  ];
}

/* Landing-page behaviour: profile clicks convert to the on-page lead form
 * (#form) instead of navigating away to /fertility-experts/[slug]. */
const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  document.getElementById('form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const DoctorList = (doctorList: doctorListProps) => {
  const defaultControlsConfig = {
    pagingDotsStyle: {
      display: 'none',
    },
  };

  /* nuka-carousel v7 takes a single numeric slidesToShow, so we size it to the
   * viewport ourselves: 1 on mobile, 2 on tablet, 4 on desktop. */
  const [slidesToShow, setSlidesToShow] = useState(1);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setSlidesToShow(w >= 1024 ? 4 : w >= 640 ? 2 : 1);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  /* Start auto-scrolling 3s after the section first scrolls into view
   * (not on page load). */
  const sliderRef = useRef<HTMLDivElement>(null);
  const [autoplay, setAutoplay] = useState(false);
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return undefined;
    let timer: ReturnType<typeof setTimeout>;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timer = setTimeout(() => setAutoplay(true), 3000);
          observer.disconnect();
        }
      },
      { threshold: 0 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      <div
        className='bg-purple-100/70 dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-700 dark:to-gray-800'
        id='ourTeam'
      >
        <div className='mx-auto max-w-[1366px] px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-12'>
          <div className='space-y-12'>
            <div className='space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl'>
              <h2 className='font-heading text-3xl font-extrabold tracking-tight text-gray-800 dark:text-gray-200 sm:text-4xl'>
                Meet our Fertility Experts
              </h2>
              <p className='text-md font-content text-gray-800 dark:text-gray-200'>
                Our team of IVF specialists in Bangalore have been known for their extensive
                clinical experience and research contributions and their success in treating the
                most challenging fertility cases.
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
                    className='ml-3 flex h-10 w-10 items-center justify-center rounded-full bg-brandPurpleDark bg-opacity-70 text-3xl text-white transition duration-300 ease-in-out hover:bg-opacity-100 dark:bg-brandPurple'
                  >
                    <HiChevronLeft className='mr-1' />
                  </button>
                )}
                renderCenterRightControls={({ nextSlide }) => (
                  <button
                    onClick={nextSlide}
                    aria-label='Next doctor'
                    className='mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-brandPurpleDark bg-opacity-70 text-3xl text-white transition duration-300 ease-in-out hover:bg-opacity-100 dark:bg-brandPurple'
                  >
                    <HiChevronRight className='ml-1' />
                  </button>
                )}
              >
                {doctorList?.doctors.map((item) => (
                  <div className='px-3 py-2' key={item.id}>
                    <a href='#form' onClick={scrollToForm}>
                      <div className='mx-auto flex w-full flex-col items-center justify-center'>
                        <Image
                          className='h-44 w-44 rounded-full bg-gradient-to-br from-brandPink3/80 to-purple-500/40 object-cover shadow-2xl drop-shadow-2xl dark:bg-gray-400'
                          src={item?.image?.url}
                          alt={item?.imageAlt || item?.name}
                          width={500}
                          height={500}
                          loading='lazy'
                        />
                        <div className='mt-8 space-y-1 text-center'>
                          <h3 className='font-heading text-lg font-bold text-gray-800 dark:text-white'>
                            {item?.name}
                          </h3>
                          <p className='font-content text-xs text-purple-900 dark:text-purple-300'>
                            {item?.qualification}
                          </p>
                          <p className='pb-2 font-content text-sm text-gg-500 dark:text-gg-300'>
                            {item?.designation}
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorList;
