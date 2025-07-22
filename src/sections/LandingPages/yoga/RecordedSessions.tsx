import { useState } from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

const RecordedSessions = () => {
  const recordedVideos = ['JPHZsbEn24w', 'IvtzfQ4BdS0', 'UKimel6v7hI', 'RisOtg9qvSM'];

  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <div className='max-w-4xl bg-white pb-20 pt-16 dark:bg-gray-800 sm:px-6 lg:px-8 lg:pb-20 lg:pt-24'>
      <div className='relative mx-auto'>
        <div className='border-b pb-4 dark:border-gray-600'>
          <h2 className='text-center font-heading text-3xl font-extrabold tracking-tight text-gray-800 dark:text-gray-200 sm:text-4xl'>
            Recorded Sessions
          </h2>
        </div>
        <div className='mt-6 grid grid-cols-1 justify-center gap-5 md:grid-cols-2 lg:grid-cols-3'>
          {recordedVideos?.slice(0, showAll ? recordedVideos.length : 3).map((video, index) => (
            <div key={index} className='w-full'>
              <div className='aspect-video overflow-hidden rounded-lg border border-transparent'>
                <LiteYouTubeEmbed
                  id={video}
                  title={`Recorded Swasthya Sapthaha session : Day ${index + 1}`}
                  poster='maxresdefault'
                  webp={true}
                />
              </div>
            </div>
          ))}
        </div>
        <div
          onClick={toggleShowAll}
          className='mx-auto mb-6 mt-6 flex w-32 cursor-pointer items-center justify-center rounded-lg border-2 border-gg-500 bg-transparent px-3 py-2 text-center font-content font-bold text-gg-500 duration-300 hover:-translate-y-1 hover:bg-gg-500 hover:text-white hover:shadow-2xl hover:shadow-gg-500 hover:transition-all dark:border-gg-400 dark:text-gg-400 dark:hover:bg-gg-400 dark:hover:text-gray-800'
        >
          {showAll ? 'See Less' : 'See More'}
        </div>
      </div>
    </div>
  );
};

export default RecordedSessions;
