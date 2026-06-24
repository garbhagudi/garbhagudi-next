import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='text-white/45 bg-[#0D1F0E] px-[5%] py-9 text-center text-[0.8rem] leading-[1.7]'>
      <div className='mb-2.5 font-[family-name:var(--font-playfair)] text-[1.3rem] font-semibold text-white'>
        GarbhaGudi IVF Centre
      </div>
      <p>
        Banashankari · Hanumanthanagar · Kalyan Nagar · HRBR Layout · Electronic City · Jayanagar ·
        and more across Bangalore, India
      </p>
      <p className='mt-2'>
        © 2025 GarbhaGudi IVF Centre. All rights reserved. ·{' '}
        <Link href='/' className='text-white/60 no-underline'>
          garbhagudi.com
        </Link>
      </p>
      <p className='mt-2 text-[0.74rem] text-white/25'>
        This page is designed for patients from Bangladesh seeking fertility treatment in Bangalore,
        India.
      </p>
    </footer>
  );
};

export default Footer;
