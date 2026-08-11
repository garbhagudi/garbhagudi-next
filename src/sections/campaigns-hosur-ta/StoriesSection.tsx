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
    <section className='py-12 px-5 bg-[#7B1B2E] md:py-[4.5rem] md:px-8'>
      <SectionHeader
        eyebrow='Real Families · Real Stories'
        title='ஓசூர் குடும்பங்களின் வெற்றிக் கதைகள்'
        subtitle='இவர்களுக்கு நடந்தது உங்களுக்கும் நடக்கும்'
        variant='dark'
      />
      <div className='grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5 max-w-[960px] mx-auto'>
        {stories.map((s) => (
          <div
            key={s.initials}
            className='bg-white/[0.07] border border-white/[0.12] rounded-[14px] p-5 md:p-7'
          >
            <div className='w-[52px] h-[52px] rounded-full bg-[#C9861A] flex items-center justify-center font-bold text-[18px] text-[#1C1C1E] mb-4'>
              {s.initials}
            </div>
            <div className='font-[family-name:var(--font-noto-sans-tamil)] font-semibold text-[#FFD98A] text-[15px]'>
              {s.name}
            </div>
            <div className='text-[13px] text-white/[0.55] mb-3'>📍 {s.location}</div>
            <span className='inline-block bg-[#C9861A]/20 text-[#FFD98A] text-[12px] px-2.5 py-[3px] rounded-full mb-3'>
              {s.tag}
            </span>
            <p className='text-white/[0.82] text-[14px] leading-[1.7] italic'>{s.quote}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
