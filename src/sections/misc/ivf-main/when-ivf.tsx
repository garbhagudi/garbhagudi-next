import React from "react";
import Link from "next/link";

const WhenIvf = () => {
  return (
    <div className="py-10 container mx-auto lg:py-16 px-6">
      <div className="flex items-center justify-evenly flex-wrap">
        <div className="max-w-xl relative">
          <div
            aria-hidden="true"
            className="absolute mx-auto scale-100 xl:scale-110 lg:mt-36 inset-0 w-full h-full md:w-96 md:h-96 rounded-full bg-gradient-to-r from-brandPink5 to-gray-100 blur-3xl"
          ></div>
          <img
            src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1671190677/Misc/avn-min_jo63l5.png"
            alt="causes"
            className="relative w-full"
          />
        </div>
        <div>
          <div className="mt-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 font-heading">
              When is IVF Recommended?
            </h2>
            <div className="mt-4 text-lg text-gray-900 font-content">
              <ul className="list-inside list-disc">
                <li>Blocked or defects in fallopian tubes</li>
                <li>Ovulation disorder</li>
                <li>Premature ovarian failure</li>
                <li>Endometriosis</li>
                <li>Uterine fibroids</li>
                <li>Individuals with a genetic disorder</li>
                <li>Male factor infertility</li>
                <li>
                  Fertility preservation for cancer or other health conditions
                </li>
              </ul>
            </div>
            <div className="mt-6 text-center lg:text-left">
              <Link
                href="/gg-care"
                className="inline-flex px-3 py-2 rounded bg-brandPink font-content font-bold text-white hover:bg-brandPink2"
              >
                Know More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhenIvf;
