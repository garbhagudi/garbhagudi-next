import React from 'react';
import Suraksha from 'assets/Suraksha.webp';
import aswinimohan from 'assets/aswinimohan.png';
import Image from 'next/image';
import Sridevi from 'assets/sridevi.png';

const Doctor = () => {
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
              className='flex flex-col'
            >
              <Image
                width={200}
                height={200}
                src={doctor.image}
                alt={doctor.name}
                className='rounded-lg object-cover'
              />
              <div className='font-lexend text-lg'>{doctor.name}</div>
              <div className='font-content text-base text-gray-500'>
                {doctor.content}
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
    name: 'Yoga Trainer – Ms Suraksha B',
    image:Suraksha,
    content:
      'Meet Ms. Suraksha B, a dedicated Yoga Trainer with a profound passion for promoting holistic well-being and inner harmony. Suraksha holds a Master of Science degree in Yogic Science from Mangalore University, showcasing her strong academic foundation in the field of yoga. Suraksha has been a coach and manager in prestigious events like the All India Inter-University Yoga Competition and the Southwest Zone Inter-University Yoga Competition, representing the Department of Human Consciousness & Yogic Science and Dharmanidhi Yoga Peetha, Mangalagangothri.',
  },
  {
    id: 2,
    name: 'Ayurveda Doctor Ashwini Mohan L',
    image:aswinimohan,
    content:
      'Dr Aswini Mohan L has more than 12 years of clinical experience . She has an MS in Prasuti Tantra Streeroga from Govt.Ayurveda College, Thiruvananthapuram. She has rich clinical experience in Ayurveda, Gynaecology, and Obstetrics having practised in Kerala and Bengaluru. Her special focus is on Infertility and Gynaecological disorders. She has successfully treated many cases of Infertility. She is also an expert in Ayurvedic Pre-conception Care, Ante Natal Care and Post Natal Care. She has treated many patients with Endometriosis, PCOS, Uterine fibroids etc. and has improved the quality of life of many through conservative management. She has to her credit various publications in leading Indian and International journals.',
  },
  {
    id: 3,
    name: 'Nutritionuist – Dr. Sridevi',
    image:Sridevi,
    content:
      'Dedicated and innovative Ayurvedic professional with a Doctor of Medicine in Ayurveda (MD(Ayu)) and a Bachelor of Ayurveda Medicine and Surgery (BAMS). Currently serving as an Assistant Professor at Transdisciplinary University, Bangalore, with extensive experience in Ayurvedic consulting, research, and teaching. Skilled in nutrition expertise, product development, database management, and regulatory compliance. Passionate about integrating traditional knowledge with modern science for holistic wellness solutions.',
  },
];
