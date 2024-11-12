import React from 'react';
import Image from 'next/image';
import image1 from '../../assets/union-page/Dr. Shreya Thaparkar.png';
import image2 from '../../assets/union-page/Dr. Arjun Mehra.png';
import image3 from '../../assets/union-page/Dr. Mahika Singh.png';
import image4 from '../../assets/union-page/Dr. Avigyan Kapoor.png';
import image5 from '../../assets/union-page/image (4).png';
import image6 from '../../assets/union-page/image (5).png';

export default function Expects() {
  const renderDate = [
    {
      image: image1,
      name: 'Dr. Shreya Thaparkar',
      designation: ' MBBS, MD(Gynaecology)',
    },
    {
      image: image2,
      name: 'Dr. Arjun Mehra',
      designation: 'MBBS, MD (Medicine)',
    },
    {
      image: image3,
      name: 'Dr. Mahika Singh',
      designation: 'MBBS, MD (Gynaecology)',
    },
    {
      image: image4,
      name: 'Dr. Avigyan Kapoor',
      designation: ' MBBS, MD(Gynaecology)',
    },
    {
      image: image5,
      name: 'Dr. Vishal Kamra',
      designation: 'MBBS, MD (Medicine)',
    },
    {
      image: image6,
      name: 'Dr. Vishal Kamra',
      designation: 'MBBS, MD (Medicine)',
    },
  ];
  return (
    <div className='py-5'>
      <div className='text-center text-4xl font-extrabold py-5 font-nunito-Sans'>
        Meet our Fertility Experts
      </div>
      <div className='text-center w-10/12 mx-auto text-[#1D1D1D] opacity-70 font-nunito-Sans text-xl'>
        Our dedicated team brings years of experience and a compassionate
        approach to fertility care. Meet the specialists committed to supporting
        your journey.
      </div>
      <div className='w-10/12 mx-auto grid grid-cols-3 items-center justify-center gap-5 mt-5'>
        {renderDate.map((ele, index) => {
          return (
            <div
              key={index}
              className='my-5 flex flex-col items-center justify-center'
            >
              <Image
                src={ele.image}
                width={320}
                height={160}
                alt={`Image ${index + 1}`}
                loading='lazy'
              />
              <div className='flex flex-col items-center justify-center font-semibold font-nunito-Sans'>
                <span className='pb-1 pt-2 text-xl'>{ele.name}</span>
                <span className='text-[#6C6C6C] text-lg'>{ele.designation}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
