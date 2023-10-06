import { Tab } from '@headlessui/react';
import { maleInfertility, femaleInfertility, ivfProcedures } from './faqData';
import AccordionLayout from './FaqLayout';
import React from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Faq = () => {
  const [activeIndex1, setActiveIndex1] = React.useState(1);
  const [activeIndex2, setActiveIndex2] = React.useState(1);
  const [activeIndex3, setActiveIndex3] = React.useState(1);
  return (
    <div className='max-w-7xl mx-auto'>
      <h1 className='text-center text-4xl font-heading pt-12 font-semibold text-gray-800 dark:text-gray-200 '>
        Frequently Asked Questions
      </h1>
      <div className='text-lg font-contents mt-8 text-center text-gray-800 dark:text-gray-200 '>
        Here are some of the most frequently asked questions about infertility
        and its treatment options.
      </div>
      <div className='w-full max-w-7xl px-2 py-16 sm:px-0'>
        <Tab.Group vertical>
          <Tab.List
            className={
              'flex flex-wrap md:flex-nowrap md:space-x-1 bg-gg-500 dark:bg-gg-400 rounded-xl p-1'
            }
          >
            <Tab className='w-full py-2 rounded-lg focus:outline-none text-gray-100 dark:text-gray-800 mx-auto text-center text-xl font-heading font-semibold ui-selected:bg-gray-100 dark:ui-selected:bg-gray-800 ui-selected:text-brandPink2 dark:ui-selected:text-gray-200 ui-selected:shadow-xl ui-selected:hover:bg-gray-100 ui-selected:transition-all ui-selected:ease-linear ui-selected:duration-300 ui-not-selected:hover:bg-brandPink3'>
              <div className='mx-auto text-center text-sm md:text-2xl font-heading font-semibold'>
                Male Infertility
              </div>
            </Tab>
            <Tab className='w-full py-2 rounded-lg focus:outline-none text-gray-100 dark:text-gray-800 mx-auto text-center text-xl font-heading font-semibold ui-selected:bg-gray-100 dark:ui-selected:bg-gray-800 ui-selected:text-brandPink2 dark:ui-selected:text-gray-200 ui-selected:shadow-xl ui-selected:hover:bg-gray-100 ui-selected:transition-all ui-selected:ease-linear ui-selected:duration-300 ui-not-selected:hover:bg-brandPink3'>
              <div className='mx-auto text-center text-sm md:text-2xl font-heading font-semibold'>
                Female Infertility
              </div>
            </Tab>
            <Tab className='w-full py-2 rounded-lg focus:outline-none text-gray-100 dark:text-gray-800 mx-auto text-center text-xl font-heading font-semibold ui-selected:bg-gray-100 dark:ui-selected:bg-gray-800 ui-selected:text-brandPink2 dark:ui-selected:text-gray-200 ui-selected:shadow-xl ui-selected:hover:bg-gray-100 ui-selected:transition-all ui-selected:ease-linear ui-selected:duration-300 ui-not-selected:hover:bg-brandPink3'>
              <div className='mx-auto text-center text-sm md:text-2xl font-heading font-semibold'>
                Treatments
              </div>
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <div className='flex flex-col justify-center max-w-6xl mx-auto mt-10'>
                {maleInfertility.map((items) => (
                  <AccordionLayout
                    title={items.title}
                    key={items.id}
                    index={items.id}
                    activeIndex={activeIndex1}
                    setActiveIndex={setActiveIndex1}
                  >
                    {items.contents}
                  </AccordionLayout>
                ))}
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className='flex flex-col justify-center max-w-6xl mx-auto mt-10'>
                {femaleInfertility.map((items) => (
                  <AccordionLayout
                    title={items.title}
                    key={items.id}
                    index={items.id}
                    activeIndex={activeIndex2}
                    setActiveIndex={setActiveIndex2}
                  >
                    {items.contents}
                  </AccordionLayout>
                ))}
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className='flex flex-col justify-center max-w-6xl mx-auto mt-10'>
                {ivfProcedures.map((items) => (
                  <AccordionLayout
                    title={items.title}
                    key={items.id}
                    index={items.id}
                    activeIndex={activeIndex3}
                    setActiveIndex={setActiveIndex3}
                  >
                    {items.contents}
                  </AccordionLayout>
                ))}
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Faq;
