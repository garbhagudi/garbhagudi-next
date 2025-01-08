import React from 'react';
import Image from 'next/image';

export default function Content() {
  return (
    <div className='mx-auto mt-10 flex w-full flex-col items-center justify-center font-nunito-Sans md:mb-10 md:mt-20'>
      <div className='w-10/12 py-3 text-center text-2xl font-extrabold text-[#1D1D1D] dark:text-white md:w-full md:py-6 md:text-4xl'>
        Understanding Egg Freezing: A Modern Option for Future Planning
      </div>
      <div className='mx-auto w-9/12 text-center text-lg font-normal text-[#1D1D1D] opacity-70 dark:text-white'>
        Egg freezing, also known as oocyte cryopreservation, is a medical process that allows women
        to preserve healthy eggs for potential future use. With advancements in reproductive
        technology, this method has become a reliable and empowering option for those who wish to
        delay family planning.
      </div>

      <div className='w-10/12 md:w-8/12'>
        <div className='relative my-5 h-[180px] lg:my-16 lg:h-[350px]'>
          <Image
            src={
              'https://res.cloudinary.com/garbhagudiivf/image/upload/v1731567196/eggFreezing/ld50vuhzlttzu1pzikx8.png'
            }
            alt='eggFreezing image 1'
            width={100}
            height={100}
            loading='lazy'
            className='absolute inset-0 w-full'
          />

          {/* Second Image (middle layer) */}
          <Image
            src={
              'https://res.cloudinary.com/garbhagudiivf/image/upload/v1731567197/eggFreezing/da3109fxnfronek7kcxo.png'
            }
            alt='eggFreezing image 2'
            width={100}
            height={100}
            loading='lazy'
            className='absolute inset-0 w-full'
          />

          {/* Third Image (top layer) */}
          <Image
            src={
              'https://res.cloudinary.com/garbhagudiivf/image/upload/v1731567197/eggFreezing/scmqnfg4rnjfnfmjtibw.png'
            }
            alt='eggFreezing image 3'
            width={100}
            height={100}
            loading='lazy'
            className='absolute inset-0 mx-auto mt-4 w-[90%]'
          />
        </div>
      </div>
    </div>
  );
}
