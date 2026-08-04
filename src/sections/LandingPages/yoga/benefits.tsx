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
    image: 'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8vgwav58sw08pkiyi0pwlr',
  },
  {
    id: 2,
    title: 'Understand your thoughts & emotions',
    image: 'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8vlppj59pi08pkb37qja74',
  },
  {
    id: 3,
    title: 'Feel more stable',
    image: 'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8vlppy59pm08pk1qyfj0tr',
  },
];
