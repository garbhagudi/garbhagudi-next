import { useState } from 'react';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
import { useForm } from 'react-hook-form';
import {
  LuCheck as Check,
  LuMapPin as MapPin,
  LuPhone as Phone,
  LuClock as Clock,
} from 'react-icons/lu';
import { PHONE_HREF, PHONE_DISPLAY } from './constants';

const benefits = [
  'இலவச முதல் ஆலோசனை – எந்த கட்டணமும் இல்லை',
  'அனுபவமிக்க மருத்துவர்களிடம் நேரடி சந்திப்பு',
  'தமிழிலோ அல்லது తెలుగులో விவாதிக்கலாம் – இடைத்தடை இல்லை',
  'உங்கள் தகவல்கள் முற்றிலும் ரகசியமாக பாதுகாக்கப்படும்',
  'EMI வசதியில் சிகிச்சை – வசதியான கட்டணத் திட்டம்',
];

const concernLabels = {
  ivf: 'IVF சிகிச்சை',
  iui: 'IUI சிகிச்சை',
  icsi: 'ICSI சிகிச்சை',
  male: 'ஆண் மலட்டுத்தன்மை',
  pcos: 'PCOS சம்பந்தப்பட்ட பிரச்சனை',
  other: 'மற்றவை',
};

const durationLabels = {
  lt1: '1 ஆண்டுக்கு குறைவாக',
  '1-2': '1–2 ஆண்டுகள்',
  '3-5': '3–5 ஆண்டுகள்',
  '5plus': '5 ஆண்டுகளுக்கும் மேல்',
};

const FormSection = () => {
  const router = useRouter();
  const path = usePathname();
  const pageVisit = router.query?.pageVisit || path || '/';
  const utmCampaign = router.query?.utm_campaign || '';
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      city: '',
      concern: '',
      duration: '',
      message: '',
    },
  });
  const [load, setLoad] = useState(false);
  const [failed, setFailed] = useState(false);

  const onSubmit = async (values) => {
    setLoad(true);
    setFailed(false);

    const description = [
      values.concern && `முக்கிய கவலை: ${concernLabels[values.concern] || values.concern}`,
      values.duration &&
        `முயற்சிக்கும் காலம்: ${durationLabels[values.duration] || values.duration}`,
      values.message && `கூடுதல் தகவல்: ${values.message}`,
    ]
      .filter(Boolean)
      .join('\n');

    const data = {
      Last_Name: values.name,
      Phone: values.phone,
      City: values.city,
      Description: description,
      Lead_Source: 'Online',
      Lead_Sub_Source: 'GarbhaGudi_TAM_Organic',
      UTM_Campaign: utmCampaign,
      Page_Visited:
        typeof window !== 'undefined' ? `${window.location?.origin}${pageVisit}` : `${pageVisit}`,
      Campaign: { id: '3505252000387114026' },
    };

    try {
      const response = await fetch('/api/createLeads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data }),
      });

      const responseData = await response.json();
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setLoad(false);
      if (responseData?.data[0]?.code === 'SUCCESS') {
        router.push('/thank-you.html');
      } else {
        setFailed(true);
      }
    } catch (err) {
      setLoad(false);
      setFailed(true);
      console.log(err);
    }
  };

  return (
    <section id='form' className='bg-[#0F6E56] px-6 py-[4.5rem] text-white'>
      <div className='mx-auto max-w-[960px]'>
        <div className='grid grid-cols-1 items-start gap-10 sm:grid-cols-2'>
          {/* Left column */}
          <div>
            <p className='mb-6 font-[family-name:var(--font-noto-serif-tamil)] text-[1.3rem] font-bold leading-[1.5] text-white opacity-95'>
              இன்றே ஒரு படி முன்னேறுங்கள்.
              <br />
              உங்கள் கனவு அருகிலிருக்கிறது.
            </p>
            <ul className='mt-8 list-none'>
              {benefits.map((b) => (
                <li
                  key={b}
                  className='flex items-start gap-2.5 border-b border-white/10 py-2.5 font-[family-name:var(--font-noto-sans-tamil)] text-[14px] text-white/90 last:border-b-0'
                >
                  <span className='bg-white/15 mt-0.5 flex h-[22px] w-[22px] flex-shrink-0 items-center justify-center rounded-full'>
                    <Check className='h-3 w-3 text-white' strokeWidth={3} />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className='mt-8 rounded-[12px] bg-white/[0.12] p-5'>
              <div className='mb-2 flex items-center gap-2 font-[family-name:var(--font-noto-serif-tamil)] text-[1.1rem] font-bold text-white'>
                <MapPin className='h-4 w-4' /> கர்பகுடி IVF மையம் – ஓசூர்
              </div>
              <div className='space-y-1 font-[family-name:var(--font-noto-sans-tamil)] text-[13px] leading-[1.7] text-white/80'>
                <div>ஓசூர் பஸ் நிலையம் அருகில்</div>
                <div className='flex items-center gap-1.5'>
                  <Phone className='h-3.5 w-3.5' />
                  <a href={PHONE_HREF} className='text-[#FAC775] no-underline hover:underline'>
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

          {/* Right column — form card */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='rounded-[16px] bg-white p-8 font-[family-name:var(--font-noto-sans-tamil)] text-[#1C1C1E]'
          >
            <h3 className='mb-5 font-[family-name:var(--font-noto-serif-tamil)] text-[1.1rem] font-bold text-[#1C1C1E]'>
              இலவச ஆலோசனை பதிவு செய்யுங்கள்
            </h3>

            <Field id='name' label='உங்கள் பெயர் *' required error={errors.name?.message}>
              <input
                type='text'
                id='name'
                placeholder='உங்கள் பெயரை உள்ளிடுங்கள்'
                autoComplete='name'
                className={inputCls}
                {...register('name', { required: 'பெயரை உள்ளிடுங்கள்' })}
              />
            </Field>

            <Field id='phone' label='தொலைபேசி எண் *' required error={errors.phone?.message}>
              <input
                type='tel'
                id='phone'
                placeholder='+91 9876543210'
                autoComplete='tel'
                className={inputCls}
                {...register('phone', {
                  required: 'தொலைபேசி எண்ணை உள்ளிடுங்கள்',
                  pattern: {
                    value: /^[+]?[\d\s-]{10,15}$/,
                    message: 'சரியான தொலைபேசி எண்ணை உள்ளிடுங்கள்',
                  },
                })}
              />
            </Field>

            <Field id='city' label='நகரம் / ஊர்'>
              <input
                type='text'
                id='city'
                placeholder='உங்கள் ஊர்'
                autoComplete='address-level2'
                className={inputCls}
                {...register('city')}
              />
            </Field>

            <Field id='concern' label='முக்கிய கவலை'>
              <select id='concern' className={inputCls} {...register('concern')}>
                <option value='' disabled>
                  தேர்வு செய்யவும்
                </option>
                <option value='ivf'>IVF சிகிச்சை</option>
                <option value='iui'>IUI சிகிச்சை</option>
                <option value='icsi'>ICSI சிகிச்சை</option>
                <option value='male'>ஆண் மலட்டுத்தன்மை</option>
                <option value='pcos'>PCOS சம்பந்தப்பட்ட பிரச்சனை</option>
                <option value='other'>மற்றவை</option>
              </select>
            </Field>

            <Field id='duration' label='எத்தனை ஆண்டுகளாக குழந்தைக்காக முயற்சிக்கிறீர்கள்?'>
              <select id='duration' className={inputCls} {...register('duration')}>
                <option value='' disabled>
                  தேர்வு செய்யவும்
                </option>
                <option value='lt1'>1 ஆண்டுக்கு குறைவாக</option>
                <option value='1-2'>1–2 ஆண்டுகள்</option>
                <option value='3-5'>3–5 ஆண்டுகள்</option>
                <option value='5plus'>5 ஆண்டுகளுக்கும் மேல்</option>
              </select>
            </Field>

            <Field id='message' label='கூடுதல் தகவல் (விருப்பமானால்)'>
              <textarea
                id='message'
                placeholder='உங்கள் கேள்விகளை இங்கே பதிவிடலாம்…'
                className={`${inputCls} min-h-[80px] resize-y`}
                {...register('message')}
              />
            </Field>

            <button
              type='submit'
              disabled={load}
              className='mt-5 w-full rounded-[10px] bg-[#E8820C] py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#B5620A] disabled:cursor-not-allowed disabled:opacity-60'
            >
              {load ? 'பதிவு செய்கிறது…' : 'இலவச ஆலோசனை பெறுங்கள் →'}
            </button>

            {failed && (
              <p
                aria-live='polite'
                className='mt-3 text-center font-[family-name:var(--font-noto-sans-tamil)] text-[13px] text-[#C0395E]'
              >
                பதிவு செய்ய முடியவில்லை. தயவுசெய்து மீண்டும் முயற்சிக்கவும் அல்லது எங்களை
                அழைக்கவும்.
              </p>
            )}

            <p className='mt-3 text-center text-[11px] text-[#6B6860]'>
              🔒 உங்கள் தகவல்கள் பாதுகாப்பாக வைக்கப்படும். எந்த ஸ்பாமும் இல்லை.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormSection;

const inputCls =
  'w-full rounded-[10px] border-[1.5px] border-black/10 bg-[#FDFAF5] px-3.5 py-3 font-[family-name:var(--font-noto-sans-tamil)] text-[14px] text-[#1C1C1E] outline-none transition-colors focus:border-[#E8820C]';

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className='mt-4 first:mt-0'>
      <label htmlFor={id} className='mb-1.5 block text-[13px] font-medium text-[#1C1C1E]'>
        {label}
        {required && <span className='sr-only'> (required)</span>}
      </label>
      {children}
      {error && <p className='mt-1 text-[12px] text-[#C0395E]'>{error}</p>}
    </div>
  );
}
