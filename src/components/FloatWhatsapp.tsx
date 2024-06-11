import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

const FloatWhatsApp = () => {
  return (
    <div className='fixed px-2 py-2 rounded-full font-bold font-content text-white bottom-16 left-5 md:bottom-16 md:left-4 bg-green-600 flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-500 ease-linear cursor-pointer'>
      <Link href='https://wa.me/918884183338?text=Hi.'>
        <FaWhatsapp className='w-5 h-5 md:w-8 md:h-8 text-white' />
      </Link>
    </div>
  );
};

export default FloatWhatsApp;
