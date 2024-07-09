import React from 'react';
import Logo from 'components/assets/logo';
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <div className='mx-auto max-w-7xl px-4'>
        <div className='flex items-center justify-between py-4'>
          <div>
            <Logo />
          </div>
          <div className='hidden items-start justify-around space-x-3 font-lexend lg:flex'>
            <ul className='hidden items-center space-x-4 lg:flex'>
              {menuitems.map((item, index) => (
                <li key={index} className='px-4 py-2'>
                  <Link
                    href={item.url}
                    className='smooth-scroll cursor-pointer scroll-auto text-gray-700 transition-all duration-300 hover:text-gray-900'
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href={'#register'} className=''>
              <button className='rounded-lg bg-gg-500 px-4 py-2 font-bold text-white transition-all duration-300 hover:bg-gg-600'>
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

const menuitems = [
  { title: 'Benefits', url: '#benefits' },
  { title: 'Curriculum', url: '#curriculum' },
  { title: 'Testimonial', url: '#testimonial' },
  { title: 'FAQ', url: '#contact' },
];
