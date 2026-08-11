import { PHONE_HREF } from 'sections/campaigns-hosur-ta/constants';

export default function Nav() {
  return (
    <nav className='bg-white border-b border-[#7B1B2E]/[0.12] px-3 flex items-center justify-between h-16 sticky top-0 z-50 shadow-[0_1px_8px_rgba(0,0,0,0.06)] md:px-6'>
      <div className='font-[family-name:var(--font-noto-serif-tamil)] text-[0.8rem] font-bold text-[#7B1B2E] md:text-[1.15rem]'>
        கர்பகுடி<span className='text-[#C9861A]'> ✦</span> Hosur
      </div>
      <a
        href={PHONE_HREF}
        className='bg-[#7B1B2E] text-white px-2.5 py-1.5 rounded-md text-[11px] font-semibold whitespace-nowrap md:px-5 md:py-2 md:text-sm'
      >
        📞 இப்போதே அழைக்கவும்
      </a>
    </nav>
  );
}
