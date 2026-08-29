/**
 * The two site-level entities, declared once on the homepage (guide section 4).
 *
 * Every other template references these by @id instead of restating them, which
 * is what stops the same organization being described differently on different
 * pages.
 */

import { ORG_ID, WEBSITE_ID, LOGO_ID, SITE_URL, orgRef } from './ids';
import { omitEmpty, SITE_LANGUAGE, FERTILITY_SPECIALTIES } from './normalize';

const ORGANIZATION_NAME = 'GarbhaGudi IVF Centre';

export interface OrganizationInput {
  logoUrl: string;
  description?: string;
  telephone?: string;
  email?: string;
  /** Official profile URLs only — never a page that merely mentions the brand. */
  sameAs?: string[];
  availableLanguage?: string[];
}

export function buildWebSite() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: ORGANIZATION_NAME,
    publisher: orgRef,
    inLanguage: SITE_LANGUAGE,
  };
}

export function buildOrganization(input: OrganizationInput) {
  return omitEmpty({
    '@type': 'MedicalOrganization',
    '@id': ORG_ID,
    name: ORGANIZATION_NAME,
    url: `${SITE_URL}/`,
    logo: {
      '@type': 'ImageObject',
      '@id': LOGO_ID,
      url: input.logoUrl,
      contentUrl: input.logoUrl,
      caption: ORGANIZATION_NAME,
    },
    image: { '@id': LOGO_ID },
    description: input.description,
    telephone: input.telephone,
    email: input.email,
    medicalSpecialty: FERTILITY_SPECIALTIES,
    sameAs: input.sameAs,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: input.telephone,
      email: input.email,
      availableLanguage: input.availableLanguage,
    },
  });
}
