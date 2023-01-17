import React from "react";
import Link from "next/link";

const Band = () => {
  return (
    <div className="px-3 mx-auto my-4  border-gray-300 max-w-7xl sm:px-6 lg:px-4 ">
      <div className="block mx-auto border-b text-xl font-bold text-center md:text-2xl font-benne">
        <div className="block md:inline-block">
          <span className="text-brandPink">ಬಾಳಿಗೊಂದು ಬೇಕು </span>{" "}
          <span className="text-brandPurpleDark"> ಕರುಳಿನಾ ಕುಡಿ </span>{" "}
        </div>{" "}
        <div className="block md:inline-block">
          <span className="text-brandPink">ನಿಮ್ಮ ಕನಸನ್ನು ನನಸಾಗಿಸುತ್ತದೆ </span>{" "}
          <span className="text-brandPurpleDark"> ಗರ್ಭಗುಡಿ </span>
        </div>
      </div>
      <div className="my-4 text-center ">
        <div className="text-lg font-content font-semibold bg-gray-300 px-4 py-2 rounded-xl w-96 mx-auto">
          For Appointments Call:{" "}
          <Link
            href={"tel:+919741671113"}
            className="text-brandPink hover:underline"
          >
            +919741671113
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Band;
