import { SlArrowRight } from 'react-icons/sl';
import Link from 'next/link';
import BookAnAppointment from './bookAnAppointment';
import { Fragment, useState } from 'react';

export default function Expects() {
  const staticData = [
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
        <section className='flex flex-col items-center justify-center'>
          <h1 className='mb-6 text-center text-4xl font-bold text-gray-800'>
            Meet our Fertility Experts
          </h1>
          <p className='mb-8 max-w-3xl text-center text-lg text-gray-600'>
            Our fertility experts are highly experienced professionals dedicated to helping you
            through every step of your journey. Whether you’re looking for advice or treatment, we
            are here to provide the support and care you deserve.
          </p>

          <Link href={'/fertility-experts'}>
            <button className='flex items-center gap-2 rounded-lg bg-[#D9576C] px-6 py-3 text-white shadow-lg transition duration-300 hover:opacity-90'>
              <span>Meet Our Fertility Experts</span>

              <SlArrowRight />
            </button>
          </Link>
        </section>
      </div>

      <div className='bg-[#FFD9E038] pb-20 pt-10'>
        <div className='py-2 text-center font-nunito-Sans text-2xl font-extrabold dark:text-white md:py-5 md:text-4xl'>
          What Next?
        </div>
        <div className='mx-auto w-8/12 pb-8 text-center font-nunito-Sans text-lg text-[#1D1D1D] opacity-70 dark:text-white md:w-10/12 md:pb-16 md:text-xl'>
          Now since you read so much, here’s what you can do next
        </div>
        <div className='mx-auto flex w-10/12 flex-col items-center justify-evenly gap-4 md:flex-row lg:w-6/12 lg:gap-7'>
          {staticData.map((ele, index) => {
            return (
              <div
                key={index}
                className='rounded-lg border-2 border-[#F4F4F4] bg-white p-5 text-center'
              >
                <div className='pb-2 font-figtree text-xl font-bold text-black md:text-lg'>
                  {ele.title}
                </div>
                <div className='pb-3 text-base tracking-tight text-[#6A6A6A]'>{ele.content}</div>
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
