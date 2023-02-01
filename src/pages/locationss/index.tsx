import React from "react";
import Banner from "sections/location/banner";
import graphcms from "lib/graphcms";
import Link from "next/link";
import Image from "next/image";

const IndexPage = ({ branches }) => {
  return (
    <div>
      <div className="">
        <Banner />
        <h1 className="pt-10 lg:pt-16 text-center font-heading text-3xl lg:text-4xl font-bold">
          Our Branches
        </h1>
        <div className="flex items-center justify-center flex-wrap max-w-7xl mx-auto gap-6 py-10 lg:py-16">
          {branches.map((items) => (
            <Link
              href={`locationss/${items?.slug}`}
              key={items?.id}
              className="hover:shadow-2xl rounded-xl transition-all duration-150"
            >
              <div className="flex flex-col items-center justify-center border-2 border-brandPink rounded-xl overflow-hidden max-w-sm mx-auto">
                <div className="overflow-hidden">
                  <Image
                    src={items?.branchPicture?.url}
                    alt={items?.branch}
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
    </div>
  );
};

export default IndexPage;

export const getStaticProps = async () => {
  const { branches } = await graphcms.request(
    `query {
        branches {
          branchPicture {
            url
          }
          title
          slug
          id
        }
      }`
  );

  return {
    props: {
      branches,
    },
    revalidate: 180,
  };
};
