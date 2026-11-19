import {
  LuFlaskConical as FlaskConical,
  LuMicroscope as Microscope,
  LuSyringe as Syringe,
  LuActivity as Activity,
  LuSparkles as Sparkles,
  LuHeart as Heart,
  LuStethoscope as Stethoscope,
  LuSearch as Search,
  LuWaves as Waves,
  LuSnowflake as Snowflake,
  LuArrowRightLeft as ArrowRightLeft,
  LuFilter as Filter,
  LuSprout as Sprout,
} from 'react-icons/lu';
import SectionHeader from './SectionHeader';

const treatments = [
  { Icon: FlaskConical, name: 'IVF', desc: 'உயிரணு கருத்தரிப்பு' },
  { Icon: Microscope, name: 'ICSI', desc: 'நேரடி கருத்தரிப்பு' },
  { Icon: Syringe, name: 'IUI', desc: 'கருப்பை கருத்தரிப்பு' },
  { Icon: Activity, name: 'TESA/PESA', desc: 'ஆண்மை குறைவு சிகிச்சை' },
  { Icon: Sparkles, name: 'Blastocyst', desc: 'கருவளர்ப்பு சிகிச்சை' },
  { Icon: Heart, name: 'Natural Conception', desc: 'இயற்கை கருத்தரிப்பு' },
  { Icon: Stethoscope, name: 'Laparoscopy', desc: 'தொப்புள் துளை அறுவை சிகிச்சை' },
  { Icon: Search, name: 'Hysteroscopy', desc: 'கருப்பை உள்நோக்கு பரிசோதனை' },
  { Icon: Waves, name: 'Varicocele', desc: 'விந்தணு நரம்பு வீக்க சிகிச்சை' },
  { Icon: Snowflake, name: 'Semen Freezing', desc: 'விந்தணு உறைவைப்பு' },
  { Icon: ArrowRightLeft, name: 'Sequential Transfer', desc: 'கட்ட கட்டமான கரு மாற்று' },
  { Icon: Filter, name: 'MACS', desc: 'விந்தணு தரம் பிரித்தல்' },
  { Icon: Sprout, name: 'Endometrial Rejuvenation', desc: 'கருப்பை உட்படலம் புத்துயிர்' },
];

export default function TreatmentsSection() {
  return (
    <section className='bg-[#f5ebf2] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20'>
      <div className='mx-auto max-w-7xl'>
        <SectionHeader
          eyebrow='சிகிச்சை விருப்பங்கள்'
          title='எல்லா நிலைக்கும் தீர்வு இருக்கிறது'
          body='கருத்தரிப்பு சவால்களுக்கு அறிவியல் பூர்வமான, நவீன தீர்வுகள்.'
        />
        <div className='grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-4'>
          {treatments.map(({ Icon, name, desc }) => (
            <div
              key={name}
              className='rounded-[12px] border border-[#ebe7e8] bg-white px-4 py-[1.1rem] text-center transition-all hover:-translate-y-0.5 hover:border-[#ef4266]'
            >
              <div className='mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#fdeaee]'>
                <Icon className='h-5 w-5 text-[#ef4266]' strokeWidth={2} />
              </div>
              <div className='font-[family-name:var(--font-inter)] text-[13px] font-semibold text-[#353635]'>
                {name}
              </div>
              <div className='mt-1 font-[family-name:var(--font-noto-sans-tamil)] text-[12px] leading-[1.5] text-[#4d4d4e]'>
                {desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
