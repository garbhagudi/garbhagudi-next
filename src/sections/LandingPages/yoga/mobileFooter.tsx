import React from 'react';

const MobileFooter = () => {
  return (
    <div className='fixed bottom-0 mx-auto w-full xl:hidden'>
      <div className='space-y-1.5 bg-gray-300/90 px-4 py-3'>
        <div className='flex items-center justify-between'>
          <div className='text-center font-lexend text-sm uppercase'>
            Swasthya Saptaha — A Journey to Rejuvenation!
          </div>
          <a
            href='https://docs.google.com/forms/d/e/1FAIpQLSdWtCUSgT0umZB1b5qq6SC3W_kyAThXXSq83OlTAcP3A54XGw/viewform'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button className='rounded-lg bg-gg-500 px-3 py-2 font-lexend text-white hover:text-gg-600'>
              Join Us
            </button>
          </a>
        </div>
        <div className='flex items-center justify-between space-x-6 font-content text-sm'>
          <div>Contribution: Free</div>
          <div>6275 registered</div>
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
