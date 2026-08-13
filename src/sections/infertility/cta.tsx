import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
const Form = dynamic(() => import('sections/LandingPages/eggFreezing/form'), { ssr: false });

const CTA: React.FC = () => {
  const router = useRouter();
  const path = router.asPath;
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleBookAppointmentBtn = () => {
    if (path.includes('/lp/egg-freezing')) {
      setIsOpen(true);
    } else {
      router.push(`
        /contact/enquiry?pageVisit=${path}`);
    }
  };
  return (
    <div className='relative flex h-screen max-h-64 items-center justify-center shadow-xl'>
      <Image
        quality={85}
        src='https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms7ai6km08v208pk1e4c8z0p'
        alt=''
        aria-hidden='true'
        fill
        sizes='100vw'
        className='object-cover object-center'
      />
      <div className='absolute h-full w-full bg-gray-800 opacity-30 dark:opacity-60'></div>
      <div className='z-10 max-w-lg rounded-lg bg-white bg-opacity-75 p-8 shadow-md dark:bg-gray-800'>
        <h2 className='mb-2 font-heading text-2xl font-bold'>Get Started Today!</h2>
        <p className='mb-4 font-content font-medium text-gray-800 dark:text-gray-200'>
          Contact us now to start your journey with us and experience the joy of parenthood.
        </p>
        <button
          onClick={handleBookAppointmentBtn}
          className='rounded-lg bg-gg-500 px-4 py-2 font-semibold text-white hover:bg-gg-400 focus:outline-none dark:bg-gray-600 dark:hover:bg-gg-400'
        >
          Book an Appointment
        </button>
      </div>
      {isOpen && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'
          onClick={handleClose}
        >
          <Form />
        </div>
      )}
    </div>
  );
};

export default CTA;
