import Link from 'next/link';
import { ENQUIRY_LINK } from './data';

const Nav = () => {
  return (
    <nav className='sticky top-0 z-[100] flex h-[70px] items-center justify-between border-b border-[#1B5E20]/10 bg-white/95 px-[5%] backdrop-blur-[8px]'>
      <Link href='/' className='flex items-center gap-2.5 no-underline'>
        <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#1B5E20] to-[#43A047] font-[family-name:var(--font-playfair)] text-sm font-bold text-white'>
          GG
        </div>
        <span className='font-[family-name:var(--font-playfair)] text-[1.2rem] font-semibold text-[#1B5E20]'>
          GarbhaGudi IVF
        </span>
      </Link>
      <div className='hidden items-center gap-1.5 text-[0.82rem] text-[#637082] sm:flex'>
        📞 <strong className='font-semibold text-[#1A2332]'>+91 9108 9108 32</strong>
      </div>
      <Link
        href={ENQUIRY_LINK}
        className='inline-block rounded-md bg-[#E53935] px-[22px] py-2.5 text-[0.875rem] font-medium text-white no-underline transition-colors hover:bg-[#b71c1c]'
      >
        Free Consultation
      </Link>
    </nav>
  );
};

export default Nav;
