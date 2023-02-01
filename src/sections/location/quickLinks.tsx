import React from "react";
import Link from "next/link";

const QuickLinks = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h3 className="text-3xl lg:text-4xl font-heading text-center font-bold">
        Quicklinks
      </h3>
      <div className="flex items-center justify-center flex-wrap gap-3 pt-10 pb-16">
        {Data.map((items) => (
          <div key={items.id}>
            <Link
              href={items.link}
              className="text-base font-semibold text-white font-content px-3 py-1 bg-green-700 rounded-3xl"
            >
              {items.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;

const Data = [
  {
    id: 1,
    title: "Other Branches",
    link: "/locations",
  },
  {
    id: 2,
    title: "Hanumanthanagar",
    link: "/locations/hanumanthanagar",
  },
  {
    id: 3,
    title: "Kalyan Nagar",
    link: "/locations/kalyan-nagar",
  },
  {
    id: 4,
    title: "Jayanagar",
    link: "/locations/jayanagar",
  },
  {
    id: 5,
    title: "Electronic City",
    link: "/locations/electronic-city",
  },
  {
    id: 6,
    title: "Marathahalli",
    link: "/locations/marathahalli",
  },
  {
    id: 7,
    title: "In-vitro Fertilization",
    link: "/treatments/in-vitro-fertilization-ivf",
  },
  {
    id: 8,
    title: "Intra-uterine Insemination",
    link: "/treatments/intra-uterine-insemination-iui",
  },
  {
    id: 9,
    title: "IVF Cost In Bangalore",
    link: "/treatments/ivf-treatment-cost-in-bangalore",
  },
  {
    id: 10,
    title: "About GarbhaGudi",
    link: "/about/overview",
  },
];
