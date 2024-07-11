import Image from 'next/image';
import React from 'react';
import { FaPercent, FaUserDoctor, FaMap, FaCircleCheck } from 'react-icons/fa6';
import WhyGarbhagudi from 'assets/landing-page/why-garbhagudi.webp';

const WhyGarbhaGudi = () => {
  return (
    <>
      <div className='mx-auto max-w-7xl'>
        <div className='mx-auto grid gap-4 px-2 py-4 lg:grid-cols-2'>
          <div className='flex flex-col items-center justify-center'>
            <h4 className='pb-8 pt-4 font-lexend text-3xl font-bold text-gg-500 lg:py-8 lg:text-4xl'>
              What makes GarbhaGudi the perfect choice for you?
            </h4>
            <div className='grid grid-cols-1 gap-8 px-2 font-lexend text-sm lg:grid-cols-2'>
              <div className='flex flex-col items-center justify-start space-y-8'>
                <FaPercent className='text-5xl text-brandPurpleDark dark:text-gg-500' />
                <p className='leading-relaxed'>
                  Industry-Leading 75% IVF Success Rates: We take pride in our
                  exceptional success rates, standing out as the best in the
                  industry. Our commitment to excellence ensures a higher
                  likelihood of successful outcomes for our patients.
                </p>
              </div>
              <div className='flex flex-col items-center justify-start space-y-8'>
                <FaUserDoctor className='text-5xl text-brandPurpleDark dark:text-gg-500' />
                <p className='leading-relaxed'>
                  15+ Years of Experience: Our fertility doctors bring over 15
                  years of extensive expertise, ensuring that you receive care
                  from seasoned professionals dedicated to your success.
                </p>
              </div>
              <div className='flex flex-col items-center justify-start space-y-8'>
                <FaMap className='text-5xl text-brandPurpleDark dark:text-gg-500' />
                <p className='leading-relaxed'>
                  7 Convenient IVF Centers Across Bangalore: With a widespread
                  presence, we provide accessibility and convenience for
                  individuals seeking fertility treatments, making quality care
                  readily available.
                </p>
              </div>
              <div className='flex flex-col items-center justify-start space-y-8'>
                <FaCircleCheck className='text-5xl text-brandPurpleDark dark:text-gg-500' />
                <p className='leading-relaxed'>
                  Over 10,000 Successful IVF Cases: Demonstrating a proven track
                  record of achieving positive outcomes and fulfilling the
                  dreams of numerous families.
                </p>
              </div>
            </div>
          </div>
          <div className='mx-auto'>
            <Image
              src={WhyGarbhagudi}
              alt='Why GarbhaGudi Image'
              width={500}
              height={500}
              className='rounded-lg'
              fetchPriority='low'
              loading='lazy'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyGarbhaGudi;
