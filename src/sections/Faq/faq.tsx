import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { maleInfertility, femaleInfertility, ivfProcedures } from './faqData';
import AccordionLayout from './FaqLayout';
import React from 'react';

const Faq = () => {
  const [activeIndex1, setActiveIndex1] = React.useState<string | number>(1);
  const [activeIndex2, setActiveIndex2] = React.useState<string | number>(1);
  const [activeIndex3, setActiveIndex3] = React.useState<string | number>(1);
  return (
    <div className='mx-auto max-w-7xl'>
      <h1 className='pt-12 text-center font-heading text-4xl font-semibold text-gray-800 dark:text-gray-200'>
        Frequently Asked Questions
      </h1>
      <div className='font-contents mt-8 text-center text-lg text-gray-800 dark:text-gray-200'>
        Here are some of the most frequently asked questions about infertility and its treatment
        options.
      </div>
      <div className='w-full max-w-7xl px-2 py-16 sm:px-0'>
        <TabGroup vertical>
          <TabList
            className={
              'flex flex-wrap rounded-xl bg-gg-500 p-1 dark:bg-gg-400 md:flex-nowrap md:space-x-1'
            }
          >
            <Tab className='mx-auto w-full rounded-lg py-2 text-center font-heading text-xl font-semibold text-gray-100 focus:outline-none ui-selected:bg-gray-100 ui-selected:text-brandPink2 ui-selected:shadow-xl ui-selected:transition-all ui-selected:duration-300 ui-selected:ease-linear ui-selected:hover:bg-gray-100 ui-not-selected:hover:bg-brandPink3 dark:text-gray-800 dark:ui-selected:bg-gray-800 dark:ui-selected:text-gray-200'>
              <div className='mx-auto text-center font-heading text-sm font-semibold md:text-2xl'>
                Male Infertility
              </div>
            </Tab>
            <Tab className='mx-auto w-full rounded-lg py-2 text-center font-heading text-xl font-semibold text-gray-100 focus:outline-none ui-selected:bg-gray-100 ui-selected:text-brandPink2 ui-selected:shadow-xl ui-selected:transition-all ui-selected:duration-300 ui-selected:ease-linear ui-selected:hover:bg-gray-100 ui-not-selected:hover:bg-brandPink3 dark:text-gray-800 dark:ui-selected:bg-gray-800 dark:ui-selected:text-gray-200'>
              <div className='mx-auto text-center font-heading text-sm font-semibold md:text-2xl'>
                Female Infertility
              </div>
            </Tab>
            <Tab className='mx-auto w-full rounded-lg py-2 text-center font-heading text-xl font-semibold text-gray-100 focus:outline-none ui-selected:bg-gray-100 ui-selected:text-brandPink2 ui-selected:shadow-xl ui-selected:transition-all ui-selected:duration-300 ui-selected:ease-linear ui-selected:hover:bg-gray-100 ui-not-selected:hover:bg-brandPink3 dark:text-gray-800 dark:ui-selected:bg-gray-800 dark:ui-selected:text-gray-200'>
              <div className='mx-auto text-center font-heading text-sm font-semibold md:text-2xl'>
                Treatments
              </div>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <div className='mx-auto mt-10 flex max-w-6xl flex-col justify-center'>
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
            </TabPanel>
            <TabPanel>
              <div className='mx-auto mt-10 flex max-w-6xl flex-col justify-center'>
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
            </TabPanel>
            <TabPanel>
              <div className='mx-auto mt-10 flex max-w-6xl flex-col justify-center'>
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
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
};

export default Faq;
