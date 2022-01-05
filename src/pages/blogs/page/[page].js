import React from "react";
import Link from "next/link";
import { gql, GraphQLClient } from "graphql-request";

const limit = 6;

function ProductPage({
  currentPageNumber,
  hasNextPage,
  hasPreviousPage,
  blogs,
}) {
  return (
    <React.Fragment>
      <div className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              From the blog
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
              libero labore natus atque, ducimus sed.
            </p>
          </div>
          <div className="mt-12 max-w-xl mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none w">
            {blogs?.map((item) => (
              <div
                key={item.node.id}
                className="flex flex-col rounded-2xl shadow-lg overflow-hidden"
              >
                <Link href={`/blogs/${item.node.slug}`} passHref>
                  <div className="flex-shrink-0">
                    <img
                      className="h-38 w-full object-contain rounded-2xl cursor-pointer"
                      src={item.node.image.url}
                      alt={item.node.title}
                    />
                  </div>
                </Link>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <Link
                      href={`/blogs/${item.node.slug}`}
                      passHref
                      className="block mt-2"
                    >
                      <p className="text-lg font-semibold text-gray-900 cursor-pointer font-heading">
                        {item.node.title}
                      </p>
                    </Link>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <Link href={`/doctors/${item.node.doctor.slug}`} passHref>
                        <a>
                          <span className="sr-only">
                            {item.node.doctor.name}
                          </span>
                          <img
                            className="h-10 w-10 rounded-full"
                            src={item.node.doctor.image.url}
                            alt={item.node.doctor.name}
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        <Link href={`/doctors/${item.node.doctor.slug}`}>
                          <a className="font-qs font-semibold">
                            {item.node.doctor.name}
                          </a>
                        </Link>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500 font-qs">
                        <time>{item.node.publishedOn}</time>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center space-x-4 text-center mt-10">
            {hasPreviousPage ? (
              <Link href={`/blogs/page/${currentPageNumber - 1}`}>
                <a className="my-8 rounded-xl w-40 py-4 px-6 bg-brandPink font-qs font-semibold text-white">
                  Previous page
                </a>
              </Link>
            ) : null}
            {hasNextPage ? (
              <Link href={`/blogs/page/${currentPageNumber + 1}`}>
                <a className="my-8 rounded-xl py-4 w-40 px-6 bg-brandPink font-qs font-semibold text-white">
                  Next page
                </a>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export const getStaticPaths = async () => {
  const url = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: `Bearer ${process.env.GRAPH_CMS_TOKEN}`,
    },
  });
  const query = gql`
    {
      blogsConnection {
        aggregate {
          count
        }
      }
    }
  `;
  const { blogsConnection } = await graphQLClient.request(query);

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
      total: blogsConnection.aggregate.count,
      limit,
    }),
  ].map((page) => ({
    params: { page: String(page) },
  }));

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const url = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: `Bearer ${process.env.GRAPH_CMS_TOKEN}`,
    },
  });
  const query = gql`
    query productPageQuery($limit: Int!, $offset: Int!) {
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
      }
    }
  `;

  const {
    blogsConnection: { blogs, pageInfo },
  } = await graphQLClient.request(query, {
    limit,
    offset: Number((params.page - 1) * limit),
  });

  return {
    props: {
      currentPageNumber: Number(params.page),
      blogs,
      ...pageInfo,
    },
  };
}

export default ProductPage;
