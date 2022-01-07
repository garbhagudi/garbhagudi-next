import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  About,
  Treatment,
  KnowledgeCenter,
  Contact,
  Locations,
} from "components/header/popover";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  return (
    <div className="sticky top-0 z-50">
      <nav className="border-b pb-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center justify-between align-middle cursor-pointer">
              <div className="flex-shrink-0 pt-4">
                <Link href="/" passHref>
                  <a>
                    <img
                      className="h-full w-52 xl:w-64 "
                      src="https://res.cloudinary.com/garbhagudi/image/upload/v1633780956/garbhagudi-ivf/SVGs/logo_tyy9tg.svg"
                      alt="logo"
                    />
                  </a>
                </Link>
              </div>

              <div className="hidden xl:block">
                <div className=" ml-20 flex items-baseline space-x-4 pt-4">
                  <Link href="/" passHref>
                    <span
                      className={
                        router.pathname == "/"
                          ? "bg-brandPurple text-white px-3 py-2 rounded-2xl text-sm font-inter"
                          : "text-gray-700 hover:bg-brandPurple hover:text-white px-3 py-2 rounded-2xl text-sm font-inter cursor-pointer"
                      }
                    >
                      Home
                    </span>
                  </Link>

                  <span className="text-gray-700 hover:bg-brandPurple hover:text-white rounded-2xl px-3 py-2 text-sm font-inter">
                    <About />
                  </span>

                  <span className=" text-gray-700 hover:bg-brandPurple hover:text-white rounded-2xl px-3 py-2 text-sm font-inter">
                    <Treatment />
                  </span>

                  <span className=" text-gray-700 hover:bg-brandPurple hover:text-white rounded-2xl px-3 py-2 text-sm font-inter">
                    <KnowledgeCenter />
                  </span>
                  <span className="text-gray-700 hover:bg-brandPurple hover:text-white rounded-2xl px-3 py-2 text-sm font-inter">
                    <Contact />
                  </span>
                  <span className="text-gray-700 hover:bg-brandPurple hover:text-white rounded-2xl px-3 py-2 text-sm font-inter">
                    <Locations />
                  </span>

                  <Link href="/book-appointment" passHref>
                    <span
                      className={
                        router.pathname == "/book-appointment"
                          ? "bg-brandPurple text-white px-3 py-2 rounded-2xl text-sm font-inter"
                          : "text-white hover:bg-brandPurple bg-brandPink font-semibold px-3 py-2 rounded-2xl text-sm font-inter cursor-pointer"
                      }
                    >
                      Book an Appointment
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex xl:hidden">
              <button className="mt-6 mr-4">
                <a
                  href="#"
                  className="bg-brandPink hover:bg-gray-900 text-white px-3 py-2 rounded-2xl text-xs font-bold font-inter"
                >
                  Book Now
                </a>
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 mt-6 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-sm font-inter"
                >
                  Home
                </a>
                <span className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md">
                  <About />
                </span>

                <span className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md">
                  <Treatment />
                </span>
                <span className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md">
                  <KnowledgeCenter />
                </span>

                <a
                  href="#"
                  className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-sm font-inter"
                >
                  Blogs
                </a>
                <span className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md">
                  <Contact />
                </span>
                <a
                  href="#"
                  className="text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-sm font-inter"
                >
                  Book an Appointment
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

export default Nav;
