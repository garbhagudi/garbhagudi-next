import React from "react";
import { gql, GraphQLClient } from "graphql-request";
import Link from "next/link";

const IndexPage = ({ treatments }) => {
  return (
    <div>
      <div className="max-w-7xl mx-auto text-center text-4xl font-heading pt-12 font-semibold">
        Treatment Options
      </div>
      <p className="max-w-7xl mx-auto text-center pt-6 font-semibold">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod eaque
        alias illo delectus harum recusandae.
      </p>
      <div className="max-w-7xl mx-auto text-center text-2xl font-heading pt-12 font-semibold">
        Female Infertility
      </div>
      <div className="max-w-7xl mx-auto py-6 flex sm:py-12">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4 mx-auto">
          {treatments.map((item) => {
            if (item.category == "Female") {
              return (
                <Link href={`treatments/${item.slug}`} passHref key={item.id}>
                  <div className="border-brandPink w-96 px-4 py-3 border-solid rounded-2xl border-2 flex cursor-pointer hover:bg-brandPink hover:text-white hover:border-transparent transition-colors duration-100 ">
                    <div className="w-1/3">
                      <img
                        className="w-16 h-16 object-cover rounded-full"
                        src={item.icon.url}
                        alt={item.title}
                      />
                    </div>
                    <div className="w-2/3 flex flex-col justify-center text-left">
                      <p className="font-semibold text-lg font-qs">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            }
          })}
        </div>
      </div>
      <div className="max-w-7xl mx-auto text-center text-2xl font-heading pt-12 font-semibold">
        Male Infertility
      </div>
      <div className="max-w-7xl mx-auto py-6 flex sm:py-12">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4 mx-auto">
          {treatments.map((item) => {
            if (item.category == "Male") {
              return (
                <Link href={`treatments/${item.slug}`} passHref key={item.id}>
                  <div className="border-brandPink w-96 px-4 py-3 border-solid rounded-2xl border-2 flex cursor-pointer hover:bg-brandPink hover:text-white hover:border-transparent transition-colors duration-100 ">
                    <div className="w-1/3">
                      <img
                        className="w-16 h-16 object-cover rounded-full"
                        src={item.icon.url}
                        alt={item.title}
                      />
                    </div>
                    <div className="w-2/3 flex flex-col justify-center text-left">
                      <p className="font-semibold text-lg font-qs">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            }
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto text-center text-2xl font-heading pt-12 font-semibold">
        Advanced Infertility Treatment Techniques
      </div>
      <div className="max-w-7xl mx-auto py-6 flex sm:py-12">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4 mx-auto">
          {treatments.map((item) => {
            if (item.category == "Advanced") {
              return (
                <Link href={`treatments/${item.slug}`} passHref key={item.id}>
                  <div className="border-brandPink w-96 px-4 py-3 border-solid rounded-2xl border-2 flex cursor-pointer hover:bg-brandPink hover:text-white hover:border-transparent transition-colors duration-100 ">
                    <div className="w-1/3">
                      <img
                        className="w-16 h-16 object-cover rounded-full"
                        src={item.icon.url}
                        alt={item.title}
                      />
                    </div>
                    <div className="w-2/3 flex flex-col justify-center text-left">
                      <p className="font-semibold text-lg font-qs">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default IndexPage;

export const getStaticProps = async () => {
  const url = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: `Bearer ${process.env.GRAPH_CMS_TOKEN}`,
    },
  });
  const query = gql`
    query {
      treatments {
        category
        title
        id
        icon {
          url
        }
        slug
      }
    }
  `;

  const data = await graphQLClient.request(query);
  const treatments = data.treatments;
  return {
    props: {
      treatments,
    },
  };
};
