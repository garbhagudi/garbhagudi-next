import React from 'react';
import Timer from '../../../assets/fertility-quiz/Vector (1).png';
import Link from 'next/link';
import Image from 'next/image';

export default function Fertility() {
  return (
    <div className='bg-[#FCFAF7]'>
      <div className='mt-32 flex h-[45rem] w-screen flex-col items-start gap-4 pl-5 md:mt-0 md:h-screen md:w-[70%] md:justify-center md:pl-20'>
        <Image
          src={
            'https://res.cloudinary.com/garbhagudiivf/image/upload/v1731568598/eggFreezing/azpbdaygrirxycn4jiwh.webp'
          }
          width={100}
          height={100}
          alt='background_image'
          className='absolute bottom-0 left-0 top-0 h-screen w-screen object-fill'
        />
        <div className='underline-from-font text-decoration-skip-none text-left font-nunito-Sans text-2xl font-bold leading-[54px] md:text-6xl md:leading-[78px] lg:text-7xl'>
          Welcome to Your Fertility Quiz! Let’s Get Started
        </div>
        <div className='text-underline-position-from-font text-decoration-skip-ink-none w-11/12 text-left font-nunito-Sans text-lg font-semibold leading-[28px] md:w-[85%] md:text-[28px] md:leading-[38.19px]'>
          Let’s dive into some simple questions about you, your lifestyle, and your goals. At the
          end, you’ll get a personalised insight into your fertility profile and next steps. Let’s
          get started!
        </div>
        <div className='zcwf_button z-20 cursor-pointer rounded-lg bg-[#ea4b6a] px-10 py-2 text-center font-[nunito] font-bold text-white hover:bg-[#ee6f88] hover:opacity-75 focus:outline-none active:outline-none'>
          <Link href='/treatments/ivf-treatment-egg-freezing/egg-freezing-quiz-form'>
            Get Started
          </Link>
        </div>
        <div className='flex items-center justify-start gap-2'>
          <Image
            src={Timer.src}
            alt='timer_icon'
            className='h-5 w-5 md:h-6 md:w-6'
            width={20}
            height={20}
          />
          <div className='text-underline-position-from-font text-decoration-skip-ink-none text-left font-sans text-[12px] font-semibold leading-[18px] text-[#ea4b6a] md:text-[14px] md:leading-[21.82px]'>
            Takes less than 6 minutes
          </div>
        </div>

        <div className='absolute bottom-0 right-0 z-10'>
          <Image
            src={
              'https://res.cloudinary.com/garbhagudiivf/image/upload/v1731568616/eggFreezing/cdla1ahl9d9vfikelqwl.webp'
            }
            width={300}
            height={100}
            alt='Mom and Child'
            className='-z-10'
          />
          <Image
            src={
              'https://res.cloudinary.com/garbhagudiivf/image/upload/v1731568605/eggFreezing/xi4vevxycdv9wpiceby5.webp'
            }
            width={220}
            height={220}
            alt='Elipse2'
            className='absolute bottom-40 right-0 z-[-1]'
          />
          <Image
            src={
              'https://res.cloudinary.com/garbhagudiivf/image/upload/v1731568605/eggFreezing/xv4atl9mjysjoxnhv1oh.webp'
            }
            width={250}
            height={250}
            alt='Elipse3'
            className='absolute bottom-0 right-28 z-[-1]'
          />
        </div>
      </div>
    </div>
  );
}
