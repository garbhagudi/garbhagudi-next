import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import { useEffect, useRef } from 'react';
import { HiArrowRight } from 'react-icons/hi';

const SHORT_ID = 'wNLJ1Ef3Q0s';

const Paripoorna = ({ className = '' }: { className?: string }) => {
  const playerRef = useRef<HTMLDivElement>(null);

  // the embed only mounts its iframe on click, so click it once the player scrolls into view
  useEffect(() => {
    const wrapper = playerRef.current;
    if (!wrapper) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        wrapper.querySelector<HTMLElement>('.yt-lite')?.click();
        observer.disconnect();
      },
      { threshold: 0.5 }
    );
    observer.observe(wrapper);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`text-center ${className}`}>
      <h2 className='font-heading text-2xl font-extrabold tracking-tight text-gray-800 dark:text-gray-200 max-sm:text-3xl sm:leading-none lg:text-5xl'>
        <span className='md:block'>Paripoorna 2026 :</span>{' '}
        <span className='text-gg-500 dark:text-gg-400 md:mt-2 md:block'>IVF @ ₹1,75,000</span>
      </h2>
      <div
        ref={playerRef}
        className='mx-auto mt-6 w-full max-w-[260px] overflow-hidden rounded-xl shadow-lg'
      >
        <LiteYouTubeEmbed
          id={SHORT_ID}
          title='Paripoorna 2026 | GarbhaGudi IVF Centre'
          aspectWidth={9}
          aspectHeight={16}
          poster='hqdefault'
          webp
          noCookie
          // browsers only allow autoplay when muted
          muted
          // emits rel="prefetch" instead of "preload" so the thumbnail doesn't compete with the LCP banner
          rel='prefetch'
        />
      </div>
      <div className='pt-6 lg:mt-auto'>
        <a
          href='https://paripoorna.garbhagudi.com/'
          className='inline-flex items-center gap-2 rounded-md bg-gg-500 px-3 py-2 text-sm font-bold text-white hover:bg-gg-600 dark:bg-gg-400 dark:text-gray-800 dark:hover:bg-gg-500'
        >
          Learn more <HiArrowRight />
        </a>
      </div>
    </section>
  );
};

export default Paripoorna;
