const ExtraSlot = () => {
  return (
    <div className='my-8'>
      <h2 className='text-center text-lg font-bold text-gg-500'>
        Effective From 2nd March 2026. You may book your appointment at your convenience
      </h2>
      <div className='mt-5 flex w-full justify-center'>
        <ul className='mx-auto w-full space-y-2 rounded-2xl border border-pink-200 bg-white p-5 text-sm shadow-xl dark:border-gray-600 dark:bg-gray-700 md:w-1/2'>
          <li className='flex justify-between border-b border-gray-700 pb-2'>
            <span className='font-bold text-gray-800 dark:text-gray-200'>
              Dr. P. V. Vasavi Devi
            </span>
            <span className='text-gray-600 dark:text-gray-100'>9AM to 12PM</span>
          </li>
          <li className='flex justify-between border-b border-gray-700 pb-2'>
            <span className='font-bold text-gray-800 dark:text-gray-200'>
              Dr. Vandana Ramanathan
            </span>
            <span className='text-gray-600 dark:text-gray-100'>12PM to 7PM</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ExtraSlot;
