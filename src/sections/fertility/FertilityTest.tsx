import React from 'react';
import Image from 'next/image';
import colorImage from '../../assets/union-page/Union3.png';
import image from '../../assets/union-page/Union (1).png';
import Link from 'next/link';

export default function FertilityTest() {
  const renderData = [
    {
      title: 'Select a convenient time for your blood sample collection.',
      subTitle:
        'When booking, choose a time that works for you for the easy-to-do Fertility Test blood test.',
    },
    {
      title: 'Our diagnostic partner will collect your blood sample.',
      subTitle:
        'A friendly technician will visit your home for blood collection. Drink water and fast for 12 hours, just like a regular test.',
    },
    {
      title: 'View your fertility analysis.',
      subTitle: 'View your results online in 48 hours.',
    },
    {
      title: 'Consult with a fertility coach.',
      subTitle:
        'Post-results, our care team will help you navigate what’s next—from getting an ultrasound to speaking to a fertility specialist.',
    },
  ];
  return (
    <div className='pt-10 pb-20 bg-[#B03146]'>
      <div className='flex items-center justify-center pb-10 text-4xl font-extrabold text-white font-nunito-Sans'>
        Fertility Test - 4 Simple Steps
      </div>
      <div className='mx-auto flex w-10/12 flex-row justify-between gap-10'>
        <div className='relative w-full h-[350px]'>
          <Image
            src={colorImage}
            width={350}
            height={350}
            alt='Image 1'
            loading='lazy'
            className='absolute left-0 top-0 w-[450px] h-[500px]'
          />

          {/* Second Image (middle layer) */}
          <Image
            src={image}
            width={350}
            height={350}
            alt='Image 2'
            loading='lazy'
            className='absolute left-3 top-3 w-[450px] h-[500px]'
          />
        </div>

        <div className='w-full mt-10 font-nunito-Sans'>
          {renderData.map((ele, index) => (
            <div key={index} className='py-2  text-white'>
              <div className='text-xl font-semibold leading-6'>
                {index + 1}. {ele.title}
              </div>
              <div className='pl-5 py-1 text-lg font-medium opacity-80'>
                {ele.subTitle}
              </div>
              {renderData.length === index + 1 && (
                <div className='w-1/3 mt-14'>
                  <span>
                    <Link
                      href='#know-more'
                      className='flex items-center justify-center font-semibold scroll-smooth rounded bg-white px-4 py-2 font-content text-[#D9576C] shadow hover:text-gg-400 focus:outline-none focus:ring active:text-rose-500 dark:bg-gg-500 dark:text-white dark:hover:bg-gg-400 sm:w-auto'
                    >
                      Explore Packages
                    </Link>
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
