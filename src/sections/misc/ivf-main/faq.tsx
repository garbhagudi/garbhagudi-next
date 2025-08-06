import Link from 'next/link';
import { useState } from 'react';
import AccordionLayout from 'sections/Faq/FaqLayout';

const Faq = () => {
  const [activeIndex1, setActiveIndex1] = useState<string | number>(1);
  return (
    <div>
      <div className='mt-6 bg-fuchsia-50 dark:bg-gray-700'>
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
    </div>
  );
};

export default Faq;

const data = [
  {
    id: 1,
    Question: 'What is the average IVF cost in Bangalore?',
    Answer: (
      <p className='md:col-span-7 md:pl-0'>
        The cost of in vitro fertilization (IVF) can vary widely depending on various factors such
        as the location of the treatment, the specific IVF protocol being used, and the individual
        patient's medical history and fertility challenges. It is important to note that the cost of
        IVF can add up quickly, as most patients require multiple cycles to achieve a successful
        pregnancy. Some patients may also require additional procedures or medications, which can
        further increase the overall cost of treatment.
      </p>
    ),
  },
  {
    id: 2,
    Question: 'IVF Treatment Centres in Bangalore?',
    Answer: (
      <div className='md:col-span-7 md:pl-0'>
        GarbhaGudi is a place where dreams come alive, hopes never fade, and possibilities never
        end. We strive tirelessly to assist you to treasure the golden moment of holding your little
        bundles of joy. <br />
        <br /> You no longer need to go long distances for fertility treatments! GarbhaGudi now has
        eight strategically positioned branches in Bengaluru and wants to expand to additional
        places in the near future. Our branches are located in
        <ul className='mt-4 space-y-2'>
          <li>
            <Link
              href={'/locations/hanumanthanagar'}
              className='hover:underlink text-brandPurpleDark hover:text-brandPink'
            >
              HanumanthaNagar
            </Link>
          </li>
          <li>
            <Link
              href={'/locations/kalyan-nagar'}
              className='hover:underlink text-brandPurpleDark hover:text-brandPink'
            >
              Kalyan Nagar
            </Link>
          </li>
          <li>
            <Link
              href={'/locations/electronic-city'}
              className='hover:underlink text-brandPurpleDark hover:text-brandPink'
            >
              Electronic City
            </Link>
          </li>
          <li>
            <Link
              href={'/locations/jayanagar'}
              className='hover:underlink text-brandPurpleDark hover:text-brandPink'
            >
              Jayanagar
            </Link>
          </li>
          <li>
            <Link
              href={'/locations/marathahalli'}
              className='hover:underlink text-brandPurpleDark hover:text-brandPink'
            >
              Marathahalli
            </Link>
          </li>
          <li>
            <Link
              href={'/locations/nagarbhavi'}
              className='hover:underlink text-brandPurpleDark hover:text-brandPink'
            >
              Nagarbhavi
            </Link>
          </li>
          <li>
            <Link
              href={'/locations/new-bel-road'}
              className='hover:underlink text-brandPurpleDark hover:text-brandPink'
            >
              New BEL road
            </Link>
          </li>
          <li>
            <Link
              href={'/locations/yelahanka'}
              className='hover:underlink text-brandPurpleDark hover:text-brandPink'
            >
              Yelahanka
            </Link>
          </li>
          <li>
            <Link
              href={'/locations/davanagere'}
              className='hover:underlink text-brandPurpleDark hover:text-brandPink'
            >
              Davanagere
            </Link>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 3,
    Question: 'What is Success rate and Risk percentage involved in IVF treatment?',
    Answer: (
      <p className='md:col-span-7 md:pl-0'>
        As for the risks involved in IVF treatment, they are generally minimal and most patients do
        not experience any serious complications. Some common side effects of IVF may include
        bloating, cramping, breast tenderness, and mood changes. More serious risks, such as
        bleeding or infection, are rare but can occur. Additionally, there is a small risk of
        multiple pregnancies, which can pose additional health risks for both the mother and the
        babies.
      </p>
    ),
  },
  {
    id: 4,
    Question:
      'What are the additional costs related to IVF Treatment in Bangalore and nearby areas?',
    Answer: (
      <div className='md:col-span-7 md:pl-0'>
        There are several additional costs that can be associated with in vitro fertilization (IVF)
        treatment. These can include:
        <ul className='my-4 space-y-2'>
          <li>
            <strong>Medications:</strong> The medications needed to stimulate egg production and
            prepare the uterus for pregnancy can be expensive. These medications are usually not
            covered by insurance.
          </li>
          <li>
            <strong>Genetic testing:</strong> Pre-implantation genetic testing (PGT) can be done to
            check the health of the embryos before they are transferred to the uterus.
          </li>
          <li>
            <strong>Anesthesia:</strong> Some patients may need to be sedated for the egg retrieval
            procedure, which can add to the cost of the treatment.
          </li>
          <li>
            <strong>Storage of frozen embryos:</strong> If you have leftover embryos after the IVF
            cycle, you may choose to have them frozen for future use.
          </li>
          <li>
            <strong>Multiple cycles:</strong> It is common for patients to need more than one cycle
            of IVF in order to become pregnant. Each additional cycle can add to the overall cost of
            treatment.
          </li>
        </ul>
        It is important to discuss the potential costs of IVF treatment with your doctor and
        fertility clinic in order to fully understand the expenses you may incur.
      </div>
    ),
  },
];
