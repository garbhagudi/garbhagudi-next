import React from 'react';
import Link from 'next/link';

const CTA = () => {
  return (
    <div className='bg-[url(https://res.cloudinary.com/garbhagudiivf/image/upload/v1643286880/Banner/Behind_Doctors_fssazq.webp)] bg-cover bg-center relative'>
      <div className='bg-black bg-opacity-25 dark:bg-opacity-40 text-center py-16 lg:py-24'>
        <div className='text-2xl font-lexend py-6 px-4 flex justify-center z-10'>
          <div className='bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200 font-bold px-3 py-4 rounded-lg bg-opacity-90'>
            Join us in making a difference! Register now for the Ghar Ghar
            GaarbhaGudi.
          </div>
        </div>
        <button className='bg-white text-brandPink hover:bg-brandPink4 hover:text-white font-lexend py-3 rounded-lg px-4 mt-3'>
          <Link href={'/gg-care'}>Register Now</Link>
        </button>
      </div>
    </div>
  );
};

export default CTA;
