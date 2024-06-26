import { Popover, Transition } from '@headlessui/react';
import { HiChevronDown } from 'react-icons/hi';
import { Fragment } from 'react';
import Link from 'next/link';
import { Tab } from '@headlessui/react';
import {
  Contact,
  Language,
  Location,
  AboutUs,
  Resources,
  TreatmentHeader,
  ValueAddedServices,
} from './headerData';

export function About() {
  return (
    <Popover className='relative'>
      {({ close }) => (
        <>
          <Popover.Button
            className={`
                ${
                  close
                    ? 'w-screen text-left sm:w-full outline-none'
                    : 'text-opacity-90 outline-none'
                }
                 `}
          >
            <div className='px-2 py-2'>
              About <HiChevronDown className='inline-block' />
            </div>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <Popover.Panel className='absolute z-10 w-screen outline-none max-w-md px-4 transform -translate-x-1/2 mt-3 lg:mt-7 left-1/2 sm:px-0 lg:max-w-xl'>
              <div className='overflow-hidden shadow-lg rounded-lg ring-1 ring-black dark:ring-gray-600 ring-opacity-5 dark:ring-opacity-100'>
                <div className='relative grid grid-cols-2 gap-8 p-5 bg-white dark:bg-gray-800 bg-opacity-95 dark:bg-opacity-95 backdrop-blur-2xl lg:grid-cols-2 shadow-xl'>
                  {AboutUs.map((item) => (
                    <Link key={item.name} href={item.href} className='group'>
                      <div
                        onClick={() => close()}
                        className='flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gg-200 dark:hover:bg-gray-600  focus:outline-none'
                      >
                        <div className='flex items-center justify-center dark:grayscale dark:group-hover:grayscale-0 transition-all duration-150 ease-in-out flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12'>
                          <img src={item.icon} alt={item.name} loading='lazy' />
                        </div>
                        <div className='ml-4'>
                          <p className='text-sm font-medium text-gray-800 dark:text-gray-200 font-content'>
                            {item.name}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

export function WhyGarbhaGudi() {
  return (
    <Popover className='relative'>
      {({ close }) => (
        <>
          <Popover.Button
            className={`
                  ${
                    close
                      ? 'w-screen text-left sm:w-full outline-none'
                      : 'text-opacity-90 outline-none'
                  }
                   `}
          >
            <div className='px-2 py-2'>
              Why GarbhaGudi
              <HiChevronDown className='inline-block' />
            </div>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <Popover.Panel className='absolute z-10 w-screen max-w-lg px-4 transform -translate-x-1/2 mt-3 lg:mt-7 left-1/2 sm:px-0 lg:max-w-3xl'>
              <div className='overflow-hidden shadow-lg rounded-lg ring-1 ring-black dark:ring-gray-600 ring-opacity-5 dark:ring-opacity-100'>
                <div className='relative grid grid-cols-2 gap-8 p-5 bg-white dark:bg-gray-800 bg-opacity-95 dark:bg-opacity-95 backdrop-blur-2xl lg:grid-cols-3'>
                  {ValueAddedServices.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      passHref
                      className='group'
                    >
                      <div
                        className='flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gg-200 dark:hover:bg-gray-600  focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50'
                        onClick={() => close()}
                      >
                        <div className='flex items-center justify-center dark:grayscale dark:group-hover:grayscale-0 transition-all duration-150 ease-in-out flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12'>
                          <img src={item.icon} alt={item.name} loading='lazy' />
                        </div>
                        <div className='ml-4'>
                          <p className='text-sm font-medium text-gray-800 dark:text-gray-200'>
                            {item.name}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

export function KnowledgeCenter() {
  return (
    <Popover className='relative'>
      {({ close }) => (
        <>
          <Popover.Button
            className={`
                  ${
                    close
                      ? 'w-screen text-left sm:w-full outline-none'
                      : 'text-opacity-90 outline-none'
                  }
                  `}
          >
            <div className='px-2 py-2'>
              Resources <HiChevronDown className='inline-block' />
            </div>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <Popover.Panel className='absolute z-10 w-screen max-w-xl px-4 transform -translate-x-1/2 mt-3 lg:mt-7 left-1/2 sm:px-0 lg:max-w-xl'>
              <div className='overflow-hidden shadow-lg rounded-lg ring-1 ring-black dark:ring-gray-600 ring-opacity-5 dark:ring-opacity-100'>
                <div className='relative grid grid-cols-2 gap-8 p-5 bg-white bg-opacity-95 dark:bg-opacity-95 backdrop-blur-2xl dark:bg-gray-800'>
                  {Resources.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      passHref
                      className='group'
                    >
                      <div
                        className='flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gg-200 dark:hover:bg-gray-600  focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50'
                        onClick={() => close()}
                      >
                        <div className='flex items-center justify-center dark:grayscale dark:group-hover:grayscale-0 transition-all duration-150 ease-in-out flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12'>
                          <img src={item.icon} alt={item.name} loading='lazy' />
                        </div>
                        <div className='ml-4'>
                          <p className='text-sm font-medium text-gray-800 dark:text-gray-200'>
                            {item.name}
                          </p>
                          <p className='text-xs text-gray-500 dark:text-gray-400 hidden lg:block'>
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

export function Contacts() {
  return (
    <Popover className='relative'>
      {({ close }) => (
        <>
          <Popover.Button
            className={`
                  ${
                    close
                      ? 'w-screen text-left sm:w-full outline-none'
                      : 'text-opacity-90 outline-none'
                  }
                  `}
          >
            <div className='px-2 py-2'>
              Contact <HiChevronDown className='inline-block' />
            </div>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <Popover.Panel className='absolute z-10 px-4 transform -translate-x-1/2 w-96 mt-3 lg:mt-7 left-1/2 sm:px-0 lg:max-w-xl'>
              <div className='overflow-hidden shadow-lg rounded-lg ring-1 ring-black dark:ring-gray-600 ring-opacity-5 dark:ring-opacity-100'>
                <div className='relative grid gap-8 p-5 bg-white dark:bg-gray-800 bg-opacity-95 dark:bg-opacity-95 backdrop-blur-2xl lg:grid-cols-1'>
                  {Contact.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      passHref
                      className='group'
                    >
                      <div
                        onClick={() => close()}
                        className='flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gg-200 dark:hover:bg-gray-600 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50'
                      >
                        <div className='flex items-center justify-center dark:grayscale dark:group-hover:grayscale-0 transition-all duration-150 ease-in-out flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12'>
                          <img src={item.icon} alt={item.name} loading='lazy' />
                        </div>
                        <div className='ml-4'>
                          <p className='text-sm font-medium text-gray-800 dark:text-gray-200'>
                            {item.name}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

export function Locations() {
  return (
    <Popover className='relative'>
      {({ close }) => (
        <>
          <Popover.Button
            className={`
                ${
                  close
                    ? 'w-screen text-left sm:w-full outline-none'
                    : 'text-opacity-90 outline-none'
                }
                 `}
          >
            <div className='px-2 py-2'>
              Locations <HiChevronDown className='inline-block' />
            </div>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <Popover.Panel className='absolute z-10 px-4 w-screen transform mt-3 lg:mt-7 -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-lg'>
              <div className='overflow-hidden shadow-lg rounded-lg ring-1 ring-black dark:ring-gray-600 ring-opacity-5 dark:ring-opacity-100'>
                <div className='relative grid gap-8 p-5 bg-white dark:bg-gray-800 bg-opacity-95 dark:bg-opacity-95 backdrop-blur-2xl grid-cols-2 lg:grid-cols-2'>
                  {Location.map((item) => (
                    <Link key={item.name} href={item.href} className='group'>
                      <div
                        onClick={() => close()}
                        className='flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gg-200 dark:hover:bg-gray-600 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50'
                      >
                        <div className='flex items-center justify-center bg-gg-500 dark:grayscale dark:group-hover:grayscale-0 transition-all duration-150 ease-in-out rounded-lg flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12 text-base text-center lg:text-2xl'>
                          <div className='mt-1 text-center flex items-center justify-center flex-col'>
                            {item.icon}{' '}
                            <div className='text-xs text-center'>
                              {item.short}
                            </div>
                          </div>
                        </div>
                        <div className='ml-4 '>
                          <p className='text-sm font-medium text-gray-800 dark:text-white'>
                            {item.name}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

export function Languages() {
  return (
    <Popover className='relative'>
      {({ open }) => (
        <>
          <Popover.Button
            className={`
                ${
                  open
                    ? 'w-screen text-left sm:w-full outline-none'
                    : 'text-opacity-90 outline-none'
                }
                 `}
          >
            <div className='px-2 py-2'>
              Language <HiChevronDown className='inline-block' />
            </div>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <Popover.Panel className='absolute z-10 w-32 px-4 mt-3 lg:mt-7 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-xl'>
              <div className='overflow-hidden shadow-lg rounded-lg ring-1 ring-black dark:ring-gray-600 ring-opacity-5 dark:ring-opacity-100'>
                <div className='relative grid gap-8 p-5 bg-white dark:bg-gray-800 bg-opacity-95 dark:bg-opacity-95 backdrop-blur-2xl lg:grid-cols-1'>
                  {Language.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gg-200 dark:hover:bg-gray-600  focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50'
                    >
                      <div className='ml-4'>
                        <p className='text-sm font-medium text-gray-800 dark:text-white'>
                          {item.name}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function Treatments() {
  return (
    <Popover className='relative'>
      {({ close }) => (
        <>
          <Popover.Button
            className={`
                ${
                  close
                    ? 'w-screen text-left sm:w-full outline-none'
                    : 'text-opacity-90 outline-none'
                }
                 `}
          >
            <div className='px-2 py-2'>
              Treatments <HiChevronDown className='inline-block' />
            </div>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <Popover.Panel className='absolute z-10 px-4 mt-3 lg:mt-7 transform -translate-x-1/2 w-screen max-w-xl left-1/2 sm:px-0 lg:max-w-xl'>
              <div className='overflow-hidden shadow-lg rounded-lg ring-1 ring-black dark:ring-gray-600 ring-opacity-5 dark:ring-opacity-100 bg-white dark:bg-gray-800 bg-opacity-95 dark:bg-opacity-95 backdrop-blur-2xl'>
                <Tab.Group>
                  <Tab.List className='flex items-center justify-between bg-brandPink dark:bg-gray-600 text-white font-content font-bold px-3 lg:px-12 py-1.5 lg:py-2 rounded-t-lg'>
                    <Tab
                      className={({ selected }) =>
                        classNames(
                          'w-full py-1 text-sm text-brandPink dark:text-gray-200 rounded-lg',
                          'focus:outline-none',
                          selected
                            ? 'bg-gray-100 dark:bg-gray-700 ring-2 ring-brandPink2 dark:ring-gray-500 shadow'
                            : 'text-gray-100 hover:bg-brandPink3 hover:text-white'
                        )
                      }
                    >
                      Female Infertility
                    </Tab>
                    <Tab
                      className={({ selected }) =>
                        classNames(
                          'w-full py-1 text-sm text-brandPink dark:text-gray-200 rounded-lg',
                          'focus:outline-none',
                          selected
                            ? 'bg-gray-100 dark:bg-gray-700 ring-2 ring-brandPink2 dark:ring-gray-500 shadow'
                            : 'text-gray-100 hover:bg-brandPink3 hover:text-white'
                        )
                      }
                    >
                      Male Infertility
                    </Tab>
                    <Tab
                      className={({ selected }) =>
                        classNames(
                          'w-full py-1 text-sm text-brandPink dark:text-gray-200 rounded-lg',
                          'focus:outline-none',
                          selected
                            ? 'bg-gray-100 dark:bg-gray-700 ring-2 ring-brandPink2 dark:ring-gray-500 shadow'
                            : 'text-gray-100 hover:bg-brandPink3 hover:text-white'
                        )
                      }
                    >
                      Advanced
                    </Tab>
                  </Tab.List>
                  <Tab.Panels className='px-2 my-2 text-black transition-all ease-out duration-500'>
                    <Tab.Panel>
                      <div className='grid grid-cols-3 text-center'>
                        {TreatmentHeader.female.map((items) => (
                          <Link
                            href={items.link}
                            key={items.id}
                            className='group'
                          >
                            <div className='flex flex-col items-center justify-center hover:bg-gg-200 dark:hover:bg-gray-600 py-2 rounded-xl'>
                              <img
                                src={items.icon}
                                alt={items.name}
                                loading='lazy'
                                className='w-10 h-10 mx-auto dark:grayscale group-hover:grayscale-0 transition-all duration-300 ease-linear'
                              />
                              <div className='font-content text-sm font-medium pt-2 dark:text-gray-200'>
                                {items.name}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className='grid grid-cols-3 text-center'>
                        {TreatmentHeader.male.map((items) => (
                          <Link
                            href={items.link}
                            key={items.id}
                            className='group'
                          >
                            <div className='flex flex-col items-center justify-center hover:bg-gg-200 dark:hover:bg-gray-600 py-2 rounded-xl'>
                              <img
                                src={items.icon}
                                alt={items.name}
                                loading='lazy'
                                className='w-10 h-10 mx-auto dark:grayscale group-hover:grayscale-0 transition-all duration-300 ease-linear'
                              />
                              <div className='font-content font-medium pt-2 dark:text-gray-200'>
                                {items.name}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className='grid grid-cols-3 text-center'>
                        {TreatmentHeader.advanced.map((items) => (
                          <Link
                            href={items.link}
                            key={items.id}
                            className='group'
                          >
                            <div className='flex flex-col items-center justify-center hover:bg-gg-200 dark:hover:bg-gray-600 py-2 rounded-xl'>
                              <img
                                src={items.icon}
                                alt={items.name}
                                loading='lazy'
                                className='w-10 h-10 mx-auto dark:grayscale group-hover:grayscale-0 transition-all duration-300 ease-linear'
                              />
                              <div className='font-content text-sm font-medium pt-2 dark:text-gray-200'>
                                {items.name}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
