import type { ReactNode } from 'react';

interface Props {
  eyebrow: string;
  title: ReactNode;
  body?: ReactNode;
}

export default function SectionHeader({ eyebrow, title, body }: Props) {
  return (
    <div>
      <p className='mb-2 font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.12em] text-[#E8820C]'>
        {eyebrow}
      </p>
      <h2 className='mb-4 font-[family-name:var(--font-noto-serif-tamil)] text-[clamp(1.5rem,3vw,2rem)] font-bold leading-[1.35] text-[#1C1C1E]'>
        {title}
      </h2>
      {body && (
        <p className='max-w-[600px] font-[family-name:var(--font-noto-sans-tamil)] text-[15px] leading-[1.75] text-[#6B6860]'>
          {body}
        </p>
      )}
    </div>
  );
}
