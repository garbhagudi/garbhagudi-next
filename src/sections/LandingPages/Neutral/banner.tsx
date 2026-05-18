import { HiStar } from 'react-icons/hi';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { MOTHERS_DAY_BANNER_ALT, MOTHERS_DAY_BANNER_IMAGES } from 'data/mothersDayBanners';

const Banner = () => {
  const path = usePathname();
  return (
    <div className='bg-white pb-8 dark:bg-gray-800 sm:pb-12 lg:pb-12'>
      <div className='overflow-x-hidden pt-2 font-content sm:pt-12 lg:relative lg:py-1'>
        {/* Mobile banner — full width, no crop */}
        <div className='block px-3 pb-6 sm:hidden'>
          <Image
            className='h-auto w-full rounded-md object-contain shadow-xl ring-1 ring-black/5'
            src={MOTHERS_DAY_BANNER_IMAGES.mobile}
            alt={MOTHERS_DAY_BANNER_ALT}
            width={731}
            height={1024}
            priority
            fetchPriority='high'
            sizes='100vw'
          />
        </div>

        <div className='mx-auto max-w-md px-3 sm:max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-12 lg:px-8'>
          <div>
            <div className=''>
              <div className='mt-6 text-gray-800 dark:text-gray-200 sm:mt-12 sm:max-w-xl'>
                <h1 className='font-heading text-4xl font-extrabold sm:text-5xl'>
                  Welcome to the Best IVF Centre In Bangalore
                </h1>
                <p className='mt-6 text-xl'>
                  Get started on your journey towards parenthood with our fertility experts
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
                    <span className='font-bold text-brandPink dark:text-gg-400'>15000+</span> Happy
                    Families
                  </div>
                  <div className='rounded-md bg-gray-200 from-gray-400 via-gray-300 to-gray-300 py-1.5 pl-3 duration-200 hover:bg-gradient-to-l hover:shadow-xl dark:bg-gray-700 dark:text-gray-200 dark:hover:text-gray-800'>
                    <span className='font-bold text-brandPink dark:text-gg-400'>15+</span> Years of
                    Experience
                  </div>
                  <div className='rounded-md bg-gray-200 from-gray-400 via-gray-300 to-gray-300 py-1.5 pl-3 duration-200 hover:bg-gradient-to-l hover:shadow-xl dark:bg-gray-700 dark:text-gray-200 dark:hover:text-gray-800'>
                    <span className='font-bold text-brandPink dark:text-gg-400'></span>Excellent IVF
                    Success Rate
                  </div>
                  <div className='rounded-md bg-gray-200 from-gray-400 via-gray-300 to-gray-300 py-1.5 pl-3 duration-200 hover:bg-gradient-to-l hover:shadow-xl dark:bg-gray-700 dark:text-gray-200 dark:hover:text-gray-800'>
                    <span className='font-bold text-brandPink dark:text-gg-400'>10</span> Centres in
                    Karnataka
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
                <div className='glow my-6 w-72 px-3 py-2 text-center hover:shadow-sm hover:shadow-brandPink dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gg-500'>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <Link href={`/contact/enquiry?pageVisit=${path}`} className='font-bold'>
                    Book an Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop banner — scales to column width, no fixed height crop */}
          <div className='relative hidden sm:block'>
            <div className='absolute inset-y-0 left-0 hidden w-full rounded-l-3xl bg-gray-50 dark:bg-gray-700 lg:block' />
            <div className='relative flex items-center justify-center py-8 lg:py-12'>
              <Image
                className='h-auto w-full max-w-full rounded-md object-contain shadow-xl ring-1 ring-black/5'
                src={MOTHERS_DAY_BANNER_IMAGES.desktop}
                alt={MOTHERS_DAY_BANNER_ALT}
                width={1024}
                height={536}
                priority
                fetchPriority='high'
                sizes='(min-width: 1024px) 45vw, 50vw'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
