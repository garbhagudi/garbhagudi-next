import React from 'react';
import Image from 'next/image';
import { data } from 'sections/mediaKit/brandResources/iconsData';

const LogosIconsColours = () => {
  return (
    <div className=''>
      <div className='space-y-4'>
        {data.map((assets) => (
          <div key={assets.id}>
            <div className='py-4 font-lexend text-xl font-bold text-gray-800 dark:text-gray-200'>
              {assets.title}
            </div>
            <div className='mt-4 grid grid-cols-1 gap-x-5 md:grid-cols-3'>
              <div className='flex items-center justify-center rounded-md bg-white'>
                <Image
                  src={assets.img}
                  alt='GarbhaGudi Full Color Logo'
                  width={500}
                  height={500}
                  className='flex items-center justify-center rounded-md'
                ></Image>
              </div>
              <div className='mt-3 grid grid-cols-3 gap-3'>
                {assets.colors.map((items) => (
                  <div
                    className='flex cursor-pointer items-center justify-center rounded-md'
                    key={items.id}
                  >
                    <div
                      className='h-16 w-16 rounded-md border-gray-500 dark:border'
                      style={{ backgroundColor: items.color }}
                      onClick={() => {
                        navigator.clipboard.writeText(items.color);
                        alert(`${items.color} Copied to clipboard`);
                      }}
                    ></div>
                  </div>
                ))}
              </div>
              <div className='mt-6 flex items-center justify-center space-x-2 md:mt-0'>
                <a
                  href={assets.svg}
                  download={`${assets.title}.svg`}
                  target='_blank'
                  className='rounded-md bg-gray-800 px-4 py-2 font-lexend text-white dark:bg-gg-500'
                >
                  SVG
                </a>
                <a
                  href={assets.png}
                  download={`${assets.title}.png`}
                  target='_blank'
                  className='rounded-md bg-gray-800 px-4 py-2 font-lexend text-white dark:bg-gg-500'
                >
                  PNG
                </a>
                <a
                  href={assets.jpg}
                  download={`${assets.title}.jpg`}
                  target='_blank'
                  className='rounded-md bg-gray-800 px-4 py-2 font-lexend text-white dark:bg-gg-500'
                >
                  JPG
                </a>
              </div>
            </div>
          </div>
        ))}
        <div className='mt-6'>
          <div className='font-lexend text-2xl font-bold text-gray-800 dark:text-gray-200'>
            Additional Colours
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogosIconsColours;
