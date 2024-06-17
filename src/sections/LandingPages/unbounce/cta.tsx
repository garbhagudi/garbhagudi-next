import Link from 'next/link';
import React from 'react';

const CTA = () => {
  return (
    <div className='bg-gray-300 dark:bg-gray-700'>
      <div className='max-w-7xl mx-auto mt-4'>
        <div className='py-8 lg:py-16'>
          <div className='text-4xl font-lexend text-center pb-5'>
            Get started. Take your first steps towards parenthood.
          </div>
          <div className='py-4 mx-auto text-center'>
            <Link href='#form'>
              <button className='px-5 py-3 font-lexend text-xl bg-gg-500 rounded-md text-white font-semibold'>
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
