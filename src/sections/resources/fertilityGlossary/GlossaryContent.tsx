import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
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

const STICKY_TOP = 'top-16 lg:top-20';

function groupEntries(entries: GlossaryEntry[], group: GlossaryGroup) {
  return entries
    .filter((entry) => entry.letter >= group.start && entry.letter <= group.end)
    .sort((a, b) => a.term.localeCompare(b.term, undefined, { sensitivity: 'base' }));
}

const GlossaryContent = () => {
  const [activeGroupId, setActiveGroupId] = useState(GLOSSARY_GROUPS[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const isScrollingRef = useRef(false);

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
    isScrollingRef.current = true;
    sectionRefs.current[groupId]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.setTimeout(() => {
      isScrollingRef.current = false;
    }, 600);
  }, []);

  useEffect(() => {
    const sections = GLOSSARY_GROUPS.map((group) => sectionRefs.current[group.id]).filter(
      Boolean
    ) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrollingRef.current) return;
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          const groupId = visible.target.id.replace('glossary-', '');
          setActiveGroupId(groupId);
        }
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.1, 0.25] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [entriesByGroup]);

  return (
    <div className='bg-white dark:bg-gray-800'>
      <div className='mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-14'>
        <header>
          <h1 className='text-center font-heading text-4xl font-semibold text-gray-800 dark:text-gray-200 lg:text-5xl'>
            Fertility Lexicon
          </h1>
          <p className='font-contents mx-auto mt-4 max-w-3xl text-center text-lg text-gray-800 dark:text-gray-200'>
            Definitions of fertility and assisted reproductive technology terms, adapted from the
            ICMART glossary for quick reference.
          </p>

          <nav
            className={`sticky ${STICKY_TOP} z-30 -mx-4 mt-8 border-b border-gg-100 bg-white/95 px-4 py-4 backdrop-blur-sm dark:border-gray-600 dark:bg-gray-800/95 sm:mx-0`}
            aria-label='Glossary letter ranges'
          >
            <ul className='mx-auto flex max-w-4xl flex-row flex-wrap items-stretch justify-center gap-2 sm:flex-nowrap sm:gap-3'>
              {GLOSSARY_GROUPS.map((group) => {
                const isActive = activeGroupId === group.id;
                return (
                  <li key={group.id} className='min-w-[4.75rem] flex-1 sm:max-w-[7.5rem]'>
                    <button
                      type='button'
                      onClick={() => scrollToGroup(group.id)}
                      className={`h-full w-full rounded-md border-2 px-3 py-2.5 text-center font-content text-sm font-semibold transition-colors sm:px-4 ${
                        isActive
                          ? 'border-gg-800 bg-gg-800 text-white shadow-sm'
                          : 'border-gg-800 bg-white text-gg-800 hover:bg-gg-50 dark:border-gg-600 dark:bg-gray-800 dark:text-gg-200 dark:hover:bg-gray-700'
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
        </header>

        <div className='mt-8 lg:mt-10'>
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
                className='scroll-mt-36 pb-12 last:pb-4 lg:scroll-mt-28'
              >
                <h2 className='mb-6 border-b border-gg-200 pb-2 font-heading text-xl font-semibold text-gg-800 dark:border-gray-600 dark:text-gg-300'>
                  {group.label}
                </h2>
                <dl className='space-y-8'>
                  {entries.map((entry) => (
                    <div key={entry.term}>
                      <dt className='font-heading text-lg font-bold text-gg-800 dark:text-gg-300'>
                        {entry.term}
                      </dt>
                      {entry.definition ? (
                        <dd className='font-contents mt-2 text-base leading-relaxed text-gray-800 dark:text-gray-200'>
                          {entry.definition}
                        </dd>
                      ) : null}
                    </div>
                  ))}
                </dl>
              </section>
            );
          })}

          <p className='font-contents mt-8 border-t border-gray-200 pt-6 text-sm text-gray-600 dark:border-gray-600 dark:text-gray-400'>
            Source:{' '}
            <a
              href={GLOSSARY_SOURCE_URL}
              target='_blank'
              rel='noopener noreferrer'
              className='text-brandPink hover:text-brandPink2 hover:underline'
            >
              ICMART Glossary
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GlossaryContent;
