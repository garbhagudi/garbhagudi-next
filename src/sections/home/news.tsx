import React from "react";
import Carousel from "react-multi-carousel";
import { MythsData } from "sections/myth-and-facts/mafdata";
import Link from "next/link";

const data = [
  {
    id: 1,
    title: "All about the latest ART & Surrogacy Bill!",
    desc: "The growth of ART clinics in India is among the highest in the world, and to regulate the rise in medical tourism, the government has passed ART & surrogacy bills recently. This is primarily to prohibit the practice of surrogacy in India by foreigners and to forbid commercial practices. In addition, a couple of other amendments are also mandated. Read this blog to know more about the latest ART & surrogacy bills!",
    link: "/blogs/all-about-the-latest-art-and-surrogacy-bill",
  },
  {
    id: 2,
    title: "World IVF Day Offer",
    desc: "This July, we are celebrating World IVF Day, and you may save up to 20% on IVF Day special packages, which are available throughout the month. For further information, please contact our GG-CARE team. T&C Apply",
    link: "/contact.html",
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
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto gap-4 px-4 my-8 sm:px-0">
          <div>
            <p className="text-center text-lg font-heading font-semibold pb-4">
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
                <Link href={item.link} key={item.id} passHref>
                  <div className="flex flex-col p-6 bg-white rounded-lg border border-gray-200 text-center hover:bg-gray-100 h-64 items-center justify-center cursor-pointer">
                    <h5 className="mb-2 text-lg font-heading font-bold tracking-tight text-gray-900 ">
                      {item.title}
                    </h5>
                    <p className="text-sm font-content text-gray-700">
                      {item.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </Carousel>
          </div>
          <div>
            <p className="text-center font-heading text-lg font-semibold pb-4">
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
                  className="flex flex-col p-6 bg-white rounded-lg border border-gray-200  hover:bg-gray-100 h-64 items-center justify-center"
                  key={item.id}
                >
                  <h5 className="mb-2 text-lg text-left font-bold font-heading tracking-tight text-gray-900">
                    {item.myth}
                  </h5>
                  <p className="text-sm text-gray-700 font-content">
                    {item.fact}
                  </p>
                  <div className="px-3 py-2 border bg-brandPink w-24 text-white font-semibold rounded-xl mt-8">
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
