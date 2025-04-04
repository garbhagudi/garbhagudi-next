import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Banner = () => {
  const path = usePathname();
  return (
    <div>
      <div className='mx-auto grid max-w-7xl grid-cols-1 gap-3 px-3 pt-10 lg:grid-cols-2'>
        <div className='flex flex-col items-start justify-center py-5 text-gray-800 dark:text-gray-200'>
          <div className='font-heading text-xl font-bold xl:text-2xl'>
            Experience the hope of starting a family with{' '}
            <h1 className='inline-block'>IUI treatment in Bangalore</h1>
          </div>
          <div className='mt-4 font-content text-base font-semibold'>
            Where expert fertility care meets state-of-the-art technology.
          </div>
          <div className='pt-5 font-content text-base'>
            Experience the miracle of life with{' '}
            <Link
              href={'/treatments/iui-treatment-in-bangalore'}
              className='text-brandPink hover:underline'
            >
              IUI treatment in Bangalore.
            </Link>{' '}
            Nestled in the heart of the city, our state-of-the-art fertility clinic offers hope and
            a ray of sunshine for couples who are looking to start a family. Our team of expert
            fertility specialists and cutting-edge technology will guide you on your journey towards
            parenthood, every step of the way. Embrace the joy of holding your bundle of love in
            your arms, with{' '}
            <Link
              href={'/treatments/iui-treatment-in-bangalore'}
              className='text-brandPink hover:underline'
            >
              IUI treatment in Bangalore.
            </Link>{' '}
          </div>
          <Link
            href={`/contact/enquiry?pageVisit=${path}`}
            className='mt-5 rounded-lg bg-gg-500 px-3 py-2 font-content text-lg font-semibold text-white hover:bg-gg-400 dark:bg-gray-500 dark:hover:bg-gg-500'
          >
            Consult Now
          </Link>
        </div>
        <div className='lg:py-10'>
          <Image
            src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1722501966/c9xR52ZwxhbTdCfXFGsx4-transformed_1_lrnub0_1_i7oozx.webp'
            alt='IUI treatment in Bangalore'
            className='rounded-xl'
            width={320}
            height={320}
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
