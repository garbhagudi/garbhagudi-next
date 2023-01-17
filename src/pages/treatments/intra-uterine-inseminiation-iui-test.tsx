import React from "react";
import CallToAction from "sections/misc/iui-main/CallToAction";
import Advantages from "sections/misc/iui-main/adv-disadv";
import Banner from "sections/misc/iui-main/banner";
import Content from "sections/misc/iui-main/content";
import Cost from "sections/misc/iui-main/cost";
import Faq from "sections/misc/iui-main/faq";
import ContentXtra from "sections/misc/iui-main/more-content";
import OurCentres from "sections/misc/iui-main/our-centres";
import Risks from "sections/misc/iui-main/risks";
// import Packages from "sections/misc/ivf-cost/packages";

type Props = {};

const Iui = (props: Props) => {
  return (
    <div>
      <Banner />
      <Content />
      <ContentXtra />
      <OurCentres />
      <CallToAction />
      {/* <Packages /> */}
      <Cost />
      <Faq />
      <Risks />
      <Advantages />
    </div>
  );
};

export default Iui;
