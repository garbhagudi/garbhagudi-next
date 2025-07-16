import CountdownTimer from 'components/timer';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

const Hero = () => {
  return (
    <div className='z-50 bg-white' id='hero-section'>
      <div className='mx-auto max-w-7xl px-4 pb-12 lg:py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='flex flex-col items-start justify-center space-y-4 font-lexend'>
            <div className='flex flex-col gap-1 leading-snug'>
              <div className='text-3xl md:text-4xl lg:text-6xl'>Welcome to</div>
              <div className='text-2xl uppercase md:text-3xl lg:text-5xl'>Swasthya Sapthaha</div>
              <div className='text-lg md:text-xl lg:text-2xl'>A Journey to Rejuvenation!</div>
            </div>
            <p className='text-lg'>A Transformative Week of Wellness, Awareness & Inner Balance</p>
            <a
              href='https://docs.google.com/forms/d/e/1FAIpQLSdWtCUSgT0umZB1b5qq6SC3W_kyAThXXSq83OlTAcP3A54XGw/viewform'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='w-70 rounded-lg bg-gg-500 px-5 py-3 text-xl text-white hover:bg-gg-600'>
                Join Us
              </button>
            </a>
            <p className='text-xs'>200,000+ people have already attended</p>
            <div className='h-1 w-full border-b-2 border-gray-400 pt-4 lg:w-[500px]'></div>
            <div className=''>
              <p>Registrations Closing in</p>
              <CountdownTimer dateTime='2025-07-18T07:30:00' />
            </div>
          </div>
          <div className='flex w-full justify-center'>
            <div className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-3xl'>
              <div className='aspect-video overflow-hidden rounded-lg border border-transparent'>
                <LiteYouTubeEmbed
                  id={'WUekV9px8Mc'}
                  title='Successful IVF Treatment Testimonial | GarbhaGudi IVF Centre | Dr Asha S Vijay'
                  poster='maxresdefault'
                  webp={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
