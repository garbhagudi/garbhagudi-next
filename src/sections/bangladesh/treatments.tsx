import { treatments } from './data';

const Treatments = () => {
  return (
    <section className='px-[5%] py-[90px]'>
      <span className='mb-3 inline-block text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[#2E7D32]'>
        Treatments
      </span>
      <h2 className='mb-3.5 font-[family-name:var(--font-playfair)] text-[clamp(1.9rem,3vw,2.8rem)] font-semibold leading-[1.2] text-[#1A2332]'>
        Full-Spectrum <span className='not-italic text-[#1B5E20]'>Fertility Care</span>
      </h2>
      <p className='max-w-[580px] text-[0.98rem] leading-[1.75] text-[#637082]'>
        From the simplest investigations to the most advanced assisted reproduction — all available
        under one roof in Bangalore.
      </p>
      <div className='mt-11 grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-3'>
        {treatments.map((t) => (
          <div
            key={t.name}
            className='rounded-[14px] border border-[#1B5E20]/10 p-[26px] transition-all hover:-translate-y-[3px] hover:border-[#43A047] hover:shadow-[0_8px_32px_rgba(27,94,32,0.08)]'
          >
            <div className='mb-3 text-[1.8rem]'>{t.icon}</div>
            <div className='mb-[7px] text-[0.93rem] font-semibold text-[#1A2332]'>{t.name}</div>
            <div className='text-[0.82rem] leading-[1.6] text-[#637082]'>{t.desc}</div>
            <div className='mt-3 text-[0.75rem] font-semibold uppercase tracking-[0.04em] text-[#2E7D32]'>
              {t.link}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Treatments;
