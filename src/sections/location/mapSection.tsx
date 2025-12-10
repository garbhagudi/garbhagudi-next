'use client';

import Link from 'next/link';
import { RichText } from '@graphcms/rich-text-react-renderer';
import Image from 'next/image';
import { useState } from 'react';
import type { RichTextContent } from '@graphcms/rich-text-types';

interface MapSectionProps {
  maplink: string;
  address: string;
  description: RichTextContent;
  doctors: {
    id: string;
    image: {
      url: string;
    };
    imageUrl: string;
    name: string;
    designation: string;
    slug: string;
  }[];
  title: string;
}

const MapSection = ({ maplink, address, description, doctors, title }: MapSectionProps) => {
  const [showFullText, setShowFullText] = useState(false);

  return (
    <div className='px-3'>
      <div className='body-font relative mx-auto max-w-7xl text-gray-600'>
        <div className='inset-0 flex flex-wrap py-6 lg:flex-nowrap'>
          {/* Map Iframe */}
          <div className='relative flex h-[42rem] w-full items-end justify-start overflow-hidden rounded-lg border-2 border-brandPurpleDark bg-gray-300 p-2 md:ml-auto lg:w-1/2 lg:p-10'>
            <iframe
              width='100%'
              height='100%'
              className='absolute inset-0 dark:brightness-75 dark:contrast-150 dark:grayscale dark:invert'
              loading='lazy'
              title='map'
              src={maplink}
            ></iframe>

            {/* Address & Contact Info */}
            <div className='shadow-3xl relative flex flex-wrap rounded-3xl bg-white py-6 dark:bg-gray-800'>
              <div className='px-6 lg:w-1/2'>
                <div className='title-font font-qs text-xs font-semibold tracking-widest text-gray-800 dark:text-gray-200'>
                  ADDRESS
                </div>
                <p className='mt-1 font-content text-sm text-gray-800 dark:text-gray-200'>
                  {address}
                </p>
              </div>
              <div className='mt-4 px-6 lg:mt-0 lg:w-1/2'>
                <div className='font-qs text-xs font-semibold tracking-widest text-gray-800 dark:text-gray-200'>
                  EMAIL
                </div>
                <div className='leading-relaxed'>
                  <Link
                    href='mailto:dreams@garbhagudi.com'
                    className='font-qs text-sm text-brandPink'
                  >
                    dreams@garbhagudi.com
                  </Link>
                </div>
                <div className='mt-4 font-qs text-xs font-semibold tracking-widest text-gray-800 dark:text-gray-200'>
                  PHONE
                </div>
                <p className='font-qs text-sm leading-relaxed text-gray-800 dark:text-gray-200'>
                  <Link href={title === 'Davanagere' ? 'tel:+919108910832' : 'tel:+918880000909'}>
                    {title === 'Davanagere' ? '+91 9108 9108 32' : '+91 8880 0009 09'}
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className='flex flex-col items-center px-6 font-content text-gray-800 dark:text-gray-200 lg:w-1/2'>
            <h2 className='py-3 font-heading text-xl font-bold lg:text-2xl'>
              GarbhaGudi IVF Centre, {title}
            </h2>

            <div
              className={`relative w-full text-justify transition-all duration-500 ease-in-out ${
                showFullText ? 'max-h-full' : 'max-h-[580px] overflow-hidden'
              }`}
            >
              <RichText
                content={description}
                renderers={{
                  p: ({ children }) => <p className='text-justify'>{children}</p>,
                  a: ({ children, href }) => (
                    <a href={href} className='text-gg-500 underline'>
                      {children}
                    </a>
                  ),
                }}
              />

              {!showFullText && (
                <div className='pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-white to-transparent dark:from-gray-900'></div>
              )}
            </div>

            <button
              onClick={() => setShowFullText(!showFullText)}
              className='mt-4 text-sm font-semibold text-brandPink transition hover:underline'
            >
              {showFullText ? 'Show Less' : 'Read More'}
            </button>
          </div>
        </div>

        {/* Fertility Specialists */}
        <div className='flex w-full flex-col pb-8 md:mt-0'>
          <h2 className='py-10 text-center font-heading text-2xl font-semibold text-gray-800 dark:text-gray-200 lg:mt-0'>
            Fertility Specialists at {title}
          </h2>
          <div className='mx-auto grid grid-cols-2 gap-3 space-y-0 sm:gap-8 sm:space-y-0 lg:grid-cols-6'>
            {doctors?.map((item) => (
              <div
                className='mx-auto mb-2 flex transform flex-col items-center justify-start text-center transition-all duration-500 ease-in-out hover:scale-105'
                key={item?.id}
              >
                <Link href={`/fertility-experts/${item?.slug}`} passHref>
                  <div className='space-y-4'>
                    <div className='relative mx-auto h-40 w-40'>
                      <div className='bg-[length: 400%] absolute h-full w-full animate-rotate rounded-full bg-gradient-to-br from-brandPink3/80 to-purple-500/40'></div>
                      <Image
                        className='rounded-full bg-transparent shadow-2xl drop-shadow-2xl'
                        src={item?.imageUrl}
                        alt={item?.name}
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className='space-y-4'>
                      <div className='space-y-1 text-lg font-medium leading-6'>
                        <h3 className='text-brandDark font-content text-gray-800 dark:text-gray-200'>
                          {item?.name}
                        </h3>
                        <p className='font-content text-sm text-gg-500 dark:text-gg-400'>
                          {item?.designation}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
