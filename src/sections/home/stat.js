import React from "react";

const metrics = [
  {
    id: 1,
    stat: "7000+",
    emphasis: "Happy Families",
  },
  {
    id: 2,
    stat: "100+",
    emphasis: "Free Fertility Awareness Camps",
  },
  {
    id: 3,
    stat: "66%",
    emphasis: "IVF Success Rate",
  },
  {
    id: 4,
    stat: "5",
    emphasis: "Centres Across Bangalore",
  },
];

const Stat = () => {
  return (
    <div className="relative max-w-7xl mx-auto">
      <div className="h-80 w-full absolute bottom-0 xl:inset-0 xl:h-full">
        <div className="h-full w-full xl:grid xl:grid-cols-2">
          <div className="h-full xl:relative xl:col-start-2">
            <img
              className="h-full w-full object-cover opacity-40 xl:absolute xl:inset-0"
              src="https://image.freepik.com/free-psd/couple-valentine-day-celebrating-victory_1368-26773.jpg"
              alt="People working on laptops"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
            />
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
        <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
          <p className="mt-3 text-3xl font-extrabold text-brandDark font-heading">
            Our Never-ending Success
          </p>
          <p className="mt-5 text-lg text-brandDark font-content">
            GarbhaGudi is a place where dreams come alive, hopes never fade, and
            possibilities never end. We ceaselessly work to help you cherish the
            golden moment of holding your little bundles of joy. Along with our
            quality of treatment and care, some of the other contributing
            factors for achieving high success rates are:
          </p>
          <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
            {metrics.map((item) => (
              <p key={item.id}>
                <span className="block text-2xl font-bold text-brandDark">
                  {item.stat}
                </span>
                <span className="mt-1 block text-base text-brandliteGray">
                  <span className="font-medium text-brandDark">
                    {item.emphasis}
                  </span>{" "}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Stat;
