import React from 'react';
import Link from 'next/link';

const Banner = () => {
  return (
    <div>
      <section className='relative bg-[url(https://res.cloudinary.com/garbhagudiivf/image/upload/v1672381537/Misc/happy-pregnant-woman-late-pregnancy-stage-sitting-grass-lawn-min_11zon_xkeac0.webp)] bg-cover bg-right sm:bg-center bg-no-repeat'>
        <div className='absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/90 sm:to-white/15'></div>
        <div className='relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8'>
          <div className='max-w-xl text-center  sm:text-left'>
            <h1 className='flex flex-col'>
              <span className='text-3xl font-extrabold sm:text-5xl font-heading py-2'>
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
            <h3 className='mt-4 max-w-lg sm:text-xl sm:leading-relaxed font-content'>
              Thousands of babies and millions of memories began with a visit to
              GarbhaGudi
            </h3>
            <h3 className='mt-4 max-w-lg sm:text-xl sm:leading-relaxed font-content'>
              Making families smile since 2011
            </h3>

            <div className='mt-8 flex flex-wrap gap-4 text-center'>
              <Link
                href='/gg-care'
                className='block w-full font-content rounded bg-brandPink px-12 py-3 text-sm font-bold text-white shadow hover:bg-brandPink2 focus:outline-none focus:ring active:bg-brandPink3 sm:w-auto'
              >
                Get Started
              </Link>

              <Link
                href='#know-more'
                className='block scroll-smooth font-content w-full rounded bg-white px-12 py-3 text-sm font-bold text-brandPink shadow hover:text-brandPink2 focus:outline-none focus:ring active:text-rose-500 sm:w-auto'
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
