import React from "react";
import { BsChevronRight } from "react-icons/bs";

const Hero = () => {
  return (
    <main className="mt-8 sm:mt-8">
      <div className="mx-auto max-w-7xl">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
            <div>
              <a
                href="#"
                className="inline-flex items-center text-white bg-brandDark rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
              >
                <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-brandPink rounded-full">
                  We&apos;re hiring
                </span>
                <span className="ml-4 text-sm">Visit our careers page</span>
                <BsChevronRight
                  className="ml-2 w-5 h-5 text-gray-500"
                  aria-hidden="true"
                />
              </a>
              <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-brandDark sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                <span className="md:block">Experience the Joy</span>{" "}
                <span className="text-brandPink md:block">
                  of Being Complete
                </span>
              </h1>
              <p className="mt-3 text-base text-brandliteGray sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua ad ad non deserunt sunt.
              </p>
            </div>
          </div>
          <div className="sm:mt-16 lg:mt-0 lg:col-span-6">
            <div className="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
              <div className="px-4 py-8 sm:px-10">
                <div className="mt-6">
                  <form action="#" method="POST" className="space-y-6">
                    <div>
                      <label htmlFor="name" className="sr-only">
                        Full name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="name"
                        placeholder="Full name"
                        required
                        className="block w-full shadow-sm focus:ring-brandDark focus:border-brandDark sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div>
                      <label htmlFor="mobile" className="sr-only">
                        Mobile number
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        id="mobile"
                        placeholder="Mobile"
                        required
                        className="block w-full shadow-sm focus:ring-brandDark focus:border-brandDark sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="sr-only">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        autoComplete="current-email"
                        required
                        className="block w-full shadow-sm focus:ring-brandDark focus:border-brandDark sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brandPink hover:bg-brandDark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brandDark"
                      >
                        Book Appointment
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="px-4 py-6 bg-gray-50 border-t-2 border-gray-200 sm:px-10">
                <p className="text-xs leading-5 text-gray-500">
                  By contacting us, you agree to our{" "}
                  <a
                    href="#"
                    className="font-medium text-gray-900 hover:underline"
                  >
                    Terms
                  </a>
                  ,{" "}
                  <a
                    href="#"
                    className="font-medium text-gray-900 hover:underline"
                  >
                    Data Policy
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="font-medium text-gray-900 hover:underline"
                  >
                    Cookies Policy
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
