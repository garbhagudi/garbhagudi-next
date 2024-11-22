import React from 'react';
import Image from 'next/image';

export default function Freezing() {
  const renderData = [
    {
      title: 'Medical Benefits',
      content: [
        {
          title: 'Better Success Rates with Younger Eggs: ',
          content:
            'Egg quality declines with age, so freezing eggs at a younger age improves future pregnancy outcomes.',
        },
        {
          title: 'Reduced Pressure:',
          content:
            'Egg freezing allows you to delay family planning without compromising fertility potential.',
        },
      ],
    },
    {
      title: 'Who is Egg Freezing for?',
      content: [
        {
          title: 'Career-Focused Women: ',
          content:
            'Many women who want to focus on their careers without feeling pressured by their biological clocks.',
        },
        {
          title: 'Women with Medical Concerns:',
          content:
            'Egg freezing can be especially beneficial for women undergoing medical treatments that could affect fertility, like chemotherapy.',
        },
        {
          title: 'Those Not Ready for Family Planning:',
          content:
            ' For those who want to keep their options open, egg freezing provides a backup plan.',
        },
      ],
    },
  ];

  const data = [
    {
      title: 'To Delay Childbearing',
      content:
        "Women can choose to wait until they've found the right partner or are more comfortable with their careers before starting a family.",
    },
    {
      title: '	To Preserve Fertility',
      content:
        'Egg freezing can help preserve fertility for women who are facing medical treatments or health conditions that could impact their fertility. This includes chemotherapy, pelvic radiation therapy, endometriosis, gender affirming surgery, or ovarian disease. ',
    },
    {
      title: 'For Financial Reasons',
      content:
        'Some women choose to freeze their eggs because they want to wait until they have the financial resources to support a child.',
    },
    {
      title: 'Enjoy Relationship Milestones First',
      content:
        ' For those who want to cherish early years of marriage or partnership without immediate family planning pressures, egg freezing provides peace of mind',
    },

    {
      title: 'To have more options',
      content:
        'Egg freezing can give women more options and peace of mind when it comes to having children. ',
    },

    {
      title: '	Genetic Considerations ',
      content:
        'Family history of early menopause, genetic conditions or fertility challenges can make egg freezing a proactive choice - preserving healthier egg for future use.',
    },
  ];
  return (
    <div className='font-nunito-Sans lg:pb-16'>
      <div className='flex items-center justify-center py-3 text-2xl font-extrabold md:py-6 md:text-4xl'>
        Why Choose Egg Freezing?
      </div>
      <div className='mx-auto mb-10 w-8/12 text-center text-lg font-normal text-[#1D1D1D] opacity-70 md:mb-20 md:w-9/12 md:text-xl'>
        Egg freezing involves a few carefully planned steps, all overseen by
        experienced fertility experts to ensure safety and comfort.
      </div>
      <div className='mx-auto flex w-11/12 flex-col items-center justify-between gap-10 lg:flex-row lg:items-start'>
        <div className='relative h-60 w-1/2 md:h-96 lg:h-0'>
          <Image
            src={
              'https://res.cloudinary.com/garbhagudiivf/image/upload/v1731567196/eggFreezing/or3urzy42lxwtwcedur1.png'
            }
            width={350}
            height={300}
            alt='Image 2'
            loading='lazy'
            className='absolute left-0 top-0'
          />

          {/* Second Image (middle layer) */}
          <Image
            src={
              'https://res.cloudinary.com/garbhagudiivf/image/upload/v1731567195/eggFreezing/hydkajxdwnzhc6g1o1ya.png'
            }
            width={350}
            height={300}
            alt='Image 2'
            loading='lazy'
            className='absolute left-3 top-3'
          />
        </div>

        <div className='w-full'>
          {data.map((ele, index) => {
            return (
              <div key={index} className='py-2 font-nunito-Sans'>
                <div className='text-center text-lg font-bold leading-8 md:text-start md:text-xl'>
                  {`${index + 1}). `}
                  {ele.title}
                </div>
                <div>{ele.content}</div>
                {/* <div className='w-11/12 py-2 text-center text-base font-normal md:w-full md:py-1 md:text-start md:text-lg'>
                  {ele.content.map((el, index) => (
                    <div key={index} className='py-2 md:py-1'>
                      <span className='font-bold opacity-80'>{el.title}</span>
                      <span className='font-normal text-[#6C6C6C] opacity-80'>
                        {' '}
                        {el.content}
                      </span>
                    </div>
                  ))}
                </div> */}
                {renderData.length !== index + 1 && (
                  <div className='hidden w-10/12 border border-[#D9576C4D] md:visible'></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
