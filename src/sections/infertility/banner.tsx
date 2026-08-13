import Image from 'next/image';

const Banner = () => {
  return (
    <div className='relative shadow-2xl'>
      <Image
        quality={85}
        src='https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8vednb58v707plopapzgdk'
        alt=''
        aria-hidden='true'
        fill
        priority
        sizes='100vw'
        className='object-cover object-right sm:object-center'
      />
      <div className='relative h-full w-full bg-black bg-opacity-70 py-6'>
        <div className='mx-auto flex h-[50vh] max-w-5xl items-center'>
          <div className='absolute z-10'>
            <div className='mx-auto w-full px-3 text-center text-base md:max-w-2xl md:text-left'>
              <h1 className='font-heading text-3xl font-bold leading-tight text-brandPink lg:text-4xl'>
                Infertility Treatment in Bangalore
              </h1>
            </div>
            <p className='mt-4 px-3 text-center font-content text-base font-medium text-gray-200 md:max-w-xl md:text-left'>
              "GarbhaGudi IVF Centre offers cutting-edge infertility treatment in Bangalore,
              providing personalized solutions to enhance your chances of parenthood. Our renowned
              team of fertility experts and state-of-the-art facilities make us a leading choice for
              comprehensive and effective fertility care in Bangalore."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
