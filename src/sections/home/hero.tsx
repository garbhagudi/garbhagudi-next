import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <main className='mt-8 sm:mt-8 bg-white dark:bg-gray-800'>
      <div className='mx-auto max-w-7xl'>
        <div className='lg:grid lg:grid-cols-12 lg:gap-8'>
          <div className='px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center'>
            <div>
              <div className='mt-4 text-4xl tracking-tight font-extrabold text-gray-800 dark:text-gray-200 sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl font-heading'>
                <span className='md:block'>Experience the Joy</span>{' '}
                <span className='text-gg-500 dark:text-gg-400 md:block md:mt-2'>
                  of Being Complete...
                </span>
              </div>
              <div className='text-md text-right font-bold font-content text-gray-800 dark:text-gray-200'>
                ...with the{' '}
                <h1 className='inline-block'>Best IVF Centre in Bangalore</h1>
              </div>
              <p className='mt-3 text-gray-800 dark:text-gray-200 sm:mt-5 sm:text-xl lg:text-lg xl:text-base text-base font-content'>
                GarbhaGudi is a chain of new generation{' '}
                <Link
                  href={'/treatments/infertility'}
                  className='text-gg-500 dark:text-gg-400 hover:underline'
                >
                  infertility treatment hospitals
                </Link>{' '}
                equipped with state-of-the-art infrastructure and cutting-edge
                technology to address this ever-increasing infertility problem.
                It was founded by a team of committed entrepreneurs and
                healthcare specialists, led by{' '}
                <Link
                  href={'/fertility-experts/dr-asha-s-vijay'}
                  className='text-gg-500 dark:text-gg-400 hover:underline'
                >
                  Dr. Asha S Vijay
                </Link>
                , a renowned gynaecologist and fertility specialist.
              </p>
            </div>
          </div>
          <div className='sm:mt-16 lg:mt-0 lg:col-span-6 hidden md:block'>
            <div className='sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden'>
              <div className='my-6'>
                <Image
                  src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1691232590/Misc/happy-smiling-mother-playing-with-newborn-child-comfy-light-bedroom-front-window-moments-motherhood-happiness-with-kids-family-concept-min_txfdml.webp'
                  alt='Experience the joy of being complete with the Best IVF Centre in Bangalore'
                  className='object-cover rounded-2xl shadow-xl'
                  width={1024}
                  height={768}
                  loading='lazy'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
