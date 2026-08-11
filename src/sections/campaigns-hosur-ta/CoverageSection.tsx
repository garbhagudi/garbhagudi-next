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
    <section className='py-12 px-5 bg-white md:py-[4.5rem] md:px-8'>
      <SectionHeader
        eyebrow='Service Area'
        title='ஓசூருக்கு அருகிலேயே உலகத் தரமான சிகிச்சை'
        subtitle='நாங்கள் சேவை வழங்கும் பகுதிகள்'
      />
      <div className='grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-3 max-w-[800px] mx-auto mb-8'>
        {areas.map((a) => (
          <div
            key={a.en}
            className='border border-[#7B1B2E]/[0.12] rounded-[10px] p-4 text-center hover:bg-[#F5E6EA] hover:border-[#C0435A] transition-all'
          >
            <strong className='font-[family-name:var(--font-noto-sans-tamil)] block text-[14px] text-[#7B1B2E] font-semibold break-words leading-snug'>
              {a.ta}
            </strong>
            <span className='text-[12px] text-[#6B6860] break-words'>{a.en}</span>
          </div>
        ))}
      </div>
      <div className='max-w-[800px] mx-auto bg-[#F7F5F3] border border-[#7B1B2E]/[0.12] rounded-[14px] h-[160px] flex items-center justify-center flex-col gap-2 sm:h-[220px]'>
        <span className='text-[32px] leading-none'>🗺️</span>
        <p className='text-[14px] text-[#6B6860]'>Google Maps — Hosur Clinic Location</p>
        <a
          href='https://maps.google.com/?q=GarbhaGudi+Hosur'
          target='_blank'
          rel='noopener noreferrer'
          className='mt-1 inline-block bg-[#7B1B2E] text-white px-7 py-3 rounded-lg font-bold text-[14px] hover:opacity-90 transition-opacity font-[family-name:var(--font-noto-sans-tamil)]'
        >
          Directions பெறுக
        </a>
      </div>
    </section>
  );
}
