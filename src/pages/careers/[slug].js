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
      career(where: { slug: $pageSlug }) {
        id
        position
        jobDescription {
          raw
        }
        image {
          url
        }
        qualification
        experience
      }
    }
  `;
  const variables = {
    pageSlug,
  };

  const data = await graphQLClient.request(query, variables);
  const career = data.career;
  return {
    props: {
      career,
    },
  };
};

const Doctor = ({ career }) => {
  return (
    <div>
      <main className="profile-page">
        <section className="relative block" style={{ height: "500px" }}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-gray-300">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6" key={career.id}>
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt={career.position}
                        src={career.image.url}
                        className="shadow-xl rounded-full max-w-xs h-auto align-middle border-none -m-16 -mt-44 -ml-20 mb-4 lg:-ml-16 "
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12 font-content">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800">
                    {career.position}
                  </h3>
                  <div className="leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase text-xl">
                    Qualification: {career.qualification}
                  </div>
                  <div className="mb-2 text-gray-700">
                    Experience:{" "}
                    <span className="font-bold underline">
                      {career.experience}
                    </span>
                  </div>
                  <button
                    className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                  >
                    <a href="#">Apply Now</a>
                  </button>
                  <button
                    className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 mx-4 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                  >
                    <a href="#">Call In</a>
                  </button>
                </div>
                <div className="mt-10 py-10 border-t border-gray-300">
                  <div className="flex justify-center">
                    <div className="max-w-lg lg:w-9/12 px-4">
                      <p className="text-base mb-4 text-gray-800">
                        <RichText
                          content={career.jobDescription.raw.children}
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Doctor;
