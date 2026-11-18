import {
  LuCheck as Check,
  LuMapPin as MapPin,
  LuPhone as Phone,
  LuClock as Clock,
} from 'react-icons/lu';
import { PHONE_HREF, PHONE_DISPLAY } from './constants';
import WebinarForm from './WebinarForm';

const benefits = [
  'இலவச முதல் ஆலோசனை – எந்த கட்டணமும் இல்லை',
  'அனுபவமிக்க மருத்துவர்களிடம் நேரடி சந்திப்பு',
  'தமிழிலோ அல்லது తెలుగులో விவாதிக்கலாம் – இடைத்தடை இல்லை',
  'உங்கள் தகவல்கள் முற்றிலும் ரகசியமாக பாதுகாக்கப்படும்',
  'EMI வசதியில் சிகிச்சை – வசதியான கட்டணத் திட்டம்',
];

const FormSection = () => {
  return (
    <section
      id='form'
      className='bg-gradient-to-tr from-brandPink3/70 via-brandPurple/50 to-purple-100 px-4 py-12 text-[#353635] sm:px-6 sm:py-16 lg:px-8 lg:py-20'
    >
      <div className='mx-auto max-w-7xl'>
        <div className='grid grid-cols-1 items-start gap-10 sm:grid-cols-2 lg:gap-16'>
          {/* Left column */}
          <div>
            <p className='mb-6 font-[family-name:var(--font-noto-serif-tamil)] text-[1.3rem] font-bold leading-[1.5] text-[#353635]'>
              இன்றே ஒரு படி முன்னேறுங்கள்.
              <br />
              உங்கள் கனவு அருகிலிருக்கிறது.
            </p>
            <ul className='mt-8 list-none'>
              {benefits.map((b) => (
                <li
                  key={b}
                  className='flex items-start gap-2.5 border-b border-[#353635]/10 py-2.5 font-[family-name:var(--font-noto-sans-tamil)] text-[14px] text-[#353635] last:border-b-0'
                >
                  <span className='mt-0.5 flex h-[22px] w-[22px] flex-shrink-0 items-center justify-center rounded-full bg-[#ef4266]'>
                    <Check className='h-3 w-3 text-white' strokeWidth={3} />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className='mt-8 rounded-[12px] bg-white/60 p-5'>
              <div className='mb-2 flex items-center gap-2 font-[family-name:var(--font-noto-serif-tamil)] text-[1.1rem] font-bold text-[#353635]'>
                <MapPin className='h-4 w-4' /> கர்பகுடி IVF மையம் – ஓசூர்
              </div>
              <div className='space-y-1 font-[family-name:var(--font-noto-sans-tamil)] text-[13px] leading-[1.7] text-[#4d4d4e]'>
                <div>ஓசூர் பஸ் நிலையம் அருகில்</div>
                <div className='flex items-center gap-1.5'>
                  <Phone className='h-3.5 w-3.5' />
                  <a
                    href={PHONE_HREF}
                    className='font-semibold text-[#d42d52] no-underline hover:underline'
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
                <div className='flex items-center gap-1.5'>
                  <Clock className='h-3.5 w-3.5' />
                  <span>திங்கள் – சனி: காலை 9 – மாலை 6</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right column — the "Webinar By Raajam M" Zoho form (same one as the banner) */}
          <div className='rounded-[16px] bg-white p-8 font-[family-name:var(--font-noto-sans-tamil)] text-[#353635]'>
            <h3 className='mb-5 font-[family-name:var(--font-noto-serif-tamil)] text-[1.1rem] font-bold text-[#353635]'>
              இலவச ஆலோசனை பதிவு செய்யுங்கள்
            </h3>
            <WebinarForm variant='card' />
            <p className='mt-3 text-center text-[11px] text-[#4d4d4e]'>
              🔒 உங்கள் தகவல்கள் பாதுகாப்பாக வைக்கப்படும். எந்த ஸ்பாமும் இல்லை.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
