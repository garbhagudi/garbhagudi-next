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
  {
    id: 1,
    name: "High Success Rate",
    icon: HiCloudUpload,
    content:
      "GarbhaGudi has one of the highest IVF treatments success rates in the industry over 66 Percent.",
  },
  {
    id: 2,
    name: "World Class Fertility Care",
    icon: HiLockClosed,
    content:
      "Proud to have played a key role in bringing more than 7,000+ babies into the world since 2010.",
  },
  {
    id: 3,
    name: "Top Fertility Specialists",
    icon: HiRefresh,
    content:
      "Team of fertility specialists like gynecologists, embryologists, technicians and staff to help you conceive.",
  },
  {
    id: 4,
    name: "Affordable Treatment",
    icon: HiShieldCheck,
    content:
      "Affordable treatment without any compromise on service or quality of medicines or services",
  },
  {
    id: 5,
    name: "Free Second Opinion",
    icon: HiCog,
    content:
      "Patients can come and meet our doctors and understand if the advised treatment is the best thing for the patient couple.",
  },
  {
    id: 6,
    name: "Financing Options",
    icon: HiServer,
    content:
      "0% interest for patients when they cannot manage the finances to meet the cost of procedures.",
  },
  {
    id: 7,
    name: "Holistic Approach",
    icon: HiServer,
    content: "Treating infertility through mind-body-soul programs.",
  },
  {
    id: 8,
    name: "Treatment Protocols",
    icon: HiServer,
    content:
      "Regularly enhanced and upgraded to incorporate the latest advancements in process, technology and clinical research.",
  },
  {
    id: 9,
    name: "Best in Class Facilities",
    icon: HiServer,
    content:
      "Centers are equipped to handle the most challenging cases with state of the art technology at our disposal",
  },
];

const Features = () => {
  return (
    <div className="relative bg-white py-8 sm:py-18">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <p className="mt-2 text-3xl font-extrabold text-brandDark tracking-tight sm:text-4xl font-heading">
          Our Versatile Approach
        </p>
        <p className="mt-5 max-w-prose mx-auto text-xl text-brandDark font-semibold font-qs">
          At GarbhaGudi, we understand that fertility treatments can be mentally
          and physically stressful. We are always committed to providing a world
          of options and bringing a new ray of hope to many who are trying to
          conceive. So, you can expect:
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.id} className=" pt-6">
                <div className=" flow-root bg-gray-50 rounded-lg px-6 pb-8 ">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-brandPink rounded-full shadow-xl">
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-semibold text-brandDark tracking-tight font-heading">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-brandDark font-semibold font-qs min-h-[80px]">
                      {feature.content}
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
