import React from 'react';
import Timer from '../../../assets/fertility-quiz/Vector (1).png';
import MomChild from '../../../assets/fertility-quiz/mother-child.png';
import Elipse2 from '../../../assets/fertility-quiz/Ellipse 2.png';
import Elipse3 from '../../../assets/fertility-quiz/Ellipse 3.png';
import BackgroundImage from '../../../assets/fertility-quiz/background2.png';
import Link from 'next/link';

export default function Fertility() {
  return (
    <div className='bg-[#FCFAF7]'>
      <div className='flex h-screen w-screen flex-col items-start justify-center gap-4 pl-5 md:w-[70%] md:pl-20'>
        <img
          src={BackgroundImage.src}
          alt='background_image'
          className='absolute left-0 top-0 h-screen w-screen object-fill'
        />
        <div className='underline-from-font text-decoration-skip-none font-nunito-Sans text-left text-4xl font-bold leading-[54px] md:text-6xl md:leading-[78px] lg:text-7xl'>
          Welcome to Your Fertility Quiz! Let’s Get Started
        </div>
        <div className=' font-nunito-Sans text-underline-position-from-font text-decoration-skip-ink-none w-full text-left  text-[20px] font-semibold leading-[28px] md:w-[85%] md:text-[28px] md:leading-[38.19px]'>
          Let’s dive into some simple questions about you, your lifestyle, and
          your goals. At the end, you’ll get a personalised insight into your
          fertility profile and next steps. Let’s get started!
        </div>
        <div className='zcwf_button cursor-pointer rounded-lg bg-[#ea4b6a] px-10 py-2 text-center font-[nunito] font-bold text-white hover:bg-[#ee6f88] hover:opacity-75 focus:outline-none active:outline-none z-20'>
          <Link href='/treatments/ivf-treatment-fertility/fertility-quiz-form'>
            Get Started
          </Link>
        </div>
        <div className='flex items-center justify-start gap-2'>
          <img
            src={Timer.src}
            alt='timer_icon'
            className='h-5 w-5 md:h-6 md:w-6'
          />
          <div className='text-underline-position-from-font text-decoration-skip-ink-none text-left font-sans text-[12px] font-semibold leading-[18px] text-[#ea4b6a] md:text-[14px] md:leading-[21.82px]'>
            Takes less than 6 minutes
          </div>
        </div>

        <div className='absolute bottom-0 right-0 z-10'>
          <img
            src={MomChild.src}
            width={300}
            height={100}
            alt='Mom and Child'
            className='-z-10'
          />
          <img
            src={Elipse2.src}
            width={220}
            height={220}
            alt='Elipse2'
            className='absolute bottom-40 right-0 z-[-1]'
          />
          <img
            src={Elipse3.src}
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
