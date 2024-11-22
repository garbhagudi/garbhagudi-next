/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { HiCheck, HiMinus, HiChevronDown } from 'react-icons/hi';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
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
      <div className='px-3 py-10 text-center lg:py-16'>
        <h2 className='font-heading text-3xl font-bold text-gray-800 dark:text-gray-200 lg:text-5xl'>
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
          packages at GarbhaGudi. No matter the financial status, we've got a package that works for
          you.
        </p>
      </div>
      <div className='mx-auto max-w-7xl py-16 sm:px-6 sm:pb-24 lg:px-8'>
        {/* xs to lg */}
        <div className='striped mx-auto max-w-sm space-y-2 lg:hidden'>
          {tiers.map((tier) => (
            <section
              key={tier.name}
              className='rounded-md border border-black dark:border-gray-600'
            >
              <div className='mb-8 p-4'>
                <h2 className='text-center font-heading text-lg font-medium leading-6 text-gray-800 dark:text-gray-200'>
                  {tier.name}
                </h2>
                <p className='mt-4 text-center'>
                  <span className='text-4xl font-extrabold text-gray-800 dark:text-gray-200'>
                    ₹{tier.priceMonthly}
                  </span>{' '}
                </p>
                <a
                  href={tier.href}
                  className='mx-auto mt-4 block w-36 rounded-md border border-gg-400 bg-gg-400 py-2 text-center font-heading text-sm font-bold text-white hover:bg-gg-500 dark:border-gray-600 dark:bg-gray-500 dark:hover:bg-gg-500'
                >
                  Contact Us
                </a>
              </div>

              <Disclosure>
                {({ open }) => (
                  <>
                    <DisclosureButton className='mx-auto my-4 flex w-56 items-center justify-center font-bold text-gg-500 dark:text-gray-300'>
                      {open ? 'See less' : 'See More'}
                      <HiChevronDown
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-gg-500 dark:text-gray-300`}
                      />
                    </DisclosureButton>
                    <DisclosurePanel className='text-gray-800 dark:text-gray-200'>
                      {sections.map((section) => (
                        <table key={section.name} className='w-full'>
                          <caption className='border-t border-gray-200 px-4 py-3 text-left font-heading text-xl font-bold'>
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
                              <tr key={feature.id} className='border-gray-00 border-t'>
                                <th className='px-4 py-5 text-left text-sm font-normal' scope='row'>
                                  {feature.name}
                                </th>
                                <td className='py-5 pr-4'>
                                  {typeof feature.tiers[tier.name] === 'string' ? (
                                    <span className='block text-right text-sm'>
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
                                        {feature.tiers[tier.name] === true ? 'Yes' : 'No'}
                                      </span>
                                    </>
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      ))}
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            </section>
          ))}
        </div>
        {/* lg+ */}
        <div className='hidden lg:block'>
          <table className='h-px w-full table-fixed'>
            <caption className='sr-only'>Pricing plan comparison</caption>
            <thead>
              <tr>
                <th
                  className='px-6 pb-4 text-left text-sm font-medium text-gray-800 dark:text-gray-200'
                  scope='col'
                >
                  <span className='sr-only'>Feature by</span>
                  <span>IVF Treatment Plans</span>
                </th>
                {tiers.map((tier) => (
                  <th
                    key={tier.name}
                    className='mx-auto w-1/4 px-6 pb-4 text-center font-heading text-lg font-bold leading-6 text-gray-800 dark:text-gray-200'
                    scope='col'
                  >
                    {tier.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-300 border-t border-gray-300'>
              <tr>
                <th
                  className='px-6 py-8 text-left align-top text-sm font-medium text-gray-800 dark:text-gray-200'
                  scope='row'
                >
                  IVF Treatment Pricing
                </th>
                {tiers.map((tier) => (
                  <td key={tier.name} className='h-full px-6 py-8 align-top'>
                    <div className='h-full'>
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
                        className='mx-auto mt-4 block w-36 rounded-md border border-gg-400 bg-gg-400 py-2 text-center font-heading text-sm font-bold text-white hover:bg-gg-500 dark:border-gray-600 dark:bg-gray-500 dark:hover:bg-gg-500'
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
                      className='py-3 pl-6 text-left font-heading text-xl font-bold text-gray-800 dark:text-gray-200'
                      colSpan={4}
                      scope='colgroup'
                    >
                      {section.name}
                    </th>
                  </tr>
                  {section.features.map((feature) => (
                    <tr key={feature.id}>
                      <th className='px-6 py-5 text-left text-sm font-semibold' scope='row'>
                        {feature.name}
                      </th>
                      {tiers.map((tier) => (
                        <td key={tier.name} className='px-6 py-5 text-center'>
                          {typeof feature.tiers[tier.name] === 'string' ? (
                            <span className='block text-sm'>{feature.tiers[tier.name]}</span>
                          ) : (
                            <>
                              {feature.tiers[tier.name] === true ? (
                                <HiCheck
                                  className='mx-auto h-7 w-7 text-green-500'
                                  aria-hidden='true'
                                />
                              ) : (
                                <HiMinus className='mx-auto h-5 text-gray-400' aria-hidden='true' />
                              )}

                              <span className='sr-only'>
                                {feature.tiers[tier.name] === true ? 'Included' : 'Not included'} in{' '}
                                {tier.name}
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
                  <td key={tier.name} className='px-6 pt-5'>
                    <a
                      href={tier.href}
                      className='mx-auto mt-4 block w-36 rounded-md border border-gg-400 bg-gg-400 py-2 text-center font-heading text-sm font-bold text-white hover:bg-gg-500 dark:border-gray-600 dark:bg-gray-500 dark:hover:bg-gg-500'
                    >
                      Know More
                    </a>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
        <div className='lg:text mt-4 text-center text-xs font-semibold'>
          *Any additional procedures and tests recommended by the doctor may or may not be included.
          Please contact the financial advisor at the centre for more information.
        </div>
      </div>
    </div>
  );
};

export default Packages;
