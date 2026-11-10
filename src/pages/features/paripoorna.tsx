import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import { CloseButton, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import Form from 'sections/LandingPages/Performant/form';
import { generateBreadcrumbSchema } from 'lib/schema-utils';

const TITLE = 'Paripoorna 2026 | ₹1,75,000* for IVF cycle';
const DESCRIPTION =
  'Paripoorna 2026 by GarbhaGudi IVF Centre — understand your fertility journey and, when IVF is advised, clearly defined IVF care with medication included. Call 9108 9108 32.';
const OG_IMAGE =
  'https://ap-south-1.graphassets.com/ATvkR6mxuRke4HGT9LQrhz/cms8vp44h5aq707pl7oyfbuqd';
// Paripoorna reel: https://www.instagram.com/reel/DfjoWqUyjqL/
const REEL_EMBED_URL = 'https://www.instagram.com/reel/DfjoWqUyjqL/embed';

export async function getStaticProps() {
  const html = fs.readFileSync(
    path.join(process.cwd(), 'src', 'content', 'paripoorna', 'landing.html'),
    'utf8'
  );
  return { props: { html } };
}

const Paripoorna = ({ html }: { html: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  // Lets the scroll observer below skip the video while the enquiry form is open
  const formOpenRef = useRef(false);
  formOpenRef.current = isOpen;
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

    // Any [data-open-form] link opens the enquiry popup instead of navigating (href is the no-JS fallback)
    const onClick = (e: Event) => {
      const trigger = (e.target as HTMLElement).closest('[data-open-form]');
      if (!trigger) return;
      e.preventDefault();
      setIsOpen(true);
    };
    root.addEventListener('click', onClick);
    cleanups.push(() => root.removeEventListener('click', onClick));

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

    // Video modal: auto-opens once per page load when the whole Paripoorna section is on screen
    // (or, where the section is taller than the screen, e.g. on phones, when it fills the screen)
    const ppSection = root.querySelector('#paripoorna');
    if (ppSection) {
      const videoIo = new IntersectionObserver(
        (entries) => {
          const e = entries[entries.length - 1];
          const viewportH = e.rootBounds?.height ?? window.innerHeight;
          const fullyVisible =
            e.intersectionRatio >= 0.98 || e.intersectionRect.height >= viewportH * 0.9;
          if (!fullyVisible || formOpenRef.current) return;
          setVideoOpen(true);
          videoIo.disconnect();
        },
        // top margin keeps the part hidden under the fixed header from counting as visible
        { threshold: Array.from({ length: 21 }, (_, i) => i / 20), rootMargin: '-80px 0px 0px 0px' }
      );
      videoIo.observe(ppSection);
      cleanups.push(() => videoIo.disconnect());
    }

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
      <Dialog
        open={isOpen}
        as='div'
        className='relative z-[100] focus:outline-none'
        onClose={() => setIsOpen(false)}
      >
        <div
          className='fixed inset-0 bg-black/80 transition-opacity duration-300 ease-out'
          onClick={() => setIsOpen(false)}
        ></div>
        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center px-3 pt-8'>
            <DialogPanel
              transition
              className='max-w-md rounded-xl bg-gray-800 pb-4 shadow-[0_0_15px_5px_rgba(0,0,0,0.3)] transition-shadow duration-300 ease-out hover:shadow-[0_0_25px_10px_rgba(0,0,0,0.5)] data-[closed]:scale-95 data-[closed]:opacity-0'
            >
              <Form />
            </DialogPanel>
          </div>
        </div>
      </Dialog>
      <Dialog
        open={videoOpen}
        as='div'
        className='relative z-[100]'
        onClose={() => setVideoOpen(false)}
      >
        <DialogBackdrop
          transition
          className='fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ease-out data-[closed]:opacity-0 data-[leave]:duration-200 data-[leave]:ease-in'
        />
        <div className='fixed inset-0 flex items-center justify-center p-3 md:p-6'>
          <DialogPanel
            transition
            className='w-full max-w-4xl overflow-hidden rounded-xl bg-white shadow-2xl transition duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] data-[closed]:translate-y-8 data-[closed]:scale-[0.85] data-[closed]:opacity-0 data-[leave]:duration-200 data-[leave]:ease-in'
          >
            <div className='flex items-center justify-between gap-3 border-b px-4 py-3'>
              <DialogTitle className='line-clamp-1 font-heading text-lg font-bold'>
                Paripoorna 2026
              </DialogTitle>
              <CloseButton aria-label='Close' className='text-gray-600 hover:text-brandPink'>
                <IoIosCloseCircleOutline fontSize={28} />
              </CloseButton>
            </div>
            <iframe
              src={REEL_EMBED_URL}
              title='Paripoorna 2026'
              className='h-[min(680px,calc(100vh-8rem))] w-full border-0 bg-white'
              allow='autoplay; encrypted-media; picture-in-picture; fullscreen'
              allowFullScreen
            />
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};
Paripoorna.hideChrome = true;
Paripoorna.hideFloatPhone = true;

export default Paripoorna;
