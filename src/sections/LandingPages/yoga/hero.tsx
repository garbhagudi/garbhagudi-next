import CountdownTimer from 'components/timer';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

const Hero = () => {
  return (
    <div className='z-50 bg-white' id='hero-section'>
      <div className='mx-auto max-w-7xl px-4 pb-12 lg:py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='flex flex-col items-start justify-center space-y-4 py-10 font-lexend'>
            <div className='pt-6 text-5xl uppercase leading-snug'>21 - Day Yoga Challenge</div>
            <p className='text-lg'>Meet online to practise yoga for 21 days</p>
            <a
              href='https://chat.whatsapp.com/DxWPnWHqQqIHo0PEY5RFyV'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='w-70 rounded-lg bg-gg-500 px-5 py-3 text-xl text-white hover:bg-gg-600'>
                Join the Whatsapp group
              </button>
            </a>
            <p className='text-xs'>200,000+ people have already attended</p>
            <div className='h-1 w-full border-b-2 border-gray-400 pt-4 lg:w-[500px]'></div>
            <div className=''>
              <p>Registrations Closing in</p>
              <CountdownTimer dateTime='2024-07-25T00:00:00' />
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
