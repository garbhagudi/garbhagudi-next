import React from "react";
import Video from "sections/home/video";
import About from "sections/LandingPages/Neutral/about";
import AshaSection from "sections/LandingPages/Neutral/AshaSection";
import FeaturesBlocks from "sections/LandingPages/Neutral/awards";
import Banner from "sections/LandingPages/Neutral/banner";
import Branch from "sections/LandingPages/Neutral/branches";
import FertilityExperts from "sections/LandingPages/Neutral/doctors";
import HeroHome from "sections/LandingPages/Neutral/hero";
import Stage from "sections/LandingPages/Neutral/stage";
import Treatments from "sections/LandingPages/Neutral/treatments";
import YACta from "sections/LandingPages/Neutral/yetAnotherCTA";
import FloatWhatsApp from "components/FloatWhatsapp";
import Cta from "sections/gg-care/cta";
import Head from "next/head";

const IndexPage = () => {
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
      </Head>
      <div>
        <Banner />
        <About />
        <Stage />
        <YACta />
        <Treatments />
        <AshaSection />
        <FertilityExperts />
        <HeroHome />
        <FeaturesBlocks />
        <div className="pt-10">
          <Video />
        </div>
        <Branch />
        <Cta />
        <FloatWhatsApp />
      </div>
    </div>
  );
};

export default IndexPage;
