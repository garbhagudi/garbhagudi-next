import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

const FloatWhatsApp = () => {
  return (
    <div className='fixed px-2 py-2 rounded-lg font-bold font-content text-white bottom-14 left-3 md:bottom-16 md:left-3 bg-green-600 flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-500 ease-linear cursor-pointer'>
      <Link href='https://wa.me/918884183338?text=Hi.'>
        <FaWhatsapp className='w-5 h-5 md:w-8 md:h-8 text-white' />
      </Link>
    </div>
  );
};

export default FloatWhatsApp;
