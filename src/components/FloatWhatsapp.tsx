import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

const FloatWhatsApp = () => {
  return (
    <div className='fixed px-2 py-2 rounded-full font-bold font-content text-white bottom-5 right-5 bg-green-600 flex items-center justify-center cursor-pointer'>
      <Link href='https://wa.me/918951813344'>
        <FaWhatsapp className='w-5 h-5 md:w-8 md:h-8 text-white' />
      </Link>
    </div>
  );
};

export default FloatWhatsApp;
