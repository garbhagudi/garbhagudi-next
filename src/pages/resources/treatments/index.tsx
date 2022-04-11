import React from "react";
import graphcms from "lib/graphcms";
import Link from "next/link";
import { Tab } from "@headlessui/react";
import Head from "next/head";
import BreadCrumbs from "components/breadcrumbs";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const IndexPage = ({ treatments }) => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Treatment | GarbhaGudi</title>
        <meta name="title" content="Treatment | GarbhaGudi IVF Centre" />
        <meta
          name="description"
          content="Treatment options, procedure details and advanced treatment options for male and female infertility treatment available at GarbhaGudi"
        />

        {/* Open Graph / Facebook */}

        <meta property="og:title" content="Treatment | GarbhaGudi IVF Centre" />
        <meta property="og:site_name" content="GarbhaGudi IVF Centre" />
        <meta property="og:url" content="https://garbhagudi.com" />
        <meta
          property="og:description"
          content="Treatment options, procedure details and advanced treatment options for male and female infertility treatment available at GarbhaGudi"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Cau_Diag_Treat_d0t3vx.jpg"
        />

        {/* Twitter*/}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@garbhagudiivf" />
        <meta
          name="twitter:title"
          content="Treatment | GarbhaGudi IVF Centre"
        />
        <meta
          name="twitter:description"
          content="Treatment options, procedure details and advanced treatment options for male and female infertility treatment available at GarbhaGudi"
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Cau_Diag_Treat_d0t3vx.jpg"
        />
      </Head>
      <BreadCrumbs
        link1="/resources/treatments"
        text1="Resources"
        text2="Treatments"
        link2="/resources/treatments"
        link3={""}
        text3={""}
        link4={""}
        text4={""}
      />
      <div className="max-w-7xl mx-auto">
        <div className="text-center text-4xl font-heading pt-12 font-semibold">
          Treatment Options
        </div>
        <div className="w-full max-w-7xl px-2 py-16 sm:px-0">
          <Tab.Group>
            <Tab.List className={"flex p-1 space-x-1 bg-brandPink rounded-xl"}>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full py-2.5 text-sm font-medium text-brandPink rounded-lg",
                    "focus:outline-none",
                    selected
                      ? "bg-gray-100 ring-2 ring-brandPink2 shadow"
                      : "text-gray-100 hover:bg-brandPink3 hover:text-white"
                  )
                }
              >
                <div className="max-w-7xl mx-auto text-center text-sm md:text-2xl font-heading font-semibold">
                  Female Infertility
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
                <div className="max-w-7xl mx-auto text-center text-sm md:text-2xl font-heading font-semibold">
                  Male Infertility
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
                  Advanced Options
                </div>
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <div className="max-w-7xl mx-auto py-6 flex sm:py-12">
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4 mx-auto">
                    {treatments.map((item) => {
                      if (item.category == "Female") {
                        return (
                          <Link
                            href={`treatments/${item.slug}`}
                            passHref
                            key={item.id}
                          >
                            <div className="border-brandPink w-96 px-4 py-3 border-solid rounded-2xl border-2 flex cursor-pointer hover:bg-brandPink hover:text-white hover:border-transparent transition-colors duration-100 ">
                              <div className="w-1/3">
                                <img
                                  className="w-16 h-16 object-cover rounded-full"
                                  src={item.icon.url}
                                  alt={item.title}
                                />
                              </div>
                              <div className="w-2/3 flex flex-col justify-center text-left">
                                <p className="font-semibold text-lg font-qs">
                                  {item.title}
                                </p>
                              </div>
                            </div>
                          </Link>
                        );
                      }
                    })}
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="max-w-7xl mx-auto py-6 flex sm:py-12">
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4 mx-auto">
                    {treatments.map((item) => {
                      if (item.category == "Male") {
                        return (
                          <Link
                            href={`treatments/${item.slug}`}
                            passHref
                            key={item.id}
                          >
                            <div className="border-brandPink w-96 px-4 py-3 border-solid rounded-2xl border-2 flex cursor-pointer hover:bg-brandPink hover:text-white hover:border-transparent transition-colors duration-100 ">
                              <div className="w-1/3">
                                <img
                                  className="w-16 h-16 object-cover rounded-full"
                                  src={item.icon.url}
                                  alt={item.title}
                                />
                              </div>
                              <div className="w-2/3 flex flex-col justify-center text-left">
                                <p className="font-semibold text-lg font-qs">
                                  {item.title}
                                </p>
                              </div>
                            </div>
                          </Link>
                        );
                      }
                    })}
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="max-w-7xl mx-auto py-6 flex sm:py-12">
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4 mx-auto">
                    {treatments.map((item) => {
                      if (item.category == "Advanced") {
                        return (
                          <Link
                            href={`treatments/${item.slug}`}
                            passHref
                            key={item.id}
                          >
                            <div className="border-brandPink w-96 px-4 py-3 border-solid rounded-2xl border-2 flex cursor-pointer hover:bg-brandPink hover:text-white hover:border-transparent transition-colors duration-100 ">
                              <div className="w-1/3">
                                <img
                                  className="w-16 h-16 object-cover rounded-full"
                                  src={item.icon.url}
                                  alt={item.title}
                                />
                              </div>
                              <div className="w-2/3 flex flex-col justify-center text-left">
                                <p className="font-semibold text-lg font-qs">
                                  {item.title}
                                </p>
                              </div>
                            </div>
                          </Link>
                        );
                      }
                    })}
                  </div>
                </div>
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
  const { treatments } = await graphcms.request(`
    query {
      treatments {
        category
        title
        id
        icon {
          url
        }
        slug
      }
    }
  `);

  return {
    props: {
      treatments,
    },
    revalidate: 180,
  };
};
