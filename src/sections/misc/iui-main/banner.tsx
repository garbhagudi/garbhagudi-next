import React from "react";
import Link from "next/link";

const Banner = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto px-3 pt-10 gap-3">
        <div className="py-5 flex items-start justify-center flex-col">
          <div className="text-xl xl:text-2xl font-heading font-bold">
            Experience the hope of starting a family with{" "}
            <h1 className="inline-block">IUI treatment in Bangalore</h1>
          </div>
          <div className="text-base font-content mt-4 font-semibold">
            Where expert fertility care meets state-of-the-art technology.
          </div>
          <div className="text-base font-content pt-5">
            Experience the miracle of life with{" "}
            <Link
              href={"/treatments/intra-uterine-insemination-iui"}
              className="text-brandPink hover:underline"
            >
              IUI treatment in Bangalore.
            </Link>{" "}
            Nestled in the heart of the city, our state-of-the-art fertility
            clinic offers hope and a ray of sunshine for couples who are looking
            to start a family. Our team of expert fertility specialists and
            cutting-edge technology will guide you on your journey towards
            parenthood, every step of the way. Embrace the joy of holding your
            bundle of love in your arms, with{" "}
            <Link
              href={"/treatments/intra-uterine-insemination-iui"}
              className="text-brandPink hover:underline"
            >
              IUI treatment in Bangalore.
            </Link>{" "}
          </div>
          <button className="text-lg font-content font-semibold text-white px-3 py-2 bg-brandPink hover:bg-brandPink4 mt-5 rounded-lg">
            Consult Now
          </button>
        </div>
        <div className="lg:py-10">
          <img
            src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1674112151/Misc/c9xR52ZwxhbTdCfXFGsx4-transformed_1_lrnub0.jpg"
            alt="IUI treatment in Bangalore"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
