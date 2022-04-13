import React from "react";
import { gql, GraphQLClient } from "graphql-request";
import Link from "next/link";
import Head from "next/head";
import BreadCrumbs from "components/breadcrumbs";
import Share from "components/share";

const KalyanNagar = ({ doctors }) => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          GarbhaGudi IVF Centre, Kalyan Nagar | Best IVF & Fertility Hospital in
          India
        </title>
        <meta
          name="title"
          content="GarbhaGudi IVF Centre, Kalyan Nagar | Best IVF & Fertility Hospital in
          India"
        />
        <meta
          name="description"
          content="GarbhaGudi is a place where dreams come alive, hopes never fade, and possibilities never end. We ceaselessly work to help you cherish the golden moment of holding your little bundles of joy."
        />

        {/* Open Graph / Facebook */}

        <meta
          property="og:title"
          content="GarbhaGudi IVF Centre, Kalyan Nagar | Best IVF & Fertility Hospital in
          India"
        />
        <meta property="og:site_name" content="GarbhaGudi IVF Centre" />
        <meta property="og:url" content="https://garbhagudi.com" />
        <meta
          property="og:description"
          content="GarbhaGudi is a place where dreams come alive, hopes never fade, and possibilities never end. We ceaselessly work to help you cherish the golden moment of holding your little bundles of joy."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643277077/Locations/1280x500_KN_irhw7p.jpg"
        />

        {/* Twitter*/}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@garbhagudiivf" />
        <meta
          name="twitter:title"
          content="GarbhaGudi IVF Centre, Kalyan Nagar | Best IVF & Fertility Hospital in
          India"
        />
        <meta
          name="twitter:description"
          content="GarbhaGudi is a place where dreams come alive, hopes never fade, and possibilities never end. We ceaselessly work to help you cherish the golden moment of holding your little bundles of joy."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643277077/Locations/1280x500_KN_irhw7p.jpg"
        />
      </Head>
      <BreadCrumbs
        text1="Locations"
        link1="/locations/fertility-experts"
        text2="Kalyan Nagar"
        link2="#"
        link3={""}
        text3={""}
        link4={""}
        text4={""}
      />
      <section className="text-gray-600 body-font relative max-w-7xl mx-auto">
        <h1 className="text-center text-2xl md:text-4xl font-heading pt-8 font-bold">
          Kalyan Nagar
        </h1>
        <div>
          <img
            src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643277077/Locations/1280x500_KN_irhw7p.jpg"
            alt="banner"
            className="rounded-xl mt-4"
          />
          <p className="my-10 text-md sm:text-lg font-content mx-auto px-6 sm:px-0">
            GarbhaGudi is a well-known IVF center that offers the complete gamut
            of assisted reproductive techniques to ensure a treatment option for
            almost every couple to address all causes of infertility. Our
            doctors are renowned Gynecologists with vast experience in IVF, and
            we have an in-house team of trained and experienced Embryologists.
            This helps us to provide advanced embryological services like ICSI
            and more. We also follow the best practices in our embryology
            laboratory. The technologies and personnel continuously monitor
            laboratory parameters to ensure the best possible outcomes. The
            center has achieved remarkable success rates due to its exceptional
            quality of treatment, reasonable costs, and hospitality. We are
            committed to providing unparalleled care for patients facing
            infertility and other reproductive health issues. Our experts and
            staff are dedicated to providing you with the greatest level of care
            and compassion. GarbhaGudi offers the best access and excellent care
            to every patient with multiple branches and plans to expand further
            across the nation.
          </p>
        </div>
        <div className="py-6 flex flex-wrap lg:flex-nowrap inset-0 ">
          <div className="lg:w-1/2 md:w-full bg-white flex flex-col md:ml-auto w-full pb-8 md:mt-0 min-h-max">
            <p className="text-center font-qs text-2xl font-semibold mb-10 mt-7 lg:mt-0">
              Fertility Specialists at Kalyan Nagar
            </p>
            <div className="mx-auto space-y-0 grid grid-cols-2 sm:gap-y-10 sm:gap-x-32 sm:space-y-0 lg:grid-cols-2 lg:max-w-7xl col-span-full">
              {doctors.map((item) => {
                if (item.location?.includes("KalyanNagar")) {
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
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7774.402186224549!2d77.64597804814905!3d13.022862590006048!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfb184afa11ae1fdd!2sGarbhaGudi%20IVF%20Centre%2C%20Kalyan%20Nagar.!5e0!3m2!1sen!2sin!4v1641899203760!5m2!1sen!2sin"
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded-3xl shadow-3xl">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs font-qs">
                  ADDRESS
                </h2>
                <p className="mt-1 font-content">
                  Park Landing, 5AC-709, Outer Ring Rd, Balachandra Layout, HRBR
                  Layout 2nd Block, Chelekare, Extension, Bengaluru, Karnataka
                  560043
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
        <Share pinmedia="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643277077/Locations/1280x500_KN_irhw7p.jpg" />
        <h1 className="text-center text-2xl md:text-4xl font-heading py-8 font-bold mx-auto">
          Virtual Tour
        </h1>
        <ul className="mx-auto grid grid-cols-1 sm:gap-x-0 py-8 px-2 lg:grid-cols-3 max-w-7xl">
          <li>
            <div className="space-y-4">
              <div className="bg-gray-300 rounded-3xl overflow-hidden sm:mr-10 p-10 relative h-[24rem] mx-auto mt-4">
                <iframe
                  width="100%"
                  height="100%"
                  className="absolute inset-0"
                  frameBorder="0"
                  loading="lazy"
                  title="map"
                  scrolling="no"
                  src="https://www.google.com/maps/embed?pb=!4v1641899255604!6m8!1m7!1sCAoSLEFGMVFpcE00ZXNBYVQzZklveUJ2c2Y1aExRMG4xMklYcHFuNkVnVzZ4US1m!2m2!1d13.0244657460505!2d77.64408899883404!3f237.31!4f-23.989999999999995!5f0.5970117501821992"
                ></iframe>
              </div>
            </div>
          </li>
          <li>
            <div className="space-y-4">
              <div className="bg-gray-300 rounded-3xl overflow-hidden sm:mr-10 p-10 relative h-[24rem] mx-auto mt-4">
                <iframe
                  width="100%"
                  height="100%"
                  className="absolute inset-0"
                  frameBorder="0"
                  loading="lazy"
                  title="map"
                  scrolling="no"
                  src="https://www.google.com/maps/embed?pb=!4v1641899338533!6m8!1m7!1sCAoSLEFGMVFpcFBWMkhtQk1zTnNvTDRneDVld1BxNjBNZEthd1gtSl9ndm50NjRK!2m2!1d13.02447078843926!2d77.64401920791784!3f76.42!4f-14.329999999999998!5f0.5970117501821992"
                ></iframe>
              </div>
            </div>
          </li>
          <li>
            <div className="space-y-4">
              <div className="bg-gray-300 rounded-3xl overflow-hidden sm:mr-10 p-10 relative h-[24rem] mx-auto mt-4">
                <iframe
                  width="100%"
                  height="100%"
                  className="absolute inset-0"
                  frameBorder="0"
                  loading="lazy"
                  title="map"
                  scrolling="no"
                  src="https://www.google.com/maps/embed?pb=!4v1641899398114!6m8!1m7!1sCAoSLEFGMVFpcFBURFhkZnVIQWhZWEJOVlFPYUotck0wVXUtdGZrRFNrVnBFMlpD!2m2!1d13.02444002159439!2d77.64405567715198!3f355.9080810546875!4f0!5f0.7820865974627469"
                ></iframe>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default KalyanNagar;

export const getStaticProps = async () => {
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
    revalidate: 180,
  };
};
