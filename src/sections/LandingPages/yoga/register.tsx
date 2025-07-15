import React from 'react';

const Register = () => {
  return (
    <div className='mx-auto max-w-7xl scroll-m-16' id='register'>
      <div className='xl:max-w-3xl'>
        <div className='flex flex-col items-center justify-center bg-gray-200'>
          <div className='m-5'>
            <a
              href='https://docs.google.com/forms/d/e/1FAIpQLSdWtCUSgT0umZB1b5qq6SC3W_kyAThXXSq83OlTAcP3A54XGw/viewform'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='w-70 rounded-lg bg-gg-500 px-5 py-3 text-xl text-white hover:bg-gg-600'>
                Join Us
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
