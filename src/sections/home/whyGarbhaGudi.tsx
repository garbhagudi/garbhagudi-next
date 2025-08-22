import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const WhyGG = () => {
  return (
    <div className='bg-gradient-to-br from-brandPink5 via-gray-100 to-brandPink5 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800'>
      <div className='container mx-auto px-6 pb-1 pt-10 lg:pb-10 lg:pt-16'>
        <section className='mb-16 text-gray-800'>
          <div className='shadow-3xl block rounded-lg bg-white drop-shadow-2xl dark:bg-gray-800'>
            <div className='flex flex-wrap items-center'>
              <div className='flex lg:w-6/12 xl:w-4/12'>
                <Image
                  width={100}
                  height={100}
                  src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1677492148/Misc/coup-min_g3kq4k.webp'
                  alt='Why choose garbhagudi as the Best IVF Centre in Bangalore'
                  className='w-full rounded-t-lg lg:rounded-bl-lg lg:rounded-tr-none'
                />
              </div>
              <div className='w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12'>
                <div className='px-6 py-12 md:px-12'>
                  <h2 className='mb-4 text-left font-heading text-2xl font-bold text-gray-800 dark:text-gray-200 lg:text-center'>
                    Why GarbhaGudi should be your next destination to complete your family?
                  </h2>
                  <p className='mb-6 font-content text-gray-800 dark:text-gray-200'>
                    GarbhaGudi is a leading{' '}
                    <Link href={'/'} className='text-gg-500 hover:underline dark:text-gg-400'>
                      IVF Clinic and Hospital in Bangalore
                    </Link>{' '}
                    with over 15 years of experience in providing comprehensive fertility solutions.
                    It has a renowned team of specialists, state-of-the-art infrastructure,
                    transparent pricing, and consistently high success rates in assisted
                    reproductive techniques. GarbhaGudi's holistic approach to{' '}
                    <Link
                      href={'/treatments/infertility-treatment-in-bangalore'}
                      className='text-gg-500 hover:underline dark:text-gg-400'
                    >
                      fertility treatment
                    </Link>{' '}
                    addresses physical, emotional, and psychological aspects and includes nutrition
                    counseling and stress management. Choose GarbhaGudi for personalized and
                    compassionate care at the{' '}
                    <Link href={'/'} className='text-gg-500 hover:underline dark:text-gg-400'>
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
