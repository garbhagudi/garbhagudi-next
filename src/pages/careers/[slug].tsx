import React from "react";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Head from "next/head";
import BreadCrumbs from "components/breadcrumbs";
import Share from "components/share";
import graphcms from "lib/graphcms";
import { useRouter } from "next/router";
import Loading from "components/Loading";
import Link from "next/link";

export const getStaticProps = async ({ params }) => {
  const { career } = await graphcms.request(
    `
    query ($slug: String!) {
      career(where: { slug: $slug }) {
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
        link
      }
    }
  `,
    {
      slug: params.slug,
    }
  );

  return {
    props: {
      career,
    },
    revalidate: 180,
  };
};

export const getStaticPaths = async () => {
  const { careers } = await graphcms.request(`{
    careers {
      position
      slug
    }
  }`);

  return {
    paths: careers.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
};

const Career = ({ career }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title> {`${career.position} | GarbhaGudi IVF Centre`}</title>
        <meta name="title" content=" | GarbhaGudi IVF Centre" />
        <meta
          name="description"
          content="At GarbhaGudi, we’re all on a mission to transform the way infertility is treated, one patient at a time. If you feel that you need an organization where you can do your best work, call us now!"
        />

        {/* Open Graph / Facebook */}

        <meta
          property="og:title"
          content={`${career?.position}| GarbhaGudi IVF Centre`}
        />
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
        <meta
          name="twitter:title"
          content={`${career.position}| GarbhaGudi IVF Centre`}
        />
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
        text2={career?.position}
        link2={"#"}
        link3={""}
        text3={""}
        link4={""}
        text4={""}
      />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex flex-col">
          <div className="max-w-7xl mx-auto">
            <div>
              <h1 className="text-center text-2xl sm:text-4xl font-heading font-bold py-6">
                GarbhaGudi – Certified Healthy Workplace
              </h1>
              <Link href="/about/awards-and-accolades/garbhagudi-certified-healthy-workplace">
                <a>
                  <img
                    src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1657979955/Banner/Argoya_Silver_Award_Web_Bnr-min_bx7xeo.webp"
                    alt="arogya world banner"
                    className="rounded-xl"
                  />
                </a>
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-44 h-44 lg:w-48 lg:h-48 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400 border-2 border-brandPink3">
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
                    <a href={career.link} target="_blank" rel="noreferrer">
                      Apply Now
                    </a>
                  </button>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 sm:text-left ">
                <p className="font-content text-xl mb-4">Description</p>
                <p className="text-base font-qs">{career.description}</p>
                <p className="font-content text-xl mt-8">
                  Job Responsibilities
                </p>
                <p className="leading-relaxed text-md mb-4 text-brandDark font-qs">
                  <RichText content={career.jobDescription.raw.children} />
                </p>
              </div>
            </div>
          </div>
          <Share pinmedia="" />
        </div>
      </section>
    </div>
  );
};

export default Career;
