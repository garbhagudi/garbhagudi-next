import { useEffect, useState } from 'react';
import Head from 'next/head';
import { getImageProps } from 'next/image';
import Link from 'next/link';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import Carousel from 'nuka-carousel';

interface bannerProps {
  banners: [
    {
      id: string;
      title: string;
      url: string;
      image: {
        url: string;
      };
      mobileImage?: {
        url: string;
        width: number;
        height: number;
      } | null;
      imageUrl: string;
    },
  ];
}

// Art-directed banner: desktop creative ≥768px (Tailwind `md`), mobile
// creative below — the browser downloads only the matching source.
const BannerImage = ({
  banner,
  isFirst,
}: {
  banner: bannerProps['banners'][number];
  isFirst: boolean;
}) => {
  // `sizes` is required: without it getImageProps emits x-descriptors at
  // [width, width*2], so a phone would pull the 1920/3840-wide banner. Each
  // <source> is media-scoped to one breakpoint, so 100vw is accurate for both.
  // Only the first slide is the LCP candidate. The carousel mounts every slide,
  // so marking all of them `priority` made slides 2..n compete with slide 1 for
  // bandwidth on the critical path. The rest load lazily (they are still
  // fetched right after, being adjacent to the viewport).
  const common = { alt: banner?.title, priority: isFirst, quality: 85, sizes: '100vw' };
  const { props: desktop } = getImageProps({
    ...common,
    src: banner?.image?.url,
    width: 1920,
    height: 1080,
  });
  const { props: mobile } = getImageProps({
    ...common,
    src: banner?.mobileImage?.url || banner?.image?.url,
    width: banner?.mobileImage?.width || 1920,
    height: banner?.mobileImage?.height || 1080,
  });

  // getImageProps (unlike <Image>) adds no fetchpriority or preload, so add them for the
  // first banner (the LCP image). Head dedupes the preload links across the cloned slides.
  const priorityAttrs = isFirst ? ({ fetchpriority: 'high' } as Record<string, string>) : {};

  return (
    <picture>
      <source
        media='(min-width: 768px)'
        srcSet={desktop.srcSet}
        sizes={desktop.sizes}
        width={desktop.width}
        height={desktop.height}
      />
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img {...mobile} {...priorityAttrs} className='h-full w-full object-cover' />
      {isFirst && (
        <Head>
          <link
            key='banner-preload-mobile'
            rel='preload'
            as='image'
            media='(max-width: 767px)'
            imageSrcSet={mobile.srcSet}
            imageSizes={mobile.sizes}
            {...priorityAttrs}
          />
          <link
            key='banner-preload-desktop'
            rel='preload'
            as='image'
            media='(min-width: 768px)'
            imageSrcSet={desktop.srcSet}
            imageSizes={desktop.sizes}
            {...priorityAttrs}
          />
        </Head>
      )}
    </picture>
  );
};

const BannerComponent = (bannerData: bannerProps) => {
  // Autoplay starts after load so a slide change does not compete with the first paint.
  const [autoplay, setAutoplay] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setAutoplay(true), 10000);
    return () => window.clearTimeout(t);
  }, []);
  const defaultControlsConfig = {
    pagingDotsStyle: {
      display: 'none',
    },
  };

  return (
    <div>
      <Carousel
        autoplay={autoplay}
        autoplayInterval={5000}
        className='border-0 shadow-2xl drop-shadow-2xl'
        defaultControlsConfig={defaultControlsConfig}
        wrapAround
        dragging
        enableKeyboardControls
        pauseOnHover
        renderCenterLeftControls={({ previousSlide }) => (
          <button
            onClick={previousSlide}
            className='ml-3 hidden h-11 w-11 items-center justify-center rounded-full bg-brandPurpleDark bg-opacity-70 text-4xl text-white transition duration-300 ease-in-out hover:bg-opacity-100 md:flex'
          >
            <HiChevronLeft className='mr-1' />
          </button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button
            onClick={nextSlide}
            className='mr-3 hidden h-11 w-11 items-center justify-center rounded-full bg-brandPurpleDark bg-opacity-70 text-4xl text-white transition duration-300 ease-in-out hover:bg-opacity-100 md:flex'
          >
            <HiChevronRight className='ml-1' />
          </button>
        )}
      >
        {bannerData ? (
          bannerData.banners.map((banner, index) => (
            <Link href={banner?.url || '#'} target='_blank' rel='noreferrer' key={banner.id}>
              <BannerImage banner={banner} isFirst={index === 0} />
            </Link>
          ))
        ) : (
          <div></div>
        )}
      </Carousel>
    </div>
  );
};

export default BannerComponent;
