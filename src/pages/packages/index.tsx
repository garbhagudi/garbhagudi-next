/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { HiCheck, HiMinus, HiChevronDown } from "react-icons/hi";
import { Disclosure } from "@headlessui/react";

const tiers = [
  {
    name: "Essentials",
    href: "/contact.html",
    priceMonthly: "90,000",
    // description: "Quis suspendisse ut fermentum neque vivamus non tellus.",
  },
  {
    name: "Plus",
    href: "/contact.html",
    priceMonthly: "1,50,000",
    // description: "Quis eleifend a tincidunt pellentesque. A tempor in sed.",
  },
  {
    name: "Premium",
    href: "/contact.html",
    priceMonthly: "2,20,000",
    // description:
    //   "Orci volutpat ut sed sed neque, dui eget. Quis tristique non.",
  },
];
const sections = [
  {
    name: "Pre-Treatment",
    features: [
      {
        name: "OT Workup",
        tiers: { Plus: false, Essentials: false, Premium: false },
      },
      {
        name: "Pre-OP Medications",
        tiers: { Plus: false, Essentials: false, Premium: false },
      },
      {
        name: "FET Preparations",
        tiers: { Plus: false, Essentials: false, Premium: false },
      },
    ],
  },
  {
    name: "Procedures",
    features: [
      {
        name: "Stimulation Injections",
        tiers: { Plus: false, Essentials: false, Premium: true },
      },
      {
        name: (
          <span>
            Investigations during Stimulation Cycle <br />
            (E2 - 2, LH-2, P4 - 1)
          </span>
        ),
        tiers: { Plus: true, Essentials: false, Premium: true },
      },
      {
        name: <span>Other Specific Investiagtions</span>,
        tiers: { Plus: false, Essentials: false, Premium: false },
      },
      {
        name: "FET",
        tiers: { Essentials: "1 Cycle", Premium: "1 Cycle", Plus: "1 Cycle" },
      },
      { name: "Blastocyst", tiers: { Premium: true, Plus: true } },
      {
        name: (
          <span>
            Freezing charges <br /> (1 Year)
          </span>
        ),
        tiers: { Premium: true, Plus: true },
      },
      { name: "Laser Assisted Hatching", tiers: { Premium: false } },
    ],
  },
  {
    name: "Post Procedures",
    features: [
      {
        name: "OPU Charges",
        tiers: { Plus: true, Essentials: true, Premium: true },
      },
      {
        name: (
          <span>
            OT Consumables <br />
            (upto ₹10,000)
          </span>
        ),
        tiers: { Essentials: true, Premium: true, Plus: true },
      },
      {
        name: "Post-OP Medications",
        tiers: { Essentials: false, Premium: false },
      },
      {
        name: (
          <span>
            High Cost OT Consumables <br />
            (Price {">"} ₹5000)
          </span>
        ),
        tiers: { Essentials: false, Premium: false },
      },
    ],
  },
];

export default function Example() {
  return (
    <div className="bg-white font-content">
      <div className="text-center py-10 lg:py-24 px-3">
        <h1 className="font-heading font-bold text-3xl lg:text-5xl">
          IVF Packages at GarbhaGudi
        </h1>
        <p className="pt-4 font-content">
          Here is a comprehensive comparison of the cost of IVF packages at
          GarbhaGudi. No matter the financial status, we've got a pricing
          package that works for you.
        </p>
      </div>
      <div className="max-w-7xl mx-auto bg-white py-16 sm:pb-24 sm:px-6 lg:px-8">
        {/* xs to lg */}
        <div className="max-w-sm mx-auto space-y-2 striped lg:hidden">
          {tiers.map((tier) => (
            <section key={tier.name} className="border">
              <div className="p-4 mb-8 ">
                <h2 className="text-lg leading-6 font-medium text-gray-900 font-heading text-center">
                  {tier.name}
                </h2>
                <p className="mt-4 text-center ">
                  <span className="text-4xl font-extrabold text-gray-900 ">
                    ₹{tier.priceMonthly}
                  </span>{" "}
                </p>
                <a
                  href={tier.href}
                  className="block mt-4 w-48 mx-auto bg-brandPink3 border border-brandPink3 rounded-md py-2 text-sm font-bold font-heading text-white text-center hover:bg-brandPink"
                >
                  Contact Us
                </a>
              </div>

              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex items-center justify-center my-4 w-56 mx-auto text-brandPink font-bold">
                      {open ? "See less" : "See More"}
                      <HiChevronDown
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-brandPink`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-gray-500">
                      {sections.map((section) => (
                        <table key={section.name} className="w-full">
                          <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-heading font-bold text-gray-900 text-left">
                            {section.name}
                          </caption>
                          <thead>
                            <tr>
                              <th className="sr-only" scope="col">
                                Feature
                              </th>
                              <th className="sr-only" scope="col">
                                Included
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {section.features.map((feature) => (
                              <tr
                                key={feature.name}
                                className="border-t border-gray-200"
                              >
                                <th
                                  className="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                                  scope="row"
                                >
                                  {feature.name}
                                </th>
                                <td className="py-5 pr-4">
                                  {typeof feature.tiers[tier.name] ===
                                  "string" ? (
                                    <span className="block text-sm text-gray-700 text-right">
                                      {feature.tiers[tier.name]}
                                    </span>
                                  ) : (
                                    <>
                                      {feature.tiers[tier.name] === true ? (
                                        <HiCheck
                                          className="ml-auto h-5 w-5 text-green-500"
                                          aria-hidden="true"
                                        />
                                      ) : (
                                        <HiMinus
                                          className="ml-auto h-5 w-5 text-gray-400"
                                          aria-hidden="true"
                                        />
                                      )}

                                      <span className="sr-only">
                                        {feature.tiers[tier.name] === true
                                          ? "Yes"
                                          : "No"}
                                      </span>
                                    </>
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </section>
          ))}
        </div>

        {/* lg+ */}
        <div className="hidden lg:block">
          <table className="w-full h-px table-fixed">
            <caption className="sr-only">Pricing plan comparison</caption>
            <thead>
              <tr>
                <th
                  className="pb-4 px-6 text-sm font-medium text-gray-900 text-left"
                  scope="col"
                >
                  <span className="sr-only">Feature by</span>
                  <span>Plans</span>
                </th>
                {tiers.map((tier) => (
                  <th
                    key={tier.name}
                    className="w-1/4 pb-4 px-6 text-lg leading-6 font-bold font-heading text-gray-900 text-left"
                    scope="col"
                  >
                    {tier.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="border-t border-gray-200 divide-y divide-gray-200">
              <tr>
                <th
                  className="py-8 px-6 text-sm font-medium text-gray-900 text-left align-top"
                  scope="row"
                >
                  Pricing
                </th>
                {tiers.map((tier) => (
                  <td key={tier.name} className="h-full py-8 px-6 align-top">
                    <div className="h-full ">
                      <p>
                        <span className="text-4xl font-extrabold text-gray-900">
                          ₹{tier.priceMonthly}
                        </span>{" "}
                      </p>
                      {/* <p className="mt-4 mb-16 text-sm text-gray-500">
                        {tier.description}
                      </p> */}
                      <a
                        href={tier.href}
                        className="block w-full mt-4 bg-brandPink3 border border-brandPink3 rounded-md py-2 text-sm font-bold font-heading text-white text-center hover:bg-brandPink"
                      >
                        Know More About {tier.name}
                      </a>
                    </div>
                  </td>
                ))}
              </tr>
              {sections.map((section) => (
                <Fragment key={section.name}>
                  <tr>
                    <th
                      className="bg-gray-50 py-3 pl-6 text-sm text-gray-900 text-left font-heading font-bold"
                      colSpan={4}
                      scope="colgroup"
                    >
                      {section.name}
                    </th>
                  </tr>
                  {section.features.map((feature) => (
                    <tr key={feature.name}>
                      <th
                        className="py-5 px-6 text-sm font-normal text-gray-800 text-left"
                        scope="row"
                      >
                        {feature.name}
                      </th>
                      {tiers.map((tier) => (
                        <td key={tier.name} className="py-5 px-6 text-center">
                          {typeof feature.tiers[tier.name] === "string" ? (
                            <span className="block text-sm text-gray-900">
                              {feature.tiers[tier.name]}
                            </span>
                          ) : (
                            <>
                              {feature.tiers[tier.name] === true ? (
                                <HiCheck
                                  className="h-5 text-green-500 mx-auto"
                                  aria-hidden="true"
                                />
                              ) : (
                                <HiMinus
                                  className="h-5 text-gray-400 mx-auto"
                                  aria-hidden="true"
                                />
                              )}

                              <span className="sr-only">
                                {feature.tiers[tier.name] === true
                                  ? "Included"
                                  : "Not included"}{" "}
                                in {tier.name}
                              </span>
                            </>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t border-gray-200">
                <th className="sr-only" scope="row">
                  Choose your plan
                </th>
                {tiers.map((tier) => (
                  <td key={tier.name} className="pt-5 px-6">
                    <a
                      href={tier.href}
                      className="block w-full mt-4 bg-brandPink3 border border-brandPink3 rounded-md py-2 text-sm font-bold font-heading text-white text-center hover:bg-brandPink"
                    >
                      Know More About {tier.name}
                    </a>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
