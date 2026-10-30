import Image from 'next/image';

import Features from 'sections/campaigns-bangalore-en/Features';

export default function OtherServices() {
  return (
    <div className='bg-white pb-16 pt-8'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='lg:text-center'>
          <h2 className='mt-5 text-center text-2xl font-bold leading-8 text-[#363636] underline sm:text-3xl'>
            What makes GarbhaGudi IVF Centre special?
          </h2>
        </div>

        <div className='mt-5 flex flex-col gap-1.5 text-center'>
          <Image
            quality={85}
            src='https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms75xwflh0uw07pn7azbdz58'
            alt='Banner Image'
            width={730}
            height={420}
            sizes='(min-width: 1024px) 730px, 100vw'
            className='mx-auto h-auto w-full object-contain lg:w-3/5'
          />
          <strong>Best IVF centre in Bangalore</strong>
          <p className='text-justify'>
            GarbhaGudi IVF Centre has been awarded as the{' '}
            <strong>Best IVF centre in Bangalore</strong> by multiple organizations and trusted by
            thousands of couples. GarbhaGudi is your trusted partner in the journey to parenthood.
            We provide advanced fertility treatments at an affordable price, making your dreams of
            having a baby come true. Our transparent <strong>IVF cost in Bangalore</strong> and
            personalized care plans ensure you get the best treatment without hidden expenses. If
            you’re searching for a reliable fertility centre close to you or a leading IVF centre in
            your area, GarbhaGudi stands out with high success rates, compassionate doctors, and
            world-class facilities. Begin your journey today with GarbhaGudi – where hope meets
            happiness.
          </p>
        </div>
        <Features />
        <div className='mx-auto mt-6 max-w-4xl'>
          <div className='mx-auto max-w-3xl py-6 text-center font-bold'>
            <h3 className='text-2xl font-bold text-[#363636] sm:text-3xl'>
              Trusted by over{' '}
              <span className='bg-gradient-to-r from-brandPink to-brandPurpleDark bg-clip-text text-transparent'>
                15000+ couples{' '}
              </span>
              across the world for over{' '}
              <span className='bg-gradient-to-r from-brandPink to-brandPurpleDark bg-clip-text text-transparent'>
                15 Years{' '}
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
