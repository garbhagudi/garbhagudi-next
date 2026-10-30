/**
 * Zoho "Book your Consultation" — native HTML/CSS form POST, ported from
 * dash-ivf-next's `landing-next-zoho-html-form` (banner variant only, which is
 * all the home hero uses).
 *
 * Submission flow:
 *   1. User clicks Submit — fields are validated client-side.
 *   2. Hidden UTM/attribution inputs are flushed synchronously.
 *   3. `form.submit()` runs natively → browser POSTs multipart/form-data
 *      straight to Zoho. Thank-you redirect comes from Zoho via the
 *      `zf_redirect_url` hidden input.
 */
import { useRouter } from 'next/router';
import { useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';

import { firstQueryValue, utmFromCookies } from 'lib/zohoFormUtm';
import { type Campaign, thankYouPath } from 'sections/campaigns-bangalore-en/campaigns';
import {
  zohoDefaultUtm,
  zohoFormLeadSourceFieldName,
  zohoFormLeadSubSourceFieldName,
  zohoFormUtmDetailsFieldName,
  zohoLeadSource,
  zohoLeadSubSource,
} from 'sections/campaigns-bangalore-en/zohoForm';
import { cleanGclid, readGclid } from 'sections/campaigns-bangalore-en/zohoLeadPayload';

/* `useLayoutEffect` warns on SSR; runs pre-paint on the client so hidden
 * fields are populated before any submit can fire. */
const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

/** Same-tab backup when in-app navigation drops ?utm_* from the URL bar. */
const UTM_SESSION_KEY = 'gg_landing_next_utm_v1';

const TITLE = 'Book Free Fertility Consultation Today';
const SUBMIT_LABEL = 'Get a Call Back';

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

const INITIAL_HIDDEN_STATE = {
  zf_referrer_name: '',
  zf_redirect_url: '',
  gclid: '',
  utm_source: '',
  utm_medium: '',
  utm_campaign: '',
  utm_term: '',
  utm_content: '',
  utm_details: '',
  lead_source: zohoLeadSource,
  lead_sub_source: zohoLeadSubSource,
};
type HiddenState = typeof INITIAL_HIDDEN_STATE;

/* POST field name → state key. Order matches the Zoho HTML/CSS embed. */
const HIDDEN_FIELDS: [string, keyof HiddenState][] = [
  ['zf_referrer_name', 'zf_referrer_name'],
  ['zf_redirect_url', 'zf_redirect_url'],
  ['zc_gad', 'gclid'],
  ['utm_source', 'utm_source'],
  ['utm_medium', 'utm_medium'],
  ['utm_campaign', 'utm_campaign'],
  ['utm_term', 'utm_term'],
  ['utm_content', 'utm_content'],
  [zohoFormUtmDetailsFieldName, 'utm_details'],
  [zohoFormLeadSourceFieldName, 'lead_source'],
  [zohoFormLeadSubSourceFieldName, 'lead_sub_source'],
];

/* Visible fields. `zoho` holds the embed's metadata attributes, copied from
 * the official HTML/CSS embed — spread in because they aren't known JSX props. */
const FIELDS = [
  {
    key: 'name',
    name: 'SingleLine',
    idBase: 'SingleLine',
    label: 'Full Name',
    type: 'text',
    maxLength: 255,
    placeholder: 'Enter full name',
    autoComplete: 'name',
    zoho: { fieldtype: 1 },
  },
  {
    key: 'phone',
    name: 'PhoneNumber_countrycode',
    idBase: 'international_PhoneNumber_countrycode',
    label: 'Phone',
    type: 'text',
    maxLength: 20,
    placeholder: 'Enter phone number',
    autoComplete: 'tel',
    inputMode: 'numeric' as const,
    zoho: {
      compname: 'PhoneNumber',
      phoneformat: '1',
      iscountrycodeenabled: 'false',
      fieldtype: 11,
    },
  },
  {
    key: 'email',
    name: 'Email',
    idBase: 'Email',
    label: 'Email',
    type: 'email',
    maxLength: 255,
    placeholder: 'Enter email',
    autoComplete: 'email',
    zoho: { fieldtype: 9 },
  },
];

/** Query string plus any `?…` segment inside the hash (some trackers misplace params after `#`). */
function getMarketingSearchParams() {
  const merged = new URLSearchParams(window.location.search);
  const hash = window.location.hash || '';
  const qInHash = hash.indexOf('?');
  if (qInHash !== -1) {
    const fromHash = new URLSearchParams(hash.slice(qInHash + 1));
    fromHash.forEach((value, key) => {
      if (!merged.has(key)) merged.set(key, value);
    });
  }
  return merged;
}

function readSessionUtms() {
  try {
    const raw = sessionStorage.getItem(UTM_SESSION_KEY);
    if (!raw) return null;
    const o = JSON.parse(raw);
    return o && typeof o === 'object' ? o : null;
  } catch {
    return null;
  }
}

function writeSessionUtms(utms: Record<string, string>) {
  try {
    sessionStorage.setItem(UTM_SESSION_KEY, JSON.stringify(utms));
  } catch {
    /* private mode / quota */
  }
}

function firstNonEmpty(...candidates: unknown[]) {
  for (const c of candidates) {
    const s = typeof c === 'string' ? c.trim() : '';
    if (s) return s;
  }
  return '';
}

/** `?Lead_Source=` / `?Lead_Sub_Source=` override the CRM defaults. */
function queryOverride(value: unknown, fallback: string) {
  return typeof value === 'string' && value.trim() ? value.trim() : fallback;
}

/**
 * Compute the marketing/attribution values to POST (client only).
 * Priority for each `utm_*`: URL > router > cookie (Zoho ZFAdvLead) > sessionStorage > env default.
 */
function computeHiddenState(routerQuery, campaign: Campaign): HiddenState {
  const sp = getMarketingSearchParams();
  const sessionSaved = readSessionUtms();
  const cookieUtms = utmFromCookies();

  const utm: Record<string, string> = {};
  UTM_KEYS.forEach((key) => {
    const fromUrl = (sp.get(key) || '').trim();
    const fromRouter = firstQueryValue(routerQuery?.[key]);
    const fromCookie = cookieUtms[key] || '';
    const fromSession = typeof sessionSaved?.[key] === 'string' ? sessionSaved[key].trim() : '';
    const fallback = (zohoDefaultUtm[key] || '').trim();
    utm[key] = firstNonEmpty(fromUrl, fromRouter, fromCookie, fromSession, fallback);
  });

  const utmIdRaw = (sp.get('utm_id') || '').trim();
  const detailsParts = UTM_KEYS.filter((k) => utm[k]).map((k) => `${k}=${utm[k]}`);
  if (utmIdRaw) detailsParts.push(`utm_id=${utmIdRaw}`);

  return {
    zf_referrer_name: document.referrer || '',
    // Each campaign has its own thank-you page so GTM can attribute the conversion.
    zf_redirect_url: `${window.location.origin}${thankYouPath(campaign)}`,
    // readGclid() covers the cookie and sessionStorage after the URL/router sources.
    gclid: firstNonEmpty(
      cleanGclid(sp.get('gclid')),
      cleanGclid(firstQueryValue(routerQuery?.gclid)),
      readGclid()
    ),
    utm_source: utm.utm_source,
    utm_medium: utm.utm_medium,
    utm_campaign: utm.utm_campaign,
    utm_term: utm.utm_term,
    utm_content: utm.utm_content,
    utm_details: detailsParts.join(' | '),
    lead_source: queryOverride(routerQuery?.Lead_Source, zohoLeadSource),
    lead_sub_source: queryOverride(routerQuery?.Lead_Sub_Source, zohoLeadSubSource),
  };
}

function validateConsultationForm({ name, phone, email }) {
  const err: Record<string, string> = {};
  if (!name || name.length < 2) {
    err.name = 'Please enter your full name (at least 2 characters).';
  }
  if (!phone) {
    err.phone = 'Phone number is required.';
  } else if (!/^[0-9]{10}$/.test(phone)) {
    err.phone = 'Enter a valid 10-digit mobile number.';
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    err.email = 'Enter a valid email address.';
  }
  return err;
}

const bannerInput =
  'w-full rounded-ee-full rounded-se-full border border-transparent bg-white/95 px-2 py-1 text-base text-[#363636] focus:border-brandPink focus:outline-none focus:ring-1 focus:ring-brandPink active:outline-none';
const bannerLabelPill =
  'w-[9em] rounded-es-full rounded-ss-full bg-gray-200 px-4 py-1 text-left text-[#363636]';

export default function ZohoLeadForm({ campaign }: { campaign: Campaign }) {
  const router = useRouter();
  const suffix = useId().replace(/:/g, '');
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [hidden, setHidden] = useState(INITIAL_HIDDEN_STATE);
  // Empty until the campaign's Zoho form is created (see campaigns.ts).
  const actionUrl = campaign.zohoFormActionUrl;

  /* Re-run on every router-query identity change and persist the resolved
   * UTMs to sessionStorage as a per-tab safety net. */
  useIsoLayoutEffect(() => {
    const next = computeHiddenState(router.isReady ? router.query : {}, campaign);
    setHidden(next);
    const captured: Record<string, string> = {};
    UTM_KEYS.forEach((k) => {
      if (next[k]) captured[k] = next[k];
    });
    if (Object.keys(captured).length > 0) writeSessionUtms(captured);
  }, [router.isReady, router.query, campaign]);

  const clearFieldError = (key: string) => {
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  /* Validate, sync hidden inputs, then native POST to Zoho.
   * `form.submit()` bypasses this handler so we don't loop. */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const fresh = computeHiddenState(router.isReady ? router.query : {}, campaign);
    flushSync(() => setHidden(fresh));

    const field = (n: string) => form.elements.namedItem(n) as HTMLInputElement | null;
    const phoneEl = field('PhoneNumber_countrycode');
    const values = {
      name: (field('SingleLine')?.value ?? '').trim(),
      phone: (phoneEl?.value ?? '').replace(/\D/g, ''),
      email: (field('Email')?.value ?? '').trim(),
    };
    const next = validateConsultationForm(values);
    setErrors(next);
    const firstInvalid = FIELDS.find((f) => next[f.key]);
    if (firstInvalid) {
      const el = document.getElementById(`${firstInvalid.idBase}-${suffix}`);
      el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el?.focus();
      return;
    }

    if (phoneEl) phoneEl.value = values.phone;
    if (!actionUrl) {
      // Not connected yet: validate as normal but post nowhere.
      console.warn(
        `Zoho form not connected for this campaign; lead not sent (${thankYouPath(campaign)}).`
      );
      return;
    }
    form.submit();
  };

  /* Banner variant — teal background (provided by parent), white heading,
   * gray-pill labels left of each input. */
  return (
    <div
      className='zcwf_lblLeft crmWebToEntityForm mx-auto h-auto w-full rounded-lg bg-transparent'
      data-gg-zoho-html-form
    >
      <form
        ref={formRef}
        action={actionUrl || undefined}
        name='form'
        id={`zoho-book-form-${suffix}`}
        method='POST'
        acceptCharset='UTF-8'
        encType='multipart/form-data'
        noValidate
        onSubmit={handleSubmit}
      >
        {/* Controlled by React state so the values rendered are the values POSTed. */}
        {HIDDEN_FIELDS.map(([name, key]) => (
          <input key={name} type='hidden' name={name} value={hidden[key]} />
        ))}

        <div className='pb-4 pt-4 text-center font-[B612] text-xl font-bold text-white lg:text-2xl'>
          {TITLE}
        </div>

        <div className='mx-auto flex flex-col space-y-5 px-3'>
          {FIELDS.map(({ key, idBase, label, zoho, ...input }) => (
            <div key={key} className='relative mx-auto w-full max-w-sm'>
              <label htmlFor={`${idBase}-${suffix}`} className='flex items-center justify-start'>
                <span className={bannerLabelPill}>{label}</span>
                <input
                  id={`${idBase}-${suffix}`}
                  {...input}
                  defaultValue=''
                  className={bannerInput}
                  aria-invalid={errors[key] ? 'true' : 'false'}
                  {...zoho}
                  onInput={() => clearFieldError(key)}
                />
              </label>
              {errors[key] ? (
                <p role='alert' className='mt-1 text-sm text-red-200'>
                  {errors[key]}
                </p>
              ) : null}
            </div>
          ))}
        </div>

        <div className='mb-6 mt-6 flex items-center justify-center space-x-4'>
          <button
            type='submit'
            className='flex items-center justify-center gap-2 rounded-md bg-[#ea4b6a] px-6 py-2 text-base font-bold text-white transition hover:bg-[#ee6f88]'
          >
            {SUBMIT_LABEL}
          </button>
        </div>
      </form>
    </div>
  );
}
