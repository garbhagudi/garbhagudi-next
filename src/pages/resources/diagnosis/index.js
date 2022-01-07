import React from "react";
import { gql, GraphQLClient } from "graphql-request";
import Link from "next/link";

const IndexPage = ({ diagnoses }) => {
  return (
    <div>
      <div className="max-w-7xl mx-auto text-center text-4xl font-heading pt-12 font-semibold">
        Diagnosis
      </div>
      <p className="max-w-7xl mx-auto text-center pt-6 font-semibold">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod eaque
        alias illo delectus harum recusandae.
      </p>
      <div className="max-w-7xl mx-auto py-6 flex sm:py-12">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-10 mx-auto">
          {diagnoses.map((item) => (
            <Link href={`diagnosis/${item.slug}`} passHref key={item.id}>
              <div className="border-brandPink w-96 px-4 py-3 border-solid rounded-2xl border-2 flex cursor-pointer hover:bg-brandPink hover:text-white hover:border-transparent transition-colors duration-100 ">
                <div className="w-1/3">
                  <img
                    className="w-24 h-24 object-cover rounded-full"
                    src={item.icon.url}
                    alt={item.title}
                  />
                </div>
                <div className="w-2/3 flex flex-col justify-center text-center">
                  <p className="font-semibold text-xl font-qs">{item.title}</p>
                </div>
              </div>
            </Link>
          ))}
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
      diagnoses {
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
  const diagnoses = data.diagnoses;
  return {
    props: {
      diagnoses,
    },
  };
};
