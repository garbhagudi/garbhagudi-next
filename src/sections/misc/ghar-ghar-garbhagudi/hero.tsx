import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className='mb-10'>
      <div
        className='bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/garbhagudiivf/image/upload/v1691234829/Misc/young-wife-husband-have-problems-family-life-min_csilul.webp")',
        }}
      >
        <div className='h-full bg-black bg-opacity-50 py-16 text-gray-200 lg:py-40'>
          <div className='mx-auto max-w-7xl font-content'>
            <div className='max-w-3xl space-y-4 rounded-lg bg-gray-950 bg-opacity-20 px-4 py-6 sm:px-6 lg:px-8'>
              <h1 className='font-lexend text-3xl'>
                Every couple deserves to experience the joy of parenthood and
                with{' '}
                <span className='font-bold text-brandPink'>
                  Ghar Ghar Garbhagudi
                </span>{' '}
                we are making it possible for everyone.
              </h1>
              <div className='space-y-3 text-xl'>
                <div className='flex'>
                  <div className='rounded-md bg-gray-300 bg-opacity-20 px-3 py-2 font-content'>
                    Join Hands for Infertility Free Karnataka
                  </div>
                </div>
                <div>
                  Even today many people believe that infertility is a curse.
                  Garbhagudi IVF Center through the{' '}
                  <span className='font-bold underline'>
                    Ghar Ghar GarbhaGudi initiative
                  </span>{' '}
                  has taken a bold step to overcome that and create awareness
                  that every woman can achieve motherhood through modern
                  reproductive treatment.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
