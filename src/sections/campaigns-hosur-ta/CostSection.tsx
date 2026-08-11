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
    <section className='py-12 px-5 bg-[#F7F5F3] md:py-[4.5rem] md:px-8'>
      <div className='max-w-[760px] mx-auto'>
        <SectionHeader
          eyebrow='Transparent Pricing'
          title='ஓசூரில் IVF சிகிச்சை செலவு'
          subtitle='செலவு பல காரணிகளை பொருத்து மாறுபடும். வெளிப்படையாக எல்லாவற்றையும் சொல்கிறோம்.'
        />

        <div className='grid grid-cols-1 gap-3 mb-8 sm:grid-cols-2'>
          {factors.map((f) => (
            <div
              key={f.title}
              className='bg-white border border-[#7B1B2E]/[0.12] rounded-[10px] p-4 flex items-start gap-2.5'
            >
              <span className='text-[20px] leading-none mt-0.5 flex-shrink-0'>{f.icon}</span>
              <div>
                <h4 className='text-[14px] font-semibold text-[#1C1C1E]'>{f.title}</h4>
                <p className='text-[13px] text-[#6B6860] mt-0.5'>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className='bg-[#7B1B2E] rounded-[14px] p-5 text-center text-white md:p-8'>
          <h3 className='font-[family-name:var(--font-noto-serif-tamil)] text-[1rem] mb-2 text-[#FFD98A] md:text-[1.2rem]'>
            0% வட்டியில் EMI வசதி உள்ளது
          </h3>
          <p className='text-[14px] opacity-80 mb-5'>
            செலவு காரணமாக கனவை விட வேண்டாம். எங்கள் financial counselor உங்களுக்கு சிறந்த திட்டம்
            தயாரிப்பார்கள்.
          </p>
          <a
            href={WHATSAPP_HREF}
            className='inline-flex items-center gap-2 bg-[#C9861A] text-[#1C1C1E] px-7 py-3 rounded-lg font-bold text-[14px] hover:opacity-90 transition-opacity font-[family-name:var(--font-noto-sans-tamil)]'
          >
            <span>💬 செலவு விவரங்களை அறிய</span>
          </a>
        </div>
      </div>
    </section>
  );
}
