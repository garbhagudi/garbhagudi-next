import { LuPhone as Phone } from 'react-icons/lu';
import { PHONE_HREF } from './constants';

export default function HeroSection() {
  return (
    <section className='relative grid place-items-center overflow-hidden bg-white px-6 py-20 pb-16 text-center'>
      <span className='relative mb-6 inline-flex items-center gap-2 rounded-full bg-[#FDF0DC] px-4 py-1.5 font-[family-name:var(--font-inter)] text-[13px] font-semibold text-[#B5620A]'>
        <span className='h-1.5 w-1.5 rounded-full bg-[#E8820C]' />
        கர்பகுடி கருத்தரித்தல் மையம் – ஓசூர்
      </span>

      <h1 className='relative mx-auto mb-4 max-w-[700px] font-[family-name:var(--font-noto-serif-tamil)] text-[clamp(2rem,5vw,3.2rem)] font-bold leading-[1.35] text-[#1C1C1E]'>
        உங்கள் வீட்டிலும்
        <br />
        <em className='not-italic text-[#C0395E]'>குட்டி காலடிச் சத்தம்</em>
        <br />
        கேட்கட்டும்
      </h1>

      <p className='relative mx-auto mb-2 max-w-[560px] font-[family-name:var(--font-noto-serif-tamil)] text-[clamp(1.1rem,2.5vw,1.4rem)] leading-[1.6] text-[#6B6860]'>
        உங்கள் பெற்றோராகும் கனவு…
      </p>
      <p className='relative mb-10 font-[family-name:var(--font-noto-serif-tamil)] text-[clamp(1.2rem,2.5vw,1.5rem)] font-semibold text-[#0F6E56]'>
        நினைவாகலாம் ✦
      </p>

      <div className='relative flex flex-wrap justify-center gap-3 max-sm:flex-col max-sm:items-center'>
        <a
          href='#form'
          className='rounded-[10px] bg-[#E8820C] px-7 py-3.5 font-[family-name:var(--font-noto-sans-tamil)] text-[15px] font-semibold text-white transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#B5620A]'
        >
          இலவச ஆலோசனை பெறுங்கள்
        </a>
        <a
          href={PHONE_HREF}
          className='inline-flex items-center gap-2 rounded-[10px] border-[1.5px] border-black/10 px-7 py-3.5 font-[family-name:var(--font-noto-sans-tamil)] text-[15px] font-medium text-[#1C1C1E] transition-colors hover:border-[#E8820C] hover:bg-[#FDF0DC]'
        >
          <Phone className='h-4 w-4' />
          இப்போதே அழைக்கவும்
        </a>
      </div>
    </section>
  );
}
