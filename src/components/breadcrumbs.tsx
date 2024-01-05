import React from 'react';
import Link from 'next/link';
import { HiHome, HiChevronRight } from 'react-icons/hi';

const BreadCrumbs = ({
  link1,
  text1,
  link2,
  text2,
  link3,
  text3,
  link4,
  text4,
}: {
  link1: string;
  text1: string;
  link2: string;
  text2: string;
  link3: string;
  text3: string;
  link4: string;
  text4: string;
}) => {
  return (
    <div>
      <nav
        className='flex py-3 px-5 rounded-lg font-semibold font-content z-10'
        aria-label='Breadcrumb'
      >
        <ol className='flex flex-row items-center space-x-1'>
          <li className='inline-flex items-center'>
            <Link passHref href='/'>
              <span className='text-sm flex items-center justify-center'>
                <HiHome className='mr-1 w-4 h-4 mb-0.5' /> Home
              </span>
            </Link>
          </li>
          {link1 && (
            <li>
              <div className='flex items-center cursor-pointer'>
                <HiChevronRight className='w-5 h-5' />
                <a
                  href={link1}
                  className='ml-1 mt-0.5 text-sm text-gray-800 dark:text-gray-200 hover:text-brandPink2'
                >
                  {text1}
                </a>
              </div>
            </li>
          )}
          {text2 && (
            <li aria-current='page'>
              <Link href={link2} passHref>
                <div className='flex items-center cursor-pointer'>
                  <svg
                    className='w-6 h-6 text-gray-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  <span className='ml-1 text-sm cursor-pointer text-gray-800 dark:text-gray-200 hover:text-brandPink2'>
                    {text2}
                  </span>
                </div>
              </Link>
            </li>
          )}
          {text3 && (
            <li aria-current='page'>
              <Link href={link3} passHref>
                <div className='flex items-center'>
                  <svg
                    className='w-6 h-6 text-gray-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  <span className='ml-1 text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-brandPink2'>
                    {text3}
                  </span>
                </div>
              </Link>
            </li>
          )}
          {text4 && (
            <li aria-current='page'>
              <Link href={link4} passHref>
                <div className='flex items-center'>
                  <svg
                    className='w-6 h-6 text-gray-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  <span className='ml-1 text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-brandPink2'>
                    {text4}
                  </span>
                </div>
              </Link>
            </li>
          )}
        </ol>
      </nav>
    </div>
  );
};

export default BreadCrumbs;
