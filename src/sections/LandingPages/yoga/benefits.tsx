import Image from 'next/image';

const Benefits = () => {
  return (
    <div id='benefits'>
      <div className='mx-auto max-w-7xl scroll-m-16 px-4 pb-16'>
        <div className='py-8 font-lexend text-3xl font-bold sm:text-4xl'>
          Benefits You Will Gain
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:max-w-3xl'>
          {benefits.map((benefit) => (
            <div key={benefit.id} className='flex flex-col items-center justify-center'>
              <Image
                width={300}
                height={300}
                src={benefit.image}
                alt={benefit.title}
                className='max-w-xl rounded-lg object-cover'
                loading='lazy'
              />
              <div className='font-lexend text-lg'>{benefit.title}</div>
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
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1742984693/Yoga/Benefits-You-Will-Gain_Img01_oyo60c.webp',
  },
  {
    id: 2,
    title: 'Understand your thoughts & emotions',
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1742984694/Yoga/Benefits-You-Will-Gain_Img02_pjyfbp.webp',
  },
  {
    id: 3,
    title: 'Feel more stable',
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1742984694/Yoga/Benefits-You-Will-Gain_Img03_pda7p0.webp',
  },
  {
    id: 4,
    title: 'Have better relationships',
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1742984694/Yoga/Benefits-You-Will-Gain_Img04_jctiut.webp',
  },
];
