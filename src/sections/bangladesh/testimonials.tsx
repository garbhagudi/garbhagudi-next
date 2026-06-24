import { testimonials } from './data';

const Testimonials = () => {
  return (
    <section className='bg-[#F4F7F4] px-[5%] py-[90px]'>
      <div className='text-center'>
        <span className='mb-3 inline-block text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[#2E7D32]'>
          Patient Stories
        </span>
        <h2 className='mb-3.5 font-[family-name:var(--font-playfair)] text-[clamp(1.9rem,3vw,2.8rem)] font-semibold leading-[1.2] text-[#1A2332]'>
          Families From Bangladesh,{' '}
          <span className='not-italic text-[#1B5E20]'>Dreams Fulfilled</span>
        </h2>
      </div>
      <div className='mt-11 grid grid-cols-1 gap-[22px] lg:grid-cols-2'>
        {testimonials.map((t) => (
          <div
            key={t.name}
            className='rounded-[14px] bg-white p-[26px] shadow-[0_2px_12px_rgba(27,94,32,0.05)]'
          >
            <div className='mb-3 text-[#D4A017]'>★★★★★</div>
            <p className='mb-[18px] text-[0.88rem] italic leading-[1.7] text-[#637082]'>
              {t.quote}
            </p>
            <div className='flex items-center gap-3'>
              <div className='flex h-[38px] w-[38px] items-center justify-center rounded-full bg-gradient-to-br from-[#1B5E20] to-[#2E7D32] text-[0.8rem] font-bold text-white'>
                {t.av}
              </div>
              <div>
                <div className='text-[0.84rem] font-semibold text-[#1A2332]'>{t.name}</div>
                <div className='text-[0.75rem] text-[#637082]'>{t.loc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
