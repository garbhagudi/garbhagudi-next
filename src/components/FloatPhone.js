import React from "react";
import { HiPhone } from "react-icons/hi";

const FloatPhone = () => {
  return (
    <div className="fixed w-8 h-8 md:w-14 md:h-14 bottom-20 right-6 md:bottom-20 md:right-4 bg-brandPink2 rounded-full flex items-center justify-center opacity-20 hover:opacity-100">
      <a href="tel:+91888000099">
        <HiPhone className="w-4 h-4 md:w-8 md:h-8 text-white" />
      </a>
    </div>
  );
};

export default FloatPhone;
