const Stats = () => {
  return (
    <div className='bg-gg-400 dark:bg-gray-700'>
      <div className='mx-auto max-w-7xl px-4 py-12 text-white dark:text-gray-200 sm:px-6 sm:py-16 lg:px-8 lg:py-20'>
        <div className='mx-auto max-w-4xl text-center'>
          <h2 className='font-heading text-3xl font-extrabold sm:text-4xl'>HAPPY TO ASSIST YOU</h2>
          <p className='mt-3 font-content text-xl sm:mt-4'>Anywhere! Anytime!</p>
        </div>
        <dl className='mt-10 text-center sm:mx-auto sm:grid sm:max-w-7xl sm:grid-cols-4 sm:gap-8'>
          <div className='flex flex-col'>
            <dt className='order-1 font-content text-lg font-medium leading-6'>Helped Over</dt>
            <dd className='order-2 mt-2 font-heading text-5xl font-extrabold'>200K+</dd>
            <dd className='order-3 font-content text-lg font-medium leading-6'>Couples</dd>
          </div>
          <div className='mt-10 flex flex-col sm:mt-0'>
            <dt className='order-1 font-content text-lg font-medium leading-6'>Available in</dt>
            <dd className='order-2 mt-2 font-heading text-5xl font-extrabold'>20+</dd>
            <dd className='order-3 font-content text-lg font-medium leading-6'>Languages</dd>
          </div>
          <div className='mt-10 flex flex-col sm:mt-0'>
            <dt className='order-1 font-content text-lg font-medium leading-6'>More than</dt>
            <dd className='order-2 mt-2 font-heading text-5xl font-extrabold'>1M+</dd>
            <dd className='order-3 font-content text-lg font-medium leading-6'>
              Questions Answered
            </dd>
          </div>
          <div className='mt-10 flex flex-col sm:mt-0'>
            <dt className='order-1 font-content text-lg font-medium leading-6'>Available</dt>
            <dd className='order-2 mt-2 font-heading text-5xl font-extrabold'>24/7</dd>
            <dd className='order-3 font-content text-lg font-medium leading-6'>365 Days</dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Stats;
