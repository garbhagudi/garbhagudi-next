import Band from 'sections/home/band';
import Hero from 'sections/home/hero';
import dynamic from 'next/dynamic';
const Overview = dynamic(() => import('sections/home/overview'), { ssr: false });
const Video = dynamic(() => import('sections/home/video'), { ssr: false });
const Band2 = dynamic(() => import('./home/band2'), { ssr: false });
const TreatmentOptions = dynamic(() => import('./home/treatments'), { ssr: false });
const Features = dynamic(() => import('sections/home/features'), { ssr: false });
const Stats = dynamic(() => import('./home/stats/stats'), { ssr: false });
const WhyGG = dynamic(() => import('./home/whyGarbhaGudi'), { ssr: false });
const Stat = dynamic(() => import('./home/stat'), { ssr: false });
const BlogsSnip = dynamic(() => import('./home/newBlogs'), { ssr: false });
const Testimonial = dynamic(() => import('sections/home/testimonial'), { ssr: false });

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
