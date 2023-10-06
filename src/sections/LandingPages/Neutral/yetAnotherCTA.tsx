import MyModal from 'components/modal';
import React from 'react';

const YACta = () => {
  return (
    <div className='bg-gray-200 dark:bg-gray-600 px-3'>
      <div className='max-w-5xl mx-auto py-14'>
        <div className='flex items-center justify-between flex-col md:flex-row mx-auto'>
          <div className='font-content text-2xl lg:text-3xl text-gray-800 dark:text-gray-200'>
            Take the first step towards happiness <br /> with our IVF Packages
            starting from as low as{' '}
            <span className='inline-block md:block text-gg-500 dark:text-gg-400 font-bold'>
              {' '}
              ₹ 90,000/-
            </span>
            {/* <div className="text-sm mt-2">
              Hurry Up! Offer Valid only till March
            </div> */}
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
