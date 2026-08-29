/**
 * Branch clinics (guide section 5).
 *
 * Two layers live here: `buildClinic` produces the MedicalClinic entity from
 * clean inputs, and `buildBranchClinic` gets those inputs out of the CMS.
 *
 * The CMS route exists because branch location data is not on the Hygraph
 * Branch model — it is hand-authored per branch inside a free-form `docJsonLd`
 * field. That field used to be injected into the page verbatim, which emitted
 * `"@type": "Gynecologic"` (a MedicalSpecialty enum, not a class, so the entity
 * was untyped) and a `priceRange` shown nowhere on the page. We now read it as
 * data only and rebuild the entity here.
 *
 * The blob remains an invisible SEO-only store, which the guide's section 30
 * warns against. The follow-up is to move these values onto the Branch model
 * (guide section 29) and delete the parsing half of this file.
 */

import { absoluteUrl, clinicId, orgRef } from './ids';
import { omitEmpty, schemaDayOfWeek, FERTILITY_SPECIALTIES } from './normalize';

const CLINIC_NAME_PREFIX = 'GarbhaGudi IVF Centre';

export interface OpeningHours {
  dayOfWeek: string[];
  opens: string;
  closes: string;
}

export interface ClinicInput {
  url: string;
  name: string;
  imageUrl?: string;
  telephone?: string;
  email?: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
  };
  latitude?: number;
  longitude?: number;
  hasMap?: string;
  openingHours?: OpeningHours[];
  /** Services actually visible on this branch page, not a universal list. */
  availableService?: { name: string; url?: string }[];
  sameAs?: string[];
}

export function buildClinic(input: ClinicInput) {
  return omitEmpty({
    '@type': 'MedicalClinic',
    '@id': clinicId(input.url),
    name: input.name,
    url: absoluteUrl(input.url),
    image: input.imageUrl,
    telephone: input.telephone,
    email: input.email,
    parentOrganization: orgRef,
    medicalSpecialty: FERTILITY_SPECIALTIES,
    address: input.address
      ? {
          '@type': 'PostalAddress',
          streetAddress: input.address.streetAddress,
          addressLocality: input.address.addressLocality,
          addressRegion: input.address.addressRegion,
          postalCode: input.address.postalCode,
          addressCountry: 'IN',
        }
      : undefined,
    geo:
      typeof input.latitude === 'number' && typeof input.longitude === 'number'
        ? { '@type': 'GeoCoordinates', latitude: input.latitude, longitude: input.longitude }
        : undefined,
    hasMap: input.hasMap,
    openingHoursSpecification: input.openingHours?.map((hours) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: hours.dayOfWeek.map(schemaDayOfWeek).filter(Boolean),
      opens: hours.opens,
      closes: hours.closes,
    })),
    availableService: input.availableService?.map((service) => ({
      '@type': 'TherapeuticProcedure',
      name: service.name,
      url: service.url ? absoluteUrl(service.url) : undefined,
    })),
    sameAs: input.sameAs,
  });
}

/* -------------------------------------------------------------------- *
 * Reading the CMS docJsonLd blob
 * -------------------------------------------------------------------- */

interface CmsHours {
  dayOfWeek?: string | string[];
  opens?: string;
  closes?: string;
}

/**
 * The blob is hand-authored per branch, so its shape is not guaranteed. Fields
 * that are arrays on most branches appear as bare objects on others (Nagarabhavi
 * stores a single openingHoursSpecification object), so repeated fields are
 * typed loosely and coerced below.
 */
interface CmsBranchBlob {
  name?: string;
  image?: string;
  telephone?: string;
  email?: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
  };
  geo?: { latitude?: number | string; longitude?: number | string };
  hasMap?: string;
  openingHoursSpecification?: CmsHours | CmsHours[];
  sameAs?: string | string[];
}

/** Wraps a value that may legitimately be a single item into an array. */
function toArray<T>(value: T | T[] | undefined): T[] {
  if (value === undefined || value === null) return [];
  return Array.isArray(value) ? value : [value];
}

function parseBlob(docJsonLd: unknown): CmsBranchBlob | undefined {
  if (!docJsonLd) return undefined;
  if (typeof docJsonLd === 'object') return docJsonLd as CmsBranchBlob;
  if (typeof docJsonLd !== 'string') return undefined;
  try {
    const parsed = JSON.parse(docJsonLd);
    return parsed && typeof parsed === 'object' ? (parsed as CmsBranchBlob) : undefined;
  } catch {
    // A malformed blob must not take the page down or emit a broken entity.
    return undefined;
  }
}

function toNumber(value: unknown): number | undefined {
  const num = typeof value === 'string' ? Number(value) : value;
  return typeof num === 'number' && Number.isFinite(num) ? num : undefined;
}

/**
 * Branch names are inconsistent in the CMS ("GarbhaGudi IVF Centre, Yelahanka"
 * vs "GarbhaGudi IVF Centre - Yelahanka"). Normalise to one form.
 */
export function normaliseBranchName(title: string): string {
  if (!title) return CLINIC_NAME_PREFIX;
  const branch = title
    .trim()
    .replace(/^GarbhaGudi\s+IVF\s+Cent(re|er)\s*[,-]?\s*/i, '')
    .trim();
  return branch ? `${CLINIC_NAME_PREFIX} - ${branch}` : CLINIC_NAME_PREFIX;
}

export interface BranchInput {
  slug: string;
  title: string;
  docJsonLd?: unknown;
  mapLink?: string;
  imageUrl?: string;
  availableService?: { name: string; url?: string }[];
}

/**
 * Returns a MedicalClinic entity, or undefined when the branch has no usable
 * location data. Never returns a half-populated clinic.
 */
export function buildBranchClinic(input: BranchInput) {
  const blob = parseBlob(input.docJsonLd);
  if (!blob) return undefined;

  const openingHours = toArray(blob.openingHoursSpecification)
    .filter((hours) => hours && typeof hours === 'object')
    .map((hours) => ({
      dayOfWeek: toArray(hours.dayOfWeek),
      opens: hours.opens || '',
      closes: hours.closes || '',
    }))
    // A day with no hours is unknown, not closed — drop it rather than invent
    // 00:00-00:00 (guide section 5).
    .filter((hours) => hours.dayOfWeek.length && hours.opens && hours.closes);

  const geo = blob.geo && typeof blob.geo === 'object' ? blob.geo : undefined;
  const address = blob.address && typeof blob.address === 'object' ? blob.address : undefined;

  // priceRange is deliberately not carried over: no price is visible on the
  // branch page, and structured-data pricing must match visible content
  // (guide sections 20 and 27).
  return buildClinic({
    url: `/locations/${input.slug}`,
    name: normaliseBranchName(blob.name || input.title),
    imageUrl: blob.image || input.imageUrl,
    telephone: blob.telephone,
    email: blob.email,
    address: address && {
      ...address,
      // CMS values carry stray whitespace, e.g. " 560064".
      postalCode:
        typeof address.postalCode === 'string' ? address.postalCode.trim() : address.postalCode,
    },
    latitude: toNumber(geo?.latitude),
    longitude: toNumber(geo?.longitude),
    hasMap: blob.hasMap || input.mapLink,
    openingHours: openingHours.length ? openingHours : undefined,
    availableService: input.availableService,
    sameAs: toArray(blob.sameAs),
  });
}
