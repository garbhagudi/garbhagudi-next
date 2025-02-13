import { HiStar } from 'react-icons/hi';
import Link from 'next/link';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className='bg-white pb-8 dark:bg-gray-800 sm:pb-12 lg:pb-12'>
      <div className='overflow-hidden pt-8 font-content sm:pt-12 lg:relative lg:py-36'>
        <div className='block sm:mx-auto sm:hidden sm:max-w-3xl sm:px-6'>
          <div className='py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
            <div className='relative -mr-40 pl-4 sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none lg:pl-12'>
              <Image
                className='w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none'
                src='https://res.cloudinary.com/garbhagudi/image/upload/v1730993605/garbhagudi-ivf/Paripoorna/IVF_Compressed_kmekqi.webp'
                alt='happy couple with a baby'
                width={1024}
                height={1024}
              />
            </div>
          </div>
        </div>
        <div className='mx-auto max-w-md px-3 sm:max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-20 lg:px-8'>
          <div>
            <div className=''>
              <div className='color-pop rounded-lg'>
                <div className='flex flex-col items-start rounded-lg bg-transparent px-2.5 py-2 text-base font-bold text-white'>
                  <div>
                    <span className='font-lexend font-semibold'>
                      Offer of the Month* : Rs.1,00,000 Discount on IVF Treatment. Valid upto 31st
                      December 2024
                    </span>
                  </div>
                  <span className='w-full text-right font-lexend text-xs'>
                    *Valid till Oct 31st 2024
                  </span>
                </div>
              </div>
              <div className='mt-12 text-gray-800 dark:text-gray-200 sm:max-w-xl'>
                <h1 className='font-heading text-4xl font-extrabold sm:text-5xl'>
                  Welcome to the Best IVF Centre In Bangalore
                </h1>
                <p className='mt-6 text-xl'>
                  Get start on your journey towards parenthood with upto Rs. 1,00,000 /- off on IVF
                  Treatment.
                </p>
                <p className='mt-2 text-base'>EMI Facility Available at 0% Interest.</p>
              </div>
              <div className='mt-6'>
                <h3 className='mb-6 font-content text-2xl font-medium'>
                  Why choose{' '}
                  <span className='bg-gradient-to-r from-brandPink2 to-brandPurpleDark bg-clip-text text-transparent dark:to-brandPurple'>
                    GarbhaGudi?
                  </span>
                </h3>
                <div className='grid cursor-pointer grid-cols-1 gap-3 text-base font-semibold text-gray-700 md:grid-cols-2'>
                  <div className='rounded-md bg-gray-200 from-gray-400 via-gray-300 to-gray-300 py-1.5 pl-3 duration-200 hover:bg-gradient-to-l hover:shadow-xl dark:bg-gray-700 dark:text-gray-200 dark:hover:text-gray-800'>
                    <span className='font-bold text-brandPink dark:text-gg-400'>10000+</span> Happy
                    Families
                  </div>
                  <div className='rounded-md bg-gray-200 from-gray-400 via-gray-300 to-gray-300 py-1.5 pl-3 duration-200 hover:bg-gradient-to-l hover:shadow-xl dark:bg-gray-700 dark:text-gray-200 dark:hover:text-gray-800'>
                    <span className='font-bold text-brandPink dark:text-gg-400'>12+</span> Years of
                    Experience
                  </div>
                  <div className='rounded-md bg-gray-200 from-gray-400 via-gray-300 to-gray-300 py-1.5 pl-3 duration-200 hover:bg-gradient-to-l hover:shadow-xl dark:bg-gray-700 dark:text-gray-200 dark:hover:text-gray-800'>
                    <span className='font-bold text-brandPink dark:text-gg-400'></span>Excellent IVF
                    Success Rate
                  </div>
                  <div className='rounded-md bg-gray-200 from-gray-400 via-gray-300 to-gray-300 py-1.5 pl-3 duration-200 hover:bg-gradient-to-l hover:shadow-xl dark:bg-gray-700 dark:text-gray-200 dark:hover:text-gray-800'>
                    <span className='font-bold text-brandPink dark:text-gg-400'>7</span> Centres
                    Across Bangalore
                  </div>
                </div>
              </div>
              <div className='mt-6'>
                <div className='inline-flex items-center divide-x divide-gray-300'>
                  <div className='flex flex-shrink-0 pr-5'>
                    <HiStar className='h-5 w-5 text-yellow-400' aria-hidden='true' />
                    <HiStar className='h-5 w-5 text-yellow-400' aria-hidden='true' />
                    <HiStar className='h-5 w-5 text-yellow-400' aria-hidden='true' />
                    <HiStar className='h-5 w-5 text-yellow-400' aria-hidden='true' />
                    <HiStar className='h-5 w-5 text-gray-500' aria-hidden='true' />
                  </div>
                  <div className='min-w-0 flex-1 py-1 pl-5 text-center text-sm font-semibold text-gray-800 dark:text-gray-200 sm:py-3 md:text-left'>
                    <span className=''>Rated 4.8 stars on</span>
                    <span className='text-gg-500 dark:text-gg-400'> Google Reviews</span>
                    <span className=''> across all our branches</span>
                  </div>
                </div>
                <div className='glow mt-6 w-72 px-3 py-2 text-center hover:shadow-sm hover:shadow-brandPink dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gg-500'>
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

        <div className='hidden sm:mx-auto sm:block sm:max-w-3xl sm:px-6'>
          <div className='py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
            <div className='hidden sm:block'>
              <div className='absolute inset-y-0 left-1/2 w-screen rounded-l-3xl bg-gray-50 dark:bg-gray-700 lg:left-80 lg:right-0 lg:w-full' />
              <svg
                className='absolute right-1/2 top-8 -mr-3 lg:left-0 lg:m-0'
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
                <rect width={404} height={392} fill='url(#837c3e70-6c3a-44e6-8854-cc48c737b659)' />
              </svg>
            </div>
            <div className='relative mt-24 pl-4 sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-[28rem] lg:max-w-none lg:pl-12'>
              <Image
                className='w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none'
                src='https://res.cloudinary.com/garbhagudi/image/upload/v1730993605/garbhagudi-ivf/Paripoorna/IVF_Compressed_kmekqi.webp'
                alt='happy couple with a baby'
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
