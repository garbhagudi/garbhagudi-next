import React from 'react';
import Link from 'next/link';

const CTA: React.FC = () => {
  return (
    <div
      className='relative flex items-center justify-center h-screen bg-cover bg-center max-h-64 shadow-xl'
      style={{
        backgroundImage: `url('https://res.cloudinary.com/garbhagudiivf/image/upload/v1691232590/Misc/happy-smiling-mother-playing-with-newborn-child-comfy-light-bedroom-front-window-moments-motherhood-happiness-with-kids-family-concept-min_txfdml.webp')`,
      }}
    >
      <div className='absolute w-full h-full bg-gray-800 opacity-30 dark:opacity-60'></div>
      <div className='max-w-lg bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md bg-opacity-75 z-10'>
        <h2 className='text-2xl font-bold mb-2 font-heading'>
          Get Started Today!
        </h2>
        <p className='text-gray-800 dark:text-gray-200 mb-4 font-content font-medium'>
          Contact us now to start your journey with us and experience the joy of
          parenthood.
        </p>
        <button className='bg-gg-500 dark:bg-gray-600 hover:bg-gg-400 dark:hover:bg-gg-400 text-white font-semibold px-4 py-2 rounded-lg focus:outline-none'>
          <Link href='/gg-care'>Book an Appointment</Link>
        </button>
      </div>
    </div>
  );
};

export default CTA;
