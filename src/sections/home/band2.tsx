import React from 'react';
import Link from 'next/link';

const Band2 = () => {
  return (
    <div className='max-w-7xl mx-auto px-3 my-4 sm:px-6 lg:px-4 bg-white dark:bg-gray-800'>
      <span className='text-md block text-center mx-auto font-content font-semibold py-2'>
        <div className='block md:inline-block'>
          <h3 className='text-gray-800 dark:text-gray-200'>
            GarbhaGudi{' '}
            <Link
              href={'/'}
              className='text-gg-500 dark:text-gg-400 hover:underline'
            >
              IVF Centre in Bangalore
            </Link>{' '}
            Has Been Awarded as the Best Fertility &amp;{' '}
            <Link
              href={'/'}
              className='text-gg-500 dark:text-gg-400 hover:underline'
            >
              IVF Hospital
            </Link>{' '}
            for It's High Success Rates &amp; Holistic Approach to{' '}
            <Link
              href={'/infertility'}
              className='text-gg-500 dark:text-gg-400 hover:underline font-bold'
            >
              Fertility Treatment
            </Link>
          </h3>
          <div className='space-x-3'>
            <button className='mt-4 mx-auto px-3 py-2 bg-gg-500 dark:bg-gg-400 rounded-md text-sm text-white font-bold dark:text-gray-800  hover:bg-gg-600 dark:hover:bg-gg-500'>
              <Link href={'/about/awards-and-accolades'}>
                View Awards and Accolades
              </Link>
            </button>
            <button className='mt-4 mx-auto px-3 py-2 bg-gg-500 dark:bg-gg-400 rounded-md text-sm text-white font-bold dark:text-gray-800  hover:bg-gg-600 dark:hover:bg-gg-500'>
              <Link href={'/gg-care'}>Connect Now</Link>
            </button>
          </div>
        </div>
      </span>
    </div>
  );
};

export default Band2;
