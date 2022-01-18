import React from "react";
import Link from "next/link";
import { gql, GraphQLClient } from "graphql-request";

const IndexPage = ({ careers }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center text-4xl font-heading pt-12 font-semibold">
        Careers at GarbhaGudi
      </div>
      <p className="max-w-7xl mx-auto text-center py-6 font-semibold font-qs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
        voluptatem obcaecati, rerum explicabo vero magnam, ab rem temporibus
        nisi aspernatur sapiente culpa, minus reprehenderit ad nostrum saepe ex
        autem fuga at a porro? A ullam excepturi sapiente hic voluptatem
        consequuntur ipsa sit numquam maxime dolor?
      </p>
      <div className="text-center text-2xl font-heading py-8 font-semibold">
        Lorem ipsum dolor, sit amet consectetur adipisicing.
      </div>
      <div className="container mb-2 flex mx-auto w-full items-center justify-center">
        <ul className="flex flex-col p-4">
          <li className="flex flex-col">
            {careers.map((items) => (
              <div
                className="select-none flex flex-1 items-center p-6 transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-3xl border-2 hover:shadow-2xl border-brandPink mt-4 hover:bg-neutral-200"
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
