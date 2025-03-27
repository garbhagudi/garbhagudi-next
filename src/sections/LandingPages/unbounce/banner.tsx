import Image from 'next/image';
import Form from './form';

const Banner = () => {
  return (
    <div className=''>
      <div className='mx-auto max-w-7xl lg:px-6'>
        <div className='grid pt-8 lg:grid-cols-2 lg:pt-16'>
          <div className='flex items-end justify-center pb-6 lg:pb-0'>
            <Image
              src={
                'https://res.cloudinary.com/garbhagudiivf/image/upload/v1742986481/landing-page/Offer-Logo_r3rnce.webp'
              }
              alt='Banner Image'
              width={400}
              height={400}
              className='h-auto w-auto lg:max-h-[30rem]'
              priority={true}
            />
          </div>
          <div className='mx-auto flex max-w-xl items-center justify-center'>
            <div className='mx-auto flex flex-col items-center justify-center text-center'>
              <h4 className='font-lexend text-3xl font-bold text-gg-500 lg:text-5xl'>
                Bengaluru's Most Trusted Fertility Centre
              </h4>
              <p className='pt-4 font-lexend text-lg text-gray-900'>
                GarbhaGudi IVF Centre has been awarded as the Best IVF & Fertility Centre in
                Bangalore by multiple organizations.
              </p>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
