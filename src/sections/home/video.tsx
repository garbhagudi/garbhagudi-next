import React from "react";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const data = [
  { id: 1, videoId: "xIvoIRASbgg" },
  { id: 2, videoId: "1chyB0TjnrM" },
  { id: 3, videoId: "IfhN2YhkEyU" },
  { id: 4, videoId: "yM439ewxSks" },
  { id: 5, videoId: "YVyaYhk8Hbk" },
  { id: 6, videoId: "Te1R9a0cc40" },
  { id: 7, videoId: "jlDAsrZWinI" },
  { id: 8, videoId: "QJLHWn1P_-Y" },
  { id: 9, videoId: "VaGyOFVn4H4" },
  { id: 10, videoId: "Djje6h177kU" },
];

const responsive = {
  superLargeDesktop: {
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
    <div className="max-w-7xl mx-auto  my-8">
      <h2 className="text-2xl lg:text-4xl font-extrabold text-brandDark font-heading flex items-center justify-center">
        Testimonials from our happy couples
      </h2>
      <div className="px-3 sm:px-0">
        <Carousel
          responsive={responsive}
          autoPlaySpeed={360000}
          focusOnSelect={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          ssr={true}
          infinite={true}
          showDots={true}
          swipeable={true}
          draggable={true}
        >
          {data.map((item) => {
            return (
              <div
                className="md:w-8/12 mx-auto aspect-video mt-8 overflow-hidden rounded-3xl border-2 border-brandPink sm:px-0"
                key={item.id}
              >
                <LiteYouTubeEmbed
                  id={item.videoId}
                  title="Successful IVF Treatment Testimonial | GarbhaGudi IVF Centre | Dr Asha S Vijay"
                  poster="maxresdefault"
                />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Video;
