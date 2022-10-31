import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import Head from "next/head";
import Link from "next/link";

const YOUTUBE_PLAYLIST_ITEMS_API =
  "https://www.googleapis.com/youtube/v3/playlistItems";

export async function getServerSideProps() {
  const recommendedData = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLiHJchamOyyETkI9qBtY9BSEGsTxrQYcw&maxResults=50&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
  );

  const tvAppearanceData = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLiHJchamOyyHGeOsWF-O_mVh5MBz8HPPR&maxResults=50&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
  );

  const garbhasandeshaData = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLiHJchamOyyGc__8VHjlvgmO6sVXIoxFt&maxResults=50&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
  );

  const testimonialData = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLiHJchamOyyG_IJk4YVYM_LlEkz8dWvqJ&maxResults=50&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
  );

  const recommended = await recommendedData.json();
  const garbhasandesha = await garbhasandeshaData.json();
  const tvAppearance = await tvAppearanceData.json();
  const testimonials = await testimonialData.json();
  return {
    props: {
      recommended,
      garbhasandesha,
      tvAppearance,
      testimonials,
    },
  };
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const IndexPage = ({
  recommended,
  garbhasandesha,
  tvAppearance,
  testimonials,
}) => {
  let [url, setUrl] = useState(
    recommended?.items[0].snippet.resourceId.videoId
  );
  let [url2, setUrl2] = useState(
    garbhasandesha?.items[0].snippet.resourceId.videoId
  );
  let [url3, setUrl3] = useState(
    tvAppearance?.items[0].snippet.resourceId.videoId
  );
  let [url4, setUrl4] = useState(
    testimonials?.items[0].snippet.resourceId.videoId
  );

  const renderRecommended = (image, url, label, by) => {
    return (
      <div className="grid w-full grid-cols-4">
        <img
          src={image}
          alt={label}
          className="w-48 col-span-1 rounded-lg sm:w-32 xl:w-48"
        />
        <div className="col-span-3">
          <div className="flex flex-col items-start justify-">
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

  const renderGarbhaSandesha = (image, url2, label, by) => {
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
                setUrl2(url2);
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

  const renderTvAppreances = (image, url3, label, by) => {
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
                setUrl3(url3);
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

  const renderTestimonials = (image, url4, label, by) => {
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
                setUrl4(url4);
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
          <Tab.List className="grid grid-cols-2 mx-auto rounded-lg md:grid-cols-2 lg:grid-cols-4 bg-brandPink4 max-w-7xl">
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
              Testimonials
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
                  <div className="flex flex-col items-start justify-start md:items-center md:flex-row md:justify-between">
                    <div>
                      {recommended?.items?.map((item) => {
                        const { id, snippet = {} } = item;
                        const { title } = snippet;
                        return (
                          url === snippet.resourceId.videoId && (
                            <div key={id}>
                              <div className="mt-2 ml-1 text-xl font-bold font-heading">
                                {title}
                              </div>
                              <div className="mt-2 ml-1 text-sm font-bold font-content">
                                {snippet.channelTitle}
                              </div>
                            </div>
                          )
                        );
                      })}
                    </div>
                    <div className="mt-4 md:mt-0">
                      <Link
                        legacyBehavior
                        href="https://www.youtube.com/c/GarbhaGudiIVFCentre/?sub_confirmation=1"
                      >
                        <a className="px-4 py-2.5 font-semibold text-white uppercase bg-red-500 rounded-md font-content">
                          Subscribe
                        </a>
                      </Link>
                    </div>
                  </div>
                </section>
                <div className="md:ml-10 lg:col-span-2">
                  <section className="flex items-center justify-center mt-8 ">
                    <div className="flex flex-col font-content mx-auto mb-10 space-y-4 overflow-y-auto scrollbar-thin scrollbar-thumb-brandPink4 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-track-gray-600 lg:max-h-[38rem]">
                      <div className="px-3 py-4 font-bold text-center text-md font-heading">
                        Recommended
                      </div>
                      {recommended?.items.map((item) => {
                        const { id, snippet = {} } = item;
                        const { title, thumbnails } = snippet;
                        const { medium = {} } = thumbnails;
                        return (
                          <div
                            className={
                              url === snippet.resourceId.videoId
                                ? "max-w-md md:max-w-lg xl:max-w-xl text-brandPink"
                                : "max-w-md md:max-w-lg xl:max-w-xl hover:text-brandPink4"
                            }
                            key={id}
                          >
                            {renderRecommended(
                              medium.url,
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
            <Tab.Panel id="garbhasandesha">
              <div className="grid grid-cols-1 mx-auto lg:grid-cols-5">
                <section className="col-span-5 lg:col-span-3">
                  <div className="mt-8 overflow-hidden border-2 rounded-xl border-brandPink">
                    <LiteYouTubeEmbed
                      id={url2}
                      title="Successful IVF Treatment Testimonial | GarbhaGudi IVF Centre | Dr Asha S Vijay"
                      poster="maxresdefault"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start md:items-center md:flex-row md:justify-between">
                    <div>
                      {garbhasandesha?.items?.map((item) => {
                        const { id, snippet = {} } = item;
                        const { title } = snippet;
                        return (
                          url2 === snippet.resourceId.videoId && (
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
                    </div>
                    <div className="mt-4 md:mt-0">
                      <Link
                        legacyBehavior
                        href="https://www.youtube.com/c/GarbhaGudiIVFCentre/?sub_confirmation=1"
                      >
                        <a className="px-4 py-2.5 font-semibold text-white uppercase bg-red-500 rounded-md font-content">
                          Subscribe
                        </a>
                      </Link>
                    </div>
                  </div>
                </section>
                <div className="md:ml-10 lg:col-span-2">
                  <section className="flex items-center justify-center mt-8 ">
                    <div className="flex flex-col font-content mx-auto mb-10 space-y-4 overflow-y-auto scrollbar-thin scrollbar-thumb-brandPink4 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-track-gray-600 lg:max-h-[38rem]">
                      <div className="px-3 py-4 font-bold text-center text-md font-heading">
                        GarbhaSandesha
                      </div>
                      {garbhasandesha.items.map((item) => {
                        const { id, snippet = {} } = item;
                        const { title, thumbnails } = snippet;
                        const { medium = {} } = thumbnails;
                        return (
                          <div
                            className={
                              url2 === snippet.resourceId.videoId
                                ? "max-w-md md:max-w-lg xl:max-w-xl text-brandPink"
                                : "max-w-md md:max-w-lg xl:max-w-xl hover:text-brandPink4"
                            }
                            key={id}
                          >
                            {renderGarbhaSandesha(
                              medium.url,
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
              <div className="grid grid-cols-1 mx-auto lg:grid-cols-5">
                <section className="col-span-5 lg:col-span-3">
                  <div className="mt-8 overflow-hidden border-2 rounded-xl border-brandPink">
                    <LiteYouTubeEmbed
                      id={url3}
                      title="Successful IVF Treatment Testimonial | GarbhaGudi IVF Centre | Dr Asha S Vijay"
                      poster={"maxresdefault"}
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start md:items-center md:flex-row md:justify-between">
                    <div>
                      {tvAppearance?.items?.map((item) => {
                        const { id, snippet = {} } = item;
                        const { title } = snippet;
                        return (
                          url3 === snippet.resourceId.videoId && (
                            <div key={id}>
                              <div className="mt-2 ml-1 text-xl font-bold font-kan">
                                {title}
                              </div>
                              <div className="mt-2 ml-1 font-semibold font-conten">
                                {snippet.channelTitle}
                              </div>
                            </div>
                          )
                        );
                      })}
                    </div>
                    <div className="mt-4 md:mt-0">
                      <Link
                        legacyBehavior
                        href="https://www.youtube.com/c/GarbhaGudiIVFCentre/?sub_confirmation=1"
                      >
                        <a className="px-4 py-2.5 font-semibold text-white uppercase bg-red-500 rounded-md font-content">
                          Subscribe
                        </a>
                      </Link>
                    </div>
                  </div>
                </section>
                <div className="md:ml-10 lg:col-span-2">
                  <section className="flex items-center justify-center mt-8 ">
                    <div className="flex flex-col font-content mx-auto mb-10 space-y-4 overflow-y-auto scrollbar-thin scrollbar-thumb-brandPink4 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-track-gray-600 lg:max-h-[38rem]">
                      <div className="px-3 py-4 font-bold text-center text-md font-heading">
                        TV Appearances
                      </div>
                      {tvAppearance?.items.map((item) => {
                        const { id, snippet = {} } = item;
                        const { title, thumbnails } = snippet;
                        const { medium = {} } = thumbnails;
                        return (
                          <div
                            className={
                              url3 === snippet.resourceId.videoId
                                ? "max-w-md md:max-w-lg xl:max-w-xl text-brandPink"
                                : "max-w-md md:max-w-lg xl:max-w-xl hover:text-brandPink4"
                            }
                            key={id}
                          >
                            {renderTvAppreances(
                              medium.url,
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
              <div className="grid grid-cols-1 mx-auto lg:grid-cols-5">
                <section className="col-span-5 lg:col-span-3">
                  <div className="mt-8 overflow-hidden border-2 rounded-xl border-brandPink">
                    <LiteYouTubeEmbed
                      id={url4}
                      title="Successful IVF Treatment Testimonial | GarbhaGudi IVF Centre | Dr Asha S Vijay"
                      poster={"maxresdefault"}
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start md:items-center md:flex-row md:justify-between">
                    <div>
                      {testimonials?.items?.map((item) => {
                        const { id, snippet = {} } = item;
                        const { title } = snippet;
                        return (
                          url4 === snippet.resourceId.videoId && (
                            <div key={id}>
                              <div className="mt-2 ml-1 text-xl font-bold font-kan">
                                {title}
                              </div>
                              <div className="mt-2 ml-1 font-semibold font-conten">
                                {snippet.channelTitle}
                              </div>
                            </div>
                          )
                        );
                      })}
                    </div>
                    <div className="mt-4 md:mt-0">
                      <Link legacyBehavior href="https://www.youtube.com/c/GarbhaGudiIVFCentre/?sub_confirmation=1">
                        <a className="px-4 py-2.5 font-semibold text-white uppercase bg-red-500 rounded-md font-content">
                          Subscribe
                        </a>
                      </Link>
                    </div>
                  </div>
                </section>
                <div className="md:ml-10 lg:col-span-2">
                  <section className="flex items-center justify-center mt-8 ">
                    <div className="flex flex-col font-content mx-auto mb-10 space-y-4 overflow-y-auto scrollbar-thin scrollbar-thumb-brandPink4 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-track-gray-600 lg:max-h-[38rem]">
                      <div className="px-3 py-4 font-bold text-center text-md font-heading">
                        Testimonials
                      </div>
                      {testimonials?.items.map((item) => {
                        const { id, snippet = {} } = item;
                        const { title, thumbnails } = snippet;
                        const { medium = {} } = thumbnails;
                        return (
                          <div
                            className={
                              url4 === snippet.resourceId.videoId
                                ? "max-w-md md:max-w-lg xl:max-w-xl text-brandPink"
                                : "max-w-md md:max-w-lg xl:max-w-xl hover:text-brandPink4"
                            }
                            key={id}
                          >
                            {renderTestimonials(
                              medium.url,
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
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
};

export default IndexPage;
