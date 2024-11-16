import React from 'react';
import Image from 'next/image';

export default function PlannedSteps() {
  const renderData = [
    {
      title: 'Step 1: Initial Consultation and Assessment',
      image:
        'https://res.cloudinary.com/garbhagudiivf/image/upload/v1731567197/eggFreezing/tbqrnyfvi5u723rr0iiv.png',
      className: 'h-36 w-52 bg-cover',

      subHeading: [
        {
          subTitle: 'What to Expect:',
          subContent:
            ' During this visit, our fertility specialist will explain the process, assess your health, and discuss your goals.',
        },
        {
          subTitle: 'Personalized Plans:',
          subContent:
            'Every plan is customized to your health and lifestyle. Thisincludes tests to understand your ovarian reserve and reproductive health.',
        },
      ],
    },
    {
      title: 'Step 2: Ovarian Stimulation and Monitoring',
      image:
        'https://res.cloudinary.com/garbhagudiivf/image/upload/v1731567196/eggFreezing/etsi7dqpudfd6mvpl0pu.png',
      className: 'h-36 w-52 bg-cover',

      subHeading: [
        {
          subTitle: 'Hormonal Stimulation:',
          subContent:
            ' For two weeks, hormones are administered to help your ovaries produce multiple mature eggs. This is monitored closely to ensure your health and comfort.',
        },
        {
          subTitle: 'Ultrasound and Blood Tests:',
          subContent:
            'Regular tests track your progress, allowing adjustments in real-time.',
        },
      ],
    },
    {
      title: 'Step 3: Egg Retrieval',
      image:
        'https://res.cloudinary.com/garbhagudiivf/image/upload/v1731567197/eggFreezing/oiyciatjsnj702iq4ili.png',
      className: 'h-36 w-52 bg-cover',

      subHeading: [
        {
          subTitle: 'Simple, Painless Procedure: ',
          subContent:
            'Eggs are retrieved in a short, minimally invasive outpatient procedure. A light anaesthetic is used, and there’s typically no pain or significant recovery needed.',
        },
        {
          subTitle: 'Immediate Cryopreservation: ',
          subContent:
            ' The retrieved eggs are immediately cryopreserved using vitrification, an advanced technique that prevents ice crystal formation for optimal preservation.',
        },
      ],
    },
    {
      title: 'Step 4: Long-Term Storage and Future Use',
      image:
        'https://res.cloudinary.com/garbhagudiivf/image/upload/v1731567196/eggFreezing/sfcp1uzcnvk7tdoynu9d.png',
      className: "'h-36 w-48 bg-cover'",
      subHeading: [
        {
          subTitle: 'Safe Storage: ',
          subContent:
            'Eggs are stored in state-of-the-art, temperature-controlled facilities. They remain viable for years, awaiting your decision.',
        },
        {
          subTitle: 'Future Use:',
          subContent: ` When you're ready, your eggs can be thawed and fertilized with a partner’s or donor's sperm. The resulting embryo is then implanted.`,
        },
      ],
    },
  ];
  return (
    <div className='mx-auto w-10/12 pt-7 lg:py-14 font-nunito-Sans'>
      <div className='flex items-center justify-center py-2 text-center text-2xl font-extrabold md:py-5 md:text-4xl'>
        Guided Support Every Step of the Way
      </div>
      <div className='mx-auto w-full text-center text-lg font-normal text-[#1D1D1D] opacity-70 md:text-xl'>
        Egg freezing involves a few carefully planned steps, all overseen by
        experienced fertility experts to ensure safety and comfort.
      </div>

      <div className='mx-auto w-full p-2 lg:w-[95%] lg:p-10'>
        {renderData.map((ele, index) => (
          <div key={index + 1}>
            <div className='mb-5 flex flex-col items-center gap-5 py-5 lg:flex-row'>
              <Image
                src={ele.image}
                width={200}
                height={200}
                alt={`Image ${index + 1}`}
                loading='lazy'
                className='w-10/12 pb-2 md:h-[200px] md:w-[200px]'
              />

              <div className='text-center  md:text-start'>
                <span className='py-2 text-xl w-10/12 md:w-full mx-auto font-bold tracking-tighter'>
                  {ele.title}
                </span>
                <ul className='list-inside list-disc py-2 opacity-70'>
                  {ele.subHeading.map((el, index) => (
                    <li
                      key={index}
                      className='custom-list-item text-wrap font-nunito-Sans'
                    >
                      <span className='text-base font-bold'>{el.subTitle}</span>
                      <span className='text-base font-normal text-[#6C6C6C]'>
                        {' '}
                        {el.subContent}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {renderData.length !== index + 1 && (
              <div className='mx-auto my-5 hidden w-10/12 border border-[#00000033] md:visible'></div>
            )}
          </div>
        ))}
      </div>
      <style>{`.custom-list-item {
  position: relative;
  padding-left: 1.2em; /* Creates space for the dot */
  text-indent: -1.2em; /* Moves the first line to the dot */
  margin-left: 1.2em; /* Aligns subsequent lines with the first line */
}
`}</style>
    </div>
  );
}
