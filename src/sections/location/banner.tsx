import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div>
      <div className="bg-[#FEF2F4] border-b-2 shadow-2xl ">
        <div className="h-[40vh] mx-auto max-w-4xl flex items-center ">
          <div className="absolute z-10">
            <div className="text-center md:text-left w-full md:max-w-lg text-base px-6 mx-auto">
              <div className="text-4xl font-heading font-bold leading-tight">
                Welcome to GarbhaGudi!
              </div>
              <div className="mt-4 font-semibold font-content leading-7">
                We are proud to offer infertility treatment at 5 locations
                across Bangalore. <br />
                Please contact us today to learn more about our services and
                find the location nearest you.
              </div>
            </div>
          </div>
          <Image
            src={
              "https://res.cloudinary.com/garbhagudiivf/image/upload/v1674806806/Misc/tour_set_2-min_z6xn29.jpg"
            }
            alt="location banner"
            height={1920}
            width={1080}
            className="object-contain h-[40vh] mx-auto relative blur-sm md:blur-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
