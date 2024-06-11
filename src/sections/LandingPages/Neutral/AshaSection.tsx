import React from 'react';
import MyModal from 'components/modal';
import Image from 'next/image';

const AshaSection = () => {
  return (
    <section className='pt-16 pb-10 bg-gray-50 dark:bg-gray-700'>
      <h3 className='pb-16 text-3xl lg:text-4xl font-heading text-center font-bold text-gray-800 dark:text-gray-200'>
        Consult Dr. Asha S Vijay
      </h3>
      <div className='w-full lg:max-w-2xl px-4 mx-auto'>
        <div className='relative flex flex-col min-w-0 break-words bg-white dark:bg-gray-800 w-full mb-6 shadow-2xl rounded-lg mt-16'>
          <div className='px-6'>
            <div className='flex flex-wrap justify-center mt-3'>
              <div className='w-full px-4 flex justify-center'>
                <div className='relative -mt-32'>
                  <div className='h-full w-full  absolute rounded-full bg-gradient-to-br from-brandPink3 to-purple-500 animate-rotate bg-[length: 400%]'></div>
                  <Image
                    className='h-56 w-56  rounded-full shadow-2xl drop-shadow-2xl bg-transparent'
                    alt='Dr Asha'
                    src='https://media.graphassets.com/tEF3ZeEhSoeekeSEh47v'
                    width={500}
                    height={500}
                    loading='lazy'
                  />
                </div>
              </div>
            </div>
            <div className='text-center mt-10 text-gray-800 dark:text-gray-200'>
              <h3 className='text-xl font-semibold font-content leading-normal mb-2 text-blueGray-700'>
                Dr Asha S Vijay
              </h3>
              <div className='text-sm leading-normal font-content mt-0 mb-2 text-blueGray-400 font-bold uppercase'>
                MBBS, DNB, DGO
              </div>
              <div className='mb-2 text-blueGray-600 mt-6 font-content font-semibold'>
                Founder & Medical Director - GarbhaGudi IVF Centre
              </div>
            </div>
            <div className='mt-4 py-4 border-t border-blueGray-200 text-center'>
              <div className='flex flex-wrap justify-center'>
                <div className='w-full lg:w-11/12 px-4'>
                  <p className='mb-6 text-base text-blueGray-700 font-content'>
                    Dr Asha has well over two decades of experience in the
                    fields of obstetrics, gynaecology and infertility. She is a
                    well-known name in infertility – both in treating patients
                    and also in infertility education. Many consider her as a
                    medical genius with an overarching vision to eradicate
                    infertility. Dr Asha has been instrumental in creating happy
                    endings in the lives of more than 10000+ couples, by
                    ensuring they have a child of their own.
                  </p>
                  <MyModal
                    title={'Consult Dr. Asha S Vijay'}
                    clnm={
                      'font-medium text-white font-lexend uppercase px-3 py-2 bg-brandPink dark:bg-gray-500 dark:hover:bg-gg-400 rounded-md'
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AshaSection;
