import { Tab } from "@headlessui/react";
import { maleInfertility, femaleInfertility, ivfProcedures } from "./faqData";
import AccordionLayout from "./FaqLayout";
import React from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Faq = () => {
  const [activeIndex1, setActiveIndex1] = React.useState(1);
  const [activeIndex2, setActiveIndex2] = React.useState(1);
  const [activeIndex3, setActiveIndex3] = React.useState(1);
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-center text-4xl font-heading pt-12 font-semibold">
        Frequently Asked Questions
      </h1>
      <div className="text-lg font-contents mt-8 text-center">
        Here are some of the most frequently asked questions about infertility
        and its treatment options.
      </div>
      <div className="w-full max-w-7xl px-2 py-16 sm:px-0">
        <Tab.Group vertical>
          <Tab.List
            className={
              "flex flex-wrap md:flex-nowrap md:space-x-1 bg-brandPink rounded-xl p-1"
            }
          >
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm  font-medium text-brandPink rounded-lg",
                  "focus:outline-none",
                  selected
                    ? "bg-gray-100 ring-2 ring-brandPink2 shadow"
                    : "text-gray-100 hover:bg-brandPink4 hover:text-white"
                )
              }
            >
              <div className="mx-auto text-center text-sm md:text-2xl font-heading font-semibold">
                Male Infertility
              </div>
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm  font-medium text-brandPink rounded-lg",
                  "focus:outline-none",
                  selected
                    ? "bg-gray-100 ring-2 ring-brandPink2 shadow"
                    : "text-gray-100 hover:bg-brandPink4 hover:text-white"
                )
              }
            >
              <div className="mx-auto text-center text-sm md:text-2xl font-heading font-semibold">
                Female Infertility
              </div>
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm  font-medium text-brandPink rounded-lg",
                  "focus:outline-none",
                  selected
                    ? "bg-gray-100 ring-2 ring-brandPink2 shadow"
                    : "text-gray-100 hover:bg-brandPink4 hover:text-white"
                )
              }
            >
              <div className="mx-auto text-center text-sm md:text-2xl font-heading font-semibold">
                Treatments
              </div>
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <div className="flex flex-col justify-center max-w-6xl mx-auto mt-10">
                {maleInfertility.map((items) => (
                  <AccordionLayout
                    title={items.title}
                    key={items.id}
                    index={items.id}
                    activeIndex={activeIndex1}
                    setActiveIndex={setActiveIndex1}
                  >
                    {items.contents}
                  </AccordionLayout>
                ))}
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="flex flex-col justify-center max-w-6xl mx-auto mt-10">
                {femaleInfertility.map((items) => (
                  <AccordionLayout
                    title={items.title}
                    key={items.id}
                    index={items.id}
                    activeIndex={activeIndex2}
                    setActiveIndex={setActiveIndex2}
                  >
                    {items.contents}
                  </AccordionLayout>
                ))}
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="flex flex-col justify-center max-w-6xl mx-auto mt-10">
                {ivfProcedures.map((items) => (
                  <AccordionLayout
                    title={items.title}
                    key={items.id}
                    index={items.id}
                    activeIndex={activeIndex3}
                    setActiveIndex={setActiveIndex3}
                  >
                    {items.contents}
                  </AccordionLayout>
                ))}
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Faq;
