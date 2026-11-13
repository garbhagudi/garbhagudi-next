import React from 'react';
import Link from 'next/link';
import Paripoorna from 'sections/home/paripoorna';

const column = 'lg:row-start-1 lg:flex lg:flex-col';
const cta =
  'rounded-md bg-gg-500 px-3 py-2 text-sm font-bold text-white hover:bg-gg-600 dark:bg-gg-400 dark:text-gray-800 dark:hover:bg-gg-500';

const Hero = () => {
  return (
    <main className='my-8 bg-white dark:bg-gray-800 sm:mt-8'>
      {/* Mobile: Paripoorna first, stacked. Desktop: Experience the Joy left, Paripoorna right. */}
      <div className='mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2'>
        <Paripoorna className={`${column} lg:col-start-2`} />
        <div className={`${column} text-center lg:col-start-1 lg:text-left`}>
          <div>
            <div className='font-heading text-4xl font-extrabold tracking-tight text-gray-800 dark:text-gray-200 max-sm:text-3xl sm:leading-none lg:text-5xl'>
              <span className='md:block'>Experience the Joy</span>{' '}
              <span className='text-gg-500 dark:text-gg-400 md:mt-2 md:block'>
                of Being Complete...
              </span>
            </div>
            <div className='text-md mt-2 text-right font-content font-bold text-gray-800 dark:text-gray-200'>
              ...with the <h1 className='inline-block'>Best IVF Centre in Bangalore</h1>
            </div>
          </div>
          <div className='mt-6'>
            <p className='font-content text-base text-gray-800 dark:text-gray-200 sm:mt-5 sm:text-lg lg:text-base'>
              GarbhaGudi is a chain of new generation{' '}
              <Link
                href={'/treatments/infertility-treatment-in-bangalore'}
                className='text-gg-500 hover:underline dark:text-gg-400'
              >
                infertility treatment hospitals
              </Link>{' '}
              equipped with state-of-the-art infrastructure and cutting-edge technology to address
              this ever-increasing infertility problem. It was founded by a team of committed
              entrepreneurs and healthcare specialists, led by{' '}
              <Link
                href={'/fertility-experts/dr-asha-s-vijay'}
                className='text-gg-500 hover:underline dark:text-gg-400'
              >
                Dr. Asha S Vijay
              </Link>
              , a renowned gynaecologist and fertility specialist.
            </p>
            <h2 className='mt-5 font-content text-base font-semibold text-gray-800 dark:text-gray-200'>
              GarbhaGudi{' '}
              <Link href={'/'} className='text-gg-500 hover:underline dark:text-gg-400'>
                IVF Centre in Bangalore
              </Link>{' '}
              Has Been Awarded as the Best Fertility &amp;{' '}
              <Link href={'/'} className='text-gg-500 hover:underline dark:text-gg-400'>
                IVF Hospital
              </Link>{' '}
              for It's High Success Rates &amp; Holistic Approach to{' '}
              <Link
                href={'/infertility'}
                className='font-bold text-gg-500 hover:underline dark:text-gg-400'
              >
                Fertility Treatment
              </Link>
            </h2>
          </div>
          <div className='flex flex-wrap items-start justify-center gap-3 pt-6 lg:mt-auto lg:justify-start'>
            <Link href={'/about/awards-and-accolades'} className={cta}>
              View Awards and Accolades
            </Link>
            <Link href={'/gg-care'} className={cta}>
              Connect Now
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
