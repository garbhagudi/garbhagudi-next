import Head from 'next/head';
import { thankYouCss } from 'sections/thank-you/styles';
import ThankYouNav from 'sections/thank-you/nav';
import ThankYouHero from 'sections/thank-you/hero';
import ThankYouSteps from 'sections/thank-you/steps';
import ThankYouWhatsAppStrip from 'sections/thank-you/whatsapp-strip';
import ThankYouVideos from 'sections/thank-you/videos';
import ThankYouFooter from 'sections/thank-you/footer';

function ThankYouPage() {
  return (
    <>
      <Head>
        <title>Thank You – GarbhaGudi IVF Centre</title>
        <meta name='robots' content='noindex, nofollow' key='robots' />
        <link
          href='https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500&display=swap'
          rel='stylesheet'
        />
        <style dangerouslySetInnerHTML={{ __html: thankYouCss }} />
      </Head>

      <div id='ty-root'>
        <ThankYouNav />
        <ThankYouHero />
        <div className='divider' />
        <ThankYouSteps />
        <div className='divider' />
        <ThankYouWhatsAppStrip />
        <ThankYouVideos />
        <ThankYouFooter />
      </div>
    </>
  );
}

/* Own fixed nav/hero/footer — opt out of global chrome, mirrors
 * ivf-centre-bangalore.tsx and ivf-treatment.tsx. See hideChrome in _app. */
ThankYouPage.hideChrome = true;

export default ThankYouPage;
