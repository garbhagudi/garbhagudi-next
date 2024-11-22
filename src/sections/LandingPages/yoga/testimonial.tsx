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
      'I just wanted to say thank you for helping me to make that positive change to my life. Just wanted to thank you again for the yoga class. It was really nice to see how you genuinely enjoy teaching and the pleasure you get from sharing your knowledge with others - your passion for yoga is very infectious.',
  },
  {
    id: 3,
    name: 'Priya Sharma',
    review:
      'I want to share  this  yoga session is very useful to me and positive thinking  it was really nice for my pleasant mindset. I really enjoy this session.',
  },
  {
    id: 4,
    name: 'Amit Singh',
    review:
      'I really appreciate your enthusiasm for teaching. Your class always feels very thoughtful and i like the way that you weave yoga into each class. I just want to say thank you for the yoga class.',
  },
  {
    id: 5,
    name: 'Neha Patel',
    review:
      'Hi mam when ever I am tension n I have lots of confusion u solve like a mother, where ever need are with me just like mother protecting her child from all negatives and difficulties I have no words to say just like thank you kindly be with me give me more positive thoughts and support n please talk 2 minutes after session it gives us strength and hope more positivity will build k 🙏',
  },
  {
    id: 6,
    name: 'Rajesh Kumar',
    review:
      "I'm relatively new to yoga and I can't tell you how happy I've been to learn from you... thanks a lot maam",
  },
];
