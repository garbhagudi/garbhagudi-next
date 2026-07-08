import Image from 'next/image';
import Link from 'next/link';

interface AwardsProps {
  awards: {
    id: string;
    title: string;
    slug: string;
    image?: {
      url: string;
    };
    imageUrl?: string;
  }[];
}

const Awards = ({ awards }: AwardsProps) => {
  if (!awards?.length) return null;

  return (
    <section className='relative' aria-labelledby='lp-awards-heading'>
      <div className='relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24'>
        <div className='text-center'>
          <h2
            id='lp-awards-heading'
            className='font-heading text-3xl font-extrabold tracking-tight text-gray-800 drop-shadow-xl dark:text-gray-200 sm:text-4xl'
          >
            Awards and Accolades
          </h2>
        </div>
        <div className='mx-auto mt-12 grid max-w-xl gap-8 lg:max-w-none lg:grid-cols-3'>
          {awards.map((award) => (
            <div
              key={award.id}
              className='flex flex-col overflow-hidden rounded-lg shadow-lg duration-300 hover:-translate-x-2 hover:-translate-y-2 hover:shadow-2xl hover:transition-all'
            >
              <Link href={`/about/awards-and-accolades/${award.slug}`} passHref>
                <div className='flex-shrink-0'>
                  <Image
                    className='h-38 w-full cursor-pointer rounded-t-lg object-contain'
                    src={award.image?.url ?? award.imageUrl ?? ''}
                    alt={award.title}
                    width={360}
                    height={180}
                    loading='lazy'
                  />
                </div>
              </Link>
              <div className='flex flex-1 flex-col justify-between p-6 text-gray-800 dark:bg-gray-700 dark:text-gray-200'>
                <div className='flex-1'>
                  <Link href={`/about/awards-and-accolades/${award.slug}`} passHref>
                    <p className='cursor-pointer font-heading text-lg font-semibold'>
                      {award.title}
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
