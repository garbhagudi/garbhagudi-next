import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Steps = () => {
  return (
    <div
      className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-7xl md:px-24 lg:px-8 lg:py-24'
      id='how-to'
    >
      <h3 className='text-3xl lg:text-4xl font-heading font-bold text-center mb-14 text-gray-800 dark:text-gray-200'>
        How to Avail the Paripoorna Benefit
      </h3>
      <div className='flex items-center justify-center flex-col lg:flex-row gap-3'>
        <div className='grid lg:grid-cols-2 gap-2 w-full md:w-7/12 font-lexend'>
          <div className='rounded lg:p-5 lg:transition lg:duration-300 hover:bg-green-50 group p-3 md:p-2'>
            <div className='flex items-center mb-1'>
              <span className='flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-white rounded bg-green-500'>
                1
              </span>
              <p className='font-lexend text-base text-gray-800 dark:text-gray-200 dark:group-hover:text-gray-800'>
                Visit your nearest GG branch 📍
              </p>
            </div>
            <p className='text-sm text-gray-800 dark:text-gray-200 dark:group-hover:text-gray-800'>
              Embark on your fertility journey by stepping into our warm and
              welcoming GarbhaGudi branch. Our state-of-the-art facilities are
              designed to provide you with the utmost care and comfort from the
              moment you walk through our doors.
            </p>
          </div>
          <div className='rounded lg:p-5 lg:transition lg:duration-300 hover:bg-purple-50 group p-5 md:p-2'>
            <div className='flex items-center mb-1'>
              <span className='flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-white rounded bg-purple-500'>
                2
              </span>
              <p className='font-lexend text-base text-gray-800 dark:text-gray-200 dark:group-hover:text-gray-800'>
                Consult the doctor 🌟
              </p>
            </div>
            <p className='text-sm text-gray-800 dark:text-gray-200 dark:group-hover:text-gray-800'>
              Meet our experienced and compassionate fertility experts who are
              dedicated to understanding your unique needs. Our doctors will
              guide you through personalized fertility solutions, ensuring you
              receive the care that suits your individual journey.
            </p>
          </div>
          <div className='rounded lg:p-5 lg:transition lg:duration-300 hover:bg-pink-50 group p-5 md:p-2'>
            <div className='flex items-center mb-1'>
              <span className='flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-white rounded bg-brandPink'>
                3
              </span>
              <p className='font-lexend text-base text-gray-800 dark:text-gray-200 dark:group-hover:text-gray-800'>
                Speak to the financial counsellor 💬
              </p>
            </div>
            <p className='text-sm text-gray-800 dark:text-gray-200 dark:group-hover:text-gray-800'>
              Navigating the financial aspects of fertility treatment can be
              stress-free with GarbhaGudi. Our dedicated financial counsellors
              are here to assist you, offering transparent and tailored
              solutions to make your path to parenthood as smooth as possible.
            </p>
          </div>
          <div className='rounded lg:p-5 lg:transition lg:duration-300 hover:bg-yellow-50 group p-5 md:p-2'>
            <div className='flex items-center mb-1'>
              <span className='flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-white rounded bg-yellow-500'>
                4
              </span>
              <p className='font-lexend text-base text-gray-800 dark:text-gray-200 dark:group-hover:text-gray-800'>
                Sit back and relax 🌈
              </p>
            </div>
            <p className='text-sm text-gray-800 dark:text-gray-200 dark:group-hover:text-gray-800'>
              Once you've taken the initial steps, it's time to sit back and
              relax. Trust in GarbhaGudi's expertise to handle the rest. Our
              team is committed to providing you with unparalleled support,
              allowing you to focus on the excitement of building your family.
            </p>
          </div>
        </div>
        <div className='w-full md:w-5/12 flex items-center justify-center'>
          <Image
            className='inset-0 object-cover object-bottom w-full rounded shadow-lg '
            width={1024}
            height={1024}
            src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1700052783/paripoorna/mother-with-daughter-lie-bed-dog-looking-them-min_uecuvg.webp'
            alt='couple with baby picture'
          />
        </div>
      </div>
    </div>
  );
};

export default Steps;
