/**
 * The page-level entities: the node describing the page itself, its breadcrumb
 * trail, and the list entities used by directory pages.
 *
 * Every template emits exactly one page node, and points it at whatever the
 * page is really about via `aboutId` or `mainEntityId`.
 */

import {
  absoluteUrl,
  webPageId,
  breadcrumbId,
  itemListId,
  primaryImageId,
  webSiteRef,
} from './ids';
import { omitEmpty, SITE_LANGUAGE } from './normalize';

/* -------------------------------------------------------------------- *
 * Breadcrumb (guide section 6)
 * -------------------------------------------------------------------- */

export interface Crumb {
  /** Visible label. Must match the trail rendered by <BreadCrumbs>. */
  text: string;
  /** Site-relative path. Omitted on the final crumb, which is this page. */
  link?: string;
}

/**
 * Builds BreadcrumbList from the same crumbs passed to <BreadCrumbs>, so the
 * schema and the visible trail cannot drift apart.
 *
 * <BreadCrumbs> renders "Home" itself, so it is prepended here to match. Only
 * call this on pages that actually render a visible trail.
 */
export function buildBreadcrumb(pageUrl: string, crumbs: Crumb[]) {
  const trail: Crumb[] = [{ text: 'Home', link: '/' }, ...crumbs.filter((crumb) => crumb?.text)];

  return {
    '@type': 'BreadcrumbList',
    '@id': breadcrumbId(pageUrl),
    itemListElement: trail.map((crumb, index) => {
      // The final crumb is this page, so it always resolves to the canonical URL.
      const target = index === trail.length - 1 ? pageUrl : crumb.link;
      return omitEmpty({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.text,
        item: target ? absoluteUrl(target) : undefined,
      });
    }),
  };
}

/* -------------------------------------------------------------------- *
 * Page nodes
 * -------------------------------------------------------------------- */

export interface PageInput {
  url: string;
  name: string;
  description?: string;
  /** @id of the entity this page is about, e.g. a clinic. */
  aboutId?: string;
  /** @id of the page's main entity, e.g. a procedure or article. */
  mainEntityId?: string;
  /**
   * Set false on pages that render no visible breadcrumb, so the page does not
   * claim a BreadcrumbList that does not exist.
   */
  hasBreadcrumb?: boolean;
  primaryImageUrl?: string;
}

function buildPageNode(type: string, input: PageInput) {
  return omitEmpty({
    '@type': type,
    '@id': webPageId(input.url),
    url: absoluteUrl(input.url),
    name: input.name,
    description: input.description,
    isPartOf: webSiteRef,
    about: input.aboutId ? { '@id': input.aboutId } : undefined,
    mainEntity: input.mainEntityId ? { '@id': input.mainEntityId } : undefined,
    breadcrumb: input.hasBreadcrumb === false ? undefined : { '@id': breadcrumbId(input.url) },
    primaryImageOfPage: input.primaryImageUrl
      ? {
          '@type': 'ImageObject',
          '@id': primaryImageId(input.url),
          url: input.primaryImageUrl,
          contentUrl: input.primaryImageUrl,
        }
      : undefined,
    inLanguage: SITE_LANGUAGE,
  });
}

export const buildWebPage = (input: PageInput) => buildPageNode('WebPage', input);
export const buildAboutPage = (input: PageInput) => buildPageNode('AboutPage', input);
export const buildContactPage = (input: PageInput) => buildPageNode('ContactPage', input);

/** For treatment, condition and medically informational pages (guide section 8). */
export interface MedicalPageInput extends PageInput {
  /**
   * Only set where a genuine editorial review workflow exists and the reviewer
   * is identifiable on the page. Never auto-set to today's date on deploy.
   */
  lastReviewed?: string;
  reviewerPersonId?: string;
}

export function buildMedicalWebPage(input: MedicalPageInput) {
  // buildPageNode already normalised its own output, so only the extra keys
  // need cleaning — re-running omitEmpty over the whole node would traverse it
  // a second time for nothing.
  return {
    ...buildPageNode('MedicalWebPage', input),
    ...omitEmpty({
      lastReviewed: input.lastReviewed,
      reviewedBy: input.reviewerPersonId ? { '@id': input.reviewerPersonId } : undefined,
    }),
    medicalAudience: {
      '@type': 'MedicalAudience',
      audienceType: 'Patients and people seeking fertility information',
    },
  };
}

/* -------------------------------------------------------------------- *
 * Directory pages (guide section 16)
 * -------------------------------------------------------------------- */

export interface ListedItem {
  name: string;
  url: string;
}

export const buildCollectionPage = (url: string, name: string) =>
  buildPageNode('CollectionPage', { url, name, mainEntityId: itemListId(url) });

/**
 * The pair a directory page emits: the CollectionPage and the ItemList its
 * mainEntity points at. Returned together so the two cannot disagree about the
 * list's @id or its name.
 *
 * Spread into schemaGraph, which drops the ItemList when the list is empty.
 */
export const buildDirectoryPage = (url: string, name: string, items: ListedItem[]) => [
  buildCollectionPage(url, name),
  buildItemList(url, name, items),
];

export function buildItemList(url: string, name: string, items: ListedItem[]) {
  const listed = (items || []).filter((item) => item?.name && item?.url);
  // An empty list says nothing; omit it rather than emit a shell.
  if (!listed.length) return undefined;

  return omitEmpty({
    '@type': 'ItemList',
    '@id': itemListId(url),
    name,
    numberOfItems: listed.length,
    itemListElement: listed.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.url),
    })),
  });
}
