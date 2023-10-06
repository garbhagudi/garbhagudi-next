import Link from 'next/link';

const Header = () => {
  return (
    <div>
      <div className='relative bg-transparent overflow-hidden'>
        <div className='max-w-7xl mx-auto'>
          <div className='relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32'>
            <svg
              className='hidden xl:block absolute right-0 inset-y-0 h-full w-36 mr-10 text-white dark:text-gray-800 transform translate-x-1/2'
              fill='currentColor'
              viewBox='0 0 100 100'
              preserveAspectRatio='none'
              aria-hidden='true'
            >
              <polygon points='50,0 100,0 50,100 0,100' />
            </svg>
            <div className='relative pt-6 px-4 sm:px-6 lg:px-8'></div>

            <main className='mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
              <div className='sm:text-center lg:text-left'>
                <h1 className='text-4xl tracking-tight sm:text-5xl md:text-6xl font-content font-bold text-gray-800 dark:text-gray-200'>
                  <span className='block xl:inline '>About GarbhaGudi</span>
                </h1>
                <p className='mt-3 text-base text-brandDark sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto text-gray-800 dark:text-gray-200 md:mt-5 md:text-xl lg:mx-0 font-content overflow-visible z-10'>
                  GarbhaGudi is a chain of new generation infertility treatment
                  hospitals equipped with state-of-the-art infrastructure and
                  cutting-edge technology to address this ever-increasing
                  problem of infertility. It was founded by a team of committed
                  entrepreneurs and healthcare specialists, led by Dr. Asha S
                  Vijay, who is a renowned gynecologist and fertility
                  specialist.
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 '>
          <img
            className='h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full '
            src='https://res.cloudinary.com/garbhagudiivf/image/upload/q_auto:eco/v1643461022/Banner/About_us_xg1b1l.webp'
            alt='GarbhaGudi IVF Centre'
          />
        </div>
      </div>
      <div className='bg-purple-100 dark:bg-gray-700 px-4 md:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto py-4 flex items-center lg:justify-between flex-col md:flex-row'>
          <div className='py-10 w-full md:w-3/4 text-center md:text-left'>
            <div className='text-2xl md:text-3xl font-heading tracking-tight font-bold text-gg-500 dark:text-gg-400'>
              Discover the Garbhagudi Way
            </div>
            <div className='text-base md:text-lg font-content mt-3 font-semibold text-gray-800 dark:text-gray-200'>
              Discover our values and how we operate as an organization. Gain
              insight into our guiding principles, from Couple's Delight to
              Holistic Approach.
            </div>
          </div>
          <div className='mx-auto mb-4 md:mb-0'>
            <Link
              href={'/about/garbhagudi-way'}
              className='px-4 py-3 font-normal bg-gg-500 dark:bg-gg-400 text-white dark:text-gray-800 text-lg font-lexend rounded-md hover:bg-gg-400 dark:hover:bg-gg-500 transition-all duration-200'
            >
              Know More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
