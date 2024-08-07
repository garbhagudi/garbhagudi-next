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
                <Form />
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