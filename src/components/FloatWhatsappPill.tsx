import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

const FloatWhatsappPill = () => {
  return (
    <Link
      href='https://wa.me/919108910832?text=Hi'
      target='_blank'
      rel='noopener noreferrer'
      aria-label='Chat on WhatsApp'
      className='group fixed bottom-5 left-5 z-40 flex items-center gap-2'
    >
      <span className='relative flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/40 transition-transform duration-200 group-hover:scale-110 md:h-14 md:w-14'>
        <span
          aria-hidden='true'
          className='absolute inset-0 rounded-full ring-2 ring-[#25D366]/60 motion-safe:animate-ping'
        />
        <FaWhatsapp className='relative z-10 h-6 w-6 text-white md:h-7 md:w-7' />
      </span>
      <span
        aria-hidden='true'
        className='pointer-events-none hidden -translate-x-2 whitespace-nowrap rounded-full bg-gray-900 px-3 py-1.5 text-xs font-semibold text-white opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 md:inline-block'
      >
        Chat with us
      </span>
    </Link>
  );
};

export default FloatWhatsappPill;
