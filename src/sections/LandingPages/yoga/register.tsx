import React from 'react';
import Form from '../unbounce/form';

const Register = () => {
  return (
    <div className='max-w-7xl mx-auto scroll-m-16' id='register'>
      <div className='max-w-3xl'>
        <div className='bg-gray-200 flex flex-col items-center justify-center'>
          <div className='text-4xl font-bold font-lexend pt-8'>
            Register Now
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Register;
