import React from "react";
import Link from "next/link";
import { FaSearchLocation, FaLocationArrow } from "react-icons/fa";

const FindBranch = () => {
  return (
    <div>
      <h4 className="text-4xl text-center px-2 font-heading py-6 font-bold">
        Find the nearest Branch
      </h4>
      <div className="flex flex-wrap gap-4 items-center justify-center">
        <Link href={"/gg-care/search-branch-by-pincode"}>
          <div className="aspect-square w-64 h-64 relative flex items-center justify-center flex-col group hover:-translate-x-2 hover:-translate-y-2 transition-all duration-200">
            <h6 className="font-content text-lg">Search by Pincode</h6>
            <div className="absolute bg-purple-300 group-hover:bg-brandPink4 h-full w-full opacity-25 transition-all duration-200"></div>
            <FaSearchLocation className="text-7xl mt-4 text-brandPurpleDark group-hover:text-brandPink group-hover:text-8xl transition-all duration-200" />
          </div>
        </Link>
        <Link href={"/gg-care/search-branch-by-current-location"}>
          <div className="aspect-square w-64 h-64 relative flex items-center justify-center flex-col group hover:translate-x-2 hover:translate-y-2 transition-all duration-200">
            <h6 className="font-content text-lg">Search by Current Location</h6>
            <div className="absolute bg-purple-300 h-full w-full opacity-25 group-hover:bg-brandPink4 transition-all duration-200"></div>
            <FaLocationArrow className="text-7xl mt-4 text-brandPurpleDark group-hover:text-brandPink group-hover:text-8xl transition-all duration-200" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FindBranch;
