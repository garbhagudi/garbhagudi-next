import React from 'react';
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
  const totalPages = Math.ceil(total / limitDefined);
  const maxVisiblePages = 7;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  if (endPage - startPage < maxVisiblePages - 1) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
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
          <nav
            className='isolate inline-flex -space-x-px rounded-md shadow-xl'
            aria-label='Pagination'
          >
            {currentPage > 1 && (
              <Link
                href={previousLink}
                className='relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-brandPink focus:z-20 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:text-gg-400'
              >
                <HiChevronDoubleLeft className='h-5 w-5' aria-hidden='true' />
              </Link>
            )}

            <div className='flex flex-wrap items-center justify-center space-x-1.5 border px-3 dark:border-gray-600'>
              {startPage > 1 && (
                <>
                  <Link href='/blogs/page/1' className='px-2 py-1 font-bold hover:underline'>
                    1
                  </Link>
                  {startPage > 2 && <span className='px-2 py-1'>...</span>}
                </>
              )}

              {pageNumbers.map((number) => (
                <Link
                  key={number}
                  href={`/blogs/page/${number}`}
                  className={`px-3 py-1.5 font-content text-sm ${
                    currentPage === number
                      ? 'border border-gg-500 bg-brandPink5 font-bold text-gg-500'
                      : 'font-medium hover:font-bold hover:text-gg-500 hover:underline'
                  }`}
                >
                  {number}
                </Link>
              ))}

              {endPage < totalPages && (
                <>
                  {endPage < totalPages - 1 && <span className='px-2 py-1'>...</span>}
                  <Link
                    href={`/blogs/page/${totalPages}`}
                    className='px-2 py-1 font-bold hover:underline'
                  >
                    {totalPages}
                  </Link>
                </>
              )}
            </div>

            {currentPage < totalPages && (
              <Link
                href={nextLink}
                className='relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-brandPink focus:z-20 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:text-gg-400'
              >
                <HiChevronDoubleRight className='h-5 w-5' aria-hidden='true' />
              </Link>
            )}
          </nav>
        </div>
      </div>
      <div className='mx-auto mt-10 text-center'>
        <p className='font-lexend text-sm text-gray-800 dark:text-gray-200'>
          Showing <span className='font-medium'>{limitDefined * (currentPage - 1) + 1}</span> to{' '}
          <span className='font-medium'>{Math.min(currentPage * limitDefined, total)}</span> of{' '}
          <span className='font-medium'>{total}</span> results
        </p>
      </div>
    </div>
  );
};

export default Pagination;
