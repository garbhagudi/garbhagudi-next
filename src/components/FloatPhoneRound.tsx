import Link from 'next/link';
import { HiPhone } from 'react-icons/hi';

/* Sits directly below the SalesIQ chat bubble: same 56px size and right edge
 * (see `html.gg-phone-round-floats #zsiq_float` in globals.css). Chat bubble sits above at bottom 88px (desktop) / 80px (mobile). */
const FloatPhoneRound = () => {
  return (
    <div className='fixed bottom-5 right-6 z-50 h-12 w-12 rounded-full bg-[#25D366] md:right-5 md:h-14 md:w-14'>
      <Link
        href='tel:+919108910832'
        aria-label='Call GarbhaGudi'
        className='flex h-full w-full items-center justify-center'
      >
        <HiPhone className='h-6 w-6 text-white md:h-7 md:w-7' />
      </Link>
    </div>
  );
};

export default FloatPhoneRound;
