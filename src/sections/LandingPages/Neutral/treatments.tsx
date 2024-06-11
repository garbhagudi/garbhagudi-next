import React from 'react';
import Link from 'next/link';
import { Tab } from '@headlessui/react';
import { TreatmentHeader } from 'components/header/headerData';
import Image from 'next/image';

const Treatments = () => {
  return (
    <div>
      <div>
        <h3 className='text-3xl lg:text-4xl font-heading font-bold text-center py-10 lg:py-16 text-gray-800 dark:text-gray-200'>
          Treatment Options
        </h3>
        <div className='max-w-3xl mx-auto px-2'>
          <Tab.Group>
            <Tab.List className='flex flex-nowrap bg-gg-500 dark:bg-gg-400 dark:border dark:border-gray-600 rounded-lg transition-all ease-linear duration-300'>
              <Tab className='w-full py-2 rounded-lg focus:outline-none text-gray-100 dark:text-gray-800 mx-auto text-center text-xl font-heading font-semibold ui-selected:bg-gray-100 dark:ui-selected:bg-gray-800 ui-selected:text-brandPink2 dark:ui-selected:text-gray-200 ui-selected:shadow-xl ui-selected:hover:bg-gray-100 ui-selected:transition-all ui-selected:ease-linear ui-selected:duration-300 ui-not-selected:hover:bg-brandPink3'>
                Female Infertility
              </Tab>
              <Tab className='w-full py-2 rounded-lg focus:outline-none text-gray-100 dark:text-gray-800 mx-auto text-center text-xl font-heading font-semibold ui-selected:bg-gray-100 dark:ui-selected:bg-gray-800 ui-selected:text-brandPink2 dark:ui-selected:text-gray-200 ui-selected:shadow-xl ui-selected:hover:bg-gray-100 ui-selected:transition-all ui-selected:ease-linear ui-selected:duration-300 ui-not-selected:hover:bg-brandPink3'>
                Male Infertility
              </Tab>
              <Tab className='w-full py-2 rounded-lg focus:outline-none text-gray-100 dark:text-gray-800 mx-auto text-center text-xl font-heading font-semibold ui-selected:bg-gray-100 dark:ui-selected:bg-gray-800 ui-selected:text-brandPink2 dark:ui-selected:text-gray-200 ui-selected:shadow-xl ui-selected:hover:bg-gray-100 ui-selected:transition-all ui-selected:ease-linear ui-selected:duration-300 ui-not-selected:hover:bg-brandPink3'>
                Advanced Options
              </Tab>
            </Tab.List>
            <Tab.Panels className='px-2 text-black transition-all ease-out duration-500 my-10'>
              <Tab.Panel>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2 text-center'>
                  {TreatmentHeader.female.map((items) => (
                    <Link href={items.link} key={items.id} className='group'>
                      <div className='px-2 md:px-3 lg:px-4 py-2 md:py-3 rounded-lg border dark:border-gray-600 flex cursor-pointer hover:bg-gg-500 dark:hover:bg-gray-600  dark:text-gray-200 hover:border-transparent transition-all duration-300 ease-linear'>
                        <div className='w-1/3'>
                          <Image
                            className='w-10 h-10 md:w-12 md:h-12 object-cover rounded-lg dark:grayscale group-hover:grayscale-0 transition-all duration-300 ease-linear'
                            src={items.icon}
                            alt={items.name}
                            width={500}
                            height={500}
                          />
                        </div>
                        <div className='w-2/3 flex flex-col justify-center ml-4 text-left'>
                          <p className='font-semibold text-sm md:text-base font-content'>
                            {items.name}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-2 text-center'>
                  {TreatmentHeader.male.map((items) => (
                    <Link href={items.link} key={items.id} className='group'>
                      <div className='px-2 md:px-3 lg:px-4 py-2 md:py-3 rounded-lg border dark:border-gray-600 flex cursor-pointer hover:bg-gg-500 dark:hover:bg-gray-600  dark:text-gray-200 hover:border-transparent transition-all duration-300 ease-linear'>
                        <div className='w-1/3'>
                          <Image
                            className='w-10 h-10 md:w-12 md:h-12 object-cover rounded-lg dark:grayscale group-hover:grayscale-0 transition-all duration-300 ease-linear'
                            src={items.icon}
                            alt={items.name}
                            width={500}
                            height={500}
                          />
                        </div>
                        <div className='w-2/3 flex flex-col justify-center ml-4 text-left'>
                          <p className='font-semibold text-sm md:text-base font-content'>
                            {items.name}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-2 text-center'>
                  {TreatmentHeader.advanced.map((items) => (
                    <Link href={items.link} key={items.id} className='group'>
                      <div className='px-2 md:px-3 lg:px-4 py-2 md:py-3 rounded-lg border dark:border-gray-600 flex cursor-pointer hover:bg-gg-500 dark:hover:bg-gray-600  dark:text-gray-200 hover:border-transparent transition-all duration-300 ease-linear'>
                        <div className='w-1/3'>
                          <Image
                            className='w-10 h-10 md:w-12 md:h-12 object-cover rounded-lg dark:grayscale group-hover:grayscale-0 transition-all duration-300 ease-linear'
                            src={items.icon}
                            alt={items.name}
                            width={500}
                            height={500}
                          />
                        </div>
                        <div className='w-2/3 flex flex-col justify-center ml-4 text-left'>
                          <p className='font-semibold text-sm md:text-base font-content'>
                            {items.name}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
};

export default Treatments;
