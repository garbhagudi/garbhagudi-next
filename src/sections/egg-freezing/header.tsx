import Link from 'next/link';
import React, { Fragment, useState } from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import BackgroundImage from '../../assets/fertility-quiz/human-fetus-prenatal-development-stage-womb 1 (1).png';
import Image from 'next/image';
import BookAnAppointment from './bookAnAppointment';

export default function Banner() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <Fragment>
      <div>
        <section className='relative bg-cover bg-right bg-no-repeat sm:bg-center'>
          <Image
            src={BackgroundImage.src}
            width={200}
            height={150}
            alt={`Image `}
            loading='lazy'
            className='absolute bottom-[100px] left-0 top-0  h-screen w-screen '
          />

          <div className='absolute inset-0 bg-gradient-to-r dark:from-gray-800/90 dark:to-gray-800/30 sm:bg-transparent'></div>
          <div className='relative mx-auto max-w-screen-xl px-4 py-28 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8'>
            <div className='max-w-2xl text-center sm:text-left'>
              <h1 className='flex flex-col text-white'>
                <span className='py-2 font-nunito-Sans text-5xl font-extrabold dark:text-gray-200 sm:text-5xl'>
                  Preserve Your Fertility, Empower Your Choices!
                </span>
              </h1>
              <h3 className='mt-3 max-w-lg font-nunito-Sans text-white dark:text-gray-200 sm:text-xl sm:leading-relaxed'>
                Egg freezing allows you to plan for the future on your terms.
                Discover the science, support, and possibilities behind
                preserving your fertility with expert care.
              </h3>

              <div className='mt-8 flex flex-wrap items-center gap-4 font-figtree text-base font-semibold'>
                <Link
                  href='https://api.whatsapp.com/send/?phone=916383697088&text=Hi.'
                  className='block w-full rounded-[10px] border-2 border-white bg-[#49C958] px-4 py-2 font-content text-white hover:bg-green-400 focus:outline-none focus:ring active:bg-green-300 sm:w-auto'
                >
                  <span className='flex items-center justify-center gap-2 font-figtree text-lg'>
                    <BsWhatsapp size={22} className='text-white' /> Drop us a
                    "Hi" here
                  </span>
                </Link>

                <Link
                  href=''
                  onClick={() => setIsOpen(true)}
                  className='block w-full scroll-smooth rounded-[10px] bg-white px-4 py-2 font-content text-lg text-brandPink shadow hover:opacity-80 focus:outline-none focus:ring active:text-rose-500 dark:bg-gg-500 dark:text-white dark:hover:bg-gg-400 sm:w-auto'
                >
                  Book an Appointment
                </Link>
                <Link
                  href='/treatments/ivf-treatment-egg-freezing/egg-freezing-quiz'
                  className='block w-full scroll-smooth rounded-[10px] border-2 bg-[#1D1D1D] px-4 py-2 font-content text-lg text-white shadow hover:opacity-80 focus:outline-none focus:ring active:text-rose-500 dark:text-white sm:w-auto'
                >
                  Take a Quiz
                </Link>
              </div>
            </div>
          </div>

          <div className='custom-shape-divider-bottom-1731505107'>
            <svg
              data-name='Layer 1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 1200 120'
              preserveAspectRatio='none'
            >
              <path
                d='M985.66,27.17C906.67,48,823.78,89,743.84,105.81c-82.26,17.34-168.06,16.33-250.45-.39-57.84-11.73-114-31.07-172-41.86A600.21,600.21,0,0,0,0,92.65V120H1200V24.2C1132.19,1.08,1055.71,8.69,985.66,27.17Z'
                className='shape-fill'
                transform='scale(-1, -1) translateX (-1200, -120)'
              ></path>
            </svg>
          </div>
        </section>
      </div>
      {isOpen && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'
          onClick={handleClose}
        >
          <BookAnAppointment />
        </div>
      )}

     
      <style>{`
 .custom-shape-divider-bottom-1731505107 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 130%;
    overflow: hidden;
    line-height: 0;
    
}

.custom-shape-divider-bottom-1731505107 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 90px;
  
}

.custom-shape-divider-bottom-1731505107 .shape-fill {
    fill: white;
    
}
`}</style>
    </Fragment>
  );
}
