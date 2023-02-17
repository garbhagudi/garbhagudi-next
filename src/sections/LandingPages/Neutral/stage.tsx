import MyModal from "components/modal";
import React from "react";
import { HiChevronRight } from "react-icons/hi";

const Stage = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <div className="text-xl lg:text-2xl font-content font-bold text-center lg:py-10 text-gray-700">
          How would you describe your situation ?
        </div>
        <div className="flex items-center justify-center flex-wrap mt-6 sm:mt-0 md:flex-row gap-4 mx-auto pb-10">
          {Data.map((items) => (
            <div
              key={items.id}
              className="bg-brandPink5 px-3 w-36 h-32 rounded-lg rounded-bl-[4rem] hover:scale-110 transition-all duration-200"
            >
              <div className="flex items-center justify-center bg-brandPink4 font-bold font-content text-white w-6 h-6 text-xs rounded-full mx-auto mt-3">
                {items.id}
              </div>
              <MyModal
                title={items.title}
                clnm={
                  "flex items-center justify-center py-2 text-sm font-content text-brandPurpleDark font-semibold mt-2"
                }
              />
              <div className="flex items-center justify-center text-brandPurpleDark">
                <HiChevronRight />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stage;

const Data = [
  {
    id: "1",
    title: "I'm Trying to Conceive",
  },
  {
    id: "2",
    title: "Having Problems Conceiving",
  },
  {
    id: "3",
    title: "I’m Facing Infertility Issues",
  },
  {
    id: "4",
    title: "Understand Treatment Options",
  },
  {
    id: "5",
    title: "I Had Failed IVF Cycles in the Past",
  },
];
