import React from "react";
import Carousel from "react-multi-carousel";
import { MythsData } from "sections/myth-and-facts/mafdata";
import Link from "next/link";

const data = [
  {
    id: 1,
    title: "All about the latest ART & Surrogacy Bill!",
    desc: "The growth of ART clinics in India is among the highest in the world, and to regulate the rise in medical tourism, the government has passed ART & surrogacy bills recently. This is primarily to prohibit the practice of surrogacy in India by foreigners and to forbid commercial practices. In addition, a couple of other amendments are also mandated.",
    link: "/blogs/all-about-the-latest-art-and-surrogacy-bill",
  },
  {
    id: 2,
    title: "IVF Packages",
    desc: (
      <div>
        Garbhagudi is delighted to announce IVF Packages that fit all your
        individual needs. To know more, book a free appointment or visit{" "}
        <Link href={"/gg-care"}>
          <a className="font-semibold text-blue-600 hover:text-brandPink hover:underline">
            GG CARE
          </a>
        </Link>{" "}
        and talk to one of our executives.
      </div>
    ),
    link: "/gg-care",
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const News = () => {
  return (
    <div>
      <div className="hidden lg:block">
        <div className="grid grid-cols-1 gap-4 px-4 mx-auto my-8 md:grid-cols-2 max-w-7xl sm:px-0">
          <div>
            <p className="pb-4 text-lg font-semibold text-center font-heading">
              In The News
            </p>
            <Carousel
              responsive={responsive}
              removeArrowOnDeviceType={[
                "tablet",
                "mobile",
                "desktop",
                "superLargeDesktop",
              ]}
              ssr={true}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={10000}
            >
              {data.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center justify-center h-64 p-6 text-center bg-white border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-100"
                >
                  <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 font-heading ">
                    {item.title}
                  </h5>
                  <div className="text-sm text-gray-700 font-content">
                    {item.desc}
                  </div>
                  <div className="px-3 py-2 mt-8 font-semibold text-white border w-28 bg-brandPink rounded-xl">
                    <Link href={item.link}>Know More</Link>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
          <div>
            <p className="pb-4 text-lg font-semibold text-center font-heading">
              Myths and Facts
            </p>
            <Carousel
              responsive={responsive}
              removeArrowOnDeviceType={[
                "tablet",
                "mobile",
                "desktop",
                "superLargeDesktop",
              ]}
              ssr={true}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={10000}
            >
              {MythsData.map((item) => (
                <div
                  className="flex flex-col items-center justify-center h-64 p-6 bg-white border border-gray-200 rounded-lg hover:bg-gray-100"
                  key={item.id}
                >
                  <h5 className="mb-2 text-lg font-bold tracking-tight text-left text-gray-900 font-heading">
                    {item.myth}
                  </h5>
                  <p className="text-sm text-gray-700 font-content">
                    {item.fact}
                  </p>
                  <div className="w-24 px-3 py-2 mt-8 font-semibold text-white border bg-brandPink rounded-xl">
                    <Link href="/resources/myths-and-facts">See More</Link>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
