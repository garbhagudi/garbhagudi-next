import React from 'react';
import { HiPhone } from 'react-icons/hi';
import Link from 'next/link';

const FloatPhone = () => {
  return (
    <div className='fixed bottom-[10px] left-3 flex animate-shake cursor-pointer items-center justify-center rounded-full bg-brandPink px-2 py-2 font-content font-bold text-white transition-opacity ease-in hover:opacity-100 md:hidden'>
      <Link href='tel:+919108910832'>
        <HiPhone className='h-10 w-10 text-white transition-transform ease-in-out hover:rotate-12 hover:scale-110 md:h-7 md:w-7' />
      </Link>
    </div>
  );
};

export default FloatPhone;
