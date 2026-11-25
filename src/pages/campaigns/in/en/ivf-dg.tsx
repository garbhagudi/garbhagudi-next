import CampaignLandingPage from 'sections/campaigns-bangalore-en/CampaignLandingPage';
import { CAMPAIGNS } from 'sections/campaigns-bangalore-en/campaigns';

/* Demand Gen ad channel (Zoho Form 3) — see campaigns.ts. */
export default function IvfDgLandingPage() {
  return <CampaignLandingPage campaign={CAMPAIGNS.dgen} />;
}

/* Ads LP: no global nav/footer — see hideChrome in _app. The page brings its
 * own Header/Footer; the round phone/WhatsApp/SalesIQ widgets still come
 * from _app. */
IvfDgLandingPage.hideChrome = true;
/* The mobile FloatPhone bar sits over the hero banner, and the sticky Header
 * already carries the number (dash-ivf-next has no such bar). */
IvfDgLandingPage.hideFloatPhone = true;
