import { RichText } from '@graphcms/rich-text-react-renderer';
import React, { useState } from 'react';
import AccordionLayout from 'sections/Faq/FaqLayout';

const FAQs = ({ data, activeIndex }: any) => {
  const [activeIndex1, setActiveIndex1] = useState(activeIndex);
  console.log(activeIndex1);

  return (
    data?.length > 0 && (
      <div className='bg-fuchsia-50 dark:bg-gray-800'>
        <h2 className='lg:pt:16 pt-10 text-center font-heading text-3xl font-bold text-gray-800 dark:text-white lg:text-4xl'>
          Frequently asked questions
        </h2>
        <div className='px-3 pb-10 lg:pb-16'>
          <div className='mx-auto mt-10 flex max-w-6xl flex-col justify-center'>
            {data?.map((items: any) => (
              <AccordionLayout
                title={items?.question}
                key={items?.id}
                index={items?.id}
                activeIndex={activeIndex1}
                setActiveIndex={setActiveIndex1}
              >
                <RichText content={items?.answer?.raw?.children} />
              </AccordionLayout>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default FAQs;
