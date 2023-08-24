import React from 'react';
import { HiPhone } from 'react-icons/hi';
import Link from 'next/link';

const FloatPhone = () => {
  return (
    <div className='fixed px-2 py-2 rounded-full font-bold font-content text-white bottom-[70px] right-5 md:hidden bg-brandPink flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-500 ease-linear cursor-pointer'>
      <Link href='tel:+919108910832'>
        <HiPhone className='w-5 h-5 md:w-7 md:h-7 text-white' />
      </Link>
    </div>
  );
};

export default FloatPhone;
