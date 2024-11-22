import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BookAnAppointment from './bookAnAppointment';

export default function FertilityTest() {
  // const renderData = [
  //   {
  //     title: 'Select a convenient time for your blood sample collection.',
  //     subTitle:
  //       'When booking, choose a time that works for you for the easy-to-do Fertility Test blood test.',
  //   },
  //   {
  //     title: 'Our diagnostic partner will collect your blood sample.',
  //     subTitle:
  //       'A friendly technician will visit your home for blood collection. Drink water and fast for 12 hours, just like a regular test.',
  //   },
  //   {
  //     title: 'View your fertility analysis.',
  //     subTitle: 'View your results online in 48 hours.',
  //   },
  //   {
  //     title: 'Consult with a fertility coach.',
  //     subTitle:
  //       'Post-results, our care team will help you navigate what’s next—from getting an ultrasound to speaking to a fertility specialist.',
  //   },
  // ];

  const [isOpen, setIsOpen] = useState(false);
  const [bookNow, setBookNow] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const packages = [
    {
      title: 'Essential Reproductive Health Check (Female)',
      description:
        'Contains CBC, RBS, HBA1C, S.Prolactin, HIV, HCV, VDRL, HBSAG, Blood group +Rh D typing, AMH, TSH',
      price: '₹3,500',
      taxes: '(Incl. of all taxes)',
      buttonText: 'Buy Now',
      image:
        'https://res.cloudinary.com/garbhagudiivf/image/upload/v1731568282/eggFreezing/koaxrqjuxyaiqkcnj4is.png',
    },
    {
      title: 'Essential Reproductive Health Check (Male)',
      description:
        'Contains CBC, RBS, HBA1C, HIV, HCV, VDRL, HBSAG, Blood group +Rh D typing, TSH, CASA -L1',
      price: '₹3,500',
      taxes: '(Incl. of all taxes)',
      buttonText: 'Buy Now',
      image:
        'https://res.cloudinary.com/garbhagudiivf/image/upload/v1731568282/eggFreezing/xmqgi7cqorspafwmbcfd.png',
    },
    {
      title: 'Oocyte Freezing Package',
      description:
        'This excludes medications, consumables, work up and transfer. OPU and 2 years freezing will be included.',
      price: '₹1,50,000',
      taxes: '(Incl. of all taxes)',
      buttonText: 'Contact Us',
      image:
        'https://res.cloudinary.com/garbhagudiivf/image/upload/v1731568282/eggFreezing/cyaj5on2avd7yxfzs3tb.png',
    },
  ];
  return (
    <div className='pb-10 pt-5 md:pb-0'>
      <div className='flex items-center justify-center pb-10 font-nunito-Sans text-2xl font-extrabold text-black md:text-4xl'>
        Fertility Test
      </div>
      <div className='flex flex-col justify-center gap-5 px-5 md:px-10 lg:flex-row lg:gap-0'>
        <Image
          src={
            'https://res.cloudinary.com/garbhagudiivf/image/upload/v1732186483/eggFreezing/bj8btmanhoukexoviepg.png'
          }
          alt={''}
          width={100}
          height={100}
          className='h-[400px] w-full rounded-md'
        />
        <div className='px-5 lg:pl-5'>
          <p className='text-2xl font-semibold'>
            Understanding AMH – Anti Mullerian Hormone
          </p>
          <ul className='list-inside list-disc py-2 font-nunito-Sans text-lg text-[#6C6C6C]'>
            <li className='custom-list-item text-wrap'>
              A hormone produced by the ovaries in females and the testicles in
              males that helps develop reproductive organs. AMH levels can be
              measured in the blood to help diagnose conditions and make
              decisions about fertility treatments.
            </li>
            <li className='custom-list-item text-wrap'>
              AMH levels indicate the number of eggs remaining in the ovaries,
              also known as ovarian reserve. AMH levels decrease with age, and
              can be used to estimate how long a woman has left to conceive.
            </li>
          </ul>
          <div className='mt-7 w-2/3 md:w-1/3 lg:mt-10'>
            <span
              className='flex cursor-pointer items-center justify-center scroll-smooth rounded bg-[#D9576C] px-4 py-2 font-content font-semibold text-white shadow hover:opacity-90 focus:outline-none focus:ring dark:bg-gg-500 dark:text-white dark:hover:bg-gg-400 sm:w-auto'
              onClick={openModal}
            >
              Explore Packages
            </span>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'
          onClick={closeModal}
        >
          <div
            className='relative z-10 h-4/6 w-11/12 max-w-3xl overflow-scroll rounded-lg bg-white p-6 shadow-lg lg:h-fit lg:w-full lg:overflow-hidden'
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className='mb-2 text-center text-2xl font-semibold text-gray-900'>
              Fertility Screening Packages
            </h2>
            <p className='font-nunito-sans decoration-none mb-6 flex w-80 items-center justify-center text-center text-[14px] font-thin leading-[17.28px] text-gray-600 underline-offset-[from-font] md:ml-[28%]'>
              Following fertility screening packages will be available till 31st
              December 2024
            </p>

            {packages.map((pkg, index) => (
              <div
                key={index}
                className='mb-4 flex flex-col items-center gap-4 rounded-lg border p-2 lg:flex-row'
              >
                <Image
                  src={pkg.image}
                  width={100}
                  height={100}
                  alt={pkg.title}
                  className='h-52 w-9/12 rounded-md object-cover lg:h-28 lg:w-28'
                />
                <div className='flex-1 px-2'>
                  <h3 className='text-lg font-semibold text-gray-900'>
                    {pkg.title}
                  </h3>
                  <p className='font-nunito-sans decoration-none text-left text-[12px] text-sm font-normal leading-[18.55px] text-gray-600 underline-offset-[from-font]'>
                    {pkg.description}
                  </p>
                  <div className='mt-2 flex items-center justify-between'>
                    <button
                      onClick={() => setBookNow(true)}
                      className='rounded-md bg-[#DD6F6F] px-4 py-1 text-white'
                    >
                      Book an appointment
                    </button>
                  </div>
                </div>

                <div className='flex flex-row items-center justify-start gap-2 self-start lg:flex-col'>
                  <span className='text-xl font-semibold text-gray-900'>
                    {pkg.price}
                  </span>
                  <span className='text-sm text-gray-500'> {pkg.taxes}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {bookNow && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'
          onClick={() => setBookNow(false)}
        >
          <BookAnAppointment />
        </div>
      )}
    </div>
  );
}

{
  /* <div className='mx-auto flex w-10/12 flex-col justify-between gap-10 md:flex-row'>
<div className='relative h-[400px] md:h-[350px] md:w-full'>
  <Image
    src={
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1731567197/eggFreezing/h55ajjflanab267q8ssm.png'
    }
    width={350}
    height={350}
    alt='Image 1'
    loading='lazy'
    className='absolute left-7 top-0 h-[400px] w-[300px] md:left-0 md:h-[500px] md:w-[450px]'
  />


  <Image
    src={
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1731567197/eggFreezing/h2rbj9cognzqtpzelove.png'
    }
    width={350}
    height={350}
    alt='Image 2'
    loading='lazy'
    className='absolute left-10 top-3 h-[400px] w-[300px] md:left-3 md:h-[500px] md:w-[450px]'
  />
</div>

<div className='mx-auto mt-10 w-11/12 font-nunito-Sans md:w-full md:text-start'>
  {renderData.map((ele, index) => (
    <div key={index} className='py-2 text-white'>
      <div className='py-2 text-lg font-semibold leading-5 md:py-0 md:text-xl md:leading-6'>
        {index + 1}. {ele.title}
      </div>
      <div className='py-1 pl-5 text-lg font-medium opacity-80'>
        {ele.subTitle}
      </div>
      {renderData.length === index + 1 && (
        <div className='mt-7 w-2/3 lg:mt-14 lg:w-1/3'>
          <span
            className='flex cursor-pointer items-center justify-center scroll-smooth rounded bg-white px-4 py-2 font-content font-semibold text-[#D9576C] shadow hover:text-gg-400 focus:outline-none focus:ring active:text-rose-500 dark:bg-gg-500 dark:text-white dark:hover:bg-gg-400 sm:w-auto'
            onClick={openModal}
          >
            Explore Packages
          </span>
        </div>
      )}
    </div>
  ))}
</div>
</div> */
}
