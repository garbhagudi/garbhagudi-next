import { BannerImage } from 'sections/home/bannerComponent';
import WebinarForm from './WebinarForm';

// Tamil webinar creative (assets live in the tamil.garbhagudi.com Hygraph project).
// Static, not a CMS query: this page shows only this one banner.
const WEBINAR_BANNER = {
  id: 'tamil-webinar',
  title: 'கர்ப்பம் தரிக்கத் திட்டமிடும்போது வயது முக்கியமா? - ஆன்லைன் விழிப்புணர்வு நிகழ்ச்சி',
  url: '',
  imageUrl: '',
  image: {
    url: 'https://ap-south-1.graphassets.com/cmekvksn30ksu07o5fl5q801f/cmwm5wnwb69pe06pif4itmmic',
    width: 1600,
    height: 526,
  },
  mobileImage: {
    url: 'https://ap-south-1.graphassets.com/cmekvksn30ksu07o5fl5q801f/cmwm5wxqu69q706piisffzdr6',
    width: 1280,
    height: 1600,
  },
};

/* Half banner / half form hero, laid out like the dash-ivf-next homepage
 * banner: webinar banner in the left 2/3, teal lead-form panel on the
 * right (stacked below the banner on mobile). */
const WebinarBanner = () => {
  return (
    <div className='grid grid-cols-1 gap-y-3 pb-5 md:pb-8 lg:grid-cols-3'>
      <div className='relative h-fit lg:col-span-2'>
        <div className='relative w-full overflow-hidden border-0 shadow-2xl drop-shadow-2xl'>
          <BannerImage banner={WEBINAR_BANNER} first />
        </div>
      </div>
      <div
        id='leadForm'
        className='flex min-h-[400px] scroll-mt-24 flex-col items-center justify-center gap-3 bg-[#005e7e] py-6 md:min-h-[500px]'
      >
        <span className='flex items-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-gg-500 to-gg-600 px-4 py-1.5 font-[family-name:var(--font-inter)] text-sm font-bold uppercase tracking-wide text-white shadow-lg'>
          <span className='relative flex h-2 w-2'>
            <span className='absolute inline-flex h-full w-full rounded-full bg-white opacity-75 motion-safe:animate-ping' />
            <span className='relative inline-flex h-2 w-2 rounded-full bg-white' />
          </span>
          EMI options available
        </span>
        <WebinarForm variant='banner' title='வெபினாருக்கு பதிவு செய்யுங்கள்' />
      </div>
    </div>
  );
};

export default WebinarBanner;
