import Link from 'next/link';
import { HiPhone } from 'react-icons/hi';

/* Sits directly below the SalesIQ chat bubble: same 56px size and right edge
 * (see `html.gg-phone-round-floats #zsiq_float` in globals.css). Chat bubble sits above at bottom 88px (desktop) / 80px (mobile). */
const FloatPhoneRound = () => {
  return (
    <div className='fixed bottom-5 right-5 z-50 h-12 w-12 overflow-hidden rounded-full p-[2px] md:h-14 md:w-14'>
      {/* Rotating gradient outer ring; the 2px padding above is its visible width. */}
      <span
        aria-hidden='true'
        className='absolute inset-0 rounded-full bg-[conic-gradient(#ea4b6a,#612a7b,#ea4b6a)] motion-safe:animate-[spin_3s_linear_infinite]'
      />
      <Link
        href='tel:+919108910832'
        aria-label='Call GarbhaGudi'
        className='relative z-[1] flex h-full w-full items-center justify-center rounded-full bg-[#25D366]'
      >
        <HiPhone className='h-6 w-6 text-white md:h-7 md:w-7' />
      </Link>
    </div>
  );
};

export default FloatPhoneRound;
