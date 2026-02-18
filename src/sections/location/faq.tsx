'use client';

import { useState, ReactNode } from 'react';
import Link from 'next/link';
import AccordionLayout from 'sections/Faq/FaqLayout';
import { contactData } from 'sections/gg-care/content';

type FaqProps = {
  branch: string;
};

const Faq = ({ branch }: FaqProps) => {
  const [activeIndex, setActiveIndex] = useState<number | string | null>(1);

  const data: {
    id: number;
    Question: ReactNode;
    Answer: ReactNode;
  }[] = [
    {
      id: 1,
      Question: `How to contact GarbhaGudi IVF Centre in ${branch}?`,
      Answer: (
        <div className='md:col-span-8 md:pl-0'>
          To contact the fertility specialists at our {branch} branch, please visit{' '}
          <Link href={'/gg-care'} className='text-gg-500 dark:text-gg-400'>
            GG Care (Support)
          </Link>{' '}
          page. You can find all the information related to {branch} branch and how to contact
          there. Alternatively, you can use the chat feature that the bottom right-hand corner to
          ask us your queries.
          <div className='mt-4 grid grid-cols-1 gap-4 md:grid-cols-2'>
            {contactData.getInTouch.map((items) => (
              <div key={items.id}>
                <div>
                  <div className='font-bold'>{items.name}</div>
                  <div>
                    <Link
                      href={`mailto:${items.email}`}
                      className='font-semibold text-brandPurpleDark hover:underline dark:text-purple-400'
                    >
                      {items.email}
                    </Link>
                  </div>
                  <Link
                    href={`tel:${items.phone}`}
                    className='text-gg-500 hover:underline dark:text-gg-400'
                  >
                    {items.phone}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 2,
      Question: `What are our success rates for IVF treatments in ${branch}?`,
      Answer: (
        <div>
          The success rate of IVF treatment depends on multiple factors such as age, medical
          condition, and fertility history. It is always recommended to consult a fertility
          specialist at our {branch} branch for personalized guidance.
        </div>
      ),
    },
    {
      id: 3,
      Question: (
        <div>
          What is the total cost of IVF in <strong>{branch}</strong>?
        </div>
      ),
      Answer: (
        <div>
          The total cost of IVF in <strong>{branch}</strong> starts from ₹
          {branch === 'Davanagere' || branch === 'Hosur' ? '1,50,000' : '1,65,000'}. The cost may
          vary depending on medical condition and treatment protocol.
        </div>
      ),
    },
    {
      id: 4,
      Question: `What is included in ₹${branch === 'Davanagere' || branch === 'Hosur' ? '1,50,000' : '1,65,000'}?`,
      Answer: (
        <div className='space-y-4'>
          <p>
            This ₹{branch === 'Davanagere' || branch === 'Hosur' ? '1,50,000' : '1,65,000'} includes
            fertility specialist consultations, oocyte pickup (OPU), follicular monitoring scans,
            and the complete IVF process including OPU procedures, OT charges, embryology laboratory
            charges, specialist and nursing fees, culture media and consumables, intracytoplasmic
            sperm injection (ICSI) charges, sperm preparation charges, embryologist fees, embryo
            freezing for six months, thawing, embryo transfer (ET) or frozen embryo transfer (FET),
            and post-OPU ultrasound (USG) scan examination.
          </p>

          <p>
            Complementary holistic therapies, including counseling, meditation, pranayama, breathing
            exercises, and yoga asanas, are thoughtfully designed to support eligible couples.
          </p>

          <p>
            The total cost and type of treatment protocols may vary depending on age and the
            physiological condition of the couple (husband and wife) or woman, and are determined by
            the results of medical tests.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className='bg-fuchsia-50 py-10 dark:bg-gray-800'>
      <h2 className='text-center text-3xl font-bold text-gray-800 dark:text-white'>
        Frequently Asked Questions
      </h2>

      <div className='mx-auto mt-10 max-w-6xl px-4'>
        {data.map((item) => (
          <AccordionLayout
            key={item.id}
            title={item.Question}
            index={item.id}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          >
            {item.Answer}
          </AccordionLayout>
        ))}
      </div>
    </div>
  );
};

export default Faq;
