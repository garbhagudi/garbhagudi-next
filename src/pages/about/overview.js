import React from "react";
import Header from "sections/about/header";
import { gql, GraphQLClient } from "graphql-request";
import Link from "next/link";

const Overview = ({ directors }) => {
  return (
    <div>
      <Header />
      <div className="bg-white">
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
            <div className="space-y-5 sm:space-y-4">
              <h2 className="text-4xl tracking-tight sm:text-5xl md:text-6xl font-content font-bold text-brandliteGray">
                Founders and Directors
              </h2>
            </div>
            <div className="lg:col-span-2">
              <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8">
                {directors.map((item) => (
                  <li key={item.id}>
                    <Link href={`/about/executive-team/${item.slug}`} passHref>
                      <div className="space-y-4">
                        <div className="aspect-w-3 aspect-w-2">
                          <img
                            className="object-fit shadow-2xl rounded-3xl"
                            src={item.image.url}
                            alt={item.name}
                          />
                        </div>
                        <div className="text-lg leading-6 font-medium space-y-2">
                          <h3 className="text-2xl font-semibold font-heading text-brandDark">
                            {item.name}
                          </h3>
                          <p className="font-qs font-semibold text-brandPink text-sm">
                            {item.details}
                          </p>
                        </div>
                        <div className="text-lg">
                          <p className="text-gray-500 font-content">
                            {item.description}
                          </p>
                          <p className="mt-3 text-brandPurple underline text-sm hover:text-brandPink cursor-pointer">
                            Read More {">"}{" "}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;

export const getServerSideProps = async () => {
  const url = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: `Bearer ${process.env.GRAPH_CMS_TOKEN}`,
    },
  });
  const query = gql`
    query {
      directors {
        name
        details
        slug
        image {
          url
        }
        id
        description
      }
    }
  `;

  const data = await graphQLClient.request(query);
  const directors = data.directors;
  return {
    props: {
      directors,
    },
  };
};
