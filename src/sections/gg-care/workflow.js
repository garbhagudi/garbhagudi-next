import React from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";

const Video = () => {
  return (
    <div>
      <main className="mx-auto max-w-7xl px-4 sm:px-6 mb-16 ">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1>
              <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl font-heading">
                <span className="block text-gray-900">GarbhaGudi’s</span>
                <span className="block text-brandPink3">Mission </span>
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-content">
              &quot;To provide reproductive health care of exceptional quality,
              within reach of every aspiring couple. We remain steadfast to
              achieving success and excellence in education, research, and
              healthcare for the welfare of humanity.&quot;
            </p>
          </div>
          <div className="mt-12 relative sm:max-w-fit sm:mx-auto lg:mt-0 lg:max-w-fit lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full aspect-video shadow-lg lg:max-w-fit rounded-3xl overflow-hidden">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/YnLULpvPIec"
                title="YouTube video player"
                frameBorder="0"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Video;
