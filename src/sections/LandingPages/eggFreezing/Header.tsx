import Logo from 'components/assets/logo';
import React, { useState } from 'react';
import Form from 'sections/LandingPages/eggFreezing/form';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className='mx-auto max-w-7xl px-3'>
        <div className='flex items-center justify-between py-3'>
          <Logo />
          <div
            onClick={() => setIsOpen(true)}
            className='cursor-pointer rounded-md bg-gg-500 px-3 py-2 font-lexend text-sm font-semibold text-white transition duration-300 ease-in-out hover:bg-gg-600'
          >
            Freeze Your Eggs
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'
          onClick={handleClose}
        >
          <Form />
        </div>
      )}
    </div>
  );
};

export default Header;
