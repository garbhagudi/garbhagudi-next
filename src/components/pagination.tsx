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
  console.log(currentPage1);
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };
  const pageNumbers = [];
  for (let i = 1; i <= total / 6 + 1; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className='mx-auto max-w-7xl'>
      <div className='mt-10 flex items-center justify-between'>
        <div className='mx-auto mt-5 flex items-center justify-center space-x-4 text-center sm:hidden'>
          {isPrev && (
            <Link href={`/blogs/page/${previousPage}`}>
              <div className='rounded-lg bg-gg-500 px-6 py-2 font-content font-semibold text-white'>
                Prev Page
              </div>
            </Link>
          )}
          {isNext && (
            <Link href={`/blogs/page/${nextPage}`}>
              <div className='rounded-lg bg-gg-500 px-4 py-2 font-content font-semibold text-white dark:text-gray-200'>
                Next Page
              </div>
            </Link>
          )}
        </div>
        <div className='mx-auto hidden sm:flex sm:items-center sm:justify-between'>
          <div>
            <nav
              className='isolate inline-flex -space-x-px rounded-md shadow-xl'
              aria-label='Pagination'
            >
              <Link
                href={previousLink}
                className='relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-brandPink focus:z-20 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:text-gg-400'
              >
                <span className='sr-only'>Previous</span>
                <HiChevronDoubleLeft className='h-5 w-5' aria-hidden='true' />
              </Link>
              <div className='flex flex-wrap items-center justify-center space-x-1.5 border px-3 dark:border-gray-600'>
                {pageNumbers.map((number) => (
                  <div
                    key={number}
                    onClick={() => handlePageClick(number)}
                    className={
                      currentPage === number
                        ? 'relative z-10 inline-flex items-center border border-gg-500 bg-brandPink5 px-3 py-1.5 font-content text-sm font-bold text-gg-500 focus:z-20 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300'
                        : 'relative z-10 inline-flex items-center px-1.5 py-1.5 font-content text-sm font-medium hover:font-bold hover:text-gg-500 hover:underline'
                    }
                  >
                    <Link href={`/blogs/page/${number}`}>{number}</Link>
                  </div>
                ))}
              </div>
              <Link
                href={nextLink}
                className='relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-brandPink focus:z-20 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:text-gg-400'
              >
                <span className='sr-only'>Next</span>
                <HiChevronDoubleRight className='h-5 w-5' aria-hidden='true' />
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className='mx-auto mt-10 text-center'>
        <p className='font-lexend text-sm text-gray-800 dark:text-gray-200'>
          Showing <span className='font-medium'>{limitDefined * (currentPage - 1) + 1}</span> to{' '}
          <span className='font-medium'>{currentPage * limitDefined}</span> of{' '}
          <span className='font-medium'>{total}</span> results
        </p>
      </div>
    </div>
  );
};

export default Pagination;
