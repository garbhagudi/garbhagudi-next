import React, { useState } from 'react';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import Link from 'next/link';

const Pagination = ({
  currentPage,
  nextPage,
  nextLink,
  previousPage,
  previousLink,
  limitDefined,
  total,
  isNext,
  isPrev,
}) => {
  const [currentPage1, setCurrentPage] = useState(1);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const pageNumbers = [];
  for (let i = 1; i <= total / 6 + 1; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='max-w-7xl mx-auto'>
      <div className='flex items-center justify-between mt-10'>
        <div className='flex mx-auto items-center justify-center space-x-4 text-center mt-5 sm:hidden'>
          {isPrev && (
            <Link href={`/blogs/page/${previousPage}`}>
              <div className=' rounded-lg py-2 px-6 bg-gg-500 font-content font-semibold text-white'>
                Prev Page
              </div>
            </Link>
          )}
          {isNext && (
            <Link href={`/blogs/page/${nextPage}`}>
              <div className='rounded-lg py-2 px-4 bg-gg-500 font-content font-semibold text-white dark:text-gray-200'>
                Next Page
              </div>
            </Link>
          )}
        </div>
        <div className='hidden mx-auto sm:flex sm:items-center sm:justify-between'>
          <div>
            <nav
              className='isolate inline-flex -space-x-px rounded-md shadow-xl'
              aria-label='Pagination'
            >
              <Link
                href={previousLink}
                className='relative inline-flex items-center rounded-l-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-2 py-2 text-sm font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-50 hover:text-brandPink dark:hover:text-gg-400 focus:z-20'
              >
                <span className='sr-only'>Previous</span>
                <HiChevronDoubleLeft className='h-5 w-5' aria-hidden='true' />
              </Link>
              <div className='flex flex-wrap items-center justify-center space-x-1.5 px-3 border dark:border-gray-600'>
                {pageNumbers.map((number) => (
                  <div
                    key={number}
                    onClick={() => handlePageClick(number)}
                    className={
                      currentPage === number
                        ? 'relative z-10 inline-flex items-center font-content border border-gg-500 dark:border-gray-600 bg-brandPink5 dark:bg-gray-700 px-3 py-1.5 text-sm font-bold text-gg-500 dark:text-gray-300 focus:z-20'
                        : 'relative z-10 inline-flex items-center font-content px-1.5 py-1.5 text-sm font-medium hover:text-gg-500 hover:underline hover:font-bold'
                    }
                  >
                    <Link href={`/blogs/page/${number}`}>{number}</Link>
                  </div>
                ))}
              </div>
              <Link
                href={nextLink}
                className='relative inline-flex items-center rounded-r-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-2 py-2 text-sm font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-50 hover:text-brandPink dark:hover:text-gg-400 focus:z-20'
              >
                <span className='sr-only'>Next</span>
                <HiChevronDoubleRight className='h-5 w-5' aria-hidden='true' />
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className='mx-auto text-center mt-10'>
        <p className='text-sm text-gray-800 dark:text-gray-200 font-lexend'>
          Showing{' '}
          <span className='font-medium'>
            {limitDefined * (currentPage - 1) + 1}
          </span>{' '}
          to <span className='font-medium'>{currentPage * limitDefined}</span>{' '}
          of <span className='font-medium'>{total}</span> results
        </p>
      </div>
    </div>
  );
};

export default Pagination;
