import React , { useState } from 'react';
import Suraksha from 'assets/Suraksha.webp';
import aswinimohan from 'assets/aswinimohan.png';
import Image from 'next/image';
import Sridevi from 'assets/sridevi.png';

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
        <div className='py-8 font-lexend text-4xl font-bold'>
          About the Hosts
        </div>
        <div className='grid grid-cols-1 gap-5 lg:grid-cols-3 xl:max-w-3xl'>
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className='flex flex-col items-center'
            >
              <Image
                width={200}
                height={200}
                src={doctor.image}
                alt={doctor.name}
                className='rounded-lg object-cover w-72 h-72'
              />
              <div className='font-lexend text-lg'>{doctor.name}</div>
              <div className='font-content text-base text-gray-500'>
                    {expanded[doctor.id]
                      ? doctor.content
                      : truncate(doctor.content, 120)}
                    {doctor.content.length > 120 && (
                      <button
                        onClick={() => toggleReadMore(doctor.id)}
                        className='ml-2 text-gg-500'
                      >
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
    name: 'Ms. Suraksha B (Yoga Therapist)',
    image:Suraksha,
    content:
      'Ms. Suraksha B, a dedicated Yoga Trainer with a profound passion for promoting holistic well-being and inner harmony. Suraksha holds a Master of Science degree in Yogic Science from Mangalore University. Suraksha has been a coach and manager in prestigious events like the All India Inter-University Yoga Competition representing the Department of Human Consciousness & Yogic Science.',
  },
  {
    id: 2,
    name: 'Ashwini Mohan L (MS-Ayurveda)',
    image:aswinimohan,
    content:
      'Dr Aswini Mohan L has more than 12 years of clinical experience in Ayurveda, Gynaecology, and Obstetrics and has an MS in Prasuti Tantra Streeroga from Govt. Ayurveda College, Thiruvananthapuram. Her special focus is on Infertility. She is also an expert in Ayurvedic Pre-conception Care, Ante Natal Care, and Post Natal Care and has treated many patients with Endometriosis, PCOS, Uterine fibroids, etc.',
  },
  {
    id: 3,
    name: 'Dr. Sridevi (Nutritionist)',
    image:Sridevi,
    content:
      'Dedicated and innovative Ayurvedic professional with a Doctor of Medicine in Ayurveda (MD(Ayu)) and a Bachelor of Ayurveda Medicine and Surgery (BAMS). Has extensive experience in Ayurvedic consulting, research, and teaching. Skilled in nutrition expertise, product development, database management, and regulatory compliance. Passionate about integrating traditional knowledge with modern science for holistic wellness solutions.',
  },
];
