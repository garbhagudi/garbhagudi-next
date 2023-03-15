import CountdownTimer from "components/timer";
import React from "react";
import Head from "next/head";

const NewBELRoad = () => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>New BEL Road | GarbhaGudi</title>
        <meta name="title" content="New BEL Road | GarbhaGudi" />
        <meta name="description" content="New Branch At New BEL Road" />

        {/* Open Graph / Facebook */}

        <meta property="og:title" content="New BEL Road | GarbhaGudi" />
        <meta property="og:site_name" content="GarbhaGudi IVF Centre" />
        <meta property="og:url" content="https://garbhagudi.com" />
        <meta property="og:description" content="New Branch At New BEL Road" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://img.freepik.com/free-vector/futuristic-technology-background_23-2148460426.jpg?w=1380&t=st=1678867768~exp=1678868368~hmac=85cd732ad261c8b44d0101ed0844bedf873d1c7117650e4f7057f31740642c7a"
        />

        {/* Twitter*/}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@garbhagudiivf" />
        <meta name="twitter:title" content="New BEL Road | GarbhaGudi" />
        <meta name="twitter:description" content="New Branch At New BEL Road" />
        <meta
          name="twitter:image"
          content="https://img.freepik.com/free-vector/futuristic-technology-background_23-2148460426.jpg?w=1380&t=st=1678867768~exp=1678868368~hmac=85cd732ad261c8b44d0101ed0844bedf873d1c7117650e4f7057f31740642c7a"
        />
      </Head>
      <div className="w-full h-screen bg-[url(https://img.freepik.com/free-vector/futuristic-technology-background_23-2148460426.jpg?w=1380&t=st=1678867768~exp=1678868368~hmac=85cd732ad261c8b44d0101ed0844bedf873d1c7117650e4f7057f31740642c7a)] bg-cover bg-no-repeat">
        <div className="w-full h-screen bg-black bg-opacity-70">
          <div className="w-full h-full flex flex-col items-start justify-between container mx-auto py-8 px-8 lg:px-4 xl:px-0">
            <div className="flex-1 flex flex-col items-start justify-center">
              <h1 className="text-6xl lg:text-7xl xl:text-8xl text-gray-200 tracking-normal font-bold mt-12 text-center md:text-left font-heading">
                We Are <span className="text-brandPink">Opening</span> Soon
              </h1>

              <div className="mt-12 flex flex-col items-center text-white">
                <p className="text-gray-300 uppercase text-sm">
                  Time left until the Inaguration
                </p>
                <CountdownTimer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBELRoad;
