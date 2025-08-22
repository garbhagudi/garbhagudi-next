import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const AshaSection = () => {
  const path = usePathname();
  return (
    <section className='bg-gray-50 pb-10 pt-16 dark:bg-gray-700'>
      <h3 className='pb-16 text-center font-heading text-3xl font-bold text-gray-800 dark:text-gray-200 lg:text-4xl'>
        Consult Dr. Asha S Vijay
      </h3>
      <div className='mx-auto w-full px-4 lg:max-w-2xl'>
        <div className='relative mb-6 mt-16 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-2xl dark:bg-gray-800'>
          <div className='px-6'>
            <div className='mt-3 flex flex-wrap justify-center'>
              <div className='flex w-full justify-center px-4'>
                <div className='relative -mt-32'>
                  <div className='bg-[length: 400%] absolute h-full w-full animate-rotate rounded-full bg-gradient-to-br from-brandPink3 to-purple-500'></div>
                  <Image
                    className='h-56 w-56 rounded-full bg-transparent shadow-2xl drop-shadow-2xl'
                    alt='Dr Asha'
                    src='https://media.graphassets.com/tEF3ZeEhSoeekeSEh47v'
                    width={500}
                    height={500}
                    loading='lazy'
                  />
                </div>
              </div>
            </div>
            <div className='mt-10 text-center text-gray-800 dark:text-gray-200'>
              <h3 className='text-blueGray-700 mb-2 font-content text-xl font-semibold leading-normal'>
                Dr Asha S Vijay
              </h3>
              <div className='text-blueGray-400 mb-2 mt-0 font-content text-sm font-bold uppercase leading-normal'>
                MBBS, MD(OBG), FRM
              </div>
              <div className='text-blueGray-600 mb-2 mt-6 font-content font-semibold'>
                Founder & Medical Director - GarbhaGudi IVF Centre
              </div>
            </div>
            <div className='border-blueGray-200 mt-4 border-t py-4 text-center'>
              <div className='flex flex-wrap justify-center'>
                <div className='w-full px-4 lg:w-11/12'>
                  <p className='text-blueGray-700 mb-6 font-content text-base'>
                    Dr Asha has well over two decades of experience in the fields of obstetrics,
                    gynaecology and infertility. She is a well-known name in infertility – both in
                    treating patients and also in infertility education. Many consider her as a
                    medical genius with an overarching vision to eradicate infertility. Dr Asha has
                    been instrumental in creating happy endings in the lives of more than 15000+
                    couples, by ensuring they have a child of their own.
                  </p>
                  <Link href={`/contact/enquiry?pageVisit=${path}`}>
                    <button
                      type='button'
                      className='rounded-md bg-brandPink px-3 py-2 font-lexend font-medium uppercase text-white dark:bg-gray-500 dark:hover:bg-gg-400'
                    >
                      Consult Dr. Asha S Vijay
                    </button>
                  </Link>
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
