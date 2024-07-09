import React from 'react';
import Form from '../unbounce/form';

const Register = () => {
  return (
    <div className='mx-auto max-w-7xl scroll-m-16' id='register'>
      <div className='xl:max-w-3xl'>
        <div className='flex flex-col items-center justify-center bg-gray-200'>
          <div className='pt-8 font-lexend text-4xl font-bold'>
            Register Now
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Register;
