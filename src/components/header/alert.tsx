import Link from 'next/link';
import React from 'react';
import { HiSpeakerphone, HiX } from 'react-icons/hi';

const Alert = () => {
  const [close, setClose] = React.useState(false);
  const handleClick = () => setClose(true);

  return (
    <div className={close ? 'hidden' : 'block'}>
      <div className='border-b bg-white dark:border-gray-600 dark:bg-gray-800'>
        <div className='mx-auto max-w-7xl px-3 py-2 sm:px-6 lg:px-8'>
          <div className='flex flex-wrap items-center justify-between'>
            <div className='flex w-0 flex-1 items-center'>
              <span className='flex rounded-lg bg-gg-500 p-2 dark:bg-gray-500'>
                <HiSpeakerphone className='h-4 w-4 text-white md:h-6 md:w-6' aria-hidden='true' />
              </span>
              <p className='ml-3 truncate font-lexend text-sm font-medium text-gray-800 dark:text-gray-200'>
                <span className='text-xs md:hidden'>
                  PARIPOORNA: An affordable way to complete your family
                </span>
                <span className='hidden md:inline'>
                  PARIPOORNA: It's the season of JOY of being COMPLETE 👶💖 Get ₹ 1,00,000/-
                  Discount on IVF Treatment
                </span>
              </p>
            </div>
            <div className='order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto'>
              <Link
                href='/features/paripoorna-2024'
                className='flex items-center justify-center rounded-md border border-transparent bg-gg-500 px-3 py-1 font-lexend text-sm text-white shadow-sm hover:bg-gg-600 dark:bg-gray-500 dark:hover:bg-gray-600 md:py-2'
              >
                Learn more
              </Link>
            </div>
            <div className='order-2 flex-shrink-0 sm:order-3 sm:ml-3'>
              <button
                type='button'
                className='hover:bg-brandDark -mr-1 flex rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2'
                onClick={handleClick}
              >
                <span className='sr-only'>Dismiss</span>
                <HiX className='h-6 w-6 text-gray-800 dark:text-gray-200' aria-hidden='true' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
