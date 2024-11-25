import React from 'react';
import Image from 'next/image';

function HeroHome() {
  return (
    <section className='relative bg-gray-50 dark:bg-gray-700'>
      <div
        className='pointer-events-none absolute bottom-0 left-1/2 -mb-32 -translate-x-1/2 transform'
        aria-hidden='true'
      ></div>

      <div className='mx-auto max-w-7xl'>
        <div className='py-12 md:py-20'>
          <div className='mx-auto max-w-3xl pb-12 text-center md:pb-16'>
            <h2 className='mb-4 font-content text-3xl text-gray-800 dark:text-gray-200 md:text-5xl'>
              Trusted by over{' '}
              <span className='bg-gradient-to-r from-brandPink to-brandPurpleDark bg-clip-text text-transparent dark:to-brandPurple'>
                10000+ couples{' '}
              </span>
              across the world
            </h2>
            <p className='font-content text-xl text-gray-800 dark:text-gray-200'>
              GarbhaGudi has been featured in various outlets for its high success rates and
              holistic approach towards infertility treatment.
            </p>
          </div>

          <div className='mx-auto grid grid-cols-2 space-y-6 sm:space-y-0 md:grid-cols-6'>
            {Data.map((items) => (
              <div className='flex items-center justify-center' key={items.id}>
                <Image
                  src={items.img}
                  alt={items.title}
                  className='w-full transition-all duration-200 hover:scale-150 dark:brightness-200 dark:contrast-125 dark:grayscale'
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
