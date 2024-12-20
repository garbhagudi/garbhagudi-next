import React, { useEffect } from 'react';
import { FaCalendar, FaClock, FaIndianRupeeSign, FaCheck } from 'react-icons/fa6';

const Floating: React.FC = () => {
  useEffect(() => {
    const adjustRightPosition = () => {
      const element = document.getElementById('yoga-challenge');
      if (element) {
        const screenWidth = window.innerWidth;
        const zoomLevel = window.devicePixelRatio;

        let rightValue = 'right-36'; // Default value

        if (zoomLevel > 1) {
          rightValue = 'right-1';
        } else if (screenWidth > 1920) {
          rightValue = 'right-96';
        } else if (screenWidth > 1280) {
          rightValue = 'right-48';
        } else if (screenWidth > 1024) {
          rightValue = 'right-32';
        }

        element.classList.remove('right-1', 'right-32', 'right-48', 'right-96');
        element.classList.add(rightValue);
      }
    };

    window.addEventListener('resize', adjustRightPosition);
    // Initial adjustment
    adjustRightPosition();

    return () => {
      window.removeEventListener('resize', adjustRightPosition);
    };
  }, []);

  const adjustZIndex = () => {
    const floatingElement = document.getElementById('floating-window');
    const heroElement = document.getElementById('hero-section');

    if (floatingElement && heroElement) {
      const heroBottom = heroElement.getBoundingClientRect().bottom;

      if (heroBottom < 0) {
        floatingElement.style.zIndex = '10'; // Bring to front
      } else {
        floatingElement.style.zIndex = '-10'; // Stay behind
      }
    }
  };

  useEffect(() => {
    // Adjust z-index on initial load
    adjustZIndex();

    // Adjust z-index on scroll
    window.addEventListener('scroll', adjustZIndex);

    return () => {
      window.removeEventListener('scroll', adjustZIndex);
    };
  }, []);

  return (
    <div
      id='floating-window'
      className='fixed right-16 top-36 hidden h-96 w-96 overflow-hidden rounded-lg bg-gg-50 p-4 shadow-lg xl:flex'
    >
      <div className='max-w-xl'>
        <div className='flex flex-col items-start justify-start'>
          <div className='space-y-1.5'>
            <div className='font-lexend text-2xl'>21 - Days Yoga Challenge</div>
            <div className='space-y-1'>
              <div className='flex items-center justify-start space-x-3 pt-6 font-content'>
                <FaCalendar className='text-2xl text-gg-500' /> <div>25th Jul - 14th Aug</div>
              </div>
              <div className='flex items-center justify-start space-x-3 pt-3 font-content'>
                <FaClock className='text-2xl text-gg-500' /> <div>7:30 AM to 8:30 AM (IST)</div>
              </div>
              <div className='flex items-center justify-start space-x-3 pt-3 font-content'>
                <FaIndianRupeeSign className='text-2xl text-gg-500' /> <div>Contribution: Free</div>
              </div>
              <div className='py-6'>
                <a
                  href='https://chat.whatsapp.com/DxWPnWHqQqIHo0PEY5RFyV'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='rounded-lg bg-gg-500 px-4 py-2 font-lexend text-white hover:bg-gg-600'>
                    Join the Whatsapp group
                  </button>
                </a>
              </div>
            </div>
          </div>
          <ul className='space-y-1 font-content'>
            <li className='flex items-center justify-start space-x-3'>
              <FaCheck className='text-2xl text-gg-500' /> <div>Sleep better and eat healthier</div>
            </li>
            <li className='flex items-center justify-start space-x-3'>
              <FaCheck className='text-2xl text-gg-500' />{' '}
              <div>Activation of all muscle groups</div>
            </li>
            <li className='flex items-center justify-start space-x-3'>
              <FaCheck className='text-2xl text-gg-500' />{' '}
              <div>High energy levels and much more</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Floating;
