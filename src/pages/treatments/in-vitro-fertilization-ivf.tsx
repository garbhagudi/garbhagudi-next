import React from "react";
import Head from "next/head";
import Content from "sections/misc/ivf-main/content";
import Banner from "sections/misc/ivf-main/banner";
import WhenIvf from "sections/misc/ivf-main/when-ivf";
import Faq from "sections/misc/ivf-main/faq";
import LiveBirth from "sections/misc/ivf-main/live-birth";
import Risks from "sections/misc/ivf-main/risks";
import Video from "sections/misc/ivf-main/video";
import Related from "sections/misc/ivf-main/related";

const Ivf = () => {
  function addReviewJsonLd() {
    return {
      __html: `{
          "@context": "https://schema.org/", 
          "@type": "Product", 
          "name": "In-vitro Fertilization (IVF)",
          "image": "https://media.graphassets.com/B1dYqOD6RMihLOVzSDCm",
          "description": "What is IVF and how does it work? IVF or In Vitro Fertilization is one of the more widely known types of Assisted Reproductive Techniques (ART).",
          "brand": {
            "@type": "Brand",
            "name": "Garbha Gudi"
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
              "name": "In-vitro Fertilization (IVF)",
              "item": "https://www.garbhagudi.com/treatments/in-vitro-fertilization-ivf"
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
        "name": "In-vitro Fertilization (IVF)",
        "image": "https://media.graphassets.com/B1dYqOD6RMihLOVzSDCm",
        "description": "What is IVF and how does it work ? IVF or In Vitro Fertilization is one of the more widely known types of Assisted Reproductive Techniques (ART).",
        "offers": {
        "@type": "AggregateOffer",
        "url": "https://www.garbhagudi.com/treatments/in-vitro-fertilization-ivf",
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

  function addHowToJsonLd() {
    return {
      __html: `{
        "@context": "https://schema.org/",
        "@type": "HowTo",
        "name": "How do you prepare for IVF?",
        "description": "Various screening procedures have to be done before beginning an IVF cycle",
        "image": "https://media.graphassets.com/B1dYqOD6RMihLOVzSDCm",
        "totalTime": "PT5M",
        "step": [
          {
            "@type": "HowToStep",
            "text": "The process of IVF begins with fertility medications and hormones, which are given to the woman for about 10 – 12 days to stimulate the growth of multiple eggs in the ovary. Transvaginal ultrasound scans and hormone analysis is done to know the status of growing eggs.",
            "name": "Ovulation induction",
            "url": "https://www.garbhagudi.com/treatments/in-vitro-fertilization-ivf#:~:text=may%20be%20required.-,Ovulation%20induction,-The%20process%20of"
          },
          {
            "@type": "HowToStep",
            "text": "Egg retrieval is done 34 to 36 hours after the final trigger injection and before ovulation.",
            "name": "Egg retrieval",
            "url": "https://www.garbhagudi.com/treatments/in-vitro-fertilization-ivf#:~:text=hormones%20being%20injected.-,Egg%20retrieval,-Egg%20retrieval%20is"
          },
          {
            "@type": "HowToStep",
            "text": "The male counterpart is asked to produce a sample of semen by ejaculating. The sperms and eggs are put together in a dish and stored in the laboratory in a controlled environment to encourage fertilization.",
            "name": "Fertilization",
            "url": "https://www.garbhagudi.com/treatments/in-vitro-fertilization-ivf#:~:text=fertilize%20the%20eggs.-,Fertilization,-The%20male%20counterpart"
          },
          {
            "@type": "HowToStep",
            "text": "The embryos are usually transferred into the woman’s uterus three to five days after egg retrieval and fertilization.",
            "name": "Embryo Transfer",
            "url": "https://www.garbhagudi.com/treatments/in-vitro-fertilization-ivf#:~:text=IVF%20cycles%20failed.-,Embryo%20Transfer,-The%20embryos%20are"
          },
          {
            "@type": "HowToStep",
            "text": "In an IVF cycle, one or more embryos develop and these embryos are usually frozen for later use.",
            "name": "Frozen Embryo transfer",
            "url": "Frozen Embryo transfer"
          },
          {
            "@type": "HowToStep",
            "text": "There may be a slight discomfort after the embryo transfer, normal daily activities can be resumed.",
            "name": "After the Embryo Transfer procedure",
            "url": "After the Embryo Transfer procedure"
          }
        ]
      }`,
    };
  }
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>In-vitro Fertilization - IVF | GarbhaGudi</title>
        <meta
          name="title"
          content="In-vitro Fertilization - IVF | GarbhaGudi"
        />
        <meta
          name="description"
          content="What is IVF and how does it work? IVF or In Vitro Fertilization is one of the more widely known types of Assisted Reproductive Techniques (ART)."
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addHowToJsonLd()}
          key="howto-jsonld"
        />

        {/* Open Graph / Facebook */}

        <meta
          property="og:title"
          content="In-vitro Fertilization - IVF | GarbhaGudi"
        />
        <meta property="og:site_name" content="GarbhaGudi IVF Centre" />
        <meta property="og:url" content="https://garbhagudi.com" />
        <meta
          property="og:description"
          content="What is IVF and how does it work? IVF or In Vitro Fertilization is one of the more widely known types of Assisted Reproductive Techniques (ART)."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://media.graphassets.com/B1dYqOD6RMihLOVzSDCm"
        />

        {/* Twitter*/}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@garbhagudiivf" />
        <meta
          name="twitter:title"
          content="In-vitro Fertilization - IVF | GarbhaGudi"
        />
        <meta
          name="twitter:description"
          content="What is IVF and how does it work? IVF or In Vitro Fertilization is one of the more widely known types of Assisted Reproductive Techniques (ART)."
        />
        <meta
          name="twitter:image"
          content="https://media.graphassets.com/B1dYqOD6RMihLOVzSDCm"
        />
      </Head>
      <div>
        <Banner />
        <Content />
        <WhenIvf />
        <LiveBirth />
        <Faq />
        <Risks />
        <Video />
        <Related />
      </div>
    </div>
  );
};

export default Ivf;
