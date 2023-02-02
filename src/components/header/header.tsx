import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import {
  About,
  WhyGarbhaGudi,
  Treatments,
  KnowledgeCenter,
  Contacts,
  Locations,
  Languages,
} from "components/header/popover";
import LanguageSelect from "components/languageSelect";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sticky top-0 bg-white z-20 shadow-xl">
      <nav className=" shadow-2xl bg-[url('https://res.cloudinary.com/garbhagudiivf/image/upload/v1675172340/Misc/ezgif.com-gif-maker_viwnqk.gif')] lg:bg-cover">
        <header className="z-50">
          <nav className="border-gray-200 px-4 lg:px-6 lg:py-2">
            <div className="flex justify-between items-center mx-auto max-w-screen-xl">
              <Link href="/" className="hidden xl:flex items-center">
                <img
                  className="w-44 h-full xl:w-56 "
                  src="https://res.cloudinary.com/garbhagudi/image/upload/v1633780956/garbhagudi-ivf/SVGs/logo_tyy9tg.svg"
                  alt="logo"
                />
              </Link>
              <Link href="/" className="flex items-center xl:hidden">
                <img
                  className="w-16 h-full "
                  src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1659164257/logos/GG_Vertical_Logo_nrcl5h.svg"
                  alt="logo"
                />
              </Link>
              <div className="flex items-center lg:order-2">
                <Link
                  href="https://consult.bestdocapp.com/home/GARBHAGUDI"
                  target={"_blank"}
                  rel="noreferrer"
                  className="px-3 py-2 text-sm font-semibold text-white cursor-pointer bg-brandPink rounded-2xl font-content hover:bg-brandPink3"
                >
                  Book Now
                </Link>
                <div className="flex items-center justify-center ml-2 -mr-2 xl:hidden">
                  <div className="z-10 mr-4">
                    <LanguageSelect />
                  </div>
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-900 rounded-full hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                  >
                    <div className="sr-only">Open main menu</div>
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
              <div
                className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                id="mobile-menu-2"
              >
                <div className="py-2 flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                  <div className="hidden xl:block">
                    <div className="flex items-baseline space-x-4 ">
                      <div className="px-2 py-2 text-sm font-bold text-gray-700 hover:bg-brandPink hover:text-white rounded-lg font-content transition-all ease-in duration-200">
                        <Treatments />
                      </div>

                      <div className="px-2 py-2 text-sm font-bold text-gray-700 hover:bg-brandPink hover:text-white rounded-lg font-content transition-all ease-in duration-200">
                        <About />
                      </div>

                      <div className="px-2 py-2 text-sm font-bold text-gray-700 hover:bg-brandPink hover:text-white rounded-lg font-content transition-all ease-in duration-200">
                        <WhyGarbhaGudi />
                      </div>

                      <div className="px-2 py-2 text-sm font-bold text-gray-700 hover:bg-brandPink hover:text-white rounded-lg font-content transition-all ease-in duration-200">
                        <KnowledgeCenter />
                      </div>
                      <div className="px-2 py-2 text-sm font-bold text-gray-700 hover:bg-brandPink hover:text-white rounded-lg font-content transition-all ease-in duration-200">
                        <Contacts />
                      </div>
                      <div className="px-2 py-2 text-sm font-bold text-gray-700 hover:bg-brandPink hover:text-white rounded-lg font-content transition-all ease-in duration-200">
                        <Locations />
                      </div>
                      <div className="px-2 py-2 text-sm font-bold text-gray-700 hover:bg-brandPink hover:text-white rounded-lg font-content transition-all ease-in duration-200">
                        <Languages />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="mt-1 xl:hidden bg-white" id="mobile-menu">
            <div className="">
              <div className="block px-3 py-2 text-sm rounded-md text-brandDark hover:bg-brandPink hover:text-white font-content">
                <div>
                  <Treatments />
                </div>
              </div>

              <div className="block px-3 py-2 text-sm rounded-md text-brandDark hover:bg-brandPink hover:text-white font-content">
                <div onClick={() => setIsOpen(!isOpen)}>
                  <About />
                </div>
              </div>

              <div
                className="block px-3 py-2 text-sm rounded-md text-brandDark hover:bg-brandPink hover:text-white font-content"
                onClick={() => setIsOpen(!isOpen)}
              >
                <WhyGarbhaGudi />
              </div>
              <div
                className="block px-3 py-2 text-sm rounded-md text-brandDark hover:bg-brandPink hover:text-white font-content"
                onClick={() => setIsOpen(!isOpen)}
              >
                <KnowledgeCenter />
              </div>
              <div
                className="block px-3 py-2 text-sm rounded-md text-brandDark hover:bg-brandPink hover:text-white font-content"
                onClick={() => setIsOpen(!isOpen)}
              >
                <Contacts />
              </div>
              <div className="block px-3 py-2 text-sm rounded-md text-brandDark hover:bg-brandPink hover:text-white font-content">
                <Locations />
              </div>
              <Link
                href="https://consult.bestdocapp.com/home/GARBHAGUDI"
                target={"_blank"}
                rel="noreferrer"
                onClick={() => setIsOpen(!isOpen)}
                className="block px-3 py-2 text-opacity-90 text-sm rounded-md cursor-pointer text-brandDark hover:bg-brandPink hover:text-white font-content"
              >
                Book an Appointment
              </Link>
            </div>
          </div>
        </Transition>
      </nav>
    </div>
  );
};

export default Nav;
