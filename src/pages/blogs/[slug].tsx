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

export const getStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query({
    query: gql`
      query ($slug: String!) {
        blog(where: { slug: $slug }) {
          id
          title
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
      slug: params.slug,
    },
  });

  return {
    props: {
      blog: data.blog,
    },
    revalidate: 180,
  };
};

export async function getStaticPaths() {
  const { data } = await apolloClient.query({
    query: gql`
      {
        blogs {
          slug
          title
        }
      }
    `,
  });

  return {
    paths: data.blogs.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}

const Blog = ({ blog }) => {
  const title = `${blog?.title} | GarbhaGudi IVF Centre`;
  const router = useRouter();

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
        "headline": "${blog?.title}",
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
        <meta name='description' content={blog?.content?.text.slice(0, 160)} />

        {/* Ld+JSON Data */}

        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={addBlogJsonLd()}
          key='org-jsonld'
        />

        {/* Open Graph / Facebook */}
        <meta property='og:title' content={blog?.title} />
        <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
        <meta property='og:url' content='https://garbhagudi.com' />
        <meta
          property='og:description'
          content={blog?.content?.text.slice(0, 160)}
        />
        <meta property='og:type' content='article' />
        <meta
          property='og:article:published_time'
          content={blog?.publishedOn}
        />
        <meta property='og:article:author' content={blog?.doctor?.name} />
        <meta property='og:image' content={blog?.image.url} />
        {/* Twitter*/}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@garbhagudiivf' />
        <meta
          name='twitter:title'
          content={`${blog?.title} | GarbhaGudi IVF Centre`}
        />
        <meta
          name='twitter:description'
          content={blog?.content?.text.slice(0, 160)}
        />
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
        <div className='relative py-16 bg-white overflow-hidden'>
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
                      className='text-gray-200'
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
                      className='text-gray-100'
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
                      className='text-gray-200'
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
                <span className='mt-4 block text-2xl text-center leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl font-heading'>
                  {blog?.title}
                </span>
                <span className='block text-base text-center text-brandPink font-semibold tracking-wide uppercase mt-4'>
                  {blog?.doctor?.name}
                </span>
              </h1>

              <img
                className='w-full rounded-3xl mt-10 mb-8'
                src={blog?.image?.url}
                alt={blog?.title}
              />

              <hr className='h-[6px] bg-gradient-to-r from-white  via-brandPurpleDark to-white rounded-3xl' />
              <div>
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
    </div>
  );
};
export default Blog;
