import React from 'react';
import AccordionLayout from 'sections/Faq/FaqLayout';

const Faq = () => {
  const [activeIndex1, setActiveIndex1] = React.useState(1);
  return (
    <div className='bg-fuchsia-50'>
      <h2 className='pt-10 lg:pt:16 text-3xl lg:text-4xl font-heading font-bold text-center'>
        Frequently asked questions
      </h2>
      <div className='pb-10 lg:pb-16 px-3'>
        <div className='flex flex-col justify-center max-w-6xl mx-auto mt-10'>
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
    id: '1',
    Question: 'What is infertility?',
    Answer:
      'Infertility is a medical condition where a couple is unable to conceive despite regular unprotected intercourse for at least a year.',
  },
  {
    id: '2',
    Question: 'What are the common causes of infertility in women?',
    Answer:
      'Common causes of infertility in women include hormonal imbalances, ovulation disorders, uterine or fallopian tube abnormalities, endometriosis, and age-related factors.',
  },
  {
    id: '3',
    Question: 'What are the common causes of infertility in men?',
    Answer:
      'Common causes of infertility in men include sperm abnormalities, low sperm count, issues with sperm motility, and genetic factors.',
  },
  {
    id: '4',
    Question: 'When should I consider seeking infertility treatment?',
    Answer:
      "If you have been trying to conceive for at least a year (or six months if the woman is over 35) without success, it's recommended to seek infertility evaluation and treatment.",
  },
  {
    id: '5',
    Question: 'What are the treatment options for infertility?',
    Answer:
      'Infertility treatment options may include Intrauterine Insemination (IUI), In Vitro Fertilization (IVF), Intracytoplasmic Sperm Injection (ICSI), and other assisted reproductive technologies, depending on the specific cause of infertility.',
  },
  {
    id: '6',
    Question: 'How successful is infertility treatment?',
    Answer:
      'Success rates of infertility treatment vary depending on factors such as age, the cause of infertility, and the treatment method. Our fertility experts work closely with patients to achieve the best possible outcomes.',
  },
];
