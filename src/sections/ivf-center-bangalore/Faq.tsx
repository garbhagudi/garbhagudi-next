import React from 'react';
import AccordionLayout from 'sections/Faq/FaqLayout';

/** Exported so the page can build FAQPage JSON-LD from the same source. */
export const ivfCentreFaqs = [
  {
    id: 1,
    question: 'Which is the best IVF centre in Bangalore?',
    answer:
      'GarbhaGudi IVF Centre is among the most trusted fertility hospitals in Bangalore, with multiple branches, in-house IVF labs and an experienced team of fertility specialists. The right centre for you is one with proven experience, transparent guidance and care close to where you live — all of which GarbhaGudi offers.',
  },
  {
    id: 2,
    question: 'What is the difference between an IVF clinic and a fertility hospital?',
    answer:
      'A standalone IVF clinic may handle only part of the process, while a fertility hospital like GarbhaGudi manages your entire journey — consultation, diagnostics, the IVF laboratory, andrology, and follow-up — under one roof with its own embryology team.',
  },
  {
    id: 3,
    question: 'Where are GarbhaGudi IVF centres located in Bangalore?',
    answer:
      'GarbhaGudi has multiple fertility centres across Bangalore so care stays accessible. You can view all branches in the locations section of this page and choose the centre nearest to you.',
  },
  {
    id: 4,
    question: 'How do I book an appointment at GarbhaGudi IVF Centre?',
    answer:
      'You can book a free consultation by filling the enquiry form on this page, calling +91 89518 13344, or messaging us on WhatsApp. Our team will help you schedule a visit at the centre most convenient for you.',
  },
  {
    id: 5,
    question: 'Does GarbhaGudi treat complex or previously failed fertility cases?',
    answer:
      'Yes. Our centres are equipped to handle challenging cases, including couples who have had unsuccessful cycles elsewhere. A specialist reviews your history and recommends a personalised treatment plan.',
  },
  {
    id: 6,
    question: 'Is the first consultation really free?',
    answer:
      'Your first consultation to understand your situation and options is complimentary. Any further diagnostics or treatment is discussed transparently with you before you proceed.',
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = React.useState<string | number>(1);
  return (
    <section className='bg-fuchsia-50' aria-labelledby='lp-faq-heading'>
      <h2
        id='lp-faq-heading'
        className='pt-10 text-center font-heading text-3xl font-bold text-gray-900 lg:pt-16 lg:text-4xl'
      >
        Frequently asked questions
      </h2>
      <div className='px-3 pb-10 lg:pb-16'>
        <div className='mx-auto mt-10 flex max-w-4xl flex-col justify-center'>
          {ivfCentreFaqs.map((item) => (
            <AccordionLayout
              title={item.question}
              key={item.id}
              index={item.id}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            >
              {item.answer}
            </AccordionLayout>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
