/**
 * What a treatment, condition or service page is about (guide sections 9-11).
 *
 * These are semantic Schema.org types: they clarify entity classification and
 * relationships, and carry no Google rich result of their own.
 *
 * Use TherapeuticProcedure for a specific medical procedure and Service for a
 * broader commercial offering. A page should have only one clear main entity,
 * so do not emit both as competing mainEntity values.
 */

import { absoluteUrl, procedureId, conditionId, serviceId, orgRef } from './ids';
import { omitEmpty } from './normalize';
import { buildMedicalWebPage } from './pages';

const GYNECOLOGIC = 'https://schema.org/Gynecologic';

export interface ProcedureInput {
  url: string;
  name: string;
  description?: string;
}

/**
 * The pair a hand-written treatment page emits: the MedicalWebPage and the
 * procedure it is about, described by the same name and summary.
 *
 * These pages render no visible breadcrumb, so the page node claims none
 * (guide section 6). Spread into schemaGraph.
 */
export const buildProcedurePage = (input: ProcedureInput) => [
  buildMedicalWebPage({ ...input, hasBreadcrumb: false, mainEntityId: procedureId(input.url) }),
  buildProcedure(input),
];

export function buildProcedure(input: ProcedureInput) {
  return omitEmpty({
    '@type': 'TherapeuticProcedure',
    '@id': procedureId(input.url),
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.url),
    relevantSpecialty: GYNECOLOGIC,
    provider: orgRef,
  });
}

export interface ConditionInput {
  url: string;
  name: string;
  description?: string;
  /**
   * Only pass symptoms and treatments that are explicitly present and medically
   * reviewed on the page. Never generate them from a keyword list.
   */
  signOrSymptom?: string[];
  possibleTreatment?: string[];
}

export function buildCondition(input: ConditionInput) {
  return omitEmpty({
    '@type': 'MedicalCondition',
    '@id': conditionId(input.url),
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.url),
    relevantSpecialty: GYNECOLOGIC,
    signOrSymptom: input.signOrSymptom?.map((name) => ({
      '@type': 'MedicalSignOrSymptom',
      name,
    })),
    possibleTreatment: input.possibleTreatment?.map((name) => ({
      '@type': 'MedicalTherapy',
      name,
    })),
  });
}

export interface ServiceInput {
  url: string;
  name: string;
  description?: string;
  serviceType?: string;
}

export function buildService(input: ServiceInput) {
  return omitEmpty({
    '@type': 'Service',
    '@id': serviceId(input.url),
    name: input.name,
    url: absoluteUrl(input.url),
    description: input.description,
    provider: orgRef,
    areaServed: [
      { '@type': 'City', name: 'Bengaluru' },
      { '@type': 'State', name: 'Karnataka' },
    ],
    serviceType: input.serviceType,
  });
}
