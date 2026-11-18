'use client';

import Link from 'next/link';
import {
  type FormEvent,
  type InputHTMLAttributes,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { flushSync } from 'react-dom';

import { zohoWebinarFormActionUrl } from 'data/zohoForm';
import { gclidFromCookies } from 'lib/zohoFormUtm';

/* `useLayoutEffect` would warn during SSR; this falls back to `useEffect`
 * on the server so hidden state is synced as soon as the DOM exists. */
const useIsoLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

/* React requires `value` + `onChange` together, so hidden controlled inputs
 * point at this no-op. */
const NOOP_ONCHANGE = () => {};

type HiddenState = { zf_referrer_name: string; zf_redirect_url: string };

const EMPTY_HIDDEN: HiddenState = { zf_referrer_name: '', zf_redirect_url: '' };

/* The form has no UTM fields, so the full URL (query string included) goes
 * in as the referrer to keep campaign params visible in Zoho. */
function computeHidden(): HiddenState {
  if (typeof window === 'undefined') return EMPTY_HIDDEN;
  return {
    zf_referrer_name: window.location.href,
    zf_redirect_url: `${window.location.origin}/lp/thank-you`,
  };
}

/* GTM sets `gclid=undefined` and writes "undefined" into zc_gad inputs when
 * the URL has no gclid, so treat those strings as empty. */
function cleanGclid(value: string | null | undefined): string {
  const v = (value ?? '').trim();
  return v && v !== 'undefined' && v !== 'null' ? v : '';
}

type FieldErrors = { firstName?: string; phone?: string; email?: string; consent?: string };

function readFormValues(form: HTMLFormElement) {
  const get = (name: string) =>
    ((form.elements.namedItem(name) as HTMLInputElement | null)?.value ?? '').trim();
  return {
    firstName: get('Name_First'),
    phone: get('PhoneNumber_countrycode').replace(/\D/g, ''),
    email: get('Email'),
    consent: (form.elements.namedItem('Consent') as HTMLInputElement | null)?.checked ?? false,
  };
}

function validateFields(
  values: ReturnType<typeof readFormValues>,
  requireConsent: boolean
): FieldErrors {
  const err: FieldErrors = {};
  if (!values.firstName || values.firstName.length < 2) {
    err.firstName = 'First Name is required';
  }
  if (!values.phone) {
    err.phone = 'Phone is required';
  } else if (!/^\d{10}$/.test(values.phone)) {
    err.phone = 'Enter a valid 10-digit phone number';
  }
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    err.email = 'Invalid email format';
  }
  if (requireConsent && !values.consent) {
    err.consent = 'Please accept to be contacted before submitting';
  }
  return err;
}

const FIELD_ERROR_ORDER: (keyof FieldErrors)[] = ['firstName', 'phone', 'email', 'consent'];

const STYLES = {
  /* Teal hero panel, matching the dash-ivf-next homepage banner form. */
  banner: {
    root: 'zcwf_lblLeft crmWebToEntityForm mx-auto h-auto w-full rounded-lg bg-transparent',
    title:
      'px-3 pb-4 pt-2 text-center font-[family-name:var(--font-noto-serif-tamil)] text-xl font-bold leading-snug text-white lg:text-2xl',
    fields: 'mx-auto flex flex-col space-y-4 px-3',
    fieldWrap: 'relative mx-auto w-full max-w-sm',
    fieldRow: 'flex items-center justify-start',
    fieldPill:
      'w-[8em] shrink-0 rounded-es-full rounded-ss-full bg-gray-200 px-4 py-1 text-left text-gray-800',
    fieldInput:
      'w-full min-w-0 rounded-ee-full rounded-se-full border border-transparent bg-white/95 px-2 py-1 text-base text-gray-800 focus:border-brandPink focus:outline-none focus:ring-1 focus:ring-brandPink',
    fieldError: 'mt-1 text-sm text-red-200',
    buttonWrap: 'mb-6 mt-6 flex items-center justify-center',
    button:
      'flex items-center justify-center gap-2 rounded-md bg-[#ea4b6a] px-6 py-2 text-base font-bold text-white transition hover:bg-[#ee6f88]',
  },
  /* White card in the bottom form section — same look as Performant/form's `card`. */
  card: {
    root: 'zcwf_lblLeft crmWebToEntityForm mx-auto h-auto w-full rounded-lg bg-transparent py-4',
    title: '',
    fields: 'mx-auto flex flex-col space-y-3 px-3',
    fieldWrap: 'w-full',
    fieldRow:
      'flex items-center justify-start overflow-hidden rounded-full border border-gray-300 bg-white transition focus-within:border-gg-500',
    fieldPill:
      'w-[7.5em] shrink-0 rounded-es-full rounded-ss-full bg-gray-200 px-4 py-2.5 text-left text-sm font-medium text-gray-700',
    fieldInput:
      'w-full min-w-0 rounded-ee-full rounded-se-full px-3 py-2.5 text-sm focus:outline-none active:outline-none',
    fieldError: 'mt-1 pl-4 text-xs text-red-500',
    buttonWrap: 'mt-4 px-3',
    button:
      'w-full rounded-full bg-gg-500 py-3 text-base font-bold text-white shadow-md transition hover:bg-gg-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gg-700',
  },
} as const;

interface WebinarFormProps {
  variant?: 'banner' | 'card';
  title?: string;
  submitLabel?: string;
}

const WebinarForm = ({
  variant = 'card',
  title,
  submitLabel = 'பதிவு செய்யுங்கள்',
}: WebinarFormProps) => {
  const cx = STYLES[variant];
  /* The banner panel follows dash-ivf-next and skips the consent checkbox. */
  const showConsent = variant === 'card';
  const suffix = useId().replace(/:/g, '');
  const formRef = useRef<HTMLFormElement>(null);

  const [errors, setErrors] = useState<FieldErrors>({});
  const [hidden, setHidden] = useState<HiddenState>(EMPTY_HIDDEN);

  useIsoLayoutEffect(() => {
    setHidden(computeHidden());
  }, []);

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

    flushSync(() => setHidden(computeHidden()));

    const values = readFormValues(form);
    const next = validateFields(values, showConsent);
    setErrors(next);
    const firstKey = FIELD_ERROR_ORDER.find((k) => next[k]);
    if (firstKey) {
      const el = document.getElementById(`${firstKey}-${suffix}`);
      el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el?.focus();
      return;
    }

    /* Post a clean digits-only phone, not whatever the user typed. */
    const phoneEl = form.elements.namedItem('PhoneNumber_countrycode') as HTMLInputElement | null;
    if (phoneEl) phoneEl.value = values.phone;

    const zcGadEl = form.elements.namedItem('zc_gad') as HTMLInputElement | null;
    if (zcGadEl) {
      zcGadEl.value = cleanGclid(zcGadEl.value) || cleanGclid(gclidFromCookies());
    }

    /* Native POST bypasses this handler, so validation doesn't loop. */
    form.submit();
  };

  const textField = (
    key: string,
    name: string,
    label: string,
    props: InputHTMLAttributes<HTMLInputElement>,
    error?: string
  ) => (
    <div className={cx.fieldWrap}>
      <label htmlFor={`${key}-${suffix}`} className={cx.fieldRow}>
        <span className={cx.fieldPill}>{label}</span>
        <input
          type='text'
          id={`${key}-${suffix}`}
          name={name}
          maxLength={255}
          defaultValue=''
          className={cx.fieldInput}
          aria-invalid={error ? 'true' : 'false'}
          {...props}
        />
      </label>
      {error && (
        <p role='alert' className={cx.fieldError}>
          {error}
        </p>
      )}
    </div>
  );

  return (
    <div className={cx.root}>
      <form
        ref={formRef}
        action={zohoWebinarFormActionUrl}
        name='form'
        id={`zoho-webinar-form-${suffix}`}
        method='POST'
        acceptCharset='UTF-8'
        encType='multipart/form-data'
        noValidate
        onSubmit={handleSubmit}
      >
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
        {/* Uncontrolled: sanitized and backfilled from the gclid cookie on submit. */}
        <input type='hidden' name='zc_gad' defaultValue='' />

        {title && <div className={cx.title}>{title}</div>}

        <div className={cx.fields}>
          {textField(
            'firstName',
            'Name_First',
            'First Name',
            {
              placeholder: 'Enter first name',
              autoComplete: 'given-name',
              onInput: () => clearFieldError('firstName'),
            },
            errors.firstName
          )}
          {textField('lastName', 'Name_Last', 'Last Name', {
            placeholder: 'Enter last name',
            autoComplete: 'family-name',
          })}
          {textField(
            'phone',
            'PhoneNumber_countrycode',
            'Phone',
            {
              inputMode: 'numeric',
              placeholder: '10-digit mobile number',
              autoComplete: 'tel',
              maxLength: 10,
              'aria-required': 'true',
              onInput: (e) => {
                const el = e.currentTarget;
                const digits = el.value.replace(/\D/g, '').slice(0, 10);
                if (el.value !== digits) el.value = digits;
                clearFieldError('phone');
              },
            },
            errors.phone
          )}
          {textField(
            'email',
            'Email',
            'Email',
            {
              type: 'email',
              placeholder: 'Enter email',
              autoComplete: 'email',
              onInput: () => clearFieldError('email'),
            },
            errors.email
          )}
          {textField('city', 'SingleLine', 'City', {
            placeholder: 'Enter city',
            autoComplete: 'address-level2',
          })}
        </div>

        {showConsent && (
          <div className='mx-auto mt-3 max-w-md px-3'>
            <label className='flex justify-center space-x-2'>
              <input
                type='checkbox'
                id={`consent-${suffix}`}
                name='Consent'
                value='Yes'
                className='mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-gg-500 checked:border-gg-500 checked:bg-gg-500'
                aria-invalid={errors.consent ? 'true' : 'false'}
                onChange={() => clearFieldError('consent')}
              />
              <span className='text-left text-[11px] leading-relaxed text-gray-500'>
                By submitting this form I agree to be contacted by GarbhaGudi IVF Centre using the
                contact details through SMS, WhatsApp and Phone Calls. I also agree to the
                <Link href='/legal/terms-and-conditions' className='px-1 text-gg-400 underline'>
                  Terms and Conditions
                </Link>
                and
                <Link href='/legal/privacy-policy' className='px-1 text-gg-400 underline'>
                  Privacy Policy.
                </Link>
              </span>
            </label>
            {errors.consent && (
              <p className='mt-2 text-center text-sm text-red-500'>{errors.consent}</p>
            )}
          </div>
        )}

        <div className={cx.buttonWrap}>
          <button type='submit' className={cx.button}>
            {submitLabel}
          </button>
        </div>
      </form>
    </div>
  );
};

export default WebinarForm;
