import { HiStar } from 'react-icons/hi';
import Link from 'next/link';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className='bg-white dark:bg-gray-800 pb-8 sm:pb-12 lg:pb-12'>
      <div className='pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-36 font-content'>
        <div className='sm:mx-auto sm:max-w-3xl sm:px-6 block sm:hidden'>
          <div className='py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
            <div className='relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12'>
              <Image
                className='w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none'
                src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1676448333/Misc/Landing/Neutral/happy-family-with-their-first-child-min_fgylvk.webp'
                alt='happy copuple with a baby'
                width={1024}
                height={1024}
              />
            </div>
          </div>
        </div>
        <div className='mx-auto max-w-md px-3 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-20'>
          <div>
            <div className=''>
              <div className='color-pop rounded-lg'>
                <div className='inline-flex items-center text-base text-center font-bold text-white  px-2.5 py-2 bg-transparent rounded-lg'>
                  PARIPOORNA: It's the season of JOY of being COMPLETE 👶💖 Get
                  90,000/- Discount on IVF Treatment
                </div>
              </div>
              <div className='mt-12 sm:max-w-xl text-gray-800 dark:text-gray-200'>
                <h1 className='text-4xl font-extrabold sm:text-5xl font-heading '>
                  Welcome to the Best IVF Centre In Bangalore
                </h1>
                <p className='mt-6 text-xl'>
                  Get a massive 90,000/-* off on your IVF Treatments. Offer
                  Applicable on all-inclusive IVF package of ₹2,50,000 until
                  31st December 2023.
                </p>
                <p className='mt-2 text-xl'>
                  EMI Facility Available at 0% Interest.
                </p>
              </div>
              <div className='mt-6'>
                <h3 className='mb-6 text-2xl font-content font-medium'>
                  Why choose{' '}
                  <span className='bg-clip-text text-transparent bg-gradient-to-r from-brandPink2 to-brandPurpleDark dark:to-brandPurple'>
                    GarbhaGudi?
                  </span>
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-2 text-gray-700 font-semibold gap-3 text-base cursor-pointer'>
                  <div className='bg-gray-200 dark:hover:text-gray-800 dark:text-gray-200 dark:bg-gray-700 hover:bg-gradient-to-l from-gray-400 via-gray-300 to-gray-300 pl-3 py-1.5 rounded-md hover:shadow-xl duration-200'>
                    <span className='font-bold text-brandPink dark:text-gg-400'>
                      10000+
                    </span>{' '}
                    Happy Families
                  </div>
                  <div className='bg-gray-200 dark:hover:text-gray-800 dark:text-gray-200 dark:bg-gray-700 hover:bg-gradient-to-l from-gray-400 via-gray-300 to-gray-300 pl-3 py-1.5 rounded-md hover:shadow-xl duration-200'>
                    <span className='font-bold text-brandPink dark:text-gg-400'>
                      12+
                    </span>{' '}
                    Years of Experience
                  </div>
                  <div className='bg-gray-200 dark:hover:text-gray-800 dark:text-gray-200 dark:bg-gray-700 hover:bg-gradient-to-l from-gray-400 via-gray-300 to-gray-300 pl-3 py-1.5 rounded-md hover:shadow-xl duration-200'>
                    <span className='font-bold text-brandPink dark:text-gg-400'>
                      65-73%
                    </span>{' '}
                    IVF Success Rate
                  </div>
                  <div className='bg-gray-200 dark:hover:text-gray-800 dark:text-gray-200 dark:bg-gray-700 hover:bg-gradient-to-l from-gray-400 via-gray-300 to-gray-300 pl-3 py-1.5 rounded-md hover:shadow-xl duration-200'>
                    <span className='font-bold text-brandPink dark:text-gg-400'>
                      7
                    </span>{' '}
                    Centres Across Bangalore
                  </div>
                </div>
              </div>
              <div className='mt-6'>
                <div className='inline-flex items-center divide-x divide-gray-300'>
                  <div className='flex-shrink-0 flex pr-5'>
                    <HiStar
                      className='h-5 w-5 text-yellow-400'
                      aria-hidden='true'
                    />
                    <HiStar
                      className='h-5 w-5 text-yellow-400'
                      aria-hidden='true'
                    />
                    <HiStar
                      className='h-5 w-5 text-yellow-400'
                      aria-hidden='true'
                    />
                    <HiStar
                      className='h-5 w-5 text-yellow-400'
                      aria-hidden='true'
                    />
                    <HiStar
                      className='h-5 w-5 text-gray-500'
                      aria-hidden='true'
                    />
                  </div>
                  <div className='min-w-0 flex-1 pl-5 py-1 text-sm text-gray-800 dark:text-gray-200 sm:py-3 font-semibold text-center md:text-left'>
                    <span className=''>Rated 4.8 stars on</span>
                    <span className='text-gg-500 dark:text-gg-400'>
                      {' '}
                      Google Reviews
                    </span>
                    <span className=''> across all our branches</span>
                  </div>
                </div>
                <div className='glow px-3 py-2 mt-6 hover:shadow-sm hover:shadow-brandPink dark:bg-gray-700 dark:hover:bg-gg-500 dark:text-gray-200 w-72 text-center'>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <Link href={'tel:+919108910832'} className='font-bold'>
                    Book an Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='sm:mx-auto sm:max-w-3xl sm:px-6 hidden sm:block'>
          <div className='py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
            <div className='hidden sm:block'>
              <div className='absolute inset-y-0 left-1/2 w-screen bg-gray-50 dark:bg-gray-700 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full' />
              <svg
                className='absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0'
                width={404}
                height={392}
                fill='none'
                viewBox='0 0 404 392'
              >
                <defs>
                  <pattern
                    id='837c3e70-6c3a-44e6-8854-cc48c737b659'
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits='userSpaceOnUse'
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className='text-gray-200 dark:text-gray-700'
                      fill='currentColor'
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={392}
                  fill='url(#837c3e70-6c3a-44e6-8854-cc48c737b659)'
                />
              </svg>
            </div>
            <div className='relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12'>
              <Image
                className='w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none'
                src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1676448333/Misc/Landing/Neutral/happy-family-with-their-first-child-min_fgylvk.webp'
                alt='happy copuple with a baby'
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
