import Carousel from 'nuka-carousel';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import Image from 'next/image';
import DoctorLayout from 'components/doctorsLayout';
import { useState } from 'react';

const Doctors = ({ doctors }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const defaultControlsConfig = {
    pagingDotsStyle: {
      display: 'none',
    },
  };
  return (
    <>
      <div className='mx-auto bg-transparent py-10 lg:py-16'>
        <h1 className='pb-10 text-center font-heading text-2xl font-bold lg:pb-16 lg:text-3xl'>
          Meet Our Fertility Specialists
        </h1>
        <div className='relative mx-auto flex max-w-3xl items-center justify-center'>
          <Carousel
            autoplay
            defaultControlsConfig={defaultControlsConfig}
            autoplayInterval={5000}
            className='max-w-xs md:max-w-md lg:max-w-lg'
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
            {doctors.map((items) => (
              <DoctorLayout
                index={items.id}
                key={items.id}
                imageComponent={
                  <ImageComponent
                    name={items.name}
                    image={items.image.url}
                    designation={items.designation}
                    imageAlt={items.imageAlt}
                  />
                }
                activeIndex={activeIndex}
                docpic={items.image.url}
                name={items.name}
                bio={items.bio.raw.children}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Doctors;

const ImageComponent = ({ name, image, designation, imageAlt }) => {
  return (
    <div className='flex flex-col items-center justify-center md:h-[21rem]'>
      <div className='relative h-44 w-44'>
        <div className='bg-[length: 400%] absolute h-full w-full animate-rotate rounded-full bg-gradient-to-br from-brandPink3/80 to-purple-500/40'></div>
        <Image
          className='rounded-full bg-transparent shadow-2xl drop-shadow-2xl'
          src={image}
          alt={imageAlt || name}
          width={500}
          height={500}
          loading='lazy'
        />
      </div>
      <div className='text-center'>
        <div className='mt-4 font-heading text-xl font-bold'>{name}</div>
        <div className='text- mb-4 mt-2 font-content'>{designation}</div>
      </div>
    </div>
  );
};
