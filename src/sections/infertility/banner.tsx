import Link from 'next/link';
import React from 'react';

const Banner = () => {
  return (
    <div>
      <div className='bg-[url(https://res.cloudinary.com/garbhagudiivf/image/upload/v1691229236/Misc/pregnant-woman-min_wvchfc.webp)] bg-cover bg-right sm:bg-center bg-no-repeat shadow-2xl'>
        <div className='w-full h-full bg-black bg-opacity-70 py-6'>
          <div className='h-[50vh] mx-auto max-w-5xl flex items-center'>
            <div className='absolute z-10'>
              <div className='text-center md:text-left w-full md:max-w-2xl text-base px-3 mx-auto'>
                <h1 className='text-3xl lg:text-4xl font-heading font-bold leading-tight text-brandPink'>
                  Infertility Treatment in Bangalore
                </h1>
              </div>
              <div className='text-base font-content md:max-w-xl text-center md:text-left px-3 mt-4 font-medium text-gray-200'>
                "GarbhaGudi IVF Centre offers cutting-edge infertility treatment
                in Bangalore, providing personalized solutions to enhance your
                chances of parenthood. Our renowned team of fertility experts
                and state-of-the-art facilities make us a leading choice for
                comprehensive and effective fertility care in Bangalore."
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
