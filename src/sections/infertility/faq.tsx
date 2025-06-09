import { useState } from 'react';
import AccordionLayout from 'sections/Faq/FaqLayout';

const Faq = () => {
  const [activeIndex1, setActiveIndex1] = useState<string | number>(1);
  return (
    <div className='bg-fuchsia-50 dark:bg-gray-700'>
      <h2 className='lg:pt:16 pt-10 text-center font-heading text-3xl font-bold text-gray-800 dark:text-gray-200 lg:text-4xl'>
        Frequently asked questions
      </h2>
      <div className='px-3 pb-10 lg:pb-16'>
        <div className='mx-auto mt-10 flex max-w-6xl flex-col justify-center'>
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
    Question: 'What is infertility?',
    Answer:
      'Infertility is a medical condition where a couple is unable to conceive despite regular unprotected intercourse for at least a year.',
  },
  {
    id: 2,
    Question: 'What are the common causes of infertility in women?',
    Answer:
      'Common causes of infertility in women include hormonal imbalances, ovulation disorders, uterine or fallopian tube abnormalities, endometriosis, and age-related factors.',
  },
  {
    id: 3,
    Question: 'What are the common causes of infertility in men?',
    Answer:
      'Common causes of infertility in men include sperm abnormalities, low sperm count, issues with sperm motility, and genetic factors.',
  },
  {
    id: 4,
    Question: 'When should I consider seeking infertility treatment?',
    Answer:
      "If you have been trying to conceive for at least a year (or six months if the woman is over 35) without success, it's recommended to seek infertility evaluation and treatment.",
  },
  {
    id: 5,
    Question: 'What are the treatment options for infertility?',
    Answer:
      'Infertility treatment options may include Intrauterine Insemination (IUI), In Vitro Fertilization (IVF), Intracytoplasmic Sperm Injection (ICSI), and other assisted reproductive technologies, depending on the specific cause of infertility.',
  },
  {
    id: 6,
    Question: 'How successful is infertility treatment?',
    Answer:
      'Success rates of infertility treatment vary depending on factors such as age, the cause of infertility, and the treatment method. Our fertility experts work closely with patients to achieve the best possible outcomes.',
  },
  {
    id: 7,
    Question: 'Does age impact fertility?',
    Answer:
      'Yes, age can significantly impact fertility. Fertility tends to decline as a person gets older, particularly for women. Women are born with a finite number of eggs, and their quality and quantity decrease over time. This can lead to difficulties in conceiving and a higher risk of miscarriages and birth defects as age increases. Men also experience a gradual decline in fertility with age, with potential impacts on sperm quality and reproductive function.',
  },
  {
    id: 8,
    Question: 'How much does fertility treatment cost in Bangalore?',
    Answer:
      "Fertility treatment costs in Bangalore, as well as anywhere else, can vary widely depending on the specific treatment, the clinic or hospital, and the individual circumstances of the patient. It's essential to consult with a fertility specialist and the chosen clinic to get a more accurate cost estimate based on your situation.",
  },
  {
    id: 9,
    Question: 'How long does it take to get pregnant after fertility treatment?',
    Answer:
      "The time it takes to get pregnant after fertility treatment can vary widely depending on the specific treatment, individual factors, and the success of the treatment. Some couples may achieve pregnancy in the first treatment cycle, while others may require multiple cycles. For example, in IVF, it typically takes a few weeks for the entire treatment cycle, from ovarian stimulation to embryo transfer. After the embryo transfer, it can take around 10-14 days to determine if the treatment was successful through a pregnancy test. However, it's important to note that not all fertility treatments result in pregnancy, and some individuals or couples may require more time or adjustments to their treatment plan.",
  },
];
