import MyModal from 'components/modal';
import React from 'react';
import { HiChevronRight } from 'react-icons/hi';

const Stage = () => {
  return (
    <div>
      <div className='mx-auto max-w-7xl'>
        <div className='my-6 text-center font-heading text-xl font-bold text-gray-800 dark:text-gray-200 lg:py-10 lg:text-2xl'>
          How would you describe your situation ?
        </div>
        <div className='mx-auto mt-6 flex flex-wrap items-center justify-center gap-4 pb-10 sm:mt-0 md:flex-row'>
          {Data.map((items) => (
            <div
              key={items.id}
              className='h-32 w-36 rounded-lg rounded-bl-[4rem] bg-gg-200 px-3 transition-all duration-200 hover:scale-110 dark:bg-gray-600'
            >
              <div className='mx-auto mt-3 flex h-6 w-6 items-center justify-center rounded-full bg-gg-400 font-content text-xs font-bold text-white dark:bg-gray-800'>
                {items.id}
              </div>
              <MyModal
                title={items.title}
                clnm={
                  'flex items-center justify-center py-2 text-sm font-content text-brandPurpleDark dark:text-gray-200 font-semibold mt-2'
                }
              />
              <div className='flex items-center justify-center text-brandPurpleDark dark:text-gray-200'>
                <HiChevronRight />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stage;

const Data = [
  {
    id: '1',
    title: "I'm Trying to Conceive",
  },
  {
    id: '2',
    title: 'Having Problems Conceiving',
  },
  {
    id: '3',
    title: 'I’m Facing Infertility Issues',
  },
  {
    id: '4',
    title: 'Understand Treatment Options',
  },
  {
    id: '5',
    title: 'I Had Failed IVF Cycles in the Past',
  },
];
