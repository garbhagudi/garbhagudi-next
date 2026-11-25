import CampaignLandingPage from 'sections/campaigns-bangalore-en/CampaignLandingPage';
import { CAMPAIGNS } from 'sections/campaigns-bangalore-en/campaigns';

/* Performance Max ad channel (Zoho Form 2) — see campaigns.ts. */
export default function IvfPmLandingPage() {
  return <CampaignLandingPage campaign={CAMPAIGNS.pmax} />;
}

/* Ads LP: no global nav/footer — see hideChrome in _app. The page brings its
 * own Header/Footer; the round phone/WhatsApp/SalesIQ widgets still come
 * from _app. */
IvfPmLandingPage.hideChrome = true;
/* The mobile FloatPhone bar sits over the hero banner, and the sticky Header
 * already carries the number (dash-ivf-next has no such bar). */
IvfPmLandingPage.hideFloatPhone = true;
