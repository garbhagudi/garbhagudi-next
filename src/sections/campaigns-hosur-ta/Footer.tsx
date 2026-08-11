import { PHONE_DISPLAY, PHONE_HREF, WHATSAPP_HREF } from 'sections/campaigns-hosur-ta/constants';

export default function Footer() {
  return (
    <footer className='bg-[#1C1C1E] text-white/60 py-10 px-5 text-center text-[14px] md:px-8'>
      <p className='mb-3'>
        <strong className='text-white/90'>கர்பகுடி IVF மையம் — ஓசூர்</strong>
      </p>
      <div className='flex flex-col items-center gap-2 md:flex-row md:justify-center md:gap-0 md:flex-wrap'>
        <a href={PHONE_HREF} className='hover:text-white/90 transition-colors'>
          📞 {PHONE_DISPLAY}
        </a>
        <span className='hidden md:inline'>&nbsp;|&nbsp;</span>
        <a href={WHATSAPP_HREF} className='hover:text-white/90 transition-colors'>
          🟢 WhatsApp
        </a>
        <span className='hidden md:inline'>&nbsp;|&nbsp;</span>
        <a href='mailto:info@garbhagudi.com' className='hover:text-white/90 transition-colors'>
          📧 info@garbhagudi.com
        </a>
      </div>
      <p className='mt-3 text-[13px]'>
        © 2025 GarbhaGudi IVF Centre. All rights reserved.&nbsp;|&nbsp;Privacy
        Policy&nbsp;|&nbsp;Disclaimer
      </p>
      <p className='mt-2 text-[12px] opacity-60'>
        The content on this page is for informational purposes only and does not constitute medical
        advice.
      </p>
    </footer>
  );
}
