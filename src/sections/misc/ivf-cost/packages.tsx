/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { HiCheck, HiMinus, HiChevronDown } from 'react-icons/hi';
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';

const tiers = [
  {
    name: 'Essentials',
    href: '/contact.html',
    priceMonthly: '90,000',
  },
  {
    name: 'Plus',
    href: '/contact.html',
    priceMonthly: '1,50,000',
  },
  {
    name: 'Premium',
    href: '/contact.html',
    priceMonthly: '2,20,000',
  },
];
const sections = [
  {
    name: 'Services*',
    features: [
      { id: 1, name: 'Consultations', tiers: { Plus: true, Premium: true } },
      {
        id: 2,
        name: 'Follicular Monitoring',
        tiers: { Plus: true, Premium: true },
      },
      {
        id: 3,
        name: 'Stimulation Injections',
        tiers: { Plus: false, Essentials: false, Premium: true },
      },
      {
        id: 4,
        name: (
          <span className='font-semibold'>
            Investigations during Stimulation Cycle <br />
            (Estradiol,
            <br /> Luteinizing Hormone, <br />
            Progesterone)
          </span>
        ),
        tiers: { Plus: true, Essentials: false, Premium: true },
      },
      {
        id: 5,
        name: 'Other Specific Investiagtions',
        tiers: { Plus: false, Essentials: false, Premium: false },
      },
      {
        id: 6,
        name: 'FET',
        tiers: { Essentials: '1 Cycle', Premium: '1 Cycle', Plus: '1 Cycle' },
      },
      { id: 7, name: 'Blastocyst', tiers: { Premium: true, Plus: true } },
      {
        id: 8,
        name: (
          <span className='font-semibold'>
            Freezing charges <br /> (1 Year)
          </span>
        ),
        tiers: { Premium: true, Plus: true },
      },
      {
        id: 9,
        name: 'OPU Charges',
        tiers: { Plus: true, Essentials: true, Premium: true },
      },
      {
        id: 10,
        name: 'Ward Charges',
        tiers: { Plus: true, Essentials: true, Premium: true },
      },
    ],
  },
];

const Packages = () => {
  return (
    <div className='font-content'>
      <div className='text-center py-10 lg:py-16 px-3'>
        <h2 className='font-heading font-bold text-3xl lg:text-5xl text-gray-800 dark:text-gray-200'>
          IVF Packages at GarbhaGudi
        </h2>
        <p className='pt-4 font-content'>
          Here is a brief comparison of the{' '}
          <Link
            href='/treatments/ivf-treatment-cost-in-bangalore'
            className='text-brandPink hover:underline'
          >
            cost of IVF
          </Link>{' '}
          packages at GarbhaGudi. No matter the financial status, we've got a
          package that works for you.
        </p>
      </div>
      <div className='max-w-7xl mx-auto py-16 sm:pb-24 sm:px-6 lg:px-8'>
        {/* xs to lg */}
        <div className='max-w-sm mx-auto space-y-2 striped lg:hidden '>
          {tiers.map((tier) => (
            <section
              key={tier.name}
              className='border border-black dark:border-gray-600 rounded-md'
            >
              <div className='p-4 mb-8 '>
                <h2 className='text-lg leading-6 font-medium text-gray-800 dark:text-gray-200 font-heading text-center'>
                  {tier.name}
                </h2>
                <p className='mt-4 text-center '>
                  <span className='text-4xl font-extrabold text-gray-800 dark:text-gray-200 '>
                    ₹{tier.priceMonthly}
                  </span>{' '}
                </p>
                <a
                  href={tier.href}
                  className='block w-36 mx-auto mt-4 bg-gg-400 dark:bg-gray-500 border border-gg-400 dark:border-gray-600 rounded-md py-2 text-sm font-bold font-heading text-white text-center hover:bg-gg-500 dark:hover:bg-gg-500 '
                >
                  Contact Us
                </a>
              </div>

              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='flex items-center justify-center my-4 w-56 mx-auto text-gg-500 dark:text-gray-300 font-bold'>
                      {open ? 'See less' : 'See More'}
                      <HiChevronDown
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-gg-500 dark:text-gray-300`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className='text-gray-800 dark:text-gray-200'>
                      {sections.map((section) => (
                        <table key={section.name} className='w-full'>
                          <caption className='text-xl border-t border-gray-200 py-3 px-4  font-heading font-bold text-left'>
                            {section.name}
                          </caption>
                          <thead>
                            <tr>
                              <th className='sr-only' scope='col'>
                                Feature
                              </th>
                              <th className='sr-only' scope='col'>
                                Included
                              </th>
                            </tr>
                          </thead>
                          <tbody className='divide-y divide-gray-300'>
                            {section.features.map((feature) => (
                              <tr
                                key={feature.id}
                                className='border-t border-gray-00'
                              >
                                <th
                                  className='py-5 px-4 text-sm font-normal text-left'
                                  scope='row'
                                >
                                  {feature.name}
                                </th>
                                <td className='py-5 pr-4'>
                                  {typeof feature.tiers[tier.name] ===
                                  'string' ? (
                                    <span className='block text-sm text-right'>
                                      {feature.tiers[tier.name]}
                                    </span>
                                  ) : (
                                    <>
                                      {feature.tiers[tier.name] === true ? (
                                        <HiCheck
                                          className='ml-auto h-5 w-5 text-green-500'
                                          aria-hidden='true'
                                        />
                                      ) : (
                                        <HiMinus
                                          className='ml-auto h-5 w-5 text-gray-400'
                                          aria-hidden='true'
                                        />
                                      )}

                                      <span className='sr-only'>
                                        {feature.tiers[tier.name] === true
                                          ? 'Yes'
                                          : 'No'}
                                      </span>
                                    </>
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </section>
          ))}
        </div>
        {/* lg+ */}
        <div className='hidden lg:block'>
          <table className='w-full h-px table-fixed'>
            <caption className='sr-only'>Pricing plan comparison</caption>
            <thead>
              <tr>
                <th
                  className='pb-4 px-6 text-sm font-medium text-gray-800 dark:text-gray-200 text-left'
                  scope='col'
                >
                  <span className='sr-only'>Feature by</span>
                  <span>IVF Treatment Plans</span>
                </th>
                {tiers.map((tier) => (
                  <th
                    key={tier.name}
                    className='w-1/4 pb-4 px-6 text-lg leading-6 font-bold font-heading text-gray-800 dark:text-gray-200 text-center mx-auto'
                    scope='col'
                  >
                    {tier.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className='border-t border-gray-300 divide-y divide-gray-300'>
              <tr>
                <th
                  className='py-8 px-6 text-sm font-medium text-gray-800 dark:text-gray-200 text-left align-top'
                  scope='row'
                >
                  IVF Treatment Pricing
                </th>
                {tiers.map((tier) => (
                  <td key={tier.name} className='h-full py-8 px-6 align-top'>
                    <div className='h-full '>
                      <p className='text-center'>
                        <span className='text-4xl font-extrabold text-gray-800 dark:text-gray-200'>
                          ₹{tier.priceMonthly}
                        </span>{' '}
                      </p>
                      {/* <p className="mt-4 mb-16 text-sm text-gray-500">
                        {tier.description}
                      </p> */}
                      <a
                        href={tier.href}
                        className='block w-36 mx-auto mt-4 bg-gg-400 dark:bg-gray-500 border border-gg-400 dark:border-gray-600 rounded-md py-2 text-sm font-bold font-heading text-white text-center hover:bg-gg-500 dark:hover:bg-gg-500 '
                      >
                        Know More
                      </a>
                    </div>
                  </td>
                ))}
              </tr>
              {sections.map((section) => (
                <Fragment key={section.name}>
                  <tr>
                    <th
                      className='py-3 pl-6 text-gray-800 dark:text-gray-200 text-xl text-left font-heading font-bold'
                      colSpan={4}
                      scope='colgroup'
                    >
                      {section.name}
                    </th>
                  </tr>
                  {section.features.map((feature) => (
                    <tr key={feature.id}>
                      <th
                        className='py-5 px-6 text-sm font-semibold text-left'
                        scope='row'
                      >
                        {feature.name}
                      </th>
                      {tiers.map((tier) => (
                        <td key={tier.name} className='py-5 px-6 text-center'>
                          {typeof feature.tiers[tier.name] === 'string' ? (
                            <span className='block text-sm'>
                              {feature.tiers[tier.name]}
                            </span>
                          ) : (
                            <>
                              {feature.tiers[tier.name] === true ? (
                                <HiCheck
                                  className='h-7 w-7 text-green-500 mx-auto'
                                  aria-hidden='true'
                                />
                              ) : (
                                <HiMinus
                                  className='h-5 text-gray-400 mx-auto'
                                  aria-hidden='true'
                                />
                              )}

                              <span className='sr-only'>
                                {feature.tiers[tier.name] === true
                                  ? 'Included'
                                  : 'Not included'}{' '}
                                in {tier.name}
                              </span>
                            </>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
            <tfoot>
              <tr className='border-t border-gray-200'>
                <th className='sr-only' scope='row'>
                  Choose your plan
                </th>
                {tiers.map((tier) => (
                  <td key={tier.name} className='pt-5 px-6'>
                    <a
                      href={tier.href}
                      className='block w-36 mx-auto mt-4 bg-gg-400 dark:bg-gray-500 border border-gg-400 dark:border-gray-600 rounded-md py-2 text-sm font-bold font-heading text-white text-center hover:bg-gg-500 dark:hover:bg-gg-500 '
                    >
                      Know More
                    </a>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
        <div className='text-xs text-center lg:text mt-4 font-semibold'>
          *Any additional procedures and tests recommended by the doctor may or
          may not be included. Please contact the financial advisor at the
          centre for more information.
        </div>
      </div>
    </div>
  );
};

export default Packages;
