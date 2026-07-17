import { LuYoutube } from 'react-icons/lu';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

type Video = {
  id: string;
  title: string;
  tag: string;
  heading: string;
};

const videos: Video[] = [
  {
    id: 'Kbjz_vYlijA',
    title: 'GarbhaGudi IVF Introduction',
    tag: 'Our Story',
    heading: "Why GarbhaGudi is India's Most Trusted IVF Centre",
  },
  {
    id: 'FUjol4w5uEo',
    title: 'IVF Treatment Process Explained',
    tag: 'Patient Education',
    heading: 'Understanding the IVF Process — Step by Step',
  },
  {
    id: 'LeZbAzvIGr8',
    title: 'IVF Success Story',
    tag: 'Success Stories',
    heading: 'This is a Good Testimonial of GGJN, 15 Years of No baby and got Success',
  },
];

function VideoCard({ video }: { video: Video }) {
  const thumbnail = `https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`;

  return (
    <div className='video-card'>
      <LiteYouTubeEmbed id={video.id} title={video.title} thumbnail={thumbnail} />
      <div className='video-info'>
        <span className='video-tag'>{video.tag}</span>
        <h3>{video.heading}</h3>
      </div>
    </div>
  );
}

export default function ThankYouVideos() {
  return (
    <section className='section'>
      <div className='section-label'>Learn &amp; Explore</div>
      <div className='section-title'>
        Stories &amp; <span>Insights</span> from GarbhaGudi
      </div>
      <div className='video-grid'>
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
      <div className='video-cta'>
        <a
          className='btn-more-videos'
          href='https://www.youtube.com/c/GarbhaGudiIVFCentre'
          target='_blank'
          rel='noopener noreferrer'
        >
          <LuYoutube size={20} />
          Explore More on YouTube
        </a>
      </div>
    </section>
  );
}
