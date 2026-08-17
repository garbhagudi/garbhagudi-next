import React from 'react';
import Link from 'next/link';
import { HiOutlineUserGroup, HiOutlineSpeakerphone, HiOutlineOfficeBuilding } from 'react-icons/hi';

const metrics = [
  {
    id: 1,
    value: '15,000+',
    label: 'Happy Families',
    icon: <HiOutlineUserGroup />,
  },
  {
    id: 2,
    value: '500+',
    label: 'Free Fertility Awareness Camps',
    icon: <HiOutlineSpeakerphone />,
  },
  {
    id: 3,
    value: '10',
    label: 'Infertility Centres in Karnataka and Tamil Nadu',
    icon: <HiOutlineOfficeBuilding />,
  },
];

const Stat = () => {
  return (
    <div className='bg-white dark:bg-gray-800'>
      <div className='mx-auto max-w-md px-4 pt-12 text-center sm:max-w-3xl sm:px-6 sm:pt-16 lg:max-w-7xl lg:px-8 lg:pt-20'>
        <h2 className='font-heading text-3xl font-extrabold text-gray-800 dark:text-gray-200 sm:text-4xl'>
          Our Ever-Growing Success
        </h2>
        <p className='mx-auto mt-5 max-w-prose font-content text-lg text-gray-800 dark:text-gray-200'>
          GarbhaGudi is a place where dreams come alive, hopes never fade, and possibilities never
          end. As one of the finest{' '}
          <Link href='/' className='text-gg-500 hover:underline dark:text-gg-400'>
            IVF Centre in Bangalore
          </Link>
          , we ceaselessly work to help you cherish the golden moment of holding your little bundles
          of joy. Along with our quality of treatment and care and consistently high success rates,
          here is our journey so far:
        </p>
      </div>

      <div className='relative mt-10 overflow-hidden bg-gradient-to-br from-gg-600 to-gg-700 dark:from-gray-700 dark:to-gray-800 sm:mt-12'>
        <div
          aria-hidden='true'
          className='pointer-events-none absolute -right-16 -top-20 z-0 h-72 w-72 rounded-full border border-white/10'
        />
        <div
          aria-hidden='true'
          className='pointer-events-none absolute -bottom-24 -left-16 z-0 h-64 w-64 rounded-full border border-white/10'
        />
        <dl className='relative z-10 mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/20 px-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-6 lg:px-8'>
          {metrics.map((metric) => (
            <div
              key={metric.id}
              className='flex flex-col items-center px-4 py-8 text-center transition-transform duration-300 hover:-translate-y-1 lg:px-6 lg:py-10'
            >
              <span
                aria-hidden='true'
                className='order-1 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-2xl text-white ring-1 ring-white/20'
              >
                {metric.icon}
              </span>
              <dt className='order-3 mx-auto mt-3 max-w-xs text-balance font-content text-base font-semibold text-white'>
                {metric.label}
              </dt>
              <dd className='order-2 mt-4 font-heading text-4xl font-extrabold text-white lg:text-5xl'>
                {metric.value}
                <span className='mx-auto mt-2 block h-0.5 w-8 bg-white/50' />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};
export default Stat;
