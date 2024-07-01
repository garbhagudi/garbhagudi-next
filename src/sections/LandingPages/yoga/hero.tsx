import React from 'react';
import CountdownTimer from 'components/timer';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='bg-gray-50 z-50' id='hero-section'>
      <div className='max-w-7xl mx-auto px-4 pb-12 lg:py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='flex items-start justify-center flex-col font-lexend py-10 space-y-4'>
            <div className='text-5xl leading-snug pt-6 uppercase'>
              21 - Day Yoga Challenge
            </div>
            <p className='text-lg'>Meet online to practise yoga for 21 days</p>
            <button className='bg-gg-500 hover:bg-gg-600 w-44 text-xl text-white px-5 py-3 rounded-lg'>
              Register
            </button>
            <p className='text-xs'>200,000+ people have already attended</p>
            <div className='border-b-2 border-gray-400 w-full lg:w-[500px] h-1 pt-4'></div>
            <div className=''>
              <p>Registrations Closing in</p>
              <CountdownTimer dateTime='2024-07-31T00:00:00' />
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <Image
              src='https://yogachallenge.in/resources/img/desktop-thumb.webp'
              alt='Hero'
              width={800}
              height={800}
              layout='responsive'
              className='rounded-lg shadow-lg'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
