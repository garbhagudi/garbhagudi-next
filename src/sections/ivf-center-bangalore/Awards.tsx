import Image from 'next/image';

const awards = [
  {
    id: 1,
    img: 'https://media.graphassets.com/cZCpRhM0Snm4T5prE2EH',
    title: 'Best IVF and Fertility Hospital in India',
    desc: 'National Quality Achievement Awards - 2021',
  },
  {
    id: 2,
    img: 'https://media.graphassets.com/k78093VmTjGWSA2LN5JU',
    title: 'Among Top 10 IVF Centres in India',
    desc: 'Times Health Survey - 2021',
  },
  {
    id: 3,
    img: 'https://media.graphassets.com/eDbmNcAUTOSyWhDpPu2Z',
    title: 'Best IVF Clinic of the Year - South',
    desc: 'National Fertility Awards - Economic Times Health - 2022',
  },
  {
    id: 4,
    img: 'https://media.graphassets.com/luwGzhRUSUKaEwJAQDrQ',
    title: 'Certified Healthy Workplace',
    desc: 'Arogya World - 2022',
  },
  {
    id: 5,
    img: 'https://media.graphassets.com/Q3M7VqroRJmeY8YdfPgJ',
    title: 'ICON of the Year - IVF - Dr Asha S Vijay',
    desc: 'National Fertility Awards - ET HealthWorld - 2023',
  },
];

const Awards = () => {
  return (
    <section
      className='bg-gradient-to-b from-gg-50/40 to-white'
      aria-labelledby='lp-awards-heading'
    >
      <div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16'>
        <h2
          id='lp-awards-heading'
          className='text-center font-heading text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'
        >
          Awards &amp; recognition
        </h2>
        <p className='mx-auto mt-4 max-w-3xl text-center font-content text-gray-700'>
          GarbhaGudi has won numerous awards from various organisations for its exceptional service
          and high success rates.
        </p>

        <div className='mt-10 flex flex-wrap items-stretch justify-center gap-5'>
          {awards.map((award) => (
            <div
              key={award.id}
              className='flex w-64 flex-col items-center rounded-xl border border-gg-100 bg-white p-4 shadow-sm transition hover:shadow-lg'
            >
              <Image
                src={award.img}
                alt={award.title}
                className='rounded-lg'
                width={400}
                height={400}
                loading='lazy'
              />
              <h3 className='mt-3 text-center font-heading text-base font-bold leading-snug text-gray-900'>
                {award.title}
              </h3>
              <p className='mt-1 text-center font-content text-sm text-gray-600'>{award.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
