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
            className='absolute left-0 top-0 h-screen w-screen object-fill'
          />

          <div className='absolute inset-0 bg-gradient-to-r dark:from-gray-800/90 dark:to-gray-800/30 sm:bg-transparent'></div>
          <div className='relative mx-auto max-w-screen-xl px-4 py-28 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8'>
            <div className='max-w-2xl text-center sm:text-left'>
              <h1 className='flex flex-col text-white'>
                <span className='font-nunito-Sans py-2 text-5xl font-extrabold dark:text-gray-200 sm:text-5xl'>
                  Preserve Your Fertility, Empower Your Choices!
                </span>
              </h1>
              <h3 className='font-nunito-Sans mt-3 max-w-lg text-white dark:text-gray-200 sm:text-xl sm:leading-relaxed'>
                Egg freezing allows you to plan for the future on your terms.
                Discover the science, support, and possibilities behind
                preserving your fertility with expert care.
              </h3>

              <div className='font-figtree mt-8 flex flex-wrap items-center gap-4 text-base font-semibold'>
                <Link
                  href='https://api.whatsapp.com/send/?phone=916383697088&text=Hi.'
                  className='block w-full rounded-[10px] border-2 border-white bg-[#49C958] px-4 py-2 font-content text-white hover:bg-green-400 focus:outline-none focus:ring active:bg-green-300 sm:w-auto'
                >
                  <span className='font-figtree flex items-center justify-center gap-2 text-lg'>
                    <BsWhatsapp size={22} className='text-white' /> Drop us a
                    "Hi" here
                  </span>
                </Link>

                <Link
                  href='#know-more'
                  onClick={() => setIsOpen(true)}
                  className='block w-full scroll-smooth rounded-[10px] bg-white px-4 py-2 font-content text-lg text-brandPink shadow hover:opacity-80 focus:outline-none focus:ring active:text-rose-500 dark:bg-gg-500 dark:text-white dark:hover:bg-gg-400 sm:w-auto'
                >
                  Book an Appointment
                </Link>
                <Link
                  href='/treatments/ivf-treatment-fertility/fertility-quiz'
                  className='block w-full scroll-smooth rounded-[10px] border-2 bg-[#1D1D1D] px-4 py-2 font-content text-lg text-white shadow hover:opacity-80 focus:outline-none focus:ring active:text-rose-500 dark:text-white sm:w-auto'
                >
                  Take a Quiz
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* <div className='container-style-left absolute -bottom-[6em] left-0 h-20 w-[60%] bg-white'></div>
<div className='container-style-right absolute -bottom-24 right-0 h-20 w-[45%] bg-white'></div>
<div className='connecting-line absolute bottom-0 left-[60%] h-[1px] w-[40%] bg-white'></div> */}
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
  .container-style-left {
    border-top-left-radius: 100rem 15rem;
    border-top-right-radius: 180rem 30rem;
  }
  .container-style-right {
    border-top-left-radius: 50rem 10rem;
    border-top-right-radius: 100rem 20rem;
  }
  .connecting-line {
    width: 100%;
    height: 1px;
    background-color: #fff;
    /* Adjust to place the line perfectly in between */
  }
`}</style>
    </Fragment>
  );
}
