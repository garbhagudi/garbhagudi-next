import React from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { Transition } from '@headlessui/react';

const AccordionLayout = ({
  title,
  children,
  index,
  activeIndex,
  setActiveIndex,
}) => {
  const handleSetIndex = (index: any) => {
    activeIndex !== index && setActiveIndex(index);
  };

  return (
    <>
      <div
        onClick={() => handleSetIndex(index)}
        className={
          activeIndex === index
            ? `flex w-full justify-between items-center px-3 font-semibold sm:px-6 py-2 mt-3 rounded-t-lg hover:cursor-pointer transition-all duration-500 ease-in-out text-md xl:text-xl bg-gg-500 dark:bg-gg-400 text-gray-200 dark:text-gray-800 font-heading`
            : `flex w-full justify-between items-center px-3 font-medium sm:px-6 py-1 text-gray-800 dark:text-gray-200 hover:py-3 mt-3 hover:rounded-lg hover:cursor-pointer transition-all duration-500  ease-in-out text-md hover:bg-gg-400 sm:hover:text-lg xl:hover:text-xl border-gray-300 font-lexend`
        }
      >
        <div className='flex items-center justify-center'>
          <div className='mt-1'>{title}</div>
        </div>
        <div>
          {activeIndex === index ? (
            <HiChevronDown className='w-8 h-8 rotate-180 transition-all duration-500' />
          ) : (
            <HiChevronDown className='w-8 h-8 ' />
          )}
        </div>
      </div>
      <Transition
        show={true}
        enter='transition duration-300 ease-out'
        enterFrom='transform scale-95 opacity-0'
        enterTo='transform scale-100 opacity-100'
        leave='transition duration-100 ease-out'
        leaveFrom='transform scale-100 opacity-100'
        leaveTo='transform scale-95 opacity-0'
      >
        {activeIndex === index && (
          <div className='shadow-3xl rounded-b-lg p-4 font-lexend text-gray-800 dark:text-gray-200 border-2 border-gg-500 dark:border-gg-400'>
            {children}
          </div>
        )}
      </Transition>
    </>
  );
};

export default AccordionLayout;
