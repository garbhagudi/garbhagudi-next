import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import GarbhaSandesha from "sections/media/garbhaSandesha";
import TvAppearances from "sections/media/tvAppearances";
import Head from "next/head";

const YOUTUBE_PLAYLIST_ITEMS_API =
  "https://www.googleapis.com/youtube/v3/playlistItems";

export async function getServerSideProps() {
  const res = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLiHJchamOyyETkI9qBtY9BSEGsTxrQYcw&maxResults=50&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const IndexPage = ({ data }) => {
  const [url, setUrl] = useState("3l4gWsVlhE4");

  const renderLoadButton = (image, url, label, by) => {
    return (
      <div className="grid w-full grid-cols-4">
        <img
          src={image}
          alt={label}
          className="w-48 col-span-1 rounded-lg sm:w-32 xl:w-48"
        />
        <div className="col-span-3">
          <div className="flex flex-col items-start justify-center">
            <div
              onClick={() => {
                setUrl(url);
              }}
              className="ml-4 text-sm font-semibold text-left cursor-pointer"
            >
              {label}
            </div>
            <div className="mt-2 ml-4 text-xs italic font-bold underline font-heading">
              {by}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Head>
        {/* Primary Tags */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Video Resources | GarbhaGudi</title>
        <meta
          name="title"
          content="Tools and Calculator | GarbhaGudi IVF Centre"
        />
        <meta
          name="description"
          content="Informational Videos from our various social platforms consolidated for your viewing..."
        />

        {/* Open Graph / Facebook */}

        <meta property="og:title" content="Video Resources | GarbhaGudi" />
        <meta property="og:site_name" content="GarbhaGudi IVF Centre" />
        <meta property="og:url" content="https://garbhagudi.com" />
        <meta
          property="og:description"
          content="Informational Videos from our various social platforms consolidated for your viewing..."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1658492748/SEO/SEO_Website_image-min_wjkpwk.webp"
        />

        {/* Twitter*/}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@garbhagudiivf" />
        <meta name="twitter:title" content="Video Resources | GarbhaGudi" />
        <meta
          name="twitter:description"
          content="Informational Videos from our various social platforms consolidated for your viewing..."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/garbhagudiivf/image/upload/v1658492748/SEO/SEO_Website_image-min_wjkpwk.webp"
        />
      </Head>
      <div className="mx-auto">
        <div>
          <h1 className="py-4 text-2xl font-bold text-center sm:text-4xl font-heading text-brandDark">
            Video Resources
          </h1>
        </div>
        <Tab.Group>
          <Tab.List className="grid grid-cols-1 mx-auto rounded-lg md:grid-cols-3 bg-brandPink4 max-w-7xl">
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-brandPink",
                  "focus:outline-none focus:ring-2 focus:ring-brandPink",
                  selected
                    ? "bg-white shadow"
                    : "text-pink-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              Recommended
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-brandPink",
                  "focus:outline-none focus:ring-2 focus:ring-brandPink",
                  selected
                    ? "bg-white shadow"
                    : "text-pink-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              GarbhaSandesha
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-brandPink",
                  "focus:outline-none",
                  selected
                    ? "bg-white shadow focus:ring-2 focus:ring-brandPink"
                    : "text-pink-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              TV Appearances
            </Tab>
          </Tab.List>
          <Tab.Panels className={"px-3 lg:px-4 xl:px-10"}>
            <Tab.Panel>
              <div className="grid grid-cols-1 mx-auto lg:grid-cols-5">
                <section className="col-span-5 lg:col-span-3">
                  <div className="mt-8 overflow-hidden border-2 rounded-xl border-brandPink">
                    <LiteYouTubeEmbed
                      id={url}
                      title="Successful IVF Treatment Testimonial | GarbhaGudi IVF Centre | Dr Asha S Vijay"
                      poster="maxresdefault"
                    />
                  </div>
                  {data.items.map((item) => {
                    const { id, snippet = {} } = item;
                    const { title } = snippet;
                    return (
                      url === snippet.resourceId.videoId && (
                        <div key={id}>
                          <div className="mt-2 ml-1 text-xl font-bold font-heading">
                            {title}
                          </div>
                          <div className="mt-2 ml-1 font-semibold font-content">
                            {snippet.channelTitle}
                          </div>
                        </div>
                      )
                    );
                  })}
                </section>
                <div className="md:ml-10 lg:col-span-2">
                  <section className="flex items-center justify-center mt-8 ">
                    <div className="flex flex-col mx-auto mb-10 space-y-4 overflow-y-auto scrollbar-thin scrollbar-thumb-brandPink4 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-track-gray-600 lg:max-h-[38rem]">
                      <div className="px-3 py-4 font-bold text-center text-md font-heading">
                        Recommended
                      </div>
                      {data.items.map((item) => {
                        const { id, snippet = {} } = item;
                        const { title, thumbnails } = snippet;
                        const { maxres = {} } = thumbnails;
                        return (
                          <div
                            className="max-w-md md:max-w-lg xl:max-w-xl"
                            key={id}
                          >
                            {renderLoadButton(
                              maxres.url,
                              snippet.resourceId.videoId,
                              title,
                              snippet.channelTitle
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </section>
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <GarbhaSandesha />
            </Tab.Panel>
            <Tab.Panel>
              <TvAppearances />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
};

export default IndexPage;
