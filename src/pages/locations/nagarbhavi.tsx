import CountdownTimer from "components/timer";
import React from "react";
import Head from "next/head";

const NewBELRoad = () => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Nagarbhavi | GarbhaGudi</title>
        <meta name="title" content="New BEL Road | GarbhaGudi" />
        <meta name="description" content="New Branch At Nagarbhavi" />

        {/* Open Graph / Facebook */}

        <meta property="og:title" content="Nagarbhavi | GarbhaGudi" />
        <meta property="og:site_name" content="GarbhaGudi IVF Centre" />
        <meta property="og:url" content="https://garbhagudi.com" />
        <meta property="og:description" content="New Branch At Nagarbhavi" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/garbhagudi/image/upload/v1678874692/misc/3540662-min_kx15ea.jpg"
        />

        {/* Twitter*/}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@garbhagudiivf" />
        <meta name="twitter:title" content="Nagarbhavi | GarbhaGudi" />
        <meta name="twitter:description" content="New Branch At Nagarbhavi" />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/garbhagudi/image/upload/v1678874692/misc/3540662-min_kx15ea.jpg"
        />
      </Head>
      <div className="w-full h-screen bg-[url('https://res.cloudinary.com/garbhagudi/image/upload/v1678874692/misc/3540662-min_kx15ea.jpg')] bg-cover bg-no-repeat">
        <div className="w-full h-screen bg-black/80">
          <div className="w-full h-full flex flex-col items-start justify-between container mx-auto py-8 px-8 lg:px-4 xl:px-0">
            <div className="flex-1 flex flex-col items-start justify-center">
              <div className="text-3xl lg:text-4xl font-content text-center lg:text-left font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-brandPink2 to-brandPurpleDark">
                GarbhaGudi IVF Centre{" "}
                <div className="inline-flex text-white tracking-wide font-content font-bold mt-3 lg:mt-0">
                  @ Nagarbhavi
                </div>
              </div>
              <h1 className="text-6xl lg:text-7xl xl:text-8xl text-gray-200 tracking-normal font-bold mt-12 text-center md:text-left font-heading">
                We Are <span className="text-brandPink">Opening</span> Soon
              </h1>
              <div className="mt-12 flex flex-col items-center text-white mx-auto md:ml-3">
                <p className="text-gray-300 font-bold uppercase text-base">
                  Time left until the Inaguration
                </p>
                <CountdownTimer dateTime={"31 March 2023, 11:11:00"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBELRoad;
