import { Fragment } from 'react';

const items = [
  { num: '15,000+', label: 'குடும்பங்களின் நம்பிக்கை' },
  { num: '15+', label: 'ஆண்டுகள் அனுபவம்' },
  { num: '10', label: 'கிளைகள் – கர்நாடகா & தமிழ்நாடு' },
  { num: '#1', label: 'ஓசூரின் நம்பிக்கைக்குரிய மையம்' },
];

export default function TrustStrip() {
  return (
    <div
      className='flex flex-wrap items-center justify-center gap-x-12 gap-y-4 bg-[#8e5682] px-4 py-6 text-center text-white sm:px-6 lg:px-8'
      role='region'
      aria-label='நம்பிக்கை புள்ளிவிவரங்கள்'
    >
      {items.map((it, i) => (
        <Fragment key={it.label}>
          <div className='flex flex-col items-center'>
            <span className='font-[family-name:var(--font-inter)] text-[1.8rem] font-bold leading-none'>
              {it.num}
            </span>
            <span className='mt-1 font-[family-name:var(--font-noto-sans-tamil)] text-[12px] opacity-[0.85]'>
              {it.label}
            </span>
          </div>
          {i < items.length - 1 && (
            <span className='hidden h-10 w-px bg-white/25 sm:block' aria-hidden='true' />
          )}
        </Fragment>
      ))}
    </div>
  );
}
