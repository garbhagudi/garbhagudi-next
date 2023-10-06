import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className='mb-10'>
      <div
        className='bg-cover bg-no-repeat bg-center'
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/garbhagudiivf/image/upload/v1691234829/Misc/young-wife-husband-have-problems-family-life-min_csilul.webp")',
        }}
      >
        <div className='bg-black bg-opacity-50 h-full text-gray-800 dark:text-gray-200 py-16 lg:py-40'>
          <div className='max-w-7xl mx-auto font-content'>
            <div className='max-w-3xl space-y-4 px-4 sm:px-6 lg:px-8 py-6 rounded-lg bg-gray-950 bg-opacity-20'>
              <h1 className='text-3xl font-lexend'>
                Every couple deserves to experience the joy of parenthood and
                with{' '}
                <span className='font-bold text-brandPink'>
                  Ghar Ghar Garbhagudi
                </span>{' '}
                we are making it possible for everyone.
              </h1>
              <div className='text-xl space-y-3'>
                <div className='flex'>
                  <div className='font-content rounded-md bg-gray-300 px-3 py-2 bg-opacity-20'>
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
