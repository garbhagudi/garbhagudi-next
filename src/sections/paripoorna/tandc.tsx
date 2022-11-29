import React from "react";

const TermsConditions = () => {
  return (
    <div className="px-3 lg:px-00">
      <h3 className="text-3xl lg:text-4xl font-heading font-bold text-center py-10 lg:py-16">
        Terms and Conditions
      </h3>
      <div className="max-w-7xl mx-auto font-content pb-10">
        The GarbhaGnan Foundation is one of the foremost foundations in the
        country that offers specialised and the latest health care for women.
        with growing rates of infertility across the globe due to varying diets,
        lesser physical exertion, and so on. The GarbhaGnan Foundation remains
        steadfast in helping women get unparalleled care from experienced
        specialists.
        <br />
        <br />
        In its pursuit of rendering service to couples looking for progeny, the
        Garbhagnan Foundation has decided to offer{" "}
        <span className="font-bold">&quot;PARIPOORNA 2022&quot;</span>, where
        the discount offered by the GarbhaGudi IVF Center is being borne by the
        GarbhaGnan Foundation as a part of its CSR activity. <br />
        <br />
        Deserving couples are selected by a committee put in place by the
        GarbhaGnan Foundation. The selection process and merits are defined by
        the GarbhaGnan Foundation and cannot be contested by any couple.
      </div>
      <ul role="list" className="space-y-3">
        {items.map((item) => (
          <li
            key={item.id}
            className="bg-white shadow overflow-hidden px-4 py-4 sm:px-6 rounded-md text-left max-w-2xl mx-auto font-content"
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TermsConditions;

/* This example requires Tailwind CSS v2.0+ */
const items = [
  { id: 1, title: "The Couple should be citizens and residents of India" },
  {
    id: 2,
    title: "The Couple should have an offer code provided from GG-CARE",
  },
  {
    id: 3,
    title:
      "Paripoorna cannot be combined with any other benefit plans provided at GarbhaGudi",
  },
  { id: 3, title: "GarbhaGnan Foundation's decision awading is final" },
  {
    id: 3,
    title:
      "Paripoorna Benefit plan is non-transferrable. Strictly, the benefit plan ends on the mentioned date, unless extended by the committee",
  },
  {
    id: 3,
    title:
      "On approval an amount of 50,000 to be paid to GarbhaGudi in Advance. Payment to be done fully by the suggested date. All the terms and conditions are subjected to change without notice which is at the sole discretion of the GarbhaGnan Foundation.",
  },
  {
    id: 7,
    title:
      "Other Terms and Conditions Apply, Please refer to the PARIPOORNA - 2022 Application form for more information",
  },

  // More items...
];
