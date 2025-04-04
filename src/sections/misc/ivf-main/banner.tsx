import Link from 'next/link';

const Banner = () => {
  return (
    <div>
      <section className='relative bg-[url(https://res.cloudinary.com/garbhagudiivf/image/upload/v1672381537/Misc/happy-pregnant-woman-late-pregnancy-stage-sitting-grass-lawn-min_11zon_xkeac0.webp)] bg-cover bg-right bg-no-repeat sm:bg-center'>
        <div className='to-white/15 absolute inset-0 bg-gradient-to-r from-white/90 dark:from-gray-800/90 dark:to-gray-800/30 sm:bg-transparent'></div>
        <div className='relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8'>
          <div className='max-w-xl text-center sm:text-left'>
            <h1 className='flex flex-col'>
              <span className='py-2 font-heading text-3xl font-extrabold text-gray-800 dark:text-gray-200 sm:text-5xl'>
                Helping couples in their
              </span>
              <strong className='block pb-2 font-heading text-3xl font-extrabold text-brandPink sm:text-5xl'>
                Journey towards Parenthood
              </strong>
              <span className='font-content text-xs font-semibold'>
                With In-Vitro Fertilization (IVF) - GarbhaGudi IVF Centre, Bangalore.
              </span>
            </h1>
            <h3 className='mt-4 max-w-lg font-content text-gray-800 dark:text-gray-200 sm:text-xl sm:leading-relaxed'>
              GarbhaGudi has helped thousands of families begin their journeys, creating millions of
              cherished memories.
            </h3>
            <h3 className='mt-4 max-w-lg font-content text-gray-800 dark:text-gray-200 sm:text-xl sm:leading-relaxed'>
              Making families smile since 2011
            </h3>

            <div className='mt-8 flex flex-wrap gap-4 text-center'>
              <Link
                href='/gg-care'
                className='block w-full rounded bg-gg-500 px-12 py-3 font-content text-sm font-bold text-white shadow hover:bg-gg-400 focus:outline-none focus:ring active:bg-brandPink3 dark:bg-gray-500 dark:hover:bg-gg-400 sm:w-auto'
              >
                Get Started
              </Link>

              <Link
                href='#know-more'
                className='block w-full scroll-smooth rounded bg-white px-12 py-3 font-content text-sm font-bold text-brandPink shadow hover:text-gg-400 focus:outline-none focus:ring active:text-rose-500 dark:bg-gg-500 dark:text-white dark:hover:bg-gg-400 sm:w-auto'
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
