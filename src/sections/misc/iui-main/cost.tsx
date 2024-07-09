import React from 'react';
import Link from 'next/link';

const Cost = () => {
  return (
    <div
      className='mx-auto max-w-7xl scroll-m-16 px-3 text-gray-800 dark:text-gray-200'
      id='cost-of-iui-in-bangalore'
    >
      <div className='pt-10 lg:pt-16'>
        <h2 className='pb-6 text-center font-heading text-2xl font-bold lg:text-3xl'>
          IUI Treatment Cost in Bangalore
        </h2>
        <div className='mx-auto max-w-5xl font-content text-xl'>
          <Link
            href={
              'https://www.garbhagudi.com/treatments/intra-uterine-insemination-iui'
            }
            className='text-brandPink hover:underline'
          >
            IUI Treatment cost in Bangalore
          </Link>{' '}
          is between
          <strong> INR 15,000 and INR 50,000 </strong>
          per cycle, depending on the location of the clinic, the experience of
          the specialist, and additional costs associated with the procedure
          such as medications and laboratory fees. It's always best to check
          with the clinic or your insurance provider to understand the full cost
          of the treatment. Some clinics also offer financing options to help
          make IUI Cost in Bangalore more affordable.
        </div>
      </div>
    </div>
  );
};

export default Cost;
