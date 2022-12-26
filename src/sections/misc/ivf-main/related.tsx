import React from "react";

const Related = () => {
  return (
    <div id="related">
      <div className="max-w-7xl mx-auto pb-10 lg:pb-16">
        <h3 className="text-3xl lg:text-4xl font-heading text-center font-bold py-10 lg:py-16">
          Related Searches
        </h3>
        <div className="flex items-center justify-center flex-wrap gap-3">
          {keywords.map((items) => (
            <div key={items.id}>
              <div className="px-3 py-1 border bg-green-300 font-semibold text-sm rounded-2xl font-content">
                {items.word}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Related;

const keywords = [
  {
    id: 1,
    word: "IVF Centre In Bangalore",
  },
  {
    id: 2,
    word: "Best IVF Centre In Bangalore",
  },
  {
    id: 3,
    word: "IVF Hospital In Bangalore",
  },
  {
    id: 4,
    word: "IVF Cost In Bangalore",
  },
  {
    id: 5,
    word: "IVF Treatment Cost In Bangalore",
  },
  {
    id: 6,
    word: "IVF Treatment In Bangalore",
  },
  {
    id: 7,
    word: "Best IVF Treatment In Bangalore",
  },
];