import Image from 'next/image';
import Form from './form';
import Link from 'next/link';

const Banner = () => {
  return (
    <div>
      <div className='grid grid-cols-1 lg:grid-cols-3'>
        <div className='order-0 relative'>
          <div className='items-left flex h-full w-full flex-col justify-center bg-[url(https://res.cloudinary.com/garbhagudi/image/upload/v1702778382/WhatsApp_Image_2023-12-16_at_16.06.34_b3904a5d_lbfffv.webp)] bg-cover bg-no-repeat py-16 text-center lg:py-0'>
            <div className='pb-4 text-center font-heading text-4xl font-extrabold lg:text-5xl'>
              <div className='uppercase text-[#e92e64]'>Paripoorna</div>
            </div>
            <div className='pb-2 text-xl font-bold'>
              It&apos;s the season of JOY of being COMPLETE
            </div>
            <div className='px-3 py-2 pb-4 font-content text-xl font-bold'>
              Get a flat discount of <span className='text-[#064a63] underline'>₹90,000/-</span> on
              IVF treatment program*
            </div>
          </div>
          <div className='-mt-5 hidden font-content text-xs font-medium lg:block'>
            *terms and conditions apply
          </div>
        </div>
        <div className='order-1 flex items-end justify-start overflow-hidden object-cover'>
          <div className='absolute z-10 -mt-5 block rounded-t-md bg-white bg-opacity-50 px-3 py-1 font-content text-xs font-medium lg:hidden'>
            *terms and conditions apply
          </div>
          <Image
            src={
              'https://res.cloudinary.com/garbhagudi/image/upload/v1702632912/WhatsApp_Image_2023-12-15_at_15.02.53_9634526f_pvmr6o.webp'
            }
            width={1920}
            height={1080}
            alt='Start IVF from as low as 90K'
            className='h-full object-center'
            priority={true}
          />
        </div>
        <div className='order-2 bg-brandPurpleDark' id='leadForm'>
          <div className='flex items-center justify-center'>
            <Form />
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-7xl sm:mt-10'>
        <div className='mx-auto mb-4 max-w-lg bg-gray-300 px-3 py-2 text-center text-base font-semibold sm:rounded-lg md:text-lg'>
          To Book Appointment call{' '}
          <a href='tel:+919108910832' className='block text-brandPink sm:inline-block'>
            +91 9108 9108 32
          </a>
        </div>
        <div className='mx-auto text-center'>
          <button className='mx-auto block rounded-lg bg-brandPink px-3 py-2 text-center font-semibold text-white transition duration-200 ease-in-out hover:bg-brandPurpleDark sm:inline-block'>
            <Link href='#leadForm' className='scroll-smooth font-sans'>
              Book an Appointment
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
