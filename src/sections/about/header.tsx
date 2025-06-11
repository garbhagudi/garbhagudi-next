import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <div>
      <div className='relative overflow-hidden bg-transparent'>
        <div className='mx-auto max-w-7xl'>
          <div className='relative z-10 bg-transparent pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32'>
            <svg
              className='absolute inset-y-0 right-0 mr-10 hidden h-full w-36 translate-x-1/2 transform text-white dark:text-gray-800 xl:block'
              fill='currentColor'
              viewBox='0 0 100 100'
              preserveAspectRatio='none'
              aria-hidden='true'
            >
              <polygon points='50,0 100,0 50,100 0,100' />
            </svg>
            <div className='relative px-4 pt-6 sm:px-6 lg:px-8'></div>

            <main className='mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
              <div className='sm:text-center lg:text-left'>
                <h1 className='font-content text-4xl font-bold tracking-tight text-gray-800 dark:text-gray-200 sm:text-5xl md:text-6xl'>
                  <span className='block xl:inline'>About GarbhaGudi</span>
                </h1>
                <p className='text-brandDark z-10 mt-3 overflow-visible font-content text-base text-gray-800 dark:text-gray-200 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0'>
                  GarbhaGudi is a chain of new generation infertility treatment hospitals equipped
                  with state-of-the-art infrastructure and cutting-edge technology to address this
                  ever-increasing problem of infertility. It was founded by a team of committed
                  entrepreneurs and healthcare specialists, led by Dr. Asha S Vijay, who is a
                  renowned gynecologist and fertility specialist.
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
          <Image
            className='h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full'
            src='https://res.cloudinary.com/garbhagudiivf/image/upload/q_auto:eco/v1643461022/Banner/About_us_xg1b1l.webp'
            alt='GarbhaGudi IVF Centre'
            width={500}
            height={500}
            priority
          />
        </div>
      </div>
      <div className='bg-purple-100 px-4 dark:bg-gray-700 md:px-6 lg:px-8'>
        <div className='mx-auto flex max-w-7xl flex-col items-center py-4 md:flex-row lg:justify-between'>
          <div className='w-full py-10 text-center md:w-3/4 md:text-left'>
            <div className='font-heading text-2xl font-bold tracking-tight text-gg-500 dark:text-gg-400 md:text-3xl'>
              Discover the GarbhaGudi Way
            </div>
            <div className='mt-3 font-content text-base font-semibold text-gray-800 dark:text-gray-200 md:text-lg'>
              Discover our values and how we operate as an organization. Gain insight into our
              guiding principles, from Couple's Delight to Holistic Approach.
            </div>
          </div>
          <div className='mx-auto mb-4 md:mb-0'>
            <Link
              href={'/about/garbhagudi-way'}
              className='rounded-md bg-gg-500 px-4 py-3 font-lexend text-lg font-normal text-white transition-all duration-200 hover:bg-gg-400 dark:bg-gg-400 dark:text-gray-800 dark:hover:bg-gg-500'
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
