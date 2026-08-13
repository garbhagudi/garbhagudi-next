import Image from 'next/image';
import Link from 'next/link';

const CTA = () => {
  return (
    <div className='relative'>
      <Image
        quality={85}
        src='https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8vb8od585p07plknvgx4ja'
        alt=''
        aria-hidden='true'
        fill
        sizes='100vw'
        className='object-cover object-center'
      />
      <div className='relative bg-black bg-opacity-25 py-16 text-center dark:bg-opacity-40 lg:py-24'>
        <div className='z-10 flex justify-center px-4 py-6 font-lexend text-2xl'>
          <div className='rounded-lg bg-gray-200 bg-opacity-90 px-3 py-4 font-bold text-gray-900 dark:bg-gray-800 dark:text-gray-200'>
            Join us in making a difference! Register now for the Ghar Ghar GaarbhaGudi.
          </div>
        </div>
        <button className='mt-3 rounded-lg bg-white px-4 py-3 font-lexend text-brandPink hover:bg-brandPink4 hover:text-white'>
          <Link href={'/gg-care'}>Register Now</Link>
        </button>
      </div>
    </div>
  );
};

export default CTA;
