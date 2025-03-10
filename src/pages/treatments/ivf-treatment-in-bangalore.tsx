import React from 'react';
import Head from 'next/head';
import Content from 'sections/misc/ivf-main/content';
import Banner from 'sections/misc/ivf-main/banner';
import WhenIvf from 'sections/misc/ivf-main/when-ivf';
import Faq from 'sections/misc/ivf-main/faq';
import LiveBirth from 'sections/misc/ivf-main/live-birth';
import Risks from 'sections/misc/ivf-main/risks';
import Video from 'sections/misc/ivf-main/video';
import Related from 'sections/misc/ivf-main/related';

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
            "name": "GarbhaGudi IVF Centre"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "bestRating": "5",
            "worstRating": "1",
            "reviewCount": "604"
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
          "name": "GarbhaGudi IVF Centre",
          "telephone": "+91 9108 9108 32",
          "priceRange": "90000 - 280000",
            "ratingValue": "4.8",
            "bestRating": "5",
            "worstRating": "1",
            "reviewCount": "604"
          }
        }
      }`,
    };
  }

  function addFaqJsonLd() {
    return {
      __html: `{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{
          "@type": "Question",
          "name": "What is the average IVF cost in Bangalore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost of in vitro fertilization (IVF) can vary widely depending on various factors such as the location of the treatment, the specific IVF protocol being used, and the individual patient's medical history and fertility challenges. In general, the cost of IVF treatment in Bangalore can range from around INR 1,50,000 to INR 3,50,000 per cycle, although some clinics may charge more or less. It is important to note that the cost of IVF can add up quickly, as most patients require multiple cycles to achieve a successful pregnancy. Some patients may also require additional procedures or medications, which can further increase the overall cost of treatment."
          }
        },{
          "@type": "Question",
          "name": "IVF Treatment Centres in Bangalore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "GarbhaGudi is a place where dreams come alive, hopes never fade, and possibilities never end. We strive tirelessly to assist you to treasure the golden moment of holding your little bundles of joy. You no longer need to go long distances for fertility treatments! GarbhaGudi now has five strategically positioned branches in Bengaluru and wants to expand to additional places in the near future. Our branches are located in HanumanthaNagar, Kalyan Nagar, Electronic City, Jayanagar and Marathahalli"
          }
        },{
          "@type": "Question",
          "name": "What is Success rate and Risk percentage involved in IVF treatment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The success rate of in vitro fertilization (IVF) can vary widely depending on several factors, including the patient's age, the cause of infertility, and the quality of the embryos. In general, the overall success rate of IVF is about 35% for women under the age of 35, declining to about 10-20% for women over the age of 40. However, it is important to note that these are just estimates, and the actual success rate can vary widely from one patient to another. As for the risks involved in IVF treatment, they are generally minimal and most patients do not experience any serious complications. Some common side effects of IVF may include bloating, cramping, breast tenderness, and mood changes. More serious risks, such as bleeding or infection, are rare but can occur. Additionally, there is a small risk of multiple pregnancies, which can pose additional health risks for both the mother and the babies."
          }
        },{
          "@type": "Question",
          "name": "What are the additional costs related to IVF Treatment in Bangalore and nearby areas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "There are several additional costs that can be associated with in vitro fertilization (IVF) treatment. These can include: Medications: The medications needed to stimulate egg production and prepare the uterus for pregnancy can be expensive. These medications are usually not covered by insurance. Genetic testing: Pre-implantation genetic testing (PGT) can be done to check the health of the embryos before they are transferred to the uterus. Anesthesia: Some patients may need to be sedated for the egg retrieval procedure, which can add to the cost of the treatment. Storage of frozen embryos: If you have leftover embryos after the IVF cycle, you may choose to have them frozen for future use. Multiple cycles: It is common for patients to need more than one cycle of IVF in order to become pregnant. Each additional cycle can add to the overall cost of treatment.This can add to the cost of the treatment. It is important to discuss the potential costs of IVF treatment with your doctor and fertility clinic in order to fully understand the expenses you may incur."
          }
        }]
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
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Best IVF Treatment In Bangalore</title>
        <meta name='title' content='Best IVF Treatment In Bangalore' />
        <meta
          name='description'
          content='IVF Treatment in Bangalore:Experience advanced IVF treatment in Bangalore, tailored to help you achieve your dream of parenthood. Contact us for expert care and support.'
        />

        {/* Ld+JSON Data */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={addReviewJsonLd()}
          key='review-jsonld'
        />

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={addProductJsonLd()}
          key='product-jsonld'
        />

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={addBreadcrumbsJsonLd()}
          key='breadcrumbs-jsonld'
        />

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={addHowToJsonLd()}
          key='howto-jsonld'
        />

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={addFaqJsonLd()}
          key='howto-jsonld'
        />

        {/* Open Graph / Facebook */}

        <meta property='og:title' content='Best IVF Treatment In Bangalore | Garbhagudi ' />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content='IVF Treatment in Bangalore:Experience advanced IVF treatment in Bangalore, tailored to help you achieve your dream of parenthood. Contact us for expert care and support.'
        />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='https://media.graphassets.com/B1dYqOD6RMihLOVzSDCm' />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content='In-vitro Fertilization - IVF | GarbhaGudi' />
        <meta
          name='twitter:description'
          content='What is IVF and how does it work? IVF or In Vitro Fertilization is one of the more widely known types of Assisted Reproductive Techniques (ART).'
        />
        <meta name='twitter:image' content='https://media.graphassets.com/B1dYqOD6RMihLOVzSDCm' />
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
