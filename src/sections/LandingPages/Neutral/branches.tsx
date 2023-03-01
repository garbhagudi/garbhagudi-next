import React from "react";
import Link from "next/link";
import Image from "next/image";

const Branch = () => {
  return (
    <div>
      <h1 className="pt-10 lg:pt-16 text-center font-heading text-3xl lg:text-4xl font-bold">
        Our Branches
      </h1>
      <div className="flex items-center justify-center flex-wrap max-w-7xl mx-auto gap-6 py-10 lg:py-16">
        {branches.map((items) => (
          <Link
            href={`locations/${items?.slug}`}
            key={items?.id}
            className="hover:shadow-2xl rounded-xl transition-all duration-150"
          >
            <div className="flex flex-col items-center justify-center border-2 border-brandPink rounded-xl overflow-hidden max-w-sm mx-auto">
              <div className="overflow-hidden">
                <Image
                  src={items?.branchPicture?.url}
                  alt={items?.title}
                  width={480}
                  height={100}
                  className="hover:scale-125 transition-all duration-500 overflow-hidden"
                />
              </div>
              <div className="flex items-center justify-evenly w-full px-3 py-3 border-t-2 border-brandPink">
                <div className="ml-4 font-heading font-bold text-xl">
                  {items?.title}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Branch;

const branches = [
  {
    branchPicture: {
      url: "https://media.graphassets.com/OcUgBsZ5SLu7zAASMeqt",
    },
    title: "Hanumanthanagar",
    slug: "hanumanthanagar",
    id: "cldecnlwi1tin0bo8un6m4lth",
  },
  {
    branchPicture: {
      url: "https://media.graphassets.com/J3GWJUTtS6M3MUaHkLEd",
    },
    title: "Kalyan Nagar",
    slug: "kalyan-nagar",
    id: "cldede8zi1ugr0bo8xbmmcsl7",
  },
  {
    branchPicture: {
      url: "https://media.graphassets.com/9w99RqSbTDq08FOcbEav",
    },
    title: "Electronic City",
    slug: "electronic-city",
    id: "cldedj3bg1um40bo8u9fr3cb9",
  },
  {
    branchPicture: {
      url: "https://media.graphassets.com/kQmn6OWfTwGBVbB090Qc",
    },
    title: "Jayanagar",
    slug: "jayanagar",
    id: "cldedoch91uj509o9nsqmq993",
  },
  {
    branchPicture: {
      url: "https://media.graphassets.com/Qsh4ToWQOW9YEiAHeavQ",
    },
    title: "Marathahalli",
    slug: "marathahalli",
    id: "cldedqan21uni09o9ab92m707",
  },
];