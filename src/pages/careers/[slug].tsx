import React from "react";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Head from "next/head";
import BreadCrumbs from "components/breadcrumbs";
import Share from "components/share";
import { useRouter } from "next/router";
import Loading from "components/Loading";
import Link from "next/link";
import apolloClient from "lib/apollo-graphcms";
import { gql } from "@apollo/client";

export const getStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query({
    query: gql`
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
    variables: {
      slug: params.slug,
    },
  });

  return {
    props: {
      career: data.career,
    },
    revalidate: 180,
  };
};

export const getStaticPaths = async () => {
  const { data } = await apolloClient.query({
    query: gql`
      {
        careers {
          position
          slug
        }
      }
    `,
  });

  return {
    paths: data.careers.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
};

const Career = ({ career }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <Loading />;
  }

  const title = `${career.position} | GarbhaGudi IVF Centre`;

  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <meta name="title" content=" | GarbhaGudi IVF Centre" />
        <meta
          name="description"
          content="We’re all on a mission to transform the way infertility is treated. If you feel that you need an organization where you can do your best work, call us now!"
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
        <meta
          name="twitter:title"
          content={`${career.position}| GarbhaGudi IVF Centre`}
        />
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
        text2={career?.position}
        link2={"#"}
        link3={""}
        text3={""}
        link4={""}
        text4={""}
      />
      <section className="text-gray-600 body-font">
        <div className="container flex flex-col px-5 py-8 mx-auto">
          <div className="mx-auto max-w-7xl">
            <div>
              <h1 className="py-6 text-2xl font-bold text-center sm:text-4xl font-heading">
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
            <div className="flex flex-col mt-10 sm:flex-row">
              <div className="text-center sm:w-1/3 sm:pr-8 sm:py-8">
                <div className="inline-flex items-center justify-center bg-gradient-to-br from-brandPurple via-white to-brandPink4 bg-[length:400%]  animate-shine rounded-full w-44 h-44 lg:w-48 lg:h-48 shadow-2xl drop-shadow-2xl">
                  <img
                    src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1659164257/logos/GG_Vertical_Logo_nrcl5h.svg"
                    alt={career.position}
                    className="rounded-full h-44 w-44 "
                  />
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                  <h2 className="mt-4 text-2xl font-semibold text-gray-900 title-font font-heading">
                    {career.position}
                  </h2>
                  <div className="w-12 h-1 mt-2 mb-4 rounded bg-brandPink "></div>
                  <p className="text-base font-semibold font-qs">
                    Qualification: {career.qualification}
                  </p>
                  <p className="text-base font-semibold font-qs">
                    Experience: {career.experience}
                  </p>
                  <p className="text-base font-semibold font-qs">
                    Location: {career.location}
                  </p>
                  <div className="px-4 py-2 mt-4 font-semibold text-white font-content glow">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <Link href={career.link} target="_blank" rel="noreferrer">
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-gray-200 sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l sm:border-t-0 sm:mt-0 sm:text-left ">
                <div className="mb-4 text-xl font-content">Description</div>
                <div className="text-base font-qs">{career.description}</div>
                <div className="mt-8 text-xl font-content">
                  Job Responsibilities
                </div>
                <div className="mb-4 leading-relaxed text-md text-brandDark font-qs">
                  <RichText content={career.jobDescription.raw.children} />
                </div>
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
