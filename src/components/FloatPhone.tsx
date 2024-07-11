import React from 'react';
import { HiPhone } from 'react-icons/hi';
import Link from 'next/link';

const FloatPhone = () => {
  return (
    <div className='fixed bottom-[70px] right-5 flex cursor-pointer items-center justify-center rounded-full bg-brandPink px-2 py-2 font-content font-bold text-white opacity-40 transition-opacity duration-500 ease-linear hover:opacity-100 md:hidden'>
      <Link href='tel:+919108910832'>
        <HiPhone className='h-5 w-5 text-white md:h-7 md:w-7' />
      </Link>
    </div>
  );
};

export default FloatPhone;
