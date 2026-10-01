// Ambient declaration for plain (non-module) CSS side-effect imports such as
// `import 'styles/globals.css'`. Next.js already types `*.module.css`; without this,
// editors with `noUncheckedSideEffectImports` (newer TypeScript) underline these imports in red.
// Types only: nothing is emitted, and the bundler still handles the CSS as before.
declare module '*.css';
