import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

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
};

export default function Footer() {
  return (
    <footer
      className="bg-neutral-50 font-content"
      aria-labelledby="footerHeading"
    >
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
        <div className="mt-8 space-x-2 flex items-ceter justify-center">
          <SocialIcon
            url="https://www.youtube.com/c/GarbhaGudiIVFCentre"
            style={{ width: "40px", height: "40px" }}
          />
          <SocialIcon
            url="https://www.facebook.com/garbhagudiIVF/"
            style={{ width: "40px", height: "40px" }}
          />
          <SocialIcon
            url="https://in.linkedin.com/company/garbhagudi-ivf-center"
            style={{ width: "40px", height: "40px" }}
          />
          <SocialIcon
            url="https://api.whatsapp.com/send/?phone=918884183338&text=Hi."
            style={{ width: "40px", height: "40px" }}
          />
          <SocialIcon
            url="https://twitter.com/garbhagudiivf"
            style={{ width: "40px", height: "40px" }}
          />
          <SocialIcon
            url="mailto:dreams@garbhagudi.com"
            style={{ width: "40px", height: "40px" }}
          />
        </div>
        <p className="font-content text-gray-900 text-center py-8">
          &copy; {new Date().getFullYear()} GarbhaGudi IVF Centre, Inc. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
