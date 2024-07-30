import React from 'react';
import Form from './form';

const Register = () => {
  return (
    <div className='mx-auto max-w-7xl scroll-m-16' id='register'>
      <div className='xl:max-w-3xl'>
        <div className='flex flex-col items-center justify-center bg-gray-200'>
          <div className='m-5'>
          <a href="https://chat.whatsapp.com/DxWPnWHqQqIHo0PEY5RFyV" 
               target="_blank"
               rel="noopener noreferrer">
              <button className='w-70 rounded-lg bg-gg-500 px-5 py-3 text-xl text-white hover:bg-gg-600'>
                Join the Whatsapp group
              </button>
            </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
