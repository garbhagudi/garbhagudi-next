import React from 'react';
import Link from 'next/link';

const Band2 = () => {
  return (
    <div className='mx-auto my-4 max-w-7xl bg-white px-3 dark:bg-gray-800 sm:px-6 lg:px-4'>
      <span className='text-md mx-auto block py-2 text-center font-content font-semibold'>
        <div className='block md:inline-block'>
          <h3 className='text-gray-800 dark:text-gray-200'>
            GarbhaGudi{' '}
            <Link
              href={'/'}
              className='text-gg-500 hover:underline dark:text-gg-400'
            >
              IVF Centre in Bangalore
            </Link>{' '}
            Has Been Awarded as the Best Fertility &amp;{' '}
            <Link
              href={'/'}
              className='text-gg-500 hover:underline dark:text-gg-400'
            >
              IVF Hospital
            </Link>{' '}
            for It's High Success Rates &amp; Holistic Approach to{' '}
            <Link
              href={'/infertility'}
              className='font-bold text-gg-500 hover:underline dark:text-gg-400'
            >
              Fertility Treatment
            </Link>
          </h3>
          <div className='space-x-3'>
            <button className='mx-auto mt-4 rounded-md bg-gg-500 px-3 py-2 text-sm font-bold text-white hover:bg-gg-600 dark:bg-gg-400 dark:text-gray-800 dark:hover:bg-gg-500'>
              <Link href={'/about/awards-and-accolades'}>
                View Awards and Accolades
              </Link>
            </button>
            <button className='mx-auto mt-4 rounded-md bg-gg-500 px-3 py-2 text-sm font-bold text-white hover:bg-gg-600 dark:bg-gg-400 dark:text-gray-800 dark:hover:bg-gg-500'>
              <Link href={'/gg-care'}>Connect Now</Link>
            </button>
          </div>
        </div>
      </span>
    </div>
  );
};

export default Band2;
