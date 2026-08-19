import Image from 'next/image';

const Hero = () => {
  return (
    <section className='relative mb-10'>
      <Image
        quality={85}
        src='https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8iqmho3psl07plazzvsr0o'
        alt=''
        aria-hidden='true'
        fill
        priority
        sizes='100vw'
        className='object-cover object-center'
      />
      <div className='relative h-full bg-black bg-opacity-50 py-16 text-gray-200 lg:py-40'>
        <div className='mx-auto max-w-7xl font-content'>
          <div className='max-w-3xl space-y-4 rounded-lg bg-gray-950 bg-opacity-20 px-4 py-6 sm:px-6 lg:px-8'>
            <h1 className='font-lexend text-3xl'>
              Every couple deserves to experience the joy of parenthood and with{' '}
              <span className='font-bold text-brandPink'>Ghar Ghar GarbhaGudi</span> we are making
              it possible for everyone.
            </h1>
            <div className='space-y-3 text-xl'>
              <div className='flex'>
                <div className='rounded-md bg-gray-300 bg-opacity-20 px-3 py-2 font-content'>
                  Join Hands for Infertility Free Karnataka
                </div>
              </div>
              <div>
                Even today many people believe that infertility is a curse. GarbhaGudi IVF Center
                through the{' '}
                <span className='font-bold underline'>Ghar Ghar GarbhaGudi initiative</span> has
                taken a bold step to overcome that and create awareness that every woman can achieve
                motherhood through modern reproductive treatment.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
