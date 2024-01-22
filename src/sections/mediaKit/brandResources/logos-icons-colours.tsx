import React from 'react';
import Image from 'next/image';
import { data } from 'sections/mediaKit/brandResources/iconsData';

const LogosIconsColours = () => {
  return (
    <div className=''>
      <div className='space-y-4'>
        {data.map((assets) => (
          <div key={assets.id}>
            <div className='text-xl font-lexend py-4 font-bold text-gray-800 dark:text-gray-200'>
              {assets.title}
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-x-5 mt-4'>
              <div className='flex items-center justify-center bg-white rounded-md'>
                <Image
                  src={assets.img}
                  alt='GarbhaGudi Full Color Logo'
                  width={500}
                  height={500}
                  className='rounded-md flex items-center justify-center'
                ></Image>
              </div>
              <div className='grid grid-cols-3 mt-3 gap-3'>
                {assets.colors.map((items) => (
                  <div
                    className='flex items-center justify-center rounded-md cursor-pointer'
                    key={items.id}
                  >
                    <div
                      className='w-16 h-16 rounded-md dark:border border-gray-500'
                      style={{ backgroundColor: items.color }}
                      onClick={() => {
                        navigator.clipboard.writeText(items.color);
                        alert(`${items.color} Copied to clipboard`);
                      }}
                    ></div>
                  </div>
                ))}
              </div>
              <div className='flex items-center justify-center space-x-2 mt-6 md:mt-0'>
                <a
                  href={assets.svg}
                  download={`${assets.title}.svg`}
                  target='_blank'
                  className='font-lexend bg-gray-800 dark:bg-gg-500 text-white px-4 py-2 rounded-md'
                >
                  SVG
                </a>
                <a
                  href={assets.png}
                  download={`${assets.title}.png`}
                  target='_blank'
                  className='font-lexend bg-gray-800 dark:bg-gg-500 text-white px-4 py-2 rounded-md'
                >
                  PNG
                </a>
                <a
                  href={assets.jpg}
                  download={`${assets.title}.jpg`}
                  target='_blank'
                  className='font-lexend bg-gray-800 dark:bg-gg-500 text-white px-4 py-2 rounded-md'
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
