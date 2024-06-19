import Logo from 'components/assets/logo';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div>
      <div className='max-w-7xl mx-auto px-3'>
        <div className='flex items-center justify-between py-3'>
          <Logo />
          <Link
            href='callto:+919071234006'
            className='px-3 py-2 bg-gg-500 font-lexend text-white rounded-md text-sm font-semibold hover:bg-gg-600 transition duration-300 ease-in-out'
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
