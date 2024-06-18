import Image from 'next/image';
import React from 'react';

const Award = () => {
  return (
    <>
      <div className='max-w-7xl mx-auto'>
        <div className='px-2 lg:px-4'>
          <h4 className='pt-4 pb-8 lg:py-8 text-3xl lg:text-4xl font-lexend font-bold text-gg-500 text-center'>
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
          <div className='grid grid-cols-1 lg:grid-cols-3 space-x-3 font-lexend mt-6'>
            <div className='py-3 lg:py-8 space-y-3'>
              <h5 className='text-xl font-bold text-gg-500 text-center'>
                Individualized Treatment Plans
              </h5>
              <p className='font-light text-center'>
                We specialize in personalized IVF treatment, tailoring plans for
                each patient's unique needs. Our experienced team uses
                cutting-edge techniques, resulting in enhanced success rates.
              </p>
            </div>
            <div className='py-3 lg:py-8 space-y-3'>
              <h5 className='text-xl font-bold text-gg-500 text-center'>
                Reproductive Medicine Proficiency
              </h5>
              <p className='font-light text-center'>
                Our success in personalized treatment is driven by a specialized
                team staying updated on advancements. We apply tailored
                cutting-edge techniques for optimal outcomes.
              </p>
            </div>
            <div className='py-3 lg:py-8 space-y-3'>
              <h5 className='text-xl font-bold text-gg-500 text-center'>
                Holistic Patient Support
              </h5>
              <p className='font-light text-center'>
                Holistic care is our priority, addressing both physical and
                emotional well-being. Our support services, including
                counseling, contribute to a nurturing environment for overall
                treatment success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Award;
