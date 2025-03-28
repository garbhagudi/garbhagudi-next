import Link from 'next/link';
import { FaSearchLocation } from 'react-icons/fa';

const FindBranch = () => {
  return (
    <div id='nearest-location'>
      <h4 className='px-2 py-6 text-center font-heading text-4xl font-bold text-gray-800 dark:text-gray-200'>
        Find the nearest Branch
      </h4>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        <Link href={'/gg-care/search-branch-by-pincode'}>
          <div className='group relative flex aspect-square h-64 w-64 flex-col items-center justify-center transition-all duration-200 hover:-translate-x-2 hover:-translate-y-2'>
            <h6 className='font-content text-lg'>Search by Pincode</h6>
            <div className='absolute h-full w-full bg-gray-500 opacity-25 transition-all duration-200 group-hover:bg-gg-400'></div>
            <FaSearchLocation className='mt-4 text-7xl text-gray-200 transition-all duration-200 group-hover:text-8xl group-hover:text-gg-500' />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FindBranch;
