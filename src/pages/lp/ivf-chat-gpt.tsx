import IvfCentreLandingPage, { getStaticProps } from './ivf-centre-bangalore';

export { getStaticProps };

export default function IvfChatGptLandingPage(props) {
  return (
    <IvfCentreLandingPage
      {...props}
      pageUrl='https://www.garbhagudi.com/lp/ivf-chat-gpt'
      useGptForm
    />
  );
}

/* Ads LP: no global nav/footer/floating widgets — see hideChrome in _app. */
IvfChatGptLandingPage.hideChrome = true;
