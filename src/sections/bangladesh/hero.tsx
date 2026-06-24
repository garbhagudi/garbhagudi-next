import Link from 'next/link';
import { ENQUIRY_LINK, heroKpis } from './data';

const Hero = () => {
  return (
    <section className="relative grid min-h-[88vh] grid-cols-1 items-center gap-16 overflow-hidden bg-[#1B5E20] px-[5%] pb-[100px] pt-20 text-center before:pointer-events-none before:absolute before:-right-20 before:-top-[120px] before:h-[500px] before:w-[500px] before:rounded-full before:bg-[radial-gradient(circle,rgba(198,40,40,0.18)_0%,transparent_70%)] before:content-[''] after:absolute after:-bottom-[2px] after:left-0 after:right-0 after:h-[70px] after:bg-white after:content-[''] after:[clip-path:polygon(0_100%,100%_100%,100%_40%,50%_0%,0_40%)] lg:grid-cols-2 lg:text-left">
      <div className='relative z-[1]'>
        <div className='text-white/85 mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[0.78rem] font-medium uppercase tracking-[0.06em]'>
          🇧🇩 For Patients from Bangladesh
        </div>
        <h1 className='mb-[22px] font-[family-name:var(--font-playfair)] text-[clamp(2.6rem,4.5vw,4rem)] font-bold leading-[1.14] text-white'>
          Parenthood is <span className='not-italic text-[#FFD54F]'>Possible.</span> Let Us Prove
          It.
        </h1>
        <p className='mx-auto mb-10 max-w-[480px] text-[1.05rem] font-light leading-[1.75] text-white/75 lg:mx-0'>
          GarbhaGudi IVF Centre — trusted by couples across South Asia. Affordable, advanced
          fertility treatment in Bangalore, just a short flight from Dhaka.
        </p>
        <div className='flex flex-wrap justify-center gap-3.5 lg:justify-start'>
          <Link
            href={ENQUIRY_LINK}
            className='inline-block rounded-lg bg-[#E53935] px-[30px] py-3.5 text-[0.95rem] font-medium text-white no-underline transition hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(198,40,40,0.4)]'
          >
            Book Free Consultation
          </Link>
          <a
            href='#steps'
            className='inline-block rounded-lg border-[1.5px] border-white/40 bg-transparent px-[30px] py-3.5 text-[0.95rem] text-white no-underline transition hover:bg-white/10'
          >
            How It Works
          </a>
        </div>
      </div>
      <div className='relative z-[1]'>
        <div className='mx-auto max-w-[380px] rounded-[20px] border border-white/[0.14] bg-white/[0.08] p-9 backdrop-blur-[16px] lg:max-w-none'>
          <div className='mx-auto mb-3.5 flex h-20 w-20 items-center justify-center rounded-full border-[3px] border-white/20 bg-[radial-gradient(circle_at_45%_50%,#C62828_60%,transparent_60%)] text-[3rem]'>
            🇧🇩
          </div>
          <div className='text-center font-[family-name:var(--font-playfair)] text-[2rem] font-bold text-white'>
            Bangladesh
          </div>
          <div className='mb-7 text-center text-[1.2rem] text-white/50'>বাংলাদেশ</div>
          <div className='grid grid-cols-2 gap-3.5'>
            {heroKpis.map((kpi) => (
              <div key={kpi.lbl} className='rounded-xl bg-white/10 p-4 text-center'>
                <div className='font-[family-name:var(--font-playfair)] text-[1.8rem] font-bold text-[#FFD54F]'>
                  {kpi.val}
                </div>
                <div className='mt-0.5 text-[0.7rem] uppercase tracking-[0.05em] text-white/60'>
                  {kpi.lbl}
                </div>
              </div>
            ))}
          </div>
          <div className='text-white/55 mt-[18px] rounded-[10px] bg-white/[0.06] p-3 text-center text-[0.8rem]'>
            ✈️ Direct flights available · Dhaka (DAC) → Bangalore (BLR)
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
