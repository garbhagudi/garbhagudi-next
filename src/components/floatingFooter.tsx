import React from 'react';
import { HiOutlinePhone } from 'react-icons/hi';
import Link from 'next/link';
import FormPopUp from 'components/popUp';

const FloatingFooter = () => {
  return (
    <div className='sticky bottom-0 w-full border-t-2 sm:hidden'>
      <div className='grid grid-cols-2 bg-gg-500 px-2 py-2 dark:bg-gray-800'>
        <FormPopUp />
        <Link href={'tel:+919071234006'} className='flex items-center space-x-3 font-bold'>
          <HiOutlinePhone className='text-2xl text-white' /> <div>+919071234006</div>
        </Link>
      </div>
    </div>
  );
};

export default FloatingFooter;
