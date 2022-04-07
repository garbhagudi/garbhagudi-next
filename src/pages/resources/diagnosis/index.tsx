import React from "react";
import Link from "next/link";
import Head from "next/head";
import BreadCrumbs from "components/breadcrumbs";
import graphcms from "lib/graphcms";

const IndexPage = ({ diagnoses }) => {
  return (
    <div>
      <div>
        <Head>
          {/* Primary Tags */}

          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Diagnosis | GarbhaGudi</title>
          <meta name="title" content="Diagnosis | GarbhaGudi IVF Centre" />
          <meta
            name="description"
            content="Treatment options, procedure details and advanced treatment options for male and female infertility treatment available at GarbhaGudi"
          />

          {/* Open Graph / Facebook */}

          <meta
            property="og:title"
            content="Diagnosis | GarbhaGudi IVF Centre"
          />
          <meta property="og:site_name" content="GarbhaGudi IVF Centre" />
          <meta property="og:url" content="https://garbhagudi.com" />
          <meta
            property="og:description"
            content="Treatment options, procedure details and advanced treatment options for male and female infertility treatment available at GarbhaGudi"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Cau_Diag_Treat_d0t3vx.jpg"
          />

          {/* Twitter*/}

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@garbhagudiivf" />
          <meta
            name="twitter:title"
            content="Diagnosis | GarbhaGudi IVF Centre"
          />
          <meta
            name="twitter:description"
            content="Treatment options, procedure details and advanced treatment options for male and female infertility treatment available at GarbhaGudi"
          />
          <meta
            name="twitter:image"
            content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Cau_Diag_Treat_d0t3vx.jpg"
          />
        </Head>
        <BreadCrumbs
          link1="/resources/diagnosis"
          text1="Resources"
          text2="Diagnosis"
          link2="/resources/diagnosis"
          link3={""}
          text3={""}
          link4={""}
          text4={""}
        />
        <div className="max-w-7xl mx-auto text-center text-4xl font-heading pt-12 font-semibold">
          Diagnosis
        </div>
        <p className="max-w-7xl mx-auto text-center pt-6 font-semibold font-content px-2">
          There are a number of diagnostic tools available to help pinpoint the
          cause of infertility. Some of them may include:
        </p>
        <div className="max-w-7xl mx-auto py-6 flex sm:py-12">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-10 mx-auto">
            {diagnoses.map((item) => (
              <Link href={`diagnosis/${item.slug}`} passHref key={item.id}>
                <div className="border-brandPink w-96 px-4 py-3 border-solid rounded-2xl border-2 flex cursor-pointer hover:bg-brandPink hover:text-white hover:border-transparent transition-colors duration-100 ">
                  <div className="w-1/3">
                    <img
                      className="w-24 h-24 object-cover rounded-2xl"
                      src={item.icon.url}
                      alt={item.title}
                    />
                  </div>
                  <div className="w-2/3 flex flex-col justify-center text-center">
                    <p className="font-semibold text-xl font-qs">
                      {item.title}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;

export const getStaticProps = async () => {
  const { diagnoses } = await graphcms.request(`
    query {
      diagnoses {
        title
        id
        icon {
          url
        }
        slug
      }
    }
  `);

  return {
    props: {
      diagnoses,
    },
    revalidate: 180,
  };
};
