import Link from 'next/link';
import React from 'react';

const CTA = () => {
  return (
    <div className='bg-gray-300 dark:bg-gray-700'>
      <div className='mx-auto mt-4 max-w-7xl'>
        <div className='py-8 lg:py-16'>
          <div className='pb-5 text-center font-lexend text-4xl'>
            Get started. Take your first steps towards parenthood.
          </div>
          <div className='mx-auto py-4 text-center'>
            <Link href='#form'>
              <button className='rounded-md bg-gg-500 px-5 py-3 font-lexend text-xl font-semibold text-white'>
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
