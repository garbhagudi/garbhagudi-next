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
    <section className='bg-white px-5 py-12 md:px-8 md:py-[4.5rem]'>
      <SectionHeader
        eyebrow='Our Services'
        title='எங்கள் சிகிச்சைகள்'
        subtitle='உங்களுக்கு தேவையான சிகிச்சையை நாங்கள் வழங்குகிறோம்'
      />
      <div className='mx-auto grid max-w-[900px] grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-3.5'>
        {treatments.map((t) => (
          <div
            key={t.label}
            className='rounded-xl border-[1.5px] border-[#7B1B2E]/[0.12] px-3 py-[1.1rem] text-center transition-all hover:border-[#C0435A] hover:bg-[#F5E6EA]'
          >
            <span className='mb-1.5 block text-[22px]'>{t.icon}</span>
            <p className='text-[13px] font-semibold text-[#7B1B2E]'>{t.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
