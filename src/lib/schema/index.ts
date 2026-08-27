/**
 * Structured data (JSON-LD) for the site, per the GarbhaGudi Schema.org
 * Developer Implementation Guide.
 *
 * Page templates import from here and render the result with <JsonLd>:
 *
 *   const schema = schemaGraph(
 *     buildMedicalWebPage({ url, name, mainEntityId: procedureId(url) }),
 *     buildProcedure({ url, name, description }),
 *     buildBreadcrumb(url, [{ text: 'Treatments', link: '/treatments' }, { text: name }])
 *   );
 *   <JsonLd id='page-jsonld' data={schema} />
 *
 * Two rules the builders enforce for you:
 *
 *  - Builders return objects, never strings. <JsonLd> serialises them, so a
 *    quote or newline in CMS copy can never produce invalid JSON.
 *  - Empty values are dropped, so we only ever mark up what the page supports.
 *
 * Where the modules live:
 *   ids.ts           stable @id conventions shared across pages
 *   normalize.ts     the empty-value/text normalisation every builder applies
 *   organization.ts  WebSite + MedicalOrganization (homepage only)
 *   pages.ts         the page node, its breadcrumb, and directory lists
 *   clinic.ts        branch MedicalClinic, including the CMS blob it comes from
 *   doctor.ts        ProfilePage + Person
 *   treatments.ts    TherapeuticProcedure / MedicalCondition / Service
 *   content.ts       BlogPosting / VideoObject / FAQPage
 */

/**
 * Combines entities into the single connected @graph a page emits.
 * Missing entities are skipped, so callers can pass a conditional directly.
 */
export function schemaGraph(...entities: unknown[]) {
  const present = entities.filter(Boolean);
  if (!present.length) return undefined;
  return {
    '@context': 'https://schema.org',
    '@graph': present,
  };
}

export * from './ids';
export * from './organization';
export * from './pages';
export * from './clinic';
export * from './doctor';
export * from './treatments';
export * from './content';
