import React from 'react';
import Link from 'next/link';
import { FaSearchLocation } from 'react-icons/fa';

const FindBranch = () => {
  return (
    <div id='nearest-location'>
      <h4 className='text-4xl text-center px-2 font-heading py-6 font-bold text-gray-800 dark:text-gray-200 '>
        Find the nearest Branch
      </h4>
      <div className='flex flex-wrap gap-4 items-center justify-center'>
        <Link href={'/gg-care/search-branch-by-pincode'}>
          <div className='aspect-square w-64 h-64 relative flex items-center justify-center flex-col group hover:-translate-x-2 hover:-translate-y-2 transition-all duration-200'>
            <h6 className='font-content text-lg'>Search by Pincode</h6>
            <div className='absolute bg-gray-500 group-hover:bg-gg-400 h-full w-full opacity-25 transition-all duration-200'></div>
            <FaSearchLocation className='text-7xl mt-4 text-gray-200 group-hover:text-gg-500 group-hover:text-8xl transition-all duration-200' />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FindBranch;
