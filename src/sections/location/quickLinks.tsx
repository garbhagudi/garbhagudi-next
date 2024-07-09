import React from 'react';
import Link from 'next/link';
import { HiCheck } from 'react-icons/hi';

const QuickLinks = () => {
  return (
    <div className='mt-5 bg-brandPink5 px-3 dark:bg-gray-700'>
      <div className='mx-auto flex max-w-7xl flex-col items-start justify-evenly pb-10 pt-10 lg:flex-row'>
        <h2 className='lg:text-4qxl pb-6 font-heading text-3xl font-bold underline'>
          Our Other Branches
        </h2>
        <div className='grid grid-cols-1 gap-3 lg:grid-cols-2'>
          {Data.map((items) => (
            <div key={items.id}>
              <Link
                href={items.link}
                className='flex items-center font-content text-sm font-semibold hover:underline lg:text-base'
              >
                <HiCheck className='mr-2 h-6 w-6 rounded-full bg-green-700 stroke-2 p-1 text-white' />
                {items.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;

const Data = [
  {
    id: 2,
    title: 'Best IVF Centre in Hanumanthanagar',
    link: '/locations/hanumanthanagar',
  },
  {
    id: 3,
    title: 'Best IVF Centre in Kalyan Nagar',
    link: '/locations/kalyan-nagar',
  },
  {
    id: 4,
    title: 'Best IVF Centre in Jayanagar',
    link: '/locations/jayanagar',
  },
  {
    id: 5,
    title: 'Best IVF Centre in Electronic City',
    link: '/locations/electronic-city',
  },
  {
    id: 6,
    title: 'Best IVF Centre in Marathahalli',
    link: '/locations/marathahalli',
  },
];
