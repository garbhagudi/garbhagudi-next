import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { HiSelector } from "react-icons/hi";
import Link from "next/link";

const people = [
  { name: "English", link: "/" },
  { name: "ಕನ್ನಡ", link: "https://kannada.garbhagudi.com" },
];

export default function LanguageSelect() {
  const [selected, setSelected] = useState(people[0]);

  return (
    <div className="">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-default rounded-3xl bg-wbite border border-brandPink py-2 px-3 pr-10 text-center ">
            <span className="block text-xs text-brandPink font-semibold font-content">
              {selected.name}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <HiSelector
                className="h-5 w-5 text-brandPurpleDark"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none text-sm py-2 px-4 pr-4  rounded-lg ${
                      active
                        ? "bg-brandPink4 text-brandDark font-bold"
                        : "text-gray-900 font-bold"
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        <Link href={person.link}>{person.name}</Link>
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center text-amber-600"></span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
