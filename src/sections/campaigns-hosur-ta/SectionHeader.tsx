interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
  variant?: 'light' | 'dark';
}

export default function SectionHeader({ eyebrow, title, subtitle, variant = 'light' }: Props) {
  const light = variant === 'light';
  return (
    <div className='mb-10 text-center'>
      <span
        className={`mb-2 block text-[12px] font-semibold uppercase tracking-[0.1em] ${
          light ? 'text-[#C9861A]' : 'text-[#FFD98A]/70'
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`mb-2 font-[family-name:var(--font-noto-serif-tamil)] text-[clamp(1.4rem,3vw,1.9rem)] font-bold ${
          light ? 'text-[#7B1B2E]' : 'text-[#FFD98A]'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mx-auto max-w-[520px] ${light ? 'text-[#6B6860]' : 'text-white/[0.65]'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
