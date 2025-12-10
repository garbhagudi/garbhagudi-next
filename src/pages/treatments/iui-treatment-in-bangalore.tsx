import Head from 'next/head';
import dynamic from 'next/dynamic';
import Header from 'sections/LandingPages/unbounce/header';

// Dynamically import the components without SSR
const LPACta = dynamic(() => import('components/LPACta'), { ssr: false });
const CallToAction = dynamic(() => import('sections/misc/iui-main/CallToAction'), { ssr: false });
const Banner = dynamic(() => import('sections/misc/iui-main/banner'), { ssr: true });
const Content = dynamic(() => import('sections/misc/iui-main/content'), { ssr: false });
const Cost = dynamic(() => import('sections/misc/iui-main/cost'), { ssr: false });
const Faq = dynamic(() => import('sections/misc/iui-main/faq'), { ssr: false });
const ContentXtra = dynamic(() => import('sections/misc/iui-main/more-content'), { ssr: false });

const Iui = () => {
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
              "item": "https://www.garbhagudi.com/treatments/iui-treatment-in-bangalore"
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

  function addDocJsonLd() {
    return {
      __html: `{
  "name": "IUI Treatment",
  "@type": "Product",
  "@context": "https://schema.org/",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingCount": "604",
    "ratingValue": "4.9",
    "reviewCount": "1200"
  }
}`,
    };
  }

  function addReviewJsonLd() {
    const title = 'IUI Treatment in Bangalore: Trusted Fertility Solutions';
    const image =
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1762497773/paripoorna_Landing_Page_Banner-02_qebqpx.webp';
    const description =
      'Explore the best IUI treatment in Bangalore at GarbhaGudi IVF Centre. High success rates, affordable costs & expert care. Book a consultation today!';

    return {
      __html: `{
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "${title}",
      "image": "${image}",
      "description": "${description}",
      "brand": {
        "@type": "Brand",
        "name": "GarbhaGudi IVF Centre"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "604"
      }
    }`,
    };
  }

  return (
    <div>
      <Head>
        <link
          rel='preload'
          href='https://res.cloudinary.com/garbhagudiivf/image/upload/v1762497773/paripoorna_Landing_Page_Banner-02_qebqpx.webp'
          as='image'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>IUI Treatment in Bangalore: Trusted Fertility Solutions</title>
        <meta name='title' content='IUI Treatment in Bangalore: Trusted Fertility Solutions ' />
        <meta
          name='description'
          content='Explore the best IUI treatment in Bangalore at GarbhaGudi IVF Centre. High success rates, affordable costs & expert care. Book a consultation today!'
        />

        <script type='application/ld+json' dangerouslySetInnerHTML={addDocJsonLd()} />

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
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={addReviewJsonLd()}
          key='review-jsonld'
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
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1762497773/paripoorna_Landing_Page_Banner-02_qebqpx.webp'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content='Intra-Uterine Insemination - IUI | GarbhaGudi' />
        <meta
          name='twitter:description'
          content="IUI (Intrauterine Insemination) is a fertility treatment procedure in which sperm is placed directly inside a woman's uterus to increase the chance of pregnancy."
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1762497773/paripoorna_Landing_Page_Banner-02_qebqpx.webp'
        />
      </Head>
      <Header />
      <Banner />
      <Content />
      <ContentXtra />
      <CallToAction />
      <Cost />
      <Faq />
      <LPACta />
    </div>
  );
};

export default Iui;
