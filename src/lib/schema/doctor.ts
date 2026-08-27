/**
 * Doctor profiles: ProfilePage + Person (guide section 7).
 *
 * Person is the primary entity — it is the safest type for doctor identity and
 * satisfies ProfilePage's mainEntity requirement. The optional IndividualPhysician
 * multi-typing in section 7.1 is deliberately not used; medical services are
 * described by the branch clinic instead.
 */

import {
  absoluteUrl,
  personId,
  webPageId,
  breadcrumbId,
  branchClinicId,
  orgRef,
  webSiteRef,
} from './ids';
import { omitEmpty, SITE_LANGUAGE } from './normalize';

export interface DoctorInput {
  url: string;
  name: string;
  jobTitle?: string;
  description?: string;
  imageUrl?: string;
  /** Slug of the doctor's primary branch, linked via worksFor. */
  branchSlug?: string;
  languages?: string[];
  qualifications?: string[];
  registrationNumber?: string;
  /** Full council name, e.g. "Karnataka Medical Council registration number". */
  registrationAuthority?: string;
  dateModified?: string;
}

export function buildProfilePage(input: DoctorInput) {
  return omitEmpty({
    '@type': 'ProfilePage',
    '@id': webPageId(input.url),
    url: absoluteUrl(input.url),
    name: input.jobTitle ? `${input.name} - ${input.jobTitle}` : input.name,
    mainEntity: { '@id': personId(input.url) },
    isPartOf: webSiteRef,
    breadcrumb: { '@id': breadcrumbId(input.url) },
    inLanguage: SITE_LANGUAGE,
    dateModified: input.dateModified,
  });
}

export function buildPerson(input: DoctorInput) {
  return omitEmpty({
    '@type': 'Person',
    '@id': personId(input.url),
    name: input.name,
    honorificPrefix: 'Dr.',
    url: absoluteUrl(input.url),
    image: input.imageUrl,
    jobTitle: input.jobTitle,
    description: input.description,
    worksFor: input.branchSlug ? { '@id': branchClinicId(input.branchSlug) } : undefined,
    affiliation: orgRef,
    knowsLanguage: input.languages,
    identifier:
      input.registrationNumber && input.registrationAuthority
        ? {
            '@type': 'PropertyValue',
            propertyID: input.registrationAuthority,
            value: input.registrationNumber,
          }
        : undefined,
    hasCredential: input.qualifications?.map((name) => ({
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'degree',
      name,
    })),
    hasOccupation: input.jobTitle ? { '@type': 'Occupation', name: input.jobTitle } : undefined,
  });
}
