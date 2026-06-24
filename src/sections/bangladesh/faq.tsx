import { faqs } from './data';

const Faq = () => {
  return (
    <section className='px-[5%] py-[90px]'>
      <span className='mb-3 inline-block text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[#2E7D32]'>
        Frequently Asked Questions
      </span>
      <h2 className='mb-3.5 font-[family-name:var(--font-playfair)] text-[clamp(1.9rem,3vw,2.8rem)] font-semibold leading-[1.2] text-[#1A2332]'>
        Questions from <span className='not-italic text-[#1B5E20]'>Bangladeshi Patients</span>
      </h2>
      <div className='mt-11 grid grid-cols-1 gap-5 lg:grid-cols-2'>
        {faqs.map((f) => (
          <div key={f.q} className='rounded-xl border border-[#1B5E20]/10 p-[22px]'>
            <div className='mb-2 text-[0.9rem] font-semibold text-[#1A2332]'>{f.q}</div>
            <div className='text-[0.84rem] leading-[1.65] text-[#637082]'>{f.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
