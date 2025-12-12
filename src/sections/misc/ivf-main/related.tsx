import Link from 'next/link';

const Related = () => (
  <section id='related' className='mx-auto max-w-7xl pb-10 text-center lg:pb-16'>
    <h3 className='py-10 font-heading text-3xl font-bold text-gray-800 dark:text-gray-200 lg:py-16 lg:text-4xl'>
      Related Searches
    </h3>

    <div className='flex flex-wrap justify-center gap-3'>
      {keywords.map(({ id, word, link }) => (
        <Link
          key={id}
          href={link}
          className='rounded-lg border bg-brandPurple2 px-3 py-1.5 font-content text-sm font-bold hover:bg-brandPurpleDark hover:text-white dark:border-gray-500 dark:bg-gray-600'
        >
          {word}
        </Link>
      ))}
    </div>
  </section>
);

export default Related;

const keywords = [
  {
    id: 1,
    word: 'IVF Centre In Bangalore',
    link: '/',
  },
  {
    id: 2,
    word: 'Best IVF Centre In Bangalore',
    link: '/',
  },
  {
    id: 3,
    word: 'IVF Hospital In Bangalore',
    link: '/',
  },
  {
    id: 4,
    word: 'IVF Cost In Bangalore',
    link: '/treatments/ivf-treatment-in-bangalore',
  },
  {
    id: 5,
    word: 'IVF Treatment Cost In Bangalore',
    link: '/treatments/ivf-treatment-in-bangalore',
  },
  {
    id: 6,
    word: 'IVF Treatment In Bangalore',
    link: '/treatments/ivf-treatment-in-bangalore',
  },
  {
    id: 7,
    word: 'Best IVF Treatment In Bangalore',
    link: '/treatments/ivf-treatment-in-bangalore',
  },
];
