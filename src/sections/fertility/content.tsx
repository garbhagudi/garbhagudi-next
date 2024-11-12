import React from 'react';
import Image from 'next/image';
import imag from '../../assets/union-page/Union.png';
import imag1 from '../../assets/union-page/Union-1.png';
import imag2 from '../../assets/union-page/Union-2.png';

export default function Content() {
  return (
    <div className='mx-auto my-10 flex w-full flex-col items-center justify-center font-nunito-Sans '>
      <div className='py-6 text-4xl font-extrabold text-[#1D1D1D] text-center dark:text-white'>
        Understanding Egg Freezing: A Modern Option for Future Planning
      </div>
      <div className='mx-auto w-9/12 text-center text-lg font-normal text-[#1D1D1D] opacity-70 dark:text-white'>
        Egg freezing, also known as oocyte cryopreservation, is a medical
        process that allows women to preserve healthy eggs for potential future
        use. With advancements in reproductive technology, this method has
        become a reliable and empowering option for those who wish to delay
        family planning.
      </div>

      <div className='w-8/12'>
        <div className='relative my-16 h-[350px]'>
          <Image
            src={imag1}
            alt='Image 1'
            loading='lazy'
            className='absolute inset-0 w-full'
          />

          {/* Second Image (middle layer) */}
          <Image
            src={imag}
            alt='Image 2'
            loading='lazy'
            className='absolute inset-0'
          />

          {/* Third Image (top layer) */}
          <Image
            src={imag2}
            alt='Image 3'
            loading='lazy'
            className='absolute inset-0 mx-auto mt-4 w-[90%]'
          />
        </div>
      </div>
    </div>
  );
}
