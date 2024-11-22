import {
  Popover,
  Transition,
  PopoverButton,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react';
import { HiChevronDown } from 'react-icons/hi';
import { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
          <PopoverButton
            className={` ${
              close ? 'w-screen text-left outline-none sm:w-full' : 'text-opacity-90 outline-none'
            } `}
          >
            <div className='px-2 py-2'>
              About <HiChevronDown className='inline-block' />
            </div>
          </PopoverButton>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <PopoverPanel className='absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-4 outline-none sm:px-0 lg:mt-7 lg:max-w-xl'>
              <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-gray-600 dark:ring-opacity-100'>
                <div className='relative grid grid-cols-2 gap-8 bg-white bg-opacity-95 p-5 shadow-xl backdrop-blur-2xl dark:bg-gray-800 dark:bg-opacity-95 lg:grid-cols-2'>
                  {AboutUs.map((item) => (
                    <Link key={item.name} href={item.href} className='group'>
                      <div
                        onClick={() => close()}
                        className='-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gg-200 focus:outline-none dark:hover:bg-gray-600'
                        role='none'
                      >
                        <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center text-white transition-all duration-150 ease-in-out dark:grayscale dark:group-hover:grayscale-0 sm:h-12 sm:w-12'>
                          <Image
                            src={item.icon}
                            alt={item.name}
                            loading='lazy'
                            width={50}
                            height={50}
                          />
                        </div>
                        <div className='ml-4'>
                          <p className='font-content text-sm font-medium text-gray-800 dark:text-gray-200'>
                            {item.name}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </PopoverPanel>
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
          <PopoverButton
            className={` ${
              close ? 'w-screen text-left outline-none sm:w-full' : 'text-opacity-90 outline-none'
            } `}
          >
            <div className='px-2 py-2'>
              Why GarbhaGudi
              <HiChevronDown className='inline-block' />
            </div>
          </PopoverButton>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <PopoverPanel className='absolute left-1/2 z-10 mt-3 w-screen max-w-lg -translate-x-1/2 transform px-4 sm:px-0 lg:mt-7 lg:max-w-3xl'>
              <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-gray-600 dark:ring-opacity-100'>
                <div className='relative grid grid-cols-2 gap-8 bg-white bg-opacity-95 p-5 backdrop-blur-2xl dark:bg-gray-800 dark:bg-opacity-95 lg:grid-cols-3'>
                  {ValueAddedServices.map((item) => (
                    <Link key={item.name} href={item.href} passHref className='group'>
                      <div
                        className='-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gg-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 dark:hover:bg-gray-600'
                        onClick={() => close()}
                        role='none'
                      >
                        <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center text-white transition-all duration-150 ease-in-out dark:grayscale dark:group-hover:grayscale-0 sm:h-12 sm:w-12'>
                          <Image
                            src={item.icon}
                            alt={item.name}
                            loading='lazy'
                            width={50}
                            height={50}
                          />
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
            </PopoverPanel>
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
          <PopoverButton
            className={` ${
              close ? 'w-screen text-left outline-none sm:w-full' : 'text-opacity-90 outline-none'
            } `}
          >
            <div className='px-2 py-2'>
              Resources <HiChevronDown className='inline-block' />
            </div>
          </PopoverButton>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <PopoverPanel className='absolute left-1/2 z-10 mt-3 w-screen max-w-xl -translate-x-1/2 transform px-4 sm:px-0 lg:mt-7 lg:max-w-xl'>
              <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-gray-600 dark:ring-opacity-100'>
                <div className='relative grid grid-cols-2 gap-8 bg-white bg-opacity-95 p-5 backdrop-blur-2xl dark:bg-gray-800 dark:bg-opacity-95'>
                  {Resources.map((item) => (
                    <Link key={item.name} href={item.href} passHref className='group'>
                      <div
                        className='-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gg-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 dark:hover:bg-gray-600'
                        onClick={() => close()}
                        role='none'
                      >
                        <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center text-white transition-all duration-150 ease-in-out dark:grayscale dark:group-hover:grayscale-0 sm:h-12 sm:w-12'>
                          <Image
                            src={item.icon}
                            alt={item.name}
                            loading='lazy'
                            width={50}
                            height={50}
                          />
                        </div>
                        <div className='ml-4'>
                          <p className='text-sm font-medium text-gray-800 dark:text-gray-200'>
                            {item.name}
                          </p>
                          <p className='hidden text-xs text-gray-500 dark:text-gray-400 lg:block'>
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </PopoverPanel>
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
          <PopoverButton
            className={` ${
              close ? 'w-screen text-left outline-none sm:w-full' : 'text-opacity-90 outline-none'
            } `}
          >
            <div className='px-2 py-2'>
              Contact <HiChevronDown className='inline-block' />
            </div>
          </PopoverButton>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <PopoverPanel className='absolute left-1/2 z-10 mt-3 w-96 -translate-x-1/2 transform px-4 sm:px-0 lg:mt-7 lg:max-w-xl'>
              <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-gray-600 dark:ring-opacity-100'>
                <div className='relative grid gap-8 bg-white bg-opacity-95 p-5 backdrop-blur-2xl dark:bg-gray-800 dark:bg-opacity-95 lg:grid-cols-1'>
                  {Contact.map((item) => (
                    <Link key={item.name} href={item.href} passHref className='group'>
                      <div
                        onClick={() => close()}
                        role='none'
                        className='-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gg-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 dark:hover:bg-gray-600'
                      >
                        <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center text-white transition-all duration-150 ease-in-out dark:grayscale dark:group-hover:grayscale-0 sm:h-12 sm:w-12'>
                          <Image
                            src={item.icon}
                            alt={item.name}
                            loading='lazy'
                            width={50}
                            height={50}
                          />
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
            </PopoverPanel>
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
          <PopoverButton
            className={` ${
              close ? 'w-screen text-left outline-none sm:w-full' : 'text-opacity-90 outline-none'
            } `}
          >
            <div className='px-2 py-2'>
              Locations <HiChevronDown className='inline-block' />
            </div>
          </PopoverButton>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <PopoverPanel className='absolute left-1/2 z-10 mt-3 w-screen -translate-x-1/2 transform px-4 sm:px-0 lg:mt-7 lg:max-w-lg'>
              <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-gray-600 dark:ring-opacity-100'>
                <div className='relative grid grid-cols-2 gap-8 bg-white bg-opacity-95 p-5 backdrop-blur-2xl dark:bg-gray-800 dark:bg-opacity-95 lg:grid-cols-2'>
                  {Location.map((item) => (
                    <Link key={item.name} href={item.href} className='group'>
                      <div
                        onClick={() => close()}
                        role='none'
                        className='-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gg-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 dark:hover:bg-gray-600'
                      >
                        <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gg-500 text-center text-base text-white transition-all duration-150 ease-in-out dark:grayscale dark:group-hover:grayscale-0 sm:h-12 sm:w-12 lg:text-2xl'>
                          <div className='mt-1 flex flex-col items-center justify-center text-center'>
                            {item.icon} <div className='text-center text-xs'>{item.short}</div>
                          </div>
                        </div>
                        <div className='ml-4'>
                          <p className='text-sm font-medium text-gray-800 dark:text-white'>
                            {item.name}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </PopoverPanel>
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
          <PopoverButton
            className={` ${
              open ? 'w-screen text-left outline-none sm:w-full' : 'text-opacity-90 outline-none'
            } `}
          >
            <div className='px-2 py-2'>
              Language <HiChevronDown className='inline-block' />
            </div>
          </PopoverButton>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <PopoverPanel className='absolute left-1/2 z-10 mt-3 w-32 -translate-x-1/2 transform px-4 sm:px-0 lg:mt-7 lg:max-w-xl'>
              <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-gray-600 dark:ring-opacity-100'>
                <div className='relative grid gap-8 bg-white bg-opacity-95 p-5 backdrop-blur-2xl dark:bg-gray-800 dark:bg-opacity-95 lg:grid-cols-1'>
                  {Language.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gg-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 dark:hover:bg-gray-600'
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
            </PopoverPanel>
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
          <PopoverButton
            className={` ${
              close ? 'w-screen text-left outline-none sm:w-full' : 'text-opacity-90 outline-none'
            } `}
          >
            <div className='px-2 py-2'>
              Treatments <HiChevronDown className='inline-block' />
            </div>
          </PopoverButton>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <PopoverPanel className='absolute left-1/2 z-10 mt-3 w-screen max-w-xl -translate-x-1/2 transform px-4 sm:px-0 lg:mt-7 lg:max-w-xl'>
              <div className='overflow-hidden rounded-lg bg-white bg-opacity-95 shadow-lg ring-1 ring-black ring-opacity-5 backdrop-blur-2xl dark:bg-gray-800 dark:bg-opacity-95 dark:ring-gray-600 dark:ring-opacity-100'>
                <TabGroup>
                  <TabList className='flex items-center justify-between rounded-t-lg bg-brandPink px-3 py-1.5 font-content font-bold text-white dark:bg-gray-600 lg:px-12 lg:py-2'>
                    <Tab
                      className={({ selected }) =>
                        classNames(
                          'w-full rounded-lg py-1 text-sm text-brandPink dark:text-gray-200',
                          'focus:outline-none',
                          selected
                            ? 'bg-gray-100 shadow ring-2 ring-brandPink2 dark:bg-gray-700 dark:ring-gray-500'
                            : 'text-gray-100 hover:bg-brandPink3 hover:text-white'
                        )
                      }
                    >
                      Female Infertility
                    </Tab>
                    <Tab
                      className={({ selected }) =>
                        classNames(
                          'w-full rounded-lg py-1 text-sm text-brandPink dark:text-gray-200',
                          'focus:outline-none',
                          selected
                            ? 'bg-gray-100 shadow ring-2 ring-brandPink2 dark:bg-gray-700 dark:ring-gray-500'
                            : 'text-gray-100 hover:bg-brandPink3 hover:text-white'
                        )
                      }
                    >
                      Male Infertility
                    </Tab>
                    <Tab
                      className={({ selected }) =>
                        classNames(
                          'w-full rounded-lg py-1 text-sm text-brandPink dark:text-gray-200',
                          'focus:outline-none',
                          selected
                            ? 'bg-gray-100 shadow ring-2 ring-brandPink2 dark:bg-gray-700 dark:ring-gray-500'
                            : 'text-gray-100 hover:bg-brandPink3 hover:text-white'
                        )
                      }
                    >
                      Advanced
                    </Tab>
                  </TabList>
                  <TabPanels className='my-2 px-2 text-black transition-all duration-500 ease-out'>
                    <TabPanel>
                      <div className='grid grid-cols-3 text-center'>
                        {TreatmentHeader.female.map((items) => (
                          <Link href={items.link} key={items.id} className='group'>
                            <div className='flex flex-col items-center justify-center rounded-xl py-2 hover:bg-gg-200 dark:hover:bg-gray-600'>
                              <Image
                                src={items.icon}
                                alt={items.name}
                                loading='lazy'
                                width={50}
                                height={50}
                                className='mx-auto h-10 w-10 transition-all duration-300 ease-linear group-hover:grayscale-0 dark:grayscale'
                              />
                              <div className='pt-2 font-content text-sm font-medium dark:text-gray-200'>
                                {items.name}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className='grid grid-cols-3 text-center'>
                        {TreatmentHeader.male.map((items) => (
                          <Link href={items.link} key={items.id} className='group'>
                            <div className='flex flex-col items-center justify-center rounded-xl py-2 hover:bg-gg-200 dark:hover:bg-gray-600'>
                              <Image
                                src={items.icon}
                                alt={items.name}
                                loading='lazy'
                                width={50}
                                height={50}
                                className='mx-auto h-10 w-10 transition-all duration-300 ease-linear group-hover:grayscale-0 dark:grayscale'
                              />
                              <div className='pt-2 font-content font-medium dark:text-gray-200'>
                                {items.name}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className='grid grid-cols-3 text-center'>
                        {TreatmentHeader.advanced.map((items) => (
                          <Link href={items.link} key={items.id} className='group'>
                            <div className='flex flex-col items-center justify-center rounded-xl py-2 hover:bg-gg-200 dark:hover:bg-gray-600'>
                              <Image
                                src={items.icon}
                                alt={items.name}
                                loading='lazy'
                                width={50}
                                height={50}
                                className='mx-auto h-10 w-10 transition-all duration-300 ease-linear group-hover:grayscale-0 dark:grayscale'
                              />
                              <div className='pt-2 font-content text-sm font-medium dark:text-gray-200'>
                                {items.name}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </TabPanel>
                  </TabPanels>
                </TabGroup>
              </div>
            </PopoverPanel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
