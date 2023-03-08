import React from "react";
import Link from "next/link";

const Band2 = () => {
  return (
    <div className="max-w-7xl mx-auto px-3 my-4 sm:px-6 lg:px-4 border-b border-t border-gray-300 ">
      <span className="text-md block text-center mx-auto font-content font-bold py-2">
        <div className="block md:inline-block">
          <h3 className="text-gray-900">
            GarbhaGudi{" "}
            <Link href={"/"} className="text-brandPink hover:underline">
              IVF Centre in Bangalore
            </Link>{" "}
            Has Been Awarded as the Best Fertility &amp;{" "}
            <Link href={"/"} className="text-brandPink hover:underline">
              IVF Hospital
            </Link>{" "}
            for It's High Success Rates &amp; Holistic Approach to{" "}
            <Link
              href={"/infertility"}
              className="text-brandPink hover:underline font-bold"
            >
              Fertility Treatment
            </Link>
          </h3>
          <div className="space-x-3">
            <button className="mt-4 mx-auto px-3 py-2 bg-brandPink rounded-lg text-sm text-white hover:bg-brandPink4">
              <Link href={"/about/awards-and-accolades"}>
                View Awards and Accolades
              </Link>
            </button>
            <button className="mt-4 mx-auto px-3 py-2 bg-brandPink rounded-lg text-sm text-white hover:bg-brandPink4">
              <Link href={"/gg-care"}>Connect Now</Link>
            </button>
          </div>
        </div>
      </span>
    </div>
  );
};

export default Band2;
