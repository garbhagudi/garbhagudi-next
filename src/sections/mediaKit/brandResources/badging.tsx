import Link from 'next/link';
import React from 'react';
import { RxOpenInNewWindow } from 'react-icons/rx';

const Typography = () => {
  return (
    <div>
      <div className='py-8 font-heading text-3xl font-bold lg:py-10'>Fonts</div>
      <div className='font-lexend text-xl underline'>English</div>
      <div className=''>
        <div className='mt-3 border-b pb-2 font-lexend text-4xl'>Headings</div>
        <div className='mt-4 flex items-center justify-start space-x-3 font-heading text-2xl font-bold'>
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
          <p className='mt-3 font-heading text-xs'>
            This is a sample text for extra small text size
          </p>
          <p className='mt-3 font-heading text-sm'>
            This is a sample text for small text size
          </p>
          <p className='mt-3 font-heading text-base'>
            This is a sample text for base text size
          </p>
          <p className='mt-3 font-heading text-lg'>
            This is a sample text for large text size
          </p>
          <p className='mt-3 font-heading text-xl'>
            This is a sample text for extra large text size
          </p>
        </div>
      </div>
      <div className=''>
        <div className='mt-3 border-b pb-2 pt-3 font-lexend text-4xl'>
          Content
        </div>
        <div className='flex items-center space-x-2'>
          <div className='mt-4 flex items-center justify-start space-x-3 font-content text-2xl font-bold'>
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
          <div className='mt-4 font-content text-2xl'>&</div>
          <div className='mt-4 flex items-center justify-start space-x-3 font-lexend text-2xl font-bold'>
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
            <p className='mt-3 font-content text-xs'>
              This is a sample text for extra small text size
            </p>
            <p className='mt-3 font-content text-sm'>
              This is a sample text for small text size
            </p>
            <p className='mt-3 font-content text-base'>
              This is a sample text for base text size
            </p>
            <p className='mt-3 font-content text-lg'>
              This is a sample text for large text size
            </p>
            <p className='mt-3 font-content text-xl'>
              This is a sample text for extra large text size
            </p>
          </div>
          <div className='text-sizes mt-6'>
            <p className='mt-3 font-lexend text-xs'>
              This is a sample text for extra small text size
            </p>
            <p className='mt-3 font-lexend text-sm'>
              This is a sample text for small text size
            </p>
            <p className='mt-3 font-lexend text-base'>
              This is a sample text for base text size
            </p>
            <p className='mt-3 font-lexend text-lg'>
              This is a sample text for large text size
            </p>
            <p className='mt-3 font-lexend text-xl'>
              This is a sample text for extra large text size
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className='mt-3 border-b pb-2 pt-3 font-lexend text-4xl'>
          Icons
        </div>
        <div className='mt-4 flex items-center justify-start space-x-3 font-lexend text-2xl font-bold'>
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
