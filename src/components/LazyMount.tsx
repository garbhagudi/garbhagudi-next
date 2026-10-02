import { ReactNode, RefObject, useEffect, useRef, useState } from 'react';

/** True once `ref` is within `margin` of the viewport (or immediately without IntersectionObserver). */
export const useNearViewport = (ref: RefObject<HTMLElement>, margin: string) => {
  const [near, setNear] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setNear(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setNear(true);
          observer.disconnect();
        }
      },
      { rootMargin: margin }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [ref, margin]);
  return near;
};

interface LazyMountProps {
  children: ReactNode;
  /** Height reserved until the section mounts, so the page keeps roughly its final length. */
  minHeight?: number;
  /** How far outside the viewport the section starts mounting. */
  margin?: string;
}

/**
 * Renders `children` only once the placeholder is near the viewport, so below-the-fold
 * sections do not load their JS or build their DOM during the initial page load.
 */
const LazyMount = ({ children, minHeight = 400, margin = '800px 0px' }: LazyMountProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const near = useNearViewport(ref, margin);

  if (near) return <>{children}</>;
  return <div ref={ref} aria-hidden='true' style={{ minHeight }} />;
};

export default LazyMount;
