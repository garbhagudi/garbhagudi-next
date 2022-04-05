import React from "react";
import Head from "next/head";
import BreadCrumbs from "components/breadcrumbs";

const VisionMission = () => {
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Vision &amp; Mission | GarbhaGudi</title>
        <meta
          name="title"
          content="Vision &amp; Mission | GarbhaGudi IVF Centre"
        />
        <meta
          name="description"
          content="Spanning over a decade, GarbhaGudi has served as a beacon of hope to thousands of infertile couples. Our experienced and dedicated specialists, nurses, and embryologists work to cater for your needs and respond to them quickly, professionally and warmly. "
        />

        {/* Open Graph / Facebook */}

        <meta
          property="og:title"
          content="Vision and Mission | GarbhaGudi IVF Centre"
        />
        <meta property="og:site_name" content="GarbhaGudi IVF Centre" />
        <meta property="og:url" content="https://garbhagudi.com" />
        <meta
          property="og:description"
          content="Spanning over a decade, GarbhaGudi has served as a beacon of hope to thousands of infertile couples. Our experienced and dedicated specialists, nurses, and embryologists work to cater for your needs and respond to them quickly, professionally and warmly. "
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.jpg"
        />

        {/* Twitter*/}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@garbhagudiivf" />
        <meta name="twitter:title" content=" | GarbhaGudi IVF Centre" />
        <meta
          name="twitter:description"
          content="Spanning over a decade, GarbhaGudi has served as a beacon of hope to thousands of infertile couples. Our experienced and dedicated specialists, nurses, and embryologists work to cater for your needs and respond to them quickly, professionally and warmly. "
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.jpg"
        />
      </Head>
      <BreadCrumbs
        text1="About"
        link1="/about/overview"
        text2="Mission &amp; Vision"
        link2="#"
        link3={""}
        text3={""}
        link4={""}
        text4={""}
      />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="sm:w-1/2 mb-10 px-4">
              <h2 className="title-font text-3xl font-heading font-semibold text-brandliteGray mt-6 mb-3">
                Vision
              </h2>
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full mb-2"
                  src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643278927/About/1201x501_Vision_c6ds1h.jpg"
                />
              </div>

              <p className="leading-relaxed text-lg font-content text-left text-brandDark mt-2">
                A mission followed by dedication and hard work turns into a
                vision. Enormous amount of hard work goes into reaching out to
                more and more people and create an awareness about infertility
                and treatments for infertility. With a vision to help nurture
                the happiest moments of life, our vision is to reach far and
                wide, to have GarbhaGudi as a globally renowned health
                university with superlative success rate, strong scientific
                approach, ethical values, and humane touch.
              </p>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
              <h2 className="title-font text-3xl text-brandliteGray mt-6 mb-3 font-heading font-semibold">
                Mission
              </h2>
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full mb-2"
                  src="https://res.cloudinary.com/garbhagudiivf/image/upload/v1643278945/About/1201x501_Mission_wcctgt.jpg"
                />
              </div>

              <p className="leading-relaxed font-content text-lg text-left text-brandDark mt-2">
                Dr. Asha S. Vijay, a post graduate in Obstetrics &amp;
                Gynecology from the prestigious Bangalore Medical College,
                started her career with Kidwai Institute of Oncology, Bangalore
                and subsequently set up her own practice with Sannidhi
                Multi-Specialty Hospital. In years of her career, she saw the
                struggle of infertility patients. Her observation of people
                having misconceptions about infertility and infertility
                treatments, cost, and procedure, motivated her to help and guide
                people with reproductive disorders, who were clueless about the
                right approach. It was at that time that she started on a
                mission and the result of such a mission is what GarbhaGudi
                exists today.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionMission;
