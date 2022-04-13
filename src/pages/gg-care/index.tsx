import React from "react";
import Hero from "sections/gg-care/hero";
import Contact from "sections/gg-care/content";
import Stats from "sections/gg-care/stats";
import Cta from "sections/gg-care/cta";
import Video from "sections/gg-care/workflow";
import Head from "next/head";
import Share from "components/share";

const IndexPage = () => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>GG CARE - Committed to Couple Delight | GarbhaGudi</title>
        <meta
          name="title"
          content="GG CARE - Committed to Couple Delight | GarbhaGudi IVF Centre"
        />
        <meta name="description" content="" />

        {/* Open Graph / Facebook */}

        <meta
          property="og:title"
          content="GG CARE - Committed to Couple Delight | GarbhaGudi IVF Centre"
        />
        <meta property="og:site_name" content="GarbhaGudi IVF Centre" />
        <meta property="og:url" content="https://garbhagudi.com" />
        <meta
          property="og:description"
          content="Reach out with your questions, concerns and challenges. Or just to say hi. We're always standing by and eager to help."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_GGCare_qclgw8.jpg"
        />

        {/* Twitter*/}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@garbhagudiivf" />
        <meta
          name="twitter:title"
          content="GG CARE - Committed to Couple Delight | GarbhaGudi IVF Centre"
        />
        <meta
          name="twitter:description"
          content="Reach out with your questions, concerns and challenges. Or just to say hi. We're always standing by and eager to help."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_GGCare_qclgw8.jpg"
        />
      </Head>
      <Hero />
      <Video />
      <Stats />
      <Contact />
      <div className="mb-5">
        <Share pinmedia="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_GGCare_qclgw8.jpg" />
      </div>
      <Cta />
    </div>
  );
};

export default IndexPage;
