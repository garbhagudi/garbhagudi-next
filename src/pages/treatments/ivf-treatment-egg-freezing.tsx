import React from 'react';
import Content from 'sections/egg-freezing/content';
import CTA from 'sections/egg-freezing/cta';
import Expects from 'sections/egg-freezing/Expects';
import Faq from 'sections/egg-freezing/faq';
import FertilityTest from 'sections/egg-freezing/FertilityTest';
import Freezing from 'sections/egg-freezing/Freezing';
import Banner from 'sections/egg-freezing/banner';
import Header from 'sections/egg-freezing/banner';
import Journies from 'sections/egg-freezing/journies';
import Overview from 'sections/egg-freezing/overview';
import PlannedSteps from 'sections/egg-freezing/PlannedSteps';

export default function fertility() {
  return (
    <div>
      <Banner />
      <Content />
      <Overview />
      <FertilityTest />
      <PlannedSteps />
      <Freezing />
      <Expects />
      <Journies />
      <Faq/>
      <CTA />
    </div>
  );
}
