import { useEffect, useState } from 'react';
import 'styles/globals.css';
import 'styles/calendar.css';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { SpeedInsights } from '@vercel/speed-insights/next';
import ThemeProvider from 'styles/theme-provider';
import TagManager from 'react-gtm-module';
import RootLayout from 'components/layout';
import { messaging } from '../lib/firebase';
import { getToken, onMessage } from 'firebase/messaging';

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

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/firebase-messaging-sw.js')
        .then((registration) => console.log('Service Worker Registered:', registration))
        .catch((err) => console.log('Service Worker Registration Failed:', err));
    }

    // Request permission for notifications
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        getToken(messaging, {
          vapidKey:
            'BNGV3g77lvG1L6ntiFsusKoCv2UyLMEUDBpusQ0JyVHuVQKyX6g-ZPR99P4J7RnYP03nM1WGkUdGH_eeOdPZrIE',
        })
          .then((currentToken) => {
            if (currentToken) {
              console.log('Notification Token:', currentToken);
              // Send token to backend for storage
            } else {
              console.log('No registration token available.');
            }
          })
          .catch((err) => console.log('Error retrieving token:', err));
      }
    });

    // Handle foreground messages
    onMessage(messaging, (payload) => {
      console.log('Foreground Message:', payload);
      alert(`New Notification: ${payload.notification.title}`);
    });
  }, []);

  const path = router.asPath.endsWith('/index') ? '' : router.asPath;

  return (
    <RootLayout>
      <Head>
        <link rel='alternative' href={`https://www.garbhagudi.com${path}`} hrefLang='en-us' />
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
      <ThemeProvider attribute='class' defaultTheme='light'>
        {loading ? (
          <Loading />
        ) : (
          <div className={`min-h-screen selection:bg-gg-500 selection:text-white dark:bg-gray-800`}>
            {shouldDisplay && <Nav />}
            <Component {...pageProps} />
            <Footer />
          </div>
        )}
        {shouldDisplay && (
          <Salesiq
            widgetCode={
              '93210c756ea31b2224df734860e5d813b081008ce54deb21426241464ccb8de2e6558490d76d66086d0b48b1ed4abff0'
            }
            domain={'https://salesiq.zoho.com/widget'}
          />
        )}
      </ThemeProvider>
      <SpeedInsights />
      <FloatPhone />
    </RootLayout>
  );
}

export default MyApp;
