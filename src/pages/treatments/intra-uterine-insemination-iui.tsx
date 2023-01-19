import Head from "next/head";
import React from "react";
import CallToAction from "sections/misc/iui-main/CallToAction";
import Advantages from "sections/misc/iui-main/adv-disadv";
import Banner from "sections/misc/iui-main/banner";
import Content from "sections/misc/iui-main/content";
import Cost from "sections/misc/iui-main/cost";
import Faq from "sections/misc/iui-main/faq";
import ContentXtra from "sections/misc/iui-main/more-content";
import OurCentres from "sections/misc/iui-main/our-centres";
import Risks from "sections/misc/iui-main/risks";

type Props = {};

const Iui = (props: Props) => {
  function addReviewJsonLd() {
    return {
      __html: `{
          "@context": "https://schema.org/", 
          "@type": "Product", 
          "name": "Intra-Uterine Insemination (IUI)",
          "image": "https://res.cloudinary.com/garbhagudiivf/image/upload/v1674112151/Misc/c9xR52ZwxhbTdCfXFGsx4-transformed_1_lrnub0.webp",
          "description": "IUI (Intrauterine Insemination) is a fertility treatment procedure in which sperm is placed directly inside a woman's uterus to increase the chance of pregnancy.",
          "brand": {
            "@type": "Brand",
            "name": "GarbhaGudi"
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

  function addBreadcrumbsJsonLd() {
    return {
      __html: `{
          "@context": "https://schema.org/",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": "1",
              "name": "HOME",
              "item": "https://www.garbhagudi.com/"
            },
            {
              "@type": "ListItem",
              "position": "2",
              "name": "treatments",
              "item": "https://www.garbhagudi.com/treatments/"
            },
            {
              "@type": "ListItem",
              "position": "3",
              "name": "Intra-Uterine Insemination (IUI)",
              "item": "https://www.garbhagudi.com/treatments/intra-uterine-insemination-iui"
            }
          ]
        }`,
    };
  }

  function addProductJsonLd() {
    return {
      __html: `{
        "@context": "https://schema.org/", 
        "@type": "Service", 
        "name": "Intra-Uterine Insemination (IUI)",
        "image": "https://res.cloudinary.com/garbhagudiivf/image/upload/v1674112151/Misc/c9xR52ZwxhbTdCfXFGsx4-transformed_1_lrnub0.webp",
        "description": "IUI (Intrauterine Insemination) is a fertility treatment procedure in which sperm is placed directly inside a woman's uterus to increase the chance of pregnancy.",
        "offers": {
        "@type": "AggregateOffer",
        "url": "https://www.garbhagudi.com/treatments/intra-uterine-insemination-iui",
        "priceCurrency": "INR",
        "lowPrice": "90000",
        "highPrice": "220000"
        },
        "aggregateRating": {
        "@type": "AggregateRating",
          "itemReviewed": {
          "@type": "Hospital",
          "image": "https://res.cloudinary.com/garbhagudi/image/upload/v1633780956/garbhagudi-ivf/SVGs/logo_tyy9tg.svg",
          "name": "Garbha Gudi",
          "telephone": "+918880000909",
          "priceRange": "90000 - 280000"
          }
        } 
      }`,
    };
  }
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Intra-Uterine Insemination - IUI | GarbhaGudi</title>
        <meta
          name="title"
          content="Intra-Uterine Insemination - IUI | GarbhaGudi"
        />
        <meta
          name="description"
          content="IUI (Intrauterine Insemination) is a fertility treatment procedure in which sperm is placed directly inside a woman's uterus to increase the chance of pregnancy."
        />

        {/* Ld+JSON Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addReviewJsonLd()}
          key="review-jsonld"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addProductJsonLd()}
          key="product-jsonld"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addBreadcrumbsJsonLd()}
          key="breadcrumbs-jsonld"
        />

        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addHowToJsonLd()}
          key="howto-jsonld"
        /> */}

        {/* Open Graph / Facebook */}

        <meta
          property="og:title"
          content="Intra-Uterine Insemination - IUI | GarbhaGudi"
        />
        <meta property="og:site_name" content="GarbhaGudi IVF Centre" />
        <meta property="og:url" content="https://garbhagudi.com" />
        <meta
          property="og:description"
          content="IUI (Intrauterine Insemination) is a fertility treatment procedure in which sperm is placed directly inside a woman's uterus to increase the chance of pregnancy."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1674112151/Misc/c9xR52ZwxhbTdCfXFGsx4-transformed_1_lrnub0.webp"
        />

        {/* Twitter*/}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@garbhagudiivf" />
        <meta
          name="twitter:title"
          content="Intra-Uterine Insemination - IUI | GarbhaGudi"
        />
        <meta
          name="twitter:description"
          content="IUI (Intrauterine Insemination) is a fertility treatment procedure in which sperm is placed directly inside a woman's uterus to increase the chance of pregnancy."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1674112151/Misc/c9xR52ZwxhbTdCfXFGsx4-transformed_1_lrnub0.webp"
        />
      </Head>
      <Banner />
      <Content />
      <ContentXtra />
      <OurCentres />
      <CallToAction />
      <Cost />
      <Faq />
      <Risks />
      <Advantages />
    </div>
  );
};

export default Iui;
