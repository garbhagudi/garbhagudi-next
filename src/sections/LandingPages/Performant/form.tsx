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
    redirectUrl = zohoFormRedirectUrl || `${window.location.origin}/lp/thank-you`;
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

type FieldErrors = { name?: string; phone?: string; email?: string; consent?: string };

function validateFields(values: {
  name: string;
  phone: string;
  email: string;
  consent: boolean;
}): FieldErrors {
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
  if (!values.consent) {
    err.consent = 'Please accept to be contacted before submitting';
  }
  return err;
}

const FIELD_ERROR_ORDER: (keyof FieldErrors)[] = ['name', 'phone', 'email', 'consent'];

function focusFirstFieldError(next: FieldErrors, suffix: string) {
  const firstKey = FIELD_ERROR_ORDER.find((k) => next[k]);
  const idMap: Record<string, string> = {
    name: `SingleLine-${suffix}`,
    phone: `PhoneNumber-${suffix}`,
    email: `Email-${suffix}`,
    consent: `Consent-${suffix}`,
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
  const consent = (form.elements.namedItem('Consent') as HTMLInputElement | null)?.checked ?? false;
  return { name, phone, email, consent };
}

const STYLES = {
  default: {
    root: 'zcwf_lblLeft crmWebToEntityForm mx-auto h-auto w-full rounded-lg bg-transparent py-8',
    fields: 'mx-auto flex flex-col space-y-5 px-3',
    fieldWrap: 'mx-auto max-w-sm',
    fieldRow: 'flex items-center justify-start',
    fieldPill: 'w-[9em] rounded-es-full rounded-ss-full bg-gray-200 px-4 py-1 text-left',
    fieldInput:
      'w-full rounded-ee-full rounded-se-full px-2 py-1 text-base focus:outline-none active:outline-none',
    fieldError: 'absolute ml-[1.2em] text-sm text-red-500',
    consentWrap: 'mx-auto mt-4 max-w-md px-6',
    consentLabel: 'mt-4 flex justify-center space-x-3',
    consentBox: 'h-6 w-6 cursor-pointer accent-gg-500 checked:border-gg-500 checked:bg-gg-500',
    consentText: 'text-justify text-sm text-gray-500',
    legalLink: 'px-1 text-gg-400',
    buttonWrap: 'mb-6 mt-6 flex items-center justify-center space-x-4',
    button:
      'flex items-center justify-center gap-2 rounded-md bg-gg-500 px-6 py-2 text-base font-bold text-white',
  },

  card: {
    root: 'zcwf_lblLeft crmWebToEntityForm mx-auto h-auto w-full rounded-lg bg-transparent py-4',
    fields: 'mx-auto flex flex-col space-y-3 px-3',
    fieldWrap: 'w-full',
    fieldRow:
      'flex items-center justify-start overflow-hidden rounded-full border border-gray-300 bg-white transition focus-within:border-gg-500',
    fieldPill:
      'w-[7.5em] shrink-0 rounded-es-full rounded-ss-full bg-gray-200 px-4 py-2.5 text-left text-sm font-medium text-gray-700',
    fieldInput:
      'w-full min-w-0 rounded-ee-full rounded-se-full px-3 py-2.5 text-sm focus:outline-none active:outline-none',
    fieldError: 'mt-1 pl-4 text-xs text-red-500',
    consentWrap: 'mx-auto mt-3 max-w-md px-3',
    consentLabel: 'flex justify-center space-x-2',
    consentBox:
      'mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-gg-500 checked:border-gg-500 checked:bg-gg-500',
    consentText: 'text-left text-[11px] leading-relaxed text-gray-500',
    legalLink: 'px-1 text-gg-400 underline',
    buttonWrap: 'mt-4 px-3',
    button:
      'w-full rounded-full bg-gg-500 py-3 text-base font-bold text-white shadow-md transition hover:bg-gg-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gg-700',
  },
} as const;

interface FormProps {
  showEmail?: boolean;
  variant?: 'default' | 'card';
}

const Form = ({ showEmail = true, variant = 'default' }: FormProps) => {
  const cx = STYLES[variant];
  const router = useRouter();
  const path = usePathname();
  const suffix = useId().replace(/:/g, '');
  const pageVisitPath =
    (router.query?.pageVisit as string | undefined) || path || router.asPath || '/';

  const formRef = useRef<HTMLFormElement>(null);

  const [errors, setErrors] = useState<FieldErrors>({});
  const [hidden, setHidden] = useState<HiddenState>(EMPTY_HIDDEN);

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

    const zcGadEl = form.elements.namedItem('zc_gad') as HTMLInputElement | null;
    if (zcGadEl && !zcGadEl.value) {
      const filled = document.getElementById('zc_gad') as HTMLInputElement | null;
      zcGadEl.value = filled?.value || fresh.gclid;
    }

    /* Native browser POST — bypasses this React handler so we don't loop
     * back through validation, and Zoho's redirect (`zf_redirect_url`)
     * fires the same way it does on dash-ivf-next. */
    form.submit();
  };

  return (
    <div className={cx.root}>
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
         * hydration)*/}
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
        {/* Uncontrolled so Zoho's zcga.js (loaded in _document) can populate
         * it by id; handleSubmit backfills from the gclid cookie if empty. */}
        <input type='hidden' id='zc_gad' name='zc_gad' defaultValue='' />
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

        <div className={cx.fields}>
          <div className={cx.fieldWrap}>
            <label htmlFor={`SingleLine-${suffix}`} className={cx.fieldRow}>
              <span className={cx.fieldPill}>Full Name</span>
              <input
                type='text'
                id={`SingleLine-${suffix}`}
                name='SingleLine'
                placeholder='Enter full name'
                autoComplete='name'
                maxLength={255}
                defaultValue=''
                className={cx.fieldInput}
                aria-invalid={errors.name ? 'true' : 'false'}
                onInput={() => clearFieldError('name')}
              />
            </label>
            {errors.name && <p className={cx.fieldError}>{errors.name}</p>}
          </div>

          <div className={cx.fieldWrap}>
            <label htmlFor={`PhoneNumber-${suffix}`} className={cx.fieldRow}>
              <span className={cx.fieldPill}>Phone</span>
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
                className={cx.fieldInput}
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
            {errors.phone && <p className={cx.fieldError}>{errors.phone}</p>}
          </div>

          {showEmail ? (
            <div className={cx.fieldWrap}>
              <label htmlFor={`Email-${suffix}`} className={cx.fieldRow}>
                <span className={cx.fieldPill}>Email ID</span>
                <input
                  type='email'
                  id={`Email-${suffix}`}
                  name='Email'
                  placeholder='Enter email'
                  autoComplete='email'
                  maxLength={255}
                  defaultValue=''
                  className={cx.fieldInput}
                  aria-invalid={errors.email ? 'true' : 'false'}
                  onInput={() => clearFieldError('email')}
                />
              </label>
              {errors.email && <p className={cx.fieldError}>{errors.email}</p>}
            </div>
          ) : (
            <input type='hidden' id={`Email-${suffix}`} name='Email' defaultValue='' />
          )}
        </div>

        <div className={cx.consentWrap}>
          <label className={cx.consentLabel}>
            <input
              type='checkbox'
              id={`Consent-${suffix}`}
              name='Consent'
              value='Yes'
              className={cx.consentBox}
              aria-invalid={errors.consent ? 'true' : 'false'}
              onChange={() => clearFieldError('consent')}
            />
            <span className={cx.consentText}>
              By submitting this form I agree to be contacted by GarbhaGudi IVF Centre using the
              contact details through SMS, WhatsApp and Phone Calls. I also agree to the
              <Link href='/legal/terms-and-conditions' className={cx.legalLink}>
                Terms and Conditions
              </Link>
              and
              <Link href='/legal/privacy-policy' className={cx.legalLink}>
                Privacy Policy.
              </Link>
            </span>
          </label>
          {errors.consent && (
            <p className='mt-2 text-center text-sm text-red-500'>{errors.consent}</p>
          )}
        </div>

        <div className={cx.buttonWrap}>
          <button type='submit' className={cx.button}>
            Get a call back
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
