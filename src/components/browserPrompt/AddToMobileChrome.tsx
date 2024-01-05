import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { HiDotsVertical } from 'react-icons/hi';
import { MdAddToHomeScreen } from 'react-icons/md';
import { ImArrowUp } from 'react-icons/im';

interface Props {
  closePrompt: () => void;
  doNotShowAgain: () => void;
}

const AddToMobileChrome = (props: Props) => {
  const { closePrompt, doNotShowAgain } = props;
  return (
    <div>
      <div className='fixed top-0 left-0 right-0 z-50 pt-12 px-4 text-white'>
        <ImArrowUp className='text-4xl absolute top-[10px] right-[10px] text-gg-500 z-10 animate-bounce' />
        <div className='relative bg-primary px-4 py-2 h-full rounded-xl flex flex-col space-y-3 justify-around items-center text-center'>
          <p className='font-lexend'>
            For the best experience, we recommend installing the GarbhaGudi app
            to your home screen!
          </p>
          <div className='flex space-x-2 pt-4 items-center font-lexend'>
            <p>Click the</p>
            <HiDotsVertical className='text-2xl' />
            <p>icon</p>
          </div>
          <div className='flex flex-col gap-2 items-center font-lexend w-full px-4'>
            <p>Scroll down and then click:</p>
            <div className='bg-gg-300 flex justify-center space-x-3 font-lexend items-center w-full px-4 py-2 rounded-lg text-zinc-900'>
              <MdAddToHomeScreen className='text-2xl' />
              <p>Add to Home Screen</p>
            </div>
          </div>
          <button
            className='border-2 px-3 py-1.5 font-lexend rounded-md hover:bg-gg-500'
            onClick={doNotShowAgain}
          >
            Don&apos;t show again
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToMobileChrome;
