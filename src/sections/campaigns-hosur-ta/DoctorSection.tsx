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
    <section className='bg-[#FDF3E3] px-5 py-12 md:px-8 md:py-[4.5rem]'>
      <div className='mx-auto grid max-w-[860px] grid-cols-1 items-center gap-6 md:grid-cols-[1fr_1.6fr] md:gap-12'>
        <div className='relative mx-auto max-w-[260px] sm:max-w-none'>
          <div className='relative overflow-hidden rounded-xl bg-[#7B1B2E]'>
            <Image
              quality={85}
              src='https://ap-south-1.graphassets.com/cmekvksn30ksu07o5fl5q801f/cmequuvod57fd07oagac62d2w'
              alt='டாக்டர் ராதா புச்சலபள்ளி'
              width={480}
              height={640}
              sizes='(min-width: 768px) 320px, 260px'
              className='h-auto w-full object-cover object-top'
            />
            <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-4 pt-8 text-center font-[family-name:var(--font-noto-sans-tamil)] text-white'>
              <span className='block text-[15px] font-bold'>டாக்டர். ராதா. பி</span>
              <span className='block text-[12px] opacity-[0.85]'>Dr. Radha P</span>
            </div>
          </div>
        </div>

        <div>
          <span className='mb-2 block text-[12px] font-semibold uppercase tracking-[0.1em] text-[#C9861A]'>
            Meet Your Doctor
          </span>
          <h2 className='mb-3 font-[family-name:var(--font-noto-serif-tamil)] text-[1.3rem] font-bold leading-[1.35] text-[#7B1B2E] md:text-[1.6rem]'>
            உங்கள் கருத்தரிப்பு
            <br />
            நிபுணரை சந்தியுங்கள்
          </h2>
          <div className='mb-4 flex flex-wrap gap-2'>
            {languages.map((lang) => (
              <span
                key={lang.en}
                className='inline-flex items-center gap-2 rounded-full border border-[#7B1B2E]/[0.18] bg-[#F5E6EA] px-3.5 py-1.5 text-[#7B1B2E]'
              >
                <span className='text-[13px]' aria-hidden='true'>
                  🗣️
                </span>
                <span className='leading-tight'>
                  <span className='block text-[13px] font-semibold'>{lang.en}</span>
                  <span className='block font-[family-name:var(--font-noto-sans-tamil)] text-[11px] text-[#7B1B2E]/70'>
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
                className='flex items-center gap-2 border-b border-[#7B1B2E]/[0.12] py-2 text-[14px] text-[#1C1C1E] last:border-b-0'
              >
                <span className='text-[10px] text-[#C9861A]'>✦</span>
                {s}
              </li>
            ))}
          </ul>
          <div className='mt-6 flex flex-wrap gap-3'>
            <a
              href={WHATSAPP_HREF}
              className='inline-flex items-center gap-2 rounded-lg bg-[#7B1B2E] px-7 py-3.5 font-[family-name:var(--font-noto-sans-tamil)] text-[15px] font-bold text-white transition-opacity hover:opacity-90'
            >
              <span>📅 டாக்டரை சந்தியுங்கள்</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
