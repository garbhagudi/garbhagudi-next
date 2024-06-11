import Link from 'next/link';
import React from 'react';
import { HiSpeakerphone, HiX } from 'react-icons/hi';

const Alert = () => {
  const [close, setClose] = React.useState(false);
  const handleClick = () => setClose(true);

  return (
    <div className={close ? 'hidden' : 'block'}>
      <div className='bg-white dark:bg-gray-800 border-b dark:border-gray-600'>
        <div className='max-w-7xl mx-auto py-2 px-3 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between flex-wrap'>
            <div className='w-0 flex-1 flex items-center'>
              <span className='flex p-2 rounded-lg bg-gg-500 dark:bg-gray-500'>
                <HiSpeakerphone
                  className='h-4 md:h-6 w-4 md:w-6 text-white'
                  aria-hidden='true'
                />
              </span>
              <p className='ml-3 font-medium text-gray-800 dark:text-gray-200 truncate font-lexend text-sm'>
                <span className='md:hidden text-xs'>
                  PARIPOORNA: An affordable way to complete your family
                </span>
                <span className='hidden md:inline'>
                  PARIPOORNA: It's the season of JOY of being COMPLETE 👶💖 Get
                  ₹ 90,000/- Discount on IVF Treatment
                </span>
              </p>
            </div>
            <div className='order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto'>
              <Link
                href='/features/paripoorna-2023'
                className='flex items-center justify-center py-1 md:py-2 px-3 border border-transparent font-lexend rounded-md shadow-sm text-sm text-white bg-gg-500 dark:bg-gray-500 hover:bg-gg-600 dark:hover:bg-gray-600'
              >
                Learn more
              </Link>
            </div>
            <div className='order-2 flex-shrink-0 sm:order-3 sm:ml-3'>
              <button
                type='button'
                className='-mr-1 flex p-2 rounded-md hover:bg-brandDark focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2'
                onClick={handleClick}
              >
                <span className='sr-only'>Dismiss</span>
                <HiX
                  className='h-6 w-6 text-gray-800 dark:text-gray-200'
                  aria-hidden='true'
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
