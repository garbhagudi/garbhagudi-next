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
const BannerImage = ({ banner }: { banner: bannerProps['banners'][number] }) => {
  // `sizes` is required: without it getImageProps emits x-descriptors at
  // [width, width*2], so a phone would pull the 1920/3840-wide banner. Each
  // <source> is media-scoped to one breakpoint, so 100vw is accurate for both.
  const common = { alt: banner?.title, priority: true, quality: 85, sizes: '100vw' };
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
      <img {...mobile} className='h-full w-full object-cover' />
    </picture>
  );
};

const BannerComponent = (bannerData: bannerProps) => {
  const defaultControlsConfig = {
    pagingDotsStyle: {
      display: 'none',
    },
  };

  return (
    <div>
      <Carousel
        autoplay
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
          bannerData.banners.map((banner) => (
            <Link href={banner?.url || '#'} target='_blank' rel='noreferrer' key={banner.id}>
              <BannerImage banner={banner} />
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
