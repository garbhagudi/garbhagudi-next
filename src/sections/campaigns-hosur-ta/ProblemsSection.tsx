import SectionHeader from 'sections/campaigns-hosur-ta/SectionHeader';
import { WHATSAPP_HREF } from 'sections/campaigns-hosur-ta/constants';

const problems = [
  'திருமணமாகி 1 வருடம் ஆகியும் கர்ப்பம் இல்லை',
  'PCOS / PCOD பிரச்சனை',
  'AMH அளவு மிகவும் குறைவாக உள்ளது',
  'ஆண்களின் கருத்தரிப்பு குறைபாடு (Male Infertility)',
  'முன்பு IVF தோல்வியடைந்தது',
  'இரண்டாவது குழந்தை திட்டமிடல்',
  'மீண்டும் மீண்டும் கருச்சிதைவு',
  'கருக்குழாய் அடைப்பு (Blocked Tubes)',
];

export default function ProblemsSection() {
  return (
    <section className='py-12 px-5 bg-[#F7F5F3] md:py-[4.5rem] md:px-8'>
      <SectionHeader
        eyebrow='உங்கள் பிரச்சனை என்ன?'
        title='உங்களுக்கும் இந்த பிரச்சனைகள் உள்ளதா?'
        subtitle='கீழே உள்ள பிரச்சனைகளில் ஏதாவது உங்களுக்கு பொருந்துகிறதா? நாங்கள் உதவலாம்.'
      />
      <div className='grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-3.5 max-w-[960px] mx-auto'>
        {problems.map((p) => (
          <div
            key={p}
            className='bg-white border border-[#7B1B2E]/[0.12] border-l-4 border-l-[#7B1B2E] rounded-r-[10px] py-[1.1rem] px-5 flex items-center gap-3 hover:shadow-md hover:translate-x-1 transition-all'
          >
            <div className='w-2.5 h-2.5 rounded-full bg-[#C0435A] flex-shrink-0' />
            <span className='text-[15px] text-[#1C1C1E]'>{p}</span>
          </div>
        ))}
      </div>
      <div className='text-center mt-10'>
        <a
          href={WHATSAPP_HREF}
          className='inline-block bg-[#7B1B2E] text-white px-7 py-3.5 rounded-lg font-bold text-[15px] hover:opacity-90 transition-opacity font-[family-name:var(--font-noto-sans-tamil)]'
        >
          🟢 இலவசமாக ஆலோசனை பெறுங்கள்
        </a>
      </div>
    </section>
  );
}
