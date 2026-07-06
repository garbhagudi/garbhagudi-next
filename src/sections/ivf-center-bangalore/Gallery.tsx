import Image from 'next/image';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import Carousel from 'nuka-carousel';

/* NOTE: placeholder images — replace these URLs with the real Cloudinary uploads.
 * Just edit this array (and each `alt`); nothing else needs to change. */
const images = [
  {
    src: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1783312881/ivf-center-bangalore/IMG_0233_nih2sj.jpg',
    alt: 'GarbhaGudi IVF centre in Bangalore',
  },
  {
    src: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1783312873/ivf-center-bangalore/IMG_0362_kny9kj.jpg',
    alt: 'Advanced IVF and embryology lab',
  },
  {
    src: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1783312872/ivf-center-bangalore/IMG_0191_nla49a.jpg',
    alt: 'World-class fertility care',
  },
  {
    src: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1783312872/ivf-center-bangalore/IMG_0427_xsew8h.jpg',
    alt: 'Experienced fertility specialists',
  },
  {
    src: 'https://res.cloudinary.com/garbhagudiivf/image/upload/v1783312872/ivf-center-bangalore/IMG_0373_qg9o1s.jpg',
    alt: 'Experienced fertility specialists',
  },
];

const Gallery = () => {
  const defaultControlsConfig = {
    pagingDotsStyle: {
      display: 'none',
    },
  };

  return (
    <section
      aria-label='A glimpse of GarbhaGudi'
      className='bg-purple-100/70 dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-700 dark:to-gray-800'
    >
      <div className='pt-16 lg:pt-12'>
        <h2 className='px-4 text-center font-heading text-3xl font-extrabold tracking-tight text-gray-800 dark:text-gray-200 sm:text-4xl'>
          A glimpse of GarbhaGudi
        </h2>

        <div className='mt-10 overflow-hidden shadow-2xl drop-shadow-2xl'>
          <Carousel
            autoplay
            autoplayInterval={5000}
            className='border-0'
            defaultControlsConfig={defaultControlsConfig}
            wrapAround
            dragging
            enableKeyboardControls
            pauseOnHover
            renderCenterLeftControls={({ previousSlide }) => (
              <button
                onClick={previousSlide}
                aria-label='Previous image'
                className='ml-3 hidden h-11 w-11 items-center justify-center rounded-full bg-brandPurpleDark bg-opacity-70 text-4xl text-white transition duration-300 ease-in-out hover:bg-opacity-100 md:flex'
              >
                <HiChevronLeft className='mr-1' />
              </button>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <button
                onClick={nextSlide}
                aria-label='Next image'
                className='mr-3 hidden h-11 w-11 items-center justify-center rounded-full bg-brandPurpleDark bg-opacity-70 text-4xl text-white transition duration-300 ease-in-out hover:bg-opacity-100 md:flex'
              >
                <HiChevronRight className='ml-1' />
              </button>
            )}
          >
            {images.map((image) => (
              <div key={image.src} className='flex w-full justify-center'>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1400}
                  height={800}
                  sizes='(max-width: 1024px) 100vw, 1024px'
                  className='max-h-[70vh] w-auto object-contain'
                  loading='lazy'
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
