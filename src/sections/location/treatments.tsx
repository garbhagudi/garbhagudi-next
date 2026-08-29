import Image from 'next/image';
import { branchTreatments } from 'data/branchTreatments';
import Link from 'next/link';

interface TreatmentOptionsProps {
  branch: string;
  image?: string;
}

const TreatmentOptions = ({ branch, image }: TreatmentOptionsProps) => {
  return (
    <div className='container mx-auto'>
      {image && (
        <div className='mx-auto mt-16 flex max-w-fit items-center justify-center space-x-3 rounded-lg border px-2.5 py-2.5 dark:border-gray-600'>
          <Image
            quality={85}
            src={image}
            alt='IVF Treatment'
            width={100}
            height={100}
            className='w-20 rounded-lg bg-white dark:bg-gray-200/70'
            loading='lazy'
          />
          <div className='font-lexend text-xl font-bold'>NABH Certified*</div>
        </div>
      )}
      <div className='px-2 py-16 text-center font-heading text-xl font-bold lg:py-20 lg:text-2xl'>
        Infertility Treatment Options at {branch}
      </div>
      <div className='grid grid-cols-2 gap-x-3 gap-y-16 px-2 pb-10 lg:grid-cols-4 lg:gap-16 lg:pb-16'>
        {branchTreatments.map((items) => (
          <div
            key={items?.id}
            className='group flex flex-col items-center justify-between rounded-xl border border-gg-400 font-content transition-all duration-300 hover:-translate-y-2 hover:bg-pink-50 hover:shadow-2xl dark:border-2 dark:border-gray-700 dark:hover:bg-gray-700'
          >
            <div className='mx-auto -mt-14 flex h-28 w-28 items-center justify-center rounded-full'>
              <Image
                quality={85}
                src={items?.image}
                alt={items?.name}
                width={100}
                height={100}
                className='w-20 transition-all duration-300 group-hover:grayscale-0 dark:grayscale'
                loading='lazy'
              />
            </div>
            <div className='flex flex-col items-center justify-center py-2'>
              <div className='pb-2 text-center font-heading text-xl font-bold'>{items?.name}</div>
              <div className='px-3 text-center text-base'>{items?.desc}</div>
            </div>
            <div className='w-full rounded-b-xl border bg-gg-500 py-1 text-center dark:border-gray-800 dark:bg-gray-500'>
              <Link
                href={items?.link}
                className='font-content font-bold text-white dark:text-white'
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TreatmentOptions;
