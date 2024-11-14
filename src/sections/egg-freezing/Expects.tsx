import React, { Fragment, useState } from 'react';
import Image from 'next/image';
import { BsWhatsapp } from 'react-icons/bs';
import Link from 'next/link';
import BookAnAppointment from './bookAnAppointment';

export default function Expects() {
  const renderDate = [
    {
      image:
        'https://res.cloudinary.com/garbhagudiivf/image/upload/v1731567195/eggFreezing/j328gmwzbhjalc9zuqeh.png',
      name: 'Dr. Shreya Thaparkar',
      designation: ' MBBS, MD(Gynaecology)',
    },
    {
      image:
        'https://res.cloudinary.com/garbhagudiivf/image/upload/v1731567195/eggFreezing/e3my0oczhjvsddbeq0rz.png',
      name: 'Dr. Arjun Mehra',
      designation: 'MBBS, MD (Medicine)',
    },
    {
      image:
        'https://res.cloudinary.com/garbhagudiivf/image/upload/v1731567195/eggFreezing/njqms3mdm883azztpwbu.png',
      name: 'Dr. Mahika Singh',
      designation: 'MBBS, MD (Gynaecology)',
    },
    {
      image:
        'https://res.cloudinary.com/garbhagudiivf/image/upload/v1731567195/eggFreezing/qlbrvtdvwidbihx4e6nx.png',
      name: 'Dr. Avigyan Kapoor',
      designation: ' MBBS, MD(Gynaecology)',
    },
    {
      image:
        'https://res.cloudinary.com/garbhagudiivf/image/upload/v1731567196/eggFreezing/zlwt6aymkp4by8taozmp.png',
      name: 'Dr. Vishal Kamra',
      designation: 'MBBS, MD (Medicine)',
    },
    {
      image:
        'https://res.cloudinary.com/garbhagudiivf/image/upload/v1731567196/eggFreezing/a8oypa5u7p8uihmrfyg4.png',
      name: 'Dr. Vishal Kamra',
      designation: 'MBBS, MD (Medicine)',
    },
  ];

  const staticData = [
    {
      title: 'Chat with us over Whatsapp',
      content:
        'Connect instantly for questions or to learn more about egg freezing, without needing an appointment.',

      btn: (
        <Link
          href='https://api.whatsapp.com/send/?phone=916383697088&text=Hi.'
          className='block w-full rounded-[10px] border-2 border-white bg-[#49C958] px-4 py-2 font-content text-white hover:bg-green-400 focus:outline-none focus:ring active:bg-green-300 sm:w-auto'
        >
          <span className='flex items-center justify-center gap-2 font-figtree text-lg'>
            <BsWhatsapp size={22} className='text-white' /> Drop us a "Hi" here
          </span>
        </Link>
      ),
    },
    {
      title: 'Call Us/Book an Appointment',
      content:
        'Speak directly with one of our experts for an in-depth consultation, guiding you through every option.',

      btn: (
        <div
          onClick={() => setIsOpen(true)}
          className='block w-full scroll-smooth rounded-[10px] bg-[#D9576C] px-4 py-2 font-content text-lg text-white shadow hover:opacity-80 focus:outline-none focus:ring active:text-rose-500 dark:bg-gg-500 dark:text-white dark:hover:bg-gg-400 sm:w-auto'
        >
          Call Us
        </div>
      ),
    },
    {
      title: 'Take a Quiz/Fill Fertility Test',
      content:
        'Our interactive fertility quiz assesses your lifestyle, health, and age factors, providing a profile with recommendations.',

      btn: (
        <Link
          href='/treatments/ivf-treatment-egg-freezing/egg-freezing-quiz'
          className='block w-full scroll-smooth rounded-[10px] border-2 bg-[#1D1D1D] px-4 py-2 font-content text-lg text-white shadow hover:opacity-80 focus:outline-none focus:ring active:text-rose-500 dark:text-white sm:w-auto'
        >
          Take a Quiz
        </Link>
      ),
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <Fragment>
      <div className='py-5'>
        <div className='py-5 text-center font-nunito-Sans text-4xl font-extrabold'>
          Meet our Fertility Experts
        </div>
        <div className='mx-auto w-10/12 text-center font-nunito-Sans text-xl text-[#1D1D1D] opacity-70'>
          Our dedicated team brings years of experience and a compassionate
          approach to fertility care. Meet the specialists committed to
          supporting your journey.
        </div>
        <div className='mx-auto mt-5 grid w-10/12 grid-cols-3 items-center justify-center gap-5'>
          {renderDate.map((ele, index) => {
            return (
              <div
                key={index}
                className='my-5 flex flex-col items-center justify-center'
              >
                <Image
                  src={ele.image}
                  width={320}
                  height={160}
                  alt={`Image ${index + 1}`}
                />
                <div className='flex flex-col items-center justify-center font-nunito-Sans font-semibold'>
                  <span className='pb-1 pt-2 text-xl'>{ele.name}</span>
                  <span className='text-lg text-[#6C6C6C]'>
                    {ele.designation}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className='bg-[#FFD9E038] pb-20 pt-10'>
        <div className='py-5 text-center font-nunito-Sans text-4xl font-extrabold dark:text-white'>
          What Next?
        </div>
        <div className='mx-auto w-10/12 pb-16 text-center font-nunito-Sans text-xl text-[#1D1D1D] opacity-70 dark:text-white'>
          Now since you read so much, here’s what you can do next
        </div>
        <div className='mx-auto flex w-9/12 items-center justify-evenly gap-7'>
          {staticData.map((ele, index) => {
            return (
              <div
                key={index}
                className='rounded-lg border-2 border-[#F4F4F4] bg-white p-5 text-center'
              >
                <div className='pb-2 font-figtree text-lg font-bold text-black'>
                  {ele.title}
                </div>
                <div className='pb-3 text-base tracking-tight text-[#6A6A6A]'>
                  {ele.content}
                </div>
                <div>{ele.btn}</div>
              </div>
            );
          })}
        </div>
      </div>

      {isOpen && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'
          onClick={handleClose}
        >
          <BookAnAppointment />
        </div>
      )}
    </Fragment>
  );
}
