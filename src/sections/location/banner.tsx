import React from 'react';
import Link from 'next/link';

const Banner = ({ branchTitle }) => {
  return (
    <div>
      <div className='bg-[url(https://res.cloudinary.com/garbhagudiivf/image/upload/v1672381537/Misc/happy-pregnant-woman-late-pregnancy-stage-sitting-grass-lawn-min_11zon_xkeac0.webp)] bg-cover bg-right sm:bg-center bg-no-repeat shadow-2xl'>
        <div className='w-full h-full bg-gradient-to-r from-white dark:from-gray-800 to-transparent dark:to-gray-800/10 py-6'>
          <div className='h-[50vh] mx-auto max-w-5xl flex items-center'>
            <div className='absolute z-10'>
              <div className='text-center md:text-left w-full md:max-w-lg text-base px-3 mx-auto text-gray-800 dark:text-gray-200'>
                <span className='text-3xl lg:text-4xl font-heading font-bold leading-tight'>
                  Welcome to GarbhaGudi{' '}
                </span>
                <h1 className='text-3xl lg:text-4xl font-heading font-bold leading-tight'>
                  {' '}
                  IVF Centre
                  {branchTitle && (
                    <span className='text-brandPink'> in {branchTitle}</span>
                  )}
                </h1>
                <h3 className='mt-4 font-semibold font-content leading-7 text-gray-800 dark:text-gray-200'>
                  We are proud to offer infertility treatment at 6 locations
                  across Bangalore. <br />
                  Please contact us today to learn more about our services and
                  find the location nearest you.
                </h3>
              </div>
              <div className='lg:text-left lg:px-3 text-center'>
                <button className='px-4 mt-4 font-content font-semibold text-white py-2 bg-gg-500 dark:bg-gray-500 hover:bg-gg-400 dark:hover:bg-gg-400 rounded-lg'>
                  <Link href={'/gg-care'}>Contact Us</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
