import { useEffect, useState } from 'react';
import 'styles/globals.css';
import 'styles/calendar.css';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Script from 'next/script';
import { SpeedInsights } from '@vercel/speed-insights/next';
import ThemeProvider from 'styles/theme-provider';
import TagManager from 'react-gtm-module';
import RootLayout from 'components/layout';

// Dynamically import components
const Footer = dynamic(() => import('components/footer/footer'), { ssr: false });
const Nav = dynamic(() => import('components/header/header'), { ssr: true });
const Salesiq = dynamic(() => import('components/SalesIQ'), { ssr: false });
const Loading = dynamic(() => import('components/Loading'), { ssr: true });
const FloatPhone = dynamic(() => import('components/FloatPhone'), { ssr: false });

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const noRenderPaths = [
    '/ivf/landing',
    '/lp/ivf-enquiry-form',
    '/lp/ivf-enquiry-form-call',
    '/ivf/yoga',
    '/lp/dh/enquiry',
    '/lp/itwmedia/enquiry',
    '/lp/newsfirstdigital/enquiry',
    '/lp/egg-freezing',
  ];

  const shouldDisplay = !noRenderPaths.includes(router.pathname);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-5T77DVZ' });
  }, []);

  useEffect(() => {
    const start = () => setLoading(true);
    const end = () => setLoading(false);
    router.events.on('routeChangeStart', start);
    router.events.on('routeChangeComplete', end);
    router.events.on('routeChangeError', end);
    return () => {
      router.events.off('routeChangeStart', start);
      router.events.off('routeChangeComplete', end);
      router.events.off('routeChangeError', end);
    };
  }, [router.events]);

  const path = router.asPath.endsWith('/index') ? '' : router.asPath;

  return (
    <RootLayout>
      <Head>
        <link rel='alternate' href={`https://www.garbhagudi.com${path}`} hrefLang='en-us' />
        <link rel='canonical' href={`https://www.garbhagudi.com${path}`} />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
        />
        <meta httpEquiv='content-language' content='en-gb' />
        <meta
          name='robots'
          content='follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:standard'
        />
      </Head>

      {/* GTM Script in Head */}
      <Script id='gtm-head' strategy='afterInteractive'>
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5T77DVZ');
        `}
      </Script>

      {/* GTM noscript fallback */}
      <noscript>
        <iframe
          src='https://www.googletagmanager.com/ns.html?id=GTM-5T77DVZ'
          height='0'
          width='0'
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>

      <ThemeProvider attribute='class' defaultTheme='light'>
        {loading ? (
          <Loading />
        ) : (
          <div className='min-h-screen selection:bg-gg-500 selection:text-white dark:bg-gray-800'>
            {shouldDisplay && <Nav />}
            <Component {...pageProps} />
            <Footer />
          </div>
        )}
        {shouldDisplay && (
          <Salesiq
            widgetCode='93210c756ea31b2224df734860e5d813b081008ce54deb21426241464ccb8de2e6558490d76d66086d0b48b1ed4abff0'
            domain='https://salesiq.zoho.com/widget'
          />
        )}
      </ThemeProvider>
      <SpeedInsights />
      <FloatPhone />
    </RootLayout>
  );
}

export default MyApp;
