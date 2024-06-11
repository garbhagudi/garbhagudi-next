import Head from 'next/head';
import React from 'react';
import CallToAction from 'sections/misc/iui-main/CallToAction';
import Advantages from 'sections/misc/iui-main/adv-disadv';
import Banner from 'sections/misc/iui-main/banner';
import Content from 'sections/misc/iui-main/content';
import Cost from 'sections/misc/iui-main/cost';
import Faq from 'sections/misc/iui-main/faq';
import ContentXtra from 'sections/misc/iui-main/more-content';
import OurCentres from 'sections/misc/iui-main/our-centres';
import Risks from 'sections/misc/iui-main/risks';

type Props = {};

const Iui = (props: Props) => {
  function addReviewJsonLd() {
    return {
      __html: `{
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "Intra-Uterine Insemination (IUI)",
        "image": "https://media.graphassets.com/B1dYqOD6RMihLOVzSDCm",
        "description": "IUI (Intrauterine Insemination) is a fertility treatment procedure in which sperm is placed directly inside a woman's uterus to increase the chance of pregnancy.",
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
              "name": "Intra-Uterine Insemination (IUI)",
              "item": "https://www.garbhagudi.com/treatments/intra-uterine-insemination-iui"
            }
          ]
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
          "name": "What is IUI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "IUI stands for intrauterine insemination. It is a procedure in which sperm is placed directly inside the uterus to increase the chances of pregnancy."
          }
        },{
          "@type": "Question",
          "name": "Who is a good candidate for IUI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "IUI is typically recommended for couples with mild fertility issues, such as problems with ovulation or sperm count. It can also be used in cases of unexplained infertility or as part of a treatment plan for couples undergoing assisted reproduction."
          }
        },{
          "@type": "Question",
          "name": "How is the IUI procedure performed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "During the IUI procedure, sperm is collected from the male partner or a sperm donor and prepared. The prepared sperm is then inserted into the uterus through a thin, flexible tube called a catheter during ovulation."
          }
        },{
          "@type": "Question",
          "name": "How long does an IUI treatment cycle take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An IUI treatment cycle can take around 4 to 6 weeks to complete, starting from the monitoring of ovulation to the confirmation of pregnancy."
          }
        },{
          "@type": "Question",
          "name": "What is the success rate of IUI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The success rate of IUI is typically around 10-20% per cycle, but it can vary depending on many factors such as the woman's age, the cause of infertility and the overall health of the sperm"
          }
        },{
          "@type": "Question",
          "name": "Are there any side effects of IUI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "IUI is generally considered a safe procedure with minimal side effects. Some women may experience mild cramping or discomfort during or after the procedure. Ovulation induction medications may cause mild side effects such as hot flashes, headaches, or mood swings."
          }
        },{
          "@type": "Question",
          "name": "What is the cost of IUI in Bangalore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "IUI treatment in India can cost between INR 15,000 and INR 50,000 per cycle, depending on the location of the clinic, the experience of the specialist, and additional costs associated with the procedure such as medications and laboratory fees. It's always best to check with the clinic or your insurance provider to understand the full cost of the treatment. Some clinics also offer financing options to help make the treatment more affordable."
          }
        }]
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
          "name": "GarbhaGudi IVF Centre",
          "telephone": "+91910891832",
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
  return (
    <div>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>IUI Treatment in Bangalore: Trusted Fertility Solutions</title>
        <meta
          name='title'
          content='IUI Treatment in Bangalore: Trusted Fertility Solutions '
        />
        <meta
          name='description'
          content='Your Path to Parenthood with Expert Guidance. Experience the best IUI treatment in Bangalore, tailored to maximize your chances of conceiving. Contact us for personalized care'
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
          dangerouslySetInnerHTML={addFaqJsonLd()}
          key='howto-jsonld'
        />

        {/* Open Graph / Facebook */}

        <meta
          property='og:title'
          content='IUI Treatment in Bangalore: Trusted Fertility Solutions'
        />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content='Your Path to Parenthood with Expert Guidance. Experience the best IUI treatment in Bangalore, tailored to maximize your chances of conceiving. Contact us for personalized care'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1674112151/Misc/c9xR52ZwxhbTdCfXFGsx4-transformed_1_lrnub0.webp'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta
          name='twitter:title'
          content='Intra-Uterine Insemination - IUI | GarbhaGudi'
        />
        <meta
          name='twitter:description'
          content="IUI (Intrauterine Insemination) is a fertility treatment procedure in which sperm is placed directly inside a woman's uterus to increase the chance of pregnancy."
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1674112151/Misc/c9xR52ZwxhbTdCfXFGsx4-transformed_1_lrnub0.webp'
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
