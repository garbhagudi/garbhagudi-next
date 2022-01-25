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
        position
        jobDescription {
          raw
        }
        image {
          url
        }
        qualification
        experience
        description
        location
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

const Career = ({ career }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="text-center text-4xl font-heading pt-12 font-semibold">
              Careers at GarbhaGudi
            </div>
            <p className="max-w-7xl mx-auto py-2 mt-4 font-content text-lg">
              At GarbhaGudi, we’re all on a mission to transform the way
              infertility is treated, one patient at a time.{" "}
            </p>
            <div className="max-w-7xl mx-auto mt-2 font-content text-lg">
              We go against the status quo and make actual transformation in
              patients’ lives. All our employees are empowered to do the best
              work of their lives by making daily impact and growing quickly.
            </div>
            <div className="max-w-7xl mx-auto mt-2 font-content text-lg">
              If you feel that you need an organization where you can do your
              best work, call us now!
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-44 h-44 lg:w-48 lg:h-48 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <img
                    src={career.image.url}
                    alt={career.position}
                    className="rounded-full"
                  />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="title-font mt-4 text-gray-900 text-2xl font-semibold font-heading">
                    {career.position}
                  </h2>
                  <div className="w-12 h-1 bg-brandPink rounded mt-2 mb-4 "></div>
                  <p className="text-base font-qs font-semibold">
                    Qualification: {career.qualification}
                  </p>
                  <p className="text-base font-qs font-semibold">
                    Experience: {career.experience}
                  </p>
                  <p className="text-base font-qs font-semibold">
                    Location: {career.location}
                  </p>
                  <button className="mt-4 py-2 px-4 rounded-3xl text-white font-qs font-semibold bg-brandPink">
                    Apply Now
                  </button>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left ">
                <p className="font-content text-xl">Description</p>
                <p className="text-md font-qs">{career.description}</p>
                <p className="font-content text-xl mt-8">
                  Job Responsibilities
                </p>
                <p className="leading-relaxed text-md mb-4 text-brandDark font-qs">
                  <RichText content={career.jobDescription.raw.children} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;