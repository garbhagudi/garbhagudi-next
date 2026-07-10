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
 * Generates MedicalClinic schema (JSON-LD) for SEO
 * @param input Clinic details
 * @returns JSON-LD string for MedicalClinic schema
 */
export interface MedicalClinicSchemaInput {
  name: string;
  description: string;
  url: string;
  telephone: string;
  medicalSpecialty?: string;
  /** City name, e.g. "Bangalore" */
  areaServed?: string;
  image?: string;
}

export function generateMedicalClinicSchema(input: MedicalClinicSchemaInput): string {
  const medicalClinic = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: input.name,
    description: input.description,
    url: input.url,
    ...(input.medicalSpecialty ? { medicalSpecialty: input.medicalSpecialty } : {}),
    ...(input.areaServed ? { areaServed: { '@type': 'City', name: input.areaServed } } : {}),
    telephone: input.telephone,
    ...(input.image ? { image: input.image } : {}),
  };

  return JSON.stringify(medicalClinic, null, 2);
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
