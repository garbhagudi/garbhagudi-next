import Image from 'next/image';

const GarbhaGudiWay = () => {
  return (
    <div>
      <div className='bg-purple-50'>
        <h1 className='py-8 text-center font-lexend text-3xl font-bold lg:py-10 lg:text-4xl'>
          GarbhaGudi Way
        </h1>
        <p className='mx-auto max-w-4xl pb-8 text-center font-lexend text-lg'>
          Whether you are an individual contributor or the manager of a large team, you are a
          GarbhaGudi leader - A GarbhaGudian.{' '}
          <span className='font-extrabold text-brandPink4'>
            All GarbhaGudians work with 11 guiding principles.
          </span>
        </p>
      </div>
      <div className='flex flex-wrap items-center justify-center gap-5 bg-purple-50 px-3 py-10 sm:px-0'>
        {ggway.map((items) => (
          <div className='group aspect-square w-full max-w-sm [perspective:1000px]' key={items.id}>
            <div className='relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
              <div className='relative inset-0 h-full w-full'>
                <div className='absolute h-full w-full rounded-lg bg-black/70'>
                  <div className='flex h-full items-center justify-center px-2 text-center font-lexend text-2xl font-bold text-white transition-all duration-500 group-hover:text-transparent md:text-3xl'>
                    {items.title}
                  </div>
                </div>
                <Image
                  className='h-full w-full rounded-xl object-cover shadow-xl shadow-black/50'
                  src={items.bgImage}
                  alt={items.title}
                  width={640}
                  height={640}
                />
              </div>
              <div className='bg-brandDark/70 absolute inset-0 h-full w-full rounded-xl px-3 py-1 text-center text-white [backface-visibility:hidden] [transform:rotateY(180deg)] md:px-12'>
                <div className='flex min-h-full flex-col items-center justify-center font-lexend text-lg md:text-xl'>
                  {items.way}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GarbhaGudiWay;

const ggway = [
  {
    id: 1,
    title: "Couple's Delight",
    way: (
      <div>
        Every couple who walks in, will be treated like a King and Queen. Every couple will feel
        that they are in the right place to complete their family. Every couple who walks in will
        walk out with a smile.{' '}
        <span className='font-extrabold text-brandPink4'>
          We believe that a satisfied client is our best brand evangelist.
        </span>
      </div>
    ),
    bgImage: 'https://unsplash.it/640/640',
  },
  {
    id: 2,
    title: 'Ownership',
    way: (
      <div>
        Leaders are owners. They think long term and don't sacrifice long term values for short term
        results. They always say,{' '}
        <span className='font-extrabold text-brandPink4'>I am ready to take responsibility.</span>
      </div>
    ),
    bgImage: 'https://unsplash.it/640/641',
  },
  {
    id: 3,
    title: 'Passion for Excellance',
    way: (
      <div>
        Leaders strive for excellence in everything they do to deliver higher standards.{' '}
        <span className='font-extrabold text-brandPink4'>
          Leaders find solutions in all situations that stare at them.
        </span>
      </div>
    ),
    bgImage: 'https://unsplash.it/640/642',
  },
  {
    id: 4,
    title: 'Growth',
    way: (
      <div>
        Growth is at the center of our personal, professional and organizational aspirations. We{' '}
        <span className='font-extrabold text-brandPink4'>
          dare to think big and aspire to achieve them all.
        </span>
      </div>
    ),
    bgImage: 'https://unsplash.it/640/639',
  },
  {
    id: 5,
    title: 'Culture of Genuinity',
    way: (
      <div>
        We as leaders always adhere to{' '}
        <span className='font-extrabold text-brandPink4'>
          GarbhaGudi culture of strong ethical values, transparency and humane touch.
        </span>
      </div>
    ),
    bgImage: 'https://unsplash.it/640/643',
  },
  {
    id: 6,
    title: 'Standpoint',
    way: (
      <div>
        We as leaders believe in{' '}
        <span className='font-extrabold text-brandPink4'>
          financial loyalty to the organization and service loyalty to the couple.
        </span>
      </div>
    ),
    bgImage: 'https://unsplash.it/640/638',
  },
  {
    id: 7,
    title: 'Team Work',
    way: (
      <div>
        Together we work as a team to accomplish our common vision. We never say, that's not my job.
        Instead, we assume{' '}
        <span className='font-extrabold text-brandPink4'>
          unconditional responsibility to fix an issue even if it is beyond the scope of one's role.
        </span>
      </div>
    ),
    bgImage: 'https://unsplash.it/640/637',
  },
  {
    id: 8,
    title: 'Hire and develop to raise the bar',
    way: (
      <div>
        Leaders raise the performance bar with every hire and promotion. They are willing to{' '}
        <span className='font-extrabold text-brandPink4'>
          recognise exceptional talent, coach them and guide them throughout
        </span>
      </div>
    ),
    bgImage: 'https://unsplash.it/640/644',
  },
  {
    id: 9,
    title: 'Partners in Progress',
    way: (
      <div>
        As Leaders{' '}
        <span className='font-extrabold text-brandPink4'>
          we respect every individual, including Suppliers, Vendors & Service Providers
        </span>{' '}
        because we know they are our{' '}
        <span className='font-extrabold text-brandPink4'>Brand Ambassadors</span>.
      </div>
    ),
    bgImage: 'https://unsplash.it/640/636',
  },
  {
    id: 10,
    title: 'Deliver Results',
    way: (
      <div>
        At the end of the day,{' '}
        <span className='font-extrabold text-brandPink4'>results speak louder than words.</span>{' '}
        Leaders for delivering{' '}
        <span className='font-extrabold text-brandPink4'>results by going the extra mile.</span>
      </div>
    ),
    bgImage: 'https://unsplash.it/640/635',
  },
  {
    id: 11,
    title: 'Holistic Approach',
    way: (
      <div>
        Leaders will not be one role wonders. They will{' '}
        <span className='font-extrabold text-brandPink4'>
          always be holistic growing in all dimensions - Healthy, Wealthy, Loving, Blissful and
          Peaceful.
        </span>
      </div>
    ),
    bgImage: 'https://unsplash.it/640/646',
  },
];
