import Image from 'next/image';
import React from 'react';
import Form from './form';

const Banner = () => {
  return (
    <div className='bg-red-950'>
      <div className='max-w-7xl mx-auto lg:px-6'>
        <div className='grid lg:grid-cols-2 pt-8 lg:pt-16'>
          <div className='flex items-end justify-center pb-6 lg:pb-0'>
            <Image
              src={
                'https://app.unbounce.com/publish/assets/0d08e309-5ea8-4613-aa25-a277f6c9e193/31847cf6-4649-47d0-861b-eef22a15c2b3-web-b.original.webp'
              }
              alt='Banner Image'
              width={500}
              height={500}
              className='w-screen max-w-xl lg:max-w-2xl h-screen max-h-[22rem] lg:max-h-[30rem]'
            />
          </div>
          <div className='flex items-center justify-center max-w-xl mx-auto'>
            <div className='flex items-center justify-center mx-auto flex-col text-center'>
              <h4 className='text-3xl lg:text-5xl font-lexend text-gg-500 font-bold'>
                Bengaluru's Most Trusted Fertility Center
              </h4>
              <p className='pt-4 font-lexend text-lg text-white'>
                GarbhaGudi IVF Centre has been awarded as the Best IVF &
                Fertility Centre in Bangalore by multiple organizations.
              </p>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
