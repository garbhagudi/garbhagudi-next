import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className=''>
      <div className='mx-auto max-w-7xl'>
        <h1 className='bg-gradient-to-r from-gg-500 to-brandPurpleDark bg-clip-text py-10 text-center font-heading text-3xl font-bold text-transparent dark:from-gray-200 dark:to-gray-200 lg:py-16 lg:text-5xl'>
          What is the Cost of IVF Treatment in Bangalore ?
        </h1>
        <div className='relative mx-auto max-w-7xl px-3 font-content text-gray-800 dark:text-gray-200'>
          <div>
            <p className='font-semibold'>
              The preliminary cost of IVF treatment in Bangalore fall between ₹1,00,000 and
              ₹4,00,000 varies from person to person and depends on a variety of variables depending
              on the complexity of the case
            </p>
            <div className='grid grid-cols-1 font-semibold lg:grid-cols-2'>
              <div className='mt-8 flex max-w-lg flex-col items-start justify-start'>
                At GarbhaGudi, we offer various packages starting from as low as ₹90,000
                <ul className='ml-4 mt-4 list-outside list-disc space-y-2'>
                  <li>
                    GarbhaGudi has over a decade of experience treating the most challenging cases
                    of Infertility
                  </li>
                  <li>
                    GarbhaGudi is known for its extra-ordinary success rates and hoslistic approach
                    to infertility treatment, and affordable costs{' '}
                  </li>
                  <li>
                    <Link href={'/'} className='text-brandPink hover:underline'>
                      GarbhaGudi IVF centre
                    </Link>{' '}
                    has been nominated for and won numerous awards in the field of{' '}
                    <Link
                      href={'/treatments/infertility'}
                      className='text-brandPink hover:underline'
                    >
                      infertility treatment
                    </Link>{' '}
                  </li>
                </ul>
                <div className='space-x-3'>
                  <button className='mx-auto mt-4 rounded-lg border bg-brandPurpleDark px-3 py-2 text-lg font-bold text-white hover:bg-opacity-80 dark:border-gray-600 dark:bg-gray-500 dark:hover:bg-brandPurpleDark/90 lg:mx-0'>
                    <Link href={'/gg-care'}>Get a Quote</Link>
                  </button>
                  <button className='mx-auto mt-4 rounded-lg border bg-brandPurpleDark px-3 py-2 text-lg font-bold text-white hover:bg-opacity-80 dark:border-gray-600 dark:bg-gray-500 dark:hover:bg-brandPurpleDark/90 lg:mx-0'>
                    <Link href={'/blogs/what-is-the-cost-of-ivf-treatment-in-india'}>
                      Read More on IVF Pricing
                    </Link>
                  </button>
                </div>
              </div>
              <div className='flex items-center justify-center py-10 lg:py-2'>
                <svg
                  viewBox='0 0 200 200'
                  xmlns='http://www.w3.org/2000/svg'
                  className='absolute -translate-y-2 scale-[.70]'
                >
                  <path
                    d='M44,-75.7C58,-68.1,71,-58.3,78.2,-45.3C85.3,-32.3,86.7,-16.2,85.5,-0.7C84.2,14.7,80.4,29.5,73.1,42.3C65.8,55.1,55.1,66,42.4,74.9C29.6,83.8,14.8,90.7,-0.5,91.6C-15.8,92.4,-31.5,87.2,-44.9,78.6C-58.3,70.1,-69.3,58.2,-77.9,44.6C-86.5,30.9,-92.7,15.5,-93.2,-0.3C-93.7,-16,-88.4,-32,-79.5,-45.1C-70.6,-58.2,-58,-68.5,-44.2,-76.2C-30.3,-83.9,-15.2,-89.1,-0.1,-88.9C15,-88.8,30,-83.3,44,-75.7Z'
                    transform='translate(100 100)'
                    className='fill-brandPink3 dark:fill-gray-500 dark:opacity-50'
                  />
                </svg>
                <Image
                  src='https://res.cloudinary.com/garbhagudiivf/image/upload/v1673683815/Misc/My_project-min_hjkrus.webp'
                  alt='girl with pregnancy kit'
                  className='relative'
                  width={1024}
                  height={1024}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
