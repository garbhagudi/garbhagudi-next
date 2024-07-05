import React from 'react';
import Image from 'next/image';
import offerBanner from 'assets/landing-page/Offer-Logo.png';
import Form from './form';

const Offer = () => {
  return (
    <section className="flex flex-wrap">
                    {/* Background Image Section */}
                    <div className="w-full mx-auto md:w-3/5 bg-cover object-cover bg-center h-100">
                       <Image src={offerBanner}
                          alt='Banner Image'
                          width={500}
                          height={500}
                          className='h-auto mx-auto w-auto lg:max-h-[30rem]'
                          priority />
                    </div>

                    {/* Form Section */}
                    <div className="w-full md:w-2/5 p-4 flex items-center flex-col justify-center">
                            <h2 className="font-lexend text-3xl text-center font-bold text-gg-500 lg:text-5xl">Bengaluru's Most Trusted Fertility Center</h2>
                            <p className='pt-4 font-lexend text-lg text-gray-900'>
                                GarbhaGudi IVF Centre has been awarded as the Best IVF &
                                Fertility Centre in Bangalore by multiple organizations.
                            </p>
                        <Form/>
                    </div>
                </section>
  );
};

export default Offer;
