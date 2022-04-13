import React from "react";
import graphcms from "lib/graphcms";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Head from "next/head";
import BreadCrumbs from "components/breadcrumbs";
import { useRouter } from "next/router";
import Share from "components/share";
import Loading from "components/Loading";

export const getStaticProps = async ({ params }) => {
  const { treatment } = await graphcms.request(
    `
    query ($slug: String!) {
      treatment(where: { slug: $slug }) {
        id
        title
        image {
          url
        }
        content {
          raw
          text
        }
      }
    }
  `,
    {
      slug: params.slug,
    }
  );
  return {
    props: {
      treatment,
    },
    revalidate: 180,
  };
};

export const getStaticPaths = async () => {
  const { treatments } = await graphcms.request(
    `
      query{
        treatments {
          title
          slug
        }
      }
    `
  );
  return {
    paths: treatments.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
};

const Treatment = ({ treatment }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{treatment?.title} | GarbhaGudi</title>
        <meta
          name="title"
          content={`${treatment?.title} | GarbhaGudi IVF Centre`}
        />
        <meta
          name="description"
          content={treatment?.content?.text.slice(0, 180)}
        />

        {/* Open Graph / Facebook */}

        <meta
          property="og:title"
          content={`${treatment?.title} | GarbhaGudi IVF Centre`}
        />
        <meta property="og:site_name" content="GarbhaGudi IVF Centre" />
        <meta property="og:url" content="https://garbhagudi.com" />
        <meta
          property="og:description"
          content={treatment?.content?.text.slice(0, 180)}
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={treatment?.image.url} />

        {/* Twitter*/}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@garbhagudiivf" />
        <meta
          name="twitter:title"
          content={`${treatment?.title} | GarbhaGudi IVF Centre`}
        />
        <meta
          name="twitter:description"
          content={treatment?.content?.text.slice(0, 180)}
        />
        <meta name="twitter:image" content={treatment?.image.url} />
      </Head>
      <BreadCrumbs
        link1="/resources/treatments"
        text1="Resources"
        link2={"/resources/treatments"}
        text2={"Treatments"}
        link3={"#"}
        text3={treatment?.title}
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
                {treatment?.title}
              </span>
            </h1>
            <figure>
              <img
                className="w-full rounded-lg mt-10 mb-5"
                src={treatment?.image.url}
                alt={treatment?.title}
                width={1310}
                height={873}
              />
            </figure>
            <div>
              <RichText content={treatment?.content?.raw?.children} />
            </div>
            <div>
              <Share pinmedia={treatment?.image?.url} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Treatment;
