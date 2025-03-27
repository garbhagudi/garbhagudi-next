import Link from 'next/link';
import Image from 'next/image';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import Carousel from 'nuka-carousel';

export default function Banner() {
  const banners = [
    {
      id: '1',
      title: 'Egg Freezing info Web Banner--01',
      image: {
        url: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1733303389/Egg_Freezing_info_Web_Banner--01_easb3r.webp',
      },
    },
    {
      id: '2',
      title: 'Egg Freezing info Web Banner--02',
      image: {
        url: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1733303389/Egg_Freezing_info_Web_Banner--02_legcno.webp',
      },
    },
    {
      id: '3',
      title: 'Egg Freezing info Web Banner--03',
      image: {
        url: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1733303389/Egg_Freezing_info_Web_Banner--03_g0czqu.webp',
      },
    },
  ];

  const defaultControlsConfig = {
    pagingDotsStyle: {
      display: 'none',
    },
  };

  return (
    <>
      <div>
        <section className='relative overflow-hidden bg-cover bg-right bg-no-repeat sm:bg-center'>
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
            {banners.map((banner) => (
              <Image
                src={banner.image.url}
                alt={banner.title}
                width={1920}
                height={1580}
                className='h-full w-full object-cover'
                priority
                key={banner.id}
              />
            ))}
          </Carousel>
          <div className='absolute right-96 top-10 mx-auto max-w-screen-xl px-4 py-28 sm:px-6 md:top-0 lg:flex lg:h-screen lg:items-center lg:px-8'>
            <div className='max-w-lg md:max-w-3xl md:pl-8 lg:mt-0 lg:pl-14'>
              <div className='mt-3 flex flex-wrap items-center gap-4 font-figtree text-base font-semibold md:mt-5 lg:mt-8'>
                <Link
                  href='/treatments/ivf-treatment-egg-freezing/egg-freezing-quiz'
                  className='block scroll-smooth rounded-[10px] border-2 bg-[#1D1D1D] px-4 py-1 text-center font-content text-base text-white shadow hover:opacity-90 focus:outline-none focus:ring dark:text-white sm:w-auto md:py-2 md:text-lg'
                >
                  Take a Quiz
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
