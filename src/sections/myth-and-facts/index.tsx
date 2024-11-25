import { MythsData } from './mafdata';

const IndexPage = () => {
  return (
    <div className='bg-white dark:bg-gray-800'>
      <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8'>
        <div className='max-w-2xl lg:mx-auto lg:text-center'>
          <h1 className='font-heading text-3xl font-bold tracking-tight text-gray-800 dark:text-gray-200 sm:text-4xl'>
            Mythbusters
          </h1>
          <p className='text-brandDark mt-4'>
            Here are some of the most common myths related to health and fertility and the
            associated facts.
          </p>
        </div>
        <div className='mt-20'>
          <dl className='space-y-10 font-content lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10 lg:space-y-0'>
            {MythsData.map((faq) => (
              <div key={faq.id}>
                <dt className='rounded-lg bg-gg-500 px-3 py-1 pt-2 font-heading font-semibold text-gray-200 shadow-md dark:bg-gray-600'>
                  {faq.myth}
                </dt>
                <dd className='text-md mt-3 px-3 font-semibold text-gray-800 dark:text-gray-200'>
                  {faq.fact}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
