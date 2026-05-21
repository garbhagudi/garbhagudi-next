import { useCallback, useMemo, useRef, useState } from 'react';
import { HiArrowUp } from 'react-icons/hi';
import glossaryData from './glossary-data.json';

export type GlossaryEntry = { term: string; definition: string; letter: string };
export type GlossaryGroup = { id: string; label: string; start: string; end: string };

const {
  entries: GLOSSARY_ENTRIES,
  groups: GLOSSARY_GROUPS,
  sourceUrl: GLOSSARY_SOURCE_URL,
} = glossaryData as {
  entries: GlossaryEntry[];
  groups: GlossaryGroup[];
  sourceUrl: string;
};

function groupEntries(entries: GlossaryEntry[], group: GlossaryGroup) {
  return entries
    .filter((entry) => entry.letter >= group.start && entry.letter <= group.end)
    .sort((a, b) => a.term.localeCompare(b.term, undefined, { sensitivity: 'base' }));
}

const GlossaryContent = () => {
  const [activeGroupId, setActiveGroupId] = useState(GLOSSARY_GROUPS[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const entriesByGroup = useMemo(
    () =>
      GLOSSARY_GROUPS.reduce<Record<string, GlossaryEntry[]>>((acc, group) => {
        acc[group.id] = groupEntries(GLOSSARY_ENTRIES, group);
        return acc;
      }, {}),
    []
  );

  const scrollToGroup = useCallback((groupId: string) => {
    setActiveGroupId(groupId);
    sectionRefs.current[groupId]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='min-h-[70vh] bg-white dark:bg-gray-900'>
      <div className='mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14'>
        <header className='mb-8 border-b border-gg-200 pb-6 lg:mb-10'>
          <h1 className='font-heading text-3xl font-bold text-gg-800 dark:text-gg-200 sm:text-4xl'>
            Fertility Glossary
          </h1>
          <p className='mt-3 max-w-3xl font-content text-gray-700 dark:text-gray-300'>
            Definitions of fertility and assisted reproductive technology terms, adapted from the
            ICMART glossary for quick reference.
          </p>
        </header>

        <div className='flex flex-col gap-8 lg:flex-row lg:gap-10'>
          <nav className='lg:w-36 lg:flex-shrink-0' aria-label='Glossary letter ranges'>
            <ul className='flex flex-row flex-wrap gap-2 lg:flex-col lg:gap-3'>
              {GLOSSARY_GROUPS.map((group) => {
                const isActive = activeGroupId === group.id;
                return (
                  <li key={group.id}>
                    <button
                      type='button'
                      onClick={() => scrollToGroup(group.id)}
                      className={`w-full min-w-[5.5rem] rounded-md border px-4 py-2.5 text-center font-content text-sm font-semibold transition-colors sm:min-w-[6rem] lg:min-w-0 lg:text-left ${
                        isActive
                          ? 'border-gg-700 bg-gg-700 text-white'
                          : 'border-gg-700 bg-white text-gg-700 hover:bg-gg-50 dark:border-gg-400 dark:bg-gray-900 dark:text-gg-300 dark:hover:bg-gray-800'
                      }`}
                      aria-current={isActive ? 'true' : undefined}
                    >
                      {group.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className='min-w-0 flex-1'>
            {GLOSSARY_GROUPS.map((group) => {
              const entries = entriesByGroup[group.id] ?? [];
              if (entries.length === 0) return null;

              return (
                <section
                  key={group.id}
                  id={`glossary-${group.id}`}
                  ref={(el) => {
                    sectionRefs.current[group.id] = el;
                  }}
                  className='scroll-mt-28 pb-12 last:pb-4'
                >
                  <h2 className='sr-only'>{group.label}</h2>
                  <dl className='space-y-8'>
                    {entries.map((entry) => (
                      <div key={entry.term}>
                        <dt className='font-heading text-lg font-bold text-gg-800 dark:text-gg-300'>
                          {entry.term}
                        </dt>
                        {entry.definition ? (
                          <dd className='mt-2 font-content text-base leading-relaxed text-gray-800 dark:text-gray-200'>
                            {entry.definition}
                          </dd>
                        ) : null}
                      </div>
                    ))}
                  </dl>
                </section>
              );
            })}

            <p className='mt-8 border-t border-gray-200 pt-6 font-content text-sm text-gray-600 dark:border-gray-700 dark:text-gray-400'>
              Source:{' '}
              <a
                href={GLOSSARY_SOURCE_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='text-gg-700 underline hover:text-gg-800 dark:text-gg-400'
              >
                ICMART Glossary
              </a>
            </p>
          </div>
        </div>
      </div>

      <button
        type='button'
        onClick={scrollToTop}
        className='fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-sm bg-gg-700 text-white shadow-lg transition hover:bg-gg-800 focus:outline-none focus:ring-2 focus:ring-gg-500 focus:ring-offset-2'
        aria-label='Back to top'
      >
        <HiArrowUp className='h-5 w-5' aria-hidden />
      </button>
    </div>
  );
};

export default GlossaryContent;
