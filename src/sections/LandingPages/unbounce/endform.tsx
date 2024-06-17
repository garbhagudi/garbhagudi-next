import React from 'react';
import Form from './form';
import Image from 'next/image';

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
              <Form />
            </div>
          </div>
          <div>
            <Image
              src={
                'https://app.unbounce.com/publish/assets/7a5ae348-1a99-48a7-9a30-8904bc9d99dc/3f47a887-d90d-48e9-99a9-0e889532fa80-2a382df3-c1b9-4783-ac74-6b46cb196052-web-changes-3-b-min-original.webp'
              }
              alt='EndForm Image'
              width={500}
              height={500}
              className='rounded-lg'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndForm;
