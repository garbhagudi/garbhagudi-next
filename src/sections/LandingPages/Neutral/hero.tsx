import React from 'react';
import Image from 'next/image';

function HeroHome() {
  return (
    <section className='relative bg-gray-50 dark:bg-gray-700'>
      <div
        className='absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32'
        aria-hidden='true'
      ></div>

      <div className='max-w-7xl mx-auto'>
        <div className='py-12 md:py-20'>
          <div className='max-w-3xl mx-auto text-center pb-12 md:pb-16'>
            <h2 className='text-3xl md:text-5xl mb-4 font-content text-gray-800 dark:text-gray-200'>
              Trusted by over{' '}
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-brandPink to-brandPurpleDark dark:to-brandPurple'>
                10000+ couples{' '}
              </span>
              across the world
            </h2>
            <p className='text-xl text-gray-800 dark:text-gray-200 font-content'>
              GarbhaGudi has been featured in various outlets for its high
              success rates and holistic approach towards infertility treatment.
            </p>
          </div>

          <div className='mx-auto grid grid-cols-2 md:grid-cols-6 space-y-6 sm:space-y-0'>
            {Data.map((items) => (
              <div
                className=' flex items-center  justify-center'
                key={items.id}
              >
                <Image
                  src={items.img}
                  alt={items.title}
                  className='w-full hover:scale-150 transition-all duration-200 dark:grayscale dark:brightness-200 dark:contrast-125'
                  width={200}
                  height={200}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;

const Data = [
  {
    id: 1,
    title: 'Public TV',
    img: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1655207790/logos/public_56-01_kd8fqm.svg',
  },
  {
    id: 2,
    title: 'Daily Hunt',
    img: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1655206796/logos/01_logo-04_ozhtg1.svg',
  },
  {
    id: 3,
    title: 'Suvarna News',
    img: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1655206796/logos/01_logo-06_r15yoj.svg',
  },
  {
    id: 4,
    title: 'Times Health',
    img: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1655206796/logos/01_logo-02_ngqfla.svg',
  },
  {
    id: 5,
    title: 'TV9',
    img: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1655206796/logos/01_logo-01_we8wae.svg',
  },
  {
    id: 6,
    title: 'ET Health World',
    img: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1655206796/logos/01_logo-03_okxrv1.svg',
  },
];
