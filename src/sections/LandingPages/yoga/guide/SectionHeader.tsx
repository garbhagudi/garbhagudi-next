import type { GuideSection } from './types';

const SectionHeader = ({ section }: { section: GuideSection }) => (
  <div
    className='mb-6 flex items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50/70 p-4 dark:border-gray-700 dark:bg-gray-800/50 sm:p-5'
    style={{ borderLeft: `5px solid ${section.accentColor}` }}
  >
    <span
      className='flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-lg font-bold text-white shadow-sm sm:h-12 sm:w-12'
      style={{ backgroundColor: section.accentColor }}
      aria-hidden='true'
    >
      {section.poses.length}
    </span>
    <div>
      <h2 className='font-heading text-xl font-bold text-gray-900 dark:text-white sm:text-2xl lg:text-3xl'>
        {section.label}
      </h2>
      <span
        className='mt-1 inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold sm:px-3'
        style={{ backgroundColor: section.badgeBg, color: section.badgeText }}
      >
        {section.subtitle}
      </span>
    </div>
  </div>
);

export default SectionHeader;
