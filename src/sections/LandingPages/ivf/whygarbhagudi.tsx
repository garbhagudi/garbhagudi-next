import React from 'react';
import Image from 'next/image';

const WhyGarbhaGudi = () => {
  return (
    <>
      <div className='mx-auto max-w-7xl'>
        <div className='px-2 lg:px-4'>
          <h4 className='pb-8 pt-4 text-center font-lexend text-3xl font-bold text-gg-500 lg:py-8 lg:text-4xl'>
            Exceptional Success Rates from Personalized Treatment
          </h4>
          <Image
            src={
              'https://app.unbounce.com/publish/assets/8d8c21e9-63f6-477c-a9dd-43a22874f63c/f4e35d03-5c9e-4fdd-a2b3-c155acc599df-2022-web-banner-3-kuhr4g.webp'
            }
            alt='Award Image'
            width={1920}
            height={500}
            className='rounded-lg'
          />
          <div className='mt-6 grid grid-cols-1 space-x-3 font-lexend lg:grid-cols-3'>
            <div className='space-y-3 py-3 lg:py-8'>
              <h5 className='text-center text-xl font-bold text-gg-500'>
                Individualized Treatment Plans
              </h5>
              <p className='text-center font-light'>
                We specialize in personalized IVF treatment, tailoring plans for each patient's
                unique needs. Our experienced team uses cutting-edge techniques, resulting in
                enhanced success rates.
              </p>
            </div>
            <div className='space-y-3 py-3 lg:py-8'>
              <h5 className='text-center text-xl font-bold text-gg-500'>
                Reproductive Medicine Proficiency
              </h5>
              <p className='text-center font-light'>
                Our success in personalized treatment is driven by a specialized team staying
                updated on advancements. We apply tailored cutting-edge techniques for optimal
                outcomes.
              </p>
            </div>
            <div className='space-y-3 py-3 lg:py-8'>
              <h5 className='text-center text-xl font-bold text-gg-500'>
                Holistic Patient Support
              </h5>
              <p className='text-center font-light'>
                Holistic care is our priority, addressing both physical and emotional well-being.
                Our support services, including counseling, contribute to a nurturing environment
                for overall treatment success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyGarbhaGudi;
