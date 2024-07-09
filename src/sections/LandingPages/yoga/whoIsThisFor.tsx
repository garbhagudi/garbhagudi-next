import React from 'react';
import Image from 'next/image';

const WhoIsThisFor = () => {
  return (
    <div className='px-4 py-16'>
      <div className='mx-auto max-w-7xl'>
        <div className='pb-8 font-lexend text-4xl font-bold'>
          Who is this for?
        </div>
        <div className='grid grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:max-w-3xl'>
          {yogaWorkshopDetails.map((item) => (
            <div key={item.category} className='flex flex-col gap-4'>
              <div className=''>
                <Image
                  src={item.image}
                  alt={item.category}
                  height={40}
                  width={40}
                  className='w-16'
                />
              </div>

              <div className='font-lexend text-xl'>{item.category}</div>
              <div className='font-content'>{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoIsThisFor;

const yogaWorkshopDetails = [
  {
    category: 'For Working Professionals',
    image:
      'https://yoga-satvicmovement-org.b-cdn.net/resources/img/healthy.png',
    description:
      'You live a very busy life & have no time to exercise? Well, this workshop is for you! This will help you start your morning right & elevate your life.',
  },
  {
    category: 'For Homemakers',
    image: 'https://yoga-satvicmovement-org.b-cdn.net/resources/img/woman.png',
    description:
      "Always taking care of others but forget to do something meaningful for your own health? It's time to do something wonderful for yourself so you can support your family even better.",
  },
  {
    category: 'For Senior Citizens',
    image:
      'https://yoga-satvicmovement-org.b-cdn.net/resources/img/healthy-life.png',
    description:
      "If you're looking to get guidance on how to practise yoga step-by-step to get rid of any aches & pains, join us!",
  },
  {
    category: 'For Students Wanting Better Focus',
    image:
      'https://yoga-satvicmovement-org.b-cdn.net/resources/img/graduate-cap.png',
    description:
      "If you're focusing on self growth and want unwavering focus & concentration to accomplish your goals, this workshop is for you!",
  },
  {
    category: 'For Spiritual Seekers',
    image:
      'https://yoga-satvicmovement-org.b-cdn.net/resources/img/meditation-spirits.png',
    description:
      'You are spiritually inclined but do not know where to start? Well, this workshop will help build a solid spiritual foundation.',
  },
  {
    category: 'If You Want To Reverse A Disease',
    image:
      'https://yoga-satvicmovement-org.b-cdn.net/resources/img/ReversDisease.png',
    description:
      "If you're struggling with any lifestyle disease - such as diabetes, thyroid, PCOD, blood pressure, these 21 days will teach you how to reverse your disease naturally by changing your food and lifestyle.",
  },
];
