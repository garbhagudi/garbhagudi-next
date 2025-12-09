import { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import apolloClient from 'lib/apollo-graphcms';
import { gql } from '@apollo/client';
import Image from 'next/image';

const Carousel = dynamic(() => import('nuka-carousel'), {
  ssr: false,
});

// Dynamically import components with SSR disabled
const AshaSection = dynamic(() => import('sections/LandingPages/Neutral/AshaSection'), {
  ssr: false,
});
const Banner = dynamic(() => import('sections/infertility/banner'), { ssr: true });
const InfertilityTreatmentOptions = dynamic(
  () => import('sections/infertility/content').then((mod) => mod.InfertilityTreatmentOptions),
  { ssr: false }
);
const WhatIsInfertilityTreatment = dynamic(
  () => import('sections/infertility/content').then((mod) => mod.WhatIsInfertilityTreatment),
  { ssr: true }
);
const InfertilityTreatmentProcess = dynamic(
  () => import('sections/infertility/content').then((mod) => mod.InfertilityTreatmentProcess),
  { ssr: false }
);
const WhyGarbhaGudi = dynamic(
  () => import('sections/infertility/content').then((mod) => mod.WhyGarbhaGudi),
  { ssr: false }
);
const WhenDiagnose = dynamic(
  () => import('sections/infertility/content').then((mod) => mod.WhenDiagnose),
  { ssr: false }
);
const Causes = dynamic(() => import('sections/infertility/content').then((mod) => mod.Causes), {
  ssr: false,
});
const CTA = dynamic(() => import('sections/infertility/cta'), { ssr: false });
const Faq = dynamic(() => import('sections/infertility/faq'), { ssr: false });
const DoctorLayout = dynamic(() => import('components/doctorsLayout'), { ssr: false });

const InfertilityPage = ({ doctors }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const defaultControlsConfig = {
    pagingDotsStyle: {
      display: 'none',
    },
  };
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
              "name": "Infertility Treatment in Bangalore",
              "item": "https://www.garbhagudi.com/treatments/infertility-treatment-in-bangalore"
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
          "name": "What is infertility?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Infertility is a medical condition where a couple is unable to conceive despite regular unprotected intercourse for at least a year."
          }
        },{
          "@type": "Question",
          "name": "What are the common causes of infertility in women?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Common causes of infertility in women include hormonal imbalances, ovulation disorders, uterine or fallopian tube abnormalities, endometriosis, and age-related factors."
          }
        },{
          "@type": "Question",
          "name": "What are the common causes of infertility in men?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Common causes of infertility in men include sperm abnormalities, low sperm count, issues with sperm motility, and genetic factors."
          }
        },{
          "@type": "Question",
          "name": "When should I consider seeking infertility treatment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If you have been trying to conceive for at least a year (or six months if the woman is over 35) without success, it's recommended to seek infertility evaluation and treatment."
          }
        },{
          "@type": "Question",
          "name": "What are the treatment options for infertility?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Infertility treatment options may include Intrauterine Insemination (IUI), In Vitro Fertilization (IVF), Intracytoplasmic Sperm Injection (ICSI), and other assisted reproductive technologies, depending on the specific cause of infertility."
          }
        },{
          "@type": "Question",
          "name": "How successful is infertility treatment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Success rates of infertility treatment vary depending on factors such as age, the cause of infertility, and the treatment method. Our fertility experts work closely with patients to achieve the best possible outcomes."
          }
        },{
          "@type": "Question",
          "name": "Does age impact fertility?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, age can significantly impact fertility. Fertility tends to decline as a person gets older, particularly for women. Women are born with a finite number of eggs, and their quality and quantity decrease over time. This can lead to difficulties in conceiving and a higher risk of miscarriages and birth defects as age increases. Men also experience a gradual decline in fertility with age, with potential impacts on sperm quality and reproductive function."
          }
        },
        {
          "@type": "Question",
          "name": "How much does fertility treatment cost in Bangalore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fertility treatment costs in Bangalore, as well as anywhere else, can vary widely depending on the specific treatment, the clinic or hospital, and the individual circumstances of the patient. It's essential to consult with a fertility specialist and the chosen clinic to get a more accurate cost estimate based on your situation."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to get pregnant after fertility treatment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The time it takes to get pregnant after fertility treatment can vary widely depending on the specific treatment, individual factors, and the success of the treatment. Some couples may achieve pregnancy in the first treatment cycle, while others may require multiple cycles. For example, in IVF, it typically takes a few weeks for the entire treatment cycle, from ovarian stimulation to embryo transfer. After the embryo transfer, it can take around 10-14 days to determine if the treatment was successful through a pregnancy test. However, it's important to note that not all fertility treatments result in pregnancy, and some individuals or couples may require more time or adjustments to their treatment plan."
          }
        }]
      }`,
    };
  }

  function addProductJsonLd() {
    return {
      __html: `{
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "Infertility Treatment in Bangalore",
      "description": "Infertility Treatment is a comprehensive approach designed to assist couples struggling to conceive naturally. For those seeking top-notch Fertility Treatment in Bangalore, GarbhaGudi IVF Centre offers cutting-edge solutions and compassionate care.",
      "url": "https://www.garbhagudi.com/treatments/infertility-treatment-in-bangalore",
 "image": 
        "https://res.cloudinary.com/garbhagudiivf/image/upload/v1691234594/Misc/gynecologist-performing-ultrasound-consultation-min_qb43zc.webp"
      ,
       "telephone": "+91 9108 9108 32",
            "priceRange": "₹1,10,000 - ₹1,60,000",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "CMR Road, Kalyan Nagar",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "postalCode": "560043",
        "addressCountry": "IN"
      },
      "provider": {
        "@type": "Hospital",
        "name": "GarbhaGudi IVF Centre",
        "telephone": "+91 9108 9108 32",
           "address": {
          "@type": "PostalAddress",
          "streetAddress": "CMR Road, Kalyan Nagar",
          "addressLocality": "Bengaluru",
          "addressRegion": "Karnataka",
          "postalCode": "560043",
          "addressCountry": "IN"
        },
         "image":
        "https://res.cloudinary.com/garbhagudiivf/image/upload/v1691234594/Misc/gynecologist-performing-ultrasound-consultation-min_qb43zc.webp"
      ,
        "priceRange": "₹1,10,000 - ₹1,60,000"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": 4.8,
        "ratingCount": 604
      }
    }`,
    };
  }
  return (
    <div>
      <Head>
        {/* Primary Tags */}
        <link
          rel='preload'
          href='https://res.cloudinary.com/garbhagudiivf/image/upload/v1691229236/Misc/pregnant-woman-min_wvchfc.webp'
          as='image'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Best Infertility Treatment In Bangalore</title>
        <meta
          name='title'
          content='Best Infertility Treatment In Bangalore | Expert Fertility Solutions'
        />
        <meta
          name='description'
          content='Explore top-notch infertility treatment in Bangalore at GarbhaGudi IVF Centre. Expert care, advanced procedures & high success rates. Book a consultation!'
        />

        {/* Open Graph / Facebook */}

        <meta
          property='og:title'
          content='Best Infertility Treatment In Bangalore | Expert Fertility Solutions'
        />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content='Explore top-notch infertility treatment in Bangalore at GarbhaGudi IVF Centre. Expert care, advanced procedures & high success rates. Book a consultation!'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.webp'
        />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta
          name='twitter:title'
          content='GarbhaGudi IVF Centre | Best IVF & Fertility Hospital in India'
        />
        <meta
          name='twitter:description'
          content='GarbhaGudi is a chain of new generation infertility treatment hospitals equipped with state-of-the-art infrastructure and cutting-edge technology to address this ever-increasing infertility problem.'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Home_pct8yc.webp'
        />

        <script type='application/ld+json' dangerouslySetInnerHTML={addProductJsonLd()} />

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
      </Head>
      <Banner />
      <WhatIsInfertilityTreatment />
      <InfertilityTreatmentOptions />
      <CTA />
      <InfertilityTreatmentProcess />
      <Causes />
      <WhyGarbhaGudi />
      <WhenDiagnose />
      <AshaSection />
      <div className=''>
        <div className='mx-auto bg-transparent py-10 lg:py-16'>
          <h2 className='pb-10 text-center font-heading text-2xl font-bold lg:pb-16 lg:text-3xl'>
            Our Fertility Specialists
          </h2>
          <div className='relative mx-auto flex max-w-lg items-center justify-center'>
            <Carousel
              autoplay
              defaultControlsConfig={defaultControlsConfig}
              autoplayInterval={5000}
              className='max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl'
              wrapAround
              dragging
              enableKeyboardControls
              pauseOnHover
              renderCenterLeftControls={({ previousSlide }) => (
                <button
                  onClick={previousSlide}
                  className='ml-3 hidden h-11 w-11 items-center justify-center rounded-full bg-brandPurpleDark bg-opacity-70 text-4xl text-white transition duration-300 ease-in-out hover:bg-opacity-100 md:flex'
                >
                  <HiChevronLeft className='mr-1' />
                </button>
              )}
              renderCenterRightControls={({ nextSlide }) => (
                <button
                  onClick={nextSlide}
                  className='mr-3 hidden h-11 w-11 items-center justify-center rounded-full bg-brandPurpleDark bg-opacity-70 text-4xl text-white transition duration-300 ease-in-out hover:bg-opacity-100 md:flex'
                >
                  <HiChevronRight className='ml-1' />
                </button>
              )}
            >
              {doctors.map((items) => (
                <DoctorLayout
                  index={items.id}
                  key={items.id}
                  imageComponent={
                    <ImageComponent
                      name={items.name}
                      image={items.imageUrl}
                      designation={items.designation}
                      imageAlt={items.imageAlt}
                    />
                  }
                  activeIndex={activeIndex}
                  docpic={items.imageUrl}
                  name={items.name}
                  bio={items.bio.raw.children}
                  setActiveIndex={setActiveIndex}
                ></DoctorLayout>
              ))}
            </Carousel>
          </div>
          <div className='mx-auto max-w-5xl pt-6 font-content'>
            If you're seeking the best infertility care, look no further than GarbhaGudi IVF Centre
            in Bangalore. Our team boasts the finest infertility specialists, dedicated to providing
            top-tier treatments and solutions. As the leading infertility doctor in Bangalore, we
            take pride in being the go-to destination for those in search of effective and
            compassionate care. With a reputation as the best fertility doctor in Bangalore, our
            experts at GarbhaGudi are committed to guiding your journey towards parenthood with
            expertise and unwavering support.
          </div>
        </div>
      </div>
      <Faq />
      <CTA />
    </div>
  );
};

export default InfertilityPage;

const ImageComponent = ({ name, image, designation, imageAlt }) => {
  return (
    <div className='flex flex-col items-center justify-center md:h-[21rem]'>
      <div className='relative h-44 w-44'>
        <div className='bg-[length: 400%] absolute h-full w-full animate-rotate rounded-full bg-gradient-to-br from-brandPink3/80 to-purple-500/40'></div>
        <Image
          className='rounded-full bg-transparent shadow-2xl drop-shadow-2xl'
          src={image}
          alt={imageAlt || name}
          width={500}
          height={500}
          loading='lazy'
        />
      </div>
      <div className='text-center'>
        <div className='mt-4 font-heading text-xl font-bold'>{name}</div>
        <div className='text- mb-4 mt-2 font-content'>{designation}</div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const { data } = await apolloClient.query({
    query: gql`
      {
        doctors(orderBy: order_ASC) {
          id
          name
          designation
          qualification
          image {
            url
          }
          imageUrl
          imageAlt
          bio {
            raw
          }
        }
      }
    `,
  });

  return {
    props: {
      doctors: data.doctors,
      fallback: true,
    },
    revalidate: 180,
  };
};
