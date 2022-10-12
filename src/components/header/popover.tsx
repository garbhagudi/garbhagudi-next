import { Popover, Transition } from "@headlessui/react";
import { HiChevronDown } from "react-icons/hi";
import { Fragment } from "react";
import Link from "next/link";

const contact = [
  {
    name: "GG CARE",
    href: "/gg-care",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1643459544/Icons/Contact/GG_Care_e7e1pc.svg",
  },

  {
    name: "Careers",
    href: "/careers",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1643264774/Icons/Contact/Careers_cgpaic.svg",
  },
  {
    name: "Training Program",
    href: "https://ggirhr.com",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1643264793/Icons/Contact/Training_Program_dh9imv.svg",
  },
  // {
  //   name: "Upcoming Camps",
  //   href: "##",
  //   icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1643264796/Icons/Contact/Up_coming_camps_pczhfy.svg",
  // },
  {
    name: "Partnership",
    href: "/contact/partnership",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1643264809/Icons/Contact/Partnership_srnnr9.svg",
  },
];

const language = [
  {
    name: "English",
    href: "/",
  },
  {
    name: "ಕನ್ನಡ ",
    href: "https://kannada.garbhagudi.com",
  },
];

const Resources = [
  {
    name: "Blogs",
    description: "Blogs regarding Infertility, treatment and parenthood",
    href: "/blogs/page/1",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642839773/Icons/Resources/Blogs_duatrt.svg",
  },
  {
    name: "Causes",
    description: "The Major Causes for Infertility",
    href: "/resources/causes/",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642839775/Icons/Resources/Causes_cfivce.svg",
  },
  {
    name: "Diagnosis",
    description: "Tests for Infertility Diagnosis",
    href: "/resources/diagnosis",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642839791/Icons/Resources/Diagnosis_psjq8s.svg",
  },
  {
    name: "Treatments",
    description: "Treatment Options",
    href: "/resources/treatments",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642839802/Icons/Resources/Treatments_kcqops.svg",
  },
  {
    name: "Tools",
    description: "Ovulation & Fertility Quotient Calculators",
    href: "/resources/tools",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1654849032/Icons/Resources/Calculator_bxkdl9.svg",
  },
  {
    name: "Video Resources",
    description: "Informational video from our social platforms",
    href: "/resources/video-resources",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1643442839/Icons/About/Media_nyook4.svg",
  },
  {
    name: "FAQ",
    description: "Frequently Asked Questions",
    href: "/resources/faq",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1643264858/Icons/Resources/FAQs_x8rsvf.svg",
  },
  {
    name: "Myths & Facts",
    description: "Common myths related to health and fertility.",
    href: "/resources/myths-and-facts",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1656676913/Icons/Resources/MYTH_FACT_wdure8.svg",
  },
];

const Location = [
  {
    name: "Hanumanthanagar",
    href: "/locations/hanumanthanagar",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1643351546/Icons/Locations/Hanumanthanagar_ykripm.svg",
  },
  {
    name: "Kalyan Nagar",
    href: "/locations/kalyan-nagar",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1643351546/Icons/Locations/Kalyan_Nagar_ivtier.svg",
  },
  {
    name: "Jayanagar",
    href: "/locations/jayanagar",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1665574596/Icons/Locations/JN_Icon_ysrrvv.svg",
  },
  {
    name: "Electronic City",
    href: "/locations/electronic-city",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1643351530/Icons/Locations/Electronic_City_xntwob.svg",
  },
  {
    name: "Marathahalli",
    href: "/locations/marathahalli",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1643351530/Icons/Locations/Marathahalli_p99ljc.svg",
  },
];

const valueAddedServices = [
  {
    name: "High Success Rates",
    href: "/features/success-rates-of-ivf",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642841374/Icons/Why%20GarbhaGudi/Success_Rate_abmaf0.svg",
  },
  {
    name: "World-Class Care",
    href: "/features/world-class-fertility-care",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642840286/Icons/Features/World_Class_Fertility_Care_un83f6.svg",
  },
  {
    name: "Top Fertility Specialists",
    href: "/locations/fertility-experts",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642840305/Icons/Features/Top_Fertility_Specialists_zkyl9x.svg",
  },
  {
    name: "Afforbable Treatments",
    href: "/features/affordable-treatments",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642840310/Icons/Features/Affordable_Treatment_lwaaku.svg",
  },
  {
    name: "Holistic Approach",
    href: "/features/holistic-approach",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642841451/Icons/Why%20GarbhaGudi/Holistic_Approach_sxh54y.svg",
  },
  {
    name: "Financing Options",
    href: "/features/financing-options",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642840329/Icons/Features/Financial_Options_rrv8hi.svg",
  },
  {
    name: "Treatment Protocols",
    href: "/features/treatment-protocols",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642840352/Icons/Features/Treatment_Protocols_hll4cu.svg",
  },
  {
    name: "IVF from Home",
    href: "/features/ivf-from-home",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642841462/Icons/Why%20GarbhaGudi/IVF_from_Home_qriw7n.svg",
  },
  {
    name: "Best in Class Facilities",
    href: "/features/best-in-class-facilities",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642840357/Icons/Features/Best_in_Class_Facilities_fchmjr.svg",
  },
  {
    name: "Paripoorna",
    href: "/features/paripoorna",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642841468/Icons/Why%20GarbhaGudi/Paripoorna_nikziu.svg",
  },
  {
    name: "GarbhaGriha",
    href: "/features/garbhagriha",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642841473/Icons/Why%20GarbhaGudi/GarbhaGriha_gyai6w.svg",
  },
];

const aboutUs = [
  {
    name: "About Us",
    href: "/about/overview",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642838895/Icons/About/About_Us_01_yz3h95.svg",
  },
  {
    name: "Mission & Vision",
    href: "/about/vision-and-mission",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642839038/Icons/About/Vision_jaxu8d.svg",
  },
  {
    name: "Dr Asha S Vijay",
    href: "/doctors/dr-asha-s-vijay",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642838895/Icons/About/Asha_Vijay_zpq05s.svg",
  },
  {
    name: "Founders & Directors",
    href: "/about/overview",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642839222/Icons/About/Directors_w3497h.svg",
  },
  {
    name: "Our Fertility Experts",
    href: "/locations/fertility-experts",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642839012/Icons/About/Our_Fertility_Experts_bxsrrh.svg",
  },
  // {
  //   name: "Media",
  //   href: "/media",
  //   icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1643442839/Icons/About/Media_nyook4.svg",
  // },
  {
    name: "CSR",
    href: "https://garbhagnan.org",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1643442833/Icons/About/CSR_qjlfzx.svg",
  },
  {
    name: "Awards & Accolades",
    href: "/about/awards-and-accolades",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642838895/Icons/About/Awards_Accorlads_z68rlr.svg",
  },
];

export function About() {
  return (
    <Popover className="relative">
      {({ close }) => (
        <>
          <Popover.Button
            className={`
                ${close ? "w-screen text-left sm:w-full" : "text-opacity-90"}
                 `}
          >
            <span>
              About <HiChevronDown className="inline-block" />
            </span>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 w-screen max-w-md px-4 transform -translate-x-1/2 mt-7 left-1/2 sm:px-0 lg:max-w-xl">
              <div className="overflow-hidden shadow-lg rounded-3xl ring-1 ring-black ring-opacity-5">
                <div className="relative grid grid-cols-2 gap-8 p-5 bg-white lg:grid-cols-2">
                  {aboutUs.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <a
                        onClick={() => close()}
                        className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-pink-100 focus:outline-none"
                      >
                        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                          <img src={item.icon} alt={item.name} />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900 font-content">
                            {item.name}
                          </p>
                        </div>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

export function Treatment() {
  return (
    <Popover className="relative">
      {({ close }) => (
        <>
          <Popover.Button
            className={`
                  ${close ? "w-screen text-left sm:w-full" : "text-opacity-90"}
                   `}
          >
            <span className="w-full">
              Why GarbhaGudi
              <HiChevronDown className="inline-block" />
            </span>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 w-screen max-w-md px-4 transform -translate-x-1/2 mt-7 left-1/2 sm:px-0 lg:max-w-3xl">
              <div className="overflow-hidden shadow-lg rounded-3xl ring-1 ring-black ring-opacity-5">
                <div className="relative grid grid-cols-2 gap-8 p-5 bg-white lg:grid-cols-3">
                  {valueAddedServices.map((item) => (
                    <Link key={item.name} href={item.href} passHref>
                      <a
                        className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-pink-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                        onClick={() => close()}
                      >
                        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                          <img src={item.icon} alt={item.name} />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900">
                            {item.name}
                          </p>
                        </div>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

export function KnowledgeCenter() {
  return (
    <Popover className="relative">
      {({ close }) => (
        <>
          <Popover.Button
            className={`
                  ${close ? "w-screen text-left sm:w-full" : "text-opacity-90"}
                  `}
          >
            <span className="w-full">
              Resources <HiChevronDown className="inline-block" />
            </span>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 w-screen max-w-xl px-4 transform -translate-x-1/2 mt-7 left-1/2 sm:px-0 lg:max-w-xl">
              <div className="overflow-hidden shadow-lg rounded-3xl ring-1 ring-black ring-opacity-5">
                <div className="relative grid grid-cols-2 gap-8 p-5 bg-white">
                  {Resources.map((item) => (
                    <Link key={item.name} href={item.href} passHref>
                      <a
                        className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-pink-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                        onClick={() => close()}
                      >
                        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                          <img src={item.icon} alt={item.name} />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900">
                            {item.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {item.description}
                          </p>
                        </div>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

export function Contact() {
  return (
    <Popover className="relative">
      {({ close }) => (
        <>
          <Popover.Button
            className={`
                  ${close ? "w-screen text-left sm:w-full" : "text-opacity-90"}
                  `}
          >
            <span className="w-full">
              Contact <HiChevronDown className="inline-block" />
            </span>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 px-4 transform -translate-x-1/2 w-96 mt-7 left-1/2 sm:px-0 lg:max-w-xl">
              <div className="overflow-hidden shadow-lg rounded-3xl ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-8 p-5 bg-white lg:grid-cols-1">
                  {contact.map((item) => (
                    <Link key={item.name} href={item.href} passHref>
                      <a
                        onClick={() => close()}
                        className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-pink-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                          <img src={item.icon} alt={item.name} />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900">
                            {item.name}
                          </p>
                        </div>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

export function Locations() {
  return (
    <Popover className="relative">
      {({ close }) => (
        <>
          <Popover.Button
            className={`
                ${close ? "w-screen text-left sm:w-full" : "text-opacity-90"}
                 `}
          >
            <span className="w-full">
              Locations <HiChevronDown className="inline-block" />
            </span>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 px-4 mt-3 transform -translate-x-1/2 w-96 left-1/2 sm:px-0 lg:max-w-xl">
              <div className="overflow-hidden shadow-lg rounded-3xl ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-8 p-5 bg-white lg:grid-cols-1">
                  {Location.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <a
                        onClick={() => close()}
                        className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-pink-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                          <img src={item.icon} alt={item.name} />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900">
                            {item.name}
                          </p>
                        </div>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

export function Language() {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={`
                ${open ? "w-screen text-left sm:w-full" : "text-opacity-90"}
                 `}
          >
            <span className="w-full">
              Language <HiChevronDown className="inline-block" />
            </span>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 w-32 px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-xl">
              <div className="overflow-hidden shadow-lg rounded-xl ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-8 p-5 bg-white lg:grid-cols-1">
                  {language.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-pink-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">
                          {item.name}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
