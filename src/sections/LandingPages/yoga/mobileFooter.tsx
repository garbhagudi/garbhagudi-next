import React from 'react';
import { FaRupeeSign, FaUserGroup } from 'react-icons/fa6';
import Link from 'next/link';

const MobileFooter = () => {
  return (
    <div className='fixed bottom-0 mx-auto w-full xl:hidden'>
      <div className='space-y-1.5 bg-gray-300/90 px-4 py-3'>
        <div className='flex items-center justify-between'>
          <div className='text-center font-lexend text-sm uppercase'>
            21 Day Yoga Challenge
          </div>
          <a href="https://chat.whatsapp.com/DxWPnWHqQqIHo0PEY5RFyV" 
               target="_blank"
               rel="noopener noreferrer">
          <button className='rounded-lg bg-gg-500 px-3 py-2 font-lexend text-white hover:text-gg-600'>
            Join Now
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
