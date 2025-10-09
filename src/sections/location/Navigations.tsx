const Navigations = () => {
  return (
    <div>
      <div className='bg-gg-500 dark:bg-gg-400'>
        <div className='container mx-auto flex max-w-full items-center justify-center space-x-6 overflow-x-scroll px-2.5 py-3 text-sm font-medium text-gray-100 md:text-base'>
          <a href='#treatment-options' className='cursor-pointer text-gray-200 hover:font-semibold'>
            Treatment Options
          </a>
          <a href='#map-section' className='cursor-pointer text-gray-200 hover:font-semibold'>
            Location
          </a>
          <a href='#doctors' className='cursor-pointer text-gray-200 hover:font-semibold'>
            Doctors
          </a>
          <a href='#faqs' className='cursor-pointer text-gray-200 hover:font-semibold'>
            FAQs
          </a>
          <a href='#virtual-tour' className='cursor-pointer text-gray-200 hover:font-semibold'>
            Virtual Tour
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navigations;
