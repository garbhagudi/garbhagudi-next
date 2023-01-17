import React from "react";
import { HiPhone } from "react-icons/hi";
import Link from "next/link";

const FloatPhone = () => {
  return (
    <div className="fixed px-3 py-3 rounded-full font-bold font-content text-white bottom-3 left-3 md:bottom-3 md:left-3 bg-brandPink flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-500 ease-linear cursor-pointer">
      <Link href="tel:+919741671113">
        <HiPhone className="w-5 h-5 md:w-8 md:h-8 text-white" />
      </Link>
    </div>
  );
};

export default FloatPhone;
