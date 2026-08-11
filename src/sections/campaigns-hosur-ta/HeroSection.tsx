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
    <section className='relative overflow-hidden bg-gradient-to-br from-[#2C1016] via-[#7B1B2E] to-[#A33048] text-white py-14 px-5 text-center md:py-20 md:px-8'>
      <div
        className='absolute inset-0 opacity-50'
        style={{ backgroundImage: svgPattern }}
        aria-hidden='true'
      />

      <div className='relative z-10'>
        <span className='inline-block bg-[#C9861A]/25 border border-[#C9861A]/50 text-[#FFD98A] text-[13px] px-4 py-1.5 rounded-full mb-6 max-w-[280px] sm:max-w-none mx-auto'>
          ஓசூரில் இப்போது திறந்துள்ளது · Bangalore&apos;s Most Trusted IVF Centre
        </span>

        <h1 className='font-[family-name:var(--font-noto-serif-tamil)] text-[clamp(1.6rem,4vw,2.6rem)] max-w-[720px] mx-auto mb-5 font-bold leading-[1.35]'>
          குழந்தைக்காக காத்திருக்கும் உங்கள் பயணத்தில்...
          <br />
          <em className='text-[#FFD98A] not-italic'>நீங்கள் மட்டும் இல்லை.</em>
        </h1>

        <p className='text-[0.95rem] max-w-[560px] mx-auto mb-10 opacity-[0.88] leading-[1.75] md:text-[1.05rem]'>
          15 ஆண்டுகளாக ஆயிரக்கணக்கான குடும்பங்களுக்கு பெற்றோராகும் கனவை நனவாக்கிய கர்பகுடி, இப்போது
          ஓசூரிலும் உங்களுக்காக காத்திருக்கிறது.
        </p>

        <div className='flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:flex-wrap'>
          <a
            href={WHATSAPP_HREF}
            className='w-full sm:w-auto bg-[#C9861A] text-[#1C1C1E] px-5 py-3 rounded-lg font-bold text-[15px] transition-transform hover:-translate-y-0.5 font-[family-name:var(--font-noto-sans-tamil)] sm:px-7 sm:py-3.5 text-center'
          >
            🟢 WhatsApp இல் பேசுங்கள்
          </a>
          <a
            href={PHONE_HREF}
            className='w-full sm:w-auto bg-white/[0.12] border border-white/40 text-white px-5 py-3 rounded-lg font-semibold text-[15px] hover:bg-white/20 transition-colors font-[family-name:var(--font-noto-sans-tamil)] sm:px-7 sm:py-3.5 text-center'
          >
            📞 இலவச ஆலோசனை
          </a>
          <a
            href={WHATSAPP_HREF}
            className='w-full sm:w-auto bg-white/[0.12] border border-white/40 text-white px-5 py-3 rounded-lg font-semibold text-[15px] hover:bg-white/20 transition-colors font-[family-name:var(--font-noto-sans-tamil)] sm:px-7 sm:py-3.5 text-center'
          >
            📅 சந்திப்பு பதிவு செய்க
          </a>
        </div>

        <div className='flex gap-6 justify-center mt-14 pt-8 border-t border-white/[0.15] flex-wrap md:gap-8'>
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
