import { Disclosure, Transition } from "@headlessui/react";
import { HiChevronRight } from "react-icons/hi";
import { Tab } from "@headlessui/react";
import { maleInfertility, femaleInfertility, ivfProcedures } from "./faqData";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Faq = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center text-4xl font-heading pt-12 font-semibold">
        Frequently Asked Questions
      </div>
      <div className="text-lg font-content mt-8 text-center">
        Here are some of the most frequently asked questions about infertility
        and its treatment options.
      </div>
      <div className="w-full max-w-7xl px-2 py-16 sm:px-0">
        <Tab.Group>
          <Tab.List className={"flex p-1 space-x-1 bg-brandPink rounded-xl"}>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm font-medium text-brandPink rounded-lg",
                  "focus:outline-none",
                  selected
                    ? "bg-gray-100 ring-2 ring-brandPink2 shadow"
                    : "text-gray-100 hover:bg-brandPink3 hover:text-white"
                )
              }
            >
              <div className="max-w-7xl mx-auto text-center text-sm md:text-2xl font-heading font-semibold">
                Male Infertility
              </div>
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm font-medium text-brandPink rounded-lg",
                  "focus:outline-none",
                  selected
                    ? "bg-gray-100 ring-2 ring-brandPink2 shadow"
                    : "text-gray-100 hover:bg-brandPink3 hover:text-white"
                )
              }
            >
              <div className="max-w-7xl mx-auto text-center text-sm md:text-2xl font-heading font-semibold">
                Female Infertility
              </div>
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm font-medium text-brandPink rounded-lg",
                  "focus:outline-none",
                  selected
                    ? "bg-gray-100 ring-2 ring-brandPink2 shadow-xl"
                    : "text-gray-100 hover:bg-brandPink3  hover:text-white"
                )
              }
            >
              <div className="max-w-7xl mx-auto text-center text-sm md:text-2xl font-heading font-semibold">
                IVF & IUI Procedures
              </div>
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <div className="w-full px-4 py-16">
                <div className="w-full max-w-xl lg:max-w-7xl p-2 mx-auto rounded-2xl">
                  {maleInfertility.map((items) => (
                    <Disclosure key={items.id}>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex justify-between w-full my-2 px-4 py-2 text-sm font-medium text-left text-brandDark bg-brandPink bg-opacity-20 rounded-lg hover:bg-opacity-70 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            <span className="text-xl font-qs font-semibold py-3">
                              {items.question}
                            </span>
                            <HiChevronRight
                              className={`${
                                open ? "transform rotate-90" : ""
                              } w-5 h-5 text-brandPink my-4`}
                            />
                          </Disclosure.Button>
                          <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                          >
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-700 text-lg font-qs">
                              {items.answer}
                            </Disclosure.Panel>
                          </Transition>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="w-full px-4 py-16">
                <div className="w-full max-w-xl lg:max-w-7xl p-2 mx-auto rounded-2xl">
                  {femaleInfertility.map((items) => (
                    <Disclosure key={items.id}>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex justify-between w-full my-2 px-4 py-2 text-sm font-medium text-left rounded-lg text-brandDark bg-brandPink bg-opacity-20 hover:bg-opacity-60 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            <span className="text-xl font-qs font-semibold py-3">
                              {items.question}
                            </span>
                            <HiChevronRight
                              className={`${
                                open ? "transform rotate-90" : ""
                              } w-5 h-5 text-brandPink my-4`}
                            />
                          </Disclosure.Button>
                          <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                          >
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-700 text-lg font-qs">
                              {items.answer}
                            </Disclosure.Panel>
                          </Transition>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="w-full px-4 py-16">
                <div className="w-full max-w-xl lg:max-w-7xl p-2 mx-auto rounded-2xl">
                  {ivfProcedures.map((items) => (
                    <Disclosure key={items.id}>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex justify-between w-full my-2 px-4 py-2 text-sm font-medium text-left text-brandDark bg-brandPink bg-opacity-20 hover:bg-opacity-60 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            <span className="text-xl font-qs font-semibold py-3">
                              {items.question}
                            </span>
                            <HiChevronRight
                              className={`${
                                open ? "transform rotate-90" : ""
                              } w-5 h-5 text-brandPink my-4`}
                            />
                          </Disclosure.Button>
                          <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                          >
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-700 text-lg font-qs">
                              {items.answer}
                            </Disclosure.Panel>
                          </Transition>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </div>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Faq;
