import SectionHeader from 'sections/campaigns-hosur-ta/SectionHeader';
import { PHONE_HREF, WHATSAPP_HREF } from 'sections/campaigns-hosur-ta/constants';

export default function FinalCtaSection() {
  return (
    <section className='bg-gradient-to-br from-[#1A0A0F] via-[#4A1020] to-[#7B1B2E] py-16 px-5 text-center text-white md:py-24 md:px-8'>
      <SectionHeader
        eyebrow='உங்கள் கனவு இன்னும் உயிரோடு இருக்கிறது'
        title='உங்கள் பெற்றோர் ஆகும் கனவு இன்னும் உயிரோடு இருக்கிறது.'
        variant='dark'
      />
      <p className='text-[0.95rem] opacity-80 max-w-[500px] mx-auto mb-10 leading-[1.75] md:text-[1.05rem]'>
        நீங்கள் எவ்வளவு காலம் காத்திருந்தாலும், சரியான வழிகாட்டுதலுடன் அடுத்த படியை தொடங்கலாம். இன்றே
        ஒரு இலவச ஆலோசனை பெறுங்கள்.
      </p>
      <div className='flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:flex-wrap'>
        <a
          href={PHONE_HREF}
          className='w-full sm:w-auto bg-[#C9861A] text-[#1C1C1E] px-5 py-3 rounded-lg font-bold text-[15px] hover:opacity-90 transition-opacity font-[family-name:var(--font-noto-sans-tamil)] sm:px-7 sm:py-3.5 text-center'
        >
          📞 இப்போதே அழைக்கவும்
        </a>
        <a
          href={WHATSAPP_HREF}
          className='w-full sm:w-auto bg-white/[0.12] border border-white/40 text-white px-5 py-3 rounded-lg font-semibold text-[15px] hover:bg-white/20 transition-colors font-[family-name:var(--font-noto-sans-tamil)] sm:px-7 sm:py-3.5 text-center'
        >
          🟢 WhatsApp
        </a>
        <a
          href={WHATSAPP_HREF}
          className='w-full sm:w-auto bg-white/[0.12] border border-white/40 text-white px-5 py-3 rounded-lg font-semibold text-[15px] hover:bg-white/20 transition-colors font-[family-name:var(--font-noto-sans-tamil)] sm:px-7 sm:py-3.5 text-center'
        >
          📅 சந்திப்பு பதிவு
        </a>
      </div>
      <div className='mt-8 opacity-50 text-[13px] md:mt-12'>
        ✦ நம்பகமான · அக்கறையுள்ள · அறிவியல் அடிப்படையிலான சிகிச்சை ✦
      </div>
    </section>
  );
}
