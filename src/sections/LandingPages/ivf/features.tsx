import React from 'react';
import Image from 'next/image';
import WhyGarbhagudi from 'assets/landing-page/why-garbhagudi.webp';
import { FaPercent, FaUserDoctor, FaMap, FaCircleCheck } from 'react-icons/fa6';

const Features = () => {
  return (
    <>
    <section className='mt-8'>
        <div className='text-center mx-4 md:mx-auto'>
        <h1 className='font-bold text-gg-500 text-2xl md:text-4xl'>What makes GarbhaGudi the perfect choice for you?</h1>
        </div>
    </section>
    <section>
        <div className="flex flex-col items-center justify-center my-10 px-5 md:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl">
        <div className="md:w-1/3 flex flex-col space-y-5 text-center md:text-left">
          <div className="flex flex-col items-center mr-5">
          <FaPercent className='text-5xl text-brandPurpleDark dark:text-gg-500' />
            <p className="text-l font-semibold">Industry-Leading 75% IVF Success Rates: We take pride in our
                  exceptional success rates, standing out as the best in the
                  industry. Our commitment to excellence ensures a higher
                  likelihood of successful outcomes for our patients.</p>
          </div>
          <div className="flex flex-col items-center pt-4 mr-5">
          <FaUserDoctor className='text-5xl text-brandPurpleDark dark:text-gg-500' />
            <p className="text-lg font-semibold"> 15+ Years of Experience: Our fertility doctors bring over 15
                  years of extensive expertise, ensuring that you receive care
                  from seasoned professionals dedicated to your success.</p>
          </div>
        </div>

        <div className="md:w-1/3 flex justify-center my-5 md:my-0">
          <Image height={350} width={350} src={WhyGarbhagudi} alt="Water Purifier" className="max-w-full rounded-lg" />
        </div>

        <div className="md:w-1/3 flex flex-col space-y-5 text-center md:text-left">
          <div className="flex items-center flex-col ml-5">
          <FaMap className='text-5xl text-brandPurpleDark dark:text-gg-500' />
            <p className="text-lg font-semibold"> 7 Convenient IVF Centers Across Bangalore: With a widespread
                  presence, we provide accessibility and convenience for
                  individuals seeking fertility treatments, making quality care
                  readily available.</p>
          </div>
          <div className="flex items-center flex-col pt-4 ml-5">
          <FaCircleCheck className='text-5xl text-brandPurpleDark dark:text-gg-500' />
            <p className="text-lg font-semibold">Over 10,000 Successful IVF Cases: Demonstrating a proven track
                  record of achieving positive outcomes and fulfilling the
                  dreams of numerous families.</p>
          </div>
         </div>
        </div>
       </div>
    </section>
    </>
  );
};

export default Features;
