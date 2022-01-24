import React from "react";
import Link from "next/link";

const features = [
  {
    id: 1,
    name: "High Success Rate",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642840283/Icons/Features/Success_Rate_lig6sq.svg",
    content:
      "GarbhaGudi has one of the highest IVF treatments success rates in the industry over 66 Percent.",
    link: "/features/success-rates-of-ivf",
  },
  {
    id: 2,
    name: "World Class Fertility Care",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642840286/Icons/Features/World_Class_Fertility_Care_un83f6.svg",
    content:
      "Proud to have played a key role in bringing more than 7,000+ babies into the world since 2010.",
    link: "/features/world-class-fertility-care",
  },
  {
    id: 3,
    name: "Top Fertility Specialists",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642840305/Icons/Features/Top_Fertility_Specialists_zkyl9x.svg",
    content:
      "Team of fertility specialists like gynecologists, embryologists, technicians and staff to help you conceive.",
    link: "/locations/fertility-experts",
  },
  {
    id: 4,
    name: "Affordable Treatments",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642840310/Icons/Features/Affordable_Treatment_lwaaku.svg",
    content:
      "Affordable treatment without any compromise on service or quality of medicines or services",
    link: "/features/affordable-treatments",
  },
  {
    id: 5,
    name: "Free Second Opinion",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642840323/Icons/Features/Free_Second_Opinion_lkihbz.svg",
    content:
      "Patients can come and meet our doctors and understand if the advised treatment is the best thing for the patient couple.",
    link: "https://garbhagudi-ivf.com/contact-us",
  },
  {
    id: 6,
    name: "Financing Options",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642840329/Icons/Features/Financial_Options_rrv8hi.svg",
    content:
      "0% interest for patients when they cannot manage the finances to meet the cost of procedures.",
    link: "/features/financial-options",
  },
  {
    id: 7,
    name: "Holistic Approach",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642840338/Icons/Features/Holistic_Approach_pcqyr1.svg",
    content: "Treating infertility through mind-body-soul programs.",
    link: "/features/holistic-approach",
  },
  {
    id: 8,
    name: "Treatment Protocols",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642840352/Icons/Features/Treatment_Protocols_hll4cu.svg",
    content:
      "Regularly enhanced and upgraded to incorporate the latest advancements in process, technology and clinical research.",
    link: "/features/treatment-protocols",
  },
  {
    id: 9,
    name: "Best in Class Facilities",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642840357/Icons/Features/Best_in_Class_Facilities_fchmjr.svg",
    content:
      "Centers are equipped to handle the most challenging cases with state of the art technology at our disposal",
    link: "/features/best-in-class-facilities",
  },
];

const Features = () => {
  return (
    <div className="relative bg-white py-8 sm:py-18">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <p className="mt-2 text-3xl font-extrabold text-brandDark tracking-tight sm:text-4xl font-heading">
          Our Versatile Approach
        </p>
        <p className="mt-5 max-w-prose mx-auto text-xl text-brandDark font-content">
          At GarbhaGudi, we understand that fertility treatments can be mentally
          and physically stressful. We are always committed to providing a world
          of options and bringing a new ray of hope to many who are trying to
          conceive. So, you can expect:
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Link href={feature.link} key={feature.id} passHref>
                <div className=" pt-6 cursor-pointer">
                  <div className=" flow-root bg-gray-50 rounded-lg px-6 pb-8 ">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-2 bg-brandPink rounded-full shadow-xl">
                          <img
                            src={feature.icon}
                            alt={feature.name}
                            className="h-9 w-9"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-semibold text-brandDark tracking-tight font-heading">
                        {feature.name}
                      </h3>
                      <p className="mt-5 text-brandDark antialiased font-content min-h-[80px]">
                        {feature.content}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
