import SectionHeader from 'sections/campaigns-hosur-ta/SectionHeader';

const treatments: { icon: string; label: string }[] = [
  { icon: '🔬', label: 'IVF' },
  { icon: '🧬', label: 'ICSI' },
  { icon: '🌱', label: 'IUI' },
  { icon: '👨', label: 'Male Infertility' },
  { icon: '🥚', label: 'Egg Freezing' },
  { icon: '🌸', label: 'Fertility Preservation' },
];

export default function TreatmentsSection() {
  return (
    <section className='py-12 px-5 bg-white md:py-[4.5rem] md:px-8'>
      <SectionHeader
        eyebrow='Our Services'
        title='எங்கள் சிகிச்சைகள்'
        subtitle='உங்களுக்கு தேவையான சிகிச்சையை நாங்கள் வழங்குகிறோம்'
      />
      <div className='grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-3.5 max-w-[900px] mx-auto'>
        {treatments.map((t) => (
          <div
            key={t.label}
            className='border-[1.5px] border-[#7B1B2E]/[0.12] rounded-xl py-[1.1rem] px-3 text-center hover:border-[#C0435A] hover:bg-[#F5E6EA] transition-all'
          >
            <span className='text-[22px] block mb-1.5'>{t.icon}</span>
            <p className='text-[13px] font-semibold text-[#7B1B2E]'>{t.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
