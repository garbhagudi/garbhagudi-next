import React from 'react';

const Advantages = () => {
  return (
    <div className='mx-auto max-w-7xl'>
      <div className='grid grid-cols-1 divide-x-2 pb-10 text-gray-800 dark:divide-gray-600 dark:text-gray-200 lg:grid-cols-2'>
        <div className='px-3'>
          <h3 className='border-b py-4 text-center font-heading text-xl font-bold dark:border-gray-600'>
            Advantages
          </h3>
          <div className='mt-2 font-content font-semibold'>
            IUI is generally considered to be a safe and low-invasive procedure, with several
            advantages:
          </div>
          <ul className='ml-4 list-outside list-disc space-y-3 pt-4 font-content'>
            <li>
              <strong>Increased chances of pregnancy:</strong> IUI can increase the chances of
              pregnancy, particularly for couples with mild fertility issues, such as problems with
              ovulation or sperm count.
            </li>
            <li>
              <strong>Cost-effective:</strong> IUI is typically less expensive than other fertility
              treatments such as IVF (in-vitro fertilization).
            </li>
            <li>
              <strong>Minimal invasiveness:</strong> IUI is a relatively simple procedure and does
              not require the use of anesthesia.
            </li>
            <li>
              <strong>Less side effects:</strong> IUI has less side effects than other fertility
              treatments such as IVF.
            </li>
            <li>
              <strong>Timing flexibility:</strong> IUI can be timed to coincide with ovulation,
              which increases the chances of fertilization.
            </li>
            <li>
              <strong>Option for single or same-sex couples:</strong> IUI can be done with sperm
              from a sperm donor, making it an option for single or same-sex couples.
            </li>
          </ul>
        </div>
        <div className='px-3'>
          <h3 className='border-b py-4 text-center font-heading text-xl font-bold dark:border-gray-600'>
            Disadvangates
          </h3>
          <div className='mt-2 font-content font-semibold'>
            While IUI is generally considered a safe and low-invasive procedure, there are some
            potential disadvantages to consider:
          </div>
          <ul className='ml-4 list-outside list-disc space-y-3 pt-4 font-content'>
            <li>
              <strong>Low success rate:</strong> The success rate of IUI is typically around 10-20%
              per cycle, and it may take multiple cycles to achieve pregnancy.
            </li>
            <li>
              <strong>Multiple pregnancies:</strong> IUI increases the chance of having twins or
              triplets, which can be associated with risks such as preterm labor, low birth weight,
              and complications during delivery.
            </li>
            <li>
              <strong>Ovarian Hyperstimulation Syndrome (OHSS):</strong> This is a rare but serious
              condition that can occur when ovaries become swollen and painful after ovulation
              induction medication.
            </li>
            <li>
              <strong>Limited effectiveness:</strong> IUI may not be effective for couples with more
              severe infertility issues, such as blocked fallopian tubes or low sperm count.
            </li>
            <li>
              <strong>Additional cost:</strong> IUI treatment can be expensive, and it may not be
              covered by insurance in some cases.
            </li>
            <li>
              <strong>Emotional toll:</strong> undergoing multiple unsuccessful IUI cycles can be
              emotionally draining for couples trying to conceive.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
