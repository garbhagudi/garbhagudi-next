import React from 'react';
import { RichText } from '@graphcms/rich-text-react-renderer';
import BlogFooter from 'components/blogFooter';
import Error from 'next/error';
import Head from 'next/head';
import BreadCrumbs from 'components/breadcrumbs';
import { useRouter } from 'next/router';
import Share from 'components/share';
import Loading from 'components/Loading';
import apolloClient from 'lib/apollo-graphcms';
import { gql } from '@apollo/client';
import Image from 'next/image';
import { throttledFetch } from 'lib/throttle';
import LandingPagePopUp from 'components/landingPagePopUp';

export const getStaticProps = async ({ params }) => {
  const apolloQuery = async ({ slug }) => {
    return apolloClient.query({
      query: gql`
        query ($slug: String!) {
          blog(where: { slug: $slug }) {
            id
            title
            metaTitle
            metaDescription
            metaKeywords
            slug
            image {
              url
            }
            doctor {
              id
              image {
                url
              }
              name
              imageAlt
              slug
            }
            content {
              raw
              text
            }
            publishedOn
          }
        }
      `,
      variables: {
        slug,
      },
    });
  };
  const { data } = await throttledFetch(apolloQuery, { slug: params.slug });
  return {
    props: {
      blog: data.blog,
    },
    revalidate: 180,
  };
};

export async function getStaticPaths() {
  const apolloQuery = async () => {
    return apolloClient.query({
      query: gql`
        {
          blogs {
            slug
            title
          }
        }
      `,
    });
  };
  const { data } = await throttledFetch(apolloQuery);
  return {
    paths: data.blogs.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}

const Blog = ({ blog }) => {
  const title = `${blog?.metaTitle || blog?.title}`;
  const description = `${blog?.metaDescription || blog?.content?.text.slice(0, 160)}`;
  const keywords = `${blog?.metaKeywords || blog?.title}`;
  const router = useRouter();

  function addBreadcrumbJsonLd() {
    return {
      __html: `{
        "@context": "https://schema.org/",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://garbhagudi.com"
          }
          {
            "@type": "ListItem",
            "position": 2,
            "name": "blogs",
            "item": "https://garbhagudi.com/blogs"
          }
          {
            "@type": "ListItem",
            "position": 3,
            "name": "${blog?.title}",
            "item": "https://garbhagudi.com/blogs/${blog?.slug}"
          }
        ]
      }`,
    };
  }
  function addOrgJsonLd() {
    return {
      __html: `{
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "GarbhaGudi IVF Centre Pvt Ltd",
        "url": "https://garbhagudi.com",
        "logo": "https://res.cloudinary.com/garbhagudi/image/upload/v1633780956/garbhagudi-ivf/SVGs/logo_tyy9tg.svg"
      }`,
    };
  }
  function addBlogJsonLd() {
    return {
      __html: `
      {
        "@context": "https://schema.org/",
        "@type": "Article",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://garbhagudi.com/blogs/${blog?.slug}"
        },
        "headline": "${blog?.metaTitle || blog?.title}",
        "description": "${blog?.content?.text.slice(0, 160)}",
        "image": {
          "@type": "ImageObject",
          "url": "${blog?.image?.url}",
          "width": "1200",
          "height": "630"
        },
        "author": {
          "@type": "Person",
          "name": "${blog?.doctor?.name}"
        },
        "publisher": {
          "@type": "Organization",
          "name": "GarbhaGudi IVF Centre",
          "logo": {
            "@type": "ImageObject",
            "url": "https://res.cloudinary.com/garbhagudi/image/upload/v1633780956/garbhagudi-ivf/SVGs/logo_tyy9tg.svg",
            "width": "256",
            "height": "54"
          }
        },
        "datePublished": "${blog?.publishedOn}"
      }
      `,
    };
  }

  if (router.isFallback) {
    return <Loading />;
  }
  return (
    <div>
      <Head>
        {/* Primary Tags */}
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{title}</title>
        <meta name='title' content={title} />
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />

        {/* Ld+JSON Data */}

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={addBlogJsonLd()}
          key='org-jsonld'
        />

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={addOrgJsonLd()}
          key='org-jsonld'
        />

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={addBreadcrumbJsonLd()}
          key='breadcrumb-jsonld'
        />

        {/* Open Graph / Facebook */}
        <meta property='og:title' content={title} />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta property='og:description' content={description} />
        <meta property='og:type' content='article' />
        <meta property='og:article:published_time' content={blog?.publishedOn} />
        <meta property='og:article:author' content={blog?.doctor?.name} />
        <meta property='og:image' content={blog?.image.url} />
        {/* Twitter*/}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta name='twitter:title' content={`${title} | GarbhaGudi IVF Centre`} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content={blog?.image?.url} />
      </Head>
      <BreadCrumbs
        link1='/blogs/page/1'
        text1='Blogs'
        text2={blog.title}
        link2='#'
        link3={''}
        text3={''}
        link4={''}
        text4={''}
      />
      {blog?.slug ? (
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
                      className='text-gray-100 dark:text-gray-700'
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
                <span className='block text-center font-heading text-2xl font-bold leading-8 tracking-tighter text-gray-800 dark:text-gray-200 sm:text-4xl'>
                  {blog?.title}
                </span>
              </h1>
              <Image
                className='my-8 w-full rounded-lg'
                src={blog?.image?.url}
                alt={blog?.title}
                width={500}
                height={500}
              />
              <div className='text-gray-800 dark:text-gray-200'>
                <RichText content={blog?.content?.raw.children} />
              </div>
              <div>
                <Share pinmedia={blog?.image?.url} />
                <BlogFooter />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Error statusCode={404} />
      )}
      <LandingPagePopUp />
    </div>
  );
};
export default Blog;
