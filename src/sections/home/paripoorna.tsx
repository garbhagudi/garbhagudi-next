import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import { HiArrowRight } from 'react-icons/hi';

const SHORT_ID = 'wNLJ1Ef3Q0s';

const Paripoorna = () => {
  return (
    <section className='bg-gradient-to-br from-brandPink5 to-brandPurple2 dark:from-gray-800 dark:via-gray-800 dark:to-brandPurpleDark'>
      <div className='mx-auto max-w-7xl px-3 py-8 text-center'>
        <h2 className='font-heading text-2xl font-extrabold text-gray-800 dark:text-gray-200 lg:text-4xl'>
          Paripoorna 2026 : IVF @ <span className='text-brandPink dark:text-gg-400'>₹1,75,000</span>
        </h2>
        <div className='mx-auto mt-6 max-w-[280px] overflow-hidden rounded-xl shadow-lg sm:max-w-xs'>
          <LiteYouTubeEmbed
            id={SHORT_ID}
            title='Paripoorna 2026 | GarbhaGudi IVF Centre'
            aspectWidth={9}
            aspectHeight={16}
            poster='hqdefault'
            webp
            noCookie
            // emits rel="prefetch" instead of "preload" so the thumbnail doesn't compete with the LCP banner
            rel='prefetch'
          />
        </div>
        <a
          href='https://paripoorna.garbhagudi.com/'
          className='mt-6 inline-flex items-center gap-2 rounded-md bg-gg-500 px-5 py-2.5 font-content font-bold text-white hover:bg-gg-600 dark:bg-gg-400 dark:text-gray-800 dark:hover:bg-gg-500'
        >
          Learn more <HiArrowRight />
        </a>
      </div>
    </section>
  );
};

export default Paripoorna;
