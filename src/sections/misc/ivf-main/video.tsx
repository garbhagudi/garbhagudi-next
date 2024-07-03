import React from 'react';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

const Video = () => {
  return (
    <div className='mx-auto px-3'>
      <h2 className='-mt-10 py-4 text-center font-heading text-2xl font-bold text-gray-800 dark:text-gray-200 lg:-mt-0 lg:text-4xl'>
        What is IVF and How is it Beneficial? Know from our Experts.
      </h2>
      <div className='mx-auto mt-8 aspect-video overflow-hidden rounded-3xl border-2 border-brandPink sm:px-0 md:w-4/6'>
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
