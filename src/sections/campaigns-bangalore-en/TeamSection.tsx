import { useEffect, useState } from 'react';
import Image from 'next/image';
import Carousel from 'nuka-carousel';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import ContentModal from 'sections/campaigns-bangalore-en/ContentModal';
import { doctors } from 'sections/campaigns-bangalore-en/doctors';

/* dash-ivf-next renders this with Swiper (1 slide below 1024px, 4 above).
 * nuka-carousel v7 takes a single numeric slidesToShow, so size it to the
 * viewport ourselves. Client-only section (ssr: false), so window is safe. */
const DESKTOP_QUERY = '(min-width: 1024px)';
const slidesFor = (desktop: boolean) => (desktop ? 4 : 1);

export default function TeamSection() {
  const [slidesToShow, setSlidesToShow] = useState(() =>
    slidesFor(window.matchMedia(DESKTOP_QUERY).matches)
  );
  useEffect(() => {
    const query = window.matchMedia(DESKTOP_QUERY);
    const update = () => setSlidesToShow(slidesFor(query.matches));
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  /* One bio dialog for the whole carousel (wrapAround renders each slide 3x). */
  const [selected, setSelected] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className='bg-gradient-to-br from-pink-300 to-purple-100 py-6'>
      <div className='mx-auto max-w-7xl px-3 pb-12'>
        <div className='pb-12 text-center'>
          <h2 className='mb-4 text-2xl font-bold text-[#363636] sm:text-3xl'>
            Meet our Fertility Specialists
          </h2>
          <p className='mx-auto max-w-prose text-sm md:text-base'>
            Our team of fertility specialists have been known for their extensive clinical
            experience and research contributions, as well as for their success in treating the most
            challenging fertility cases.
          </p>
        </div>

        <Carousel
          slidesToShow={slidesToShow}
          slidesToScroll={1}
          cellSpacing={slidesToShow > 1 ? 20 : 0}
          wrapAround
          dragging
          enableKeyboardControls
          defaultControlsConfig={{ pagingDotsStyle: { display: 'none' } }}
          renderCenterLeftControls={({ previousSlide }) => (
            <button
              onClick={previousSlide}
              aria-label='Previous specialist'
              className='z-10 ml-1 rounded-full bg-brandPink p-2 text-white'
            >
              <HiChevronLeft className='text-2xl' />
            </button>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <button
              onClick={nextSlide}
              aria-label='Next specialist'
              className='z-10 mr-1 rounded-full bg-brandPink p-2 text-white'
            >
              <HiChevronRight className='text-2xl' />
            </button>
          )}
        >
          {doctors.map((item) => (
            <div key={item.name} className='mb-2 rounded-xl transition-all duration-500'>
              <div className='relative mx-auto h-52 w-52'>
                <div className='absolute h-full w-full overflow-hidden rounded-full bg-gradient-to-br from-brandPink3/80 to-purple-500/40'></div>
                <Image
                  quality={85}
                  className='relative overflow-hidden rounded-full bg-transparent shadow-2xl drop-shadow-2xl'
                  src={item?.image.url}
                  alt={item?.imageAlt || item?.name}
                  width={220}
                  height={220}
                  loading='lazy'
                />
              </div>
              <div className='mt-4 flex flex-col items-center justify-center space-y-4 text-center'>
                <div className='h-24 space-y-1 text-lg font-medium leading-6'>
                  <h3 className='text-[#363636]'>{item?.name}</h3>
                  <p className='text-xs text-brandPurpleDark'>{item?.qualification}</p>
                  <p className='pb-2 text-sm text-brandPink'>{item?.designation}</p>
                </div>
                <div>
                  <button
                    type='button'
                    onClick={() => {
                      setSelected(item);
                      setModalOpen(true);
                    }}
                    className='rounded-lg border-2 border-brandPurpleDark px-3 py-1.5 text-base font-medium text-brandPink transition-all duration-300 ease-linear hover:border-brandPurpleDark hover:text-brandPurpleDark'
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <ContentModal doctor={selected} open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
