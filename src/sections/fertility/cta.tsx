import React, { useState } from 'react';
import Link from 'next/link';
import BookAnAppointment from './bookAnAppointment';

const CTA: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div
      className='relative flex h-screen max-h-64 items-center justify-center bg-cover bg-center shadow-xl'
      style={{
        backgroundImage: `url('https://res.cloudinary.com/garbhagudiivf/image/upload/v1691232590/Misc/happy-smiling-mother-playing-with-newborn-child-comfy-light-bedroom-front-window-moments-motherhood-happiness-with-kids-family-concept-min_txfdml.webp')`,
      }}
    >
      <div className='absolute h-full w-full bg-gray-800 opacity-30 dark:opacity-60'></div>
      <div className='z-10 max-w-lg rounded-lg bg-white bg-opacity-75 p-8 shadow-md dark:bg-gray-800'>
        <h2 className='mb-2 font-heading text-2xl font-bold'>
          Get Started Today!
        </h2>
        <p className='mb-4 font-content font-medium text-gray-800 dark:text-gray-200'>
          Contact us now to start your journey with us and experience the joy of
          parenthood.
        </p>
        <button
          onClick={() => setIsOpen(true)}
          className='rounded-lg bg-gg-500 px-4 py-2 font-semibold text-white hover:bg-gg-400 focus:outline-none dark:bg-gray-600 dark:hover:bg-gg-400'
        >
          Book an Appointment{' '}
        </button>
      </div>
      {isOpen && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'
          onClick={handleClose}
        >
          <BookAnAppointment />
        </div>
      )}
    </div>
  );
};

export default CTA;
