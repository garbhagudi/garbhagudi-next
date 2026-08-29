/**
 * Shared values and the normalisation step every builder runs its output
 * through before it is emitted.
 */

/** Language of the English site. Kannada pages live outside this codebase. */
export const SITE_LANGUAGE = 'en-IN';

/** The specialties GarbhaGudi practises, as Schema.org MedicalSpecialty URLs. */
export const FERTILITY_SPECIALTIES = [
  'https://schema.org/Gynecologic',
  'https://schema.org/Obstetric',
];

const DAY_OF_WEEK_URLS: Record<string, string> = {
  monday: 'https://schema.org/Monday',
  tuesday: 'https://schema.org/Tuesday',
  wednesday: 'https://schema.org/Wednesday',
  thursday: 'https://schema.org/Thursday',
  friday: 'https://schema.org/Friday',
  saturday: 'https://schema.org/Saturday',
  sunday: 'https://schema.org/Sunday',
};

/** Turns "Monday", "monday" or an already-qualified URL into the day's URL. */
export function schemaDayOfWeek(day: string): string | undefined {
  if (!day) return undefined;
  if (day.startsWith('http')) return day;
  return DAY_OF_WEEK_URLS[day.trim().toLowerCase()];
}

/**
 * Recursively removes anything that would be emitted as a blank: undefined,
 * null, empty strings, and empty arrays or objects. Text is normalised to a
 * single line on the way through.
 *
 * This is what keeps unsupported properties out of the output — a branch with
 * no phone emits no `telephone` key rather than an empty one — which is the
 * guide's rule that we only mark up what the page can actually support.
 */
export function omitEmpty<T>(value: T): T {
  return clean(value) as T;
}

function clean(value: unknown): unknown {
  if (Array.isArray(value)) {
    const kept = value.map(clean).filter((item) => item !== undefined);
    return kept.length ? kept : undefined;
  }

  if (value && typeof value === 'object') {
    const kept: Record<string, unknown> = {};
    Object.entries(value as Record<string, unknown>).forEach(([key, val]) => {
      const cleaned = clean(val);
      if (cleaned !== undefined) kept[key] = cleaned;
    });
    // An object holding nothing but its @type carries no information.
    const hasContent = Object.keys(kept).some((key) => key !== '@type');
    return hasContent ? kept : undefined;
  }

  if (typeof value === 'string') {
    // CMS rich text arrives with embedded newlines, runs of whitespace, and
    // stray literal "\n" sequences (a backslash and an n, not a line break).
    const text = value
      .replace(/\\[nrt]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    return text === '' ? undefined : text;
  }

  if (value === null) return undefined;
  return value;
}
