import SectionHeader from 'sections/campaigns-hosur-ta/SectionHeader';

const steps = [
  {
    num: '01',
    title: 'சரியான நோயறிதல்',
    desc: 'உங்கள் நிலைக்கு ஏற்ற சரியான காரணம் கண்டறிந்து சிகிச்சை தொடங்குகிறோம்',
  },
  {
    num: '02',
    title: 'தனிப்பட்ட சிகிச்சை திட்டம்',
    desc: 'ஒவ்வொரு தம்பதியினருக்கும் தனித்தனியான சிகிச்சை திட்டம் வகுக்கப்படுகிறது',
  },
  {
    num: '03',
    title: 'அறிவியல் ஆதாரமுள்ள சிகிச்சை',
    desc: 'சர்வதேச தரத்திலான IVF Lab மற்றும் நவீன தொழில்நுட்பம் பயன்படுத்தப்படுகிறது',
  },
  {
    num: '04',
    title: 'முழுமையான அணுகுமுறை',
    desc: 'மருத்துவம் + உணவு + மன ஆரோக்கியம் — எல்லாவற்றையும் ஒன்றாக கவனிக்கிறோம்',
  },
  {
    num: '05',
    title: 'தொடர்ச்சியான ஆதரவு',
    desc: 'சிகிச்சை முழுதும் உங்களுடன் இருக்கும் ஒரு பிரத்யேக ஆதரவு குழு',
  },
];

export default function ApproachSection() {
  return (
    <section className='py-12 px-5 bg-white md:py-[4.5rem] md:px-8'>
      <SectionHeader
        eyebrow='Our Difference'
        title='கர்பகுடி முறையின் வித்தியாசம்'
        subtitle='நாங்கள் வெறும் மருத்துவம் மட்டுமல்ல, ஒரு முழுமையான அனுபவம் வழங்குகிறோம்'
      />
      <div className='grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5 max-w-[960px] mx-auto'>
        {steps.map((s) => (
          <div
            key={s.num}
            className='relative border border-[#7B1B2E]/[0.12] rounded-[14px] p-4 overflow-hidden md:p-6'
          >
            <div className='absolute top-[-8px] right-3 font-[family-name:var(--font-noto-serif-tamil)] text-[2.5rem] font-bold text-[#F5E6EA] leading-none select-none md:text-[3.5rem]'>
              {s.num}
            </div>
            <h3 className='font-semibold text-[#7B1B2E] mb-2 text-[1rem]'>{s.title}</h3>
            <p className='text-[14px] text-[#6B6860]'>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
