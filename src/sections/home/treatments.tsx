import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TreatmentOptions = () => {
  return (
    <div className='bg-slate-50 dark:bg-gray-800 pb-3'>
      <div className='container mx-auto'>
        <h2 className='py-16 lg:py-20 text-2xl lg:text-3xl font-heading text-center font-bold px-2 text-gray-800 dark:text-gray-200 '>
          Services Available at GarbhaGudi
        </h2>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-y-16 gap-x-3 lg:gap-16 pb-10 lg:pb-16 px-2'>
          {Data.map((items) => (
            <div
              key={items?.id}
              className='font-content group border dark:border-2 border-gg-400 dark:border-gray-700 rounded-xl flex items-center justify-between flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 hover:bg-pink-50 dark:hover:bg-gray-700'
            >
              <div className='w-28 h-28 -mt-14 mx-auto flex items-center justify-center rounded-full'>
                <Image
                  src={items?.image}
                  alt={items?.treatent}
                  width={100}
                  height={100}
                  className='w-20 dark:grayscale group-hover:grayscale-0 transition-all duration-300'
                />
              </div>
              <div className='flex flex-col items-center justify-center py-2'>
                <div className='text-xl font-heading text-center font-bold pb-2'>
                  {items?.treatent}
                </div>
                <div className='px-3 text-base text-center'>{items?.desc}</div>
              </div>
              <div className=' text-center border dark:border-gray-800 w-full bg-gg-500 dark:bg-gray-500 py-1 rounded-b-xl'>
                <Link
                  href={items?.link}
                  className='font-bold text-white dark:text-white font-content'
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
        <Link
          href={'/treatments'}
          className='text-center mx-auto flex items-center justify-center px-3 py-2 bg-transparent w-32 font-content font-bold text-gg-500 dark:text-gg-400 border-2 border-gg-500 dark:border-gg-400 hover:bg-gg-500 dark:hover:bg-gg-400 dark:hover:text-gray-800 mb-6 rounded-lg hover:shadow-2xl hover:shadow-gg-500 hover:transition-all hover:-translate-y-1 duration-300'
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
          className='text-gg-500 dark:text-gg-400 hover:underline'
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
        Take the first step towards parenthood with GarbhaGudi's
        state-of-the-art{' '}
        <Link
          href={'/treatments/intracytoplasmic-sperm-injection-icsi'}
          className='text-gg-500 dark:text-gg-400 hover:underline'
        >
          ICSI treatment In Banglore
        </Link>
        , which offers a high success rate for couples struggling with
        infertility.
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
          className='text-gg-500 dark:text-gg-400 hover:underline'
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
        Garbhagudi IVF Centre - Your Path to Parenthood Begins Here. Discover
        Advanced{' '}
        <Link
          href={'/treatments/infertility-treatment-in-bangalore'}
          className='text-gg-500 dark:text-gg-400 hover:underline'
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
