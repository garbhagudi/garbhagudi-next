import React, { useState } from 'react';
import AccordionLayout from '../Faq/FaqLayout';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<string | number>(1);
  return (
    <div className='mx-auto px-4 pt-12 font-lexend sm:max-w-xl md:max-w-full md:px-24 lg:max-w-7xl lg:px-8 lg:pt-16'>
      <h3 className='text 3xl pb-12 text-center font-bold text-gray-800 dark:text-gray-200 lg:text-4xl'>
        Frequently Asked Questions
      </h3>
      {Data.map((items) => (
        <AccordionLayout
          title={items.title}
          key={items.id}
          index={items.id}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          {items.contents}
        </AccordionLayout>
      ))}
    </div>
  );
};

export default FAQ;

const Data = [
  {
    id: 1,
    title: 'What is the procedure to register for PARIPOORNA?',
    contents: (
      <div>
        To register for the PARIPOORNA, please visit our branches for fertility specialist
        consultation or contact our GarbhaGudi Care support team on <br /> 9108 9108 32. We’ll guide
        you through the steps and help you complete the process smoothly.
      </div>
    ),
  },
  {
    id: 2,
    title: 'Who is eligible for the PARIPOORNA?',
    contents: (
      <div>
        It is specially designed for couples seeking infertility treatment who need financial
        support.
      </div>
    ),
  },
  {
    id: 3,
    title: `Is everyone who registers entitled to receive the benefit?`,
    contents: (
      <div>
        A couple will be eligible for PARIPOORNA after completing registration, consultation with a
        fertility specialist, receiving a diagnosis, and being prescribed a treatment to meet
        couples’ unique needs.
      </div>
    ),
  },
  {
    id: 4,
    title: `What are the criteria for eligibility?`,
    contents: <div>PARIPOORNA is valid only for couples seeking IVF treatment.</div>,
  },
  {
    id: 5,
    title: `If eligible, will I receive treatment plan?`,
    contents: (
      <div>Yes, you will be able to receive the treatment plan from the fertility specialist.</div>
    ),
  },
  {
    id: 6,
    title: `Can I continue my treatment without opting PARIPOORNA plan?`,
    contents: <div>Yes, this will help other couples in genuine need to avail the PARIPOORNA.</div>,
  },
  {
    id: 7,
    title: `What is the last date to apply for PARIPOORNA?`,
    contents: <div>PARIPOORNA is available until 31st December 2025.</div>,
  },
  {
    id: 8,
    title: `I have started my treatment at another facility. Am I still eligible to avail the PARIPOORNA at GarbhaGudi IVF Centre?`,
    contents: (
      <div>
        Yes, you can apply, but we recommend that you do not discontinue the treatment, as it could
        affect its success rate.
      </div>
    ),
  },
  {
    id: 9,
    title: `Can I register for PARIPOORNA through online without visiting the centre?`,
    contents: (
      <div>
        This offer is valid only for couples who are eligible for a self-cycle based on their
        diagnosis at any of our GarbhaGudi IVF Centres.
      </div>
    ),
  },
];
