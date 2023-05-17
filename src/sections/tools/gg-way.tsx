import React from "react";

const GarbhaGudiWay = () => {
  return (
    <div>
      <div className="bg-purple-100">
        <h1 className="py-8 text-3xl lg:text-4xl font-heading text-center font-bold">
          Garbhagudi Way
        </h1>
        <p className="max-w-4xl mx-auto pb-8 text-lg font-content text-center">
          Whether you are an individual contributor or the manager of a large
          team, you are a GarbhaGudi leader - A GarbhaGudian. All GarbhaGudians
          work with 11 guiding principles.
        </p>
      </div>
      <div className="flex flex-wrap gap-5 items-center justify-center bg-purple-100 py-10 px-3 sm:px-0">
        {ggway.map((items) => (
          <div
            className="group h-72 w-72 md:h-96 md:w-96 [perspective:1000px]"
            key={items.id}
          >
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="relative w-full h-full inset-0">
                <div className="absolute w-full h-full bg-black/40 rounded-lg">
                  <div className="flex h-full px-2 items-center text-white/90 text-xl md:text-3xl text-center font-heading justify-center group-hover:text-transparent transition-all duration-500">
                    {items.title}
                  </div>
                </div>
                <img
                  className="w-full h-full rounded-xl object-cover shadow-xl shadow-black/40"
                  src={items.bgImage}
                  alt="Image"
                />
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-brandDark/70 px-3 py-1 md:px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center font-content text-sm md:text-xl">
                  {items.way}
                  {/* <button className="mt-10 px-3 py-2 border-2 border-white rounded-lg hover:bg-brandPink hover:text-white text-base md:text-lg">
                    Watch Video
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GarbhaGudiWay;

const ggway = [
  {
    id: 1,
    title: "Couple's Delight",
    way: "Every couple who walks in, will be treated like a King and Queen. Every couple will feel that they are in the right place to complete their family. Every couple who walks in will walk out with a smile. We believe that a satisfied client is our best brand evangelist.",
    bgImage: "https://unsplash.it/640/425",
  },
  {
    id: 2,
    title: "Ownership",
    way: "Leaders are owners. They think long term and don't sacrifice long term values for short term results. They always say, I am ready to take responsibility.",
    bgImage: "https://unsplash.it/640/640",
  },
  {
    id: 3,
    title: "Passion for Excellance",
    way: "Leaders strive for excellence in everything they do to deliver higher standards. Leaders find solutions in all situations that stare at them.",
    bgImage: "https://unsplash.it/640/645",
  },
  {
    id: 4,
    title: "Growth",
    way: "Growth is at the center of our personal, professional and organizational aspirations. We dare to think big and aspire to achieve them all.",
    bgImage: "https://unsplash.it/640/630",
  },
  {
    id: 5,
    title: "Culture of Genuinity",
    way: "We as leaders always adhere to GarbhaGudi culture of strong ethical values, transparency and humane touch.",
    bgImage: "https://unsplash.it/630/630",
  },
  {
    id: 6,
    title: "Standpoint",
    way: "We as leaders believe in financial loyalty to the organization and service loyalty to the couple.",
    bgImage: "https://unsplash.it/635/630",
  },
  {
    id: 7,
    title: "Team Work",
    way: "Together we work as a team to accomplish our common vision. We never say, that's not my job. Instead, we assume unconditional responsibility to fix an issue even if it is beyond the scope of one's role.",
    bgImage: "https://unsplash.it/630/650",
  },
  {
    id: 8,
    title: "Hire and develop to raise the bar",
    way: "Leaders raise the performance bar with every hire and promotion. They are willing to recognise exceptional talent, coach them and guide them throughout",
    bgImage: "https://unsplash.it/640/660",
  },
  {
    id: 9,
    title: "Partners in Progress",
    way: "As Leaders we respect every individual, including Suppliers, Vendors & Service Providers because we know they are our Brand Ambassadors.",
    bgImage: "https://unsplash.it/620/650",
  },
  {
    id: 10,
    title: "Deliver Results",
    way: "At the end of the day, results speak louder than words. Leaders for delivering results by going the extra mile.",
    bgImage: "https://unsplash.it/625/625",
  },
  {
    id: 11,
    title: "Holistic Approach",
    way: "Leaders will not be one role wonders. They will always be holistic growing in all dimensions - Healthy, Wealthy, Loving, Blissful and Peaceful.",
    bgImage: "https://unsplash.it/650/650",
  },
];
