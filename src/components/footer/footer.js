import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaMailBulk,
} from "react-icons/fa";

const navigation = {
  about: [
    { name: "Vision & Mission", href: "#" },
    { name: "Directors", href: "#" },
    { name: "Awards & Accolades", href: "#" },
    { name: "Dr Asha S Vijay", href: "#" },
  ],
  support: [
    { name: "GG Care", href: "#" },
    { name: "Resources", href: "#" },
    { name: "Contact Us", href: "#" },
  ],
  company: [
    { name: "GarbhaGudi IVF", href: "#" },
    { name: "GGIRHR", href: "#" },
    { name: "GarbhaGudi Pharma", href: "#" },
    { name: "GarbhaGnan Foundation", href: "#" },
  ],
  legal: [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Refunds", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: <FaFacebookF />,
    },
    {
      name: "Instagram",
      href: "#",
      icon: <FaInstagram />,
    },
    {
      name: "Twitter",
      href: "#",
      icon: <FaTwitter />,
    },
    {
      name: "YouTube",
      href: "#",
      icon: <FaYoutube />,
    },
    {
      name: "E-mail",
      href: "#",
      icon: <FaMailBulk />,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white font-content" aria-labelledby="footerHeading">
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:py-8 lg:px-8 border-t">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-full text-center antialiased">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-brandliteGray tracking-wider uppercase">
                  About
                </h3>
                <ul className="mt-4 space-y-2 text-sm">
                  {navigation.about.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className=" text-brandDark hover:text-brandPink hover:underline"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-brandliteGray tracking-wider uppercase">
                  Support
                </h3>
                <ul className="mt-4 space-y-2 text-sm">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-brandDark hover:text-brandPink hover:underline"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-brandliteGray tracking-wider uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-2 text-sm">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className=" text-brandDark hover:text-brandPink hover:underline"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-brandliteGray tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-2 text-sm">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className=" text-brandDark hover:text-brandPink hover:underline"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-gray-200 ">
        <p className="font-content text-gray-900 text-center py-8">
          &copy; 2021 GarbhaGudi IVF Centre, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
