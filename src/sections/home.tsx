import React from 'react';
import Band from 'sections/home/band';
import Hero from 'sections/home/hero';
import Overview from 'sections/home/overview';
import dynamic from 'next/dynamic';
import Video from 'sections/home/video';
import Band2 from './home/band2';
import TreatmentOptions from './home/treatments';
const Features = dynamic(() => import('sections/home/features'));
const Stats = dynamic(() => import('./home/stats/stats'));
const WhyGG = dynamic(() => import('./home/whyGarbhaGudi'));
const Stat = dynamic(() => import('./home/stat'));
const BlogsSnip = dynamic(() => import('./home/newBlogs'));
const Testimonial = dynamic(() => import('sections/home/testimonial'));

const HomeComponent = ({ testimonialPassthrough, blogsPassthrough }) => {
  return (
    <div>
      <Band />
      <Hero />
      <Band2 />
      <TreatmentOptions />
      <Overview />
      <Video testimonials={testimonialPassthrough} />
      <Features />
      <Stats />
      <WhyGG />
      <Stat />
      <BlogsSnip posts={blogsPassthrough} />
      <Testimonial />
    </div>
  );
};

export default HomeComponent;
