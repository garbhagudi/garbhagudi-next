import Link from 'next/link';
import React from 'react';

const CallToAction = () => {
  return (
    <div className='bg-gray-100 rounded-lg max-w-7xl mx-auto mt-10'>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 text-center lg:text-left flex flex-col lg:flex-row items-center lg:justify-between'>
        <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
          <span className='block font-content'>Ready to start?</span>
          <span className='block text-brandPink font-content'>
            Let us take your dreams forward...
          </span>
        </h2>
        <div className='mt-8 flex lg:mt-0 lg:flex-shrink-0'>
          <div className='inline-flex rounded-md shadow'>
            <Link
              href={'/gg-care'}
              className='px-4 py-3 text-xl bg-brandPink hover:to-brandPink4 text-white rounded-lg font-content font-semibold'
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
