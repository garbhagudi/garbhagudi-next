import React from 'react';
import Link from 'next/link';

const WhyGG = () => {
  return (
    <div className='bg-gradient-to-br from-brandPink5 dark:from-gray-800 via-gray-100 dark:via-gray-700 to-brandPink5 dark:to-gray-800'>
      <div className='container pt-10 pb-1 lg:pt-16 lg:pb-10 px-6 mx-auto'>
        <section className='mb-16 text-gray-800'>
          <div className='block rounded-lg shadow-3xl drop-shadow-2xl bg-white dark:bg-gray-800'>
            <div className='flex flex-wrap items-center'>
              <div className='flex lg:w-6/12 xl:w-4/12'>
                <img
                  src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1677492148/Misc/coup-min_g3kq4k.webp'
                  alt='Why choose garbhagudi as the Best IVF Centre in Bangalore'
                  className='w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg'
                />
              </div>
              <div className='grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12'>
                <div className='px-6 py-12 md:px-12'>
                  <h2 className='text-2xl font-bold mb-4 font-heading text-left lg:text-center text-gray-800 dark:text-gray-200'>
                    Why GarbhaGudi should be the your next destination to
                    complete your family?
                  </h2>
                  <p className='text-gray-800 dark:text-gray-200 font-content mb-6'>
                    GarbhaGudi is a leading{' '}
                    <Link
                      href={'/'}
                      className='text-gg-500 dark:text-gg-400 hover:underline'
                    >
                      IVF Clinic and Hospital in Bangalore
                    </Link>{' '}
                    with over 13 years of experience in providing comprehensive
                    fertility solutions. It has a renowned team of specialists,
                    state-of-the-art infrastructure, transparent pricing, and
                    consistently high success rates (75%) in assisted
                    reproductive techniques. GarbhaGudi's holistic approach to{' '}
                    <Link
                      href={'/treatments/infertility'}
                      className='text-gg-500 dark:text-gg-400 hover:underline'
                    >
                      fertility treatment
                    </Link>{' '}
                    addresses physical, emotional, and psychological aspects and
                    includes nutrition counseling and stress management. Choose
                    GarbhaGudi for personalized and compassionate care at the{' '}
                    <Link
                      href={'/'}
                      className='text-gg-500 dark:text-gg-400 hover:underline'
                    >
                      Best IVF Clinic and Hospital in Bangalore
                    </Link>{' '}
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhyGG;
