/**
 * Utility functions for generating structured data schemas (JSON-LD)
 */

export interface BreadcrumbItem {
  name: string;
  url: string;
}

/**
 * Generates BreadcrumbList schema (JSON-LD) for SEO
 * @param items Array of breadcrumb items (name and URL)
 * @returns JSON-LD string for BreadcrumbList schema
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]): string {
  const breadcrumbList = {
    '@context': 'https://schema.org/',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return JSON.stringify(breadcrumbList, null, 2);
}

/**
 * Generates FAQPage schema (JSON-LD) for SEO
 * @param faqs Array of FAQ items with question and answer
 * @returns JSON-LD string for FAQPage schema
 */
export interface FAQItem {
  question: string;
  answer: string;
}

export function generateFAQSchema(faqs: FAQItem[]): string {
  if (!faqs || faqs.length === 0) {
    return '';
  }

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return JSON.stringify(faqPage, null, 2);
}

/**
 * Helper function to escape JSON strings properly
 */
export function escapeJsonString(str: string): string {
  if (!str) return '';
  return str
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\t/g, '\\t');
}
