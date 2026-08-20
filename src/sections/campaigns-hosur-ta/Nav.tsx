import { PHONE_HREF } from 'sections/campaigns-hosur-ta/constants';

export default function Nav() {
  return (
    <nav className='sticky top-0 z-50 flex h-16 items-center justify-between border-b border-[#7B1B2E]/[0.12] bg-white px-3 shadow-[0_1px_8px_rgba(0,0,0,0.06)] md:px-6'>
      <div className='font-[family-name:var(--font-noto-serif-tamil)] text-[0.8rem] font-bold text-[#7B1B2E] md:text-[1.15rem]'>
        கர்பகுடி<span className='text-[#C9861A]'> ✦</span> Hosur
      </div>
      <a
        href={PHONE_HREF}
        className='whitespace-nowrap rounded-md bg-[#7B1B2E] px-2.5 py-1.5 text-[11px] font-semibold text-white md:px-5 md:py-2 md:text-sm'
      >
        📞 இப்போதே அழைக்கவும்
      </a>
    </nav>
  );
}
