import React from "react";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const data = [
  {
    id: 1,
    videoId: "YVyaYhk8Hbk",
  },
  {
    id: 2,
    videoId: "fWxE9RgqV3s",
  },
  {
    id: 3,
    videoId: "roacYWKHT-A",
  },
  {
    id: 4,
    videoId: "vKZvYIjmRZI",
  },
  {
    id: 5,
    videoId: "QJLHWn1P_-Y",
  },
  {
    id: 6,
    videoId: "j738P57hje4",
  },
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 560, min: 0 },
    items: 1,
  },
};

const Video = () => {
  return (
    <div className="container mx-auto text-center py-8">
      <span className="text-2xl lg:text-4xl font-extrabold text-brandDark font-heading">
        Testimonials from our happy couples.
      </span>
      <Carousel
        responsive={responsive}
        ssr={true}
        infinite={true}
        thumbnail={true}
      >
        {data.map((item) => {
          return (
            <div
              className="w-11/12 md:w-1/2 mx-auto aspect-w-21 aspect-h-10 mt-8 border-1 overflow-hidden rounded-3xl"
              key={item.id}
            >
              <LiteYouTubeEmbed
                id={item.videoId}
                title="Successful IVF Treatment Testimonial | GarbhaGudi IVF Centre | Dr Asha S Vijay"
                poster="hqdefault"
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Video;
