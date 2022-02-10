import React from "react";
import { GraphQLClient, gql } from "graphql-request";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Head from "next/head";
import BreadCrumbs from "components/breadcrumbs";
import Link from "next/link";

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
      doctor(where: { slug: $pageSlug }) {
        id
        name
        bio {
          raw
          text
        }
        slug
        image {
          url
        }
        qualification
        designation
        medicalRegNo
        hanumanthaNagarOnline
        hanumanthaNagarPhysical
        kalyanNagarOnline
        kalyanNagarPhysical
        jayanagarOnline
        jayanagarPhysical
        electronicCityOnline
        electronicCityPhysical
        marathahalliOnline
        marathahalliPhysical
      }
    }
  `;
  const variables = {
    pageSlug,
  };

  const data = await graphQLClient.request(query, variables);
  const doctor = data.doctor;
  return {
    props: {
      doctor,
    },
  };
};

const Doctor = ({ doctor }) => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{doctor?.name} | GarbhaGudi</title>
        <meta
          name="title"
          content={`${doctor?.name} | GarbhaGudi IVF Centre`}
        />
        <meta name="description" content={doctor?.bio?.text.slice(0, 180)} />

        {/* Open Graph / Facebook */}

        <meta
          property="og:title"
          content={`${doctor?.name} | GarbhaGudi IVF Centre`}
        />
        <meta property="og:site_name" content="GarbhaGudi IVF Centre" />
        <meta property="og:url" content="https://garbhagudi.com" />
        <meta
          property="og:description"
          content={doctor?.bio?.text.slice(0, 180)}
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={doctor?.image.url} />

        {/* Twitter*/}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@garbhagudiivf" />
        <meta
          name="twitter:title"
          content={`${doctor?.name} | GarbhaGudi IVF Centre`}
        />
        <meta
          name="twitter:description"
          content={doctor?.bio?.text.slice(0, 180)}
        />
        <meta name="twitter:image" content={doctor?.image.url} />
      </Head>
      <BreadCrumbs
        text1={"Our Team"}
        link1="/#ourTeam"
        text2={doctor?.name}
        link2="#"
      />
      <main className="profile-page">
        <section className="relative block" style={{ height: "500px" }}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/garbhagudiivf/image/upload/v1643286880/Banner/Behind_Doctors_fssazq.jpg')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-30 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-gray-300">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-3xl -mt-64">
              <div className="px-6" key={doctor.id}>
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt={doctor.name}
                        src={doctor.image.url}
                        className="shadow-xl rounded-full max-w-xs h-auto align-middle border-none -m-16 -mt-44 -ml-20 mb-4 lg:-ml-16 "
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12 font-content">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800">
                    {doctor.name}
                  </h3>
                  <div className="leading-normal mt-0 mb-2 textbrantext-brandPink2 font-bold uppercase text-xl">
                    {doctor.qualification}
                  </div>
                  <div className="mb-2 text-gray-700">{doctor.designation}</div>
                  <div className="mb-2 text-gray-700">
                    Medical Registration Number (KMC) :{" "}
                    <span className="font-bold underline">
                      {doctor.medicalRegNo}
                    </span>
                  </div>
                  <section className="antialiased text-gray-600 mt-8 font-content overflow-hidden">
                    <div className="flex flex-col justify-center h-full">
                      <div className="w-full max-w-3xl mx-auto bg-white shadow-lg rounded-2xl border border-gray-200">
                        <header className="px-5 py-2">
                          <h2 className="font-semibold text-gray-800">
                            Book Your Appointment
                          </h2>
                        </header>
                        <div className="">
                          <div className="overflow-x-auto">
                            <table className="table-auto w-full">
                              <thead className="text-sm font-bold uppercase text-brandDark bg-brandPink">
                                <tr>
                                  <th className="p-2 whitespace-nowrap ">
                                    <div className="font-bold text-left">
                                      Branch
                                    </div>
                                  </th>
                                  <th className="p-2 whitespace-nowrap">
                                    <div className="font-bold text-left">
                                      Online
                                    </div>
                                  </th>
                                  <th className="p-2 whitespace-nowrap">
                                    <div className="font-bold text-left">
                                      In-Person
                                    </div>
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="text-sm divide-y divide-gray-100">
                                {doctor.hanumanthaNagarOnline &&
                                  doctor.hanumanthaNagarPhysical && (
                                    <tr>
                                      <td className="p-2 whitespace-nowrap">
                                        <div className="flex items-center">
                                          <div className="font-medium text-gray-800 flex items-center justify-center">
                                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                              <img
                                                className="rounded-sm"
                                                src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643351546/Icons/Locations/Hanumanthanagar_ykripm.svg"
                                                width="40"
                                                height="40"
                                                alt="Alex Shatov"
                                              />
                                            </div>
                                            <Link
                                              href="/locations/hanumanthanagar"
                                              passHref
                                            >
                                              <span className="cursor-pointer">
                                                Hanumanthanagar
                                              </span>
                                            </Link>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="p-2 whitespace-nowrap">
                                        <div className="text-left">
                                          <button>
                                            <a
                                              href={
                                                doctor.hanumanthaNagarOnline
                                              }
                                              className="text-black font-semibold bg-brandPink px-3 py-1 rounded-xl hover:text-white hover:bg-brandPink2"
                                              target="_blank"
                                              rel="noreferrer"
                                            >
                                              Book Now
                                            </a>
                                          </button>
                                        </div>
                                      </td>
                                      <td className="p-2 whitespace-nowrap">
                                        <div className="text-left font-medium text-brandPink2">
                                          <button>
                                            <a
                                              href={
                                                doctor.hanumanthaNagarPhysical
                                              }
                                              className="text-black font-semibold bg-brandPink px-3 py-1 rounded-xl hover:text-white hover:bg-brandPink2"
                                              target="_blank"
                                              rel="noreferrer"
                                            >
                                              Book Now
                                            </a>
                                          </button>
                                        </div>
                                      </td>
                                    </tr>
                                  )}
                                {doctor.kalyanNagarOnline &&
                                  doctor.kalyanNagarPhysical && (
                                    <tr>
                                      <td className="p-2 whitespace-nowrap">
                                        <div className="flex items-center">
                                          <div className="font-medium text-gray-800">
                                            <div className="font-medium text-gray-800 flex items-center justify-center">
                                              <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                                <img
                                                  className="rounded-sm"
                                                  src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643351546/Icons/Locations/Kalyan_Nagar_ivtier.svg"
                                                  width="40"
                                                  height="40"
                                                  alt="Alex Shatov"
                                                />
                                              </div>
                                              <Link
                                                href="/locations/kalyan-nagar"
                                                passHref
                                              >
                                                <span className="cursor-pointer">
                                                  Kalyan Nagar
                                                </span>
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="p-2 whitespace-nowrap">
                                        <div className="text-left">
                                          <button>
                                            <a
                                              href={doctor.kalyanNagarOnline}
                                              className="text-black font-semibold bg-brandPink px-3 py-1 rounded-xl hover:text-white hover:bg-brandPink2"
                                              target="_blank"
                                              rel="noreferrer"
                                            >
                                              Book Now
                                            </a>
                                          </button>
                                        </div>
                                      </td>
                                      <td className="p-2 whitespace-nowrap">
                                        <div className="text-black font-semibold text-left">
                                          <button>
                                            <a
                                              href={doctor.kalyanNagarOnline}
                                              target="_blank"
                                              rel="noreferrer"
                                              className="text-black font-semibold bg-brandPink px-3 py-1 rounded-xl hover:text-white hover:bg-brandPink2"
                                            >
                                              Book Now
                                            </a>
                                          </button>
                                        </div>
                                      </td>
                                    </tr>
                                  )}
                                {doctor.jayanagarOnline &&
                                  doctor.jayanagarPhysical && (
                                    <tr>
                                      <td className="p-2 whitespace-nowrap">
                                        <div className="flex items-center">
                                          <div className="font-medium text-gray-800">
                                            <div className="font-medium text-gray-800 flex items-center justify-center">
                                              <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3 ">
                                                <img
                                                  className="rounded-sm"
                                                  src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643351530/Icons/Locations/South_End_Circle_l3ffwj.svg"
                                                  width="40"
                                                  height="40"
                                                  alt="Alex Shatov"
                                                />
                                              </div>
                                              <Link
                                                href="/locations/south-end-circle"
                                                passHref
                                              >
                                                <span className="cursor-pointer">
                                                  South End Circle
                                                </span>
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="p-2 whitespace-nowrap">
                                        <div className="text-left">
                                          <button>
                                            <a
                                              href={doctor.jayanagarOnline}
                                              className="text-black font-semibold bg-brandPink px-3 py-1 rounded-xl hover:text-white hover:bg-brandPink2"
                                              target="_blank"
                                              rel="noreferrer"
                                            >
                                              Book Now
                                            </a>
                                          </button>
                                        </div>
                                      </td>
                                      <td className="p-2 whitespace-nowrap">
                                        <div className="text-left font-medium text-brandPink2">
                                          <button>
                                            <a
                                              href={doctor.jayanagarPhysical}
                                              className="text-black font-semibold bg-brandPink px-3 py-1 rounded-xl hover:text-white hover:bg-brandPink2"
                                              target="_blank"
                                              rel="noreferrer"
                                            >
                                              Book Now
                                            </a>
                                          </button>
                                        </div>
                                      </td>
                                    </tr>
                                  )}
                                {doctor.electronicCityOnline &&
                                  doctor.electronicCityPhysical && (
                                    <tr>
                                      <td className="p-2 whitespace-nowrap">
                                        <div className="flex items-center">
                                          <div className="font-medium text-gray-800">
                                            <div className="font-medium text-gray-800 flex items-center justify-center">
                                              <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3 ">
                                                <img
                                                  className="rounded-sm"
                                                  src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643351530/Icons/Locations/Electronic_City_xntwob.svg"
                                                  width="40"
                                                  height="40"
                                                  alt="Alex Shatov"
                                                />
                                              </div>
                                              <Link
                                                href="/locations/south-end-circle"
                                                passHref
                                              >
                                                <span className="cursor-pointer">
                                                  Electronic City
                                                </span>
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="p-2 whitespace-nowrap">
                                        <div className="text-left">
                                          <button>
                                            <a
                                              href={doctor.electronicCityOnline}
                                              className="text-black font-semibold bg-brandPink px-3 py-1 rounded-xl hover:text-white hover:bg-brandPink2"
                                              target="_blank"
                                              rel="noreferrer"
                                            >
                                              Book Now
                                            </a>
                                          </button>
                                        </div>
                                      </td>
                                      <td className="p-2 whitespace-nowrap">
                                        <div className="text-left font-medium text-brandPink2">
                                          <button>
                                            <a
                                              href={
                                                doctor.electronicCityPhysical
                                              }
                                              target="_blank"
                                              rel="noreferrer"
                                              className="text-black font-semibold bg-brandPink px-3 py-1 rounded-xl hover:text-white hover:bg-brandPink2"
                                            >
                                              Book Now
                                            </a>
                                          </button>
                                        </div>
                                      </td>
                                    </tr>
                                  )}
                                {doctor.marathahalliOnline &&
                                  doctor.marathahalliPhysical && (
                                    <tr>
                                      <td className="p-2 whitespace-nowrap">
                                        <div className="flex items-center">
                                          <div className="font-medium text-gray-800 flex items-center justify-center">
                                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3 ">
                                              <img
                                                className="rounded-sm"
                                                src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643351530/Icons/Locations/Marathahalli_p99ljc.svg"
                                                width="40"
                                                height="40"
                                                alt="Alex Shatov"
                                              />
                                            </div>
                                            <Link
                                              href="/locations/south-end-circle"
                                              passHref
                                            >
                                              <span className="cursor-pointer">
                                                Marathahalli
                                              </span>
                                            </Link>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="p-2 whitespace-nowrap">
                                        <div className="text-left">
                                          <button>
                                            <a
                                              href={doctor.marathahalliOnline}
                                              className="text-black font-semibold bg-brandPink px-3 py-1 rounded-xl hover:text-white hover:bg-brandPink2"
                                              target="_blank"
                                              rel="noreferrer"
                                            >
                                              Book Now
                                            </a>
                                          </button>
                                        </div>
                                      </td>
                                      <td className="p-2 whitespace-nowrap">
                                        <div className="text-left font-medium text-brandPink2">
                                          <button>
                                            <a
                                              href={doctor.marathahalliPhysical}
                                              target="_blank"
                                              rel="noreferrer"
                                              className="text-black font-semibold bg-brandPink px-3 py-1 rounded-xl hover:text-white hover:bg-brandPink2"
                                            >
                                              Book Now
                                            </a>
                                          </button>
                                        </div>
                                      </td>
                                    </tr>
                                  )}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs mt-5">
                      *Appointment is subject to doctor availability. Please,
                      make sure you have given your registered number if you
                      have already visited GarbhaGudi.
                    </p>
                  </section>
                </div>
                <div className="mt-10 py-10 border-t border-gray-300">
                  <div className="flex justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="text-base mb-4 text-gray-800">
                        <RichText content={doctor.bio.raw.children} />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Doctor;
