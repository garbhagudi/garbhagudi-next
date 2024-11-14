import React from 'react';
import Image from 'next/image';
import image1 from '../../assets/union-page/image.png';
import image2 from '../../assets/union-page/image (1).png';
import image3 from '../../assets/union-page/image (2).png';
import image4 from '../../assets/union-page/image (3).png';

export default function PlannedSteps() {
  const renderData = [
    {
      title: 'Step 1: Initial Consultation and Assessment',
      image: image1,
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
      image: image2,
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
      image: image3,
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
      image: image4,
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
    <div className='font-nunito-Sans mx-auto w-10/12 py-14'>
      <div className='flex items-center justify-center py-5 text-4xl font-extrabold'>
        Guided Support Every Step of the Way
      </div>
      <div className='mx-auto w-full text-center text-xl font-normal text-[#1D1D1D] opacity-70'>
        Egg freezing involves a few carefully planned steps, all overseen by
        experienced fertility experts to ensure safety and comfort.
      </div>

      <div className='mx-auto w-[95%] p-10'>
        {renderData.map((ele, index) => (
          <div key={index + 1}>
            <div className='mb-5 flex items-center gap-5 py-5'>
              <Image
                src={ele.image}
                width={200}
                height={200}
                alt={`Image ${index + 1}`}
                loading='lazy'
                // layout="responsive"
                // layout='intrinsic' // or layout="responsive"
                // objectFit='cover'
              />

              <div>
                <span className='py-2 text-lg font-bold tracking-tighter'>
                  {ele.title}
                </span>
                <ul className='list-inside list-disc py-2 opacity-70'>
                  {ele.subHeading.map((el, index) => (
                    <li
                      key={index}
                      className='custom-list-item font-nunito-Sans text-wrap'
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
              <div className='mx-auto my-5 w-10/12 border border-[#00000033]'></div>
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
