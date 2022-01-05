import React from "react";
import { GraphQLClient, gql } from "graphql-request";
import Link from "next/link";

export const getStaticProps = async () => {
  const url = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: `Bearer ${process.env.GRAPH_CMS_TOKEN}`,
    },
  });
  const query = gql`
    query {
      blogsConnection(orderBy: publishedOn_DESC, first: 6) {
        edges {
          node {
            title
            publishedOn
            slug
            id
            image {
              url
            }
            doctor {
              name
              image {
                url
              }
              slug
            }
          }
        }
        pageInfo {
          endCursor
        }
      }
    }
  `;

  const result = await graphQLClient.request(query);
  const blogs = result.blogsConnection;
  return {
    props: {
      blogs,
    },
  };
};

const Blogs = ({ blogs }) => {
  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
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
          {blogs?.edges.map((item) => (
            <div
              key={item.node.id}
              className="flex flex-col rounded-2xl shadow-lg overflow-hidden"
            >
              <Link href={`/blogs/${item.node.slug}`} passHref>
                <div className="flex-shrink-0">
                  <img
                    className="h-72 w-full object-contain rounded-2xl cursor-pointer"
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
                        <span className="sr-only">{item.node.doctor.name}</span>
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
        <div className="flex justify-center ">
          <Link href="/blogs/2" passHref>
            <button className="my-8 rounded-xl py-4 px-6 bg-brandPink font-qs font-semibold text-white">
              Next Page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
