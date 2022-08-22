import React from "react";
import Band from "sections/home/band";
import Features from "sections/home/features";
import Hero from "sections/home/hero";
import Overview from "sections/home/overview";
import Testimonial from "sections/home/testimonial";
import Video from "sections/home/video";
// import Stat from "./home/stat";
import Stats from "./home/stats/stats";
import Band2 from "./home/band2";
import News from "sections/home/news";
import Stat from "./home/stat";

const HomeComponent = () => {
  return (
    <div>
      <Band />
      <Hero />
      <Band2 />
      <News />
      <Overview />
      <Video />
      <Features />
      <Stats />
      <Stat />
      <Testimonial />
    </div>
  );
};

export default HomeComponent;
