import React from "react";
import Head from "next/head";
import HomeComponent from "sections/home";
import Link from "next/link";
import { gql, GraphQLClient } from "graphql-request";

const Home = ({ doctors }) => {
  return (
    <div>
      <Head>
        <title>GarbhaGudi</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeComponent />
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 text-center sm:px-6 lg:px-8 lg:py-12">
          <div className="space-y-12">
            <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-brandDark">
                Meet our team
              </h2>
              <p className="text-xl text-brandliteGray">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
                aperiam officiis ut voluptatibus nostrum non!
              </p>
            </div>
            <ul className="mx-auto space-y-0 grid grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-4 lg:max-w-7xl">
              {doctors.map((item) => {
                return (
                  <li key={item.id}>
                    <Link href={`/doctors/${item.slug}`} passHref>
                      <a>
                        <div className="space-y-4">
                          <img
                            className="mx-auto h-32 w-32 my-auto rounded-full xl:w-44 xl:h-44 mt-4"
                            src={item.image.url}
                            alt={item.name}
                          />
                          <div className="space-y-4">
                            <div className="text-lg leading-6 font-medium space-y-1">
                              <h3 className="text-brandDark font-intter">
                                {item.name}
                              </h3>
                              <p className="text-brandPurple text-sm font-Noto">
                                {item.qualification}
                              </p>
                              <p className="text-brandPink text-sm font-Noto">
                                {item.designation}
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const url = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: `Bearer ${process.env.GRAPH_CMS_TOKEN}`,
    },
  });
  const query = gql`
    query {
      doctors {
        name
        qualification
        slug
        image {
          url
        }
        medicalRegNo
        id
        designation
      }
    }
  `;

  const data = await graphQLClient.request(query);
  const doctors = data.doctors;
  return {
    props: {
      doctors,
    },
  };
};
