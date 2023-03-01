import MyModal from "components/modal";
import React from "react";

const YACta = () => {
  return (
    <div className="bg-gray-200 px-3">
      <div className="max-w-5xl mx-auto py-14">
        <div className="flex items-center justify-between flex-col md:flex-row mx-auto">
          <div className="font-content text-2xl lg:text-3xl">
            Take the first step towards happiness <br /> with our Woman's Day
            special offer...
            <div className="text-sm mt-2">
              Hurry Up! Offer Valid only till March
            </div>
          </div>
          <MyModal
            title={"Book a Free Consultation"}
            clnm={
              "px-3 py-2 bg-brandPink rounded-lg text-white hover:bg-brandPink4 text-lg font-content font-semibold mt-6 md:mt-0"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default YACta;
