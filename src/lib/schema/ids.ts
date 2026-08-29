/**
 * Stable @id conventions for GarbhaGudi structured data.
 *
 * Per the guide's section 1.1 every entity gets a stable @id, and the exact same
 * @id is reused whenever that entity is referenced from another page. That is
 * what lets a doctor page point at a branch, and every page point at the one
 * organization, without restating either. Never generate an @id per request.
 */

/** Canonical production origin. Schema must never emit staging or preview hosts. */
export const SITE_URL = 'https://www.garbhagudi.com';

/** The master GarbhaGudi organization. Declared once, on the homepage. */
export const ORG_ID = `${SITE_URL}/#organization`;

/** The website entity. Declared once, on the homepage. */
export const WEBSITE_ID = `${SITE_URL}/#website`;

/** The organization logo, referenced by the organization entity. */
export const LOGO_ID = `${SITE_URL}/#logo`;

/** Reference to the master organization, for publisher / provider / affiliation. */
export const orgRef = { '@id': ORG_ID };

/** Reference to the website, for isPartOf. */
export const webSiteRef = { '@id': WEBSITE_ID };

/**
 * Builds an absolute canonical URL from a site-relative path, dropping any
 * query string so schema never carries UTM or tracking parameters.
 */
export function absoluteUrl(path: string): string {
  if (!path) return `${SITE_URL}/`;
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path.split('?')[0];
  }
  const cleanPath = `/${path.replace(/^\/+/, '')}`.split('?')[0];
  return `${SITE_URL}${cleanPath}`;
}

const fragmentId = (url: string, fragment: string) => `${absoluteUrl(url)}#${fragment}`;

export const webPageId = (url: string) => fragmentId(url, 'webpage');
export const breadcrumbId = (url: string) => fragmentId(url, 'breadcrumb');
export const clinicId = (url: string) => fragmentId(url, 'clinic');
export const personId = (url: string) => fragmentId(url, 'person');
export const procedureId = (url: string) => fragmentId(url, 'procedure');
export const conditionId = (url: string) => fragmentId(url, 'condition');
export const serviceId = (url: string) => fragmentId(url, 'service');
export const articleId = (url: string) => fragmentId(url, 'article');
export const itemListId = (url: string) => fragmentId(url, 'itemlist');
export const faqId = (url: string) => fragmentId(url, 'faq');
export const primaryImageId = (url: string) => fragmentId(url, 'primaryimage');
export const videoId = (url: string, id: string) => fragmentId(url, `video-${id}`);

/** The @id of a branch clinic, addressed by slug rather than by page URL. */
export const branchClinicId = (slug: string) => clinicId(`/locations/${slug}`);

/** The @id of a doctor, addressed by slug rather than by page URL. */
export const doctorPersonId = (slug: string) => personId(`/fertility-experts/${slug}`);
