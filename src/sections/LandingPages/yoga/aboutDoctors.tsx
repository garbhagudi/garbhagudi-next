import { useState } from 'react';
import Image from 'next/image';

const Doctor = () => {
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
      <div className='mx-auto max-w-7xl px-4 pb-16'>
        <div className='py-8 font-lexend text-4xl font-bold'>About the Hosts</div>
        <div className='grid grid-cols-1 gap-5 lg:grid-cols-3 xl:max-w-3xl'>
          {doctors.map((doctor) => (
            <div key={doctor.id} className='flex flex-col items-center'>
              <Image
                width={200}
                height={200}
                src={doctor.image}
                alt={doctor.name}
                className='h-72 w-72 rounded-lg object-cover'
                loading='lazy'
              />
              <div className='font-lexend text-lg'>{doctor.name}</div>
              <div className='font-content text-base text-gray-500'>
                {expanded[doctor.id] ? doctor.content : truncate(doctor.content, 120)}
                {doctor.content.length > 120 && (
                  <button onClick={() => toggleReadMore(doctor.id)} className='ml-2 text-gg-500'>
                    {expanded[doctor.id] ? 'Read Less' : 'Read More'}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctor;

const doctors = [
  {
    id: 1,
    name: 'Ms. Suraksha B (Senior Yoga Therapist), M.Sc Yogic Science, PGCND',
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1742984824/Yoga/Suraksha_mrkjqi.webp',
    content:
      'Ms. Suraksha B, a dedicated Senior Yoga Therapist with a profound passion for promoting holistic well-being and inner harmony. Suraksha holds a Master of Science degree in Yogic Science from Mangalore University and Post Graduate certificate in Clinical Diet and Nutrition, KSOU, Mysuru. She has been a coach and manager in prestigious events like the All-India Inter-University Yoga Competition, representing the Department of Human Consciousness & Yogic Science.',
  },
  {
    id: 2,
    name: 'Dr. Saathvi D (Yoga Therapist), BNYS',
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1742984781/Yoga/aswinimohan_oygpwr.webp',
    content:
      'Dr. Saathvi D, a skilled Yoga Therapist with a strong academic foundation, holding a Bachelor’s degree in Naturopathic and Yoga Sciences, is dedicated to nurturing wellness through the transformative power of yoga and naturopathy. She is committed to helping individuals achieve optimal health and well-being. Her compassionate approach and tailored therapeutic methods inspire confidence and empowerment, making her an integral part of the wellness community.',
  },
  {
    id: 3,
    name: 'Dr. Jala R (Yoga Therapist), BNYS',
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1742984782/Yoga/sridevi_reg8o7.webp',
    content:
      'Dr. Jala R is a dedicated yoga therapist with a strong academic foundation, holding a Bachelor’s degree in Naturopathic and Yogic Sciences and pursuing an MD in Acupuncture. With a deep passion for holistic healing, she blends the ancient wisdom of yoga with the principles of naturopathy to support individuals on their journey to better health. Known for her empathetic nature and personalized therapeutic approach, she empowers people to take charge of their well-being. Her work continues to make a meaningful impact in the field of wellness and preventive health.',
  },
];
