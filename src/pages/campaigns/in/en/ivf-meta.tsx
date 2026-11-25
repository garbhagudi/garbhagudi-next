import CampaignLandingPage from 'sections/campaigns-bangalore-en/CampaignLandingPage';
import { CAMPAIGNS } from 'sections/campaigns-bangalore-en/campaigns';

/* Meta ad channel (Zoho Form 4) — see campaigns.ts. */
export default function IvfMetaLandingPage() {
  return <CampaignLandingPage campaign={CAMPAIGNS.meta} />;
}

/* Ads LP: no global nav/footer — see hideChrome in _app. The page brings its
 * own Header/Footer; the round phone/WhatsApp/SalesIQ widgets still come
 * from _app. */
IvfMetaLandingPage.hideChrome = true;
/* The mobile FloatPhone bar sits over the hero banner, and the sticky Header
 * already carries the number (dash-ivf-next has no such bar). */
IvfMetaLandingPage.hideFloatPhone = true;
