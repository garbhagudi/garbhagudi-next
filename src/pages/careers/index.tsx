import React from "react";
import Link from "next/link";
import { gql, GraphQLClient } from "graphql-request";
import Head from "next/head";
import BreadCrumbs from "components/breadcrumbs";

const IndexPage = ({ careers }) => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Careers | GarbhaGudi</title>
        <meta name="title" content="Careers | GarbhaGudi IVF Centre" />
        <meta
          name="description"
          content="At GarbhaGudi, we’re all on a mission to transform the way infertility is treated, one patient at a time. If you feel that you need an organization where you can do your best work, call us now!"
        />

        {/* Open Graph / Facebook */}

        <meta property="og:title" content="Career | GarbhaGudi IVF Centre" />
        <meta property="og:site_name" content="GarbhaGudi IVF Centre" />
        <meta property="og:url" content="https://garbhagudi.com" />
        <meta
          property="og:description"
          content="At GarbhaGudi, we’re all on a mission to transform the way infertility is treated, one patient at a time. If you feel that you need an organization where you can do your best work, call us now!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Careers_vpudat.jpg"
        />

        {/* Twitter*/}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@garbhagudiivf" />
        <meta name="twitter:title" content="Career | GarbhaGudi IVF Centre" />
        <meta
          name="twitter:description"
          content="At GarbhaGudi, we’re all on a mission to transform the way infertility is treated, one patient at a time. If you feel that you need an organization where you can do your best work, call us now!"
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Careers_vpudat.jpg"
        />
      </Head>
      <BreadCrumbs
        text1="Careers"
        link1={"/careers"}
        link2={""}
        text2={""}
        link3={""}
        text3={""}
        link4={""}
        text4={""}
      />
      <div className="max-w-7xl mx-auto">
        <div className="text-center text-4xl font-heading pt-12 font-semibold">
          Careers at GarbhaGudi
        </div>
        <div className="px-2">
          <p className="max-w-7xl mx-auto py-2 mt-4 font-content text-lg">
            At GarbhaGudi, we’re all on a mission to transform the way
            infertility is treated, one patient at a time.{" "}
          </p>
          <div className="max-w-7xl mx-auto mt-2 font-content text-lg">
            We go against the status quo and make actual transformation in
            patients’ lives. All our employees are empowered to do the best work
            of their lives by making daily impact and growing quickly.
          </div>
          <div className="max-w-7xl mx-auto mt-2 font-content text-lg">
            If you feel that you need an organization where you can do your best
            work, apply now!
          </div>
        </div>
        <div className="text-center text-2xl font-heading pt-8 font-semibold">
          Current Opportunities
        </div>
        <div className="container mb-2 flex mx-auto w-full items-center justify-center">
          <ul className="flex flex-col p-4">
            <li className="flex flex-col">
              {careers.map((items) => (
                <div
                  className="select-none flex flex-1 items-center p-6 transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-3xl border-2 hover:shadow-2xl border-brandPink4 mt-4 hover:bg-pink-50"
                  key={items.id}
                >
                  <div className="flex-1 pl-1 mr-16">
                    <div className="font-content font-semibold text-2xl">
                      {items.position}
                    </div>
                    <div className="font-content font-semibold text-xs mt-2">
                      Location: {items.location}
                    </div>
                    <div className="font-content font-semibold text-xs mt-2">
                      Experience: {items.experience}
                    </div>
                  </div>
                  <Link href={`careers/${items.slug}`}>
                    <a className="w-2/ text-wrap text-center flex text-white text-bold flex-col rounded-3xl bg-brandPink justify-center items-center mr-7 px-3 py-2 font-qs hover:bg-brandPink3">
                      Apply Now
                    </a>
                  </Link>
                </div>
              ))}
            </li>
          </ul>
        </div>
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
