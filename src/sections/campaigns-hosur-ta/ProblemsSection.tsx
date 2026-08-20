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
    <section className='bg-[#F7F5F3] px-5 py-12 md:px-8 md:py-[4.5rem]'>
      <SectionHeader
        eyebrow='உங்கள் பிரச்சனை என்ன?'
        title='உங்களுக்கும் இந்த பிரச்சனைகள் உள்ளதா?'
        subtitle='கீழே உள்ள பிரச்சனைகளில் ஏதாவது உங்களுக்கு பொருந்துகிறதா? நாங்கள் உதவலாம்.'
      />
      <div className='mx-auto grid max-w-[960px] grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-3.5'>
        {problems.map((p) => (
          <div
            key={p}
            className='flex items-center gap-3 rounded-r-[10px] border border-l-4 border-[#7B1B2E]/[0.12] border-l-[#7B1B2E] bg-white px-5 py-[1.1rem] transition-all hover:translate-x-1 hover:shadow-md'
          >
            <div className='h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#C0435A]' />
            <span className='text-[15px] text-[#1C1C1E]'>{p}</span>
          </div>
        ))}
      </div>
      <div className='mt-10 text-center'>
        <a
          href={WHATSAPP_HREF}
          className='inline-block rounded-lg bg-[#7B1B2E] px-7 py-3.5 font-[family-name:var(--font-noto-sans-tamil)] text-[15px] font-bold text-white transition-opacity hover:opacity-90'
        >
          🟢 இலவசமாக ஆலோசனை பெறுங்கள்
        </a>
      </div>
    </section>
  );
}
