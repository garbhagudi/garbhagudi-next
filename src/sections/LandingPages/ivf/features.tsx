import React from 'react';
import Image from 'next/image';
import WhyGarbhagudi from 'assets/landing-page/why-garbhagudi.webp';
import { FaPercent, FaUserDoctor, FaMap, FaCircleCheck } from 'react-icons/fa6';

const Features = () => {
  return (
    <>
      <section className='mt-8'>
        <div className='mx-4 text-center md:mx-auto'>
          <h1 className='text-2xl font-bold text-gg-500 md:text-4xl'>
            What makes GarbhaGudi the perfect choice for you?
          </h1>
        </div>
      </section>
      <section>
        <div className='my-10 flex flex-col items-center justify-center px-5 md:px-20'>
          <div className='flex w-full max-w-5xl flex-col items-center justify-between md:flex-row'>
            <div className='flex flex-col space-y-5 text-center md:w-1/3 md:text-left'>
              <div className='mr-5 flex flex-col items-center'>
                <FaPercent className='text-5xl text-brandPurpleDark dark:text-gg-500' />
                <p className='text-l font-semibold'>
                  Industry-Leading 75% IVF Success Rates: We take pride in our exceptional success
                  rates, standing out as the best in the industry. Our commitment to excellence
                  ensures a higher likelihood of successful outcomes for our patients.
                </p>
              </div>
              <div className='mr-5 flex flex-col items-center pt-4'>
                <FaUserDoctor className='text-5xl text-brandPurpleDark dark:text-gg-500' />
                <p className='text-lg font-semibold'>
                  {' '}
                  15+ Years of Experience: Our fertility doctors bring over 15 years of extensive
                  expertise, ensuring that you receive care from seasoned professionals dedicated to
                  your success.
                </p>
              </div>
            </div>

            <div className='my-5 flex justify-center md:my-0 md:w-1/3'>
              <Image
                height={350}
                width={350}
                src={WhyGarbhagudi}
                alt='Water Purifier'
                className='max-w-full rounded-lg'
              />
            </div>

            <div className='flex flex-col space-y-5 text-center md:w-1/3 md:text-left'>
              <div className='ml-5 flex flex-col items-center'>
                <FaMap className='text-5xl text-brandPurpleDark dark:text-gg-500' />
                <p className='text-lg font-semibold'>
                  {' '}
                  7 Convenient IVF Centers Across Bangalore: With a widespread presence, we provide
                  accessibility and convenience for individuals seeking fertility treatments, making
                  quality care readily available.
                </p>
              </div>
              <div className='ml-5 flex flex-col items-center pt-4'>
                <FaCircleCheck className='text-5xl text-brandPurpleDark dark:text-gg-500' />
                <p className='text-lg font-semibold'>
                  Over 10,000 Successful IVF Cases: Demonstrating a proven track record of achieving
                  positive outcomes and fulfilling the dreams of numerous families.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
