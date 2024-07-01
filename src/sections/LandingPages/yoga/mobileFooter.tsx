import React from 'react';
import { FaRupeeSign, FaUserGroup } from 'react-icons/fa6';

const MobileFooter = () => {
  return (
    <div className='max-w-7xl mx-auto lg:hidden fixed bottom-0 w-full'>
      <div className='max-w-3xl px-4 bg-gray-300/90 py-3 space-y-1.5'>
        <div className='flex items-center justify-between'>
          <div className='text-sm uppercase text-center font-lexend'>
            21 Day Yoga Challenge
          </div>
          <button className='bg-gg-500 hover:text-gg-600 text-white px-3 py-2 rounded-lg  font-lexend'>
            Register
          </button>
        </div>
        <div className='flex text-sm items-center justify-between space-x-6 font-content'>
          <div>Contribution: 990</div>
          <div>6275 registered</div>
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
