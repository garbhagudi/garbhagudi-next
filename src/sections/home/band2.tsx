import React from "react";
import Link from "next/link";

const Band2 = () => {
  return (
    <div className="max-w-7xl mx-auto px-3 my-4 sm:px-6 lg:px-4 border-b border-t border-gray-300 ">
      <span className="text-xl md:text-2xl block text-center mx-auto font-heading font-bold py-2">
        <span className="block md:inline-block">
          <Link href="/about/awards-and-accolades" passHref>
            <span className="text-brandPink cursor-pointer">
              Awarded as the Best IVF &amp; Fertility Hospital in India
            </span>
          </Link>
        </span>
      </span>
    </div>
  );
};

export default Band2;
