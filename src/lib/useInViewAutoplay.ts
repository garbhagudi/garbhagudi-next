import { useEffect, useRef, useState } from 'react';

/* Runs a carousel's autoplay only while its container is on screen, so the
 * interval isn't advancing slides (and re-rendering) for a section the
 * visitor can't see. `startDelayMs` defers the very first start, e.g. to
 * let the section settle before it begins moving. */
const useInViewAutoplay = (startDelayMs = 0) => {
  const ref = useRef<HTMLDivElement>(null);
  const [autoplay, setAutoplay] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    let timer: ReturnType<typeof setTimeout>;
    let started = false;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        timer = setTimeout(
          () => {
            started = true;
            setAutoplay(true);
          },
          started ? 0 : startDelayMs
        );
      } else {
        clearTimeout(timer);
        setAutoplay(false);
      }
    });
    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [startDelayMs]);

  return { ref, autoplay };
};

export default useInViewAutoplay;
