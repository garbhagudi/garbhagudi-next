import React from "react";
import Link from "next/link";

const Band2 = () => {
  return (
    <div className="max-w-7xl mx-auto px-3 my-4 sm:px-6 lg:px-4 border-b border-t border-gray-300 ">
      <span className="text-lg block text-center mx-auto font-heading font-bold py-2">
        <span className="block md:inline-block">
          <Link href="/gg-care" passHref>
            <div className="text-brandPink cursor-pointer">
              Garbhagudi Has Been Awarded as the Best IVF &amp; Fertility
              Hospital in India for It's High Success Rates &amp; Holistic
              Approach to fertility Treatment
              <button className="block mt-4 mx-auto px-3 py-2 bg-brandPink rounded-lg text-sm text-white">
                Connect Now
              </button>
            </div>
          </Link>
        </span>
      </span>
    </div>
  );
};

export default Band2;
