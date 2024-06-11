import React from 'react';
import apolloClient from 'lib/apollo-graphcms';
import { gql } from '@apollo/client';
import { RichText } from '@graphcms/rich-text-react-renderer';
import Head from 'next/head';
import BreadCrumbs from 'components/breadcrumbs';
import { useRouter } from 'next/router';
import Share from 'components/share';
import Loading from 'components/Loading';

export const getStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query({
    query: gql`
      query ($slug: String!) {
        treatment(where: { slug: $slug }) {
          id
          title
          metaTitle
          altTitle
          metaDescription
          slug
          image {
            url
          }
          imageAlt
          content {
            raw
            text
          }
        }
      }
    `,
    variables: {
      slug: params.slug,
    },
  });
  return {
    props: {
      treatment: data.treatment,
    },
    revalidate: 180,
  };
};

export const getStaticPaths = async () => {
  const { data } = await apolloClient.query({
    query: gql`
      query {
        treatments {
          title
          slug
        }
      }
    `,
  });
  return {
    paths: data.treatments.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
};

const Treatment = ({ treatment }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <Loading />;
  }

  function addReviewJsonLd() {
    return {
      __html: `{
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": "${treatment?.title}",
        "image": "${treatment?.image?.url}",
        "description": "${treatment?.content?.text.slice(0, 160)}",
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

  function addProductJsonLd() {
    return {
      __html: `{
        "@context": "https://schema.org/",
        "@type": "Service",
        "name": "${treatment?.title}",
        "image": "${treatment?.image?.url}",
        "description": "${treatment?.content?.text.slice(0, 160)}",
        "offers": {
        "@type": "AggregateOffer",
        "url": "https://www.garbhagudi.com/treatments/${treatment?.slug}",
        "priceCurrency": "INR",
        "lowPrice": "90000",
        "highPrice": "280000"
        },
        "aggregateRating": {
        "@type": "AggregateRating",
          "itemReviewed": {
            "@type": "Hospital",
            "image": "https://res.cloudinary.com/garbhagudi/image/upload/v1633780956/garbhagudi-ivf/SVGs/logo_tyy9tg.svg",
            "name": "GarbhaGudi IVF Centre",
            "telephone": "+919108910832",
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
              "name": "${treatment?.title}",
              "item": "https://www.garbhagudi.com/treatments/${treatment?.slug}"
            }
          ]
        }`,
    };
  }

  function faqJsonLd() {
    return {
      __html: `{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{
          "@type": "Question",
          "name": "What is Laparoscopic Surgery?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Are you looking for a minimally invasive surgical option? Laparoscopic surgery, also known as keyhole surgery, is a surgical technique that uses small incisions and specialized tools to access the inside of the body. GarbhaGudi IVF Centre is the best Laparoscopic Surgery Hospital in Bangalore, equipped with the latest technology and experienced Laparoscopic Surgeons in Bangalore to perform safe and effective procedures. If you're looking for Laparoscopic Surgery in Bangalore, look no further than GarbhaGudi IVF Centre. A laparoscopy is a surgery that checks for problems in a female reproductive system or the abdomen. A doctor recommends laparoscopy to diagnose infertility or to treat some fertility problems. In this surgery, a thin tube called a laparoscope is slid into the affected area through a small incision. The laparoscope has a camera attached to it. The camera sends images to a video monitor."
          }
        },{
          "@type": "Question",
          "name": "Why is laparoscopic surgery done?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Laparoscopic surgery is a preferred option for many conditions such as gallbladder removal, appendectomy, hernia repair, and more. It's a safe and effective way to treat conditions that require surgery. If you're in Bangalore and looking for a Laparoscopic Surgeon in Bangalore, GarbhaGudi IVF Centre has the best doctors and state-of-the-art technology to provide the care you need."
          }
        },{
          "@type": "Question",
          "name": "When Laparoscopy Is Used",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You experience pain during sexual intercourse. You suffer from acute period cramps or pelvic pain. Moderate to severe endometriosis is suspected. Pelvic disease or severe pelvic adhesions are suspected. Your doctor suspects an extrauterine pregnancy (which is often life-threatening if left untreated) Hydrosalpinx is suspected. It is a selected blocked Fallopian tube. Removing the affected tubule can improve IVF success rates. Endometrial deposits are suspected of reducing your fertility. Surgery could also be ready to unblock or repair a Fallopian tube. Success rates vary when it comes to tubal repair. An ovarian cyst is suspected of causing pain or blocking the fallopian tubes. A fibroid is causing pain, distorting the cavity, or blocking your fallopian tubes. You have PCOS and the doctor recommends ovarian drilling."
          }
        },{
          "@type": "Question",
          "name": "What are the Benefits of Laparoscopic Surgery?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Laparoscopic surgery has several benefits over traditional open surgery, including smaller incisions, less pain, reduced scarring, faster recovery, and shorter hospital stays. GarbhaGudi IVF Centre, a leading Laparoscopic Surgery Hospital in Bangalore, can offer you these benefits and more. With experienced Laparoscopic Surgeons in Bangalore and cutting-edge technology, you can trust GarbhaGudi IVF Centre for safe, effective, and minimally invasive surgical procedures."
          }
        },{
          "@type": "Question",
          "name": "What are the Side Effects of Laparoscopic Surgery?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Like any surgery, Laparoscopic Surgery carries some risks, including bleeding, infection, and organ damage. However, the risks are lower with laparoscopic surgery compared to traditional open surgery. The experienced Laparoscopic Surgeons in Bangalore at GarbhaGudi IVF Centre take every precaution to minimize these risks and provide safe and effective care."
          }
        },{
          "@type": "Question",
          "name": "Laparoscopic Surgery Cost In Bangalore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Laparoscopic Surgery Cost in Bangalore can vary based on factors such as the type of procedure, hospital charges, surgeon fees, and other expenses. At GarbhaGudi IVF Centre, we offer reasonable Laparoscopy cost in Bangalore with no compromise on the quality of care. We provide transparent Laparoscopy Cost Bangalore to our patients to make informed decisions. With our cost-effective Laparoscopic Surgery in Bangalore, you can trust us to provide the best care at a reasonable cost."
          }
        }]
      }
      `,
    };
  }
  return (
    <div>
      <Head>
        {/* Primary Tags */}

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{`${treatment?.metaTitle || treatment?.title}`}</title>
        <meta
          name='title'
          content={`${treatment?.metaTitle || treatment?.title}`}
        />
        <meta
          name='description'
          content={
            treatment?.metaDescription || treatment?.content?.text.slice(0, 160)
          }
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

        {treatment?.slug === 'laparoscopy-treatment-in-bangalore' && (
          <script
            type='application/ld+json'
            dangerouslySetInnerHTML={faqJsonLd()}
            key='faq-jsonld'
          />
        )}

        {/* Open Graph / Facebook */}

        <meta
          property='og:title'
          content={`${treatment?.title} | GarbhaGudi IVF Centre`}
        />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content={treatment?.content?.text.slice(0, 160)}
        />
        <meta property='og:type' content='website' />
        <meta property='og:image' content={treatment?.image.url} />

        {/* Twitter*/}

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta
          name='twitter:title'
          content={`${treatment?.title} | GarbhaGudi IVF Centre`}
        />
        <meta
          name='twitter:description'
          content={treatment?.content?.text.slice(0, 160)}
        />
        <meta name='twitter:image' content={treatment?.image.url} />
      </Head>
      <BreadCrumbs
        link1='/treatments'
        text1='Treatments'
        link2={'#'}
        text2={treatment?.title}
        link3={''}
        text3=''
        link4={''}
        text4={''}
      />
      <div className='relative py-16 bg-white dark:bg-gray-800 overflow-hidden'>
        <div className='hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full'>
          <div
            className='relative h-full text-lg max-w-prose mx-auto'
            aria-hidden='true'
          >
            <svg
              className='absolute top-12 left-full transform translate-x-32'
              width={404}
              height={384}
              fill='none'
              viewBox='0 0 404 384'
            >
              <defs>
                <pattern
                  id='74b3fd99-0a6f-4271-bef2-e80eeafdf357'
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits='userSpaceOnUse'
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className='text-gray-200 dark:text-gray-700'
                    fill='currentColor'
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill='url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)'
              />
            </svg>
            <svg
              className='absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32'
              width={404}
              height={384}
              fill='none'
              viewBox='0 0 404 384'
            >
              <defs>
                <pattern
                  id='f210dbf6-a58d-4871-961e-36d5016a0f49'
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits='userSpaceOnUse'
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className='text-gray-100 dark:text-gray-700'
                    fill='currentColor'
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill='url(#f210dbf6-a58d-4871-961e-36d5016a0f49)'
              />
            </svg>
            <svg
              className='absolute bottom-12 left-full transform translate-x-32'
              width={404}
              height={384}
              fill='none'
              viewBox='0 0 404 384'
            >
              <defs>
                <pattern
                  id='d3eb07ae-5182-43e6-857d-35c643af9034'
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits='userSpaceOnUse'
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className='text-gray-200 dark:text-gray-700'
                    fill='currentColor'
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill='url(#d3eb07ae-5182-43e6-857d-35c643af9034)'
              />
            </svg>
          </div>
        </div>
        <div className='relative px-4 sm:px-6 lg:px-8'>
          <div className='max-w-7xl mx-auto'>
            <h1>
              <span className='mt-4 block text-2xl text-center leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl font-heading dark:text-gray-200'>
                {treatment?.altTitle || treatment?.title}
              </span>
            </h1>
            <figure>
              <img
                className='w-full rounded-lg mt-10 mb-5'
                src={treatment?.image.url}
                alt={treatment?.imageAlt || treatment?.title}
                width={1310}
                height={873}
              />
            </figure>
            <div className='text-gray-800 dark:text-gray-200'>
              <RichText content={treatment?.content?.raw?.children} />
            </div>
            <div>
              <Share pinmedia={treatment?.image?.url} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Treatment;
