import React from "react";
import Head from "next/head";
import HomeComponent from "sections/home";
import Link from "next/link";
import { gql, GraphQLClient } from "graphql-request";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Home = ({ homeData }) => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          GarbhaGudi IVF Centre | Best IVF & Fertility Hospital in India
        </title>
        <meta
          name="title"
          content="GarbhaGudi IVF Centre | Best IVF & Fertility Hospital in India"
        />
        <meta
          name="description"
          content="GarbhaGudi is a chain of new generation infertility treatment hospitals equipped with state-of-the-art infrastructure and cutting-edge technology to address this ever-increasing infertility problem."
        />

        {/* Open Graph / Facebook */}

        <meta
          property="og:title"
          content="GarbhaGudi IVF Centre | Best IVF & Fertility Hospital in India"
        />
        <meta property="og:site_name" content="GarbhaGudi IVF Centre" />
        <meta property="og:url" content="https://garbhagudi.com" />
        <meta
          property="og:description"
          content="GarbhaGudi is a chain of new generation infertility treatment hospitals equipped with state-of-the-art infrastructure and cutting-edge technology to address this ever-increasing infertility problem."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.jpg"
        />

        {/* Twitter*/}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@garbhagudiivf" />
        <meta
          name="twitter:title"
          content="GarbhaGudi IVF Centre | Best IVF & Fertility Hospital in India"
        />
        <meta
          name="twitter:description"
          content="GarbhaGudi is a chain of new generation infertility treatment hospitals equipped with state-of-the-art infrastructure and cutting-edge technology to address this ever-increasing infertility problem."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.jpg"
        />

        {/* Google */}
        <meta
          name="google-site-verification"
          content="mzhcIRsJx6D4QkbJJp3Tepas8Lyv6sJLWmGb0DvKOrw"
        />
      </Head>
      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
      >
        {homeData.banners.map((items) => (
          <div className="" key={items?.id}>
            <a href={items?.url} target="_blank" rel="noreferrer">
              <img src={items?.image?.url} alt={items?.title} />
            </a>
          </div>
        ))}
      </Carousel>
      <HomeComponent />
      <div className="bg-white" id="ourTeam">
        <div className="px-4 py-16 mx-auto text-center max-w-7xl sm:px-6 lg:px-8 lg:py-12">
          <div className="space-y-12">
            <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-brandDark font-heading">
                Meet our Experts
              </h2>
              <p className="text-md text-brandDark font-content">
                Our team of fertility specialists have been known for their
                extensive clinical experience and research contributions and
                their success in treating the most challenging fertility cases.
              </p>
            </div>
            <ul className="grid grid-cols-2 mx-auto space-y-0 sm:gap-16 sm:space-y-0 lg:grid-cols-4 lg:max-w-7xl">
              {homeData?.doctors.map((item) => {
                return (
                  <li
                    key={item?.id}
                    className="mb-2 transition-all duration-500 hover:shadow-2xl rounded-xl "
                  >
                    <Link href={`/doctors/${item?.slug}`} passHref>
                      <a>
                        <div className="space-y-4">
                          <img
                            className="w-32 h-32 mx-auto my-auto mt-4 rounded-full xl:w-44 xl:h-44"
                            src={item?.image?.url}
                            alt={item?.name}
                          />
                          <div className="space-y-4">
                            <div className="space-y-1 text-lg font-medium leading-6">
                              <h3 className="text-brandDark font-content">
                                {item?.name}
                              </h3>
                              <p className="text-sm text-brandPurpleDark font-content">
                                {item?.qualification}
                              </p>
                              <p className="pb-2 text-sm text-brandPink font-content">
                                {item?.designation}
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

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
        image {
          url
        }
        medicalRegNo
        id
        designation
      }
      banners(orderBy: order_ASC) {
        title
        id
        url
        order
        image {
          url
        }
      }
    }
  `;

  const data = await graphQLClient.request(query);
  const homeData = data;

  return {
    props: {
      homeData,
    },
    revalidate: 10,
  };
};
