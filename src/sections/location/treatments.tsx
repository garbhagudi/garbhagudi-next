import Image from 'next/image';
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
        {Data.map((items) => (
          <div
            key={items?.id}
            className='group flex flex-col items-center justify-between rounded-xl border border-gg-400 font-content transition-all duration-300 hover:-translate-y-2 hover:bg-pink-50 hover:shadow-2xl dark:border-2 dark:border-gray-700 dark:hover:bg-gray-700'
          >
            <div className='mx-auto -mt-14 flex h-28 w-28 items-center justify-center rounded-full'>
              <Image
                src={items?.image}
                alt={items?.treatent}
                width={100}
                height={100}
                className='w-20 transition-all duration-300 group-hover:grayscale-0 dark:grayscale'
                loading='lazy'
              />
            </div>
            <div className='flex flex-col items-center justify-center py-2'>
              <div className='pb-2 text-center font-heading text-xl font-bold'>
                {items?.treatent}
              </div>
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

const Data = [
  {
    id: 1,
    treatent: 'IVF Treatment',
    desc: "Unlock the doors of parenthood with GarbhaGudi's advanced IVF treatment options and give your dreams of starting a family a new lease of life.",
    link: '/treatments/ivf-treatment-in-bangalore',
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1674890412/Misc/ivf%20icons/ivf_jwjqwf.webp',
  },
  {
    id: 2,
    treatent: 'ICSI',
    desc: "Experience the joy of parenthood with GarbhaGudi's IUI treatment, designed to increase your chances of pregnancy in a natural way.",
    link: '/treatments/icsi-treatment-in-bangalore',
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1674890412/Misc/ivf%20icons/fertilization_o5hpkk.webp',
  },
  {
    id: 3,
    treatent: 'IUI',
    desc: "Take the first step towards parenthood with GarbhaGudi's state-of-the-art ICSI treatment, which offers a high success rate for couples struggling with infertility.",
    link: '/treatments/iui-treatment-in-bangalore',
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1674890412/Misc/ivf%20icons/in-vitro_mujzkz.webp',
  },
  {
    id: 4,
    treatent: 'TESA/PESA',
    desc: "Get the chance to father a child with GarbhaGudi's TESA/PESA treatment, a revolutionary option for men with low sperm count or poor sperm quality.",
    link: '/treatments/pesa-and-tesa',
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1674890412/Misc/ivf%20icons/research_j8mdnk.webp',
  },
  {
    id: 5,
    treatent: 'Blastocyst Culture',
    desc: 'Maximize your chances with blastocyst culture treatment, which allows embryos to grow for a longer period before transfer, increasing the chances of implantation.',
    link: '/treatments/ivf-treatment-in-bangalore',
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1674890412/Misc/ivf%20icons/sperm_utf0oe.webp',
  },
  {
    id: 6,
    treatent: 'Gyanec Treatments',
    desc: "Say goodbye to gynecological problems with GarbhaGudi's comprehensive range of treatments, specially designed to keep you healthy and fertile.",
    link: '/resources/causes/polycystic-ovarian-syndrome-pcos',
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1674890412/Misc/ivf%20icons/gynecology_ynvds8.webp',
  },
  {
    id: 7,
    treatent: 'Natural Conception',
    desc: "Start your journey to parenthood with GarbhaGudi's natural conception program, which helps you understand their fertility and increase their chances of conceiving.",
    link: '/treatments/natural-pregnancy',
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1674890412/Misc/ivf%20icons/maternity_cee8v2.webp',
  },
  {
    id: 8,
    treatent: 'Semen Analysis / CASA',
    desc: "Get a detailed analysis of your semen and understand your fertility status with GarbhaGudi's advanced Semen Analysis/CASA service.",
    link: '/resources/diagnosis/semen-analysis',
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1674890580/Misc/ivf%20icons/semen_nqxd6s.webp',
  },
];
