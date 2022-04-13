import React from "react";
import graphcms from "lib/graphcms";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Head from "next/head";
import BreadCrumbs from "components/breadcrumbs";
import Share from "components/share";

export const getStaticProps = async ({ params }) => {
  const { director } = await graphcms.request(
    `
    query ($slug: String!) {
      director(where: { slug: $slug }) {
        id
        name
        details
        link
        image {
          url
        }
        bio {
          raw
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
      director,
    },
  };
};

export const getStaticPaths = async () => {
  const { directors } = await graphcms.request(
    `
      query{
        directors {
          name
          slug
        }
      }
    `
  );
  return {
    paths: directors.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
};

const ExecutiveTeam = ({ director }) => (
  <div>
    <Head>
      {/* Primary Tags */}

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title> {`${director.name} | GarbhaGudi IVF Centre`}</title>
      <meta name="title" content={`${director.name} | GarbhaGudi IVF Centre`} />
      <meta
        name="description"
        content={director?.bio?.raw.children.slice(0, 180)}
      />

      {/* Open Graph / Facebook */}

      <meta
        property="og:title"
        content={`${director.name} | GarbhaGudi IVF Centre`}
      />
      <meta property="og:site_name" content="GarbhaGudi IVF Centre" />
      <meta property="og:url" content="https://garbhagudi.com" />
      <meta
        property="og:description"
        content={director?.bio?.raw.children.slice(0, 180)}
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Directors_jbvcep.jpg"
      />

      {/* Twitter*/}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@garbhagudiivf" />
      <meta
        name="twitter:title"
        content={`${director.name} | GarbhaGudi IVF Centre`}
      />
      <meta
        name="twitter:description"
        content={director?.bio?.raw.children.slice(0, 180)}
      />
      <meta
        name="twitter:image"
        content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Directors_jbvcep.jpg"
      />
    </Head>
    <BreadCrumbs
      text1="About"
      link1="/about/overview"
      text2="Executive Team"
      link2="/about/overview"
      text3={director?.name}
      link3="#"
      link4={""}
      text4={""}
    />
    <section className="text-gray-600 body-font">
      <div className="md:px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg h-56 md:h-96 overflow-hidden">
            <img
              alt="content"
              className="object-cover h-full w-full"
              src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643287945/Banner/1200x500_4Directors_nqn9eg.jpg"
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-72 md:w-64 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <img
                  src={director?.image.url}
                  alt={director?.name}
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="title-font mt-4 text-gray-900 text-2xl font-semibold font-heading">
                  {director?.name}
                </h2>
                <div className="w-12 h-1 bg-brandPink rounded mt-2 mb-4 "></div>
                <p className="text-base font-content font-semibold">
                  {director?.details}
                </p>
                <button className="px-4 py-2 mt-6 bg-brandPink2 text-white font-semibold font-content rounded-md">
                  <a href={director?.link} target="_blank" rel="noreferrer">
                    Connect
                  </a>
                </button>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 sm:text-left px-5">
              <p className="leading-relaxed text-lg mb-4 text-brandDark">
                <RichText content={director?.bio?.raw.children} />
              </p>
            </div>
          </div>
        </div>
        <Share pinmedia={director.image.url} />
      </div>
    </section>
  </div>
);

export default ExecutiveTeam;
