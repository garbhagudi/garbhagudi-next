import React from "react";
import { GraphQLClient, gql } from "graphql-request";
import { RichText } from "@graphcms/rich-text-react-renderer";

export const getServerSideProps = async (pageContext) => {
  const url = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: `Bearer ${process.env.GRAPH_CMS_TOKEN}`,
    },
  });
  const pageSlug = pageContext.query.slug;

  const query = gql`
    query ($pageSlug: String!) {
      director(where: { slug: $pageSlug }) {
        id
        name
        details
        image {
          url
        }
        bio {
          raw
        }
      }
    }
  `;
  const variables = {
    pageSlug,
  };

  const data = await graphQLClient.request(query, variables);
  const director = data.director;
  return {
    props: {
      director,
    },
  };
};

const ExecutiveTeam = ({ director }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg h-64 overflow-hidden">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src="https://dummyimage.com/1200x500"
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-96 md:w-64 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <img
                  src={director.image.url}
                  alt={director.name}
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="title-font mt-4 text-gray-900 text-2xl font-semibold font-heading">
                  {director.name}
                </h2>
                <div className="w-12 h-1 bg-brandPink rounded mt-2 mb-4 "></div>
                <p className="text-base font-qs font-semibold">
                  {director.details}
                </p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4 text-brandDark">
                <RichText content={director.bio.raw.children} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveTeam;
