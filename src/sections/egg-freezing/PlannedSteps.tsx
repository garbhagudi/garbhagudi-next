import Image from 'next/image';

export default function PlannedSteps() {
  return (
    <div className='mx-auto w-11/12 pt-7 font-nunito-Sans lg:w-10/12'>
      <div className='flex items-center justify-center py-2 text-center text-2xl font-extrabold md:mb-5 md:py-5 md:text-4xl'>
        Guided Support – Step by Step
      </div>
      <Image
        src={
          'https://res.cloudinary.com/garbhagudiivf/image/upload/v1733303389/Creatives-02_pryj4u.webp'
        }
        alt={'Guided'}
        width={100}
        height={100}
        className='mx-auto h-full w-full rounded-lg lg:w-10/12'
        loading='lazy'
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
