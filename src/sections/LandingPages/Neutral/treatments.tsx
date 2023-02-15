import React from "react";
import Link from "next/link";
import { Tab } from "@headlessui/react";
import { TreatmentHeader } from "components/header/headerData";

const Treatments = () => {
  return (
    <div>
      <div>
        <h3 className="text-3xl lg:text-4xl font-heading font-bold text-center py-10 lg:py-16 text-gray-700">
          Treatment Options
        </h3>
        <div className="max-w-3xl mx-auto">
          <Tab.Group>
            <Tab.List className="flex flex-wrap lg:flex-nowrap lg:space-x-1 bg-brandPink rounded-xl p-0.5 transition-all ease-linear duration-300">
              <Tab className="w-full py-2 rounded-lg focus:outline-none text-gray-100 mx-auto text-center text-xl font-heading font-semibold ui-selected:bg-gray-100 ui-selected:text-brandPink2 ui-selected:shadow-xl ui-selected:hover:bg-gray-100 ui-selected:transition-all ui-selected:ease-linear ui-selected:duration-300 ui-not-selected:hover:bg-brandPink3">
                Female Infertility
              </Tab>
              <Tab className="w-full py-2 rounded-lg focus:outline-none text-gray-100 mx-auto text-center text-xl font-heading font-semibold ui-selected:bg-gray-100 ui-selected:text-brandPink2 ui-selected:shadow-xl ui-selected:hover:bg-gray-100 ui-selected:transition-all ui-selected:ease-linear ui-selected:duration-300 ui-not-selected:hover:bg-brandPink3">
                Male Infertility
              </Tab>
              <Tab className="w-full py-2 rounded-lg focus:outline-none text-gray-100 mx-auto text-center text-xl font-heading font-semibold ui-selected:bg-gray-100 ui-selected:text-brandPink2 ui-selected:shadow-xl ui-selected:hover:bg-gray-100 ui-selected:transition-all ui-selected:ease-linear ui-selected:duration-300 ui-not-selected:hover:bg-brandPink3">
                Advanced Options
              </Tab>
            </Tab.List>
            <Tab.Panels className="px-2 my-2 text-black transition-all ease-out duration-500">
              <Tab.Panel>
                <div className="grid grid-cols-3 text-center h-[25rem]">
                  {TreatmentHeader.female.map((items) => (
                    <Link href={items.link} key={items.id}>
                      <div className="flex flex-col items-center justify-center hover:bg-pink-100 py-2 rounded-xl">
                        <img
                          src={items.icon}
                          alt={items.name}
                          className="w-10 h-10 mx-auto"
                        />
                        <div className="font-content text-sm font-medium pt-2">
                          {items.name}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="grid grid-cols-3 text-center">
                  {TreatmentHeader.male.map((items) => (
                    <Link href={items.link} key={items.id}>
                      <div className="flex flex-col items-center justify-center hover:bg-pink-100 py-2 rounded-xl">
                        <img
                          src={items.icon}
                          alt={items.name}
                          className="w-10 h-10 mx-auto"
                        />
                        <div className="font-content font-medium pt-2">
                          {items.name}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="grid grid-cols-3 text-center">
                  {TreatmentHeader.advanced.map((items) => (
                    <Link href={items.link} key={items.id}>
                      <div className="flex flex-col items-center justify-center hover:bg-pink-100 py-2 rounded-xl">
                        <img
                          src={items.icon}
                          alt={items.name}
                          className="w-10 h-10 mx-auto"
                        />
                        <div className="font-content text-sm font-medium pt-2">
                          {items.name}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
};

export default Treatments;
