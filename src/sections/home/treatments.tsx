import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TreatmentOptions = () => {
  return (
    <div className='bg-slate-50 pb-3 dark:bg-gray-800'>
      <div className='container mx-auto'>
        <h2 className='px-2 py-16 text-center font-heading text-2xl font-bold text-gray-800 dark:text-gray-200 lg:py-20 lg:text-3xl'>
          Services Available at GarbhaGudi
        </h2>
        <div className='grid grid-cols-1 gap-x-3 gap-y-16 px-2 pb-10 lg:grid-cols-4 lg:gap-16 lg:pb-16'>
          {Data.map((items) => (
            <div
              key={items?.id}
              className='group flex flex-col items-center justify-between rounded-xl border border-gg-400 font-content transition-all duration-300 hover:-translate-y-2 hover:bg-pink-50 hover:shadow-2xl dark:border-2 dark:border-gray-700 dark:hover:bg-gray-700'
            >
              <div className='mx-auto -mt-14 flex h-28 w-28 items-center justify-center rounded-full'>
                <Image
                  src={items?.image}
                  alt={items?.treatent}
                  width={100}
                  height={100}
                  className='w-20 transition-all duration-300 group-hover:grayscale-0 dark:grayscale'
                />
              </div>
              <div className='flex flex-col items-center justify-center py-2'>
                <div className='pb-2 text-center font-heading text-xl font-bold'>
                  {items?.treatent}
                </div>
                <div className='px-3 text-center text-base'>{items?.desc}</div>
              </div>
              <div className='w-full rounded-b-xl border bg-gg-500 py-1 text-center dark:border-gray-800 dark:bg-gray-500'>
                <Link
                  href={items?.link}
                  className='font-content font-bold text-white dark:text-white'
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
        <Link
          href={'/treatments'}
          className='mx-auto mb-6 flex w-32 items-center justify-center rounded-lg border-2 border-gg-500 bg-transparent px-3 py-2 text-center font-content font-bold text-gg-500 duration-300 hover:-translate-y-1 hover:bg-gg-500 hover:shadow-2xl hover:shadow-gg-500 hover:transition-all dark:border-gg-400 dark:text-gg-400 dark:hover:bg-gg-400 dark:hover:text-gray-800'
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default TreatmentOptions;

const Data = [
  {
    id: 1,
    treatent: 'IVF Treatment',
    desc: (
      <div>
        Unlock the doors of parenthood with GarbhaGudi's advanced{' '}
        <Link
          href={'/treatments/ivf-treatment-in-bangalore'}
          className='text-gg-500 hover:underline dark:text-gg-400'
        >
          IVF treatment In Banglore
        </Link>
        and give your dreams of starting a family a new lease of life.
      </div>
    ),
    link: '/treatments/ivf-treatment-in-bangalore',
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1674890412/Misc/ivf%20icons/ivf_jwjqwf.webp',
  },
  {
    id: 2,
    treatent: 'ICSI',
    desc: (
      <div>
        Take the first step towards parenthood with GarbhaGudi's state-of-the-art{' '}
        <Link
          href={'/treatments/icsi-treatment-in-bangalore'}
          className='text-gg-500 hover:underline dark:text-gg-400'
        >
          ICSI treatment In Banglore
        </Link>
        , which offers a high success rate for couples struggling with infertility.
      </div>
    ),
    link: '/treatments/icsi-treatment-in-bangalore',
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1674890412/Misc/ivf%20icons/fertilization_o5hpkk.webp',
  },
  {
    id: 3,
    treatent: 'IUI',
    desc: (
      <div>
        Experience the joy of parenthood with GarbhaGudi's{' '}
        <Link
          href={'/treatments/iui-treatment-in-bangalore'}
          className='text-gg-500 hover:underline dark:text-gg-400'
        >
          IUI treatment In Banglore
        </Link>
        , designed to increase your chances of pregnancy in a natural way.
      </div>
    ),
    link: '/treatments/iui-treatment-in-bangalore',
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1674890412/Misc/ivf%20icons/in-vitro_mujzkz.webp',
  },
  {
    id: 4,
    treatent: 'Infertility Treatment',
    desc: (
      <div>
        Garbhagudi IVF Centre - Your Path to Parenthood Begins Here. Discover Advanced{' '}
        <Link
          href={'/treatments/infertility-treatment-in-bangalore'}
          className='text-gg-500 hover:underline dark:text-gg-400'
        >
          Infertility Treatments in Bangalore
        </Link>{' '}
        Today!
      </div>
    ),
    link: '/treatments/infertility-treatment-in-bangalore',
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1674890412/Misc/ivf%20icons/research_j8mdnk.webp',
  },
];
