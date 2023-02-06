import React from "react";
import Image from "next/image";
import Link from "next/link";

const Banner = ({ branchTitle }) => {
  return (
    <div>
      <div className="bg-[#FEF2F4] border-b-2 shadow-2xl py-6">
        <div className="h-[40vh] mx-auto max-w-5xl flex items-center ">
          <div className="absolute z-10">
            <div className="text-center md:text-left w-full md:max-w-lg text-base px-6 mx-auto">
              <h1 className="text-xl lg:text-2xl font-heading font-bold leading-tight">
                Welcome to GarbhaGudi IVF Centre! <br />
                {branchTitle}
              </h1>
              <h3 className="mt-4 font-semibold font-content leading-7">
                We are proud to offer infertility treatment at 5 locations
                across Bangalore. <br />
                Please contact us today to learn more about our services and
                find the location nearest you.
              </h3>
            </div>
            <div className="lg:text-left lg:px-6 text-center">
              <button className="px-4 mt-4 font-content font-semibold text-white py-2 bg-brandPink hover:bg-brandPink4 rounded-lg">
                <Link href={"/gg-care"}>Contact Us</Link>
              </button>
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
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
