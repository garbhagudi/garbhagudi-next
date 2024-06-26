import React from 'react';
import Link from 'next/link';

const Band = () => {
  return (
    <div className='px-3 mx-auto mt-2 max-w-7xl sm:px-6 lg:px-4 bg-white dark:bg-gray-800'>
      <div className='block mx-auto border-b border-gray-300 dark:border-gray-600 text-xl font-bold text-center md:text-2xl font-benne'>
        <div className='block md:inline-block'>
          <span className='text-brandPink dark:text-gg-400'>
            ಬಾಳಿಗೊಂದು ಬೇಕು{' '}
          </span>{' '}
          <span className='text-brandPurpleDark dark:text-brandPurple2'>
            {' '}
            ಕರುಳಿನಾ ಕುಡಿ{' '}
          </span>{' '}
        </div>{' '}
        <div className='block md:inline-block'>
          <span className='text-brandPink dark:text-gg-400'>
            ನಿಮ್ಮ ಕನಸನ್ನು ನನಸಾಗಿಸುತ್ತದೆ
          </span>{' '}
          <span className='text-brandPurpleDark dark:text-brandPurple2'>
            {' '}
            ಗರ್ಭಗುಡಿ{' '}
          </span>
        </div>
      </div>
      <div className='pt-4 text-center '>
        <div className='text-lg font-content font-semibold bg-gray-300 dark:bg-gray-700 px-4 py-2 rounded-xl lg:w-96 mx-auto'>
          For Appointments Call:{' '}
          <Link
            href={'tel:+919108910832'}
            className='text-gg-500 dark:text-gg-400 hover:underline block md:inline-flex'
          >
            +91 9108 9108 32
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Band;
