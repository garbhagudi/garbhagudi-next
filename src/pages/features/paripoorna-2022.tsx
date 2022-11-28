import React from "react";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import FAQ from "sections/paripoorna/faq";
import Home from "sections/paripoorna/home";
import Steps from "sections/paripoorna/steps";
import TermsConditions from "sections/paripoorna/tandc";

const Paripoorna = () => {
  return (
    <div className="overflow-x-hidden">
      <Home />
      <Steps />
      <TermsConditions />
      <FAQ />
    </div>
  );
};
export default Paripoorna;
