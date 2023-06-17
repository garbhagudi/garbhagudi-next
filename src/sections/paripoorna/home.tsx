import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import Link from 'next/link';
import Image from 'next/image';

const Home = () => {
  return (
    <div>
      <div className='max-w-7xl mx-auto'>
        <div className='text-4xl lg:text-5xl font-heading text-center text-brandPink font-bold py-12 lg:py-24'>
          <h1>Paripoorna 2022</h1>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='flex items-start justify-center flex-col px-3 lg:px-0'>
            <div className='font-heading text-2xl py-8 text-brandPink font-bold'>
              &quot;Get upto 30,000/-* off on your IVF Treatments&quot;
              <span className='block text-right text-black text-xs'>
                *Terms and conditions apply
              </span>
            </div>

            <div className='font-content text-lg'>
              Our intention is to serve maximum number of couples who are
              missing out on experiencing the joy of parenthood. We know that
              many couples cannot afford IVF. Keeping this in mind, GarbhaGudi
              IVF Centre in association with GarbhaGnan Foundation, has
              initiated this program called{' '}
              <span className='font-bold underline'>PARIPOORNA-2022. </span>
              <br />
              <br />
              This December, celebrate the season of parenthood, with
              Paripoorna. GarbhaGudi IVF Centre is offering upto{' '}
              <span className='font-bold underline'>₹30,000/-</span> off on your
              IVF cycle cost. Visit the GarbhaGudi branch nearest to you to
              avail the offer and take the first steps in your journey towards
              completeness.
              <div className='mt-10 flex items-start md:items-center justify-between flex-col lg:flex-row space-y-3 lg:space-y-0'>
                <div className='font-content px-3 py-2 bg-brandPink text-white font-bold rounded-xl'>
                  <WatchVideo />
                </div>
                <div className='font-content px-3 py-2 bg-brandPurpleDark text-white font-bold rounded-xl'>
                  <Link href='/contact.html'>
                    <span>Book an Appointment</span>
                  </Link>
                </div>
                <div className='font-content px-3 py-2 bg-brandYellow text-white font-bold rounded-xl'>
                  <Link href='/features/paripoorna-2022/#how-to'>
                    <span>Know More</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center lg:ml-10'>
            <Image
              src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1669644730/paripoorna/Paripoorna_Logo_Eng-min_tetlth.png'
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
    window.location.reload();
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
                        id={'ufEbHSD-iVg'}
                        title='Successful IVF Treatment Testimonial | GarbhaGudi IVF Centre | Dr Asha S Vijay'
                        poster='maxresdefault'
                      />
                    </div>
                  </div>

                  <div className='mt-4 text-center'>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
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
