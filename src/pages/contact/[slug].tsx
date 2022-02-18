import React from "react";
import { GraphQLClient, gql } from "graphql-request";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Head from "next/head";
import BreadCrumbs from "components/breadcrumbs";

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
      valueAddedService(where: { slug: $pageSlug }) {
        id
        title
        image {
          url
        }
        content {
          raw
        }
      }
    }
  `;

  const variables = {
    pageSlug,
  };

  const data = await graphQLClient.request(query, variables);
  const valueAddedService = data.valueAddedService;
  return {
    props: {
      valueAddedService,
    },
  };
};

const Vas = ({ valueAddedService }) => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{valueAddedService.title} | GarbhaGudi</title>
        <meta name="title" content=" | GarbhaGudi IVF Centre" />
        <meta
          name="description"
          content="GarbhaGudi has been reaching out to couples facing infertility and in the process growing steadily. But as it’s said, growth doesn’t happen in isolation. With this intention, we aim to forge strong partnerships with like-minded associates and in turn bring benefits to both patients who will get the best of treatment options at affordable costs and to partners who wish to grow their business through the strong branding of GarbhaGudi."
        />

        {/* Open Graph / Facebook */}

        <meta
          property="og:title"
          content={`${valueAddedService.title} | GarbhaGudi IVF Centre`}
        />
        <meta property="og:site_name" content="GarbhaGudi IVF Centre" />
        <meta property="og:url" content="https://garbhagudi.com" />
        <meta
          property="og:description"
          content="GarbhaGudi has been reaching out to couples facing infertility and in the process growing steadily. But as it’s said, growth doesn’t happen in isolation. With this intention, we aim to forge strong partnerships with like-minded associates and in turn bring benefits to both patients who will get the best of treatment options at affordable costs and to partners who wish to grow their business through the strong branding of GarbhaGudi."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={valueAddedService.image.url} />

        {/* Twitter*/}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@garbhagudiivf" />
        <meta
          name="twitter:title"
          content={`${valueAddedService.title} | GarbhaGudi IVF Centre`}
        />
        <meta
          name="twitter:description"
          content="GarbhaGudi has been reaching out to couples facing infertility and in the process growing steadily. But as it’s said, growth doesn’t happen in isolation. With this intention, we aim to forge strong partnerships with like-minded associates and in turn bring benefits to both patients who will get the best of treatment options at affordable costs and to partners who wish to grow their business through the strong branding of GarbhaGudi."
        />
        <meta name="twitter:image" content={valueAddedService.image.url} />
      </Head>
      <BreadCrumbs
        link1="/gg-care"
        text1="Contact Us"
        link2={valueAddedService.title}
        text2={valueAddedService.title}
        link3={""}
        text3={""}
        link4={""}
        text4={""}
      />
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div
            className="relative h-full text-lg max-w-prose mx-auto"
            aria-hidden="true"
          >
            <svg
              className="absolute top-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
              />
            </svg>
            <svg
              className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-100"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
            </svg>
            <svg
              className="absolute bottom-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
              />
            </svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1>
              <span className="mt-4 block text-2xl text-center leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
                {valueAddedService.title}
              </span>
            </h1>
            <figure>
              <img
                className="w-full rounded-lg mt-10 mb-5"
                src={valueAddedService.image.url}
                alt={valueAddedService.title}
                width={1310}
                height={873}
              />
            </figure>
            <div>
              <RichText content={valueAddedService.content.raw.children} />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Vas;
