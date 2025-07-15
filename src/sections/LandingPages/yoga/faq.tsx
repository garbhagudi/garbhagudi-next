import { useState } from 'react';
import AccordionLayout from 'sections/Faq/FaqLayout';

const Faq = () => {
  const [activeIndex1, setActiveIndex1] = useState<string | number>(1);
  return (
    <div className='mx-auto max-w-7xl px-4' id='faq'>
      <div className='xl:max-w-3xl'>
        <h2 className='lg:pt:16 pt-10 text-center font-heading text-3xl font-bold text-gray-800 dark:text-white lg:text-4xl'>
          Frequently asked questions
        </h2>
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
    question: 'Who is this program ideal for?',
    answer:
      'This program is ideal for anyone seeking to improve their overall health, manage common ailments naturally, reduce stress, gain a deeper understanding of their body, and cultivate a more balanced lifestyle.',
  },
  {
    id: 2,
    question: 'What makes Swasthya Sapthaha unique?',
    answer:
      'Our program stands out due to the expertise of our senior yoga therapist and acupressure specialist, who will personally conduct the sessions.',
  },
  {
    id: 3,
    question: 'What specific yoga practices will be covered?',
    answer:
      'The sessions will encompass a range of various asanas, pranayama, and relaxation techniques, all designed to promote flexibility, strength, mental clarity, and inner peace.',
  },
  {
    id: 4,
    question: 'What kind of healthy dietary tips can I expect?',
    answer:
      'Our experts will provide practical and easy-to-implement healthy dietary tips, focusing on balanced nutrition, mindful eating, and food choices that support overall well-being and complement the yoga and acupressure practices.',
  },
  {
    id: 5,
    question: 'Do I need prior experience in yoga or acupressure to participate?',
    answer:
      'No prior experience is necessary. The program is designed to accommodate participants of all levels, from beginners to more experienced practitioners.',
  },
  {
    id: 6,
    question: 'What should I bring to the sessions?',
    answer:
      'Participants are advised to wear comfortable clothing suitable for movement, a yoga mat and a notebook and pen for taking notes.',
  },
  {
    id: 7,
    question: 'Will there be opportunities for personalized guidance?',
    answer:
      ' While the sessions will be conducted in a group setting, our specialists will strive to provide individual attention and answer questions during designated Q&A sessions, ensuring a personalized touch to your learning experience.',
  },
];
