import React from 'react';
import Carousel from 'nuka-carousel';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import Image from 'next/image';
import DoctorLayout from 'components/doctorsLayout';

const Doctors = ({ doctors }) => {
  const [activeIndex, setActiveIndex] = React.useState(1);
  const defaultControlsConfig = {
    pagingDotsStyle: {
      display: 'none',
    },
  };
  return (
    <div>
      <div className='bg-transparent mx-auto py-10 lg:py-16'>
        <h1 className='text-2xl lg:text-3xl font-heading font-bold text-center pb-10 lg:pb-16'>
          Meet Our Fertility Specialists
        </h1>
        <div className='relative max-w-3xl mx-auto flex items-center justify-center'>
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
                className='hidden w-11 h-11 text-4xl bg-brandPurpleDark text-white rounded-full md:flex items-center justify-center ml-3 bg-opacity-70 hover:bg-opacity-100 transition duration-300 ease-in-out'
              >
                <HiChevronLeft className='mr-1' />
              </button>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <button
                onClick={nextSlide}
                className='hidden w-11 h-11 text-4xl bg-brandPurpleDark text-white rounded-full md:flex items-center justify-center mr-3 bg-opacity-70 hover:bg-opacity-100 transition duration-300 ease-in-out'
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
              ></DoctorLayout>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Doctors;

const ImageComponent = ({ name, image, designation, imageAlt }) => {
  return (
    <div className='flex items-center justify-center flex-col md:h-[21rem]'>
      <div className='relative w-44 h-44'>
        <div className='h-full w-full absolute rounded-full bg-gradient-to-br from-brandPink3/80 to-purple-500/40 animate-rotate bg-[length: 400%]'></div>
        <Image
          className='rounded-full shadow-2xl drop-shadow-2xl bg-transparent'
          src={image}
          alt={imageAlt || name}
          width={500}
          height={500}
          loading='lazy'
        />
      </div>
      <div className='text-center'>
        <div className='text-xl font-heading font-bold mt-4'>{name}</div>
        <div className='text- font-content mt-2 mb-4'>{designation}</div>
      </div>
    </div>
  );
};
