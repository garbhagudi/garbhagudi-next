import { steps } from './data';

const Journey = () => {
  return (
    <section id='steps' className='bg-[#F4F7F4] px-[5%] py-[90px]'>
      <div className='text-center'>
        <span className='mb-3 inline-block text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[#2E7D32]'>
          Your Journey
        </span>
        <h2 className='mb-3.5 font-[family-name:var(--font-playfair)] text-[clamp(1.9rem,3vw,2.8rem)] font-semibold leading-[1.2] text-[#1A2332]'>
          From Dhaka to <span className='not-italic text-[#1B5E20]'>Parenthood</span>
        </h2>
        <p className='mx-auto max-w-[580px] text-[0.98rem] leading-[1.75] text-[#637082]'>
          Every step planned, every detail managed. Here&apos;s how your journey with GarbhaGudi
          works.
        </p>
      </div>
      <div className="relative mt-[52px] grid grid-cols-2 gap-5 before:absolute before:left-[8%] before:right-[8%] before:top-6 before:z-0 before:hidden before:h-0.5 before:bg-gradient-to-r before:from-[#43A047] before:to-[#2E7D32] before:content-[''] lg:grid-cols-5 lg:before:block">
        {steps.map((s) => (
          <div key={s.n} className='relative z-[1] px-2 text-center'>
            <div className='mx-auto mb-4 flex h-[50px] w-[50px] items-center justify-center rounded-full border-2 border-[#43A047] bg-white font-[family-name:var(--font-playfair)] text-base font-bold text-[#1B5E20] shadow-[0_0_0_5px_#F4F7F4]'>
              {s.n}
            </div>
            <div className='mb-[5px] text-[0.84rem] font-semibold text-[#1A2332]'>{s.title}</div>
            <div className='text-[0.76rem] leading-[1.5] text-[#637082]'>{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Journey;
