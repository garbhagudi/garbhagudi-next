import Link from 'next/link';

const Banner = () => {
  return (
    <div>
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
          href='/contact/enquiry'
          className='mt-5 rounded-lg bg-gg-500 px-3 py-2 font-content text-lg font-semibold text-white hover:bg-gg-400 dark:bg-gray-500 dark:hover:bg-gg-500'
        >
          Consult Now
        </Link>
      </div>
    </div>
  );
};

export default Banner;
