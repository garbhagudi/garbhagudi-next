import React from 'react';
import Link from 'next/link';

const Related = () => {
  return (
    <div id='related'>
      <div className='max-w-7xl mx-auto pb-10 lg:pb-16'>
        <h3 className='text-3xl lg:text-4xl font-heading text-center font-bold py-10 lg:py-16 text-gray-800 dark:text-gray-200'>
          Related Searches
        </h3>
        <div className='flex items-center justify-center flex-wrap gap-3'>
          {keywords.map((items) => (
            <Link href={items.link} key={items.id}>
              <div>
                <div className='px-3 py-1.5 border dark:border-gray-500 bg-brandPurple2 dark:bg-gray-600 font-bold text-sm rounded-lg font-content hover:bg-brandPurpleDark hover:text-white transition-all duration-300 ease-in-out'>
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
