import React from "react";
// import { HiOutlineMail, HiPhone } from "react-icons/hi";
import Link from "next/link";

const FloatPhone = () => {
  return (
    <div className="fixed px-3 py-2 rounded-2xl font-bold font-content text-white bottom-20 right-0 md:bottom-20 md:right-3.5 bg-brandPink flex items-center justify-center transition-opacity duration-500 ease-linear cursor-pointer">
      <Link href="/contact.html">
        Contact Us
        {/* <HiOutlineMail className="w-4 h-4 md:w-8 md:h-8 text-white" /> */}
      </Link>
    </div>
  );
};

export default FloatPhone;
