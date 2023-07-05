import React from 'react';
import Link from 'next/link';
import { RichText } from '@graphcms/rich-text-react-renderer';
import Image from 'next/image';

const MapSection = ({ maplink, address, description, doctors, title }) => {
  return (
    <div className='px-3'>
      <div className='text-gray-600 body-font relative max-w-7xl mx-auto'>
        <div className='py-6 flex flex-wrap lg:flex-nowrap inset-0 '>
          <div className='lg:w-1/2 bg-gray-300 rounded-lg overflow-hidden p-2 lg:p-10 flex items-end justify-start relative h-[42rem] md:ml-auto w-full border-2 border-brandPurpleDark'>
            <iframe
              width='100%'
              height='100%'
              className='absolute inset-0'
              loading='lazy'
              title='map'
              src={maplink}
            ></iframe>
            <div className='bg-white relative flex flex-wrap py-6 rounded-3xl shadow-3xl'>
              <div className='lg:w-1/2 px-6'>
                <div className='title-font font-semibold text-gray-900 tracking-widest text-xs font-qs'>
                  ADDRESS
                </div>
                <p className='mt-1 font-content text-sm'>{address}</p>
              </div>
              <div className='lg:w-1/2 px-6 mt-4 lg:mt-0'>
                <div className='font-semibold text-gray-900 tracking-widest text-xs font-qs'>
                  EMAIL
                </div>
                <div className='text-indigo-500 leading-relaxed'>
                  <Link
                    href='mailto:dreams@garbhagudi.com'
                    className='text-brandPink font-qs text-sm'
                  >
                    dreams@garbhagudi.com
                  </Link>
                </div>
                <div className='font-semibold text-gray-900 tracking-widest text-xs mt-4 font-qs'>
                  PHONE
                </div>
                <p className='leading-relaxed font-qs text-sm'>
                  <Link href='tel:+919108910832'>+91 9108 9108 32</Link>
                </p>
                <div className='font-semibold text-gray-900 tracking-widest text-xs mt-4 font-qs'>
                  WhatsApp
                </div>
                <p className='leading-relaxed font-qs text-sm'>
                  <Link
                    href='https://wa.me/918884183338?text=Hi.'
                    target='_blank'
                    rel='noreferrer'
                  >
                    +91 888 418 3338
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className='lg:w-1/2 px-6 font-content flex flex-col items-center'>
            <h2 className='py-3 text-xl lg:text-2xl font-heading font-bold'>
              GarbhaGudi IVF Centre, {title}
            </h2>
            <RichText content={description} />
          </div>
        </div>
        <div className='w-full bg-white flex flex-col pb-8 md:mt-0'>
          <h2 className='text-center font-heading text-2xl font-semibold py-10 lg:mt-0'>
            Fertility Specialists at {title}
          </h2>
          <div className='grid grid-cols-2 mx-auto space-y-0 gap-3 sm:gap-8 sm:space-y-0 lg:grid-cols-6'>
            {doctors?.map((item: any) => {
              return (
                <div
                  className='text-center mx-auto flex items-center justify-start flex-col mb-2 transition-all duration-500 ease-in-out transform hover:scale-105'
                  key={item?.id}
                >
                  <Link href={`/fertility-experts/${item?.slug}`} passHref>
                    <div className='space-y-4'>
                      <div className='relative h-40 w-40 mx-auto'>
                        <div className='h-full w-full absolute rounded-full bg-gradient-to-br from-brandPink3/80 to-purple-500/40 animate-rotate bg-[length: 400%]'></div>
                        <Image
                          className='rounded-full shadow-2xl drop-shadow-2xl bg-transparent'
                          src={item?.image?.url}
                          alt={item?.imageAlt}
                          width={500}
                          height={500}
                        />
                      </div>
                      <div className='space-y-4'>
                        <div className='text-lg leading-6 font-medium space-y-1'>
                          <h3 className='text-brandDark font-content'>
                            {item?.name}
                          </h3>
                          {/* <p className='text-brandPurpleDark text-xs font-content'>
                            {item?.qualification}
                          </p> */}
                          <p className='text-brandPink text-sm font-content'>
                            {item?.designation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
