import React from "react";
import Band from "sections/home/band";
import Features from "sections/home/features";
import Hero from "sections/home/hero";
import Overview from "sections/home/overview";
import Testimonial from "sections/home/testimonial";
import Video from "sections/home/video";
import Stat from "./home/stat";
import Band2 from "./home/band2";

const HomeComponent = () => {
  return (
    <div>
      <Band />
      <Hero />
      <Band2 />
      <Overview />
      <Video />
      <Features />
      <Stat />
      <Testimonial />
    </div>
  );
};

export default HomeComponent;
