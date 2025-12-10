import dynamic from 'next/dynamic';
import Head from 'next/head';
import Banner from 'sections/egg-freezing/banner';
const Faq = dynamic(() => import('sections/egg-freezing/faq'), { ssr: false });
const FertilityTest = dynamic(() => import('sections/egg-freezing/FertilityTest'), { ssr: false });
const Freezing = dynamic(() => import('sections/egg-freezing/Freezing'), { ssr: false });
const CTA = dynamic(() => import('sections/infertility/cta'), { ssr: false });
const Expects = dynamic(() => import('sections/egg-freezing/Expects'), { ssr: false });
const Overview = dynamic(() => import('sections/egg-freezing/overview'), { ssr: false });
const PlannedSteps = dynamic(() => import('sections/egg-freezing/PlannedSteps'), { ssr: false });
const CreativeVideo = dynamic(() => import('sections/egg-freezing/creativeVideo'), { ssr: false });

export default function fertility() {
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
              "name": "Treatments",
              "item": "https://www.garbhagudi.com/treatments/"
            },
            {
              "@type": "ListItem",
              "position": "3",
              "name": "IVF Treatment & Egg Freezing",
              "item": "https://www.garbhagudi.com/treatments/ivf-treatment-egg-freezing"
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
          "name": "What is egg freezing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Egg freezing, or oocyte cryopreservation, is a process where a woman's eggs are extracted, frozen, and stored, essentially preserving her fertility for future use."
          }
        },{
          "@type": "Question",
          "name": "Who should consider egg freezing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Women who wish to delay pregnancy, those facing medical treatments that could affect fertility, or those with other personal reasons for wanting to preserve their eggs at a younger age."
          }
        },{
          "@type": "Question",
          "name": "What is the ideal age to freeze eggs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The best time to freeze eggs is typically in a woman's late 20s to early 30s. While it's possible to freeze eggs in later years, success rates tend to decrease as age impacts egg quality and quantity."
          }
        },{
          "@type": "Question",
          "name": "How does egg freezing work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The process involves ovarian stimulation (hormone injections), egg retrieval, and then freezing the eggs using a rapid freezing technique called vitrification."
          }
        },{
          "@type": "Question",
          "name": "Are frozen eggs as good as fresh eggs for IVF?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, advanced freezing methods like vitrification have achieved the same IVF success rates with frozen eggs as with fresh eggs."
          }
        },{
          "@type": "Question",
          "name": "How long can eggs be stored frozen?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Frozen eggs can be stored indefinitely without a significant decrease in quality."
          }
        }]
      }`,
    };
  }

  function addDocJsonLd() {
    return {
      __html: `{
  "name": "IVF Treatment & Egg Freezing",
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
    const title = 'IVF Treatment & Egg Freezing in Bangalore: Expert Fertility Care';
    const image =
      'https://res.cloudinary.com/garbhagudiivf/image/upload/v1733303389/Egg_Freezing_info_Web_Banner--01_easb3r.webp';
    const description =
      'Explore advanced IVF treatment & egg freezing at GarbhaGudi IVF. Boost your fertility journey with expert care. Book a consultation today!';

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
        {/* Preload the main image */}
        <link
          rel='preload'
          href='https://res.cloudinary.com/garbhagudiivf/image/upload/v1733303389/Egg_Freezing_info_Web_Banner--01_easb3r.webp'
          as='image'
        />
        <link rel='dns-prefetch' href='https://media.graphassets.com' />
        {/* Primary Tags */}
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>IVF Treatment & Egg Freezing in Bangalore | GarbhaGudi</title>
        <meta name='title' content={'IVF Treatment & Egg Freezing in Bangalore | GarbhaGudi'} />
        <meta name='og:title' content='IVF Treatment & Egg Freezing | Expert Fertility Care' />
        <meta
          name='description'
          content='Explore advanced IVF treatment & egg freezing at GarbhaGudi IVF. Boost your fertility journey with expert care. Book a consultation today! 
'
        />
        <meta
          name='og:description'
          content='Explore advanced IVF treatment and egg freezing options to preserve fertility and increase your chances of conception. Trusted by thousands of hopeful parents.'
        />
        <meta
          name='keywords'
          content='egg freezing, fertility preservation, freeze eggs, IVF egg freezing, fertility clinic, best egg freezing center, GarbhaGudi IVF, fertility treatment, egg freezing cost, future pregnancy planning'
        />

        {/* Ld+JSON Data */}

        {/* Open Graph / Facebook */}
        <meta
          property='og:title'
          content='IVF Treatment & Egg Freezing in Bangalore | GarbhaGudi'
        />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content='Explore advanced IVF treatment & egg freezing at GarbhaGudi IVF. Boost your fertility journey with expert care. Book a consultation today! 
'
        />
        <meta property='og:type' content='article' />
        {/* Twitter*/}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta
          name='twitter:title'
          content={'IVF Treatment & Egg Freezing in Bangalore | GarbhaGudi'}
        />
        <meta
          name='twitter:description'
          content='Explore advanced IVF treatment & egg freezing at GarbhaGudi IVF. Boost your fertility journey with expert care. Book a consultation today! 
'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1733303389/Egg_Freezing_info_Web_Banner--01_easb3r.webp'
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
      </Head>
      <Banner />
      <Overview />
      <FertilityTest />
      <PlannedSteps />
      <Freezing />
      <CreativeVideo />
      <Expects />
      <Faq />
      <CTA />
    </div>
  );
}
