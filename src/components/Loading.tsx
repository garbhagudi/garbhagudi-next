import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center h-screen scroll-0 justify-center text-brandPink text-content animate-spin">
      <div className=" flex items-center justify-center rounded-full w-14 h-14 bg-gradient-to-tr from-brandPurpleDark to-brandPink">
        <div className="h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center"></div>
      </div>
    </div>
  );
};

export default Loading;
