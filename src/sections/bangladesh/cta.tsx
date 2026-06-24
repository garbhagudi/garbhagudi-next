import Link from 'next/link';
import { ENQUIRY_LINK } from './data';

const Cta = () => {
  return (
    <section
      id='enquire'
      className='bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] px-[5%] py-[90px] text-center'
    >
      <h2 className='mx-auto mb-3.5 max-w-[640px] font-[family-name:var(--font-playfair)] text-[clamp(1.9rem,3vw,2.8rem)] font-semibold leading-[1.2] text-white'>
        Start Your Journey to Parenthood Today
      </h2>
      <p className='mx-auto mb-9 max-w-[480px] text-[0.98rem] leading-[1.75] text-white/70'>
        A free online consultation from Bangladesh is the first step. No commitment required — just
        clarity and compassionate expert advice.
      </p>
      <Link
        href={ENQUIRY_LINK}
        className='inline-block rounded-lg bg-[#E53935] px-9 py-4 text-base font-medium text-white no-underline transition hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(198,40,40,0.4)]'
      >
        Book Free Online Consultation
      </Link>
      <p className='text-white/65 mt-[22px] text-[0.88rem]'>
        International Helpline:{' '}
        <a href='tel:+919108910832' className='font-semibold text-[#FFD54F] no-underline'>
          +91 9108 9108 32
        </a>{' '}
        ·{' '}
        <a
          href='mailto:dreams@garbhagudi.com'
          className='font-semibold text-[#FFD54F] no-underline'
        >
          dreams@garbhagudi.com
        </a>
      </p>
    </section>
  );
};

export default Cta;
