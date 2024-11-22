import React from 'react';
import Image from 'next/image';

export default function PlannedSteps() {
  return (
    <div className='mx-auto w-11/12 pt-7 font-nunito-Sans lg:w-10/12 lg:py-14'>
      <div className='flex items-center justify-center py-2 text-center text-2xl font-extrabold md:mb-5 md:py-5 md:text-4xl'>
        Guided Support – Step by Step
      </div>
      <Image
        src={
          'https://res.cloudinary.com/garbhagudiivf/image/upload/v1732187209/eggFreezing/ijuhv5e8w39qnmydxj56.png'
        }
        alt={'Guided'}
        width={100}
        height={100}
        className='mx-auto h-[500px] w-full rounded-lg lg:w-10/12'
      />
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
