import React from "react";
import { HiChevronDown } from "react-icons/hi";

const AccordionLayout = ({
  title,
  children,
  index,
  activeIndex,
  setActiveIndex,
}) => {
  const handleSetIndex = (index: any) =>
    activeIndex !== index && setActiveIndex(index);

  return (
    <>
      <div
        onClick={() => handleSetIndex(index)}
        className="flex w-full justify-between px-3 sm:px-6 py-3 mt-3 rounded-xl text-brandDark bg-brandDark bg-opacity-20 hover:bg-opacity-80 hover:text-white hover:cursor-pointer"
      >
        <div className="flexitems-center justify-center font-semibold text-md sm:text-xl ">
          <div className="font-content">{title}</div>
        </div>

        {activeIndex === index ? (
          <HiChevronDown className="w-8 h-8 rotate-180" />
        ) : (
          <HiChevronDown className="w-8 h-8 " />
        )}
      </div>

      {activeIndex === index && (
        <div className="shadow-3xl rounded-2xl p-4 mb-6 font-content">
          {children}
        </div>
      )}
    </>
  );
};

export default AccordionLayout;
