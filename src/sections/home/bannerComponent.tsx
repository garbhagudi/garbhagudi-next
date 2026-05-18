import Image from 'next/image';

import { MOTHERS_DAY_BANNER_ALT, MOTHERS_DAY_BANNER_IMAGES } from 'data/mothersDayBanners';

const BannerComponent = () => {
  return (
    <div
      className='border-0 shadow-2xl drop-shadow-2xl'
      aria-label="Mother's Day promotional banner"
    >
      <Image
        src={MOTHERS_DAY_BANNER_IMAGES.desktop}
        alt={MOTHERS_DAY_BANNER_ALT}
        width={1024}
        height={536}
        priority
        fetchPriority='high'
        sizes='(min-width: 768px) 100vw, 0px'
        className='hidden h-auto w-full object-cover md:block'
      />
      <Image
        src={MOTHERS_DAY_BANNER_IMAGES.mobile}
        alt={MOTHERS_DAY_BANNER_ALT}
        width={731}
        height={1024}
        priority
        fetchPriority='high'
        sizes='(max-width: 767px) 100vw, 0px'
        className='h-auto w-full object-cover md:hidden'
      />
    </div>
  );
};

export default BannerComponent;
