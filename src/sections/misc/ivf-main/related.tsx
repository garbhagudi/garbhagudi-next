import React from 'react';
import Link from 'next/link';

const Related = () => {
  return (
    <div id='related'>
      <div className='mx-auto max-w-7xl pb-10 lg:pb-16'>
        <h3 className='py-10 text-center font-heading text-3xl font-bold text-gray-800 dark:text-gray-200 lg:py-16 lg:text-4xl'>
          Related Searches
        </h3>
        <div className='flex flex-wrap items-center justify-center gap-3'>
          {keywords.map((items) => (
            <Link href={items.link} key={items.id}>
              <div>
                <div className='rounded-lg border bg-brandPurple2 px-3 py-1.5 font-content text-sm font-bold transition-all duration-300 ease-in-out hover:bg-brandPurpleDark hover:text-white dark:border-gray-500 dark:bg-gray-600'>
                  <div className=''>{items.word}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Related;

const keywords = [
  {
    id: 1,
    word: 'IVF Centre In Bangalore',
    link: '/',
  },
  {
    id: 2,
    word: 'Best IVF Centre In Bangalore',
    link: '/',
  },
  {
    id: 3,
    word: 'IVF Hospital In Bangalore',
    link: '/',
  },
  {
    id: 4,
    word: 'IVF Cost In Bangalore',
    link: '/treatments/ivf-treatment-cost-in-bangalore',
  },
  {
    id: 5,
    word: 'IVF Treatment Cost In Bangalore',
    link: '/treatments/ivf-treatment-cost-in-bangalore',
  },
  {
    id: 6,
    word: 'IVF Treatment In Bangalore',
    link: '/treatments/in-vitro-fertilization-ivf',
  },
  {
    id: 7,
    word: 'Best IVF Treatment In Bangalore',
    link: '/treatments/in-vitro-fertilization-ivf',
  },
];
