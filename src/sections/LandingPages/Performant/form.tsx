import { get } from 'http';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { set, useForm } from 'react-hook-form';
const Form = () => {
  const router = useRouter();
  const path = usePathname();
  const pageVisit = router.query?.pageVisit || path;
  const utmCampaign = router.query?.utm_campaign || '';

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Last_Name: '',
      Phone: '',
      Email: '',
      Lead_Source: `Online`,
      Lead_Sub_Source: 'GarbhaGudi_Organic',
      UTM_Campaign: utmCampaign,
      Consent: 'Yes',
      Page_Visited: pageVisit,
    },
  });

  const [load, setLoad] = useState(false);
  useEffect(() => {
    setValue('Page_Visited', `${window.location?.origin}${pageVisit}`);
    setValue('Consent', getValues().Consent ? 'Yes' : 'No');
  }, [pageVisit, setValue]);
  useEffect(() => {
    setValue('UTM_Campaign', utmCampaign);
  }, [utmCampaign, setValue]);

  const onSubmit = async (data) => {
    setLoad(true);
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
      }
    } catch (err) {
      setLoad(false);
      console.log(err);
    }
  };
  return (
    <div className='zcwf_lblLeft crmWebToEntityForm mx-auto h-auto w-full rounded-lg bg-transparent py-8'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mx-auto flex flex-col space-y-5 px-3'>
          <div className='mx-auto max-w-sm'>
            <label htmlFor='Last_Name' className='flex items-center justify-start'>
              <span className='w-[9em] rounded-es-full rounded-ss-full bg-gray-200 px-4 py-1 text-left'>
                Full Name
              </span>
              <input
                type='text'
                id='Last_Name'
                placeholder='Enter full name'
                {...register('Last_Name', {
                  required: 'Full Name is required',
                })}
                className='w-full rounded-ee-full rounded-se-full px-2 py-1 text-base focus:outline-none active:outline-none'
              />
            </label>
            {errors.Last_Name && (
              <p className='absolute ml-[1.2em] text-sm text-red-500'>
                {errors.Last_Name?.message}
              </p>
            )}
          </div>

          <div className='mx-auto max-w-sm'>
            <label htmlFor='Phone' className='flex items-center justify-start'>
              <span className='w-[9em] rounded-es-full rounded-ss-full bg-gray-200 px-4 py-1 text-left'>
                Phone
              </span>
              <input
                type='text'
                id='Phone'
                placeholder='Enter phone number'
                {...register('Phone', {
                  required: 'Phone is required',
                  // pattern: {
                  //   value: /^[0-9]{10}$/, // Assuming a 10-digit phone number
                  //   message: 'Invalid phone number',
                  // },
                })}
                className='w-full rounded-ee-full rounded-se-full px-2 py-1 text-base focus:outline-none active:outline-none'
              />
            </label>
            {errors.Phone && (
              <p className='absolute ml-[1.2em] text-sm text-red-500'>{errors.Phone?.message}</p>
            )}
          </div>

          <div className='mx-auto max-w-sm'>
            <label htmlFor='Email' className='flex items-center justify-start'>
              <span className='w-[9em] rounded-es-full rounded-ss-full bg-gray-200 px-4 py-1 text-left'>
                Email
              </span>
              <input
                type='email'
                id='Email'
                placeholder='Enter email'
                {...register('Email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Invalid email format',
                  },
                })}
                className='w-full rounded-ee-full rounded-se-full px-2 py-1 text-base focus:outline-none active:outline-none'
              />
            </label>
            {errors.Email && (
              <p className='absolute ml-[1.2em] text-sm text-red-500'>{errors.Email?.message}</p>
            )}
          </div>
        </div>
        <div className='mx-auto mt-4 max-w-md px-6'>
          <label className='mt-4 flex justify-center space-x-3'>
            <input
              type='checkbox'
              id='Consent'
              {...register('Consent')}
              className='h-6 w-6 cursor-pointer accent-gg-500 checked:border-gg-500 checked:bg-gg-500'
              defaultChecked
            />
            <span className='text-justify text-sm text-gray-500'>
              By submitting this form I agree to be contacted by GarbhaGudi IVF Centre using the
              contact details through SMS, WhatsApp and Phone Calls. I also agree to the
              <Link href='/legal/terms-and-conditions' className='px-1 text-gg-400'>
                Terms and Conditions
              </Link>
              and
              <Link href='/legal/privacy-policy' className='px-1 text-gg-400'>
                Privacy Policy.
              </Link>
            </span>
          </label>
        </div>
        <div className='mb-6 mt-6 flex items-center justify-center space-x-4'>
          <button
            type='submit'
            className='flex items-center justify-center gap-2 rounded-md bg-gg-500 px-6 py-2 text-base font-bold text-white'
            disabled={load}
          >
            Get a call back
            {load && (
              <svg
                width={22}
                height={22}
                viewBox='0 0 38 38'
                xmlns='http://www.w3.org/2000/svg'
                stroke='#B2B2B2'
              >
                <g fill='none' fillRule='evenodd'>
                  <g transform='translate(1 1)' strokeWidth='2'>
                    <circle strokeOpacity='.5' cx='18' cy='18' r='18' />
                    <path d='M36 18c0-9.94-8.06-18-18-18'>
                      <animateTransform
                        attributeName='transform'
                        type='rotate'
                        from='0 18 18'
                        to='360 18 18'
                        dur='1s'
                        repeatCount='indefinite'
                      />
                    </path>
                  </g>
                </g>
              </svg>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
