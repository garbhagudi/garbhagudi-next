import Link from 'next/link';
import React from 'react';
import { RxOpenInNewWindow } from 'react-icons/rx';

const Typography = () => {
  return (
    <div>
      <div className='font-heading text-3xl font-bold py-8 lg:py-10'>Fonts</div>
      <div className='font-lexend text-xl underline'>English</div>
      <div className=''>
        <div className='font-lexend mt-3 pb-2 border-b text-4xl'>Headings</div>
        <div className='font-heading mt-4 text-2xl font-bold flex items-center justify-start space-x-3'>
          <div>B612</div>
          <Link
            href={
              'https://fonts.google.com/specimen/B612?preview.text=GarbhaGudi%20is%20regarded%20as%20one%20of%20the%20best%20IVF%20centres%20in%20India'
            }
            target='_blank'
          >
            <RxOpenInNewWindow />
          </Link>
        </div>
        <div className='text-sizes mt-6'>
          <p className='font-heading mt-3 text-xs'>
            This is a sample text for extra small text size
          </p>
          <p className='font-heading mt-3 text-sm'>
            This is a sample text for small text size
          </p>
          <p className='font-heading mt-3 text-base'>
            This is a sample text for base text size
          </p>
          <p className='font-heading mt-3 text-lg'>
            This is a sample text for large text size
          </p>
          <p className='font-heading mt-3 text-xl'>
            This is a sample text for extra large text size
          </p>
        </div>
      </div>
      <div className=''>
        <div className='font-lexend mt-3 pb-2 border-b text-4xl pt-3'>
          Content
        </div>
        <div className='flex items-center space-x-2'>
          <div className='font-content mt-4 text-2xl font-bold flex items-center justify-start space-x-3'>
            <div>Nunito</div>
            <Link
              href={
                'https://fonts.google.com/specimen/Nunito?preview.text=GarbhaGudi%20is%20regarded%20as%20one%20of%20the%20best%20IVF%20centres%20in%20India'
              }
              target='_blank'
            >
              <RxOpenInNewWindow />
            </Link>
          </div>
          <div className='font-content mt-4 text-2xl'>&</div>
          <div className='font-lexend mt-4 text-2xl font-bold flex items-center justify-start space-x-3'>
            <div>Lexend</div>
            <Link
              href={
                'https://fonts.google.com/specimen/Lexend?preview.text=GarbhaGudi%20is%20regarded%20as%20one%20of%20the%20best%20IVF%20centres%20in%20India'
              }
              target='_blank'
            >
              <RxOpenInNewWindow />
            </Link>
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='text-sizes mt-6'>
            <p className='font-content mt-3 text-xs'>
              This is a sample text for extra small text size
            </p>
            <p className='font-content mt-3 text-sm'>
              This is a sample text for small text size
            </p>
            <p className='font-content mt-3 text-base'>
              This is a sample text for base text size
            </p>
            <p className='font-content mt-3 text-lg'>
              This is a sample text for large text size
            </p>
            <p className='font-content mt-3 text-xl'>
              This is a sample text for extra large text size
            </p>
          </div>
          <div className='text-sizes mt-6'>
            <p className='font-lexend mt-3 text-xs'>
              This is a sample text for extra small text size
            </p>
            <p className='font-lexend mt-3 text-sm'>
              This is a sample text for small text size
            </p>
            <p className='font-lexend mt-3 text-base'>
              This is a sample text for base text size
            </p>
            <p className='font-lexend mt-3 text-lg'>
              This is a sample text for large text size
            </p>
            <p className='font-lexend mt-3 text-xl'>
              This is a sample text for extra large text size
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className='font-lexend mt-3 pb-2 border-b text-4xl pt-3'>
          Icons
        </div>
        <div className='font-lexend mt-4 text-2xl font-bold flex items-center justify-start space-x-3'>
          <div>React-icons</div>
          <Link
            href={'https://www.npmjs.com/package/react-icons'}
            target='_blank'
          >
            <RxOpenInNewWindow />
          </Link>
          <div className='text-sm font-normal'>Preview</div>
          <Link
            href={'https://react-icons.github.io/react-icons/search'}
            target='_blank'
            className='text-sm font-normal'
          >
            <RxOpenInNewWindow />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Typography;
