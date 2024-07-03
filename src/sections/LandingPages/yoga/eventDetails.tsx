import Image from 'next/image';
import React, { useState } from 'react';
import { FaCalendar, FaClock, FaGlobeAsia } from 'react-icons/fa';
import { GrYoga } from 'react-icons/gr';

const EventDetails = () => {
  const truncate = (str, length) => {
    if (str.length <= length) return str;
    return str.substring(0, length) + '...';
  };

  const [expanded, setExpanded] = useState({});

  const toggleReadMore = (id) => {
    setExpanded((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div>
      <div className='mx-auto max-w-7xl px-4 py-16'>
        <div className='grid grid-cols-2 gap-x-3 font-lexend lg:grid-cols-4 xl:max-w-3xl'>
          {eventHeader.map((item) => (
            <div
              key={item.id}
              className='flex flex-col items-center justify-start space-y-1.5 rounded-lg border py-3'
            >
              <div className='text-5xl text-gg-500'>{item.icon}</div>
              <div className='text-lg font-bold'>{item.title}</div>
              <div className='text-sm text-gray-500'>{item.description}</div>
              <div className='text-xs'>{item.misc}</div>
            </div>
          ))}
        </div>
        <div className='py-8 xl:max-w-3xl'>
          <div className='my-8 font-lexend text-3xl font-bold lg:text-4xl'>
            Whats Included?
          </div>
          <div className='grid grid-cols-1 gap-3'>
            {whatToExpect.map((item) => (
              <div
                key={item.id}
                className='flex flex-col items-center justify-center space-x-2 py-4 md:flex-row lg:space-x-5'
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={48}
                  height={48}
                  className='mx-auto aspect-auto w-48 object-contain'
                />
                <div className='-mt-16 flex flex-col rounded-lg p-3 pt-20 shadow-lg md:-mt-0 md:pt-0 lg:py-2'>
                  <div className='py-2 font-lexend text-2xl font-bold'>
                    {item.title}
                  </div>
                  <div className='font-content text-base text-gray-500'>
                    {expanded[item.id]
                      ? item.description
                      : truncate(item.description, 220)}
                    {item.description.length > 220 && (
                      <button
                        onClick={() => toggleReadMore(item.id)}
                        className='ml-2 text-gg-500'
                      >
                        {expanded[item.id] ? 'Read Less' : 'Read More'}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;

const eventHeader = [
  {
    id: 1,
    title: 'Start Date',
    description: '2024-07-31',
    icon: <FaCalendar />,
    misc: '',
  },
  {
    id: 2,
    title: 'Timing',
    description: '6 - 7:30 AM (IST)',
    icon: <FaClock />,
    misc: '(Rec. available for 1 day)',
  },
  {
    id: 3,
    title: 'Language',
    icon: <FaGlobeAsia />,
    description: 'English, Hindi',
  },
  {
    id: 4,
    title: 'Level',
    icon: <GrYoga />,
    description: 'Beginner',
  },
];

const whatToExpect = [
  {
    id: 1,
    title: '90 minute recorded session every morning',
    image:
      'https://yoga-satvicmovement-org.b-cdn.net/resources/img/include_1-1.webp',
    description:
      'Every session will include 20 minutes of Yoga philosophy explained in an applicable way to help you take control of your thoughts & emotions. This will be followed by 60 minutes of step by step asana practice. The practice will include asanas both from Hatha and Ashtanga style. You will also follow guided meditations & pranayama. We will end the session with 10 minutes of practical healthy habits that will help you change your food and lifestyle to reach your peak health. You will learn the benefits of cleansing practices like sunbathing and fasting along with food habits like juicing and having a wholesome diet.',
  },
  {
    id: 2,
    title: 'Deep Yogic Knowledge',
    image:
      'https://yoga-satvicmovement-org.b-cdn.net/resources/img/include_2-1.webp',
    description:
      'Most people feel lost, alone & stressed in life. The Yogic philosophy deeply understands the human psychology and talks about simple yet powerful tools to navigate the ups and downs of life. We will dive into the Ashtanga philosophy and learn about the 8 limbs of yoga these are beautiful values to live by. This is explained in a simple and fun way through stories, analogies and activities!',
  },
  {
    id: 3,
    title: 'Meal Plans & Diet',
    image:
      'https://yoga-satvicmovement-org.b-cdn.net/resources/img/include_3-1.webp',
    description:
      'Satvic foods are not only conducive to your yoga practice but also have the power to prevent and heal your diseases. Every day we will help you make a healthy food addition to your life. This workshop is designed in a way that you absorb the knowledge without getting overwhelmed & can actually implement it in your life. Don’t worry, Satvic meals are neither boring nor tasteless! This plant based power packed way of eating will bring you tons of energy each day!',
  },
  {
    id: 4,
    title: 'Recordings of All Sessions',
    image:
      'https://yoga-satvicmovement-org.b-cdn.net/resources/img/include_5-1.webp',
    description:
      'If you live outside India or miss a session due to an emergency, no worries! The replay links of each session will be provided for 1 day.',
  },
];
