import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Branch = ({ branches }) => {
  return (
    <div>
      <h1 className='text-center font-heading text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-200'>
        Our Branches
      </h1>
      <div className='flex items-center justify-center flex-wrap max-w-7xl mx-auto gap-6 py-10 lg:py-16'>
        {branches?.map((items) => (
          <Link
            href={`/locations/${items?.slug}`}
            key={items?.id}
            className='hover:shadow-2xl rounded-xl transition-all duration-150'
          >
            <div className='flex flex-col items-center justify-center border-2 border-gg-500 dark:border-gray-600 rounded-xl overflow-hidden max-w-sm mx-auto'>
              <div className='overflow-hidden'>
                <Image
                  src={items?.branchPicture?.url}
                  alt={items?.title}
                  width={250}
                  height={100}
                  loading='lazy'
                />
              </div>
              <div className='flex items-center justify-evenly w-full px-3 py-3 border-t-2 border-gg-500 dark:border-gray-600'>
                <div className='ml-4 font-heading font-bold text-xl text-gray-800 dark:text-gray-200'>
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
