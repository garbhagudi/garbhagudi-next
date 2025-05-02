import React from 'react';
import AccordionLayout from 'sections/Faq/FaqLayout';

const Faq = () => {
  const [activeIndex1, setActiveIndex1] = React.useState<number | string>(1);
  return (
    <div className='mt-6 bg-white dark:bg-gray-700'>
      <div className='lg:pt:16 mx-auto w-11/12 pt-5 text-center font-heading text-2xl font-bold text-black dark:text-white lg:text-4xl'>
        Frequently Asked Questions (FAQs)
      </div>
      <div className='px-3 pb-5 lg:pb-16'>
        <div className='mx-auto mt-3 flex max-w-6xl flex-col justify-center md:mt-10'>
          {data.map((items) => (
            <AccordionLayout
              title={items.Question}
              key={items.id}
              index={items.id}
              activeIndex={activeIndex1}
              setActiveIndex={setActiveIndex1}
            >
              {items.Answer}
            </AccordionLayout>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;

const data = [
  {
    id: 1,
    Question: 'What is egg freezing?',
    Answer:
      "Egg freezing, or oocyte cryopreservation, is a process where a woman's eggs are extracted, frozen, and stored, essentially preserving her fertility for future use.",
  },
  {
    id: 2,
    Question: 'Who should consider egg freezing?',
    Answer:
      'Women who wish to delay pregnancy, those facing medical treatments that could affect fertility, or those with other personal reasons for wanting to preserve their eggs at a younger age.',
  },
  {
    id: 3,
    Question: 'What is the ideal age to freeze eggs?',
    Answer:
      "The best time to freeze eggs is typically in a woman's late 20s to early 30s. While it's possible to freeze eggs in later years, success rates tend to decrease as age impacts egg quality and quantity.",
  },
  {
    id: 4,
    Question: 'How does egg freezing work?',
    Answer:
      'The process involves ovarian stimulation (hormone injections), egg retrieval, and then freezing the eggs using a rapid freezing technique called vitrification.',
  },
  {
    id: 5,
    Question: 'Are frozen eggs as good as fresh eggs for IVF?',
    Answer:
      'Yes, advanced freezing methods like vitrification have achieved the same IVF success rates with frozen eggs as with fresh eggs.',
  },
  {
    id: 6,
    Question: 'How long can eggs be stored frozen? ',
    Answer: 'Frozen eggs can be stored indefinitely without a significant decrease in quality.',
  },
];
