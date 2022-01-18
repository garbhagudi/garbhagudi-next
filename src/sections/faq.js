import { Disclosure, Transition } from "@headlessui/react";
import { HiChevronRight } from "react-icons/hi";

const data = [
  {
    id: 1,
    q: "What is your refund policy",
    a: "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
  },
  {
    id: 2,
    q: "What is your refund policy",
    a: "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
  },
  {
    id: 3,
    q: "What is your refund policy",
    a: "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
  },
  {
    id: 4,
    q: "What is your refund policy",
    a: "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
  },
  {
    id: 5,
    q: "What is your refund policy",
    a: "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
  },
  {
    id: 6,
    q: "What is your refund policy",
    a: "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
  },
  {
    id: 7,
    q: "What is your refund policy",
    a: "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
  },
  {
    id: 8,
    q: "What is your refund policy",
    a: "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
  },
];

const Faq = () => {
  return (
    <div className="w-full px-4 py-16">
      <div className="w-full max-w-xl lg:max-w-7xl p-2 mx-auto bg-gray-50 rounded-2xl">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full my-2 px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className="text-xl font-qs font-semibold py-3">
                  Lorem ipsum dolor sit amet.
                </span>
                <HiChevronRight
                  className={`${
                    open ? "transform rotate-90" : ""
                  } w-5 h-5 text-purple-500 my-4`}
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
                {open && (
                  <Disclosure.Panel
                    className="px-4 pt-4 pb-2 text-gray-700 text-lg font-qs"
                    open
                  >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Animi, velit.
                  </Disclosure.Panel>
                )}
              </Transition>
            </>
          )}
        </Disclosure>
        {data.map((items) => (
          <Disclosure key={items.id}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full my-2 px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span className="text-xl font-qs font-semibold py-3">
                    {items.q}
                  </span>
                  <HiChevronRight
                    className={`${
                      open ? "transform rotate-90" : ""
                    } w-5 h-5 text-purple-500 my-4`}
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
                  <Disclosure.Panel
                    className="px-4 pt-4 pb-2 text-gray-700 text-lg font-qs"
                    open
                  >
                    {items.a}
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};

export default Faq;
