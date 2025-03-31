import dynamic from 'next/dynamic';
import Banner from 'sections/egg-freezing/banner';
const Faq = dynamic(() => import('sections/egg-freezing/faq'), { ssr: false });
const FertilityTest = dynamic(() => import('sections/egg-freezing/FertilityTest'), { ssr: false });
const Freezing = dynamic(() => import('sections/egg-freezing/Freezing'), { ssr: false });
const CTA = dynamic(() => import('sections/infertility/cta'), { ssr: false });
const Expects = dynamic(() => import('sections/egg-freezing/Expects'), { ssr: false });
const Overview = dynamic(() => import('sections/egg-freezing/overview'), { ssr: false });
const PlannedSteps = dynamic(() => import('sections/egg-freezing/PlannedSteps'), { ssr: false });
const CreativeVideo = dynamic(() => import('sections/egg-freezing/creativeVideo'), { ssr: false });

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
