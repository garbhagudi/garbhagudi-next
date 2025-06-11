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
  const [doctorsSpeakData, setDoctorsSpeakData] = useState<YouTubeAPIResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const doctorsSpeaks = await fetch(
        `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLiHJchamOyyHTIsuO9X8GMoCM9IYb_rOF&maxResults=6&pageToken=${pageToken}&key=AIzaSyAuDHAmd-s4jYNwqYg1AHSJDwIOgM9k0rU`
      );
      const doctorsSpeakRes = await doctorsSpeaks.json();
      setDoctorsSpeakData(doctorsSpeakRes);
    };
    fetchData();
  }, [currentPageNumber, pageToken]);
  const description =
    'Doctors at GarbhaGudi IVF Centre provide information about male and female fertility concerns, as well as the therapies required for a healthy pregnancy.';
  return (
    <>
      {doctorsSpeakData ? (
        <div>
          <Head>
            {/* Primary Tags */}
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <title>Doctors Speak | GarbhaGudi IVF</title>
            <meta name='title' content='Doctors Speak | GarbhaGudi IVF' />
            <meta property='og:title' content='Doctors Speak | GarbhaGudi IVF' />
            <meta name='description' content={description} />
            <meta property='og:description' content={description} />
            <meta name='keywords' content='GarbhaGudi IVF,Doctors Speak' />

            {/* Ld+JSON Data */}

            {/* Open Graph / Facebook */}
            <meta property='og:title' content='Doctors Speak | GarbhaGudi IVF' />
            <meta property='og:site_name' content='GarbhaGudi IVF Centre' />
            <meta property='og:url' content='https://garbhagudi.com' />
            <meta property='og:description' content={description} />
            <meta property='og:type' content='article' />
            {/* Twitter*/}
            <meta name='twitter:card' content='summary_large_image' />
            <meta name='twitter:site' content='@garbhagudiivf' />
            <meta name='twitter:title' content='Doctors Speak | GarbhaGudi IVF' />
            <meta name='twitter:description' content={description} />
          </Head>
          <div className='relative px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24'>
            <div className='relative mx-auto max-w-7xl'>
              <div className='text-center'>
                <h1 className='font-heading text-3xl font-extrabold text-gray-800 underline dark:text-gray-200 sm:text-5xl'>
                  Doctors Speak
                </h1>
              </div>
              <div className='mx-auto grid max-w-xl gap-8 py-12 lg:max-w-none lg:grid-cols-3'>
                {doctorsSpeakData?.items
                  ?.filter((curr) => curr?.snippet?.title !== 'Private video')
                  ?.map((item) => (
                    <div
                      key={item?.id}
                      className='flex h-fit flex-col overflow-hidden rounded-lg shadow-2xl transition duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-lg'
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
                      </div>
                    </div>
                  ))}
              </div>
              <div className='flex justify-center gap-5'>
                {doctorsSpeakData?.prevPageToken && (
                  <button
                    className='w-28 rounded-md bg-gg-500 p-2 text-white hover:bg-gg-600'
                    onClick={() =>
                      router.push(
                        `/doctors-speak?page=${currentPageNumber - 1}&pageToken=${doctorsSpeakData?.prevPageToken}`
                      )
                    }
                  >
                    Prev Page
                  </button>
                )}
                {doctorsSpeakData?.nextPageToken && (
                  <button
                    className='w-28 rounded-md bg-gg-500 p-2 text-white hover:bg-gg-600'
                    onClick={() =>
                      router.push(
                        `/doctors-speak?page=${currentPageNumber + 1}&pageToken=${doctorsSpeakData?.nextPageToken}`
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
