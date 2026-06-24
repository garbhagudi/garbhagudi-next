import { doctors } from './data';

const Doctors = () => {
  return (
    <section className='px-[5%] py-[90px]'>
      <span className='mb-3 inline-block text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[#2E7D32]'>
        Our Specialists
      </span>
      <h2 className='mb-3.5 font-[family-name:var(--font-playfair)] text-[clamp(1.9rem,3vw,2.8rem)] font-semibold leading-[1.2] text-[#1A2332]'>
        The Team <span className='not-italic text-[#1B5E20]'>Behind Your Success</span>
      </h2>
      <p className='max-w-[580px] text-[0.98rem] leading-[1.75] text-[#637082]'>
        A multi-disciplinary team of fertility experts, embryologists, andrologists, and counsellors
        working together for you.
      </p>
      <div className='mt-11 grid grid-cols-1 gap-6 lg:grid-cols-2'>
        {doctors.map((d) => (
          <div
            key={d.name}
            className='flex items-start gap-[18px] rounded-[14px] border border-[#1B5E20]/10 p-[22px]'
          >
            <div className='flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[10px] bg-gradient-to-br from-[#1B5E20] to-[#43A047] font-[family-name:var(--font-playfair)] text-[1.3rem] font-bold text-white'>
              {d.av}
            </div>
            <div>
              <div className='mb-[3px] text-[0.9rem] font-semibold text-[#1A2332]'>{d.name}</div>
              <div className='mb-[7px] text-[0.78rem] font-medium text-[#2E7D32]'>{d.spec}</div>
              <div className='text-[0.8rem] leading-[1.55] text-[#637082]'>{d.bio}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Doctors;
