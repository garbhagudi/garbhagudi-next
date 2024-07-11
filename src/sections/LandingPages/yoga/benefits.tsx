import React from 'react';
import banner_1 from 'assets/Benefits-You-Will-Gain_Img01.png';
import banner_2 from 'assets/Benefits-You-Will-Gain_Img02.png';
import banner_3 from 'assets/Benefits-You-Will-Gain_Img03.png';
import banner_4 from 'assets/Benefits-You-Will-Gain_Img04.png';
import Image from 'next/image';

const Benefits = () => {
  return (
    <div id='benefits'>
      <div className='mx-auto max-w-7xl scroll-m-16 px-4 pb-16'>
        <div className='py-8 font-lexend text-3xl font-bold sm:text-4xl'>
          Benefits You Will Gain
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:max-w-3xl'>
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className='flex flex-col items-center justify-center'
            >
              <Image
                width={300}
                height={300}
                src={benefit.image}
                alt={benefit.title}
                className='max-w-xl rounded-lg object-cover'
              />
              <div className='font-lexend text-lg'>{benefit.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;

const benefits = [
  {
    id: 1,
    title: 'Experience higher energy levels',
    image:banner_1,
  },
  {
    id: 2,
    title: 'Understand your thoughts & emotions',
    image:banner_2,
  },
  {
    id: 3,
    title: 'Feel more stable',
    image:banner_3,
  },
  {
    id: 4,
    title: 'Have better relationships',
    image:banner_4,
  },
];
