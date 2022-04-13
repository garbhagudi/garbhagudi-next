import React from "react";
import Link from "next/link";
import { Tab } from "@headlessui/react";
import { gql, GraphQLClient } from "graphql-request";
import Head from "next/head";
import BreadCrumbs from "components/breadcrumbs";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const IndexPage = ({ doctors }) => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Our Fertility Experts | GarbhaGudi IVF Center</title>
        <meta
          name="title"
          content="Our Fertility Experts | GarbhaGudi IVF Centre"
        />
        <meta
          name="description"
          content="Our team of fertility specialists has been known for their extensive clinical experience and research contributions and their success in treating the most challenging fertility cases."
        />

        {/* Open Graph / Facebook */}

        <meta
          property="og:title"
          content="Our Fertility Experts | GarbhaGudi IVF Centre"
        />
        <meta property="og:site_name" content="GarbhaGudi IVF Centre" />
        <meta property="og:url" content="https://garbhagudi.com" />
        <meta
          property="og:description"
          content="Our team of fertility specialists has been known for their extensive clinical experience and research contributions and their success in treating the most challenging fertility cases."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.jpg"
        />

        {/* Twitter*/}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@garbhagudiivf" />
        <meta
          name="twitter:title"
          content="Our Fertility Experts | GarbhaGudi IVF Centre"
        />
        <meta
          name="twitter:description"
          content="Our team of fertility specialists has been known for their extensive clinical experience and research contributions and their success in treating the most challenging fertility cases."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.jpg"
        />
      </Head>
      <BreadCrumbs
        text1="About"
        link1="/about/overview"
        text2="Our Fertility Experts"
        link2="#"
        link3={""}
        text3={""}
        link4={""}
        text4={""}
      />
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-4xl font-heading pt-12 font-semibold">
          Our Fertility Experts
        </h1>
        <p className="text-md text-brandDark font-content max-w-4xl mx-auto text-center mt-4">
          Our team of fertility specialists have been known for their extensive
          clinical experience and research contributions and their success in
          treating the most challenging fertility cases.
        </p>
        <div className="w-full max-w-7xl px-2 py-16 sm:px-0 ">
          <Tab.Group vertical>
            <Tab.List
              className={
                "flex flex-wrap lg:flex-nowrap md:space-x-1 bg-brandPink rounded-xl p-1"
              }
            >
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full py-2.5 text-sm  font-medium text-brandPink rounded-lg",
                    "focus:outline-none",
                    selected
                      ? "bg-gray-100 ring-2 ring-brandPink2 shadow"
                      : "text-gray-100 hover:bg-brandPink3 hover:text-white"
                  )
                }
              >
                <div className="mx-auto text-center text-sm md:text-2xl font-heading font-semibold">
                  Hanumanthanagar
                </div>
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full py-2.5 text-sm font-medium text-brandPink rounded-lg",
                    "focus:outline-none",
                    selected
                      ? "bg-gray-100 ring-2 ring-brandPink2 shadow-xl"
                      : "text-gray-100 hover:bg-brandPink3  hover:text-white"
                  )
                }
              >
                <div className="max-w-7xl mx-auto text-center text-sm md:text-2xl font-heading font-semibold">
                  Kalyan Nagar
                </div>
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full py-2.5 text-sm  font-medium text-brandPink rounded-lg",
                    "focus:outline-none",
                    selected
                      ? "bg-gray-100 ring-2 ring-brandPink2 shadow"
                      : "text-gray-100 hover:bg-brandPink3 hover:text-white"
                  )
                }
              >
                <div className="mx-auto text-center text-sm md:text-2xl font-heading font-semibold">
                  South-End Circle
                </div>
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full py-2.5 text-sm font-medium text-brandPink rounded-lg",
                    "focus:outline-none",
                    selected
                      ? "bg-gray-100 ring-2 ring-brandPink2 shadow-xl"
                      : "text-gray-100 hover:bg-brandPink3  hover:text-white"
                  )
                }
              >
                <div className="max-w-7xl mx-auto text-center text-sm md:text-2xl font-heading font-semibold">
                  Electronic City
                </div>
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full py-2.5 text-sm font-medium text-brandPink rounded-lg",
                    "focus:outline-none",
                    selected
                      ? "bg-gray-100 ring-2 ring-brandPink2 shadow-xl"
                      : "text-gray-200 hover:bg-brandPink3  hover:text-white"
                  )
                }
              >
                <div className="max-w-7xl mx-auto text-center text-sm md:text-2xl font-heading font-semibold">
                  Marathahalli
                </div>
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <section className="text-gray-600 body-font relative max-w-7xl mx-auto">
                  <div className="py-12 flex flex-wrap lg:flex-nowrap inset-0 ">
                    <div className="lg:w-1/2 bg-gray-300 rounded-3xl overflow-hidden p-2 lg:p-10 flex items-end justify-start relative h-[44rem] md:ml-auto w-full">
                      <iframe
                        width="100%"
                        height="100%"
                        className="absolute inset-0"
                        frameBorder="0"
                        loading="lazy"
                        title="map"
                        scrolling="no"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15553.886019164418!2d77.556468!3d12.9416527!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x61c537027ad19840!2sGarbhaGudi%20IVF%20Centre%2C%20Hanumanthanagar.!5e0!3m2!1sen!2sin!4v1641896590112!5m2!1sen!2sin"
                      ></iframe>
                      <div className="bg-white relative flex flex-wrap py-6 rounded-3xl shadow-3xl">
                        <div className="lg:w-1/2 px-6">
                          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs font-qs">
                            ADDRESS
                          </h2>
                          <p className="mt-1 font-content">
                            Subhasri Complex, 210/A, Kumaraswamy Temple Rd, 2nd
                            Block, Phase 1, Banashankari Stage I, Banashankari,
                            Bengaluru, Karnataka 560050
                          </p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                          <h2 className="font-semibold text-gray-900 tracking-widest text-xs font-qs">
                            EMAIL
                          </h2>
                          <a className="text-indigo-500 leading-relaxed">
                            <a
                              href="mailto:dreams@garbhagudi.com"
                              className="text-brandPink font-qs"
                            >
                              dreams@garbhagudi.com
                            </a>
                          </a>
                          <h2 className="font-semibold text-gray-900 tracking-widest text-xs mt-4 font-qs">
                            PHONE
                          </h2>
                          <p className="leading-relaxed font-qs">
                            <a href="tel:+918880000909">+91 888 000 0909</a>
                          </p>
                          <h2 className="font-semibold text-gray-900 tracking-widest text-xs mt-4 font-qs">
                            WhatsApp
                          </h2>
                          <p className="leading-relaxed font-qs">
                            <a
                              href="https://wa.me/918884183338?text=Hi."
                              target="_blank"
                              rel="noreferrer"
                            >
                              +91 888 418 3338
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="lg:w-1/2 md:w-full bg-white flex flex-col md:ml-auto w-full md:py-8 md:mt-0 min-h-max">
                      <p className="text-center font-qs text-xl font-semibold mb-10 mt-7 lg:mt-0">
                        Fertility Specialists at HanumanthaNagar
                      </p>
                      <div className="mx-auto space-y-0 grid grid-cols-2 sm:gap-y-10 sm:gap-x-32 sm:space-y-0 lg:grid-cols-2 lg:max-w-7xl col-span-full">
                        {doctors.map((item) => {
                          if (item.location.includes("HanumanthaNagar")) {
                            return (
                              <div className="text-center" key={item?.id}>
                                <Link href={`/doctors/${item?.slug}`} passHref>
                                  <a>
                                    <div className="space-y-4">
                                      <img
                                        className="mx-auto h-40 w-40 my-auto rounded-full mt-4"
                                        src={item?.image.url}
                                        alt={item?.name}
                                      />
                                      <div className="space-y-4">
                                        <div className="text-lg leading-6 font-medium space-y-1">
                                          <h3 className="text-brandDark font-content">
                                            {item?.name}
                                          </h3>
                                          <p className="text-brandPurple text-sm font-content">
                                            {item?.qualification}
                                          </p>
                                          <p className="text-brandPink text-sm font-content">
                                            {item?.designation}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                </Link>
                              </div>
                            );
                          }
                        })}
                      </div>
                    </div>
                  </div>
                </section>
              </Tab.Panel>
              <Tab.Panel>
                <section className="text-gray-600 body-font relative max-w-7xl mx-auto">
                  <div className="py-12 flex flex-wrap lg:flex-nowrap inset-0 ">
                    <div className="lg:w-1/2 bg-gray-300 rounded-3xl overflow-hidden p-2 lg:p-10 flex items-end justify-start relative h-[44rem] md:ml-auto w-full">
                      <iframe
                        width="100%"
                        height="100%"
                        className="absolute inset-0"
                        frameBorder="0"
                        loading="lazy"
                        title="map"
                        scrolling="no"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7774.402186224549!2d77.64597804814905!3d13.022862590006048!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfb184afa11ae1fdd!2sGarbhaGudi%20IVF%20Centre%2C%20Kalyan%20Nagar.!5e0!3m2!1sen!2sin!4v1641899203760!5m2!1sen!2sin"
                      ></iframe>
                      <div className="bg-white relative flex flex-wrap py-6 rounded-3xl shadow-3xl">
                        <div className="lg:w-1/2 px-6">
                          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs font-qs">
                            ADDRESS
                          </h2>
                          <p className="mt-1 font-content">
                            Park Landing, 5AC-709, Outer Ring Rd, Balachandra
                            Layout, HRBR Layout 2nd Block, Chelekare, Extension,
                            Bengaluru, Karnataka 560043
                          </p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                          <h2 className="font-semibold text-gray-900 tracking-widest text-xs font-qs">
                            EMAIL
                          </h2>
                          <a className="text-indigo-500 leading-relaxed">
                            <a
                              href="mailto:dreams@garbhagudi.com"
                              className="text-brandPink font-qs"
                            >
                              dreams@garbhagudi.com
                            </a>
                          </a>
                          <h2 className="font-semibold text-gray-900 tracking-widest text-xs mt-4 font-qs">
                            PHONE
                          </h2>
                          <p className="leading-relaxed font-qs">
                            <a href="tel:+918880000909">+91 888 000 0909</a>
                          </p>
                          <h2 className="font-semibold text-gray-900 tracking-widest text-xs mt-4 font-qs">
                            WhatsApp
                          </h2>
                          <p className="leading-relaxed font-qs">
                            <a
                              href="https://wa.me/918884183338?text=Hi."
                              target="_blank"
                              rel="noreferrer"
                            >
                              +91 888 418 3338
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="lg:w-1/2 md:w-full bg-white flex flex-col md:ml-auto w-full md:py-8 md:mt-0 min-h-max">
                      <p className="text-center font-qs text-xl font-semibold mb-10 mt-7 lg:mt-0">
                        Fertility Specialists at Kalyan Nagar
                      </p>
                      <div className="mx-auto space-y-0 grid grid-cols-2 sm:gap-y-10 sm:gap-x-32 sm:space-y-0 lg:grid-cols-2 lg:max-w-7xl col-span-full">
                        {doctors.map((item) => {
                          if (item.location.includes("KalyanNagar")) {
                            return (
                              <div className="text-center" key={item.id}>
                                <Link href={`/doctors/${item.slug}`} passHref>
                                  <a>
                                    <div className="space-y-4">
                                      <img
                                        className="mx-auto h-40 w-40 my-auto rounded-full mt-4"
                                        src={item.image.url}
                                        alt={item.name}
                                      />
                                      <div className="space-y-4">
                                        <div className="text-lg leading-6 font-medium space-y-1">
                                          <h3 className="text-brandDark font-content">
                                            {item.name}
                                          </h3>
                                          <p className="text-brandPurple text-sm font-content">
                                            {item.qualification}
                                          </p>
                                          <p className="text-brandPink text-sm font-content">
                                            {item.designation}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                </Link>
                              </div>
                            );
                          }
                        })}
                      </div>
                    </div>
                  </div>
                </section>
              </Tab.Panel>
              <Tab.Panel>
                <section className="text-gray-600 body-font relative max-w-7xl mx-auto">
                  <div className="py-12 flex flex-wrap lg:flex-nowrap inset-0 ">
                    <div className="lg:w-1/2 bg-gray-300 rounded-3xl overflow-hidden p-2 lg:p-10 flex items-end justify-start relative h-[44rem] md:ml-auto w-full">
                      <iframe
                        width="100%"
                        height="100%"
                        className="absolute inset-0"
                        frameBorder="0"
                        loading="lazy"
                        title="map"
                        scrolling="no"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15554.13494747385!2d77.5796657!3d12.9376617!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1f870d0e467c8c8a!2sGarbhaGudi%20IVF%20Centre%2C%20South%20End%20Circle.!5e0!3m2!1sen!2sin!4v1641897947020!5m2!1sen!2sin"
                      ></iframe>
                      <div className="bg-white relative flex flex-wrap py-6 rounded-3xl shadow-3xl">
                        <div className="lg:w-1/2 px-6">
                          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs font-qs">
                            ADDRESS
                          </h2>
                          <p className="mt-1 font-content">
                            South End Circle, 26, Pattalamma Temple Rd,
                            Basavanagudi, Bengaluru, Karnataka 560004
                          </p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                          <h2 className="font-semibold text-gray-900 tracking-widest text-xs font-qs">
                            EMAIL
                          </h2>
                          <a className="text-indigo-500 leading-relaxed">
                            <a
                              href="mailto:dreams@garbhagudi.com"
                              className="text-brandPink font-qs"
                            >
                              dreams@garbhagudi.com
                            </a>
                          </a>
                          <h2 className="font-semibold text-gray-900 tracking-widest text-xs mt-4 font-qs">
                            PHONE
                          </h2>
                          <p className="leading-relaxed font-qs">
                            <a href="tel:+918880000909">+91 888 000 0909</a>
                          </p>
                          <h2 className="font-semibold text-gray-900 tracking-widest text-xs mt-4 font-qs">
                            WhatsApp
                          </h2>
                          <p className="leading-relaxed font-qs">
                            <a
                              href="https://wa.me/918884183338?text=Hi."
                              target="_blank"
                              rel="noreferrer"
                            >
                              +91 888 418 3338
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="lg:w-1/2 md:w-full bg-white flex flex-col md:ml-auto w-full md:py-8 md:mt-0 min-h-max">
                      <p className="text-center font-qs text-xl font-semibold mb-10 mt-7 lg:mt-0">
                        Fertility Specialists at South-End Circle
                      </p>
                      <div className="mx-auto space-y-0 grid grid-cols-2 sm:gap-y-10 sm:gap-x-32 sm:space-y-0 lg:grid-cols-2 lg:max-w-7xl col-span-full">
                        {doctors.map((item) => {
                          if (item.location.includes("Jayanagar")) {
                            return (
                              <div className="text-center" key={item.id}>
                                <Link href={`/doctors/${item.slug}`} passHref>
                                  <a>
                                    <div className="space-y-4">
                                      <img
                                        className="mx-auto h-40 w-40 my-auto rounded-full mt-4"
                                        src={item.image.url}
                                        alt={item.name}
                                      />
                                      <div className="space-y-4">
                                        <div className="text-lg leading-6 font-medium space-y-1">
                                          <h3 className="text-brandDark font-content">
                                            {item.name}
                                          </h3>
                                          <p className="text-brandPurple text-sm font-content">
                                            {item.qualification}
                                          </p>
                                          <p className="text-brandPink text-sm font-content">
                                            {item.designation}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                </Link>
                              </div>
                            );
                          }
                        })}
                      </div>
                    </div>
                  </div>
                </section>
              </Tab.Panel>
              <Tab.Panel>
                <section className="text-gray-600 body-font relative max-w-7xl mx-auto">
                  <div className="py-12 flex flex-wrap lg:flex-nowrap inset-0 ">
                    <div className="lg:w-1/2 bg-gray-300 rounded-3xl overflow-hidden p-2 lg:p-10 flex items-end justify-start relative h-[44rem] md:ml-auto w-full">
                      <iframe
                        width="100%"
                        height="100%"
                        className="absolute inset-0"
                        frameBorder="0"
                        loading="lazy"
                        title="map"
                        scrolling="no"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124455.97184736053!2d77.5509549079939!3d12.891696289434682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c972baa2581%3A0x38dd3f8049f5f606!2sGarbhaGudi%20IVF%20Centre%2C%20Electronic%20City.!5e0!3m2!1sen!2sin!4v1641809188374!5m2!1sen!2sin"
                      ></iframe>
                      <div className="bg-white relative flex flex-wrap py-6 rounded-3xl shadow-3xl">
                        <div className="lg:w-1/2 px-6">
                          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs font-qs">
                            ADDRESS
                          </h2>
                          <p className="mt-1 font-content">
                            Ganesh Towers,3rd Floor, 60/5 and 60/6, NH 44,
                            Beside Andhra Bank, Konappana Agrahara, Electronic
                            City, Bengaluru, Karnataka 560100
                          </p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                          <h2 className="font-semibold text-gray-900 tracking-widest text-xs font-qs">
                            EMAIL
                          </h2>
                          <a className="text-indigo-500 leading-relaxed">
                            <a
                              href="mailto:dreams@garbhagudi.com"
                              className="text-brandPink font-qs"
                            >
                              dreams@garbhagudi.com
                            </a>
                          </a>
                          <h2 className="font-semibold text-gray-900 tracking-widest text-xs mt-4 font-qs">
                            PHONE
                          </h2>
                          <p className="leading-relaxed font-qs">
                            <a href="tel:+918880000909">+91 888 000 0909</a>
                          </p>
                          <h2 className="font-semibold text-gray-900 tracking-widest text-xs mt-4 font-qs">
                            WhatsApp
                          </h2>
                          <p className="leading-relaxed font-qs">
                            <a
                              href="https://wa.me/918884183338?text=Hi."
                              target="_blank"
                              rel="noreferrer"
                            >
                              +91 888 418 3338
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="lg:w-1/2 md:w-full bg-white flex flex-col md:ml-auto w-full md:py-8 md:mt-0 min-h-max">
                      <p className="text-center font-qs text-xl font-semibold mb-10 mt-7 lg:mt-0">
                        Fertility Specialists at Electronic City
                      </p>
                      <div className="mx-auto space-y-0 grid grid-cols-2 sm:gap-y-10 sm:gap-x-32 sm:space-y-0 lg:grid-cols-2 lg:max-w-7xl col-span-full">
                        {doctors.map((item) => {
                          if (item.location.includes("ElectronicCity")) {
                            return (
                              <div className="text-center" key={item.id}>
                                <Link href={`/doctors/${item.slug}`} passHref>
                                  <a>
                                    <div className="space-y-4">
                                      <img
                                        className="mx-auto h-40 w-40 my-auto rounded-full mt-4"
                                        src={item.image.url}
                                        alt={item.name}
                                      />
                                      <div className="space-y-4">
                                        <div className="text-lg leading-6 font-medium space-y-1">
                                          <h3 className="text-brandDark font-content">
                                            {item.name}
                                          </h3>
                                          <p className="text-brandPurple text-sm font-content">
                                            {item.qualification}
                                          </p>
                                          <p className="text-brandPink text-sm font-content">
                                            {item.designation}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                </Link>
                              </div>
                            );
                          }
                        })}
                      </div>
                    </div>
                  </div>
                </section>
              </Tab.Panel>
              <Tab.Panel>
                <section className="text-gray-600 body-font relative max-w-7xl mx-auto">
                  <div className="py-12 flex flex-wrap lg:flex-nowrap inset-0 ">
                    <div className="lg:w-1/2 bg-gray-300 rounded-3xl overflow-hidden p-2 lg:p-10 flex items-end justify-start relative h-[44rem] md:ml-auto w-full">
                      <iframe
                        width="100%"
                        height="100%"
                        className="absolute inset-0"
                        frameBorder="0"
                        loading="lazy"
                        title="map"
                        scrolling="no"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15552.74401242251!2d77.7016368!3d12.9599467!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe3b45ee50de8eedf!2sGarbhaGudi%20IVF%20Centre%2C%20Marathahalli.!5e0!3m2!1sen!2sin!4v1641899595868!5m2!1sen!2sin"
                      ></iframe>
                      <div className="bg-white relative flex flex-wrap py-6 rounded-3xl shadow-3xl">
                        <div className="lg:w-1/2 px-6">
                          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs font-qs">
                            ADDRESS
                          </h2>
                          <p className="mt-1 font-content">
                            4TH floor, Chirag Towers, Born Babies Building, 24 &
                            64, Service Rd, next to कलामंदिर, Marathahalli,
                            Bengaluru, Karnataka 560037
                          </p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                          <h2 className="font-semibold text-gray-900 tracking-widest text-xs font-qs">
                            EMAIL
                          </h2>
                          <a className="text-indigo-500 leading-relaxed">
                            <a
                              href="mailto:dreams@garbhagudi.com"
                              className="text-brandPink font-qs"
                            >
                              dreams@garbhagudi.com
                            </a>
                          </a>
                          <h2 className="font-semibold text-gray-900 tracking-widest text-xs mt-4 font-qs">
                            PHONE
                          </h2>
                          <p className="leading-relaxed font-qs">
                            <a href="tel:+918880000909">+91 888 000 0909</a>
                          </p>
                          <h2 className="font-semibold text-gray-900 tracking-widest text-xs mt-4 font-qs">
                            WhatsApp
                          </h2>
                          <p className="leading-relaxed font-qs">
                            <a
                              href="https://wa.me/918884183338?text=Hi."
                              target="_blank"
                              rel="noreferrer"
                            >
                              +91 888 418 3338
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="lg:w-1/2 md:w-full bg-white flex flex-col md:ml-auto w-full md:py-8 md:mt-0 min-h-max">
                      <p className="text-center font-qs text-xl font-semibold mb-10 mt-7 lg:mt-0">
                        Fertility Specialists at Marathahalli
                      </p>
                      <div className="mx-auto space-y-0 grid grid-cols-2 sm:gap-y-10 sm:gap-x-32 sm:space-y-0 lg:grid-cols-2 lg:max-w-7xl col-span-full">
                        {doctors.map((item) => {
                          if (item.location.includes("Marathahalli")) {
                            return (
                              <div className="text-center" key={item.id}>
                                <Link href={`/doctors/${item.slug}`} passHref>
                                  <a>
                                    <div className="space-y-4">
                                      <img
                                        className="mx-auto h-40 w-40 my-auto rounded-full mt-4"
                                        src={item.image.url}
                                        alt={item.name}
                                      />
                                      <div className="space-y-4">
                                        <div className="text-lg leading-6 font-medium space-y-1">
                                          <h3 className="text-brandDark font-content">
                                            {item.name}
                                          </h3>
                                          <p className="text-brandPurple text-sm font-content">
                                            {item.qualification}
                                          </p>
                                          <p className="text-brandPink text-sm font-content">
                                            {item.designation}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                </Link>
                              </div>
                            );
                          }
                        })}
                      </div>
                    </div>
                  </div>
                </section>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;

export const getStaticProps = async () => {
  const url = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: `Bearer ${process.env.GRAPH_CMS_TOKEN}`,
    },
  });
  const query = gql`
    query {
      doctors {
        name
        qualification
        slug
        location
        image {
          url
        }
        medicalRegNo
        id
        designation
      }
    }
  `;
  const data = await graphQLClient.request(query);
  const doctors = data.doctors;
  return {
    props: {
      doctors,
    },
    revalidate: 180,
  };
};
