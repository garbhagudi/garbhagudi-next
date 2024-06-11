import React from 'react';
import Link from 'next/link';

const WhenIvf = () => {
  return (
    <div className='py-10 container mx-auto lg:py-16 px-3'>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='max-w-lg flex items-center justify-center mx-auto p-3 lg:p-10'>
          <img
            src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1671190677/Misc/avn-min_jo63l5.png'
            alt='When is IVF Treatment Recommended?'
            className='relative w-full dark:bg-white/10 dark:brightness-75 dark:invert'
          />
        </div>
        <div className='text-gray-800 dark:text-gray-200'>
          <div className='mt-6 max-w-2xl'>
            <h2 className='text-3xl font-extrabold tracking-tight font-heading '>
              When is IVF Recommended?
            </h2>
            <div className='mt-4 text-lg font-content'>
              Some common reasons for recommending IVF include:
              <ul className='space-y-3 text-base mt-4'>
                <li>
                  <strong>Blocked or damaged fallopian tubes:</strong> If the
                  fallopian tubes are blocked or damaged, the egg may not be
                  able to travel from the ovaries to the uterus.
                </li>
                <li>
                  <strong>Male fertility problems:</strong> If the male partner
                  has a low sperm count or poor sperm quality, IVF may be
                  recommended.
                </li>
                <li>
                  <strong>Unexplained infertility:</strong> If the cause of
                  infertility is unknown, IVF may be recommended.
                </li>
                <li>
                  <strong>Ovulation disorders:</strong> If a woman is not
                  ovulating regularly or at all, IVF may be recommended.
                </li>
                <li>
                  <strong>Endometriosis:</strong> This is a condition in which
                  the tissue that lines the uterus grows outside of the uterus,
                  which can cause fertility problems.
                </li>
                <li>
                  <strong>Advanced maternal age:</strong> As a woman gets older,
                  her fertility decreases, and IVF may be recommended for women
                  over the age of 35 who are trying to get pregnant.
                </li>
              </ul>
              <div className='mt-4 text-base'>
                It is important to note that IVF is a complex and expensive
                procedure, and it is not always successful. It is important to
                discuss all of the potential risks and benefits with a fertility
                specialist before deciding whether or not to pursue IVF.
              </div>
            </div>
            <div className='mt-6 text-center lg:text-left'>
              <Link
                href='/blogs/when-and-what-should-you-consider-to-evaluate-for-pregnancy'
                className='inline-flex px-3 py-2 rounded bg-gg-500 dark:bg-gray-500 font-content font-bold text-white hover:bg-gg-400 dark:hover:bg-gg-500'
              >
                Know More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhenIvf;
