import Band from 'sections/home/band';
import Hero from 'sections/home/hero';
import dynamic from 'next/dynamic';
import LazyMount from 'components/LazyMount';
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

// Everything below the hero mounts only when the visitor scrolls near it (LazyMount), so its
// JS chunk, DOM and hydration work stay off the critical path.
const HomeComponent = ({ testimonialPassthrough, blogsPassthrough }) => {
  return (
    <div>
      <Band />
      <Hero />
      <Band2 />
      <LazyMount minHeight={500}>
        <TreatmentOptions />
      </LazyMount>
      <LazyMount minHeight={500}>
        <Overview />
      </LazyMount>
      <LazyMount minHeight={600}>
        <Video testimonials={testimonialPassthrough} />
      </LazyMount>
      <LazyMount minHeight={600}>
        <Features />
      </LazyMount>
      <LazyMount minHeight={400}>
        <Stats />
      </LazyMount>
      <LazyMount minHeight={600}>
        <WhyGG />
      </LazyMount>
      <LazyMount minHeight={300}>
        <Stat />
      </LazyMount>
      <LazyMount minHeight={600}>
        <BlogsSnip posts={blogsPassthrough} />
      </LazyMount>
      <LazyMount minHeight={500}>
        <Testimonial />
      </LazyMount>
    </div>
  );
};

export default HomeComponent;
