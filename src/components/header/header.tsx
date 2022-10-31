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
  Language,
} from "components/header/popover";
import LanguageSelect from "components/languageSelect";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  return (
    <div className="sticky top-0 z-50">
      <nav className="pb-4 bg-white border-b shadow-xl">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[5rem] sm:h-16">
            <div className="flex items-center justify-between align-middle cursor-pointer">
              <div className="flex-shrink-0 pt-4 ">
                <div className="hidden sm:block">
                  <Link legacyBehavior href="/" passHref>
                    <a>
                      <img
                        className="w-48 h-full xl:w-64 "
                        src="https://res.cloudinary.com/garbhagudi/image/upload/v1633780956/garbhagudi-ivf/SVGs/logo_tyy9tg.svg"
                        alt="logo"
                      />
                    </a>
                  </Link>
                </div>

                <div className="block sm:hidden">
                  <Link legacyBehavior href="/" passHref>
                    <a>
                      <img
                        className="w-20"
                        src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1659164257/logos/GG_Vertical_Logo_nrcl5h.svg"
                        alt="logo"
                      />
                    </a>
                  </Link>
                </div>
              </div>

              <div className="hidden xl:block">
                <div className="flex items-baseline pt-4 ml-16 space-x-4 ">
                  <Link href="/" passHref>
                    <span
                      className={
                        router.pathname == "/"
                          ? "bg-brandPink text-white px-2 py-2 rounded-2xl text-sm font-content"
                          : "text-gray-700 hover:bg-brandPink hover:text-white px-2 py-2 rounded-2xl text-sm font-inter cursor-pointer"
                      }
                    >
                      Home
                    </span>
                  </Link>

                  <span className="px-2 py-2 text-sm text-gray-700 hover:bg-brandPink hover:text-white rounded-2xl font-content">
                    <About />
                  </span>

                  <span className="px-2 py-2 text-sm text-gray-700 hover:bg-brandPink hover:text-white rounded-2xl font-content">
                    <Treatment />
                  </span>

                  <span className="px-2 py-2 text-sm text-gray-700 hover:bg-brandPink hover:text-white rounded-2xl font-content">
                    <KnowledgeCenter />
                  </span>
                  <span className="px-2 py-2 text-sm text-gray-700 hover:bg-brandPink hover:text-white rounded-2xl font-content">
                    <Contact />
                  </span>
                  <span className="px-2 py-2 text-sm text-gray-700 hover:bg-brandPink hover:text-white rounded-2xl font-content">
                    <Locations />
                  </span>
                  <span className="px-2 py-2 text-sm text-gray-700 hover:bg-brandPink hover:text-white rounded-2xl font-content">
                    <Language />
                  </span>

                  <a
                    href="https://consult.bestdocapp.com/home/GARBHAGUDI"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <span className="px-3 py-2 text-sm font-semibold text-white cursor-pointer bg-brandPink rounded-2xl font-content hover:bg-brandPink3">
                      Book Now
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center -mr-2 xl:hidden">
              <button className="mt-4 mr-4">
                <a
                  href="https://consult.bestdocapp.com/home/GARBHAGUDI"
                  className="px-3 py-2 text-xs font-bold text-white border bg-brandPink hover:bg-gray-800 border-brandPink hover:border-gray-800 rounded-2xl font-content"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Book Now
                </a>
              </button>
              <span className="z-10 mt-5 mr-4">
                <LanguageSelect />
              </span>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 mt-4 text-gray-400 bg-gray-900 rounded-full hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block w-6 h-6"
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
                    className="block w-6 h-6"
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
            <div className="mt-6 xl:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 sm:px-3">
                <Link href="/">
                  <a
                    className="block px-3 py-2 text-sm rounded-md text-brandDark hover:bg-brandPink hover:text-white font-content"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    Home
                  </a>
                </Link>
                <span className="block px-3 py-2 text-sm rounded-md text-brandDark hover:bg-brandPink hover:text-white font-content">
                  <span className="w-44" onClick={() => setIsOpen(!isOpen)}>
                    <About />
                  </span>
                </span>

                <span
                  className="block px-3 py-2 text-sm rounded-md text-brandDark hover:bg-brandPink hover:text-white font-content"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <Treatment />
                </span>
                <span
                  className="block px-3 py-2 text-sm rounded-md text-brandDark hover:bg-brandPink hover:text-white font-content"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <KnowledgeCenter />
                </span>
                <span
                  className="block px-3 py-2 text-sm rounded-md text-brandDark hover:bg-brandPink hover:text-white font-content"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <Contact />
                </span>
                <span className="block px-3 py-2 text-sm rounded-md text-brandDark hover:bg-brandPink hover:text-white font-content">
                  <Locations />
                </span>
                <a
                  href="https://consult.bestdocapp.com/home/GARBHAGUDI"
                  target={"_blank"}
                  rel="noreferrer"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span className="block px-3 py-2 text-sm rounded-md cursor-pointer text-brandDark hover:bg-brandPink hover:text-white font-content">
                    Book an Appointment
                  </span>
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
