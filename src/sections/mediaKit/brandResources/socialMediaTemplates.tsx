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
    image: 'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8vnae15a0k08pkw0edi0pz',
    desccription: '16x9 - Vertical Logo',
  },
  {
    id: 2,
    image: 'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8vnael5a0o08pk3hix0hb6',
    desccription: '16x9 - Horizontal Logo',
  },
  {
    id: 3,
    image: 'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8vnaf65a0s08pkq4eh82xc',
    desccription: '9x16 - Verical Logo',
  },
  {
    id: 4,
    image: 'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8vnafx5a0w08pkxd4ixv7s',
    desccription: '1x1 - Vertical Logo',
  },
  {
    id: 5,
    image: 'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8vnt9s5agx07pl5z6z4awe',
    desccription: '9x16 - Horizontal Logo',
  },
  {
    id: 6,
    image: 'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8vntab5ah107plgdr2occb',
    desccription: '16x8 - Horizontal Logo',
  },
  {
    id: 7,
    image: 'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8vntb05ah507plnyfmbfl5',
    desccription: '1x1.25 - Vertical Logo',
  },
  {
    id: 8,
    image: 'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8vntbk5ah907plpxu8l2as',
    desccription: '16x8 - Vertical Logo',
  },
  {
    id: 9,
    image: 'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8vntc55ahd07plw466c73o',
    desccription: '1x1 - Horizontal Logo',
  },
  {
    id: 10,
    image: 'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8vntcu5ahh07pl3uhgldri',
    desccription: '1x1.25 - Horizontal Logo',
  },
];
