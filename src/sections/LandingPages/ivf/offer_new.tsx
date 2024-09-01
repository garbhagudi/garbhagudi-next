import React from 'react';
import Image from 'next/image';
import Form from './form';

const Offer = () => {
  return (
    <section className='flex flex-wrap'>
      {/* Background Image Section */}
      <div className='h-100 mx-auto w-full bg-cover bg-center object-cover md:w-1/2'>
        <Image
          src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1725183349/Ads%20and%20offers/Web_Banner-min_rgm3ts.webp'
          alt='Banner Image'
          width={400}
          height={400}
          className='mx-auto h-full w-full'
          priority
        />
      </div>

      {/* Form Section */}
      <div className='flex w-full flex-col items-center justify-center p-4 md:w-1/2'>
        <h2 className='text-center font-lexend text-3xl font-bold text-gg-500 lg:text-5xl'>
          Bengaluru's Most Trusted Fertility Center
        </h2>
        <p className='text-l py-2 text-center font-lexend text-gray-700'>
          GarbhaGudi IVF Centre has been awarded as the Best IVF & Fertility
          Centre in Bangalore by multiple organizations.
        </p>
        <div className='rounded-lg bg-[#005E7E]'>
          <h2 className='my-3 overflow-hidden rounded-lg text-center font-lexend text-xl font-bold text-white'>
            Talk To Our Fertility Experts Today
          </h2>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Offer;
