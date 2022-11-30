import React from "react";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import Cta from "sections/gg-care/cta";
import FAQ from "sections/paripoorna/faq";
import Home from "sections/paripoorna/home";
import Steps from "sections/paripoorna/steps";
import TermsConditions from "sections/paripoorna/tandc";

const Paripoorna = () => {
  return (
    <div className="bg-[url('https://res.cloudinary.com/garbhagudiivf/image/upload/v1669643962/Banner/Bunting_kgdona.webp')] bg-no-repeat bg-contain overflow-x-hidden">
      <Home />
      <Steps />
      <FAQ />
      <TermsConditions />
      <Cta />
    </div>
  );
};
export default Paripoorna;
