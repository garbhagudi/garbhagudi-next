import CTA from 'sections/infertility/cta';
import Expects from 'sections/egg-freezing/Expects';
import Faq from 'sections/egg-freezing/faq';
import FertilityTest from 'sections/egg-freezing/FertilityTest';
import Freezing from 'sections/egg-freezing/Freezing';
import Banner from 'sections/egg-freezing/banner';
import Overview from 'sections/egg-freezing/overview';
import PlannedSteps from 'sections/egg-freezing/PlannedSteps';
import CreativeVideo from 'sections/egg-freezing/creativeVideo';

export default function fertility() {
  return (
    <div>
      <Banner />
      <Overview />
      <FertilityTest />
      <PlannedSteps />
      <Freezing />
      <CreativeVideo />
      <Expects />
      <Faq />
      <CTA />
    </div>
  );
}
