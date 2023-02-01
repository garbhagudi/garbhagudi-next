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
    link: "",
  },
  {
    id: 1,
    title: "Hanumanthanagar",
    link: "",
  },
  {
    id: 1,
    title: "Kalyan Nagar",
    link: "",
  },
  {
    id: 1,
    title: "Jayanagar",
    link: "",
  },
  {
    id: 1,
    title: "Electronic City",
    link: "",
  },
  {
    id: 1,
    title: "Marathahalli",
    link: "",
  },
  {
    id: 1,
    title: "In-vitro Fertilization",
    link: "",
  },
  {
    id: 1,
    title: "Intra-uterine Insemination",
    link: "",
  },
  {
    id: 1,
    title: "IVF Cost In Bangalore",
    link: "",
  },
  {
    id: 1,
    title: "About GarbhaGudi",
    link: "",
  },
];
