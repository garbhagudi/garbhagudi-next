import { useEffect, useState } from 'react';

/* True once the window `load` event has fired (immediately if it already has).
 * Lets non-critical client-only widgets mount after the first paint instead of
 * competing with it for main-thread time during hydration. */
export const useAfterLoad = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (document.readyState === 'complete') {
      setLoaded(true);
      return;
    }
    const onLoad = () => setLoaded(true);
    window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  }, []);
  return loaded;
};
