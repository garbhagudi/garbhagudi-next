import React from "react";
import Link from "next/link";

const BreadCrumbs = ({
  link1,
  text1,
  link2,
  text2,
  link3,
  text3,
  link4,
  text4,
}: {
  link1: string;
  text1: string;
  link2: string;
  text2: string;
  link3: string;
  text3: string;
  link4: string;
  text4: string;
}) => {
  return (
    <div>
      <nav
        className="flex py-3 px-5 rounded-lg font-semibold font-content z-10"
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link passHref href="/">
              <span className="inline-flex items-center text-sm font-semibold cursor-pointer text-brandDark hover:text-brandPink2">
                <svg
                  className="mr-2 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                Home
              </span>
            </Link>
          </li>
          {link1 && (
            <li>
              <div className="flex items-center cursor-pointer">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <a
                  href={link1}
                  className="ml-1 text-sm text-brandDark hover:text-brandPink2"
                >
                  {text1}
                </a>
              </div>
            </li>
          )}
          {text2 && (
            <li aria-current="page">
              <Link href={link2} passHref>
                <div className="flex items-center cursor-pointer">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="ml-1 text-sm cursor-pointer text-brandDark hover:text-brandPink2">
                    {text2}
                  </span>
                </div>
              </Link>
            </li>
          )}
          {text3 && (
            <li aria-current="page">
              <Link href={link3} passHref>
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="ml-1 text-sm font-medium text-brandDark hover:text-brandPink2">
                    {text3}
                  </span>
                </div>
              </Link>
            </li>
          )}
          {text4 && (
            <li aria-current="page">
              <Link href={link4} passHref>
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="ml-1 text-sm font-medium text-brandDark hover:text-brandPink2">
                    {text4}
                  </span>
                </div>
              </Link>
            </li>
          )}
        </ol>
      </nav>
    </div>
  );
};

export default BreadCrumbs;
