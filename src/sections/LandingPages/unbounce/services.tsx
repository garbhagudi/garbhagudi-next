import Image from 'next/image';
import React from 'react';

const Services = () => {
  return (
    <div className='py-8 lg:py-10'>
      <div className='px-3'>
        <div className='mx-auto max-w-7xl'>
          <h4 className='pb-8 pt-4 text-center font-lexend text-4xl font-bold text-gg-500'>
            Services Available At GarbhaGudi
          </h4>
          <div className='grid grid-cols-2 gap-5 lg:grid-cols-4'>
            <div className='flex flex-col items-center justify-start space-y-3 text-center font-lexend'>
              <Image
                src={
                  'https://app.unbounce.com/publish/assets/bf3feac7-9d19-41a4-93f2-ac88b11e19f6/7628c4f6-8ebe-4b92-b7f3-fe879a772d53-ivf-jwjqwf.webp'
                }
                alt='Services Image'
                width={80}
                height={80}
                className='pb-8'
              />
              <h5 className='text-xl font-semibold text-gg-500'>
                IVF Treatment
              </h5>
              <p className='font-light'>
                Unlock the doors of parenthood with GarbhaGudi's advanced IVF
                treatment In Bangloreand give your dreams of starting a family a
                new lease of life.
              </p>
            </div>
            <div className='flex flex-col items-center justify-start space-y-3 text-center font-lexend'>
              <Image
                src={
                  'https://app.unbounce.com/publish/assets/cfdca4fe-f715-4364-8e4a-83ffb731c4d3/b9ad6b9e-3fdc-447c-8040-748fa072bcce-fertilization-o5hpkk.webp'
                }
                alt='Services Image'
                width={80}
                height={80}
                className='pb-8'
                fetchPriority='low'
              />
              <h5 className='text-xl font-semibold text-gg-500'>ICSI</h5>
              <p className='font-light'>
                Take the first step towards parenthood with GarbhaGudi's
                state-of-the-art ICSI treatment In Banglore, which offers a high
                success rate for couples struggling with infertility.
              </p>
            </div>
            <div className='flex flex-col items-center justify-start space-y-3 text-center font-lexend'>
              <Image
                src={
                  'https://app.unbounce.com/publish/assets/cac56cbc-2a2a-4b09-95c5-ecb631a458b1/d798396c-8e94-4b62-89f2-7b791c70bd13-in-vitro-mujzkz.webp'
                }
                alt='Services Image'
                width={80}
                height={80}
                className='pb-8'
                fetchPriority='low'
              />
              <h5 className='text-xl font-semibold text-gg-500'>IUI</h5>
              <p className='font-light'>
                Experience the joy of parenthood with GarbhaGudi's IUI treatment
                In Banglore, designed to increase your chances of pregnancy in a
                natural way.
              </p>
            </div>
            <div className='flex flex-col items-center justify-start space-y-3 text-center font-lexend'>
              <Image
                src={
                  'https://app.unbounce.com/publish/assets/9e2a326c-a0e7-4bac-9724-0180faa01953/fce786a0-93e5-4e85-b332-7aaaf48345e8-research-j8mdnk.webp'
                }
                alt='Services Image'
                width={80}
                height={80}
                className='pb-8'
                fetchPriority='low'
              />
              <h5 className='text-xl font-semibold text-gg-500'>
                Infertility Treatment
              </h5>
              <p className='font-light'>
                Garbhagudi IVF Centre - Your Path to Parenthood Begins Here.
                Discover Advanced Infertility Treatments in Bangalore Today!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
