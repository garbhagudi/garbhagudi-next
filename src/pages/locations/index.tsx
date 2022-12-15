import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const IndexPage = () => {
  return (
    <div>
      <Head>
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
      </Head>
      <div className="max-w-7xl mx-auto" id="locations">
        <h1 className="text-center font-heading text-4xl lg:text-5xl font-bold lg:py-16 py-10">
          Locations
        </h1>
        <p className="lg:pb-16 pb-10 font-content font-semibold">
          GarbhaGudi is a place where dreams come alive, hopes never fade, and
          possibilities never end. We strive tirelessly to assist you to
          treasure the golden moment of holding your little bundles of joy.{" "}
          <br />
          <br />
          You no longer need to go long distances for fertility treatments!
          GarbhaGudi now has 5 strategically positioned branches in Bengaluru
          and wants to expand to additional places in the near future.
        </p>
        <div className="flex items-start px-3 gap-4 justify-center flex-row flex-wrap font-content pb-10 lg:pb-16">
          {Data.map((items) => (
            <Link href={items.link} key={items.id}>
              <div className="flex flex-col items-start justify-center border-2 border-brandPink rounded-xl overflow-hidden">
                <Image
                  src={items.branchPic}
                  alt={items.branch}
                  width={480}
                  height={100}
                />
                <div className="flex items-center justify-start w-full px-3 py-3 border-t-2 border-brandPink">
                  <Image
                    src={items.image}
                    alt={items.branch}
                    width={64}
                    height={64}
                  />
                  <div className="ml-4 font-bold text-xl">{items.branch}</div>
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

const Data = [
  {
    id: 1,
    branch: "Hanumanthanagar",
    image:
      "https://res.cloudinary.com/garbhagudiivf/image/upload/v1643351546/Icons/Locations/Hanumanthanagar_ykripm.svg",
    link: "/locations/hanumanthanagar",
    branchPic:
      "https://res.cloudinary.com/garbhagudiivf/image/upload/v1643277077/Locations/1280x500_HN_wql2mm.jpg",
  },
  {
    id: 2,
    branch: "Kalyan Nagar",
    image:
      "https://res.cloudinary.com/garbhagudiivf/image/upload/v1643351546/Icons/Locations/Kalyan_Nagar_ivtier.svg",
    link: "/locations/kalyan-nagar",
    branchPic:
      "https://res.cloudinary.com/garbhagudiivf/image/upload/v1643277077/Locations/1280x500_KN_irhw7p.jpg",
  },
  {
    id: 3,
    branch: "Electronic City",
    image:
      "https://res.cloudinary.com/garbhagudiivf/image/upload/v1643351530/Icons/Locations/Electronic_City_xntwob.svg",
    link: "/locations/electronic-city",
    branchPic:
      "https://res.cloudinary.com/garbhagudiivf/image/upload/v1643277077/Locations/1201x501_EC_g4kioe.jpg",
  },
  {
    id: 4,
    branch: "Jayanagar",
    image:
      "https://res.cloudinary.com/garbhagudiivf/image/upload/v1665574596/Icons/Locations/JN_Icon_ysrrvv.svg",
    link: "/locations/jayanagar",
    branchPic:
      "https://res.cloudinary.com/garbhagudiivf/image/upload/v1643277102/Locations/1201x501_SE_sziwh5.jpg",
  },
  {
    id: 5,
    branch: "Marathahalli",
    image:
      "https://res.cloudinary.com/garbhagudiivf/image/upload/v1643351530/Icons/Locations/Marathahalli_p99ljc.svg",
    link: "/locations/marathahalli",
    branchPic:
      "https://res.cloudinary.com/garbhagudiivf/image/upload/v1643277077/Locations/1201x501_MH_jqxxsh.jpg",
  },
];
