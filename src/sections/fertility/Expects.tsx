import React, { Fragment } from 'react';
import Image from 'next/image';
import image1 from '../../assets/union-page/Dr. Shreya Thaparkar.png';
import image2 from '../../assets/union-page/Dr. Arjun Mehra.png';
import image3 from '../../assets/union-page/Dr. Mahika Singh.png';
import image4 from '../../assets/union-page/Dr. Avigyan Kapoor.png';
import image5 from '../../assets/union-page/image (4).png';
import image6 from '../../assets/union-page/image (5).png';
import { BsWhatsapp } from 'react-icons/bs';
import Link from 'next/link';

export default function Expects() {
  const renderDate = [
    {
      image: image1,
      name: 'Dr. Shreya Thaparkar',
      designation: ' MBBS, MD(Gynaecology)',
    },
    {
      image: image2,
      name: 'Dr. Arjun Mehra',
      designation: 'MBBS, MD (Medicine)',
    },
    {
      image: image3,
      name: 'Dr. Mahika Singh',
      designation: 'MBBS, MD (Gynaecology)',
    },
    {
      image: image4,
      name: 'Dr. Avigyan Kapoor',
      designation: ' MBBS, MD(Gynaecology)',
    },
    {
      image: image5,
      name: 'Dr. Vishal Kamra',
      designation: 'MBBS, MD (Medicine)',
    },
    {
      image: image6,
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
          <span className='font-figtree flex items-center justify-center gap-2 text-lg'>
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
        <Link
          href='#know-more'
          className='block w-full scroll-smooth rounded-[10px] bg-[#D9576C] px-4 py-2 font-content text-lg text-white shadow hover:opacity-80 focus:outline-none focus:ring active:text-rose-500 dark:bg-gg-500 dark:text-white dark:hover:bg-gg-400 sm:w-auto'
        >
          Call Us
        </Link>
      ),
    },
    {
      title: 'Take a Quiz/Fill Fertility Test',
      content:
        'Our interactive fertility quiz assesses your lifestyle, health, and age factors, providing a profile with recommendations.',

      btn: (
        <Link
          href='/treatments/ivf-treatment-fertility/fertility-quiz'
          className='block w-full scroll-smooth rounded-[10px] border-2 bg-[#1D1D1D] px-4 py-2 font-content text-lg text-white shadow hover:opacity-80 focus:outline-none focus:ring active:text-rose-500 dark:text-white sm:w-auto'
        >
          Take a Quiz
        </Link>
      ),
    },
  ];
  return (
    <Fragment>
      <div className='py-5'>
        <div className='font-nunito-Sans py-5 text-center text-4xl font-extrabold'>
          Meet our Fertility Experts
        </div>
        <div className='font-nunito-Sans mx-auto w-10/12 text-center text-xl text-[#1D1D1D] opacity-70'>
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
                  loading='lazy'
                />
                <div className='font-nunito-Sans flex flex-col items-center justify-center font-semibold'>
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

      <div className='bg-[#FFD9E038] pt-10 pb-20 '>
        <div className='font-nunito-Sans py-5 text-center text-4xl font-extrabold dark:text-white '>
          What Next?
        </div>
        <div className='font-nunito-Sans mx-auto w-10/12 text-center text-xl dark:text-white text-[#1D1D1D] opacity-70 pb-16'>
          Now since you read so much, here’s what you can do next
        </div>
        <div className='flex justify-evenly items-center gap-7 w-9/12 mx-auto'>
          {staticData.map((ele, index) => {
            return (
              <div key={index} className='border-2 border-[#F4F4F4] p-5 bg-white text-center rounded-lg'>
                <div className='font-figtree font-bold text-lg pb-2 text-black '>{ele.title}</div>
                <div className='text-base pb-3 tracking-tight text-[#6A6A6A]'>{ele.content}</div>
                <div>{ele.btn}</div>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
}
