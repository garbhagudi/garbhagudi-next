import Link from 'next/link';
import React, { Fragment, useState } from 'react';
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
        <section className='relative overflow-hidden bg-cover bg-right bg-no-repeat sm:bg-center'>
          <Image
            src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1731568618/eggFreezing/n6oqsb7gexcuusccltql.png'
            alt='Image'
            width={1920}
            height={1080}
            className='object-cover object-right md:object-[100%_right]'
          />

          <div className='absolute top-[-60px] mx-auto max-w-screen-xl px-4 py-28 sm:px-6 md:top-0 lg:flex lg:h-screen lg:items-center lg:px-8'>
            <div className='max-w-lg md:max-w-3xl md:pl-8 lg:mt-0 lg:pl-14'>
              <h1 className='flex flex-col text-white'>
                <span className='w-3/4 py-2 font-nunito-Sans text-xl font-extrabold dark:text-gray-200 md:w-1/2 md:text-3xl lg:w-full lg:text-6xl'>
                  Preserve Your Fertility, Empower Your Choices!
                </span>
              </h1>
              <h3 className='w-3/4 font-nunito-Sans text-[12px] text-white dark:text-gray-200 md:mt-0 md:w-3/5 md:text-lg lg:w-full lg:py-2 lg:text-2xl'>
                Egg freezing allows you to plan for the future on your terms. Discover the science,
                support, and possibilities behind preserving your fertility with expert care.
              </h3>

              <div className='mt-3 flex flex-wrap items-center gap-4 font-figtree text-base font-semibold md:mt-5 lg:mt-8'>
                <Link
                  href='/treatments/ivf-treatment-egg-freezing/egg-freezing-quiz'
                  className='block scroll-smooth rounded-[10px] border-2 bg-[#1D1D1D] px-4 py-1 text-center font-content text-base text-white shadow hover:opacity-90 focus:outline-none focus:ring dark:text-white sm:w-auto md:py-2 md:text-lg'
                >
                  Take a Quiz
                </Link>
              </div>
            </div>
          </div>
          <div className='custom-shape-divider-bottom-1731505107 hidden lg:block'>
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
    overflow: hidden;

}

.custom-shape-divider-bottom-1731505107 .shape-fill {
    fill: white;
    overflow: hidden;

}
`}</style>
    </Fragment>
  );
}
