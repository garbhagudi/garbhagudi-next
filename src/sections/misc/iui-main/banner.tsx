import Link from 'next/link';
import Image from 'next/image';
import Form from 'sections/LandingPages/Performant/form';

const Banner = () => {
  return (
    <div>
      <div className='relative grid grid-cols-1 gap-y-3 pb-5 md:pb-8 lg:grid-cols-3'>
        <div className='relative col-span-2'>
          <Image
            src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1762497773/paripoorna_Landing_Page_Banner-02_qebqpx.webp'
            width={720}
            height={360}
            alt='Start IVF from as low as 90K'
            priority={true}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='hidden h-full w-full md:block'
          />
          <Image
            src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1762504289/paripoorna_Landing_Page_Banner-01_wxgq38.webp'
            width={420}
            height={360}
            alt='Start IVF from as low as 90K'
            priority={true}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='h-full w-full md:hidden'
          />
        </div>
        <div className='flex flex-col items-center justify-center bg-[#005e7e]' id='leadForm'>
          <div className='pb-4 pt-4 text-center font-[B612] text-xl font-bold text-white lg:text-2xl'>
            Book Your Appointment
          </div>
          <div className='flex h-fit w-full items-center justify-center'>
            <Form />
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center py-5 text-gray-800 dark:text-gray-200'>
        <div className='w-full text-center md:w-11/12 lg:w-3/4'>
          <div className='font-heading text-xl font-bold xl:text-2xl'>
            Experience the hope of starting a family with{' '}
            <h1 className='inline-block'>IUI treatment in Bangalore</h1>
          </div>
          <div className='mt-4 font-content text-base font-semibold'>
            Where expert fertility care meets state-of-the-art technology.
          </div>
          <div className='pt-5 font-content text-base'>
            Experience the miracle of life with IUI treatment in Bangalore. Nestled in the heart of
            the city, our state-of-the-art fertility clinic offers hope and a ray of sunshine for
            couples who are looking to start a family. Our team of{' '}
            <Link href={'/fertility-experts '} className='text-brandPink hover:underline'>
              expert fertility specialists
            </Link>{' '}
            and cutting-edge technology will guide you on your journey towards parenthood, every
            step of the way. Embrace the joy of holding your bundle of love in your arms, with IUI
            treatment in Bangalore.
          </div>
        </div>
        <Link
          href={'#leadForm'}
          className='mt-5 rounded-lg bg-gg-500 px-3 py-2 font-content text-lg font-semibold text-white hover:bg-gg-400 dark:bg-gray-500 dark:hover:bg-gg-500'
        >
          Consult Now
        </Link>
      </div>
    </div>
  );
};

export default Banner;
