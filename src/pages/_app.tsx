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
import FloatWhatsApp from 'components/FloatWhatsapp';

// Dynamically import components
const Footer = dynamic(() => import('components/footer/footer'), { ssr: false });
const Nav = dynamic(() => import('components/header/header'), { ssr: true });
const Salesiq = dynamic(() => import('components/SalesIQ'), { ssr: false });
const Loading = dynamic(() => import('components/Loading'), { ssr: true });
const FloatPhone = dynamic(() => import('components/FloatPhone'), { ssr: false });
const FloatRequestCallBack = dynamic(() => import('components/FloatRequestCallBack'), {
  ssr: false,
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const noRenderPaths = [
    '/ivf/landing',
    '/lp/ivf-enquiry-form',
    '/lp/ivf-enquiry-form-call',
    '/yoga',
    '/lp/ivf-enquiry-form',
    '/lp/itwmedia/enquiry',
    '/lp/egg-freezing',
    '/treatments/iui-treatment-in-bangalore',
  ];

  const iuiTreatmentPage = router.pathname === '/treatments/iui-treatment-in-bangalore';
  const ivfHomePage = router.pathname === '/ivf/home';
  const isParipoornaPage = router.pathname === '/features/paripoorna';

  const shouldDisplay = !noRenderPaths.includes(router.pathname);
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    const userAgent = typeof window !== 'undefined' ? navigator.userAgent : '';
    setIsMobile(/Mobi|Android/i.test(userAgent));
    setIsReady(true);
  }, []);

  const showSalesIQ = !(router.pathname === '/contact/enquiry' && isMobile);

  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-5T77DVZ' });
  }, [router.asPath]);

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
        <link rel='preconnect' href='https://salesiq.zoho.com' crossOrigin='anonymous' />
        <link rel='preconnect' href='https://media.graphassets.com' />
      </Head>
      <FloatPhone presentation={true}/>
      <ThemeProvider attribute='class' defaultTheme='light'>
        {loading ? (
          <Loading />
        ) : (
          <div className='min-h-screen selection:bg-gg-500 selection:text-white dark:bg-gray-800'>
            {shouldDisplay && <Nav />}
            <Component {...pageProps} />
            {!iuiTreatmentPage && <Footer />}
          </div>
        )}
        {shouldDisplay && showSalesIQ && (
          <Salesiq
            widgetCode='93210c756ea31b2224df734860e5d813b081008ce54deb21426241464ccb8de2e6558490d76d66086d0b48b1ed4abff0'
            domain='https://salesiq.zoho.com/widget'
          />
        )}
      </ThemeProvider>
      <SpeedInsights />
      {!isParipoornaPage && <FloatRequestCallBack />}
      {isReady && !iuiTreatmentPage && !ivfHomePage && <FloatWhatsApp />}
    </RootLayout>
  );
}

export default MyApp;
