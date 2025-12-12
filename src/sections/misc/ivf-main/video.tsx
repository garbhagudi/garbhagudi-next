import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

const Video = () => (
  <section className='mx-auto px-3 text-center'>
    <h2 className='py-4 font-heading text-2xl font-bold text-gray-800 dark:text-gray-200 lg:text-4xl'>
      What is IVF and How is it Beneficial?
    </h2>

    <div className='mx-auto mt-6 aspect-video rounded-2xl border-2 border-brandPink md:w-3/5'>
      <LiteYouTubeEmbed
        id='b2tdqev4DpQ'
        title='Successful IVF Treatment Testimonial | GarbhaGudi IVF Centre'
        poster='maxresdefault'
        webp
      />
    </div>
  </section>
);

export default Video;
