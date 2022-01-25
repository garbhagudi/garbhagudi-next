import React from "react";
import Link from "next/link";
import { gql, GraphQLClient } from "graphql-request";

const IndexPage = ({ careers }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center text-4xl font-heading pt-12 font-semibold">
        Careers at GarbhaGudi
      </div>
      <p className="max-w-7xl mx-auto py-2 mt-4 font-content text-lg">
        At GarbhaGudi, we’re all on a mission to transform the way infertility
        is treated, one patient at a time.{" "}
      </p>
      <div className="max-w-7xl mx-auto mt-2 font-content text-lg">
        We go against the status quo and make actual transformation in patients’
        lives. All our employees are empowered to do the best work of their
        lives by making daily impact and growing quickly.
      </div>
      <div className="max-w-7xl mx-auto mt-2 font-content text-lg">
        If you feel that you need an organization where you can do your best
        work, call us now!
      </div>
      <div className="text-center text-2xl font-heading pt-8 font-semibold">
        Current Opportunities
      </div>
      <div className="container mb-2 flex mx-auto w-full items-center justify-center">
        <ul className="flex flex-col p-4">
          <li className="flex flex-col">
            {careers.map((items) => (
              <div
                className="select-none flex flex-1 items-center p-6 transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-3xl border-2 hover:shadow-2xl border-brandPink mt-4 hover:bg-neutral-100"
                key={items.id}
              >
                <div className="flex-1 pl-1 mr-16">
                  <div className="font-qs font-semibold text-2xl">
                    {items.position}
                  </div>
                  <div className="font-qs font-semibold text-xs mt-2">
                    Location: {items.location}
                  </div>
                  <div className="font-qs font-semibold text-xs mt-2">
                    Experience: {items.experience}
                  </div>
                </div>
                <Link href={`careers/${items.slug}`} passhref>
                  <a className="w-2/ text-wrap text-center flex text-white text-bold flex-col rounded-3xl bg-brandPink justify-center items-center mr-7 px-3 py-2 font-qs hover:bg-brandPurple">
                    Apply Now
                  </a>
                </Link>
              </div>
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IndexPage;

export const getServerSideProps = async () => {
  const url = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: `Bearer ${process.env.GRAPH_CMS_TOKEN}`,
    },
  });
  const query = gql`
    query {
      careers {
        position
        slug
        isActive
        location
        id
        experience
      }
    }
  `;
  const data = await graphQLClient.request(query);
  const careers = data.careers;
  return {
    props: {
      careers,
    },
  };
};