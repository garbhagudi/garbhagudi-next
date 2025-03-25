import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gql } from '@apollo/client';
import apolloClient from 'lib/apollo-graphcms';
import Head from 'next/head';
import BreadCrumbs from 'components/breadcrumbs';
import { useRouter } from 'next/router';
import Loading from 'components/Loading';
import SearchComponent from 'components/search/searchComponent';
import Pagination from 'components/pagination';
import GGLogo from 'assets/gg-emblem.svg';
import { throttledFetch } from 'lib/throttle';

const limit = 6;

interface BlogProps {
  currentPageNumber: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  blogs: {
    node: {
      id: string;
      title: string;
      publishedOn: string;
      slug: string;
      image: {
        url: string;
      };
      doctor: {
        slug: string;
        name: string;
        id: string;
        image: {
          url: string;
        };
      };
    };
  }[];
  aggregate: {
    count: number;
  };
}

function BlogPage({
  currentPageNumber,
  hasNextPage,
  hasPreviousPage,
  blogs,
  aggregate,
}: BlogProps) {
  const router = useRouter();
  const title = `Blogs | Page ${currentPageNumber} | GarbhaGudi IVF Centre`;

  if (router.isFallback) {
    return <Loading />;
  }

  return (
    <React.Fragment>
      <div>
        <Head>
          {/* Primary Tags */}

          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <title>{title}</title>
          <meta name='title' content={title} />
          <meta
            name='description'
            content='Stay up to date with the advancements in the field of Infertility treatment, get pregnancy tips and more with our blogs written by our doctors'
          />

          {/* Open Graph / Facebook */}

          <meta property='og:title' content={title} />
          <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
          <meta property='og:url' content='https://garbhagudi.com' />
          <meta
            property='og:description'
            content='Stay up to date with the advancements in the field of Infertility treatment, get pregnancy tips and more with our blogs written by our doctors'
          />
          <meta property='og:type' content='website' />
          <meta
            property='og:image'
            content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Blog_Index_nqj7cm.webp'
          />

          {/* Twitter*/}

          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:site' content='@garbhagudiivf' />
          <meta name='twitter:title' content={title} />
          <meta
            name='twitter:description'
            content='Stay up to date with the advancements in the field of Infertility treatment, get pregnancy tips and more with our blogs written by our doctors'
          />
          <meta
            name='twitter:image'
            content='https://res.cloudinary.com/garbhagudiivf/image/upload/v1643802154/SEO/OG_images_Blog_Index_nqj7cm.webp'
          />
        </Head>
        <BreadCrumbs
          link1='/blogs/page/1'
          text1='Blogs'
          text2={`Page ${currentPageNumber}`}
          link2={`/blogs/page/${currentPageNumber}`}
          link3={''}
          text3={''}
          link4={''}
          text4={''}
        />
        <div className='relative px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24'>
          <div className='relative mx-auto max-w-7xl'>
            <div className='text-center'>
              <h1 className='font-heading text-3xl font-extrabold text-gray-800 underline dark:text-gray-200 sm:text-5xl'>
                Blogs
              </h1>
            </div>
            <SearchComponent />
            <div className='mx-auto grid max-w-xl gap-8 py-12 lg:max-w-none lg:grid-cols-3'>
              {blogs?.map((item) => (
                <div
                  key={item?.node?.id}
                  className='flex flex-col overflow-hidden rounded-lg shadow-2xl transition duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-lg'
                >
                  <Link href={`/blogs/${item.node.slug}`} passHref>
                    <div className='flex-shrink-0'>
                      <Image
                        className='h-38 w-full cursor-pointer rounded-t-lg object-contain'
                        src={item?.node?.image?.url}
                        alt={item?.node?.title}
                        width={500}
                        height={500}
                      />
                    </div>
                  </Link>
                  <div className='flex flex-1 flex-col justify-between bg-gradient-to-bl from-gg-200 via-gg-100 to-gg-50 p-6 dark:from-gray-800 dark:to-gray-700'>
                    <div className='flex-1'>
                      <Link href={`/blogs/${item?.node?.slug}`} passHref>
                        <p className='cursor-pointer font-lexend text-base font-normal text-gray-800 dark:text-gray-200'>
                          {item?.node?.title}
                        </p>
                      </Link>
                    </div>
                    <div className='mt-6 flex items-center'>
                      <div className='flex-shrink-0'>
                        <Link href={`/doctors/${item?.node?.doctor?.slug}`} passHref>
                          <div className=''>
                            <span className='sr-only'>By: GarbhaGudi IVF Centre</span>
                            <Image
                              className='h-12 w-12 scale-150 rounded-full dark:fill-white dark:brightness-0 dark:grayscale dark:invert md:h-16 md:w-16'
                              src={GGLogo}
                              alt={'GarbhaGudi IVF Centre'}
                              width={50}
                              height={50}
                            />
                          </div>
                        </Link>
                      </div>
                      <div>
                        <div className='text-base font-medium text-gray-800 dark:text-gray-200'>
                          <Link href={'/'}>
                            <div className='font-lexend'>Author : GarbhaGudi IVF Centre</div>
                          </Link>
                        </div>
                        <div className='flex space-x-1 font-lexend text-sm text-gray-700 dark:text-gray-200'>
                          <time>Published: {item?.node?.publishedOn}</time>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Pagination
              currentPage={currentPageNumber}
              limitDefined={limit}
              nextPage={currentPageNumber + 1}
              previousPage={currentPageNumber - 1}
              total={aggregate.count}
              nextLink={`/blogs/page/${currentPageNumber + 1}`}
              previousLink={`/blogs/page/${currentPageNumber - 1}`}
              isNext={hasNextPage}
              isPrev={hasPreviousPage}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BlogPage;

export async function getStaticProps({ params }) {
  const apolloQuery = async ({ limit, offset }) => {
    return apolloClient.query({
      query: gql`
        query ($limit: Int!, $offset: Int!) {
          blogsConnection(orderBy: publishedOn_DESC, first: $limit, skip: $offset) {
            blogs: edges {
              node {
                id
                title
                publishedOn
                slug
                image {
                  url
                }
                doctor {
                  slug
                  name
                  id
                  image {
                    url
                  }
                }
              }
            }
            pageInfo {
              hasNextPage
              hasPreviousPage
            }
            aggregate {
              count
            }
          }
        }
      `,
      variables: {
        limit,
        offset,
      },
    });
  };

  const { data } = await throttledFetch(apolloQuery, {
    limit,
    offset: Number((params.page - 1) * limit),
  });

  return {
    props: {
      currentPageNumber: Number(params.page),
      blogs: data.blogsConnection.blogs,
      aggregate: data.blogsConnection.aggregate,
      ...data.blogsConnection.pageInfo,
    },
    revalidate: 180,
  };
}

export const getStaticPaths = async () => {
  const apolloQuery = async () => {
    return apolloClient.query({
      query: gql`
        query {
          blogsConnection {
            aggregate {
              count
            }
          }
        }
      `,
    });
  };

  const { data } = await throttledFetch(apolloQuery);

  function* numberOfPages({ total, limit }) {
    let page = 1;
    let offset = 0;
    while (offset < total) {
      yield page;
      page++;
      offset += limit;
    }
  }

  const paths = [
    ...numberOfPages({
      total: data.blogsConnection.aggregate.count,
      limit,
    }),
  ].map((page) => ({
    params: { page: String(page) },
  }));

  return {
    paths,
    fallback: true,
  };
};
