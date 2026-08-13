import SectionHeader from 'sections/campaigns-hosur-ta/SectionHeader';
import { PHONE_HREF, WHATSAPP_HREF } from 'sections/campaigns-hosur-ta/constants';

export default function FinalCtaSection() {
  return (
    <section className='bg-gradient-to-br from-[#1A0A0F] via-[#4A1020] to-[#7B1B2E] px-5 py-16 text-center text-white md:px-8 md:py-24'>
      <SectionHeader
        eyebrow='உங்கள் கனவு இன்னும் உயிரோடு இருக்கிறது'
        title='உங்கள் பெற்றோர் ஆகும் கனவு இன்னும் உயிரோடு இருக்கிறது.'
        variant='dark'
      />
      <p className='mx-auto mb-10 max-w-[500px] text-[0.95rem] leading-[1.75] opacity-80 md:text-[1.05rem]'>
        நீங்கள் எவ்வளவு காலம் காத்திருந்தாலும், சரியான வழிகாட்டுதலுடன் அடுத்த படியை தொடங்கலாம்.
        இன்றே ஒரு இலவச ஆலோசனை பெறுங்கள்.
      </p>
      <div className='flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center'>
        <a
          href={PHONE_HREF}
          className='w-full rounded-lg bg-[#C9861A] px-5 py-3 text-center font-[family-name:var(--font-noto-sans-tamil)] text-[15px] font-bold text-[#1C1C1E] transition-opacity hover:opacity-90 sm:w-auto sm:px-7 sm:py-3.5'
        >
          📞 இப்போதே அழைக்கவும்
        </a>
        <a
          href={WHATSAPP_HREF}
          className='w-full rounded-lg border border-white/40 bg-white/[0.12] px-5 py-3 text-center font-[family-name:var(--font-noto-sans-tamil)] text-[15px] font-semibold text-white transition-colors hover:bg-white/20 sm:w-auto sm:px-7 sm:py-3.5'
        >
          🟢 WhatsApp
        </a>
        <a
          href={WHATSAPP_HREF}
          className='w-full rounded-lg border border-white/40 bg-white/[0.12] px-5 py-3 text-center font-[family-name:var(--font-noto-sans-tamil)] text-[15px] font-semibold text-white transition-colors hover:bg-white/20 sm:w-auto sm:px-7 sm:py-3.5'
        >
          📅 சந்திப்பு பதிவு
        </a>
      </div>
      <div className='mt-8 text-[13px] opacity-50 md:mt-12'>
        ✦ நம்பகமான · அக்கறையுள்ள · அறிவியல் அடிப்படையிலான சிகிச்சை ✦
      </div>
    </section>
  );
}
