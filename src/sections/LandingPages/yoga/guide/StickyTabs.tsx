import type { Tab } from './types';

type StickyTabsProps = {
  tabs: Tab[];
  activeTab: string;
  onSelect: (id: string) => void;
};

const StickyTabs = ({ tabs, activeTab, onSelect }: StickyTabsProps) => (
  <nav
    className='sticky top-36 z-40 border-b border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:top-24'
    aria-label='Guide sections'
  >
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <ul className='flex gap-1 overflow-x-auto py-2'>
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <li key={tab.id} className='shrink-0'>
              <button
                type='button'
                onClick={() => onSelect(tab.id)}
                className={[
                  'whitespace-nowrap rounded-md px-3 py-2 text-xs font-semibold transition-colors sm:px-4 sm:text-sm',
                  isActive
                    ? 'bg-gg-500 text-white shadow-sm'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white',
                ].join(' ')}
                aria-current={isActive ? 'true' : undefined}
              >
                {tab.label}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  </nav>
);

export default StickyTabs;
