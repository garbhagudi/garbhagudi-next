import React from 'react';
import Image from 'next/image';

export default function Journies() {
  const renderData = [
    {
      name: 'Anamika Thomas, 28',
      content:
        'Egg freezing gave me peace of mind and allowed me to focus on my career without worrying about my fertility future.',
    },
    {
      name: 'Shreya Singh, 32',
      content:
        'The team here made the whole process so simple. They answered all my questions and took away any fears I had.',
    },
    {
      name: 'Shyamali Mishra, 29',
      content:
        'Egg freezing gave me peace of mind and allowed me to focus on my career without worrying about my fertility future.',
    },
  ];
  return (
    <div className='py-10'>
      <div className='font-nunito-Sans py-5 text-center text-4xl font-extrabold dark:text-white '>
        Inspiring Journeys to Fertility Freedom
      </div>
      <div className='font-nunito-Sans mx-auto w-9/12 pb-10 text-center dark:text-white  text-xl text-[#1D1D1D] opacity-70'>
        Hearing from real clients who took the step toward fertility
        preservation can be powerful. We share anonymized testimonials and video
        snippets highlighting the reasons and positive outcomes our clients have
        experienced through egg freezing.
      </div>
      <div className='ml-auto flex w-11/12 justify-evenly gap-3 pb-5'>
        {renderData.map((ele,index) => {
          return (
            <div key={index} className='rounded-xl border p-5 shadow'>
              <div className='flex justify-center gap-3'>
                <div>
                  <Image
                    src={"https://res.cloudinary.com/garbhagudiivf/image/upload/v1731567194/eggFreezing/xvwtrr5loef21sk4yprc.png"}
                    width={200}
                    height={150}
                    alt={`Image `}
                    loading='lazy'
                  />
                </div>
                <div className='flex flex-col'>
                  <span className='font-figtree text-xl font-semibold'>
                    {ele.name}
                  </span>
                  <span className='font-figtree text-base font-semibold text-[#B9B9B9] pb-2'>
                    Recently Consulted
                  </span>
                  <span className='font-nunito-Sans text-base font-normal text-[#1A1B1D] dark:text-white '>
                    {ele.content}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
      
      .customitem {
  position: relative;
  padding-left: 1.2em; /* Creates space for the dot */
  text-indent: -1.2em; /* Moves the first line to the dot */
  margin-left: 1.2em; /* Aligns subsequent lines with the first line */
}
  .shadow {
      box-shadow: -8px 2px 40px 0px #0000001F}`}</style>
    </div>
  );
}
