import React from 'react';
import Image from 'next/image';
import cellImage from '../../assets/union-page/cell.png';
import outerImage from '../../assets/union-page/outer-cell.png';

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
  return (
    <div className=' pb-16 font-nunito-Sans'>
      <div className='flex items-center justify-center py-6 text-3xl font-extrabold'>
        Why Choose Egg Freezing?
      </div>
      <div className='text-center w-9/12 mx-auto text-xl font-normal text-[#1D1D1D] opacity-70 mb-20'>
        Egg freezing involves a few carefully planned steps, all overseen by
        experienced fertility experts to ensure safety and comfort.
      </div>
      <div className='mx-auto flex w-11/12 flex-row justify-between gap-10'>
        <div className='relative w-1/2'>
        <Image
            src={outerImage}
            width={350}
            height={300}
            alt='Image 2'
            loading='lazy'
            className='absolute left-0 top-0'
          />

          {/* Second Image (middle layer) */}
          <Image
            src={cellImage}
            width={350}
            height={300}
            alt='Image 2'
            loading='lazy'
            className='absolute left-3 top-3 '
          />
        </div>

        <div className='w-full'>
          {renderData.map((ele, index) => {
            return (
              <div key={index} className='py-3 font-nunito-Sans'>
                <div className='text-xl font-bold leading-8'>
                  {ele.title}
                </div>
                <div className='py-1 text-lg font-normal'>
                  {ele.content.map((el,index) => (
                    <div key={index} className='py-1'>
                      <span className='font-bold opacity-80'>{el.title}</span>
                      <span className='text-[#6C6C6C] font-normal opacity-80'> {el.content}</span>
                    </div>
                  ))}
                </div>
                {renderData.length !== index + 1 && (
                  <div className=' w-10/12 border border-[#D9576C4D]'></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
