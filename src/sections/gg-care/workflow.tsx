import React from 'react';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

const Video = () => {
  return (
    <div>
      <main className='mx-auto mb-16 max-w-7xl px-4 sm:px-6'>
        <div className='lg:grid lg:grid-cols-12 lg:gap-8'>
          <div className='flex flex-col items-start justify-center sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left'>
            <div>
              <div className='mt-1 block font-heading text-4xl font-extrabold tracking-tight sm:text-4xl xl:text-5xl'>
                <h1 className='space-x-3'>
                  <span className='text-gray-800 dark:text-gray-200'>
                    GarbhaGudi’s
                  </span>
                  <span className='text-gg-400'>Mission </span>
                </h1>
              </div>
            </div>
            <p className='mt-3 font-content text-base text-gray-500 dark:text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
              &quot;To provide reproductive health care of exceptional quality,
              within reach of every aspiring couple. We remain steadfast to
              achieving success and excellence in education, research, and
              healthcare for the welfare of humanity.&quot;
            </p>
          </div>
          <div className='relative mt-12 sm:mx-auto sm:max-w-xl lg:col-span-6 lg:mx-0 lg:mt-0 lg:max-w-xl'>
            <div className='relative mx-auto aspect-video w-full overflow-hidden rounded-lg shadow-lg'>
              <LiteYouTubeEmbed
                id='3l4gWsVlhE4'
                title='Successful IVF Treatment Testimonial | GarbhaGudi IVF Centre | Dr Asha S Vijay'
                poster='maxresdefault'
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Video;
