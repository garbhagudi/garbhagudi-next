import React from 'react';
import Image from 'next/image';

const Steps = () => {
  return (
    <div
      className='mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-7xl lg:px-8 lg:py-24'
      id='how-to'
    >
      <h3 className='mb-14 text-center font-heading text-3xl font-bold text-gray-800 dark:text-gray-200 lg:text-4xl'>
        How to Avail the Paripoorna Benefit
      </h3>
      <div className='flex flex-col items-center justify-center gap-3 lg:flex-row'>
        <div className='grid w-full gap-2 font-lexend md:w-7/12 lg:grid-cols-2'>
          <div className='group rounded p-3 hover:bg-green-50 md:p-2 lg:p-5 lg:transition lg:duration-300'>
            <div className='mb-1 flex items-center'>
              <span className='mr-2 flex h-4 w-4 items-center justify-center rounded bg-green-500 text-xs font-medium text-white'>
                1
              </span>
              <p className='font-lexend text-base text-gray-800 dark:text-gray-200 dark:group-hover:text-gray-800'>
                Visit your nearest GG branch 📍
              </p>
            </div>
            <p className='text-sm text-gray-800 dark:text-gray-200 dark:group-hover:text-gray-800'>
              Embark on your fertility journey by stepping into our warm and welcoming GarbhaGudi
              branch. Our state-of-the-art facilities are designed to provide you with the utmost
              care and comfort from the moment you walk through our doors.
            </p>
          </div>
          <div className='group rounded p-5 hover:bg-purple-50 md:p-2 lg:p-5 lg:transition lg:duration-300'>
            <div className='mb-1 flex items-center'>
              <span className='mr-2 flex h-4 w-4 items-center justify-center rounded bg-purple-500 text-xs font-medium text-white'>
                2
              </span>
              <p className='font-lexend text-base text-gray-800 dark:text-gray-200 dark:group-hover:text-gray-800'>
                Consult the doctor 🌟
              </p>
            </div>
            <p className='text-sm text-gray-800 dark:text-gray-200 dark:group-hover:text-gray-800'>
              Meet our experienced and compassionate fertility experts who are dedicated to
              understanding your unique needs. Our doctors will guide you through personalized
              fertility solutions, ensuring you receive the care that suits your individual journey.
            </p>
          </div>
          <div className='group rounded p-5 hover:bg-pink-50 md:p-2 lg:p-5 lg:transition lg:duration-300'>
            <div className='mb-1 flex items-center'>
              <span className='mr-2 flex h-4 w-4 items-center justify-center rounded bg-brandPink text-xs font-medium text-white'>
                3
              </span>
              <p className='font-lexend text-base text-gray-800 dark:text-gray-200 dark:group-hover:text-gray-800'>
                Speak to the financial counsellor 💬
              </p>
            </div>
            <p className='text-sm text-gray-800 dark:text-gray-200 dark:group-hover:text-gray-800'>
              Navigating the financial aspects of fertility treatment can be stress-free with
              GarbhaGudi. Our dedicated financial counsellors are here to assist you, offering
              transparent and tailored solutions to make your path to parenthood as smooth as
              possible.
            </p>
          </div>
          <div className='group rounded p-5 hover:bg-yellow-50 md:p-2 lg:p-5 lg:transition lg:duration-300'>
            <div className='mb-1 flex items-center'>
              <span className='mr-2 flex h-4 w-4 items-center justify-center rounded bg-yellow-500 text-xs font-medium text-white'>
                4
              </span>
              <p className='font-lexend text-base text-gray-800 dark:text-gray-200 dark:group-hover:text-gray-800'>
                Sit back and relax 🌈
              </p>
            </div>
            <p className='text-sm text-gray-800 dark:text-gray-200 dark:group-hover:text-gray-800'>
              Once you've taken the initial steps, it's time to sit back and relax. Trust in
              GarbhaGudi's expertise to handle the rest. Our team is committed to providing you with
              unparalleled support, allowing you to focus on the excitement of building your family.
            </p>
          </div>
        </div>
        <div className='flex w-full items-center justify-center md:w-5/12'>
          <Image
            className='inset-0 w-full rounded object-cover object-bottom shadow-lg'
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
