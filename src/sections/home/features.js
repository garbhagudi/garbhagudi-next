import React from "react";
import {
  HiCloudUpload,
  HiCog,
  HiLockClosed,
  HiRefresh,
  HiServer,
  HiShieldCheck,
} from "react-icons/hi";

const features = [
  { id: 1, name: "Lorem ipsum dolor sit amet.", icon: HiCloudUpload },
  { id: 2, name: "Lorem, ipsum dolor.", icon: HiLockClosed },
  { id: 3, name: "Lorem ipsum dolor sit.", icon: HiRefresh },
  { id: 4, name: "Lorem, ipsum.", icon: HiShieldCheck },
  { id: 5, name: "Lorem ipsum dolor sit amet.", icon: HiCog },
  { id: 6, name: "Lorem ipsum dolor sit amet consectetur.", icon: HiServer },
];

const Features = () => {
  return (
    <div className="relative bg-white py-8 sm:py-18">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-base font-semibold tracking-wider text-brandPurple uppercase">
          Lorem, ipsum.
        </h2>
        <p className="mt-2 text-3xl font-extrabold text-brandDark tracking-tight sm:text-4xl">
          Lorem ipsum dolor sit amet.
        </p>
        <p className="mt-5 max-w-prose mx-auto text-xl text-brandliteGray">
          Phasellus lorem quam molestie id quisque diam aenean nulla in.
          Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend
          condimentum id viverra nulla.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.id} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-brandPink rounded-full shadow-lg">
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      Ac tincidunt sapien vehicula erat auctor pellentesque
                      rhoncus. Et magna sit morbi lobortis.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
