import React from 'react';
import { useState , useEffect , useRef } from 'react';
import Image from 'next/image';
import offerBanner from 'assets/landing-page/Offer-Logo.png';
import Form from './form';

const Offer = () => {
  return (
    <section className="flex flex-wrap">
                    {/* Background Image Section */}
                    <div className="w-full mx-auto md:w-1/2 bg-cover object-cover bg-center h-100">
                       <Image src={offerBanner}
                          alt='Banner Image'
                          width={400}
                          height={400}
                          className='mx-auto lg:max-h-[30rem]'
                          priority />
                    </div>

                    {/* Form Section */}
                    <div className="w-full md:w-1/2 p-4 flex items-center flex-col justify-center">
                            <h2 className="font-lexend text-3xl text-center font-bold text-gg-500 lg:text-5xl">Bengaluru's Most Trusted Fertility Center</h2>
                            <p className='pt-2 font-lexend text-l text-gray-700 text-center'>
                                GarbhaGudi IVF Centre has been awarded as the Best IVF &
                                Fertility Centre in Bangalore by multiple organizations.
                            </p>
                            <div className='bg-[#005E7E] p-3'>
                            <h2 className='text-white mt-1 text-center text-xl font-bold font-lexend'>Talk To Our Fertility Experts Today</h2>
                            <div className='flex flex-col px-5 pt-4 mb-10 mt-5 w-full'>
                              <input type="text" placeholder='Full Name' className='rounded border border-gg-500 mt-5 py-1 px-4' />
                              <input type="text" placeholder='Phone' className='rounded border border-gg-500 mt-5  py-1 px-4' />
                              <input type="text" placeholder='Email' className='rounded border border-gg-500 mt-5  py-1 px-4' />
                              <button className='bg-gg-500 font-lexend px-3 py-2 mt-5 w-1/2 mx-auto text-white rounded'> Submit </button>
                            </div>
                            </div>
                    </div>
                </section>
  );
};

export default Offer;
