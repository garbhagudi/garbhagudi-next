import Logo from 'components/assets/logo';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div>
      <div className='mx-auto max-w-7xl px-3'>
        <div className='flex items-center justify-between py-3'>
          <Logo />
          <Link
            href='tel:+919071234006'
            className='rounded-md bg-gg-500 px-3 py-2 font-lexend text-sm font-semibold text-white transition duration-300 ease-in-out hover:bg-gg-600'
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
