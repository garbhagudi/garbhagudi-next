const EVENTS = ['scroll', 'pointerdown', 'keydown', 'touchstart'];

/* Runs `fn` once, on the visitor's first scroll/tap/keypress or after `delayMs`,
 * whichever comes first. Keeps third-party widgets off the initial load path. */
export const runOnInteraction = (fn: () => void, delayMs = 6000) => {
  let done = false;
  const cancel = () => {
    done = true;
    clearTimeout(timer);
    EVENTS.forEach((e) => window.removeEventListener(e, run));
  };
  const run = () => {
    if (done) return;
    cancel();
    fn();
  };
  EVENTS.forEach((e) => window.addEventListener(e, run, { passive: true, once: true }));
  const timer = setTimeout(run, delayMs);
  return cancel;
};
