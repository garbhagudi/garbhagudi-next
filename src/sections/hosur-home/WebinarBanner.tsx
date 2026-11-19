import { BannerImage } from 'sections/home/bannerComponent';
import WebinarForm from './WebinarForm';

const WEBINAR_BANNER = {
  id: 'tamil-webinar',
  title: 'கர்ப்பம் தரிக்கத் திட்டமிடும்போது வயது முக்கியமா? - ஆன்லைன் விழிப்புணர்வு நிகழ்ச்சி',
  url: '',
  imageUrl: '',
  image: {
    url: 'https://ap-south-1.graphassets.com/cmekvksn30ksu07o5fl5q801f/cmwncu0z855kv06pj9tnyl7yh',
    width: 1600,
    height: 526,
  },
  mobileImage: {
    url: 'https://ap-south-1.graphassets.com/cmekvksn30ksu07o5fl5q801f/cmwncu0v555ko06pjkvw0ruig',
    width: 1280,
    height: 1600,
  },
};

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
        <WebinarForm variant='banner' title='வெபினாருக்கு பதிவு செய்யுங்கள்' />
      </div>
    </div>
  );
};

export default WebinarBanner;
