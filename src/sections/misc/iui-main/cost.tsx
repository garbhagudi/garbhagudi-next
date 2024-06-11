import React from 'react';
import Link from 'next/link';

const Cost = () => {
  return (
    <div
      className='max-w-7xl mx-auto px-3 scroll-m-16 text-gray-800 dark:text-gray-200'
      id='cost-of-iui-in-bangalore'
    >
      <div className='pt-10 lg:pt-16'>
        <h2 className='text-2xl lg:text-3xl font-heading text-center font-bold pb-6'>
          IUI Treatment Cost in Bangalore
        </h2>
        <div className='text-xl font-content max-w-5xl mx-auto'>
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
