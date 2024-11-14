import React from 'react';
import Content from 'sections/fertility/content';
import CTA from 'sections/fertility/cta';
import Expects from 'sections/fertility/Expects';
import Faq from 'sections/fertility/faq';
import FertilityTest from 'sections/fertility/FertilityTest';
import Freezing from 'sections/fertility/Freezing';
import Banner from 'sections/fertility/header';
import Header from 'sections/fertility/header';
import Journies from 'sections/fertility/journies';
import Overview from 'sections/fertility/overview';
import PlannedSteps from 'sections/fertility/PlannedSteps';

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
