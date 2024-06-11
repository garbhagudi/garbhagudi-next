import React, { useState } from 'react';
import AccordionLayout from 'sections/Faq/FaqLayout';
import Link from 'next/link';

type Props = {};

const Faq = (props: Props) => {
  const [activeIndex1, setActiveIndex1] = useState(1);
  return (
    <div className='px-3 scroll-m-16' id='faq'>
      <h2 className='text-center text-2xl  lg:text-3xl font-heading pt-12 font-semibold text-gray-800 dark:text-gray-200'>
        Frequently Asked Questions
      </h2>
      <div className='text-lg font-content mt-8 text-center'>
        Here are some of the most frequently asked questions about infertility
        and its treatment options.
      </div>
      <div className='flex flex-col justify-center max-w-6xl mx-auto mt-10'>
        {Data.map((items) => (
          <AccordionLayout
            title={items.q}
            key={items.id}
            index={items.id}
            activeIndex={activeIndex1}
            setActiveIndex={setActiveIndex1}
          >
            {items.a}
          </AccordionLayout>
        ))}
      </div>
    </div>
  );
};

export default Faq;

const Data = [
  {
    id: 1,
    q: 'What is IUI?',
    a: (
      <div>
        IUI stands for intrauterine insemination. It is a procedure in which
        sperm is placed directly inside the uterus to increase the chances of
        pregnancy.
      </div>
    ),
  },
  {
    id: 2,
    q: 'Who is a good candidate for IUI?',
    a: (
      <div>
        IUI is typically recommended for couples with mild fertility issues,
        such as problems with ovulation or sperm count. It can also be used in
        cases of unexplained infertility or as part of a treatment plan for
        couples undergoing assisted reproduction.
      </div>
    ),
  },
  {
    id: 3,
    q: 'How is the IUI procedure performed?',
    a: (
      <div>
        During the IUI procedure, sperm is collected from the male partner or a
        sperm donor and prepared. The prepared sperm is then inserted into the
        uterus through a thin, flexible tube called a catheter during ovulation.
      </div>
    ),
  },
  {
    id: 4,
    q: 'How long does an IUI treatment cycle take?',
    a: (
      <div>
        An{' '}
        <Link
          href={'/treatments/intra-uterine-insemination-iui'}
          className='text-brandPink hover:underline'
        >
          IUI treatment
        </Link>{' '}
        cycle can take around 4 to 6 weeks to complete, starting from the
        monitoring of ovulation to the confirmation of pregnancy.
      </div>
    ),
  },
  {
    id: 5,
    q: 'What is the success rate of IUI?',
    a: (
      <div>
        The success rate of IUI is typically around 10-20% per cycle, but it can
        vary depending on many factors such as the woman's age, the cause of
        infertility and the overall health of the sperm
      </div>
    ),
  },
  {
    id: 6,
    q: 'Are there any side effects of IUI?',
    a: (
      <div>
        IUI is generally considered a safe procedure with minimal side effects.
        Some women may experience mild cramping or discomfort during or after
        the procedure. Ovulation induction medications may cause mild side
        effects such as hot flashes, headaches, or mood swings.
      </div>
    ),
  },
  {
    id: 7,
    q: 'What is the cost of IUI in Bangalore?',
    a: (
      <div>
        <Link
          href={'/treatments/intra-uterine-insemination-iui'}
          className='text-brandPink hover:underline'
        >
          IUI treatment in India
        </Link>{' '}
        can cost between INR 15,000 and INR 50,000 per cycle, depending on the
        location of the clinic, the experience of the specialist, and additional
        costs associated with the procedure such as medications and laboratory
        fees. It's always best to check with the clinic or your insurance
        provider to understand the full cost of the treatment. Some clinics also
        offer financing options to help make the treatment more affordable.
      </div>
    ),
  },
];
