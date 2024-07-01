import Link from 'next/link';
import React, { useEffect } from 'react';
import {
  FaCalendar,
  FaClock,
  FaIndianRupeeSign,
  FaCheck,
} from 'react-icons/fa6';

const Floating: React.FC = () => {
  useEffect(() => {
    const adjustRightPosition = () => {
      const element = document.getElementById('yoga-challenge');
      if (element) {
        const screenWidth = window.innerWidth;
        const zoomLevel = window.devicePixelRatio;

        let rightValue = 'right-36'; // Default value

        if (zoomLevel > 1) {
          rightValue = 'right-10';
        } else if (screenWidth > 1920) {
          rightValue = 'right-96';
        } else if (screenWidth > 1280) {
          rightValue = 'right-48';
        } else if (screenWidth > 1024) {
          rightValue = 'right-32';
        }

        element.classList.remove(
          'right-10',
          'right-32',
          'right-48',
          'right-96'
        );
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

  useEffect(() => {
    const handleScroll = () => {
      const floatingElement = document.getElementById('yoga-challenge');
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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      id='yoga-challenge'
      className='fixed hidden lg:flex top-36 bg-gg-50 p-4 rounded-lg shadow-lg right-36 w-96 h-96 overflow-hidden'
    >
      <div className='max-w-xl'>
        <div className='flex flex-col items-start justify-start'>
          <div className='space-y-1.5'>
            <div className='text-2xl font-lexend'>21 - Days Yoga Challenge</div>
            <div className='space-y-1'>
              <div className='flex items-center justify-start space-x-3 pt-6 font-content'>
                <FaCalendar className='text-2xl text-gg-500' />{' '}
                <div>8th Jul - 28th Jul</div>
              </div>
              <div className='flex items-center justify-start space-x-3 pt-3 font-content'>
                <FaClock className='text-2xl text-gg-500' />{' '}
                <div>6 to 7:30 AM (IST)</div>
              </div>
              <div className='flex items-center justify-start space-x-3 pt-3 font-content'>
                <FaIndianRupeeSign className='text-2xl text-gg-500' />{' '}
                <div>Contribution: Rs: 990</div>
              </div>
              <div className='py-6'>
                <Link href='#register'>
                  <button className='bg-gg-500 hover:bg-gg-600 text-white rounded-lg px-4 py-2 font-lexend'>
                    Register
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <ul className='space-y-1 font-content'>
            <li className='flex items-center justify-start space-x-3'>
              <FaCheck className='text-2xl text-gg-500' />{' '}
              <div>Sleep better and eat healthier</div>
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
