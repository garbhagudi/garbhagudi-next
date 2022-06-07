import React from "react";

const metrics = [
  {
    id: 1,
    stat: "7000+",
    emphasis: "Happy Families",
    bg: "bg-brandPink4",
  },
  {
    id: 2,
    stat: "111+",
    emphasis: "Free Fertility Awareness Camps",
    bg: "bg-brandYellow",
  },
  {
    id: 3,
    stat: "65-73%",
    emphasis: "IVF Success Rate",
    bg: "bg-brandPurple",
  },
  {
    id: 4,
    stat: "5",
    emphasis: "Centres Across Bangalore",
    bg: "bg-cyan2",
  },
  {
    id: 1,
    stat: "7000+",
    emphasis: "Happy Families",
    bg: "bg-brandPurple2",
  },
  {
    id: 2,
    stat: "111+",
    emphasis: "Free Fertility Awareness Camps",
    bg: "bg-brandPink3",
  },
  {
    id: 3,
    stat: "65-73%",
    emphasis: "IVF Success Rate",
    bg: "bg-cyan3",
  },
  {
    id: 4,
    stat: "5",
    emphasis: "Centres Across Bangalore",
    bg: "bg-blue3",
  },
  {
    id: 4,
    stat: "5",
    emphasis: "Centres Across Bangalore",
    bg: "bg-yellow3",
  },
];

export const Statistic = () => {
  return (
    <div
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8 lg:py-20 bg-[url('https://res.cloudinary.com/garbhagudiivf/image/upload/v1654599843/Home/5570863-min_qd5rpq.jpg')] bg-contain"
      id="stats"
    >
      <div className="grid gap-24 row-gap- lg:grid-cols-5 max-w-7xl mx-auto">
        <div className="grid gap-8 lg:col-span-2">
          <div className="flex flex-col items-center justify-center">
            <p className="mb-2 text-2xl lg:text-4xl font-bold font-heading">
              Our Ever-Growing Success
            </p>
            <p className="text-gray-900 font-content mt-4 text-lg">
              GarbhaGudi is a place where dreams come alive, hopes never fade,
              and possibilities never end. We ceaselessly work to help you
              cherish the golden moment of holding your little bundles of joy.
              Along with our quality of treatment and care, some of the other
              factors that sets us apart from our peers are:
            </p>
          </div>
        </div>
        <div className="grid rounded lg:col-span-3 grid-cols-3 lg:grid-cols-3">
          {metrics.map((items) => (
            <div
              className={`flex flex-col justify-between rounded-lg p-8 sm:p-10 border hover:${items.bg} transition-all `}
              key={items?.id}
            >
              <div className="flex flex-col items-center justify-center">
                <div className="text-lg font-bold text-gray-800 sm:text-2xl">
                  {items?.stat}
                </div>
                <div className="text-sm text-gray-800 sm:text-base sm:font-semibold text-center">
                  {items?.emphasis}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistic;
