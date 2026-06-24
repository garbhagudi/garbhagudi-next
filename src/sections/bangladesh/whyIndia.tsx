import { whyItems, costRows } from './data';

const WhyIndia = () => {
  return (
    <section className='px-[5%] py-[90px]'>
      <div className='grid grid-cols-1 items-center gap-[72px] lg:grid-cols-2'>
        <div>
          <span className='mb-3 inline-block text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[#2E7D32]'>
            Why Choose India
          </span>
          <h2 className='mb-3.5 font-[family-name:var(--font-playfair)] text-[clamp(1.9rem,3vw,2.8rem)] font-semibold leading-[1.2] text-[#1A2332]'>
            World-Class IVF,{' '}
            <span className='not-italic text-[#1B5E20]'>Closer Than You Think</span>
          </h2>
          <p className='max-w-[580px] text-[0.98rem] leading-[1.75] text-[#637082]'>
            Couples from Bangladesh increasingly choose Bangalore for fertility treatment —
            world-standard care at a fraction of what you&apos;d pay elsewhere, with a cultural ease
            that makes the journey less daunting.
          </p>
          <div className='mt-8 flex flex-col gap-4'>
            {whyItems.map((item) => (
              <div
                key={item.h}
                className='flex gap-4 rounded-xl border-l-[3px] border-[#43A047] bg-[#F4F7F4] px-5 py-[18px]'
              >
                <div className='shrink-0 text-[1.4rem]'>{item.icon}</div>
                <div>
                  <div className='mb-1 text-[0.9rem] font-semibold text-[#1A2332]'>{item.h}</div>
                  <div className='text-[0.82rem] leading-[1.55] text-[#637082]'>{item.p}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className='rounded-[20px] bg-[#1A2332] p-9'>
            <h3 className='mb-6 font-[family-name:var(--font-playfair)] text-[1.5rem] text-white'>
              Cost Comparison: IVF Treatment
            </h3>
            <table className='w-full border-collapse'>
              <tbody>
                {costRows.map((row) => (
                  <tr key={row.country}>
                    <td className='border-b border-white/[0.07] py-3 text-[0.875rem] text-white/[0.68]'>
                      {row.country}
                    </td>
                    <td className='border-b border-white/[0.07] py-3 text-right font-[family-name:var(--font-playfair)] text-[1.2rem] font-semibold text-white'>
                      {row.price}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className='py-3 text-[0.875rem] text-white/[0.68]'>🇮🇳 GarbhaGudi, India</td>
                  <td className='py-3 text-right'>
                    <span className='font-[family-name:var(--font-playfair)] text-[1.2rem] font-semibold text-[#FFD54F]'>
                      $2,500–4,000
                    </span>
                    <span className='ml-2 inline-block rounded-[20px] bg-[#E53935] px-2.5 py-[3px] align-middle text-[0.68rem] font-semibold text-white'>
                      Save 75%
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <p className='text-white/35 mt-4 text-[0.76rem]'>
              * Indicative figures. Contact us for a personalised quote based on your specific
              needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyIndia;
