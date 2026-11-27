import { getImageProps } from 'next/image';
import { useEffect, useRef } from 'react';
import WebinarForm from './WebinarForm';

const BANNER_ALT = 'Does Age Matter When Planning a Pregnancy? - Online Awareness Session';

const LANDSCAPE = {
  src: 'https://ap-south-1.graphassets.com/cmekvksn30ksu07o5fl5q801f/cmwncu0z855kv06pj9tnyl7yh',
  width: 3556,
  height: 1862,
};

const PORTRAIT = {
  src: 'https://ap-south-1.graphassets.com/cmekvksn30ksu07o5fl5q801f/cmwncu0v555ko06pjkvw0ruig',
  width: 1429,
  height: 2000,
};

const PORTRAIT_DESKTOP_MEDIA = '(min-width: 1024px) and (max-aspect-ratio: 3/2)';

const WebinarBannerImage = () => {
  const common = { alt: BANNER_ALT, priority: true, quality: 85, fetchPriority: 'high' as const };
  const { props: landscape } = getImageProps({
    ...common,
    ...LANDSCAPE,
    sizes:
      '(min-width: 1280px) calc(100vw - 440px), (min-width: 1024px) calc(100vw - 400px), 100vw',
  });
  const { props: portraitDesktop } = getImageProps({ ...common, ...PORTRAIT, sizes: '50vw' });
  const { props: portrait } = getImageProps({ ...common, ...PORTRAIT, sizes: '100vw' });

  return (
    <picture>
      <source
        media={PORTRAIT_DESKTOP_MEDIA}
        srcSet={portraitDesktop.srcSet}
        sizes={portraitDesktop.sizes}
        width={portraitDesktop.width}
        height={portraitDesktop.height}
      />
      <source
        media='(min-width: 768px)'
        srcSet={landscape.srcSet}
        sizes={landscape.sizes}
        width={landscape.width}
        height={landscape.height}
      />
      <img
        {...portrait}
        className='h-auto w-full lg:absolute lg:inset-0 lg:h-full lg:object-contain'
      />
    </picture>
  );
};

const WebinarBanner = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const sync = () =>
      el.style.setProperty(
        '--header-h',
        `${Math.round(el.getBoundingClientRect().top + window.scrollY)}px`
      );
    sync();
    const observer = new ResizeObserver(sync);
    observer.observe(document.body);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className='grid min-h-[calc(100svh-var(--header-h,84px))] grid-cols-1 grid-rows-[auto_1fr] lg:min-h-[calc(100svh-var(--header-h,100px))] lg:grid-cols-[minmax(0,1fr)_400px] lg:grid-rows-[1fr] xl:min-h-[calc(100svh-var(--header-h,70px))] xl:grid-cols-[minmax(0,1fr)_440px]'
    >
      <div className='relative bg-white'>
        <WebinarBannerImage />
      </div>
      <div
        id='leadForm'
        className='flex scroll-mt-24 flex-col items-center justify-center bg-[#005e7e] px-2 py-8 lg:py-6'
      >
        <WebinarForm variant='banner' title='Register for the Webinar' />
      </div>
    </div>
  );
};

export default WebinarBanner;
