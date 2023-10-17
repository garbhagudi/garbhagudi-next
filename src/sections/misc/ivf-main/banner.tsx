import React from 'react';
import Link from 'next/link';

const Banner = () => {
  return (
    <div>
      <section className='relative bg-[url(https://res.cloudinary.com/garbhagudiivf/image/upload/v1672381537/Misc/happy-pregnant-woman-late-pregnancy-stage-sitting-grass-lawn-min_11zon_xkeac0.webp)] bg-cover bg-right sm:bg-center bg-no-repeat'>
        <div className='absolute inset-0 sm:bg-transparent bg-gradient-to-r from-white/90 dark:from-gray-800/90 to-white/15 dark:to-gray-800/30'></div>
        <div className='relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8'>
          <div className='max-w-xl text-center  sm:text-left'>
            <h1 className='flex flex-col'>
              <span className='text-3xl font-extrabold sm:text-5xl font-heading py-2 text-gray-800 dark:text-gray-200'>
                Helping couples in their
              </span>
              <strong className='text-3xl font-heading sm:text-5xl block font-extrabold text-brandPink pb-2'>
                Journey towards Parenthood
              </strong>
              <span className='text-xs font-content font-semibold'>
                With In-Vitro Fertilization (IVF) - GarbhaGudi IVF Centre,
                Bangalore.
              </span>
            </h1>
            <h3 className='mt-4 max-w-lg sm:text-xl sm:leading-relaxed font-content text-gray-800 dark:text-gray-200'>
              Thousands of babies and millions of memories began with a visit to
              GarbhaGudi
            </h3>
            <h3 className='mt-4 max-w-lg sm:text-xl sm:leading-relaxed font-content text-gray-800 dark:text-gray-200'>
              Making families smile since 2011
            </h3>

            <div className='mt-8 flex flex-wrap gap-4 text-center'>
              <Link
                href='/gg-care'
                className='block w-full font-content rounded bg-gg-500 dark:bg-gray-500 px-12 py-3 text-sm font-bold text-white shadow hover:bg-gg-400 dark:hover:bg-gg-400 focus:outline-none focus:ring active:bg-brandPink3 sm:w-auto'
              >
                Get Started
              </Link>

              <Link
                href='#know-more'
                className='block scroll-smooth font-content w-full rounded bg-white dark:bg-gg-500 px-12 py-3 text-sm font-bold text-brandPink dark:text-white shadow hover:text-gg-400 dark:hover:bg-gg-400  focus:outline-none focus:ring active:text-rose-500 sm:w-auto'
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
