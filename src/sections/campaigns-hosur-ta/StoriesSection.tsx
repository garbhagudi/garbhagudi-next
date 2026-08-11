import SectionHeader from 'sections/campaigns-hosur-ta/SectionHeader';

const stories = [
  {
    initials: 'LP',
    name: 'லக்ஷ்மி & பிரகாஷ்',
    location: 'Bagalur, Hosur',
    tag: '8 வருட காத்திருப்பு',
    quote:
      '8 வருட காத்திருப்பிற்கு பிறகு, கர்ப்பகுடியின் மூலம் எங்கள் வாழ்வில் ஒளி வந்தது. டாக்டர் தமிழில் எல்லாவற்றையும் புரிய வைத்தார்கள்.',
  },
  {
    initials: 'SM',
    name: 'சரண்யா & முருகன்',
    location: 'Krishnagiri',
    tag: 'PCOS சிகிச்சை',
    quote:
      'PCOS காரணமாக நம்பிக்கையே இல்லாமல் இருந்தோம். கர்ப்பகுடி டாக்டர்கள் மிகவும் பொறுமையாக சிகிச்சை அளித்தனர்.',
  },
  {
    initials: 'RP',
    name: 'ரேவதி & பாலாஜி',
    location: 'Denkanikottai',
    tag: 'IVF வெற்றி',
    quote:
      'வேறொரு இடத்தில் 2 முறை தோல்வி. கர்ப்பகுடியில் முதல் முயற்சியிலேயே வெற்றி. இன்று என் மகள் என் மடியில் இருக்கிறாள்.',
  },
];

export default function StoriesSection() {
  return (
    <section className='bg-[#7B1B2E] px-5 py-12 md:px-8 md:py-[4.5rem]'>
      <SectionHeader
        eyebrow='Real Families · Real Stories'
        title='ஓசூர் குடும்பங்களின் வெற்றிக் கதைகள்'
        subtitle='இவர்களுக்கு நடந்தது உங்களுக்கும் நடக்கும்'
        variant='dark'
      />
      <div className='mx-auto grid max-w-[960px] grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5'>
        {stories.map((s) => (
          <div
            key={s.initials}
            className='rounded-[14px] border border-white/[0.12] bg-white/[0.07] p-5 md:p-7'
          >
            <div className='mb-4 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#C9861A] text-[18px] font-bold text-[#1C1C1E]'>
              {s.initials}
            </div>
            <div className='font-[family-name:var(--font-noto-sans-tamil)] text-[15px] font-semibold text-[#FFD98A]'>
              {s.name}
            </div>
            <div className='mb-3 text-[13px] text-white/[0.55]'>📍 {s.location}</div>
            <span className='mb-3 inline-block rounded-full bg-[#C9861A]/20 px-2.5 py-[3px] text-[12px] text-[#FFD98A]'>
              {s.tag}
            </span>
            <p className='text-[14px] italic leading-[1.7] text-white/[0.82]'>{s.quote}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
