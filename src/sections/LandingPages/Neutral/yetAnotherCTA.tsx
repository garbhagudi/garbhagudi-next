import MyModal from 'components/modal';
import React from 'react';

const YACta = () => {
  return (
    <div className='bg-gray-200 px-3 dark:bg-gray-600'>
      <div className='mx-auto max-w-5xl py-14'>
        <div className='mx-auto flex flex-col items-center justify-between md:flex-row'>
          <div className='font-content text-2xl text-gray-800 dark:text-gray-200 lg:text-3xl'>
            Take the first step towards happiness <br /> with our IVF Packages starting from as low
            as{' '}
            <span className='inline-block font-bold text-gg-500 dark:text-gg-400 md:block'>
              {' '}
              ₹ 90,000/-
            </span>
          </div>
          <MyModal
            title={'Book a Free Consultation'}
            clnm={
              'px-3 py-2 bg-brandPink dark:bg-gray-700 rounded-lg text-white hover:bg-gg-400 dark:hover:bg-gg-400 text-lg font-content font-semibold mt-6 md:mt-0'
            }
          />
        </div>
      </div>
    </div>
  );
};

export default YACta;
