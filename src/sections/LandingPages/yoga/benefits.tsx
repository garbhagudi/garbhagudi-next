import React from 'react';

const Benefits = () => {
  return (
    <div id='benefits'>
      <div className='max-w-7xl mx-auto px-4 pb-16 scroll-m-16'>
        <div className='text-3xl sm:text-4xl font-bold font-lexend py-8'>
          Benefits You Will Gain
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:max-w-3xl'>
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className='flex items-center justify-center flex-col '
            >
              <img
                src={benefit.image}
                alt={benefit.title}
                className='max-w-xl object-cover rounded-lg'
              />
              <div className='text-lg font-lexend'>{benefit.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;

const benefits = [
  {
    id: 1,
    title: 'Experience higher energy levels',
    image:
      'https://yoga-satvicmovement-org.b-cdn.net/resources/img/ExtremelyHighEnergy_n.webp',
  },
  {
    id: 2,
    title: 'Understand your thoughts & emotions',
    image:
      'https://yoga-satvicmovement-org.b-cdn.net/resources/img/peacefulandcalm_n.webp',
  },
  {
    id: 3,
    title: 'Feel more stable',
    image:
      'https://yoga-satvicmovement-org.b-cdn.net/resources/img/OptimalWeight_n.webp',
  },
  {
    id: 4,
    title: 'Have better relationships',
    image:
      'https://yoga-satvicmovement-org.b-cdn.net/resources/img/BetterRelationship_n.webp',
  },
];
