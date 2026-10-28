import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import { useEffect } from 'react';
import { generateBreadcrumbSchema } from 'lib/schema-utils';

/*
 * Paripoorna 2026 landing page.
 *  - Markup:  src/content/paripoorna/landing.html  (replace this file to change the page)
 *  - Styles:  public/paripoorna/paripoorna.css     (every rule is scoped under `.pp-lp`)
 *  - Images:  public/paripoorna/*
 * The HTML's own header/footer are removed; the site's Nav/Footer are used.
 */

const TITLE = 'Paripoorna | ₹1,75,000* for IVF cycle';
const DESCRIPTION =
  'Paripoorna 2026 by GarbhaGudi IVF Centre — understand your fertility journey and, when IVF is advised, clearly defined IVF care with medication included. Call 9108 9108 32.';
const OG_IMAGE =
  'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8vp44h5aq707pl7oyfbuqd';

export async function getStaticProps() {
  const html = fs.readFileSync(
    path.join(process.cwd(), 'src', 'content', 'paripoorna', 'landing.html'),
    'utf8'
  );
  return { props: { html } };
}

const Paripoorna = ({ html }: { html: string }) => {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.garbhagudi.com/' },
    { name: 'Features', url: 'https://www.garbhagudi.com/features' },
    { name: 'Paripoorna', url: 'https://www.garbhagudi.com/features/paripoorna' },
  ]);

  // Behaviour of the original landing page: scroll reveals, FAQ accordion, sticky header + mobile bar.
  useEffect(() => {
    const root = document.querySelector('.pp-lp');
    if (!root) return;
    const cleanups: Array<() => void> = [];

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    root.querySelectorAll('.reveal, #track, .pops').forEach((el, i) => {
      if (el.closest('.steps,.list'))
        (el as HTMLElement).style.transitionDelay = (i % 4) * 90 + 'ms';
      io.observe(el);
    });
    cleanups.push(() => io.disconnect());

    // FAQ: one open at a time
    const faqs = Array.from(root.querySelectorAll<HTMLDetailsElement>('.faq-list details'));
    faqs.forEach((d) => {
      const onToggle = () => {
        if (d.open) faqs.forEach((o) => o !== d && (o.open = false));
      };
      d.addEventListener('toggle', onToggle);
      cleanups.push(() => d.removeEventListener('toggle', onToggle));
    });

    const mast = root.querySelector('#mast');
    const mbar = root.querySelector('#mbar2');
    const onScroll = () => {
      mast?.classList.toggle('scrolled', window.scrollY > 10);
      mbar?.classList.toggle('show', window.scrollY > 500);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    cleanups.push(() => window.removeEventListener('scroll', onScroll));

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1, viewport-fit=cover' />
        <title>{TITLE}</title>
        <meta name='title' content={TITLE} />
        <meta name='description' content={DESCRIPTION} />
        <meta name='theme-color' content='#ef4266' />
        <meta property='og:title' content={TITLE} />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://www.garbhagudi.com/features/paripoorna' />
        <meta property='og:description' content={DESCRIPTION} />
        <meta property='og:type' content='website' />
        <meta property='og:image' content={OG_IMAGE} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content={TITLE} />
        <meta name='twitter:description' content={DESCRIPTION} />
        <meta name='twitter:image' content={OG_IMAGE} />
        <link rel='canonical' href='https://garbhagudi.com/features/paripoorna' />
        <link rel='preload' as='image' href='/paripoorna/hero-pregnancy-test.jpg' />
        <link rel='stylesheet' href='/paripoorna/paripoorna.css' />
        {/* page-level scroll behaviour of the landing page (removed again on navigation) */}
        <style>{`html{scroll-behavior:smooth;scroll-padding-top:90px}@media (max-width:640px){html{scroll-padding-top:74px}}`}</style>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
          id='breadcrumbs-jsonld'
        />
      </Head>
      <div className='pp-lp' dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
};

export default Paripoorna;
