import Image from 'next/image';
import { HiChevronLeft, HiChevronRight, HiCheckCircle } from 'react-icons/hi';
import Carousel from 'nuka-carousel';
import useInViewAutoplay from 'lib/useInViewAutoplay';

/* NOTE: placeholder images — replace these URLs with the real Cloudinary uploads.
 * Just edit this array (and each `alt`); nothing else needs to change. */
const images = [
  {
    src: 'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cmsczhh3rbanm07pf0dymfp1r',
    alt: 'GarbhaGudi IVF centre in Bangalore',
  },
  {
    src: 'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cmsczhh4lbanq07pfniw8a52n',
    alt: 'Advanced IVF and embryology lab',
  },
  {
    src: 'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cmsczhh55banu07pfpe3ki2o3',
    alt: 'World-class fertility care',
  },
  {
    src: 'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cmsczhh5ubany07pfxoezpsbc',
    alt: 'Experienced fertility specialists',
  },
  {
    src: 'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cmsczhh6ibao207pf8lh9m9l8',
    alt: 'Experienced fertility specialists',
  },
];

const treatments = [
  'IVF (In-Vitro Fertilisation)',
  'IUI (Intrauterine Insemination)',
  'ICSI & advanced fertilisation',
  'Egg freezing & fertility preservation',
  'Male infertility treatment',
  'Female infertility treatment',
  'Fertility evaluation & diagnostics',
  'Laparoscopy',
  'Hysteroscopy',
  'Semen freezing',
  'PESA / TESA',
  'Varicocele treatment',
  'Sequential transfer',
  'Endometrial rejuvenation',
  'MACS (sperm selection)',
];

const Gallery = () => {
  const defaultControlsConfig = {
    pagingDotsStyle: {
      display: 'none',
    },
  };

  /* Cycle images only while the gallery is on screen. */
  const { ref: galleryRef, autoplay } = useInViewAutoplay();

  return (
    <section
      aria-label='A glimpse of GarbhaGudi'
      className='bg-purple-100/70 dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-700 dark:to-gray-800'
    >
      <div className='mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16'>
        <div className='grid items-stretch gap-8 lg:grid-cols-2'>
          {/* Left half — image gallery */}
          <div className='flex flex-col'>
            <div
              ref={galleryRef}
              className='overflow-hidden rounded-2xl shadow-2xl drop-shadow-2xl'
            >
              <Carousel
                autoplay={autoplay}
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
                  <div key={image.src} className='relative h-64 w-full sm:h-80 lg:h-[460px]'>
                    <Image
                      quality={85}
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes='(max-width: 1024px) 100vw, 50vw'
                      className='object-cover'
                      loading='lazy'
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>

          {/* Right half — treatments offered */}
          <div className='flex h-full flex-col rounded-2xl bg-brandPurpleDark px-6 py-8 text-white sm:px-10'>
            <h3 className='font-heading text-2xl font-bold'>Fertility treatments under one roof</h3>
            <div className='mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2'>
              {treatments.map((t) => (
                <div key={t} className='flex items-center gap-2 font-content text-sm'>
                  <HiCheckCircle className='shrink-0 text-lg text-brandYellow' aria-hidden='true' />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
