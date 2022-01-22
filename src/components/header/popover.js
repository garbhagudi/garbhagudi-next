import { Popover, Transition } from "@headlessui/react";
import { HiChevronDown } from "react-icons/hi";
import { Fragment } from "react";
import Link from "next/link";

const contact = [
  {
    name: "Upcoming Camps",
    description: "Measure actions your users take",
    href: "##",
    icon: IconOne,
  },
  {
    name: "Careers",
    description: "Create your own targeted content",
    href: "/careers",
    icon: IconTwo,
  },

  {
    name: "Locations",
    description: "Keep track of your growth",
    href: "/locations/fertility-experts",
    icon: IconThree,
  },
  {
    name: "Partnership",
    description: "Treatment Options",
    href: "/contact/partnership",
    icon: IconThree,
  },
  {
    name: "Training Program",
    description: "Treatment Options",
    href: "https://ggirhr.com",
    icon: IconThree,
  },
];
const Resources = [
  {
    name: "Blogs",
    description:
      "Our Blogs and Articles regarding Infertility, treatment and parenthood",
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
    name: "Events and Webinars",
    description: "Live Events",
    href: "##",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642839833/Icons/Resources/Events_Webinars_buec8s.svg",
  },
];

const Location = [
  {
    name: "Hanumanthanagar",
    href: "/locations/hanumanthanagar",
    icon: IconOne,
  },
  {
    name: "Kalyan Nagar",
    href: "/locations/kalyan-nagar",
    icon: IconTwo,
  },
  {
    name: "South-End Circle",
    href: "/locations/jayanagar",
    icon: IconThree,
  },
  {
    name: "Electronic City",
    href: "/locations/electronic-city",
    icon: IconThree,
  },
  {
    name: "Marathahalli",
    href: "/locations/marathahalli",
    icon: IconThree,
  },
];

const valueAddedServices = [
  {
    name: "High Success Rates",
    href: "/features/success-rates-of-ivf",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642841374/Icons/Why%20GarbhaGudi/Success_Rate_abmaf0.svg",
  },
  {
    name: "World Class Care",
    href: "/features/success-rates-of-ivf",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642841377/Icons/Why%20GarbhaGudi/World_Class_Fertility_Care_khs8nb.svg",
  },
  {
    name: "Financial Options",
    href: "/features/financial-options",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642841383/Icons/Why%20GarbhaGudi/Financial_Options_gcu75h.svg",
  },
  {
    name: "Holistic Approach",
    href: "/features/holistic-approach",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642841451/Icons/Why%20GarbhaGudi/Holistic_Approach_sxh54y.svg",
  },
  {
    name: "IVF from Home",
    href: "/features/ivf-from-home",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642841462/Icons/Why%20GarbhaGudi/IVF_from_Home_qriw7n.svg",
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
  {
    name: "Awards & Accolades",
    href: "/about/best-ivf-fertility-hospital-in-india",
    icon: "https://res.cloudinary.com/garbhagudiivf/image/upload/v1642838895/Icons/About/Awards_Accorlads_z68rlr.svg",
  },
];

export function About() {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={`
                ${open ? "" : "text-opacity-90"}
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
            <Popover.Panel className="absolute z-10 w-screen max-w-sm px-4 mt-7 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
              <div className="overflow-hidden rounded-3xl shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-8 bg-white p-5 lg:grid-cols-2">
                  {aboutUs.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-3xl hover:bg-gray-50 focus:outline-none"
                    >
                      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                        <img src={item.icon} alt={item.name} />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900 font-content">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-600 font-content">
                          {item.description}
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

export function Treatment() {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={`
                  ${open ? "" : "text-opacity-90"}
                   `}
          >
            <span>
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
            <Popover.Panel className="absolute z-10 w-screen max-w-sm px-4 mt-7 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-3">
                  {valueAddedServices.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-2xl hover:bg-pink-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
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
      {({ open }) => (
        <>
          <Popover.Button
            className={`
                  ${open ? "" : "text-opacity-90"}
                  `}
          >
            <span>
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
            <Popover.Panel className="absolute z-10 w-96 px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-1">
                  {Resources.map((item) => (
                    <Link key={item.name} href={item.href} passHref>
                      <a className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
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
      {({ open }) => (
        <>
          <Popover.Button
            className={`
                  ${open ? "" : "text-opacity-90"}
                  `}
          >
            <span>
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
            <Popover.Panel className="absolute z-10 w-96 px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-8 bg-white p-4 lg:grid-cols-1">
                  {contact.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                        <item.icon aria-hidden="true" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">
                          {item.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {item.description}
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

export function Locations() {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={`
                ${open ? "" : "text-opacity-90"}
                 `}
          >
            <span>
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
            <Popover.Panel className="absolute z-10 w-96 px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-8 bg-white p-5 lg:grid-cols-1">
                  {Location.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                        <item.icon aria-hidden="true" />
                      </div>
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

function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconTwo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconThree() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  );
}
