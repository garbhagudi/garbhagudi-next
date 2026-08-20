import SectionHeader from 'sections/campaigns-hosur-ta/SectionHeader';

const areas = [
  { ta: 'ஓசூர்', en: 'Hosur' },
  { ta: 'கிருஷ்ணகிரி', en: 'Krishnagiri' },
  { ta: 'தேன்கனிக்கோட்டை', en: 'Denkanikottai' },
  { ta: 'சூளகிரி', en: 'Shoolagiri' },
  { ta: 'கேலம்பாக்கம்', en: 'Kelamangalam' },
  { ta: 'பாகலூர்', en: 'Bagalur' },
  { ta: 'ராயக்கோட்டை', en: 'Rayakottai' },
];

export default function CoverageSection() {
  return (
    <section className='bg-white px-5 py-12 md:px-8 md:py-[4.5rem]'>
      <SectionHeader
        eyebrow='Service Area'
        title='ஓசூருக்கு அருகிலேயே உலகத் தரமான சிகிச்சை'
        subtitle='நாங்கள் சேவை வழங்கும் பகுதிகள்'
      />
      <div className='mx-auto mb-8 grid max-w-[800px] grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-3'>
        {areas.map((a) => (
          <div
            key={a.en}
            className='rounded-[10px] border border-[#7B1B2E]/[0.12] p-4 text-center transition-all hover:border-[#C0435A] hover:bg-[#F5E6EA]'
          >
            <strong className='block break-words font-[family-name:var(--font-noto-sans-tamil)] text-[14px] font-semibold leading-snug text-[#7B1B2E]'>
              {a.ta}
            </strong>
            <span className='break-words text-[12px] text-[#6B6860]'>{a.en}</span>
          </div>
        ))}
      </div>
      <div className='mx-auto flex h-[160px] max-w-[800px] flex-col items-center justify-center gap-2 rounded-[14px] border border-[#7B1B2E]/[0.12] bg-[#F7F5F3] sm:h-[220px]'>
        <span className='text-[32px] leading-none'>🗺️</span>
        <p className='text-[14px] text-[#6B6860]'>Google Maps — Hosur Clinic Location</p>
        <a
          href='https://maps.google.com/?q=GarbhaGudi+Hosur'
          target='_blank'
          rel='noopener noreferrer'
          className='mt-1 inline-block rounded-lg bg-[#7B1B2E] px-7 py-3 font-[family-name:var(--font-noto-sans-tamil)] text-[14px] font-bold text-white transition-opacity hover:opacity-90'
        >
          Directions பெறுக
        </a>
      </div>
    </section>
  );
}
