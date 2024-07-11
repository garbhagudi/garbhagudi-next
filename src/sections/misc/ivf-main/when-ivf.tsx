import React from 'react';
import Link from 'next/link';

const WhenIvf = () => {
  return (
    <div className='container mx-auto px-3 py-10 lg:py-16'>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='mx-auto flex max-w-lg items-center justify-center p-3 lg:p-10'>
          <img
            src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1671190677/Misc/avn-min_jo63l5.png'
            alt='When is IVF Treatment Recommended?'
            className='relative w-full dark:bg-white/10 dark:brightness-75 dark:invert'
          />
        </div>
        <div className='text-gray-800 dark:text-gray-200'>
          <div className='mt-6 max-w-2xl'>
            <h2 className='font-heading text-3xl font-extrabold tracking-tight'>
              When is IVF Recommended?
            </h2>
            <div className='mt-4 font-content text-lg'>
              Some common reasons for recommending IVF include:
              <ul className='mt-4 space-y-3 text-base'>
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
                className='inline-flex rounded bg-gg-500 px-3 py-2 font-content font-bold text-white hover:bg-gg-400 dark:bg-gray-500 dark:hover:bg-gg-500'
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
