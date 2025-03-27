import Image from 'next/image';

const SocialMediaTemplates = () => {
  return (
    <div>
      <h2 className='font-heading text-2xl font-bold'>Social Media Posts - Templates</h2>
      <div className='py-10'>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {data.map((item) => (
            <div key={item.id} className='flex flex-col items-center'>
              <Image
                src={item.image}
                alt={item.desccription}
                height={500}
                width={500}
                className='object-cover'
                loading='lazy'
              />
              <p className='mt-2 bg-gg-500 py-0.5 text-center font-lexend text-sm text-white'>
                {item.desccription}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialMediaTemplates;

const data = [
  {
    id: 1,
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1704887643/brandResources/720-min_mnne1y.webp',
    desccription: '16x9 - Vertical Logo',
  },
  {
    id: 2,
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1704887642/brandResources/720H-min_vao9ir.webp',
    desccription: '16x9 - Horizontal Logo',
  },
  {
    id: 3,
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1704887641/brandResources/9x16-min_ewmooo.webp',
    desccription: '9x16 - Verical Logo',
  },
  {
    id: 4,
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1704887641/brandResources/1x1-min_dzk8ga.webp',
    desccription: '1x1 - Vertical Logo',
  },
  {
    id: 5,
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1704887641/brandResources/9x16H-min_lmfqg1.webp',
    desccription: '9x16 - Horizontal Logo',
  },
  {
    id: 6,
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1704887641/brandResources/1x192H-min_lvymqt.webp',
    desccription: '16x8 - Horizontal Logo',
  },
  {
    id: 7,
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1704887641/brandResources/3x4-min_ogl2w6.webp',
    desccription: '1x1.25 - Vertical Logo',
  },
  {
    id: 8,
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1704887641/brandResources/1x192-min_hzrd2e.webp',
    desccription: '16x8 - Vertical Logo',
  },
  {
    id: 9,
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1704887641/brandResources/1-1H-min_z3ugwj.webp',
    desccription: '1x1 - Horizontal Logo',
  },
  {
    id: 10,
    image:
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1704887641/brandResources/3x4H-min_atmtkr.webp',
    desccription: '1x1.25 - Horizontal Logo',
  },
];
