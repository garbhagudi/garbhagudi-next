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
    Question: 'What is the ideal age for egg freezing?',
    Answer:
      'The best age range is generally between 28-35, as egg quality tends to be highest at these ages.',
  },
  {
    id: 2,
    Question: 'Are there risks associated with the egg retrieval process?',
    Answer:
      'Yes, risks include mild side effects like cramping, bloating, and spotting. Rarely, more serious risks like ovarian hyperstimulation syndrome (OHSS), infection, or bleeding may occur.',
  },
  {
    id: 3,
    Question: 'How long can my eggs stay frozen?',
    Answer:
      'Frozen eggs can typically be stored for up to 10-15 years, but quality may decrease slightly over time.',
  },
];
