import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import Link from 'next/link';
import {
  About,
  WhyGarbhaGudi,
  Treatments,
  KnowledgeCenter,
  Contacts,
  Locations,
  Languages,
} from 'components/header/popover';
import LanguageSelect from 'components/languageSelect';
import Logo from 'components/assets/logo';
import ThemeToggle from 'styles/theme-toggle';

const menu = [
  {
    id: 1,
    option: <Treatments />,
    slug: 'treatments',
  },
  {
    id: 2,
    option: <About />,
    slug: 'about',
  },
  {
    id: 3,
    option: <WhyGarbhaGudi />,
    slug: 'features',
  },
  {
    id: 4,
    option: <KnowledgeCenter />,
    slug: 'resources',
  },
  {
    id: 5,
    option: <Contacts />,
    slug: 'gg-care',
  },
  {
    id: 6,
    option: <Locations />,
    slug: 'locations',
  },
  {
    id: 7,
    option: <Languages />,
    slug: 'languages',
  },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`sticky top-0 z-50 bg-white bg-[url(https://res.cloudinary.com/garbhagudiivf/image/upload/v1706689143/Misc/Valentine-Web_ubazbx.webp)] bg-no-repeat dark:bg-gray-800 shadow-xl dark:border-b dark:border-gray-600 bg-opacity-70 dark:bg-opacity-70 backdrop-blur-2xl`}
    >
      <nav className='shadow-2xl'>
        <nav className='px-2 lg:px-3 lg:py-2'>
          <div className='flex justify-between items-center mx-auto max-w-screen-xl'>
            <Link href='/' className='hidden xl:flex items-center px-3 py-1'>
              <Logo />
            </Link>
            <Link href='/' className='flex items-center xl:hidden'>
              <img
                className='w-16 h-full dark:fill-white dark:grayscale dark:brightness-0 dark:invert'
                src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1659164257/logos/GG_Vertical_Logo_nrcl5h.svg'
                alt='logo'
              />
            </Link>
            <div className='flex items-center lg:order-2'>
              <div className='space-x-3 flex items-center'>
                <ThemeToggle />
                <Link
                  href='/contact/enquiry'
                  target={'_blank'}
                  rel='noreferrer'
                  className='px-3 py-2 text-xs sm:text-sm text-gray-200 cursor-pointer bg-gg-500 dark:bg-gg-500 rounded-lg font-lexend hover:bg-brandPink3 dark:hover:bg-gg-600 transition-all ease-in duration-2'
                >
                  Book{' '}
                  <span className='hidden sm:inline-block'>Appointment</span>{' '}
                  <span className='sm:hidden inline-block'>Now</span>
                </Link>
              </div>
              <div className='flex items-center justify-center ml-2 -mr-2 xl:hidden'>
                <div className='z-10 mr-4'>
                  <LanguageSelect />
                </div>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type='button'
                  className='inline-flex mr-1 items-center justify-center p-2 text-gray-200 bg-gray-900 rounded-full hover:text-white hover:bg-gray-800 focus:outline-none'
                  aria-controls='mobile-menu'
                  aria-expanded='false'
                >
                  <div className='sr-only'>Open main menu</div>
                  {!isOpen ? (
                    <HiOutlineMenuAlt3 className='block w-6 h-6' />
                  ) : (
                    <HiX className='block w-6 h-6' />
                  )}
                </button>
              </div>
            </div>
            <div
              className='hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1'
              id='mobile-menu-2'
            >
              <div className='py-2 flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
                <div className='hidden xl:block'>
                  <div className='flex items-baseline space-x-4'>
                    {menu.map((items) => (
                      <div
                        key={items.id}
                        className='text-sm font-bold text-gray-800 dark:text-gray-200 hover:bg-gg-500 dark:hover:bg-gg-400 hover:text-white dark:hover:text-gray-800 rounded-lg font-content transition-all ease-in duration-200'
                      >
                        {items.option}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <Transition
          show={isOpen}
          enter='transition ease-out duration-100 transform'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='transition ease-in duration-75 transform'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <div className='mt-2 xl:hidden' id='mobile-menu'>
            <div className=''>
              {menu.map((items) => (
                <div
                  key={items.id}
                  className='text-sm rounded-md font-semibold text-gray-800 dark:text-gray-200 hover:bg-gg-500 dark:hover:bg-gg-400 hover:text-white dark:hover:text-gray-800 font-content'
                >
                  <div>{items.option}</div>
                </div>
              ))}
              <Link
                href='/contact/enquiry'
                target={'_blank'}
                rel='noreferrer'
                onClick={() => setIsOpen(!isOpen)}
                className='block px-2 py-2 text-opacity-90 text-sm rounded-md font-semibold cursor-pointer text-gray-800 dark:text-gray-200 hover:bg-gg-500 dark:hover:bg-gg-400 hover:text-white dark:hover:text-gray-800 font-content'
              >
                Book an Appointment
              </Link>
            </div>
          </div>
        </Transition>
      </nav>
    </div>
  );
};

export default Nav;
