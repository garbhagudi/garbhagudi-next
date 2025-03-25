import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

const FloatWhatsApp = () => {
  return (
    <div className='fixed bottom-5 right-5 flex cursor-pointer items-center justify-center rounded-full bg-green-600 px-2 py-2 font-content font-bold text-white'>
      <Link href='https://wa.me/918951813344'>
        <FaWhatsapp className='h-5 w-5 text-white md:h-8 md:w-8' />
      </Link>
    </div>
  );
};

export default FloatWhatsApp;
