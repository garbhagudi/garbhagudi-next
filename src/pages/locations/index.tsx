import React from "react";
import Banner from "sections/location/banner";
import graphcms from "lib/graphcms";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const IndexPage = ({ branches }) => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Locations | GarbhaGudi IVF Centre</title>
        <meta name="title" content="Locations | GarbhaGudi IVF Centre" />
        <meta
          name="description"
          content="GarbhaGudi is where dreams come alive, hopes never fade and possibilities never end. We work to help you cherish the golden moment of holding your bundle of joy"
        />

        {/* Open Graph / Facebook */}

        <meta
          property="og:title"
          content="Locations | GarbhaGudi IVF Centrea"
        />
        <meta property="og:site_name" content="GarbhaGudi IVF Centre" />
        <meta property="og:url" content="https://garbhagudi.com" />
        <meta
          property="og:description"
          content="GarbhaGudi is where dreams come alive, hopes never fade and possibilities never end. We work to help you cherish the golden moment of holding your bundle of joy"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="GarbhaGudi is where dreams come alive, hopes never fade and possibilities never end. We work to help you cherish the golden moment of holding your bundle of joy"
        />

        {/* Twitter*/}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@garbhagudiivf" />
        <meta
          name="twitter:title"
          content="Locations | GarbhaGudi IVF Centre"
        />
        <meta
          name="twitter:description"
          content="GarbhaGudi is a place where dreams come alive, hopes never fade, and possibilities never end. We ceaselessly work to help you cherish the golden moment of holding your little bundles of joy."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643277077/Locations/1280x500_HN_wql2mm.jpg"
        />
      </Head>
      <div className="">
        <Banner branchTitle={""} />
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
        <h3 className="text-3xl lg:text-4xl font-heading font-bold text-center pb-10 lg:pb-14">
          Coming Soon
        </h3>
        <div className="flex items-center pb-10 lg:pb-16 justify-center space-x-4 text-center">
          <div className="px-3 py-2 border-2 text-xl font-content font-semibold rounded-lg border-brandPink hover:bg-brandPink hover:text-white cursor-default">
            RMV Layout
          </div>
          <div className="px-3 py-2 border-2 text-xl font-content font-semibold rounded-lg border-brandPink hover:bg-brandPink hover:text-white cursor-default">
            Nagarabhavi
          </div>
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
