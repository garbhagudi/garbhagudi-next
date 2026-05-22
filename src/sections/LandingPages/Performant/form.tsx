'use client';

/**
 * "Book your Consultation" form — gray-pill UI preserved from the
 * previous react-hook-form implementation, but now submits as
 * multipart/form-data straight to Zoho Forms `htmlRecords/submit`.
 *
 * Submission flow:
 *   1. Validate name / phone client-side; email optional (format checked if provided).
 *   2. Sync UTM + attribution hidden inputs synchronously via flushSync.
 *   3. Native `form.submit()` → browser POSTs straight to Zoho.
 *      Zoho redirects via `zf_redirect_url`.
 */

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import { type FormEvent, useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';

import {
  zohoFormActionUrl,
  zohoFormLeadSourceFieldName,
  zohoFormLeadSubSourceFieldName,
  zohoFormRedirectUrl,
  zohoFormUtmDetailsFieldName,
  zohoLeadSource,
  zohoLeadSubSource,
} from 'data/zohoForm';
import {
  buildUtmDetailsLine,
  gclidFromCookies,
  utmFromCookies,
  utmFromRouterQuery,
  utmFromWindowLocation,
  type UtmMap,
} from 'lib/zohoFormUtm';

/* `useLayoutEffect` would warn during SSR; this falls back to `useEffect`
 * on the server so hidden state is synced as soon as the DOM exists. */
const useIsoLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

/* React requires `value` + `onChange` together, so we point all hidden
 * controlled inputs at this no-op onChange. */
const NOOP_ONCHANGE = () => {};

type HiddenState = {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  utm_details: string;
  gclid: string;
  zf_referrer_name: string;
  zf_redirect_url: string;
};

const EMPTY_HIDDEN: HiddenState = {
  utm_source: '',
  utm_medium: '',
  utm_campaign: '',
  utm_term: '',
  utm_content: '',
  utm_details: '',
  gclid: '',
  zf_referrer_name: '',
  zf_redirect_url: '',
};

function computeHidden(
  query: Record<string, unknown> | undefined,
  pageVisitPath: string
): HiddenState {
  const cookies = utmFromCookies();
  const fromQuery = utmFromRouterQuery(query);
  const fromWin = utmFromWindowLocation();
  const utm: UtmMap = { ...cookies, ...fromQuery, ...fromWin };
  const gclid = gclidFromCookies();

  let referrer = '';
  let redirectUrl = '';
  if (typeof window !== 'undefined') {
    const path = pageVisitPath || window.location.pathname || '/';
    referrer = `${window.location.origin}${path.startsWith('/') ? path : `/${path}`}`;
    redirectUrl = zohoFormRedirectUrl || `${window.location.origin}/thank-you`;
  }

  return {
    utm_source: utm.utm_source || '',
    utm_medium: utm.utm_medium || '',
    utm_campaign: utm.utm_campaign || '',
    utm_term: utm.utm_term || '',
    utm_content: utm.utm_content || '',
    utm_details: buildUtmDetailsLine(utm),
    gclid,
    zf_referrer_name: referrer,
    zf_redirect_url: redirectUrl,
  };
}

type FieldErrors = { name?: string; phone?: string; email?: string };

function validateFields(values: { name: string; phone: string; email: string }): FieldErrors {
  const err: FieldErrors = {};
  if (!values.name || values.name.length < 2) {
    err.name = 'Full Name is required';
  }
  if (!values.phone) {
    err.phone = 'Phone is required';
  } else if (!/^\d{10}$/.test(values.phone)) {
    err.phone = 'Enter a valid 10-digit phone number';
  }
  const emailTrimmed = values.email.trim();
  if (emailTrimmed && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrimmed)) {
    err.email = 'Invalid email format';
  }
  return err;
}

const FIELD_ERROR_ORDER: (keyof FieldErrors)[] = ['name', 'phone', 'email'];

function focusFirstFieldError(next: FieldErrors, suffix: string) {
  const firstKey = FIELD_ERROR_ORDER.find((k) => next[k]);
  const idMap: Record<string, string> = {
    name: `SingleLine-${suffix}`,
    phone: `PhoneNumber-${suffix}`,
    email: `Email-${suffix}`,
  };
  const el = firstKey ? document.getElementById(idMap[firstKey]) : null;
  el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  el?.focus();
}

function readFormValues(form: HTMLFormElement) {
  const name = (
    (form.elements.namedItem('SingleLine') as HTMLInputElement | null)?.value ?? ''
  ).trim();
  const phoneRaw =
    (form.elements.namedItem('PhoneNumber_countrycode') as HTMLInputElement | null)?.value ?? '';
  const phone = phoneRaw.replace(/\D/g, '');
  const email = ((form.elements.namedItem('Email') as HTMLInputElement | null)?.value ?? '').trim();
  return { name, phone, email };
}

const Form = () => {
  const router = useRouter();
  const path = usePathname();
  const suffix = useId().replace(/:/g, '');
  const pageVisitPath =
    (router.query?.pageVisit as string | undefined) || path || router.asPath || '/';

  const formRef = useRef<HTMLFormElement>(null);

  const [errors, setErrors] = useState<FieldErrors>({});
  const [hidden, setHidden] = useState<HiddenState>(EMPTY_HIDDEN);

  /* Populate hidden marketing/attribution state from the URL/router/cookies.
   * Re-run on every router-query identity change so SPA navigations refresh
   * the values that will be POSTed. */
  useIsoLayoutEffect(() => {
    setHidden(
      computeHidden(router.isReady ? (router.query as Record<string, unknown>) : {}, pageVisitPath)
    );
  }, [router.isReady, router.query, pageVisitPath]);

  const clearFieldError = (key: keyof FieldErrors) => {
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const fresh = computeHidden(
      router.isReady ? (router.query as Record<string, unknown>) : {},
      pageVisitPath
    );
    flushSync(() => setHidden(fresh));

    const values = readFormValues(form);
    const next = validateFields(values);
    setErrors(next);
    if (Object.keys(next).length > 0) {
      focusFirstFieldError(next, suffix);
      return;
    }

    /* Normalize the phone field to digits-only so Zoho stores a clean
     * value (browser default would post whatever the user typed). */
    const phoneEl = form.elements.namedItem('PhoneNumber_countrycode') as HTMLInputElement | null;
    if (phoneEl) phoneEl.value = values.phone;

    /* Native browser POST — bypasses this React handler so we don't loop
     * back through validation, and Zoho's redirect (`zf_redirect_url`)
     * fires the same way it does on dash-ivf-next. */
    form.submit();
  };

  const fieldPill = 'w-[9em] rounded-es-full rounded-ss-full bg-gray-200 px-4 py-1 text-left';
  const fieldInput =
    'w-full rounded-ee-full rounded-se-full px-2 py-1 text-base focus:outline-none active:outline-none';

  return (
    <div className='zcwf_lblLeft crmWebToEntityForm mx-auto h-auto w-full rounded-lg bg-transparent py-8'>
      <form
        ref={formRef}
        action={zohoFormActionUrl}
        name='form'
        id={`zoho-book-form-${suffix}`}
        method='POST'
        acceptCharset='UTF-8'
        encType='multipart/form-data'
        noValidate
        onSubmit={handleSubmit}
      >
        {/* Hidden marketing/attribution fields — controlled so the values
         * React renders are the values the browser POSTs (no race with
         * hydration). */}
        <input
          type='hidden'
          name='zf_referrer_name'
          value={hidden.zf_referrer_name}
          onChange={NOOP_ONCHANGE}
        />
        <input
          type='hidden'
          name='zf_redirect_url'
          value={hidden.zf_redirect_url}
          onChange={NOOP_ONCHANGE}
        />
        <input type='hidden' name='zc_gad' value={hidden.gclid} onChange={NOOP_ONCHANGE} />
        <input type='hidden' name='utm_source' value={hidden.utm_source} onChange={NOOP_ONCHANGE} />
        <input type='hidden' name='utm_medium' value={hidden.utm_medium} onChange={NOOP_ONCHANGE} />
        <input
          type='hidden'
          name='utm_campaign'
          value={hidden.utm_campaign}
          onChange={NOOP_ONCHANGE}
        />
        <input type='hidden' name='utm_term' value={hidden.utm_term} onChange={NOOP_ONCHANGE} />
        <input
          type='hidden'
          name='utm_content'
          value={hidden.utm_content}
          onChange={NOOP_ONCHANGE}
        />
        <input
          type='hidden'
          name={zohoFormUtmDetailsFieldName}
          value={hidden.utm_details}
          onChange={NOOP_ONCHANGE}
        />
        <input type='hidden' name={zohoFormLeadSourceFieldName} defaultValue={zohoLeadSource} />
        <input
          type='hidden'
          name={zohoFormLeadSubSourceFieldName}
          defaultValue={zohoLeadSubSource}
        />
        <input
          type='hidden'
          name='Page_Visited'
          value={hidden.zf_referrer_name}
          onChange={NOOP_ONCHANGE}
        />

        <div className='mx-auto flex flex-col space-y-5 px-3'>
          <div className='mx-auto max-w-sm'>
            <label htmlFor={`SingleLine-${suffix}`} className='flex items-center justify-start'>
              <span className={fieldPill}>Full Name</span>
              <input
                type='text'
                id={`SingleLine-${suffix}`}
                name='SingleLine'
                placeholder='Enter full name'
                autoComplete='name'
                maxLength={255}
                defaultValue=''
                className={fieldInput}
                aria-invalid={errors.name ? 'true' : 'false'}
                onInput={() => clearFieldError('name')}
              />
            </label>
            {errors.name && (
              <p className='absolute ml-[1.2em] text-sm text-red-500'>{errors.name}</p>
            )}
          </div>

          <div className='mx-auto max-w-sm'>
            <label htmlFor={`PhoneNumber-${suffix}`} className='flex items-center justify-start'>
              <span className={fieldPill}>Phone</span>
              <input
                type='text'
                inputMode='numeric'
                pattern='\d{10}'
                title='10-digit mobile number'
                id={`PhoneNumber-${suffix}`}
                name='PhoneNumber_countrycode'
                placeholder='10-digit mobile number'
                autoComplete='tel'
                maxLength={10}
                defaultValue=''
                className={fieldInput}
                aria-invalid={errors.phone ? 'true' : 'false'}
                aria-required='true'
                onInput={(e) => {
                  const el = e.currentTarget;
                  const digits = el.value.replace(/\D/g, '').slice(0, 10);
                  if (el.value !== digits) {
                    el.value = digits;
                  }
                  clearFieldError('phone');
                }}
              />
            </label>
            {errors.phone && (
              <p className='absolute ml-[1.2em] text-sm text-red-500'>{errors.phone}</p>
            )}
          </div>

          <div className='mx-auto max-w-sm'>
            <label htmlFor={`Email-${suffix}`} className='flex items-center justify-start'>
              <span className={fieldPill}>Email ID</span>
              <input
                type='email'
                id={`Email-${suffix}`}
                name='Email'
                placeholder='Enter email'
                autoComplete='email'
                maxLength={255}
                defaultValue=''
                className={fieldInput}
                aria-invalid={errors.email ? 'true' : 'false'}
                onInput={() => clearFieldError('email')}
              />
            </label>
            {errors.email && (
              <p className='absolute ml-[1.2em] text-sm text-red-500'>{errors.email}</p>
            )}
          </div>
        </div>

        <div className='mx-auto mt-4 max-w-md px-6'>
          <label className='mt-4 flex justify-center space-x-3'>
            <input
              type='checkbox'
              id={`Consent-${suffix}`}
              name='Consent'
              value='Yes'
              defaultChecked
              className='h-6 w-6 cursor-pointer accent-gg-500 checked:border-gg-500 checked:bg-gg-500'
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
          >
            Get a call back
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
