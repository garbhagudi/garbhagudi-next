const Hero = ({ onStart }: { onStart: () => void }) => (
  <div className='relative overflow-hidden bg-gradient-to-br from-gg-50 via-white to-gg-50 px-4 py-14 text-center dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 sm:py-20'>
    {/* decorative blobs */}
    <div
      aria-hidden='true'
      className='pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gg-200/40 blur-3xl dark:bg-gg-700/20'
    />
    <div
      aria-hidden='true'
      className='pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-amber-200/40 blur-3xl dark:bg-amber-700/10'
    />

    <div className='relative mx-auto max-w-3xl'>
      <span className='inline-block rounded-full bg-gg-100 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gg-700 shadow-sm dark:bg-gg-900 dark:text-gg-300'>
        International Yoga Day 2026
      </span>
      <h1 className='mx-auto mt-5 max-w-2xl font-heading text-3xl font-bold leading-tight text-gray-900 dark:text-white sm:text-4xl lg:text-6xl'>
        YOGA FOR HEALTHY{' '}
        <span className='bg-gradient-to-r from-gg-500 to-gg-700 bg-clip-text text-transparent dark:from-gg-300 dark:to-gg-500'>
          AGEING
        </span>
      </h1>
      <p className='mx-auto mt-5 max-w-2xl font-content text-sm text-gray-600 dark:text-gray-300 sm:text-base lg:text-lg'>
        A curated guide to therapeutic asanas, pranayama, and nutritional essentials designed for a
        healthy living.
      </p>

      <div className='mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row'>
        <button
          type='button'
          onClick={onStart}
          className='w-full rounded-lg bg-gg-500 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-gg-600 hover:shadow-lg sm:w-auto'
        >
          Start Guide ↓
        </button>
      </div>
    </div>
  </div>
);

export default Hero;
