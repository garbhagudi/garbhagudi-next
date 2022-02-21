import React from "react";
import Faq from "sections/Faq/faq";
import Head from "next/head";

const faq = () => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Frequently Asked Questions | GarbhaGudi</title>
        <meta
          name="title"
          content="Frequently Asked Questions | GarbhaGudi IVF Centre"
        />
        <meta
          name="description"
          content="Here are some of the most frequently asked questions about infertility and its treatment options."
        />

        {/* Open Graph / Facebook */}

        <meta
          property="og:title"
          content="Frequently Asked Questions | GarbhaGudi IVF Centre"
        />
        <meta property="og:site_name" content="GarbhaGudi IVF Centre" />
        <meta property="og:url" content="https://garbhagudi.com" />
        <meta
          property="og:description"
          content="Here are some of the most frequently asked questions about infertility and its treatment options."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802155/SEO/OG_images_FAQs_k40phu.jpg"
        />

        {/* Twitter*/}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@garbhagudiivf" />
        <meta
          name="twitter:title"
          content="Frequently Asked Questions | GarbhaGudi IVF Centre"
        />
        <meta
          name="twitter:description"
          content="Here are some of the most frequently asked questions about infertility and its treatment options."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802155/SEO/OG_images_FAQs_k40phu.jpg"
        />
      </Head>
      <Faq />
    </div>
  );
};

export default faq;
