import SectionHeader from 'sections/campaigns-hosur-ta/SectionHeader';
import { WHATSAPP_HREF } from 'sections/campaigns-hosur-ta/constants';

const factors: { icon: string; title: string; desc: string }[] = [
  {
    icon: '🧬',
    title: 'சிகிச்சையின் வகை',
    desc: 'IVF, ICSI, IUI — ஒவ்வொன்றின் செலவும் வேறுபடும்',
  },
  {
    icon: '🔬',
    title: 'Lab தேவைகள்',
    desc: 'Genetic testing, PGT-A போன்ற தேவைகள்',
  },
  {
    icon: '💊',
    title: 'மருந்துகள்',
    desc: 'Stimulation protocol மற்றும் மருந்துகளின் அளவு',
  },
  {
    icon: '❤️',
    title: 'உங்கள் தனிப்பட்ட நிலை',
    desc: 'வயது, AMH, முந்தைய சிகிச்சை வரலாறு',
  },
];

export default function CostSection() {
  return (
    <section className='bg-[#F7F5F3] px-5 py-12 md:px-8 md:py-[4.5rem]'>
      <div className='mx-auto max-w-[760px]'>
        <SectionHeader
          eyebrow='Transparent Pricing'
          title='ஓசூரில் IVF சிகிச்சை செலவு'
          subtitle='செலவு பல காரணிகளை பொருத்து மாறுபடும். வெளிப்படையாக எல்லாவற்றையும் சொல்கிறோம்.'
        />

        <div className='mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2'>
          {factors.map((f) => (
            <div
              key={f.title}
              className='flex items-start gap-2.5 rounded-[10px] border border-[#7B1B2E]/[0.12] bg-white p-4'
            >
              <span className='mt-0.5 flex-shrink-0 text-[20px] leading-none'>{f.icon}</span>
              <div>
                <h4 className='text-[14px] font-semibold text-[#1C1C1E]'>{f.title}</h4>
                <p className='mt-0.5 text-[13px] text-[#6B6860]'>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className='rounded-[14px] bg-[#7B1B2E] p-5 text-center text-white md:p-8'>
          <h3 className='mb-2 font-[family-name:var(--font-noto-serif-tamil)] text-[1rem] text-[#FFD98A] md:text-[1.2rem]'>
            0% வட்டியில் EMI வசதி உள்ளது
          </h3>
          <p className='mb-5 text-[14px] opacity-80'>
            செலவு காரணமாக கனவை விட வேண்டாம். எங்கள் financial counselor உங்களுக்கு சிறந்த திட்டம்
            தயாரிப்பார்கள்.
          </p>
          <a
            href={WHATSAPP_HREF}
            className='inline-flex items-center gap-2 rounded-lg bg-[#C9861A] px-7 py-3 font-[family-name:var(--font-noto-sans-tamil)] text-[14px] font-bold text-[#1C1C1E] transition-opacity hover:opacity-90'
          >
            <span>💬 செலவு விவரங்களை அறிய</span>
          </a>
        </div>
      </div>
    </section>
  );
}
