import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Tracks the active section while scrolling (IntersectionObserver) and exposes a
 * smooth `scrollToSection` for tab clicks. The orchestrator assigns each section
 * element into `sectionRefs` keyed by its id; section DOM ids are `guide-<id>`.
 */
export const useScrollSpy = (sectionIds: string[]) => {
  const [activeTab, setActiveTab] = useState(sectionIds[0]);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const isScrollingRef = useRef(false);
  const sectionIdsRef = useRef(sectionIds);
  sectionIdsRef.current = sectionIds;

  const scrollToSection = useCallback((id: string) => {
    setActiveTab(id);
    isScrollingRef.current = true;
    sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.setTimeout(() => {
      isScrollingRef.current = false;
    }, 700);
  }, []);

  useEffect(() => {
    const sections = sectionIdsRef.current
      .map((id) => sectionRefs.current[id])
      .filter(Boolean) as HTMLElement[];
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrollingRef.current) return;
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActiveTab(visible.target.id.replace('guide-', ''));
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.1, 0.25] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return { activeTab, scrollToSection, sectionRefs };
};
