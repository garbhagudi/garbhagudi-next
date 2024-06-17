import Image from 'next/image';
import React from 'react';
import { FaPercent, FaUserDoctor, FaMap, FaCircleCheck } from 'react-icons/fa6';

const WhyGarbhaGudi = () => {
  return (
    <div>
      <div className='max-w-7xl mx-auto'>
        <div className='grid lg:grid-cols-2 gap-4 mx-auto px-2 py-4'>
          <div className='flex items-center justify-center flex-col'>
            <h4 className='pt-4 pb-8 lg:py-8 text-3xl lg:text-4xl font-lexend font-bold text-gg-500'>
              What makes GarbhaGudi the perfect choice for you?
            </h4>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 px-2 font-lexend text-sm'>
              <div className='flex items-center justify-start space-y-8 flex-col'>
                <FaPercent className='text-5xl text-brandPurpleDark dark:text-gg-500' />
                <p className='leading-relaxed'>
                  Industry-Leading 75% IVF Success Rates: We take pride in our
                  exceptional success rates, standing out as the best in the
                  industry. Our commitment to excellence ensures a higher
                  likelihood of successful outcomes for our patients.
                </p>
              </div>
              <div className='flex items-center justify-start space-y-8 flex-col'>
                <FaUserDoctor className='text-5xl text-brandPurpleDark dark:text-gg-500' />
                <p className='leading-relaxed'>
                  15+ Years of Experience: Our fertility doctors bring over 15
                  years of extensive expertise, ensuring that you receive care
                  from seasoned professionals dedicated to your success.
                </p>
              </div>
              <div className='flex items-center justify-start space-y-8 flex-col'>
                <FaMap className='text-5xl text-brandPurpleDark dark:text-gg-500' />
                <p className='leading-relaxed'>
                  7 Convenient IVF Centers Across Bangalore: With a widespread
                  presence, we provide accessibility and convenience for
                  individuals seeking fertility treatments, making quality care
                  readily available.
                </p>
              </div>
              <div className='flex items-center justify-start space-y-8 flex-col'>
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
              src={
                'https://app.unbounce.com/publish/assets/be830eee-eb3b-418b-9f9a-cea061d019a6/e4dc705c-eb81-468d-8133-f0fd3a698b90-f329d4d8-0968-4247-8657-3fdcd92ace1c-web-changes-2-c-min-original.webp'
              }
              alt='Why GarbhaGudi Image'
              width={500}
              height={500}
              className='rounded-lg'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyGarbhaGudi;
