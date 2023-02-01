import React from "react";
import Banner from "sections/location/banner";
import TreatmentOptions from "sections/location/treatments";
import graphcms from "lib/graphcms";
import Faq from "sections/location/faq";
import Cta from "sections/gg-care/cta";
import QuickLinks from "sections/location/quickLinks";
import VirtualTour from "sections/location/virtualTour";
import MapSection from "sections/location/mapSection";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Link from "next/link";
import { useRouter } from "next/router";
import Loading from "components/Loading";

const Branch = ({ branch }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <Loading />;
  }
  return (
    <div>
      <Banner />
      <TreatmentOptions branch={branch?.title} />
      <div className="">
        <div className="text-gray-600 body-font relative max-w-7xl mx-auto">
          <div className="py-6 flex flex-wrap lg:flex-nowrap inset-0 ">
            <div className="lg:w-1/2 bg-gray-300 rounded-3xl overflow-hidden p-2 lg:p-10 flex items-end justify-start relative h-[42rem] md:ml-auto w-full">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                loading="lazy"
                title="map"
                src={branch?.mapLink}
              ></iframe>
              <div className="bg-white relative flex flex-wrap py-6 rounded-3xl shadow-3xl">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs font-qs">
                    ADDRESS
                  </h2>
                  <p className="mt-1 font-content text-sm">{branch?.address}</p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="font-semibold text-gray-900 tracking-widest text-xs font-qs">
                    EMAIL
                  </h2>
                  <div className="text-indigo-500 leading-relaxed">
                    <a
                      href="mailto:dreams@garbhagudi.com"
                      className="text-brandPink font-qs text-sm"
                    >
                      dreams@garbhagudi.com
                    </a>
                  </div>
                  <h2 className="font-semibold text-gray-900 tracking-widest text-xs mt-4 font-qs">
                    PHONE
                  </h2>
                  <p className="leading-relaxed font-qs text-sm">
                    <a href="tel:+918880000909">+91 888 000 0909</a>
                  </p>
                  <h2 className="font-semibold text-gray-900 tracking-widest text-xs mt-4 font-qs">
                    WhatsApp
                  </h2>
                  <p className="leading-relaxed font-qs text-sm">
                    <a
                      href="https://wa.me/918884183338?text=Hi."
                      target="_blank"
                      rel="noreferrer"
                    >
                      +91 888 418 3338
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 px-6 font-content flex flex-col items-center">
              <h3 className="py-6 text-4xl lg:text-3xl font-heading font-bold">
                An Overview{" "}
              </h3>
              <RichText content={branch?.about?.raw?.children} />
            </div>
          </div>
          <div className="w-full bg-white flex flex-col pb-8 md:mt-0">
            <p className="text-center font-heading text-2xl font-semibold py-10 lg:mt-0">
              Fertility Specialists at {branch?.title}
            </p>
            <div className="mx-auto space-y-0 grid grid-cols-2 sm:gap-y-10 sm:gap-x-32 sm:space-y-0 lg:grid-cols-4 lg:max-w-7xl col-span-full">
              {branch?.doctors?.map((item: any) => {
                return (
                  <div
                    className="text-center mb-2 transition-all duration-500 hover:shadow-2xl rounded-xl"
                    key={item?.id}
                  >
                    <Link
                      legacyBehavior
                      href={`/fertility-experts/${item?.slug}`}
                      passHref
                    >
                      <a>
                        <div className="space-y-4">
                          <img
                            className="mx-auto h-40 w-40 my-auto rounded-full mt-4"
                            src={item?.image?.url}
                            alt={item?.name}
                          />
                          <div className="space-y-4">
                            <div className="text-lg leading-6 font-medium space-y-1">
                              <h3 className="text-brandDark font-content">
                                {item?.name}
                              </h3>
                              <p className="text-brandPurple text-sm font-content">
                                {item?.qualification}
                              </p>
                              <p className="text-brandPink text-sm font-content">
                                {item?.designation}
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Cta />
      <Faq branch={branch?.title} />
      <VirtualTour
        link1={branch?.virtualTourLink1}
        link2={branch?.virtualTourLink2}
        link3={branch?.virtualTourLink3}
      />
      <QuickLinks />
    </div>
  );
};

export default Branch;

export const getStaticProps = async ({ params }) => {
  const { branch } = await graphcms.request(
    `query ($slug: String!) {
        branch (where: { slug: $slug }) {
          branchPicture {
            url
          }
          title
          address
          about {
            raw
          }
          slug
          id
          mapLink
          branchPicture {
            url
          }
          virtualTourLink1
          virtualTourLink2
          virtualTourLink3
          doctors {
            id
            name
            slug
            designation
            qualification
            image {
              url
            }
          }
        }
      }`,
    {
      slug: params.slug,
    }
  );

  return {
    props: {
      branch,
    },
    revalidate: 180,
  };
};

export async function getStaticPaths() {
  const { branches } = await graphcms.request(`{
    branches {
      slug
      title
    }
  }`);

  return {
    paths: branches.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}
