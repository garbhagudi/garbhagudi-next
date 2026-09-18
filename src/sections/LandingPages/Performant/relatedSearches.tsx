import React from 'react';

interface RelatedSearchesProps {
  city?: string;
}

const SEARCH_LABELS = [
  'Fertility Hospital in',
  'Fertility Doctor in',
  'Infertility Treatment in',
  'Fertility Clinic in',
  'IVF Treatment in',
  'Low Cost IVF Treatment in',
];

const RelatedSearches = ({ city = 'Bangalore' }: RelatedSearchesProps) => {
  const list = SEARCH_LABELS.map((label, i) => ({ id: i + 1, item: `${label} ${city}` }));

  return (
    <div className='mx-auto max-w-7xl'>
      <h2 className='py-8 text-center font-heading text-4xl font-bold lg:py-14'>
        Related Searches
      </h2>
      <ul className='flex flex-wrap items-center justify-center gap-2 pb-6 text-center font-content lg:pb-12'>
        {list.map((item) => (
          <li
            key={item.id}
            className='cursor-default rounded-lg bg-gg-400 px-3 py-1.5 text-white hover:bg-gg-600'
          >
            {item.item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedSearches;
