import Image from 'next/image';
import React, { useState } from 'react';
import { FaCalendar, FaClock, FaGlobeAsia } from 'react-icons/fa';
import { GrYoga } from 'react-icons/gr';
import Banner_2 from 'assets/Meal-Plans-Diet.svg' 
import Banner_3 from 'assets/Recordings-of-All-Sessions.svg'
import Banner_4 from 'assets/45-minute-recorded.svg'

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
                  width={40}
                  height={40}
                  className='mx-auto aspect-auto w-40 object-contain'
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
    description: '2024-07-25',
    icon: <FaCalendar />,
    misc: '',
  },
  {
    id: 2,
    title: 'Timing',
    description: '7:30 AM - 8:30 AM (IST)',
    icon: <FaClock />,
    misc: '(Rec. available for 1 day)',
  },
  {
    id: 3,
    title: 'Language',
    icon: <FaGlobeAsia />,
    description: 'English, Kannada',
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
    title: '45 Minute recorded session every morning',
    image:Banner_4,
    description:
      'Every session will include 15 minutes of Yoga explained in an applicable way to help you take control of your thoughts & emotions (Pranayama and relaxation). This will be followed by 30 minutes of step-by-step asana practice. The practice will include asanas which can be done comfortably by all including people who are taking some treatments. You will learn the benefits of these asanas in this session.',
  },
  {
    id: 2,
    title: 'Meal Plans & Diet',
    image:Banner_2,
    description:
      'Preferably, Satvic foods are conducive to yoga practice and also have the power to prevent and heal diseases. We will help you make a healthy food addition to your life. This workshop is designed in a way that you absorb the knowledge without getting overwhelmed & can actually implement it in your life. Our nutritionist will give you tips for having a healthy diet for optimum health.',
  },
  {
    id: 4,
    title: 'Recordings of All Sessions',
    image:Banner_3,
    description:
      'If you live outside India or miss a session due to an emergency, no worries! The replay links of each session will be provided.',
  },
];
