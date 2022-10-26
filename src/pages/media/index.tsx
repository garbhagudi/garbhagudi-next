import React from "react";
import graphcms from "lib/graphcms";
import Link from "next/link";
import { HiChevronRight } from "react-icons/hi";

export const getStaticProps = async () => {
  const { medias } = await graphcms.request(
    `query mediaPage {
        medias {
            id
            title
            description
            thumbnail {
                url
            }
            articleLink
        }
    }`
  );

  return {
    props: { medias },
    revalidate: 180,
  };
};

const IndexPage = ({ medias }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-center font-heading font-bold text-4xl lg:text-5xl pt-10 lg:pt-24">
        Media
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 lg:py-24">
        {medias &&
          medias.map((items) => (
            <div key={items.id} className="mx-auto px-4">
              <div>
                <img
                  src={items.thumbnail.url}
                  alt={items.title}
                  className="aspect-video max-w-md rounded-lg"
                />
              </div>
              <div className="font-heading mt-4 text-2xl text-center md:text-left">
                {items.title}
              </div>
              <div className="font-content text-lg text-center md:text-left mt-2">
                {items.description}
              </div>
              <div className="mt-4">
                <Link href={items.articleLink}>
                  <a
                    target={"_blank"}
                    className="font-content text-lg text-center flex items-center justify-center px-3 py-2 border text-white font-extrabold bg-brandPink4 hover:bg-brandPink rounded-md"
                  >
                    Read More{" "}
                    <HiChevronRight className="inline-flex items-center justify-center" />
                  </a>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default IndexPage;
