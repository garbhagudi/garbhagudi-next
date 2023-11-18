import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import Link from 'next/link';
import Image from 'next/image';

interface PriceSlashProps {
  originalPrice: number;
  slashedPrice: number;
}

const PriceSlash: React.FC<PriceSlashProps> = ({
  originalPrice,
  slashedPrice,
}) => {
  const calculateDiscountPercentage = () => {
    const discount = ((originalPrice - slashedPrice) / originalPrice) * 100;
    return Math.round(discount);
  };

  const formatNumberWithCommas = (number: number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <div className='flex items-start flex-col py-8'>
      <div className='flex items-center space-x-4 '>
        <div className=' text-gray-600 dark:text-gray-300 font-lexend text-3xl'>
          <span className='line-through font-bold font-heading'>
            ₹{formatNumberWithCommas(originalPrice)}
          </span>{' '}
          IVF Package
        </div>
      </div>
      <div className='text-gg-500 dark:text-gg-400 font-lexend text-3xl mt-5 flex items-center'>
        Now at &nbsp;
        <span className='font-bold font-heading'>
          ₹{formatNumberWithCommas(slashedPrice)}
        </span>
        <div className='ml-2 text-sm text-green-600 dark:text-green-500'>
          ({calculateDiscountPercentage()}% off)
        </div>
      </div>
      <div className='mt-5 text-sm'>
        Includes*:
        <ul className='list-inside list-disc'>
          <li>Consultations and scans during stimulations</li>
          <li>Ovatian Stimulation Injections</li>
          <li>Limited Lab investigations during stimulation</li>
          <li>OT Consumables ({'<'} ₹ 5000)</li>
          <li>Pre & Post Op Medications</li>
          <li>Egg Retrieval (OPU)</li>
          <li>ICSI</li>
          <li>Embryo Blastocyst</li>
          <li>Embryo Freezing (3 - Months)</li>
          <li>ET / FET Procedure </li>
        </ul>
        <div className='text-xs mt-8'>
          * Included particulars are applicable for 1 cycle only. Other terms
          and conditions apply
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <div className='max-w-7xl mx-auto'>
        <div className='text-4xl lg:text-5xl font-heading text-center text-gg-600 font-bold py-12 lg:py-24'>
          <h1 className='dark:bg-gray-200 max-w-lg mx-auto py-2 rounded-md dark:bg-opacity-80'>
            Paripoorna 2023
          </h1>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='flex items-start justify-center flex-col px-3'>
            <div className='font-heading text-2xl py-8 text-gg-500 dark:text-gg-400 font-bold'>
              &quot;Get a massive 90,000/-* off on your IVF Treatments&quot;
              <div className='block text-right text-gray-800 dark:text-gray-200 text-xs'>
                *Terms and conditions apply
              </div>
            </div>

            <div className='font-lexend text-lg text-gray-800 dark:text-gray-200'>
              Our intention is to serve maximum number of couples who are
              missing out on experiencing the joy of parenthood. We know that
              many couples cannot afford IVF. Keeping this in mind, GarbhaGudi
              IVF Centre in association with GarbhaGnan Foundation, has
              initiated this program called{' '}
              <span className='font-bold underline'>PARIPOORNA-2023. </span>
              <PriceSlash originalPrice={250000} slashedPrice={160000} />
              This December, celebrate the season of parenthood, with
              Paripoorna. GarbhaGudi IVF Centre is offering a flat{' '}
              <span className='font-bold underline'>₹90,000/-</span> off on your
              IVF cycle cost. Visit the GarbhaGudi branch nearest to you to
              avail the offer and take the first steps in your journey towards
              completeness.
              <div className='mt-10 flex items-start md:items-center justify-between flex-col lg:flex-row space-y-3 lg:space-y-0'>
                <div className='font-lexend px-3 py-2 bg-gg-500 dark:bg-gg-600 text-white rounded-xl'>
                  <WatchVideo />
                </div>
                <div className='font-lexend px-3 py-2 bg-purple-700 dark:bg-purple-800 text-white rounded-xl'>
                  <Link href='/contact.html'>
                    <div>Book an Appointment</div>
                  </Link>
                </div>
                <div className='font-lexend px-3 py-2 bg-yellow-500 dark:bg-yellow-600 text-white rounded-xl'>
                  <Link href='/features/paripoorna-2023/#how-to'>
                    <div>Know More</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center lg:ml-10'>
            <Image
              src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1699869285/paripoorna/Paripoorna_2023_Ver_Logo_Eng_bridnx.png'
              alt='pp logo'
              width={500}
              height={500}
              className='aspect-square mx-auto scale-90 lg:scale-105'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

const WatchVideo = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div>
        <button type='button' onClick={openModal}>
          Watch Video
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-2xl text-center font-heading font-bold leading-6 text-gray-900'
                  >
                    Paripoorna Launch
                  </Dialog.Title>

                  <div>
                    <div className='mt-8 overflow-hidden border-2 rounded-xl border-brandPink'>
                      <LiteYouTubeEmbed
                        id={'0G4ZkeVVX6M'}
                        title='Successful IVF Treatment Testimonial | GarbhaGudi IVF Centre | Dr Asha S Vijay'
                        poster='maxresdefault'
                      />
                    </div>
                  </div>

                  <div className='mt-4 text-center'>
                    <button
                      type='button'
                      className='inline-flex font-lexend justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
