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
          content="We’re all on a mission to transform the way infertility is treated. If you feel that you need an organization where you can do your best work, call us now!"
        />

        {/* Open Graph / Facebook */}

        <meta property="og:title" content="Career | GarbhaGudi IVF Centre" />
        <meta property="og:site_name" content="GarbhaGudi IVF Centre" />
        <meta property="og:url" content="https://garbhagudi.com" />
        <meta
          property="og:description"
          content="We’re all on a mission to transform the way infertility is treated. If you feel that you need an organization where you can do your best work, call us now!"
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
          content="We’re all on a mission to transform the way infertility is treated. If you feel that you need an organization where you can do your best work, call us now!"
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
        <div>
          <h1 className="text-center text-2xl sm:text-4xl font-heading font-bold py-6">
            GarbhaGudi – Certified Healthy Workplace
          </h1>
          <Link href="/about/awards-and-accolades/garbhagudi-certified-healthy-workplace">
            <div>
              <img
                src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1657979955/Banner/Argoya_Silver_Award_Web_Bnr-min_bx7xeo.webp"
                alt="arogya world banner"
                className="rounded-xl"
              />
            </div>
          </Link>
        </div>
        <div className="px-2">
          <div className="text-center text-2xl sm:text-4xl mb-4 font-heading pt-12 font-semibold">
            Careers at GarbhaGudi
          </div>
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
        <div className="text-center text-3xl font-heading pt-8 font-semibold">
          Current Opportunities
        </div>
        <div className="container mb-2 flex mx-auto w-full items-center justify-center">
          <li className="flex flex-wrap gap-4 mx-auto mt-6">
            {careers.map((items) => (
              <Link href={`careers/${items?.slug}`} passHref key={items.id}>
                <div className="bg-white rounded-lg border shadow-md hover:bg-gray-100 w-96 max-w-sm mx-auto">
                  <div className="flex flex-col justify-between p-4 leading-normal ">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 font-content">
                      {items?.position}
                    </h5>
                    <div className="h-24">
                      <p className="mb-1 font-content text-sm text-gray-900 ">
                        Location: {items?.location}
                      </p>
                      <p className="mb-1 font-content text-sm text-gray-900 ">
                        Experience: {items?.experience}
                      </p>
                      <p className="mb-1 font-content text-sm text-gray-900 ">
                        Qualification: {items?.qualification}
                      </p>
                    </div>
                    <button className="font-content mt-4 rounded-3xl px-4 py-2 border font-semibold border-brandPink hover:bg-brandPink w-32">
                      <Link href={`careers/${items?.slug}`}>Apply Now</Link>
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </li>
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
      careers(orderBy: publishedAt_DESC) {
        position
        slug
        isActive
        location
        id
        experience
        qualification
      }
    }
  `;
  const data = await graphQLClient.request(query);
  const careers = data.careers;
  return {
    props: {
      careers,
    },
    revalidate: 180,
  };
};
