import {
  LuShield as Shield,
  LuUsers as Users,
  LuMapPin as MapPin,
  LuHeart as Heart,
} from 'react-icons/lu';
import SectionHeader from './SectionHeader';

const cards = [
  {
    Icon: Shield,
    title: 'நவீன தொழில்நுட்பம்',
    body: 'உலக தரம் வாய்ந்த உபகரணங்கள் மற்றும் அனுபவமிக்க நிபுணர்கள் குழு.',
  },
  {
    Icon: Users,
    title: 'தனிப்பட்ட அணுகுமுறை',
    body: 'உங்கள் தேவைகளுக்கு ஏற்ற தனிப்பயனாக்கப்பட்ட சிகிச்சை திட்டம்.',
  },
  {
    Icon: MapPin,
    title: 'ஓசூரில் அருகில்',
    body: 'வெளியூர் பயணம் தேவையில்லை. உங்கள் அருகிலேயே சிறந்த சிகிச்சை.',
  },
  {
    Icon: Heart,
    title: 'அன்பான பராமரிப்பு',
    body: 'மனரீதியான ஆதரவு மற்றும் உணர்வுரீதியான வழிகாட்டுதலோடு நிறைவான பயணம்.',
  },
];

export default function WhySection() {
  return (
    <section className='bg-[#fcfbfb] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20'>
      <div className='mx-auto max-w-7xl'>
        <SectionHeader
          eyebrow='எங்களை ஏன் தேர்வு செய்ய வேண்டும்?'
          title={
            <>
              உங்கள் கனவுக்கு அருகிலிருக்கும்
              <br />
              <span className='text-[#ef4266]'>கர்பகுடி</span>
            </>
          }
          body='ஒவ்வொரு தம்பதியினரின் கதையும் தனிப்பட்டது. நாங்கள் உங்கள் பயணத்தை புரிந்துகொண்டு, அறிவியல் மற்றும் அனுதாபத்தோடு உங்களுக்கு வழிகாட்டுகிறோம்.'
        />
        <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5'>
          {cards.map(({ Icon, title, body }) => (
            <div
              key={title}
              className='rounded-[14px] border border-[#ebe7e8] bg-white px-5 py-6 transition-all hover:border-[#ef4266] hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[#ef4266]/10'
            >
              <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-[12px] bg-[#fdeaee]'>
                <Icon className='h-6 w-6 text-[#ef4266]' strokeWidth={2} />
              </div>
              <div className='mb-1.5 font-[family-name:var(--font-noto-sans-tamil)] text-[15px] font-semibold text-[#353635]'>
                {title}
              </div>
              <div className='text-[13px] leading-[1.65] text-[#4d4d4e]'>{body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
