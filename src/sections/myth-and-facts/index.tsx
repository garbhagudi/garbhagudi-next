import { MythsData } from './mafdata';

const IndexPage = () => {
  return (
    <div className='bg-white dark:bg-gray-800 '>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
        <div className='max-w-2xl lg:mx-auto lg:text-center'>
          <h1 className='text-3xl font-bold tracking-tight font-heading text-gray-800 dark:text-gray-200  sm:text-4xl'>
            Mythbusters
          </h1>
          <p className='mt-4 text-brandDark'>
            Here are some of the most common myths related to health and
            fertility and the associated facts.
          </p>
        </div>
        <div className='mt-20'>
          <dl className='space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10 font-content'>
            {MythsData.map((faq) => (
              <div key={faq.id}>
                <dt className='font-semibold text-gray-200 font-heading bg-gg-500 dark:bg-gray-600 pt-2 py-1 px-3 rounded-lg shadow-md'>
                  {faq.myth}
                </dt>
                <dd className='mt-3 text-gray-800 dark:text-gray-200 text-md font-semibold px-3'>
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
