import Head from 'next/head';
import Cta from 'sections/gg-care/cta';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Loading from 'components/Loading';
const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';
interface VideoItem {
  id: string;
  snippet: {
    title: string;
    description: string;
    resourceId: {
      videoId: string;
    };
  };
}

interface YouTubeAPIResponse {
  items: VideoItem[];
  nextPageToken?: string;
  prevPageToken?: string;
}
const IndexPage = () => {
  const currentPageNumber: number = parseInt(useSearchParams()?.get('page') || '1');
  const pageToken: string = useSearchParams()?.get('pageToken') || '';
  const router = useRouter();
  const [successStoriesData, setSuccessStoriesData] = useState<YouTubeAPIResponse | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const successStories = await fetch(
        `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLiHJchamOyyG_IJk4YVYM_LlEkz8dWvqJ&maxResults=6&pageToken=${pageToken}&key=AIzaSyAuDHAmd-s4jYNwqYg1AHSJDwIOgM9k0rU`
      );
      const successStoriesRes = await successStories.json();

      setSuccessStoriesData(successStoriesRes);
    };
    fetchData();
  }, [currentPageNumber, pageToken]);
  const description =
    'GarbhaGudi IVF is the #1 choice for the best IVF Centre. It is leading chain of infertility treatment & has vision to be the best-in-class for infertility clinics';
  return (
    <>
      {successStoriesData ? (
        <div>
          <Head>
            {/* Primary Tags */}
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <title>GarbhaGudi IVF Success Stories</title>
            <meta name='title' content='GarbhaGudi IVF Success Stories' />
            <meta property='og:title' content='GarbhaGudi IVF Success Stories' />
            <meta name='description' content={description} />
            <meta property='og:description' content={description} />
            <meta name='keywords' content='GarbhaGudi IVF,Sucess stories' />

            {/* Ld+JSON Data */}

            {/* Open Graph / Facebook */}
            <meta property='og:title' content='GarbhaGudi IVF Success Stories' />
            <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
            <meta property='og:url' content='https://garbhagudi.com' />
            <meta property='og:description' content={description} />
            <meta property='og:type' content='article' />
            {/* Twitter*/}
            <meta name='twitter:card' content='summary_large_image' />
            <meta name='twitter:site' content='@garbhagudiivf' />
            <meta name='twitter:title' content='GarbhaGudi IVF Success Stories' />
            <meta name='twitter:description' content={description} />
          </Head>
          <div className='relative px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24'>
            <div className='relative mx-auto max-w-7xl'>
              <div className='text-center'>
                <h1 className='font-heading text-3xl font-extrabold text-gray-800 underline dark:text-gray-200 sm:text-5xl'>
                  GarbhaGudi IVF Success Stories
                </h1>
              </div>
              <div className='mx-auto grid min-h-screen max-w-xl gap-8 py-12 lg:max-w-none lg:grid-cols-3'>
                {successStoriesData?.items?.map((item) => (
                  <div
                    key={item?.id}
                    className='flex flex-col overflow-hidden rounded-lg shadow-2xl transition duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-lg'
                  >
                    <LiteYouTubeEmbed
                      id={item?.snippet?.resourceId?.videoId}
                      title={item?.snippet?.title}
                      poster='maxresdefault'
                      webp={true}
                    />
                    <div className='flex flex-1 flex-col justify-between bg-gradient-to-bl from-gg-200 via-gg-100 to-gg-50 p-6 dark:from-gray-800 dark:to-gray-700'>
                      <div className='flex-1'>
                        <p className='max-h-12 cursor-pointer overflow-hidden text-wrap font-lexend text-base font-normal text-gray-800 dark:text-gray-200'>
                          {item?.snippet?.title}
                        </p>
                      </div>
                      <div className='mt-2.5 flex items-center'>
                        <div className='flex max-h-20 space-x-1 overflow-hidden text-wrap font-lexend text-sm text-gray-700 dark:text-gray-200'>
                          <p>{item?.snippet?.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className='flex justify-center gap-5'>
                {successStoriesData?.prevPageToken && (
                  <button
                    className='w-28 rounded-md bg-gg-500 p-2 text-white hover:bg-gg-600'
                    onClick={() =>
                      router.push(
                        `/success-stories?page=${currentPageNumber - 1}&pageToken=${successStoriesData?.prevPageToken}`
                      )
                    }
                  >
                    Prev Page
                  </button>
                )}
                {successStoriesData?.nextPageToken && (
                  <button
                    className='w-28 rounded-md bg-gg-500 p-2 text-white hover:bg-gg-600'
                    onClick={() =>
                      router.push(
                        `/success-stories?page=${currentPageNumber + 1}&pageToken=${successStoriesData?.nextPageToken}`
                      )
                    }
                  >
                    Next Page
                  </button>
                )}
              </div>
            </div>
          </div>
          <Cta />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default IndexPage;
