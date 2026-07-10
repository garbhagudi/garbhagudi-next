/* Duplicate of /lp/ivf-centre-bangalore served at /lp/ivf-treatment for a
 * separate ads campaign. Both pages are noindexed (robots meta lives in the
 * shared component). */
import IvfCentreLandingPage, { getStaticProps } from './ivf-centre-bangalore';

export { getStaticProps };

export default function IvfTreatmentLandingPage(props) {
  return <IvfCentreLandingPage {...props} pageUrl='https://www.garbhagudi.com/lp/ivf-treatment' />;
}

/* Ads LP: no global nav/footer/floating widgets — see hideChrome in _app. */
IvfTreatmentLandingPage.hideChrome = true;
