import BannerComponent from 'sections/home/bannerComponent';
import WebinarForm from './WebinarForm';

/* Half banner / half form hero, laid out like the dash-ivf-next homepage
 * banner: Hygraph carousel in the left 2/3, teal lead-form panel on the
 * right (stacked below the banner on mobile). */
const WebinarBanner = ({ banners }) => {
  return (
    <div className='grid grid-cols-1 gap-y-3 pb-5 md:pb-8 lg:grid-cols-3'>
      <div className='relative h-fit lg:col-span-2'>
        <BannerComponent banners={banners} />
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
