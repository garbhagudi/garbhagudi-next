import React from 'react';

const Doctor = () => {
  return (
    <div>
      <div className='max-w-7xl mx-auto px-4 pb-16'>
        <div className='text-4xl font-bold font-lexend py-8'>
          About the Hosts
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 max-w-3xl gap-5'>
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className='flex items-center justify-center flex-col '
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className='object-cover rounded-lg'
              />
              <div className='text-lg font-lexend'>{doctor.name}</div>
              <div className='text-base text-gray-500 font-content'>
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
    name: 'Dr. John Doe',
    image:
      'https://yoga-satvicmovement-org.b-cdn.net/resources/img/hosts/Radhika-1.webp',
    content:
      'Dr. John Doe is a certified yoga instructor with 10 years of experience. He has trained over 1000 students and has helped them achieve their fitness goals. He is a firm believer in the power of yoga and its ability to transform lives.',
  },
  {
    id: 2,
    name: 'Dr. Jane Doe',
    image:
      'https://yoga-satvicmovement-org.b-cdn.net/resources/img/hosts/Subah_saraf-1.webp',
    content:
      'Dr. Jane Doe is a certified yoga instructor with 10 years of experience. She has trained over 1000 students and has helped them achieve their fitness goals. She is a firm believer in the power of yoga and its ability to transform lives.',
  },
  {
    id: 3,
    name: 'Dr. Alex Doe',
    image:
      'https://yoga-satvicmovement-org.b-cdn.net/resources/img/hosts/Akshay-1.webp',
    content:
      'Dr. Alex Doe is a certified yoga instructor with 10 years of experience. He has trained over 1000 students and has helped them achieve their fitness goals. He is a firm believer in the power of yoga and its ability to transform lives.',
  },
];
