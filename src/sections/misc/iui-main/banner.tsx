import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto px-3 pt-10 gap-3">
        <div className="py-5 flex items-start justify-center flex-col">
          <h1 className="text-xl xl:text-2xl font-heading font-bold">
            Experience the hope of starting a family with IUI treatment in
            Bangalore - where expert fertility care meets state-of-the-art
            technology.
          </h1>
          <h3 className="text-sm xl:text-base font-content pt-5">
            Experience the miracle of life with IUI treatment in Bangalore.
            Nestled in the heart of the city, our state-of-the-art fertility
            clinic offers hope and a ray of sunshine for couples who are looking
            to start a family. Our team of expert fertility specialists and
            cutting-edge technology will guide you on your journey towards
            parenthood, every step of the way. Embrace the joy of holding your
            bundle of love in your arms, with IUI treatment in Bangalore.
          </h3>
          <button className="text-lg font-content font-semibold text-white px-3 py-2 bg-brandPink hover:bg-brandPink4 mt-5 rounded-lg">
            Consult Now
          </button>
        </div>
        <div className="lg:py-10">
          <img
            src="https://img.freepik.com/free-photo/top-view-fertility-concept-with-pink-background_23-2149214352.jpg?w=1380&t=st=1673518325~exp=1673518925~hmac=4cf217eff0e8cd55001cac2fe15808486e0d403d89d313b1e0391e7284cd62fe"
            alt="IUI"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
