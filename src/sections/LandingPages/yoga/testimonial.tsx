import React from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { FcGoogle } from 'react-icons/fc';
import { MdOutlineSwipeLeft, MdOutlineRateReview } from 'react-icons/md';
import { BsFillChatSquareQuoteFill } from 'react-icons/bs';
import Carousel from 'nuka-carousel';

const Testimonial = () => {
  const defaultControlsConfig = {
    pagingDotsStyle: {
      display: 'none',
    },
  };
  return (
    <div className='mx-auto max-w-7xl scroll-m-16' id='testimonial'>
      <section className='pb-16 xl:max-w-3xl'>
        <FcGoogle className='mx-auto h-14 w-14 text-center' />
        <div className='text-center font-sans font-semibold dark:text-gray-200'>
          <MdOutlineRateReview className='mr-2 inline-block' />
          Reviews
        </div>

        <div className='mx-auto flex items-center justify-start'>
          <div className='relative mx-auto flex flex-row items-center justify-center'>
            <Carousel
              autoplay
              defaultControlsConfig={defaultControlsConfig}
              autoplayInterval={5000}
              className='mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-3xl'
              wrapAround
              dragging
              enableKeyboardControls
              pauseOnHover
              renderCenterLeftControls={({ previousSlide }) => (
                <button
                  onClick={previousSlide}
                  className='ml-3 hidden h-11 w-11 items-center justify-center rounded-full bg-brandPurpleDark bg-opacity-70 text-4xl text-white transition duration-300 ease-in-out hover:bg-opacity-100 dark:bg-brandPurple lg:flex'
                >
                  <HiChevronLeft className='mr-1' />
                </button>
              )}
              renderCenterRightControls={({ nextSlide }) => (
                <button
                  onClick={nextSlide}
                  className='mr-3 hidden h-11 w-11 items-center justify-center rounded-full bg-brandPurpleDark bg-opacity-70 text-4xl text-white transition duration-300 ease-in-out hover:bg-opacity-100 dark:bg-brandPurple lg:flex'
                >
                  <HiChevronRight className='ml-1' />
                </button>
              )}
            >
              {yogaReviews.map((item) => (
                <div className='flex flex-col justify-center' key={item.id}>
                  <blockquote className='mt-8'>
                    <div className='mx-auto h-80 max-w-sm px-1.5 text-center font-content text-base font-medium tracking-tight text-gray-800 dark:text-gray-200 sm:max-w-md md:max-w-3xl md:text-lg lg:h-52 lg:leading-[1.8rem]'>
                      <div className='flex items-center justify-center'>
                        &quot;{item.review}&quot;
                      </div>
                    </div>
                  </blockquote>
                  <div className='mt-8'>
                    <div className='h-[2px] w-full rounded-lg bg-gradient-to-r from-gg-500 via-brandPurple to-purple-800 dark:from-gg-300 dark:via-purple-400 dark:to-gg-300'></div>
                    <div className='flex items-center justify-center space-x-3 pt-4'>
                      <div className='md:flex-shrink-0'>
                        <BsFillChatSquareQuoteFill className='text-xl text-gray-800 dark:text-white' />
                      </div>
                      <div className='flex items-center text-center'>
                        <div className='font-lexend text-xl font-semibold text-gray-800 dark:text-white'>
                          {item.name}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        <div className='mx-auto max-w-6xl py-1 pt-4 text-center font-content text-sm underline lg:text-right'>
          Swipe for more reviews <MdOutlineSwipeLeft className='inline-block' />
        </div>
      </section>
    </div>
  );
};

export default Testimonial;

const yogaReviews = [
  {
    id: 2,
    name: 'Rahul Patel',
    review:
      'Zenith Yoga Studio is a sanctuary of peace and wellness. The instructors are deeply knowledgeable and inspiring, guiding each session with grace and expertise. The studio itself is serene, with calming decor and impeccable cleanliness. The staff is friendly and supportive, making every visit a rejuvenating experience. Highly recommend Zenith Yoga Studio for anyone seeking balance and mindfulness in their yoga practice.',
  },
  {
    id: 3,
    name: 'Priya Sharma',
    review:
      'Radiant Yoga Retreat is a haven for relaxation and renewal. The instructors are not only skilled but also compassionate, ensuring every session is both challenging and nurturing. The atmosphere is peaceful, with stunning views and a welcoming ambiance. The staff goes above and beyond to create a supportive community. Highly recommend Radiant Yoga Retreat for anyone looking to deepen their yoga practice.',
  },
  {
    id: 4,
    name: 'Amit Singh',
    review:
      'Tranquil Waves Yoga Center is simply exceptional. The teachers are dedicated and knowledgeable, offering personalized guidance that caters to individual needs. The facilities are top-notch, with spacious studios and calming decor that promotes focus and relaxation. The entire team is friendly and attentive, ensuring a warm and welcoming environment. Highly recommend Tranquil Waves Yoga Center for anyone seeking holistic wellness through yoga.',
  },
  {
    id: 5,
    name: 'Neha Patel',
    review:
      'Harmony Yoga Studio is a gem in the heart of the city. The instructors are passionate and skilled, fostering a supportive environment for practitioners of all levels. The studio itself exudes serenity, with soothing music and aromatic scents that enhance the yoga experience. The staff is attentive and caring, making every visit a rejuvenating journey. Highly recommend Harmony Yoga Studio for its commitment to holistic well-being.',
  },
  {
    id: 6,
    name: 'Rajesh Kumar',
    review:
      'Eternal Bliss Yoga Center exceeded my expectations. The instructors are not only experts in their field but also compassionate mentors who guide with patience and encouragement. The facilities are pristine, with state-of-the-art equipment and peaceful surroundings that elevate the practice. The staff is friendly and supportive, creating a nurturing atmosphere for personal growth. Highly recommend Eternal Bliss Yoga Center for its dedication to yoga excellence.',
  },
  {
    id: 7,
    name: 'Ananya Desai',
    review:
      'Soulful Yoga Sanctuary is where I found my inner peace. The instructors are knowledgeable and inspiring, leading classes that cater to both body and soul. The ambiance is serene, with soft lighting and calming vibes that enhance relaxation. The staff is incredibly kind and helpful, ensuring a positive experience every time. Highly recommend Soulful Yoga Sanctuary for its transformative approach to yoga.',
  },
];
