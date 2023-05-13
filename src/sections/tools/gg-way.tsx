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
          <div className="group h-96 w-96 [perspective:1000px]" key={items.id}>
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="relative w-full h-full inset-0">
                <div className="absolute w-full h-full bg-black/40 rounded-lg">
                  <div className="flex h-full items-center text-white/90 text-3xl text-center font-heading justify-center group-hover:text-transparent transition-all duration-500">
                    {items.title}
                  </div>
                </div>
                <img
                  className="w-full h-full rounded-xl object-cover shadow-xl shadow-black/40"
                  src={items.bgImage}
                  alt="Image"
                />
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl bg-brandDark/70 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex min-h-full flex-col items-center justify-center font-content text-xl">
                  {items.way}
                  <button className="mt-10 px-3 py-2 border-2 border-white rounded-lg hover:bg-brandPink hover:text-white text-lg">
                    Watch Video
                  </button>
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
    bgImage:
      "https://img.freepik.com/free-photo/orange-background_23-2147674307.jpg?w=1380&t=st=1683709080~exp=1683709680~hmac=d4a0916ddaa5868b762df4b904c449836835d23143e0d5c86fec9b10ba10e950",
  },
  {
    id: 2,
    title: "Ownership",
    way: "Leaders are owners. They think long term and don't sacrifice long term values for short term results. They always say, I am ready to take responsibility.",
    bgImage:
      "https://img.freepik.com/free-photo/smooth-blue-concrete-wall_53876-96203.jpg?w=1380&t=st=1683709081~exp=1683709681~hmac=151277b56d489be116e1c16d1f573fbf2c2a885a743758c6110d340d65f99ab8",
  },
  {
    id: 3,
    title: "Passion for Excellance",
    way: "Leaders strive for excellence in everything they do to deliver higher standards. Leaders find solutions in all situations that stare at them.",
    bgImage:
      "https://img.freepik.com/free-photo/fading-blue-background_53876-88684.jpg?w=1380&t=st=1683709084~exp=1683709684~hmac=0c1167eff09ac0685778692a93a68648f3bc36793672598288b0f948243d43ac",
  },
  {
    id: 4,
    title: "Growth",
    way: "Growth is at the center of our personal, professional and organizational aspirations. We dare to think big and aspire to achieve them all.",
    bgImage:
      "https://img.freepik.com/free-photo/solid-maroon-concrete-textured-wall_53876-95067.jpg?w=1380&t=st=1683709116~exp=1683709716~hmac=b0cf5d9bc31be0b79c0e588eb6f139e153cc4ff252d8146809763c2cc589cd0c",
  },
  {
    id: 5,
    title: "Culture of Genuinity",
    way: "We as leaders always adhere to GarbhaGudi culture of strong ethical values, transparency and humane touch.",
    bgImage:
      "https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-54043.jpg?w=1380&t=st=1683709132~exp=1683709732~hmac=4f6db3dc8883a4ae5826edd72a94b4fd169b4cd05ef90837cc7c8f08504b2fb4",
  },
  {
    id: 6,
    title: "Standpoint",
    way: "We as leaders believe in financial loyalty to the organization and service loyalty to the couple.",
    bgImage:
      "https://img.freepik.com/free-photo/smooth-purple-background-with-high-quality_53876-101996.jpg?w=1380&t=st=1683709133~exp=1683709733~hmac=7f1e7f8509f35d745a5f7703c19a0980b4620ebbe3363d38f2e3f6bea26e3bfb",
  },
  {
    id: 7,
    title: "Team Work",
    way: "Together we work as a team to accomplish our common vision. We never say, that's not my job. Instead, we assume unconditional responsibility to fix an issue even if it is beyond the scope of one's role.",
    bgImage:
      "https://img.freepik.com/free-photo/green-painted-smooth-textured-background_53876-108262.jpg?w=1380&t=st=1683709142~exp=1683709742~hmac=d865602aea9c944748828340ee2db3d48bed604b1e3b8c17d6f9bb06c3787ead",
  },
  {
    id: 8,
    title: "Hire and develop to raise the bar",
    way: "Leaders raise the performance bar with every hire and promotion. They are willing to recognise exceptional talent, coach them and guide them throughout",
    bgImage:
      "https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30731.jpg?w=826&t=st=1683709210~exp=1683709810~hmac=abb74370f1aeab225b76e7d0ccd3e3375291d34934216300e26681f737acc5c9",
  },
  {
    id: 9,
    title: "Partners in Progress",
    way: "As Leaders we respect every individual, including Suppliers, Vendors & Service Providers because we know they are our Brand Ambassadors.",
    bgImage:
      "https://img.freepik.com/free-photo/plain-smooth-green-paper-background_53876-102688.jpg?w=1380&t=st=1683709168~exp=1683709768~hmac=bf2556f00edc300e4a36db587d2a4d741d6871a970023fb641c8be4ca07980f7",
  },
  {
    id: 10,
    title: "Deliver Results",
    way: "At the end of the day, results speak louder than words. Leaders for delivering results by going the extra mile.",
    bgImage:
      "https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30478.jpg?w=826&t=st=1683709180~exp=1683709780~hmac=b4a50de71c4584260a7310456ed315b504d12d5e44664361aebced42edc15412",
  },
  {
    id: 11,
    title: "Holistic Approach",
    way: "Leaders will not be one role wonders. They will always be holistic growing in all dimensions - Healthy, Wealthy, Loving, Blissful and Peaceful.",
    bgImage:
      "https://img.freepik.com/free-photo/red-texture_1122-1270.jpg?w=1380&t=st=1683709190~exp=1683709790~hmac=97589d21a85f493d94742f02ab2c87cc37a01be8003bbcbf4e517c9e27d4a65a",
  },
];
