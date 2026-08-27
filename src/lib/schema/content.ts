/**
 * Editorial content: articles, videos and FAQs (guide sections 12, 13 and 21).
 */

import { absoluteUrl, articleId, webPageId, videoId, faqId, doctorPersonId, orgRef } from './ids';
import { omitEmpty } from './normalize';

/* -------------------------------------------------------------------- *
 * BlogPosting (guide section 12)
 * -------------------------------------------------------------------- */

export interface ArticleInput {
  url: string;
  headline: string;
  description?: string;
  /** Multiple aspect ratios are useful when available. */
  images?: (string | undefined)[];
  datePublished?: string;
  /** Should change only for meaningful edits, never on every deploy. */
  dateModified?: string;
  /** Slug of the authoring doctor, when the byline resolves to a Doctor. */
  authorDoctorSlug?: string;
  /** Byline for non-doctor authors, who have no canonical profile page. */
  authorName?: string;
  topics?: (string | undefined)[];
}

/**
 * A doctor byline is referenced by @id so it resolves to the same Person entity
 * the doctor's profile page defines. Other authors are named inline, since there
 * is no profile page to point at. An unattributed post falls back to the
 * organization rather than inventing an author.
 */
function articleAuthor(input: ArticleInput) {
  if (input.authorDoctorSlug) return { '@id': doctorPersonId(input.authorDoctorSlug) };
  if (input.authorName) return { '@type': 'Person', name: input.authorName };
  return orgRef;
}

export function buildBlogPosting(input: ArticleInput) {
  return omitEmpty({
    '@type': 'BlogPosting',
    '@id': articleId(input.url),
    url: absoluteUrl(input.url),
    headline: input.headline,
    description: input.description,
    image: input.images?.filter(Boolean),
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    author: articleAuthor(input),
    publisher: orgRef,
    mainEntityOfPage: { '@id': webPageId(input.url) },
    about: input.topics?.filter(Boolean).map((name) => ({ '@type': 'Thing', name })),
  });
}

/* -------------------------------------------------------------------- *
 * VideoObject (guide section 13)
 * -------------------------------------------------------------------- */

export interface VideoInput {
  pageUrl: string;
  /** Distinguishes multiple videos on one page. Defaults to the page's main video. */
  id?: string;
  name: string;
  description?: string;
  thumbnailUrl?: string;
  uploadDate?: string;
  /** ISO 8601 duration, e.g. PT4M35S. */
  duration?: string;
  embedUrl?: string;
  /** Omit for YouTube/Vimeo embeds rather than inventing one. */
  contentUrl?: string;
}

export function buildVideo(input: VideoInput) {
  return omitEmpty({
    '@type': 'VideoObject',
    '@id': videoId(input.pageUrl, input.id ?? 'main'),
    name: input.name,
    description: input.description,
    thumbnailUrl: input.thumbnailUrl ? [input.thumbnailUrl] : undefined,
    uploadDate: input.uploadDate,
    duration: input.duration,
    embedUrl: input.embedUrl,
    contentUrl: input.contentUrl,
    publisher: orgRef,
    isPartOf: { '@id': webPageId(input.pageUrl) },
  });
}

/* -------------------------------------------------------------------- *
 * FAQPage (guide section 21)
 *
 * Semantic markup only: Google stopped showing FAQ rich results on 7 May 2026,
 * so this is low priority and must not be presented as a rich-result feature.
 * -------------------------------------------------------------------- */

export interface FaqEntry {
  question: string;
  answer: string;
}

/** A Hygraph FAQ entry, whose answer is a rich-text node. */
interface CmsFaqEntry {
  question?: string;
  answer?: { text?: string };
}

/**
 * Adapts a Hygraph `faq` field to FaqEntry. Keeping the `answer.text` field path
 * here rather than at each page means a CMS shape change is one edit, not nine.
 */
export const toFaqEntries = (faqs?: CmsFaqEntry[]): FaqEntry[] =>
  (faqs || []).map((faq) => ({ question: faq?.question, answer: faq?.answer?.text })) as FaqEntry[];

export function buildFaqPage(url: string, faqs: FaqEntry[]) {
  const answered = (faqs || []).filter((faq) => faq?.question && faq?.answer);
  if (!answered.length) return undefined;

  return omitEmpty({
    '@type': 'FAQPage',
    '@id': faqId(url),
    mainEntity: answered.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  });
}
