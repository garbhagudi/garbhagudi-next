import React from 'react';
import Image from 'next/image';

/* Landing-page behaviour: centre clicks convert to the on-page lead form
 * (#form) instead of navigating away to /locations/[slug]. */
const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  document.getElementById('form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const Branch = ({ branches }) => {
  return (
    <div>
      <h1 className='pt-12 text-center font-heading text-3xl font-bold text-gray-800 dark:text-gray-200 lg:pt-16 lg:text-4xl'>
        Our Branches
      </h1>
      <div className='mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 py-10 lg:py-16'>
        {branches?.map((items) => (
          <a
            href='#form'
            onClick={scrollToForm}
            key={items?.id}
            className='rounded-xl transition-all duration-150 hover:shadow-2xl'
          >
            <div className='mx-auto flex w-72 flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-gg-500 dark:border-gray-600'>
              {/* Fixed-size frame + object-cover keeps every centre image the same shape */}
              <div className='relative h-44 w-full overflow-hidden'>
                <Image
                  src={items?.branchPicture?.url}
                  alt={items?.title}
                  fill
                  sizes='288px'
                  className='object-cover'
                  loading='lazy'
                />
              </div>
              <div className='flex w-full items-center justify-evenly border-t-2 border-gg-500 px-3 py-3 dark:border-gray-600'>
                <div className='ml-4 font-heading text-xl font-bold text-gray-800 dark:text-gray-200'>
                  {items?.title}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Branch;
