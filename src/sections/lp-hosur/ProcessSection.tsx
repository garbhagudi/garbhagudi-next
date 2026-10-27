import SectionHeader from './SectionHeader';

const steps = [
  {
    num: '01',
    title: 'இலவச ஆலோசனை',
    desc: 'எங்கள் மருத்துவ நிபுணர்களிடம் முதல் சந்திப்பு. உங்கள் நிலையை விவாதிக்கலாம்.',
  },
  {
    num: '02',
    title: 'மதிப்பீடு & பரிசோதனை',
    desc: 'தேவையான இரத்த, ஸ்கேன் மற்றும் பிற பரிசோதனைகள் – அனைத்தும் ஒரே கூரையின் கீழ்.',
  },
  {
    num: '03',
    title: 'தனிப்பட்ட சிகிச்சை திட்டம்',
    desc: 'உங்கள் நிலைக்கேற்ப மருத்துவர் தயாரிக்கும் சிகிச்சை திட்டம். வெளிப்படைத்தன்மையுடன் விலை விவரங்கள்.',
  },
  {
    num: '04',
    title: 'கேட்கட்டும் குட்டி காலடிகள்',
    desc: 'வெற்றிகரமான சிகிச்சையின் மூலம் உங்கள் வீட்டில் குழந்தை சிரிப்பொலி ஒலிக்கட்டும்.',
  },
];

export default function ProcessSection() {
  return (
    <section className='bg-white px-6 py-[4.5rem]'>
      <div className='mx-auto max-w-[960px]'>
        <SectionHeader
          eyebrow='உங்கள் பயணம்'
          title={
            <>
              4 படிகளில் பெற்றோராகும் கனவை
              <br />
              நனவாக்குங்கள்
            </>
          }
        />
        <div className='mt-10 flex flex-col'>
          {steps.map((s, i) => (
            <div
              key={s.num}
              className={`flex items-start gap-6 py-6 ${
                i < steps.length - 1 ? 'border-b border-black/10' : ''
              }`}
            >
              <span className='mt-0.5 flex-shrink-0 rounded-lg bg-[#FDF0DC] px-2.5 py-1.5 font-[family-name:var(--font-inter)] text-[11px] font-bold tracking-wider text-[#B5620A]'>
                {s.num}
              </span>
              <div>
                <div className='mb-1 font-[family-name:var(--font-noto-sans-tamil)] text-[15px] font-semibold text-[#1C1C1E]'>
                  {s.title}
                </div>
                <div className='font-[family-name:var(--font-noto-sans-tamil)] text-[14px] leading-[1.65] text-[#6B6860]'>
                  {s.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
