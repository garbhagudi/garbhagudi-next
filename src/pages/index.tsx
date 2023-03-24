import React from "react";
import Head from "next/head";
import HomeComponent from "sections/home";
import Link from "next/link";
import Faq from "sections/home/faq";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import apolloClient from "lib/apollo-graphcms";
import { gql } from "@apollo/client";

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

const responsive2 = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
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

const Home = ({ data }) => {
  function addOrgJsonLd() {
    return {
      __html: `{
        "@context": "https://schema.org",
        "@type": "MedicalOrganization",
        "name": "GarbhaGudi IVF Centre Pvt Ltd",
        "url": "https://garbhagudi.com",
        "logo": "https://res.cloudinary.com/garbhagudi/image/upload/v1633780956/garbhagudi-ivf/SVGs/logo_tyy9tg.svg",
        "alternateName": "GarbhaGudi",
        "sameAs": [
          "https://twitter.com/garbhagudiivf",
          "https://www.youtube.com/c/GarbhaGudiIVFCentre",
          "https://www.linkedin.com/company/garbagudi",
          "https://www.facebook.com/garbhagudiIVF/",
          "https://api.whatsapp.com/send/?phone=918884183338&text=Hi."
        ],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+919108910832",
            "contactType": "customer service",
            "email": "dreams@garbhagudi.com",
            "areaServed": "IN",
            "availableLanguage": [
              "en",
              "hi",
              "kn",
              "ml",
              "te",
              "ta"
            ]
          }
        ]
      }`,
    };
  }

  function addWebJsonLd() {
    return {
      __html: `{
        "@context": "https://schema.org/", 
        "@type": "Product", 
        "name": "In-vitro Fertilization (IVF)",
        "image": "https://media.graphassets.com/B1dYqOD6RMihLOVzSDCm",
        "description": "What is IVF and how does it work. IVF or In Vitro Fertilization is one of the more widely known types of Assisted Reproductive Techniques (ART).",
        "brand": {
          "@type": "Brand",
          "name": "GarbhaGudi IVF Centre"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "604"
          
        }
      }`,
    };
  }
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          Best IVF Centre in Bangalore | IVF Hospital in Bangalore | GarbhaGudi
        </title>
        <meta
          name="title"
          content="Best IVF Centre in Bangalore | IVF Hospital in Bangalore | GarbhaGudi"
        />
        <meta
          name="description"
          content="GarbhaGudi is one of the best IVF centres in Bangalore with a high success rate for IVF / infertility treatment. Book a Consultation now with the best IVF Doctor in Bangalore."
        />
        {/* Ld+JSON Data */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addOrgJsonLd()}
          key="org-jsonld"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addWebJsonLd()}
          key="web-jsonld"
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
          content="GarbhaGudi is one of the best IVF Centre in Bangalore with a high success rate for infertility treatment. Get excellent treatment at affordable cost for your fertility issues. Visit the best IVF hospital now!"
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
          content="GarbhaGudi is one of the best IVF Centre in Bangalore with a high success rate for infertility treatment. Get excellent treatment at affordable cost for your fertility issues. Visit the best IVF hospital now!"
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
        {data?.banners.map((items: any) => (
          <div className="" key={items?.id}>
            <Link href={items?.url} target="_blank" rel="noreferrer">
              <Image
                src={items?.image?.url}
                alt={items?.title}
                width={1920}
                height={630}
                className="w-full h-full"
                priority
              />
            </Link>
          </div>
        ))}
      </Carousel>
      <HomeComponent />
      <div className="bg-neutral-50" id="ourTeam">
        <div className="px-4 py-16 mx-auto text-center max-w-[1366px] sm:px-6 lg:px-8 lg:py-12">
          <div className="space-y-12">
            <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-brandDark font-heading">
                Meet our Fertility Experts
              </h2>
              <p className="text-md text-brandDark font-content">
                Our team of IVF specialists in Bangalore have been known for
                their extensive clinical experience and research contributions
                and their success in treating the most challenging fertility
                cases.
              </p>
            </div>
            <div className="hidden lg:grid grid-cols-2 mx-auto space-y-0 sm:gap-8 sm:space-y-0 lg:grid-cols-6">
              {data?.doctors.map((item: any) => {
                return (
                  <div
                    key={item?.id}
                    className="transition-all duration-500 hover:scale-125"
                  >
                    <Link href={`/fertility-experts/${item?.slug}`} passHref>
                      <div className="space-y-4">
                        <Image
                          className="mx-auto my-auto mt-4 shadow-3xl transition-all duration-300 rounded-full xl:w-40 xl:h-40 drop-shadow-2xl"
                          src={item?.image?.url}
                          alt={item?.imageAlt || item?.name}
                          width={500}
                          height={500}
                          loading="lazy"
                        />
                        <div className="space-y-0.5">
                          <h3 className="text-brandDark text-lg font-heading font-bold">
                            {item?.name}
                          </h3>
                          <p className="text-xs text-brandPurpleDark font-semibold font-content">
                            {item?.qualification}
                          </p>
                          <div className="pb-2 text-sm text-brandPink font-content drop-shadow-2xl shadow-black">
                            {item?.designation}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
            <div className="lg:hidden">
              <Carousel
                responsive={responsive2}
                ssr={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}
              >
                {data?.doctors.map((item: any) => {
                  return (
                    <div
                      key={item?.id}
                      className="mb-2 transition-all duration-500 rounded-xl "
                    >
                      <Link href={`/fertility-experts/${item?.slug}`} passHref>
                        <div className="space-y-4">
                          <Image
                            className="w-56 h-56 mx-auto my-auto mt-4 transition-all duration-500 rounded-full xl:w-44 xl:h-44 hover:scale-110"
                            src={item?.image?.url}
                            alt={item?.name || item?.imageAlt}
                            width={500}
                            height={500}
                            loading="lazy"
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
                      </Link>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <Faq />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const { data } = await apolloClient.query({
    query: gql`
      query {
        doctors(orderBy: order_ASC) {
          order
          name
          qualification
          category
          slug
          image {
            url
          }
          imageAlt
          medicalRegNo
          id
          designation
        }
        banners(orderBy: order_ASC) {
          title
          id
          url
          image {
            url
          }
        }
      }
    `,
  });

  return {
    props: {
      data,
    },
    revalidate: 180,
  };
};
