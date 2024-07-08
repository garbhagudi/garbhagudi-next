import Image from 'next/image';
import React from 'react';
import Form from './form';
import offerBanner from 'assets/landing-page/Offer-Logo.png';

const Banner = () => {
  return (
    <div className=''>
      <div className='max-w-7xl mx-auto lg:px-6'>
        <div className='grid lg:grid-cols-2 pt-8 lg:pt-16'>
          <div className='flex items-end justify-center pb-6 lg:pb-0'>
            <Image
              src={offerBanner}
              alt='Banner Image'
              width={400}
              height={400}
              className='w-auto h-auto lg:max-h-[30rem]'
              priority
            />
          </div>
          <div className='flex items-center justify-center max-w-xl mx-auto'>
            <div className='flex items-center justify-center mx-auto flex-col text-center'>
              <h4 className='text-3xl lg:text-5xl font-lexend text-gg-500 font-bold'>
                Bengaluru's Most Trusted Fertility Center
              </h4>
              <p className='pt-4 font-lexend text-lg text-gray-900'>
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
