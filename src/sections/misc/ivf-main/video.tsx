import React from 'react';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

const Video = () => {
  return (
    <div className='mx-auto px-3'>
      <h2 className='text-2xl lg:text-4xl font-heading font-bold text-center -mt-10 lg:-mt-0 py-4'>
        What is IVF and How is it Beneficial? Know from our Experts.
      </h2>
      <div className='md:w-4/6 mx-auto aspect-video mt-8 overflow-hidden rounded-3xl border-2 border-brandPink sm:px-0'>
        <LiteYouTubeEmbed
          id='b2tdqev4DpQ'
          title='Successful IVF Treatment Testimonial | GarbhaGudi IVF Centre | Dr Asha S Vijay'
          poster='maxresdefault'
        />
      </div>
    </div>
  );
};

export default Video;
