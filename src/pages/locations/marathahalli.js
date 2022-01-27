import React from "react";
import { gql, GraphQLClient } from "graphql-request";
import Link from "next/link";

const Marathahalli = ({ doctors }) => {
  return (
    <div>
      <section className="text-gray-600 body-font relative max-w-7xl mx-auto">
        <h1 className="text-center text-2xl md:text-4xl font-heading pt-8 font-bold">
          Marathahalli
        </h1>
        <div>
          <img
            src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643277077/Locations/1201x501_MH_jqxxsh.jpg"
            alt="banner"
            className="rounded-xl mt-4"
          />
        </div>
        <div className="py-6 flex flex-wrap lg:flex-nowrap inset-0 ">
          <div className="lg:w-1/2 md:w-full bg-white flex flex-col md:ml-auto w-full pb-8 md:mt-0 min-h-max">
            <p className="text-center font-qs text-2xl font-semibold mb-10 mt-7 lg:mt-0">
              Fertility Specialists at Marathahalli
            </p>
            <div className="mx-auto space-y-0 grid grid-cols-2 sm:gap-y-10 sm:gap-x-32 sm:space-y-0 lg:grid-cols-2 lg:max-w-7xl col-span-full">
              {doctors.map((item) => {
                if (item.location?.includes("Marathahalli")) {
                  return (
                    <div className="text-center" key={item?.id}>
                      <Link href={`/doctors/${item?.slug}`} passHref>
                        <a>
                          <div className="space-y-4">
                            <img
                              className="mx-auto h-40 w-40 my-auto rounded-full mt-4"
                              src={item?.image.url}
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
                }
              })}
            </div>
          </div>
          <div className="lg:w-1/2 bg-gray-300 rounded-3xl overflow-hidden p-2 lg:p-10 flex items-end justify-start relative h-[44rem] md:ml-auto w-full">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder="0"
              loading="lazy"
              title="map"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15552.74401242251!2d77.7016368!3d12.9599467!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe3b45ee50de8eedf!2sGarbhaGudi%20IVF%20Centre%2C%20Marathahalli.!5e0!3m2!1sen!2sin!4v1641899595868!5m2!1sen!2sin"
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded-3xl shadow-3xl">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs font-qs">
                  ADDRESS
                </h2>
                <p className="mt-1 font-content">
                  4TH floor, Chirag Towers, Born Babies Building, 24 & 64,
                  Service Rd, next to कलामंदिर, Marathahalli, Bengaluru,
                  Karnataka 560037
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="font-semibold text-gray-900 tracking-widest text-xs font-qs">
                  EMAIL
                </h2>
                <a className="text-indigo-500 leading-relaxed">
                  <a
                    href="mailto:dreams@garbhagudi.com"
                    className="text-brandPink font-qs"
                  >
                    dreams@garbhagudi.com
                  </a>
                </a>
                <h2 className="font-semibold text-gray-900 tracking-widest text-xs mt-4 font-qs">
                  PHONE
                </h2>
                <p className="leading-relaxed font-qs">
                  <a href="tel:+918880000909">+91 888 000 0909</a>
                </p>
                <h2 className="font-semibold text-gray-900 tracking-widest text-xs mt-4 font-qs">
                  WhatsApp
                </h2>
                <p className="leading-relaxed font-qs">
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
        </div>
      </section>
    </div>
  );
};

export default Marathahalli;

export const getServerSideProps = async () => {
  const url = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: `Bearer ${process.env.GRAPH_CMS_TOKEN}`,
    },
  });
  const query = gql`
    query {
      doctors {
        name
        qualification
        slug
        location
        image {
          url
        }
        medicalRegNo
        id
        designation
      }
    }
  `;
  const data = await graphQLClient.request(query);
  const doctors = data.doctors;
  return {
    props: {
      doctors,
    },
  };
};
