import Image from 'next/image';
import React from 'react';
import AccordionLayout from 'sections/Faq/FaqLayout';

const Faq = () => {
  const [activeIndex1, setActiveIndex1] = React.useState(1);
  return (
    <div className='max-w-7xl mx-auto px-4'>
      <div className='max-w-3xl'>
        <h2 className='pt-10 lg:pt:16 text-3xl lg:text-4xl font-heading font-bold text-center text-gray-800 dark:text-white'>
          Frequently asked questions
        </h2>
        <Image
          src='https://yoga-satvicmovement-org.b-cdn.net/resources/img/faq_reduce.webp'
          alt='faq'
          width={500}
          height={500}
          className='w-full aspect-auto object-contain mx-auto mt-10 rounded-lg shadow-lg'
        />
        <div className='pb-10 lg:pb-16 px-3'>
          <div className='flex flex-col justify-center max-w-6xl mx-auto mt-10'>
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
    question: 'What are the benefits of practicing yoga?',
    answer:
      'Yoga offers numerous benefits including improved flexibility, increased strength, better posture, enhanced mental clarity, stress reduction, and overall well-being. Regular practice can also help with weight management, cardiovascular health, and chronic pain relief.',
  },
  {
    id: 2,
    question: 'Do I need to be flexible to start yoga?',
    answer:
      'No, you do not need to be flexible to start yoga. Yoga is for everyone, regardless of their current level of flexibility. With regular practice, you will gradually improve your flexibility, strength, and balance.',
  },
  {
    id: 3,
    question: 'What should I wear to a yoga class?',
    answer:
      "Wear comfortable, breathable clothing that allows you to move freely. It's best to choose moisture-wicking fabrics that can keep you dry during practice. Avoid overly loose clothing that might get in the way of certain poses.",
  },
  {
    id: 4,
    question: 'How often should I practice yoga?',
    answer:
      'The frequency of yoga practice depends on your goals and schedule. Beginners can start with 2-3 times a week and gradually increase the frequency. Even a short daily practice can be highly beneficial.',
  },
  {
    id: 5,
    question: 'Can I practice yoga if I have a medical condition or injury?',
    answer:
      "Yes, but it's important to consult with your healthcare provider before starting yoga if you have any medical conditions or injuries. Inform your yoga instructor about your condition so they can provide modifications and ensure a safe practice.",
  },
];
