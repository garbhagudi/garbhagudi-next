import apolloClient from 'lib/apollo-graphcms';
import { gql } from '@apollo/client';
import { RichText } from '@graphcms/rich-text-react-renderer';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Loading from 'components/Loading';
import Image from 'next/image';
import type { RichTextContent } from '@graphcms/rich-text-types';
import dynamic from 'next/dynamic';
const Cta = dynamic(() => import('sections/gg-care/cta'), { ssr: false });
const Share = dynamic(() => import('components/share'), { ssr: false });
const FAQs = dynamic(() => import('components/FAQs'), { ssr: false });

export const getStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query({
    query: gql`
      query ($slug: String!) {
        article(where: { slug: $slug }) {
          id
          title
          slug
          metaTitle
          metaDescription
          metaKeywords
          imageAlt
          image {
            url
          }
          imageUrl
          content {
            raw
            text
          }
          faq {
            id
            question
            answer {
              raw
              text
            }
          }
        }
      }
    `,
    variables: {
      slug: params.slug,
    },
  });
  if (data?.error || !data.article) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      article: data.article,
    },
    revalidate: 180,
  };
};

export const getStaticPaths = async () => {
  const { data } = await apolloClient.query({
    query: gql`
      query {
        articles {
          title
          slug
        }
      }
    `,
  });
  return {
    paths: data.articles.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
};

interface FaqProps {
  id: string;
  question: string;
  answer: {
    raw: {
      children: RichTextContent;
    };
    text: string;
  };
}
interface BlogProps {
  article: {
    title: string;
    slug: string;
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string;
    image: {
      url: string;
    };
    imageUrl: string;
    content: {
      text: string;
      raw: {
        children: RichTextContent;
      };
    };
    imageAlt: string;
    faq: [FaqProps];
  };
}

const Blog = ({ article }: BlogProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  function addReviewJsonLd() {
    if (!article?.title || !article?.image?.url) {
      return { __html: '' };
    }

    const title = article.title.replace(/"/g, '\\"');
    const image = article.image.url;
    const description = article?.content?.text?.slice(0, 160)?.replace(/"/g, '\\"') || '';

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
              "name": "Solutions",
              "item": "https://www.garbhagudi.com/solutions/"
            },
            {
              "@type": "ListItem",
              "position": "3",
              "name": "${article?.title}",
              "item": "https://www.garbhagudi.com/solutions/${article?.slug}"
            }
          ]
        }`,
    };
  }
  function addDocJsonLd() {
    return {
      __html: `{
  "name": "${article?.title}",
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
  function faqJsonLd() {
    return {
      __html: `{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [${article?.faq
          ?.map(
            (item: { question: string; answer: { text: string } }) => `{
              "@type": "Question",
              "name": "${item.question.replace(/"/g, '\\"')}",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "${item.answer.text.replace(/"/g, '\\"')}"
              } 
            }`
          )
          .join(',')}]
          
      }
      `,
    };
  }

  const title = `${article?.title} | GarbhaGudi`;
  return (
    <div>
      <Head>
        {/* Primary Tags */}
        <link rel='preload' href={article?.image.url} as='image' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{title}</title>
        <meta name='title' content={`${article?.metaTitle}`} />
        <meta name='description' content={article?.metaDescription} />
        <meta name='keywords' content={article?.metaKeywords} />

        {/* Open Graph / Facebook */}
        <meta property='og:title' content={`${article?.metaTitle}`} />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta property='og:description' content={article?.metaDescription} />
        <meta property='og:type' content='website' />
        <meta property='og:image' content={article?.image.url} />

        {/* Twitter*/}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content={`${article?.metaTitle} | GarbhaGudi IVF Centre`} />
        <meta name='twitter:description' content={article?.metaDescription} />
        <meta name='twitter:image' content={article?.image.url} />

        {/* Ld+JSON Data */}
        <script
          id='breadcrumbs-jsonld'
          type='application/ld+json'
          dangerouslySetInnerHTML={addBreadcrumbsJsonLd()}
        />
        <script
          id='review-jsonld'
          type='application/ld+json'
          dangerouslySetInnerHTML={addReviewJsonLd()}
        />
        <script type='application/ld+json' dangerouslySetInnerHTML={addDocJsonLd()} />
        {article?.faq?.length > 0 && (
          <script
            type='application/ld+json'
            dangerouslySetInnerHTML={faqJsonLd()}
            id='faq-jsonld'
          />
        )}
      </Head>
      <div className='relative overflow-hidden bg-white py-16 dark:bg-gray-800'>
        <div className='hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full'>
          <div className='relative mx-auto h-full max-w-prose text-lg' aria-hidden='true'>
            <svg
              className='absolute left-full top-12 translate-x-32 transform'
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
              <rect width={404} height={384} fill='url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)' />
            </svg>
            <svg
              className='absolute right-full top-1/2 -translate-x-32 -translate-y-1/2 transform'
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
              <rect width={404} height={384} fill='url(#f210dbf6-a58d-4871-961e-36d5016a0f49)' />
            </svg>
            <svg
              className='absolute bottom-12 left-full translate-x-32 transform'
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
              <rect width={404} height={384} fill='url(#d3eb07ae-5182-43e6-857d-35c643af9034)' />
            </svg>
          </div>
        </div>
        <div className='relative px-4 sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-7xl'>
            <h1>
              <span className='mt-4 block text-center font-heading text-2xl font-bold leading-8 tracking-tight text-gray-800 dark:text-gray-200 sm:text-4xl'>
                {article?.title}
              </span>
            </h1>
            <Image
              className='mb-5 mt-10 w-full rounded-lg'
              src={
                article?.imageUrl ||
                'https://res.cloudinary.com/decyl0nmm/image/upload/v1762938523/Best_IVF_Center_GarbhaGudi-1_shyb2u.webp'
              }
              alt={article?.imageAlt}
              width={800}
              height={500}
              priority={true}
            />
            <div className='text-justify text-gray-800 dark:text-gray-200'>
              <RichText
                content={article?.content?.raw?.children}
                renderers={{
                  p: ({ children }) => <p className='text-justify'>{children}</p>,
                  a: ({ children, href }) => (
                    <a href={href} className='text-gg-500 underline'>
                      {children}
                    </a>
                  ),
                }}
              />
            </div>
            <Share pinmedia={article?.image?.url} />
          </div>
        </div>
      </div>
      <FAQs data={article?.faq} activeIndex={article?.faq[0]?.id} />
      <Cta />
    </div>
  );
};
export default Blog;
