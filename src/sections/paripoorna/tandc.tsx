import React from "react";

const TermsConditions = () => {
  return (
    <div className="px-3 lg:px-00">
      <h3 className="text-3xl lg:text-4xl font-heading font-bold text-center py-10 lg:py-16">
        Terms and Conditions
      </h3>
      <div className="max-w-5xl mx-auto font-content pb-10 text-sm">
        The GarbhaGnan Foundation is one of the foremost foundations in the
        country that offers specialised and the latest healthcare for women.
        with growing rates of infertility across the globe due to various
        reasons, The GarbhaGnan Foundation remains steadfast in helping in
        helping couples experience the joy of parenthood and the bliss of family
        life.
        <br />
        <br />
        In its pursuit of rendering service to couples looking for progeny,
        Garbhagnan Foundation has decided to offer{" "}
        <span className="font-bold">&quot;PARIPOORNA 2022&quot;</span>, where
        the discount offered by the GarbhaGudi IVF Center is being borne by
        GarbhaGnan Foundation as a part of its CSR activity. <br />
        <br />
        Deserving couples are selected by a committee put in place by the
        Foundation. The selection process and merits are defined by the
        GarbhaGnan Foundation and the decision of the committee is final.
      </div>
      <ul role="list" className="pb-8">
        {items.map((item) => (
          <li
            key={item.id}
            className="text-sm list-outside list-disc py-2 sm:px-6 rounded-md text-left max-w-5xl ml-4 lg:mx-auto font-content"
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
  {
    id: 4,
    title:
      "Benefits will be decided by an internal committee and their decision is final",
  },
  {
    id: 5,
    title:
      "Paripoorna Benefit plan is non-transferrable. Strictly, the benefit plan ends on the mentioned date, unless extended by the committee",
  },
  {
    id: 6,
    title:
      "The benefit plan ends on the mentioned date, unless extended by the committee",
  },
  {
    id: 7,
    title:
      "On approval an amount of 50,000 to be paid to GarbhaGudi in Advance. ",
  },
  {
    id: 8,
    title: "Advance payment has to be done within the suggested date.",
  },
  {
    id: 9,
    title:
      "All the terms and conditions are subjected to change without notice which is at the sole discretion of the GarbhaGudi IVF Centre & GarbhaGnan Foundation.",
  },
  {
    id: 10,
    title:
      "*Additional terms and conditions may apply. Please refer to the 'PARIPOORNA - 2022 Application form' for more information",
  },

  // More items...
];
