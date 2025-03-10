import Image from 'next/image';
import React from 'react';
import AccordionLayout from 'sections/Faq/FaqLayout';
import banner from 'assets/FAQImage.jpg';

const Faq = () => {
  const [activeIndex1, setActiveIndex1] = React.useState<string | number>(1);
  return (
    <div className='mx-auto max-w-7xl px-4' id='faq'>
      <div className='xl:max-w-3xl'>
        <h2 className='lg:pt:16 pt-10 text-center font-heading text-3xl font-bold text-gray-800 dark:text-white lg:text-4xl'>
          Frequently asked questions
        </h2>
        <Image
          src={banner}
          alt='faq'
          width={500}
          height={500}
          className='mx-auto mt-10 aspect-auto w-full rounded-lg object-contain shadow-lg'
        />
        <div className='px-3 pb-10 lg:pb-16'>
          <div className='mx-auto mt-10 flex max-w-6xl flex-col justify-center'>
            {yogaFAQs.map((items) => (
              <AccordionLayout
                title={items.question}
                key={items.id}
                index={items.id}
                activeIndex={activeIndex1}
                setActiveIndex={setActiveIndex1}
              >
                {items.answer}
              </AccordionLayout>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

const yogaFAQs = [
  {
    id: 1,
    question: 'Can Yoga improve fertility in women?',
    answer:
      'Yoga is known for its potential to help with conception. It reduces stress and aids in balancing the hormones. It also improves blood flow to the reproductive parts of the body. Certain yoga poses, like the Bridge and Cobra, enhance the blood flow and support the endocrine system. Yoga is useful but should not replace medical advice.',
  },
  {
    id: 2,
    question: 'How does yoga affect the reproductive system?',
    answer:
      'Yoga for fertility also improves blood circulation in the reproductive organs. Hatha yoga is considered the best for fertility, since its movements are slower and more fluid. Respiratory techniques help women find balance and “asanas” improve circulation.',
  },
  {
    id: 3,
    question: 'What is the success rate of yoga?',
    answer:
      '88% said that they had observed physical benefits, and 86.2% said they saw a positive impact on their mental health. 82.6% of participants commented that yoga had helped with their stress levels. 87.1% said practicing yoga made them feel stronger, and 91.6% said their flexibility had improved.',
  },
  {
    id: 4,
    question: 'What are the results of fertility yoga?',
    answer:
      'It not only helps in easing out mental and physical tension but also gives you emotional stability and beauty benefits. Yoga for fertility likewise has several positive implications like: Stress reliever, Hormonal balance, improved blood circulation etc.',
  },
  {
    id: 5,
    question: 'Is it okay to practice yoga while I am menstruating?',
    answer:
      "The answer is yes - it's ok to practice yoga while you are bleeding. BUT it should specifically be a restorative form of practice- one which encourages rest and relaxation.",
  },
  {
    id: 6,
    question: 'What is the maximum time to do yoga?',
    answer:
      'If yoga is your only workout, aim for at least 20-30 minutes of yoga, 6 days per week. If necessary, you can start with 3 days per week for your first month. As your fitness level increases, you can increase that to 40-70 minutes per day.',
  },
  {
    id: 7,
    question: 'Is yoga better in the morning or evening?',
    answer:
      'As discussed earlier, both morning and evening yoga have their unique benefits. Morning Yoga can help energize you for the day ahead, while evening yoga can help you relax and unwind. The best time for yoga ultimately depends on your personal preference and lifestyle.',
  },
];
