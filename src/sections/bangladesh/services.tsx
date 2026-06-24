import { services } from './data';

const Services = () => {
  return (
    <section className='bg-[#1B5E20] px-[5%] py-[90px]'>
      <span className='mb-3 inline-block text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[#FFD54F]'>
        For Bangladeshi Patients
      </span>
      <h2 className='mb-3.5 font-[family-name:var(--font-playfair)] text-[clamp(1.9rem,3vw,2.8rem)] font-semibold leading-[1.2] text-white'>
        We Handle <span className='not-italic text-[#FFD54F]'>Every Detail</span>
      </h2>
      <p className='text-white/65 max-w-[580px] text-[0.98rem] leading-[1.75]'>
        Traveling abroad for fertility treatment takes courage. Our international patient team
        removes every logistical hurdle.
      </p>
      <div className='mt-11 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
        {services.map((sv) => (
          <div
            key={sv.name}
            className='rounded-[14px] border border-white/10 bg-white/[0.07] p-[26px] transition-all hover:border-[#FFD54F]/30 hover:bg-white/[0.12]'
          >
            <div className='mb-3 text-[1.7rem]'>{sv.icon}</div>
            <div className='mb-[7px] text-[0.9rem] font-semibold text-white'>{sv.name}</div>
            <div className='text-[0.82rem] leading-[1.6] text-white/[0.58]'>{sv.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
