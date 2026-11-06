const list = [
  'Fertility Hospital in Bangalore',
  'Fertility Doctor in Bangalore',
  'Infertility Treatment in Bangalore',
  'Fertility Clinic in Bangalore',
  'IVF Treatment in Bangalore',
  'Low Cost IVF Treatment in Bangalore',
  'Best IVF centre in Bangalore',
  'IVF cost in Bangalore',
  'ivf pregnancy',
  'fertility center near me',
  'infertility treatment for female',
  'asthenozoospermia treatment',
];

export default function RelatedSearches() {
  return (
    <div className='mx-auto max-w-7xl'>
      <h2 className='py-8 text-center text-2xl font-bold text-[#363636] sm:text-3xl lg:py-14'>
        Related Searches
      </h2>
      <ul className='flex flex-wrap items-center justify-center gap-2 text-center'>
        {list.map((item) => (
          <li
            key={item}
            className='cursor-default rounded-lg bg-brandPurple px-3 py-1.5 text-white hover:bg-brandPurpleDark'
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
