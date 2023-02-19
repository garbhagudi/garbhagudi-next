import React from "react";
import Image from "next/image";
import Link from "next/link";

const Banner = ({ branchTitle }) => {
  return (
    <div>
      <div className="bg-[url(https://res.cloudinary.com/garbhagudiivf/image/upload/v1672381537/Misc/happy-pregnant-woman-late-pregnancy-stage-sitting-grass-lawn-min_11zon_xkeac0.webp)] bg-cover bg-right sm:bg-center bg-no-repeat shadow-2xl">
        <div className="w-full h-full bg-gradient-to-r from-white to-transparent py-6">
          <div className="h-[50vh] mx-auto max-w-5xl flex items-center">
            <div className="absolute z-10">
              <div className="text-center md:text-left w-full md:max-w-lg text-base px-3 mx-auto">
                <h1 className="text-3xl lg:text-4xl font-heading font-bold leading-tight">
                  Welcome to GarbhaGudi IVF Centre! <br />
                  <span className="text-brandPink">{branchTitle}</span>
                </h1>
                <h3 className="mt-4 font-semibold font-content leading-7">
                  We are proud to offer infertility treatment at 5 locations
                  across Bangalore. <br />
                  Please contact us today to learn more about our services and
                  find the location nearest you.
                </h3>
              </div>
              <div className="lg:text-left lg:px-3 text-center">
                <button className="px-4 mt-4 font-content font-semibold text-white py-2 bg-brandPink hover:bg-brandPink4 rounded-lg">
                  <Link href={"/gg-care"}>Contact Us</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
