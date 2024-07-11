import React from 'react';

const TermsConditions = () => {
  return (
    <div className='lg:px-00 px-3'>
      <h3 className='py-10 text-center font-heading text-3xl font-bold text-gray-800 dark:text-gray-200 lg:py-16 lg:text-4xl'>
        Terms and Conditions
      </h3>
      <div className='mx-auto max-w-5xl pb-10 font-lexend text-base text-gray-800 dark:text-gray-200'>
        The GarbhaGnan Foundation is one of the foremost foundations in the
        country that offers specialised and the latest healthcare for women.
        with growing rates of infertility across the globe due to various
        reasons, The GarbhaGnan Foundation remains steadfast in helping in
        helping couples experience the joy of parenthood and the bliss of family
        life.
        <br />
        <br />
        In its pursuit of rendering service to couples looking for progeny,
        Garbhagnan Foundation has decided to offer{' '}
        <span className='font-bold'>&quot;PARIPOORNA 2023&quot;</span>, where
        the discount offered by the GarbhaGudi IVF Center is being borne by
        GarbhaGnan Foundation as a part of its CSR activity. <br />
        <br />
        Deserving couples are selected by a committee put in place by the
        Foundation. The selection process and merits are defined by the
        GarbhaGnan Foundation and the decision of the committee is final.
      </div>
      <ul role='list' className='pb-8'>
        {items.map((item) => (
          <li
            key={item.id}
            className='ml-4 max-w-5xl list-outside list-disc rounded-md py-2 text-left font-lexend text-base text-gray-800 dark:text-gray-200 sm:px-6 lg:mx-auto'
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TermsConditions;

const items = [
  {
    id: 1,
    title: 'The couple should be citizens and residents of India',
  },
  {
    id: 3,
    title:
      'Paripoorna cannot be combined with any other benefit plans provided at GarbhaGudi',
  },
  {
    id: 4,
    title:
      'Benefits will be applied to all the couples who opt for the all-inclusive IVF package of ₹2,50,000',
  },
  {
    id: 5,
    title: 'Paripoorna Benefit plan is non-transferrable',
  },
  {
    id: 6,
    title:
      'The benefit plan ends on the mentioned date and cannot be extended under any circumstances, unless specified by GarbhaGudi Management',
  },
  {
    id: 7,
    title:
      'On approval, an amount of ₹50,000 is to be paid to GarbhaGudi in advance, which will be adjusted in the final bill',
  },
  {
    id: 9,
    title:
      'All the terms and conditions are subject to change without notice, which is at the sole discretion of the GarbhaGudi IVF Centre & GarbhaGnan Foundation',
  },
  {
    id: 10,
    title:
      "Additional terms and conditions may apply. Please refer to the 'PARIPOORNA - 2023 Application form' for more information",
  },
];
