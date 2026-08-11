import Image from 'next/image';
import { WHATSAPP_HREF } from 'sections/campaigns-hosur-ta/constants';

const specialties = [
  'IVF & Fertility Specialist – 15+ Years',
  'PCOS & Hormonal Disorders',
  'Male Infertility & ICSI',
  'Recurrent Pregnancy Loss',
  'Fertility Preservation',
  'Holistic & Evidence-based Approach',
];

const languages = [
  { en: 'Tamil', ta: 'தமிழ்' },
  { en: 'English', ta: 'ஆங்கிலம்' },
  { en: 'Telugu', ta: 'தெலுங்கு' },
  { en: 'Kannada', ta: 'கன்னடம்' },
];

export default function DoctorSection() {
  return (
    <section className='py-12 px-5 bg-[#FDF3E3] md:py-[4.5rem] md:px-8'>
      <div className='max-w-[860px] mx-auto grid grid-cols-1 gap-6 items-center md:grid-cols-[1fr_1.6fr] md:gap-12'>
        <div className='relative max-w-[260px] mx-auto sm:max-w-none'>
          <div className='bg-[#7B1B2E] rounded-xl overflow-hidden relative'>
            <Image
              src='https://ap-south-1.graphassets.com/cmekvksn30ksu07o5fl5q801f/cmequuvod57fd07oagac62d2w'
              alt='டாக்டர் ராதா புச்சலபள்ளி'
              width={480}
              height={640}
              sizes='(min-width: 768px) 320px, 260px'
              className='w-full h-auto object-cover object-top'
            />
            <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 pt-8 pb-4 text-white text-center font-[family-name:var(--font-noto-sans-tamil)]'>
              <span className='block text-[15px] font-bold'>டாக்டர். ராதா. பி</span>
              <span className='block text-[12px] opacity-[0.85]'>Dr. Radha P</span>
            </div>
          </div>
        </div>

        <div>
          <span className='text-[12px] tracking-[0.1em] uppercase text-[#C9861A] font-semibold block mb-2'>
            Meet Your Doctor
          </span>
          <h2 className='font-[family-name:var(--font-noto-serif-tamil)] text-[1.3rem] text-[#7B1B2E] font-bold mb-3 leading-[1.35] md:text-[1.6rem]'>
            உங்கள் கருத்தரிப்பு
            <br />
            நிபுணரை சந்தியுங்கள்
          </h2>
          <div className='flex gap-2 flex-wrap mb-4'>
            {languages.map((lang) => (
              <span
                key={lang.en}
                className='inline-flex items-center gap-2 bg-[#F5E6EA] text-[#7B1B2E] px-3.5 py-1.5 rounded-full border border-[#7B1B2E]/[0.18]'
              >
                <span className='text-[13px]' aria-hidden='true'>
                  🗣️
                </span>
                <span className='leading-tight'>
                  <span className='block text-[13px] font-semibold'>{lang.en}</span>
                  <span className='block text-[11px] text-[#7B1B2E]/70 font-[family-name:var(--font-noto-sans-tamil)]'>
                    {lang.ta}
                  </span>
                </span>
              </span>
            ))}
          </div>
          <ul className='list-none'>
            {specialties.map((s) => (
              <li
                key={s}
                className='py-2 border-b border-[#7B1B2E]/[0.12] text-[14px] text-[#1C1C1E] flex items-center gap-2 last:border-b-0'
              >
                <span className='text-[#C9861A] text-[10px]'>✦</span>
                {s}
              </li>
            ))}
          </ul>
          <div className='mt-6 flex gap-3 flex-wrap'>
            <a
              href={WHATSAPP_HREF}
              className='inline-flex items-center gap-2 bg-[#7B1B2E] text-white px-7 py-3.5 rounded-lg font-bold text-[15px] hover:opacity-90 transition-opacity font-[family-name:var(--font-noto-sans-tamil)]'
            >
              <span>📅 டாக்டரை சந்தியுங்கள்</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
