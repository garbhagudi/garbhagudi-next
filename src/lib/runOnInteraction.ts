const EVENTS = ['scroll', 'pointerdown', 'keydown', 'touchstart'];

/* Runs `fn` once, on the visitor's first scroll/tap/keypress or after `delayMs`,
 * whichever comes first. Keeps third-party widgets off the initial load path. */
export const runOnInteraction = (fn: () => void, delayMs = 6000) => {
  let done = false;
  let timer: ReturnType<typeof setTimeout>;
  const run = () => {
    if (done) return;
    done = true;
    clearTimeout(timer);
    EVENTS.forEach((e) => window.removeEventListener(e, run));
    fn();
  };
  EVENTS.forEach((e) => window.addEventListener(e, run, { passive: true, once: true }));
  timer = setTimeout(run, delayMs);
  return () => {
    done = true;
    clearTimeout(timer);
    EVENTS.forEach((e) => window.removeEventListener(e, run));
  };
};
