import React from 'react';

const TermsAndCondition = () => {
  return (
    <div className='mx-auto max-w-7xl p-6 text-gray-900'>
      <h1 className='mb-4 text-2xl font-bold'>Terms & Conditions</h1>
      <ol className='list-inside list-decimal space-y-2'>
        <li>
          While arriving at the branch, couples must produce their Aadhaar card (and previous
          medical reports, if any).
        </li>
        <li>The Paripoorna offer can only be availed until 31st December 2024.</li>
        <li>
          GarbhaGudi IVF Centre reserves the right to cancel orders placed by eligible users if the
          transaction is found to be fraudulent in nature.
        </li>
        <li>
          GarbhaGudi reserves the right to modify the terms of the offer or discontinue it at any
          time without assigning any reasons or providing prior intimation to users.
        </li>
        <li>
          The coupon may be redeemed only once per user and is non-negotiable and non-encashable.
        </li>
        <li>
          In case of any issues or questions related to the offer, users may contact us at{' '}
          <a href='tel:+919108910832' className='text-gg-500 underline'>
            +91 9108-9108-32
          </a>
          .
        </li>
      </ol>
    </div>
  );
};

export default TermsAndCondition;
