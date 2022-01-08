import React from "react";
import { gql, GraphQLClient } from "graphql-request";
import Link from "next/link";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const IndexPage = ({ treatments }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center text-4xl font-heading pt-12 font-semibold">
        Treatment Options
      </div>
      <p className="max-w-7xl mx-auto text-center pt-6 font-semibold">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod eaque
        alias illo delectus harum recusandae.
      </p>
      <div className="w-full max-w-7xl px-2 py-16 sm:px-0">
        <Tab.Group>
          <Tab.List className={"flex p-1 space-x-1 bg-brandDark rounded-xl"}>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm  font-medium text-brandPink rounded-lg",
                  "focus:outline-none",
                  selected
                    ? "bg-gray-100 ring-2 ring-brandPink shadow"
                    : "text-gray-200 hover:bg-brandliteGray hover:text-white"
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
                    ? "bg-gray-100 ring-2 ring-brandPink shadow"
                    : "text-gray-200 hover:bg-brandliteGray hover:text-white"
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
                    ? "bg-gray-100 ring-2 ring-brandPink shadow-xl"
                    : "text-gray-200 hover:bg-brandliteGray  hover:text-white"
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
  `;

  const data = await graphQLClient.request(query);
  const treatments = data.treatments;
  return {
    props: {
      treatments,
    },
  };
};
