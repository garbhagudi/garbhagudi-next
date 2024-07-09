import React from 'react';
import Form from './form';
import Image from 'next/image';
import FooterForm from 'assets/landing-page/footer-form.webp';

const EndForm = () => {
  return (
    <div id='form'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='flex items-center justify-center'>
            <div className='mx-auto'>
              <h4 className='text-4xl text-center text-gg-500 font-lexend font-bold'>
                Book an Appointment
              </h4>
              <div className='bg-[#005E7E] flex flex-col items-center'>
                <h2 className='text-white mt-3 text-center text-xl font-bold font-lexend'>Talk To Our Fertility Experts Today</h2>
                <div className='flex flex-col px-5 pt-4 mb-10 mt-5 w-full'>
                  <input type="text" placeholder='Full Name' className='rounded border border-gg-500 w-full  py-1 px-4' />
                  <input type="text" placeholder='Phone' className='rounded border border-gg-500 mt-5  py-1 px-4' />
                  <input type="text" placeholder='Email' className='rounded border border-gg-500 mt-5  py-1 px-4' />
                  <button className='bg-gg-500 font-lexend px-3 py-2 mt-5 w-1/2 mx-auto text-white rounded'> Submit </button>
               </div>
              </div>
            </div>
          </div>
          <div>
            <Image
              src={FooterForm}
              alt='EndForm Image'
              width={500}
              height={500}
              className='rounded-lg'
              fetchPriority='low'
              loading='lazy'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndForm;
