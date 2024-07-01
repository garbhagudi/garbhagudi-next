import React from 'react';
import Logo from 'components/assets/logo';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex items-center justify-between py-4'>
          <div>
            <Logo />
          </div>
          <div className='hidden lg:flex items-start justify-around space-x-3 font-lexend'>
            <ul className='hidden lg:flex items-center space-x-4'>
              {menuitems.map((item, index) => (
                <li key={index} className='px-4 py-2'>
                  <Link
                    href={item.url}
                    className='text-gray-700 hover:text-gray-900 cursor-pointer transition-all duration-300 smooth-scroll scroll-auto'
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href={'#register'} className=''>
              <button className='px-4 py-2 text-white rounded-lg bg-gg-500 hover:bg-gg-600 transition-all duration-300 font-bold'>
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
