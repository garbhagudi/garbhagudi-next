import React from 'react';
import CountdownTimer from 'components/timer';
import Image from 'next/image';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='z-50 bg-white' id='hero-section'>
      <div className='mx-auto max-w-7xl px-4 pb-12 lg:py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='flex flex-col items-start justify-center space-y-4 py-10 font-lexend'>
            <div className='pt-6 text-5xl uppercase leading-snug'>
              21 - Day Yoga Challenge
            </div>
            <p className='text-lg'>Meet online to practise yoga for 21 days</p>
            <Link href={'#register'}>
              <button className='w-44 rounded-lg bg-gg-500 px-5 py-3 text-xl text-white hover:bg-gg-600'>
                Register
              </button>
            </Link>
            <p className='text-xs'>200,000+ people have already attended</p>
            <div className='h-1 w-full border-b-2 border-gray-400 pt-4 lg:w-[500px]'></div>
            <div className=''>
              <p>Registrations Closing in</p>
              <CountdownTimer dateTime='2024-07-25T00:00:00' />
            </div>
          </div>
          <div className='flex justify-center w-full'>
            <div className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-3xl'>
              <div className='rounded-lg overflow-hidden aspect-video border border-transparent'>
          <LiteYouTubeEmbed
                      id={'FeZnRhyxG3g'}
                      title='Successful IVF Treatment Testimonial | GarbhaGudi IVF Centre | Dr Asha S Vijay'
                      poster='maxresdefault'
                    />
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
