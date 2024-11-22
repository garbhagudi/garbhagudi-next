const CoreVision = () => {
  return (
    <div className='overflow-hidden bg-white px-4 py-16 dark:bg-gray-800 sm:px-6 lg:px-8 xl:py-36'>
      <div className='mx-auto max-w-max lg:max-w-7xl'>
        <div className='relative z-10 mb-8 md:mb-2 md:px-6'>
          <div className='max-w-prose text-base lg:max-w-none'></div>
        </div>
        <div className='relative'>
          <svg
            className='absolute right-0 top-0 -mr-20 -mt-20 hidden md:block'
            width={404}
            height={384}
            fill='none'
            viewBox='0 0 404 384'
            aria-hidden='true'
          >
            <defs>
              <pattern
                id='95e8f2de-6d30-4b7e-8159-f791729db21b'
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits='userSpaceOnUse'
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className='text-gray-100 dark:text-gray-700'
                  fill='currentColor'
                />
              </pattern>
            </defs>
            <rect width={404} height={384} fill='url(#95e8f2de-6d30-4b7e-8159-f791729db21b)' />
          </svg>
          <svg
            className='absolute bottom-0 left-0 -mb-20 -ml-20 hidden md:block'
            width={404}
            height={384}
            fill='none'
            viewBox='0 0 404 384'
            aria-hidden='true'
          >
            <defs>
              <pattern
                id='7a00fe67-0343-4a3c-8e81-c145097a3ce0'
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits='userSpaceOnUse'
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className='text-gray-100 dark:text-gray-700'
                  fill='currentColor'
                />
              </pattern>
            </defs>
            <rect width={404} height={384} fill='url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)' />
          </svg>
          <div className='relative md:p-6'>
            <p className='my-4 mt-2 font-content text-4xl font-bold leading-8 tracking-tight text-gray-800 dark:text-gray-200 sm:text-5xl'>
              Core Values
            </p>
            <div className='lg:grid lg:grid-cols-2 lg:gap-6'>
              <div className='prose prose-indigo prose-lg text-brandDark lg:max-w-none'>
                <ul className='list-disc space-y-2 font-content text-gray-800 dark:text-gray-200'>
                  <li>
                    Service loyalty to the patients and financial loyalty to the organization.
                  </li>
                  <li>Complete adherence to ethical practices, at all times, in all situations.</li>
                  <li>
                    Adhere to Government rules, Medical Council rules & guidelines and importantly
                    to the rules of mother Nature.
                  </li>
                  <li>Priority to patients, people and partners</li>
                  <li>Hire the best people, train them and retain them</li>
                  <li>
                    Commitment to social responsibility in terms of treatments and costs to those
                    who cannot afford treatments.
                  </li>
                </ul>
              </div>

              <div className='mt-6 text-gray-500 lg:mt-0'>
                <p className='my-4 font-content text-4xl font-bold leading-8 tracking-tight text-gray-800 dark:text-gray-200 sm:text-5xl lg:-mt-[72px]'>
                  Vision
                </p>
                <p className='font-content italic text-gray-800 dark:text-gray-200'>
                  &quot;My GarbhaGudi shall be a globally renowned reproductive health university,
                  having superlative success rates, due to strong scientific approach, ethical
                  values and humane touch&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreVision;
