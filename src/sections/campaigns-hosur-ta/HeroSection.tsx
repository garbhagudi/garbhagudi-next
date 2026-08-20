import { PHONE_HREF, WHATSAPP_HREF } from 'sections/campaigns-hosur-ta/constants';

const svgPattern = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Ccircle cx='30' cy='30' r='1' fill='%23ffffff' fill-opacity='0.04'/%3E%3C/g%3E%3C/svg%3E")`;

const stats = [
  { value: '15,000+', label: 'வெற்றிக் கதைகள்' },
  { value: '15+', label: 'ஆண்டு அனுபவம்' },
  { value: 'High success rate', label: 'உயர்ந்த வெற்றி விகிதம்' },
  { value: 'EMI', label: '0% வட்டி வசதி' },
];

export default function HeroSection() {
  return (
    <section className='relative overflow-hidden bg-gradient-to-br from-[#2C1016] via-[#7B1B2E] to-[#A33048] px-5 py-14 text-center text-white md:px-8 md:py-20'>
      <div
        className='absolute inset-0 opacity-50'
        style={{ backgroundImage: svgPattern }}
        aria-hidden='true'
      />

      <div className='relative z-10'>
        <span className='mx-auto mb-6 inline-block max-w-[280px] rounded-full border border-[#C9861A]/50 bg-[#C9861A]/25 px-4 py-1.5 text-[13px] text-[#FFD98A] sm:max-w-none'>
          ஓசூரில் இப்போது திறந்துள்ளது · Bangalore&apos;s Most Trusted IVF Centre
        </span>

        <h1 className='mx-auto mb-5 max-w-[720px] font-[family-name:var(--font-noto-serif-tamil)] text-[clamp(1.6rem,4vw,2.6rem)] font-bold leading-[1.35]'>
          குழந்தைக்காக காத்திருக்கும் உங்கள் பயணத்தில்...
          <br />
          <em className='not-italic text-[#FFD98A]'>நீங்கள் மட்டும் இல்லை.</em>
        </h1>

        <p className='mx-auto mb-10 max-w-[560px] text-[0.95rem] leading-[1.75] opacity-[0.88] md:text-[1.05rem]'>
          15 ஆண்டுகளாக ஆயிரக்கணக்கான குடும்பங்களுக்கு பெற்றோராகும் கனவை நனவாக்கிய கர்பகுடி, இப்போது
          ஓசூரிலும் உங்களுக்காக காத்திருக்கிறது.
        </p>

        <div className='flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center'>
          <a
            href={WHATSAPP_HREF}
            className='w-full rounded-lg bg-[#C9861A] px-5 py-3 text-center font-[family-name:var(--font-noto-sans-tamil)] text-[15px] font-bold text-[#1C1C1E] transition-transform hover:-translate-y-0.5 sm:w-auto sm:px-7 sm:py-3.5'
          >
            🟢 WhatsApp இல் பேசுங்கள்
          </a>
          <a
            href={PHONE_HREF}
            className='w-full rounded-lg border border-white/40 bg-white/[0.12] px-5 py-3 text-center font-[family-name:var(--font-noto-sans-tamil)] text-[15px] font-semibold text-white transition-colors hover:bg-white/20 sm:w-auto sm:px-7 sm:py-3.5'
          >
            📞 இலவச ஆலோசனை
          </a>
          <a
            href={WHATSAPP_HREF}
            className='w-full rounded-lg border border-white/40 bg-white/[0.12] px-5 py-3 text-center font-[family-name:var(--font-noto-sans-tamil)] text-[15px] font-semibold text-white transition-colors hover:bg-white/20 sm:w-auto sm:px-7 sm:py-3.5'
          >
            📅 சந்திப்பு பதிவு செய்க
          </a>
        </div>

        <div className='mt-14 flex flex-wrap justify-center gap-6 border-t border-white/[0.15] pt-8 md:gap-8'>
          {stats.map((s) => (
            <div key={s.label} className='text-center'>
              <strong className='block text-[1.8rem] font-bold text-[#FFD98A]'>{s.value}</strong>
              <span className='text-[13px] opacity-75'>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
