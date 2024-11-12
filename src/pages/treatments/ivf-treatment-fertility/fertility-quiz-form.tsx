import React, { useEffect, useState } from 'react';
import Forward from '../../../assets/fertility-quiz/forward.png';
import Backward from '../../../assets/fertility-quiz/back.png';
import BackgroundImage from '../../../assets/fertility-quiz/background1.png';
import Link from 'next/link';
import { BsWhatsapp } from 'react-icons/bs';

export default function FertilityForm() {
  const [step, setStep] = useState<number>(40);
  const [page, setPage] = useState<number>(1);
  const [submit, setSubmit] = useState<boolean>(false);

  useEffect(() => {
    if (page === 1) {
      setStep(40);
    } else if (page === 2) {
      setStep(100);
    }
  }, [page]);

  const handleNextPage = () => {
    if (page < 2) setPage(page + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div className='flex min-h-screen items-center justify-center bg-[#FCFAF7]'>
      {!submit ? (
        <div className='w-full max-w-2xl rounded-md bg-[#FCFAF7] p-6 md:p-10'>
          <div className='mb-8'>
            <div className='relative pt-1'>
              <div className='mb-2 flex items-center justify-between'>
                <div className='h-4 w-full rounded-full bg-[#EFEFEF]'>
                  <div
                    className='h-2.5 rounded-full bg-[#ea4b6a]'
                    style={{ width: `${step}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {page === 1 && (
            <>
              <div className='mb-8 text-center'>
                <div className='font-nunito-Sans text-4xl font-bold text-[#1D1D1D]'>
                  You belong to which age group?
                </div>
                <p className='mt-2 text-lg text-[#6C6C6C]'>
                  Age is a key factor in fertility. Fertility naturally declines
                  with age, though the exact rate of decline varies.
                </p>
              </div>

              <div className='my-4 flex flex-col gap-4'>
                {['Under 25', '25-29', '30-35', '35-39', '40 & above'].map(
                  (label, index) => (
                    <button
                      key={index}
                      className='rounded-md border-2 border-[#C4C4C4] bg-[#FFFFFF] px-24 py-2'
                      onClick={() => setPage(2)}
                    >
                      {label}
                    </button>
                  ),
                )}
              </div>
            </>
          )}
          {page === 2 && (
            <>
              <div className='mb-8 flex flex-col items-center text-center'>
                <h1 className='text-4xl font-bold text-[#1D1D1D]'>
                  Tell us more about yourself
                </h1>
                <p className='mt-2 text-lg text-[#6C6C6C]'>
                  Thank you for trusting us! Please provide more details to help
                  us assist you better.
                </p>
              </div>

              <div className='flex flex-col gap-6 px-20'>
                <div>
                  <label className='mb-1 block text-sm font-semibold text-[#1D1D1D]'>
                    Email Id
                  </label>
                  <input
                    type='email'
                    placeholder='For example amitkumar1234@gmail.com'
                    className='w-full border-b border-gray-300 bg-transparent py-2 text-gray-900 placeholder-[#6C6C6CB2] outline-none focus:border-gray-800'
                  />
                </div>
                <div>
                  <label className='mb-1 block text-sm font-semibold text-[#1D1D1D]'>
                    Phone Number
                  </label>
                  <input
                    type='number'
                    placeholder='For example, 98503 95847'
                    className='w-full border-b border-gray-300 bg-transparent py-2 text-gray-900 placeholder-[#6C6C6CB2] outline-none focus:border-gray-800'
                  />
                </div>

                <button
                  className='self-end rounded-lg bg-[#ea4b6a] px-10 py-2 font-bold text-white hover:bg-[#ee6f88] focus:outline-none'
                  title='Submit quiz'
                  onClick={() => setSubmit(true)}
                >
                  Submit quiz
                </button>
              </div>
            </>
          )}
          {page !== 1 && (
            <div className='mt-8 flex gap-4'>
              <button
                onClick={handlePreviousPage}
                disabled={page === 1}
                className='flex items-center gap-2 text-sm font-semibold text-[#ea4b6a] hover:text-[#ee6f88] disabled:opacity-50'
              >
                <img
                  src={Backward.src}
                  alt='backward_icon'
                  className='h-5 w-5 md:h-6 md:w-6'
                />
              </button>
              <button
                onClick={handleNextPage}
                disabled={page === 2}
                className='flex items-center gap-2 text-sm font-semibold text-[#ea4b6a] hover:text-[#ee6f88] disabled:opacity-50'
              >
                <img
                  src={Forward.src}
                  alt='forward_icon'
                  className='h-5 w-5 md:h-6 md:w-6'
                />
              </button>
            </div>
          )}
        </div>
      ) : (
        <div>
          <img
            src={BackgroundImage.src}
            alt='timer_icon'
            className='absolute left-0 top-0 h-screen w-screen object-fill'
          />
          <div className='absolute left-[25%] top-[50%] text-center font-nunito-Sans'>
            <div className=' text-4xl font-bold text-[#1D1D1D]'>
              Wohoo! You just came closer to your goal!
            </div>
            <p className='mt-4 text-lg text-[#6C6C6C]'>
              Thanks for taking the quiz and let’s get you started superfast.
            </p>

            <div className='mt-5 flex flex-wrap items-center justify-center gap-4 text-base font-semibold'>
              <Link
                href='https://api.whatsapp.com/send/?phone=916383697088&text=Hi.'
                className='w-full rounded-[10px] border-2 border-white bg-[#49C958] px-4 py-2 font-content text-white hover:bg-green-400 focus:outline-none focus:ring active:bg-green-300 sm:w-auto'
              >
                <span className='flex items-center justify-center gap-2'>
                  <BsWhatsapp
                    size={22}
                    className='text-white dark:text-green-500'
                  />{' '}
                  Drop us a "Hi" here
                </span>
              </Link>

              <Link
                href='#know-more'
                className='w-full scroll-smooth rounded-[10px] bg-[#DD6F6F] px-4 py-2 font-content text-white shadow hover:text-white-400 focus:outline-none focus:ring active:text-rose-500 dark:bg-gg-500 dark:text-white dark:hover:bg-gg-400 sm:w-auto'
              >
                Book an Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
