import React, { useState, useEffect } from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import axios from "axios";
import Loading from "components/Loading";

const YOUTUBE_PLAYLIST_ITEMS_API =
  "https://www.googleapis.com/youtube/v3/playlistItems";

const TvAppearances = () => {
  const [url, setUrl] = useState("3l4gWsVlhE4");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(
        `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLiHJchamOyyHGeOsWF-O_mVh5MBz8HPPR&maxResults=50&key=AIzaSyAuDHAmd-s4jYNwqYg1AHSJDwIOgM9k0rU`
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log("Error Fetching Data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

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

  if (loading) return <Loading />;

  return (
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
              TV Appearances
            </div>
            {data.items.map((item) => {
              const { id, snippet = {} } = item;
              const { title, thumbnails } = snippet;
              const { medium = {} } = thumbnails;
              return (
                <div className="max-w-md md:max-w-lg xl:max-w-xl" key={id}>
                  {renderLoadButton(
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
  );
};

export default TvAppearances;
