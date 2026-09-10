'use client';

import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

import { zohoChatGptFormActionUrl, zohoFormRedirectUrl } from 'data/zohoForm';
import { gclidFromCookies, utmFromCookies, utmFromWindowLocation } from 'lib/zohoFormUtm';

export interface ZohoGptLead {
  name: string;
  /** Digits only; the hook strips anything else defensively. */
  phone: string;
  email?: string;
}

const ZOHO_FIELD = {
  name: 'SingleLine',
  phone: 'PhoneNumber_countrycode',
  email: 'Email',
} as const;

/**
 * Zoho's `zcga.js` (loaded in `_document`) writes the AdWords click id into
 * an element with this id. Several forms can be mounted at once, so read it
 * defensively and fall back to the gclid cookie.
 */
function readZcGad(): string {
  if (typeof document !== 'undefined') {
    const el = document.querySelector<HTMLInputElement>('#zc_gad');
    if (el?.value) return el.value;
  }
  return gclidFromCookies();
}

function buildHiddenFields(pageVisitPath: string): Record<string, string> {
  /* Cookies first, live URL wins — same precedence as `computeHidden` in
   * ./form.tsx. The router query is skipped: `window.location.search` is
   * authoritative at submit time and needs no hydration wait. */
  const utm = { ...utmFromCookies(), ...utmFromWindowLocation() };

  const path = pageVisitPath || window.location.pathname || '/';
  const referrer = `${window.location.origin}${path.startsWith('/') ? path : `/${path}`}`;

  return {
    utm_source: utm.utm_source || '',
    utm_medium: utm.utm_medium || '',
    utm_campaign: utm.utm_campaign || '',
    utm_term: utm.utm_term || '',
    utm_content: utm.utm_content || '',
    zc_gad: readZcGad(),
    zf_referrer_name: referrer,
    zf_redirect_url: zohoFormRedirectUrl || `${window.location.origin}/lp/thank-you`,
  };
}

export function useZohoGptSubmit() {
  const router = useRouter();
  const path = usePathname();

  return useCallback(
    (lead: ZohoGptLead) => {
      if (typeof document === 'undefined') return;

      const pageVisitPath =
        (router.query?.pageVisit as string | undefined) || path || router.asPath || '/';

      const payload: Record<string, string> = {
        ...buildHiddenFields(pageVisitPath),
        [ZOHO_FIELD.name]: lead.name.trim(),
        [ZOHO_FIELD.phone]: lead.phone.replace(/\D/g, ''),
        [ZOHO_FIELD.email]: (lead.email ?? '').trim(),
      };

      const form = document.createElement('form');
      form.method = 'POST';
      form.action = zohoChatGptFormActionUrl;
      form.acceptCharset = 'UTF-8';
      form.enctype = 'multipart/form-data';
      form.style.display = 'none';

      Object.entries(payload).forEach(([name, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        input.value = value;
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
      form.remove();
    },
    [router, path]
  );
}
