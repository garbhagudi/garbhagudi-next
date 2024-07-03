import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Branch = ({ branches }) => {
  return (
    <div>
      <h1 className='pt-10 text-center font-heading text-3xl font-bold text-gray-800 dark:text-gray-200 lg:pt-16 lg:text-4xl'>
        Our Branches
      </h1>
      <div className='mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 py-10 lg:py-16'>
        {branches?.map((items) => (
          <Link
            href={`/locations/${items?.slug}`}
            key={items?.id}
            className='rounded-xl transition-all duration-150 hover:shadow-2xl'
          >
            <div className='mx-auto flex max-w-sm flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-gg-500 dark:border-gray-600'>
              <div className='overflow-hidden'>
                <Image
                  src={items?.branchPicture?.url}
                  alt={items?.title}
                  width={480}
                  height={100}
                  loading='lazy'
                  className='overflow-hidden transition-all duration-500 hover:scale-125'
                />
              </div>
              <div className='flex w-full items-center justify-evenly border-t-2 border-gg-500 px-3 py-3 dark:border-gray-600'>
                <div className='ml-4 font-heading text-xl font-bold text-gray-800 dark:text-gray-200'>
                  {items?.title}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Branch;
